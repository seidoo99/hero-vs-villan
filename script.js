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
const heroContainer = document.getElementById('heroContainer')
heroContainer.innerHTML = player1.renderHero();

//for villian
const villianContainer = document.getElementById('villianContainer')
villianContainer.innerHTML = playerVillian.renderVillian();

// these variables are change every time 
var playerHeroHealth = document.getElementById('heroHealth');
var playerVillianHealth = document.getElementById('villianHealth');

//initiate the button by click ebent listner

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
        alert("Villian won!");
    }
    playerHeroHealth.innerHTML = playerHero.health;
});