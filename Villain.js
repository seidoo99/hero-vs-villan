console.log("villian.js started")

class Villian extends Person {
    constructor(name) {
        super(name);
    }

    renderVillian() {
        return `
        <div>
        <h3 id="villianName">${this.name}</h3>
        </div>
        <div>
        <h3 id="villianHealth">${this.health}</h3>
        </div>
        <div>
        <h3 id="villianWeapon">${this.weapon.name}</h3>
        </div>
        <div>
        <button id ="attackButtonvillian">villian attacks</button>
        </div>
        <div id="villainImage"><img src="villain.jpg" width="250px" height="250px" /></div>
        `
    }
}