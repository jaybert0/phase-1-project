function init() {
  handleForm()
  resetVoteCount()
  enterComment()
}
document.addEventListener("DOMContentLoaded", init)

// Global Variables
const recipeBar = document.getElementById('recipeBar');
const recipeBarSpan = document.getElementById('recipeBarSpan');
const recipeBox = document.getElementById('recipeBox');
const proteinBox = document.getElementById('proteinBox');
const proteinInBox = document.querySelectorAll(".proteinInBox")

// initial fetch and populating of thumbnail bar
proteinInBox.forEach((ele) => {
  ele.addEventListener('click', (e)=> { 
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${e.target.id}`)
    .then(res => res.json())
    .then(food => food.meals.forEach(showRecipeBar))
    .finally(removeAllChildNodes(recipeBarSpan))
  })  
})
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function showRecipeBar(recipes) {
  const pics = document.createElement('img')
  pics.src = recipes["strMealThumb"]
  pics.id = recipes["idMeal"]
  recipeBarSpan.appendChild(pics)
}  

// populating individual recipe after clicking on thumbnail
recipeBarSpan.addEventListener('click', (e)=> { 
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${e.target.id}`)
    .then(res => res.json())
    .then(ele => displayRecipeImage(ele))
  }   
)
function displayRecipeImage(food) {
  const foodImage = document.getElementById("recipeImage")
  // For youtube embed including extracting video id
  let youtubeLink = food.meals[0]["strYoutube"]
  function getId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    // console.log(regExp)
    // console.log(match)
    return (match && match[2].length === 11)
    ? match[2]
    : null;
  }
  let newYoutube = getId(youtubeLink)

  foodImage.src = food.meals[0]["strMealThumb"]
  document.getElementById("recipeName").textContent = food.meals[0]["strMeal"]
  document.getElementById("recipeInstructions").textContent = food.meals[0]["strInstructions"]
  document.getElementById("youtube").src = "https://www.youtube.com/embed/"+newYoutube
    // filtering for null/undefined/""/" "
    let noNull = Object.fromEntries(Object.entries(food.meals[0]).filter(([_, v]) => v != null && v != '' && v != ' '))
    let noNullIngredients = Object.fromEntries(Object.entries(noNull).filter(([key]) => key.includes('strIngredient')))
    let noNullMeasurements = Object.fromEntries(Object.entries(noNull).filter(([key]) => key.includes('strMeasure')))
    let ingArr = Object.values(noNullIngredients)
    let meaArr = Object.values(noNullMeasurements)
    let ingList = ""
      for(let i=0; i<ingArr.length; i++) {
        ingList += '<li>' + meaArr[i] + ' ' + ingArr[i]; 
      }
        ingList = '<ul>' + ingList +  '</ul>'
  document.getElementById("recipeIngredient").innerHTML = ingList
}
function handleForm(){
  document.getElementById('votes-form').addEventListener('submit', (event) => {
    event.preventDefault();
    
      let user_input = event.target.votes.value
      document.getElementById("vote-count").textContent = user_input
  })
}
function resetVoteCount(){
  document.querySelector('#reset-btn').addEventListener('click', (e) => {
      const votes = document.querySelector('#vote-count')
      votes.innerText = "0"
  })
}

// comment form
function enterComment() {
  document.getElementById('comment-form').addEventListener('submit', (event) => {
    event.preventDefault();

      let comment = event.target.comments.value
    document.getElementById("foodComment").textContent = comment
  })
}