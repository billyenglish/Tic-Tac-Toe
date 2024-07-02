const onePlayer = function() {
    console.log("One Player");
}

const twoPlayer = function() {
    console.log("Two Players");
}

const oneOrTwoPlayers = function(playerSelection) {
    let selection = playerSelection;

    return function playerGameSelection() {
        selection === "One Player" ? onePlayer() : twoPlayer();
    }
}

let player = oneOrTwoPlayers("Two Players");
console.log(player("playerOne"));