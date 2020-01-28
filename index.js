function theBeatlesPlay(players, instruments) {
    var todosPlayers = [];
    for (var i=0; i < players.length; i++) {
        todosPlayers.push(players[i] + " plays " + instruments[i]);
    }
    return todosPlayers;
}

function johnLennonFacts() {
    var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
    var newFacts = [];
    var i = 0;
    while (i < facts.length) {
        newFacts.push(facts[i] +"!!!");
        i++;
    }
    return newFacts

}