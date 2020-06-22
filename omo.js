function Player(myName, myScore) {
    this.name = myName;
    this.score = myScore;
}


function displayLeaderboard(Players) {
    let theExport = "";
    Players.sort((aPlayer, bPlayer) => bPlayer.score - aPlayer.score);
    Players.forEach((player) => theExport += '<tr><td>' + player.name + '</td><td>' + player.score + '</td></tr>');
    document.getElementById("thingy").innerHTML = theExport; //Why have good ID's when you can have bad ones? | Who needs children when we can use innerHTML?
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

function displayLeaderboard(data) {
    let theExport = "";
    //clear old dom
    const Players = [...data]
    Players.sort((aPlayer, bPlayer) => bPlayer.score - aPlayer.score);
    Players.forEach((player) => theExport += '<tr><td>' + player.name + '</td><td>' + player.score + '</td></tr>');
    document.getElementById("thingy").innerHTML = theExport; //Why have good ID's when you can have bad ones? | Who needs children when we can use innerHTML?
}


render();

console.log(Response.json.players[0].name)