
//case 1

const fn = function () {
    console.log("fn => this", this);
};

fn(); //undefined

//case 2

const book = {
    title: "AAA",
    showThis() {
        console.log("showThis => this", this);
    },
showTitle(){
    console.log("showTitle => this.title", this.title);
},
};

book.showThis();// will be link on this object

const outerShowThis = book.showThis;
outerShowThis();//undefined

const outerShowTitle = book.showTitle;
outerShowTitle();//error: can't read property -  undefined


//case 3

const makeChangeColor(){
    const changeColor = function (color) {
        console.log("changeColor => this", this);
        this.color = color;
    };

    changeColor()//undefined

    const sweater = {
        color: "teal",
    };

    sweater.updateColor = changeColor;

    sweater.updateColor("red");//this will link on sweater

    return sweater.updateColor;
};

const swapColor = makeChangeColor();

swapColor("blue");//undefined


//case 4

const makeChangeColor = function () {
    const changeColor = function (color) {
        console.log("changeColor => this", this);
        this.color = color;
    };

    return changeColor;
};

const updateColor = makeChangeColor();

updateColor("yellow");//undefined

const hat = {
    color: "blue",
    updateColor;
};

hat.updateColor("orange");// this will link on object hat


//case 5

const counter = {
    value: 0,
    increment(value) {
        console.log("increment => this", this);
        this.value += value;
    },
    decrement(value) {
        console.log("decrement => this", this);
        this.value -= value;
    },
};

const updateCounter = function (value, operation) {
    operation(value); // undefined
};

updateCounter(10, counter.increment);// undefined
updateCounter(5, counter.decrement);// undefined


// call and aply

const showThis = function () {
    console.log("showThis => this", this);
}

showThis();// undefined

const objA = {
    a: 5,
    b: 10,
}

showThis.call(objA, 20, 30, 40) // this will link on objA с произвольным колличеством аргументов

showThis.apply(objA,[20, 30, 40])// тоже самое только с массивом произвольных аргументов

const changeColor = function (color) {
    console.log("changeColor => this", this);
    this.color = color;
};

const hat = {
    color: "black",
};

changeColor.call(hat, "orange");

const sweater = {
    color: "green",
}

changeColor.call(sweater, "blue");


// bind

const changeHatColor = changeColor.bind(hat);
const changeSweaterColor = changeColor.bind(sweater);


const counter = {
    value: 0,
    increment(value) {
        console.log("increment => this", this);
        this.value += value;
    },
    decrement(value) {
        console.log("decrement => this", this);
        this.value -= value;
    },
};

const updateCounter = function (value, operation) {
    operation(value); // undefined
};

updateCounter(10, counter.increment.bind(counter));// fixed
updateCounter(5, counter.decrement.bind(counter));// fixed


// Prototype

const objC = {
    z: 5,
}

const objB = Object.create(objC);
objB.y = 2

console.log(objC);

console.log(objB);

console.log(objB.y);
console.log(objB.z);

const objA = Object.create(objB);
objA.x = 1;

console.log(objA);

objA.z = 1000; //создаст элемент в об А, по прототипу в Об С не изменит

const dummyObj = {
    message: "Это собственное свойство объекта",
}

console.log(dummyObj.message); //Это собственное свойство объекта

const dummyObj = Object.create({
    message: "Это свойство прототипа объекта",
})

console.log(dummyObj.message);// Это свойство прототипа объекта

// class constructor

const Car = function (brand, model, price) {
    
    this.brand = brand;
    
    this.model = model;
    
    this.price = price;    

 };// функция конструктор с большой буквы

const myCar = new Car("Audi", "Q5", "40000");

const myCar = new Car(10);

console.log(myCar);// вызываем объект который является экземплятром класса Car

// better option передачи

const Car = function (config = {}) {// если параметы не передают, то в config записывается пустой объект
    
    this.brand = config.brand;
    
    this.model = config.model;
    
    this.price = config.price;
}

// деструктуризировано
const Car = function (config = {}) {
    
    const { brand, model, price } = config;

    this.brand = brand;
    
    this.model = model;
    
    this.price = price;
}

//op2 destruct
const Car = function ({ brand, model, price } = {}) {

    this.brand = brand;
    
    this.model = model;
    
    this.price = price;

    }

