const loadData = async () => {
    document.getElementById("not-found").classList.remove("display"); //clears prev msg
    document.getElementById("spinner").classList.add("display"); // show loading spinner
    document.getElementById("players").innerHTML = ""; // clears players container
    document.getElementById("player-details").innerHTML = ""; // clears prev details box
    const searchText = document.getElementById("searchText");

    const url = `https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${searchText.value}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPlayer(data.player);
};

const displayPlayer = (players) => {
    document.getElementById("spinner").classList.remove("display"); //remove spinner

    const playerContainer = document.getElementById("players");
    playerContainer.innerHTML = ""; // clear players container
    if (players == null) {
        document.getElementById("not-found").classList.add("display");
    } else {
        players.forEach((player) => {
            // console.log(player);
            const div = document.createElement("div");
            div.classList.add("col");
            div.innerHTML = `
                <div class="card h-100 border-0 shadow">
                    <img
                        src="${
                            player.strCutout ??
                            "https://via.placeholder.com/600/211c94"
                        }" 
                        class="card-img-top" alt="..." 
                    />
                    <div class="card-body text-center">
                        <h5 class="card-title">${player.strPlayer}</h5>
                        <p class="card-text">
                        ${
                            player.strDescriptionEN?.slice(0, 120) ??
                            "No descrriptions found"
                        }
                        </p>
                        <button onclick="loadDetails('${
                            player.idPlayer
                        }')" class="btn btn-primary">Details</button>
                    </div>
                </div>
            `;
            playerContainer.appendChild(div);
        });
    }
};

const loadDetails = async (id) => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayDetails(data.players[0]);
};

const displayDetails = (player) => {
    const details = document.getElementById("player-details");
    details.textContent = "";
    details.innerHTML = `
        <div class="card p-3 mb-3 mx-auto bg-light border-0 shadow" style="max-width: 540px">
            <div class="row g-0">
                    <div class="col-md-4">
                        <img
                            src="${
                                player.strCutout ??
                                "https://via.placeholder.com/600/211c94"
                            }"
                            class="img-fluid rounded-start"
                            alt="..."
                        />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${player.strPlayer}</h5>
                            <p class="m-0">
                                Nationality: ${
                                    player.strNationality ?? "Not found"
                                }
                            </p>
                            <p class="m-0">
                                Team: ${player.strTeam2 ?? "Not found"}
                            </p>
                            <p class="m-0">
                                Club: ${player.strTeam ?? "Not found"}
                            </p>
                            <p class="m-0">
                                Position: ${player.strPosition ?? "Not found"}
                            </p>
                        </div>
                    </div>
            </div>
        </div>
    `;
};
