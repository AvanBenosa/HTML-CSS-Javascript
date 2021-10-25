function Car(options){
    this.title = options.title
};

Car.prototype.drive = function(options){
    return 'vroom';
}

function Toyota(options){
    Car.call(this, options)
    this.title = options.title
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;


Toyota.prototype.honk = function(){
    return 'vbeep';
}

//example

class Car {
    constructor({title}){  
        this.title = title
    }
    drive(){
        return 'vroom'
    }
}
const car = new Car( {title : 'Toyota'});
car.drive // print vroom

class Toyota extends Car {
    constructor(options){
        super(options); // call the parent method Car.constructor();
        this.color = option.color;
    }
    honk(){
        return 'beep'
    }
}
const toyota = new Toyota({color : 'red'});
toyota.honk(); //display beep
