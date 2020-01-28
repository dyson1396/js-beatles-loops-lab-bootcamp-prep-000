function theBeatlesPlay(players, instruments) {
    var todosPlayers = [];
    for (var i=0; i < players.length; i++) {
        todosPlayers.push(players[i] + " plays " + instruments[i]);
    }
    return todosPlayers;
}

