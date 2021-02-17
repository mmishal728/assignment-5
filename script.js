const searchBtn =document.getElementById('searchBtn');
const mealList=document.getElementById('meal');
const mealDetails=document.querySelector('recipe-details-content');

// even-listener
searchBtn.addEventListener('click', getMealList);
mealList.addEventListener('click', getMealRecipe);

function getMealList(){
let searchInputText=document.getElementById('search-item').value.trim();
fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputText}`)
.then(res=>res.json())
.then(data => {
            let html = "";
        if(data.meals){
            data.meals.forEach(meal => {
        html += `
        <div id="recipe-btn" class="recipe-btn  data-id = "${meal.idMeal}">
        <div class=" meal-img"  id="meal-img">
                <img src="${meal.strMealThumb}" alt="food">
        </div>
        <h3>${meal.strMeal} </h3>
        <p class="recipe-info" id="recipe-info" >  </p>
        </div> 
        `;
        });
        } else {
            html ="Sorry, We didn't find any meal.";
        } 
    mealList.innerHTML = html;
});
} 

// get recipe 
function getMealRecipe(mealRecipe){
    mealRecipe.preventDefault();
    if(e.target.classList.contains ('recipe-btn')){
    let mealItem = mealRecipe.target.parentElement.parentElement;
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
    .then(res => res.json())
    .then(data =>{
        console.log(data);
    })
    }
}