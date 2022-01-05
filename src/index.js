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
    // e.target.reset()
  })  
})


function showRecipeBar(recipes) {
  // const span = document.createElement("span")
  // debugger
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
  document.getElementById("recipeIngredient").innerHTML = (`${food.meals[0]["strIngredient1"]}<br>
    ${food.meals[0]["strIngredient2"]}<br>
    ${food.meals[0]["strIngredient3"]}<br>
    ${food.meals[0]["strIngredient4"]}<br>
    ${food.meals[0]["strIngredient5"]}<br>
    ${food.meals[0]["strIngredient6"]}<br>
    ${food.meals[0]["strIngredient7"]}<br>
    ${food.meals[0]["strIngredient8"]}<br>
    ${food.meals[0]["strIngredient9"]}<br>
    ${food.meals[0]["strIngredient10"]}<br>
    ${food.meals[0]["strIngredient11"]}<br>
    ${food.meals[0]["strIngredient12"]}<br>
    ${food.meals[0]["strIngredient13"]}<br>
    ${food.meals[0]["strIngredient14"]}<br>
    ${food.meals[0]["strIngredient15"]}<br>
    ${food.meals[0]["strIngredient16"]}<br>
    ${food.meals[0]["strIngredient17"]}<br>
    ${food.meals[0]["strIngredient18"]}<br>
    ${food.meals[0]["strIngredient19"]}<br>
    ${food.meals[0]["strIngredient20"]}`) }

