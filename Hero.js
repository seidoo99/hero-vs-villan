console.log("hero! started")

class Hero extends Person {
    constructor(name) {
        super(name);
    }

    render() {
        return `
        <div>
        <h3 id="heroName">${this.name}</h3>
        </div>
        <div>
        <h3 id="heroHealth">${this.health}</h3>
        </div>
        <div>
        <h3 id="heroWeapon">${this.weapon.name}</h3>
        </div>
        <div>
        <button id ="attackButtonHero">Hero attacks</button>
        </div>
        <div id="heroImage"><img src="hero.jpg" width="250px" height="250px" /></div>
        `
    }
}