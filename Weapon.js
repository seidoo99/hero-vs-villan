console.log("weapon! started");
class weapon {
    constructor(name) {
        this.name = name;
        // function randomNumber (max, min){
        //     return Math.random * (max - min) + min ;
        // }
        this.damage = Math.floor(Math.random() * 10) + 10;
    }
}