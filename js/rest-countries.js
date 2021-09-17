const loadData = () => {
    fetch("https://restcountries.eu/rest/v2/all")
        .then((res) => res.json())
        .then((data) => display(data));
};
loadData();

const display = (countries) => {
    const allCountryArr = countries.map((country) => {
        return `
            <div class="country">
                <h3>${country.name}</h3>
                <h4>Currency Symbol: ${country.currencies[0].symbol}</h4>
                <img src="${country.flag}" alt="">
            </div>
        `;
    });
    document.getElementById("container").innerHTML = allCountryArr.join(" ");
    //console.log(allCountryArr.join(" "));
};
