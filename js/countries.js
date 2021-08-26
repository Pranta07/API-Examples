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
        div.setAttribute("id", `${country.name}`);
        /* const h3 = document.createElement("h3");
        h3.innerText = `${country.name}`;
        div.appendChild(h3);

        const p = document.createElement("p");
        p.innerText = `Region: ${country.region}`;
        div.appendChild(p);

        const btn = document.createElement("button");
        btn.innerText = "Details";
        div.appendChild(btn); */
        div.innerHTML = `
            <h3>${country.name}</h3>
            <p>Region: ${country.region}</p>
            <button onclick="loadDetails('${country.name}')">Details</button>
        `;
        countryDiv.appendChild(div);
    });
};

const loadDetails = (name) => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    // console.log(url);
    fetch(url)
        .then((res) => res.json())
        .then((data) => showDetails(data[0]));
};

const showDetails = (country) => {
    // const imgUrl = country.flag;
    console.log(country);
    const div = document.getElementById(`${country.name}`);
    div.style.backgroundImage = `url('${country.flag}')`;
    div.style.backgroundSize = "100% 150px";
    div.style.backgroundRepeat = "no-repeat";
    div.style.backgroundClip = "content-box";

    const p = document.createElement("p");
    p.innerText = `Population: ${country.population}`;
    div.appendChild(p);

    const p2 = document.createElement("p2");
    p2.innerText = `Capital: ${country.capital}`;
    div.appendChild(p2);
};
