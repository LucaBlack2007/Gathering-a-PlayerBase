class Player {
    constructor() {}

    update(name) {
        var index = "player" + playercount;
        database.ref(index).set({
            name: name
        });
    }

    getCount() {
        var index = database.ref('playercount');
        index.on("value", function(data) {
           playercount = data.val(); 
        });
    }

    updateCount(count) {
        database.ref('/').update({
            playercount: count
        });
    }
}