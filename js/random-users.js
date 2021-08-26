const loadData = () => {
    fetch("https://randomuser.me/api/?results=5")
        .then((res) => res.json())
        .then((data) => displayUsers(data.results));
};
loadData();

const displayUsers = (users) => {
    // console.log(users);
    const userDiv = document.getElementById("users");
    users.forEach((user) => {
        const p = document.createElement("p");
        p.innerText = `Email: ${user.email}`;
        userDiv.appendChild(p);
    });
};
