const loadData = () => {
    fetch("https://randomuser.me/api/")
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
        userDiv.innerHTML = `
            <img src="${user.picture.large}" alt="">
            <p>Email: ${user.email}</p>
            <p>Name: ${user.name.title} ${user.name.first} ${user.name.last}</p>
            <p>Location: ${user.location.street.name}, ${user.location.street.number}, ${user.location.city}, ${user.location.country}</p>
        `;
    });
};
