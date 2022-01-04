const recipeBar = document.getElementById('recipeBar');
const recipeBox = document.getElementById('recipeBox');
const proteinBox = document.getElementById('proteinBox');

// document.addEventListener('DOMContentLoaded', () => {
//   proteinBox.addEventListener('click', (e)=> {
//   fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${e.id}`)
//     .then(res => res.json())
//     .then(console.log)})})
  

proteinBox.addEventListener('click', (e)=> {
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${e.id}`)
    .then(res => res.json())
    .then(console.log)
})
//     // .then((food) => food.forEach(showRecipeBar)))
//     // .then(recipes => recipes.forEach(showRecipeBar))
// )

// function showRecipeBar(recipes) {
//   // const span = document.createElement("span")
//   const pics = document.createElement('img')
//   pics.src = recipes["strMealThumb"]
//   console.log("pics showing?")
//   recipeBar.appendChild(pics)}