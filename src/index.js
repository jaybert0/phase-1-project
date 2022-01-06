function init() {
  handleForm()
  resetVoteCount()
  enterComment()
}
// init()
document.addEventListener("DOMContentLoaded", init)

// Global Variables
const recipeBar = document.getElementById('recipeBar');
const recipeBarSpan = document.getElementById('recipeBarSpan');
const recipeBox = document.getElementById('recipeBox');
const proteinBox = document.getElementById('proteinBox');
const proteinInBox = document.querySelectorAll(".proteinInBox")


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

function enterComment() {
  document.getElementById('comment-form').addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("Delish?")
      let comment = event.target.comments.value
    document.getElementById("foodComment").textContent = comment
  })
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


// Need to troubleshoot images constantly populating on click
recipeBarSpan.addEventListener('click', (e)=> { 
    // e.preventDefault()
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${e.target.id}`)
    .then(res => res.json())
    .then(ele => displayRecipeImage(ele))
    // e.target.reset()
  }
    
    
)
// populating recipeBox
function displayRecipeImage(food) {
  const foodImage = document.getElementById("recipeImage")
  console.log(food)
  foodImage.src = food.meals[0]["strMealThumb"]
  document.getElementById("recipeName").textContent = food.meals[0]["strMeal"]
  document.getElementById("recipeIngredient").innerHTML = (`${food.meals[0]["strMeasure1"]} ${food.meals[0]["strIngredient1"]}<br>
    ${food.meals[0]["strMeasure2"]} ${food.meals[0]["strIngredient2"]}<br>
    ${food.meals[0]["strMeasure3"]} ${food.meals[0]["strIngredient3"]}<br>
    ${food.meals[0]["strMeasure4"]} ${food.meals[0]["strIngredient4"]}<br>
    ${food.meals[0]["strMeasure5"]} ${food.meals[0]["strIngredient5"]}<br>
    ${food.meals[0]["strMeasure6"]} ${food.meals[0]["strIngredient6"]}<br>
    ${food.meals[0]["strMeasure7"]} ${food.meals[0]["strIngredient7"]}<br>
    ${food.meals[0]["strMeasure8"]} ${food.meals[0]["strIngredient8"]}<br>
    ${food.meals[0]["strMeasure9"]} ${food.meals[0]["strIngredient9"]}<br>
    ${food.meals[0]["strMeasure10"]} ${food.meals[0]["strIngredient10"]}<br>
    ${food.meals[0]["strMeasure11"]} ${food.meals[0]["strIngredient11"]}<br>
    ${food.meals[0]["strMeasure12"]} ${food.meals[0]["strIngredient12"]}<br>
    ${food.meals[0]["strMeasure13"]} ${food.meals[0]["strIngredient13"]}<br>
    ${food.meals[0]["strMeasure14"]} ${food.meals[0]["strIngredient14"]}<br>
    ${food.meals[0]["strMeasure15"]} ${food.meals[0]["strIngredient15"]}<br>
    ${food.meals[0]["strMeasure16"]} ${food.meals[0]["strIngredient16"]}<br>
    ${food.meals[0]["strMeasure17"]} ${food.meals[0]["strIngredient17"]}<br>
    ${food.meals[0]["strMeasure18"]} ${food.meals[0]["strIngredient18"]}<br>
    ${food.meals[0]["strMeasure19"]} ${food.meals[0]["strIngredient19"]}<br>
    ${food.meals[0]["strMeasure20"]} ${food.meals[0]["strIngredient20"]}`) }
