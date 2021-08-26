const loadData = () => {
    fetch("https://restcountries.eu/rest/v2/all")
        .then((res) => res.json())
        .then((data) => displayCountries(data));
};
loadData();

const displayCountries = (countries) => {
    const countryDiv = document.getElementById("countries");
    countryDiv.classList.add("display");
    //filter by region
    const asia = countries.filter((country) => country.region == "Asia");
    //const europe = countries.filter((country) => country.region == "Europe");

    asia.forEach((country) => {
        const div = document.createElement("div");
        div.classList.add("country");
        const h3 = document.createElement("h3");
        h3.innerText = `${country.name}`;
        div.appendChild(h3);
        const p = document.createElement("p");
        p.innerText = `Region: ${country.region}`;
        div.appendChild(p);
        countryDiv.appendChild(div);
    });
};
