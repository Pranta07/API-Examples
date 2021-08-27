const randomMeals = async () => {
    // fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
    //     .then((res) => res.json())
    //     .then((data) => displayMeals(data.meals));
    const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );
    const data = await res.json();
    displayMeals(data.meals);
};
randomMeals();

// fetch data using dynamic url
const loadData = () => {
    const searchArea = document.getElementById("input-text");
    const searchText = searchArea.value;
    searchArea.value = "";

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => displayMeals(data.meals));
};

// add meals to meals container
const displayMeals = (meals) => {
    const mealsContainer = document.getElementById("display-meals");
    // mealsContainer.innerHTML = "";
    mealsContainer.textContent = ""; // clears meal container
    if (meals == null) {
        document.getElementById("not-found").classList.add("display");
    } else {
        // remove no results found
        document.getElementById("not-found").classList.remove("display");
        // add meals
        meals.forEach((meal) => {
            //console.log(meal);
            const div = document.createElement("div");
            div.classList.add("col");
            div.innerHTML = `
                <div 
                    onclick="mealFetchById(${meal.idMeal})" 
                    class="card h-100 border-0 shadow"
                    >
                    <img 
                        src="${
                            meal.strMealThumb
                        }" class="card-img-top" alt="..." />
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
    }
};

const mealFetchById = (id) => {
    // console.log(id);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => mealDetails(data.meals[0]));
};

const mealDetails = (meal) => {
    const details = document.getElementById("meal-details");
    details.textContent = ""; //clears everything on each calls
    details.innerHTML = `
        <div class="card border border-0 shadow mb-3 mx-auto" style="max-width: 540px">
            <div class="row g-0 card-body">
                    <div class="col-md-4">
                        <img
                            src="${meal.strMealThumb}"
                            class="img-fluid rounded-start"
                            alt="..."
                        />
                    </div>
                    <div class="col-md-8">
                        <div class="ps-3">
                            <h5 class="card-title">${meal.strMeal}</h5>
                            <p class="card-text">
                            ${meal.strInstructions.slice(0, 100)}
                            </p>
                            <a 
                            href="${meal.strYoutube}" 
                            class="btn btn-primary">See Recipe</a>
                        </div>
                    </div>
            </div>
        </div>
    `;
};
