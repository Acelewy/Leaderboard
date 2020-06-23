function Player(myName, myScore) {
    this.name = myName;
    this.score = myScore;
}


function displayLeaderboard(Players) {

    Players.sort((aPlayer, bPlayer) => bPlayer.score - aPlayer.score);
    drawTable(Players.slice(0, 3), "highlight");
    drawTable(Players.slice(3));
}

function drawTable(players, className) {
    let theExport = "";
    players.forEach((player) => theExport += `<tr class="${className}">
    <td> ${player.name}</td>
    <td>${player.score}</td>
    <td>
<a href="https://twitter.com/intent/tweet?text=My%20Points%20on%20Leaderboard%20is  ${player.score}">Share on Twitter</a></td>

    </tr>`);


    document.getElementById("thingy").innerHTML += theExport; //Why have good ID's when you can have bad ones? | Who needs children when we can use innerHTML?

}

let players;

function render() {
    fetch("./players.json")
        .then(resp => resp.json())
        .then(players => {
            displayLeaderboard(players);
        })
        .catch(err => {

        })

}




render();