const loadData = () => {
    const searchArea = document.getElementById("input-text");
    const searchText = searchArea.value;
    searchArea.value = "";
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => dislayMeals(data.meals));
};

const dislayMeals = (meals) => {
    const mealsContainer = document.getElementById("display-meals");
    // mealsContainer.innerHTML = "";
    mealsContainer.textContent = "";
    meals.forEach((meal) => {
        console.log(meal);
        const div = document.createElement("div");
        div.classList.add("col");
        div.innerHTML = `
            <div class="card h-100">
                <img 
                    src="${meal.strMealThumb}" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">
                        ${meal.strInstructions.slice(0, 160)}
                    </p>
                </div>
            </div>
        `;
        mealsContainer.appendChild(div);
    });
};