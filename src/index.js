const recipeBar = document.getElementById('recipeBar');
const recipeBarSpan = document.getElementById('recipeBarSpan');
const recipeBox = document.getElementById('recipeBox');
const proteinBox = document.getElementById('proteinBox');
const proteinInBox = document.querySelectorAll(".proteinInBox")


document.querySelectorAll(".proteinInBox").forEach((ele) => {
  ele.addEventListener('click', (e)=> { 
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${e.target.id}`)
    .then(res => res.json())
    .then(food => food.meals.forEach(showRecipeBar))
      // {
      // // debugger
      // const pics = document.createElement('img')
      // food.forEach(foodItem => {
      //   pics.src = food["strMealThumb"]
      //   recipeBar.appendChild(pics)
      // })
      // // pics.src = food["strMealThumb"].forEach()
      // // recipeBar.appendChild(pics)
      // } 
      // )
  })  
})


function showRecipeBar(recipes) {
  // const span = document.createElement("span")
  const pics = document.createElement('img')
  pics.src = recipes["strMealThumb"]
  pics.id = recipes["idMeal"]
  console.log("pics showing?")
  recipeBarSpan.appendChild(pics)
  
}  
// document.querySelectorAll("#recipeBarSpan").addEventListener('click', () => console.log("click"))
document.getElementById("recipeBarSpan").addEventListener('click', (e)=> { 
    
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${e.target.id}`)
    .then(res => res.json())
    .then(ele => displayRecipeImage(ele))
    }



)

function displayRecipeImage(food) {
  const foodImage = document.getElementById("recipeImage")
  console.log(food)
  foodImage.src = food.meals[0]["strMealThumb"]
  document.getElementById("recipeName").textContent = food.meals[0]["strMeal"]
  document.getElementById("recipeIngredient").innerHTML = (`${food.meals[0]["strIngredient1"]}<br>${food.meals[0]["strIngredient2"]}`) }

