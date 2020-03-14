console.log("script.js is started")

heroName = prompt("enter hero name", "Xmen");
villianName = prompt("enter bad guy name", "Ghost");

//script.js file can access all js files including the base class (person)
//create a new hero class by new key word for hero and villian
let playerHero = new Hero(heroName);
let playerVillian = new Villian(villianName);


// let hero and villian handle weapon by calling equip weapon method in to each object

playerHero.equipWeapon(new weapon("sword"));
playerVillian.equipWeapon(new weapon("arrow"));

//get elements for each container inside index.html and render HTML
// for hero
let heroContainer = document.getElementById('heroContainer')
heroContainer.innerHTML = player1.render();

//for villian
let villianContainer = document.getElementById('villianContainer')
villianContainer.innerHTML = playerVillian.render();

// get elements of DOM for health
let playerHeroHealth = document.getElementById('heroHealth');
let playerVillianHealth = document.getElementById('villianHealth');

//initiate the button by click event listner

document.getElementById('attackButtonHero').addEventListener('click', function() {
    playerHero.attack(playerVillian);
    if (playerVillian.health <= 0) {
        alert("Victory! hero smashed villian!");
    }
    playerVillianHealth.innerHTML = playerVillian.health;
})

document.getElementById('attackButtonVillian').addEventListener('click', function() {
    playerVillian.attack(playerHero);
    if (playerHero.health <= 0) {
        alert("sad! Villian won!");
    }
    playerHeroHealth.innerHTML = playerHero.health;
});