const recipeBar = document.getElementById('recipeBar');
const recipeBox = document.getElementById('recipeBox');
const proteinBox = document.getElementById('proteinBox');
const proteinInBox = document.querySelectorAll(".proteinInBox")
// document.addEventListener('DOMContentLoaded', () => {
//   proteinInBox.addEventListener('click', (e)=> {
//   fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${e.id}`)
//     .then(res => res.json())
//     .then(console.log)})})
  

document.querySelectorAll(".proteinInBox").forEach((ele) => {
  ele.addEventListener('click', (e)=> { 
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${e.target.id}`)
    .then(res => res.json())
    .then(console.log)
  })  
})


// function showRecipeBar(recipes) {
//   // const span = document.createElement("span")
//   const pics = document.createElement('img')
//   pics.src = recipes["strMealThumb"]
//   console.log("pics showing?")
//   recipeBar.appendChild(pics)}