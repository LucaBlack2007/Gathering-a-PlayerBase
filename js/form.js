class Form {
    constructor() {}

    display() {
        var title = createElement('h1');
        title.html("My Car Racing Game");
        title.position(650, 200); 

        var input = createInput("Name");
        var button = createButton("join");
        var greeting = createElement("h3");
        
        input.position(650, 300);
        button.position(800, 300);
        
        button.mousePressed(function() {
            input.hide();
            button.hide();

            var name = input.value();
            playercount++;
            player.update(name);
            player.updateCount(playercount);
        
            greeting.html("hello, welcome to the game :)", name);
            greeting.position(670, 250);
        }); 
    }

}