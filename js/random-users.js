const loadData = () => {
    fetch("https://randomuser.me/api/?results=20")
        .then((res) => res.json())
        .then((data) => displayUsers(data.results));
};
loadData();

const displayUsers = (users) => {
    // console.log(users);
    const userDiv = document.getElementById("users");
    users.forEach((user) => {
        // const p = document.createElement("p");
        // p.innerText = `Email: ${user.email}`;
        // userDiv.appendChild(p);
        const div = document.createElement("p");
        div.style.border = "1px solid black";
        div.style.borderRadius = "10px";
        div.style.padding = "10px";
        div.innerHTML = `
            <img src="${user.picture.large}" alt="" width="100%">
            <p>Email: ${user.email}</p>
            <p>Name: ${user.name.title} ${user.name.first} ${user.name.last}</p>
            <p>Location: ${user.location.street.name}, ${user.location.street.number}, ${user.location.city}, ${user.location.country}</p>
        `;
        userDiv.appendChild(div);
    });
};
