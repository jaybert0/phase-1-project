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
    // debugger
    
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${e.target.id}`)
    .then(res => res.json())
    .then(food => food.meals.forEach(showRecipeBar))
    .finally(removeAllChildNodes(recipeBarSpan))
    // e.target.reset()
  })  
})
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function showRecipeBar(recipes) {
  // const span = document.createElement("span")
    // removeAllChildNodes(recipeBarSpan)
  const pics = document.createElement('img')
  pics.src = recipes["strMealThumb"]
  pics.id = recipes["idMeal"]
  console.log("pics showing?")
  recipeBarSpan.appendChild(pics)
}  
recipeBarSpan.addEventListener('click', (e)=> { 
    // e.preventDefault()
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${e.target.id}`)
    .then(res => res.json())
    .then(ele => displayRecipeImage(ele))
    // e.target.reset()
  }
    
    
)

// populating individual recipe after clicking on thumbnail
function displayRecipeImage(food) {
  const foodImage = document.getElementById("recipeImage")
  console.log(food)
  let youtubeLink = food.meals[0]["strYoutube"]
  function getId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    
    return (match && match[2].length === 11)
    ? match[2]
    : null;
  }
  let newYoutube = getId(youtubeLink)
  console.log("https://www.youtube.com/embed/"+newYoutube)
  foodImage.src = food.meals[0]["strMealThumb"]
  document.getElementById("recipeName").textContent = food.meals[0]["strMeal"]
  document.getElementById("recipeInstructions").textContent = food.meals[0]["strInstructions"]
  document.getElementById("youtube").src = "https://www.youtube.com/embed/"+newYoutube
    let noNull = Object.fromEntries(Object.entries(food.meals[0]).filter(([_, v]) => v != null && v != '' && v != ' '))
      console.log("noNull")
      console.log(noNull)
    let noNullIngredients = Object.fromEntries(Object.entries(noNull).filter(([key]) => key.includes('strIngredient')))
      console.log("Ingredients")
      console.log(noNullIngredients)
    let noNullMeasurements = Object.fromEntries(Object.entries(noNull).filter(([key]) => key.includes('strMeasure')))
      console.log('Measurements')
      console.log(noNullMeasurements)
    let ingArr = Object.values(noNullIngredients)
      console.log("Ingredient Values")
      console.log(ingArr)
    let meaArr = Object.values(noNullMeasurements)
      console.log("Measurements Values")
      console.log(meaArr)
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
    console.log("Thanks for the rating")
      let user_input = event.target.votes.value
      // document.querySelector('#votes-form').innerText = user_input
      document.getElementById("vote-count").textContent = user_input
      // const votes = parseInt(votes.innerText)
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
    console.log("Delish?")
      let comment = event.target.comments.value
    document.getElementById("foodComment").textContent = comment
  })
}