Car.prototype.sayHi = function () {
    console.log("Car.prototype.sayHi => this", this);

    console.log("Hello :) ");
}

Car.prototype.changePrice = function (newPrice) {
    this.price = newPrice;
}

const myCar = new Car ({
    brand: "Audi",
    model: "Q5",
    price: "40000",
})

myCar.sayHi();

myCar.changePrice(10000);

const myCar2 = new Car ({
    brand: "BMW",
    model: "X5",
    price: "40000",
})

const myCar3 = new Car ({
    brand: "Audi",
    model: "Q7",
    price: "70000",
})

const User = function ({email, password} = {}) {
    this.email = email;
    this.password = password;
}

User.prototype.changeEmail = function (newMail) {
    
    this.email = newMail;
}

const mango = new User({ email: "mango@gmail.com", password: 11111 });

objA = {
    x: 5,
}

console.log(objA.__proto__ === Object.prototype);

// practice

const CounterPlugin = function ({rootSelector, initialValue = 0, step = 1} = {}) {
    this._rootSelecto = rootSelector;
    this._value = initialValue;
    this.step = step;
}

CounterPlugin.prototype.increment = function () {
    this._value += this._step;
}

CounterPlugin.prototype.decrement = function () {
    this._value -= this._step;
}

const counter1 = new CounterPlugin({rootSelector: '#counter1' step: 10});


//Classes

class Car1 {
    constructor({brand, model, price} = {}) {
        
        static AAA = 'AAA'; // static property
    
    static description = 'car description';
    
    static logInfo(carObj) {
        console.log('Car.logInfo -> carObj', carObj);

    #test = 'test' // private property
    }

        this.brand = brand;
        this.model = model;
        this.price = price;
        
        
    }

    changePrice(newPrice) {
        this.price = newPrice;
    }

    update
 };

const carInstance = newCar1({
    brand = 'Audi',
    _model = "Q5",
    price = '40000',
}

    setModel(){
        this.model = newModel;
    }
    
    getModel(){
        return this.model;
    }

    // getter

    get model(){
        return this._model
    }

    // setter

    set model(){
        this._model = newModel;
    }
);

console.log(Object.getPrototypeOf(carInstance) === Car1.prototype);

console.log(carInstance.getModel());

carInstance.setModel(Q4);


const obj = {
    _a = 100,

    get a() {
        return this._a;
    },

    set a(x) {
        this._a = x;
    },
}

//inheritance

// class Warrior {

//     constructor(){

//         this.name = '';
//         this.xp = '';
//         this.weapon = '';
            
//     }

//     gainXp(){
        
//     }
// }


// class Mage {

//     constructor(){

//         this.name = '';
//         this.xp = '';
//         this.spells = [];
            
//     }

//     gainXp() {
        
//     }
// }

//base class 

class Hero {
    constructor({name = 'hero', xp = '0'} = {}){
        this.name = name;
        this.xp = xp;
    }

    gainXp(amount) {
        
        console.log(`${this.name} gain ${amount} experience`);
        
        this.xp += amount;
    }
}

const mango = new Hero({ name: 'mango', xp: '1000' });

class Warrior extends Hero {
    constructor(config) {
        super(config);
        
    }
}

const mango = new Warrior({ name: 'mango', xp: '1000' });


class Hero {
    constructor(name = 'hero', xp = 0){
        this.name = name;
        this.xp = xp;
    }

    gainXp(amount) {
        
        console.log(`${this.name} gain ${amount} experience`);
        
        this.xp += amount;
    }
}

const mango = new Hero({ name: 'mango', xp: '1000' });

class Warrior extends Hero {
    constructor(name, xp, weapon) {
        super(name, xp);
        
        this.weapon = weapon; 
    }

    attack() {
        console.log(`${this.name} attacks using ${this.weapon}`);
    }
}

const mango = new Warrior('mango', '1000', 'alebard');

class Mage extends Hero {
    constructor(name, xp, spells = []) {
        super(name, xp)

        this.spells = spells;
    }
}

class Berserk extends Warrior {
    constructor({ warcry, ...restProps } = {}) {
       super(restProps)

    this.warcry = warcary; 

    }

    babyRage() {
        
        console.log(this.warcry);
    }

    
}
