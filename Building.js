class Building{
    constructor(name, street, state){
        this._name = name;
        this._street = street;
        this._state = state; 
    }

    get name(){
        return this._name;
    }
    
    get street(){
        return this._street;
    }

    get state(){
        return this._state;
    }

    getAddress(){
        return `${this._name} is located at ${this._street}, ${this._state}`;
    }
}


class Office extends Building{
    constructor(name, street, city, workforce){
        super(name, street, city, workforce)
        this._workforce = workforce;
    }

    get workforce(){
        return this._workforce;
    }

    getWorkforce(){
        return `${this._name} has about ${this._workforce}, workers`;
    }
}


let epicTower = new Office("Epic Tower", "Ikorodu road", "Lagos", 1800);
console.log(epicTower.workforce);
console.log(epicTower.getAddress());
console.log(epicTower.getWorkforce());
