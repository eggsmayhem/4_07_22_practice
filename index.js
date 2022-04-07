console.log('Hello World');

// Object Literal
// Fine if an object doesn't have 'behaviour' (multiple methods), but can be an issue if it does when we try to replicate the object 

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1,
    },
    draw: function() {
        console.log('draw');
    }
};

circle.draw();

// Factory function

function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    };
}

const newCircle = createCircle(1);
newCircle.draw();

// COnstructor function

function Circle(radius) {
    console.log('this', this);
    this.radius = radius;

    let defaultLocation = {x: 0, y: 0};

    // we can allow limited access to the above private variable like so:

    this.getDefaultLocation = function() {
        return defaultLocation;
    }

    // the proper way to allow acces, though. Getters and Setters 
    // Object has a defineProperty property that takes 3 arguments, this, the name of the object, and an object that includes the method that will be invoked when accessing the property you are defining 
    // This way we can give the user access to view the private defaultLocation property of the Circle object without being able to edit it 
    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        // if you want to give access to change this value
        set: function(value) {
            if (!value.x || !value.y) {
                throw new Error('Invalid location')
            }
            defaultLocation = value;
        }
    });


    // the below is private
    let computeOptimumLocation = function(factor) {
        
    }
    // the below is public
    this.draw = function() {
        this.computeOptimumLocation(0.1);
        console.log('draw');
    }
}

const newerCircle = new Circle(1);
newerCircle.draw();

// You can use factory or constructor functions to make an object, no real difference. Java and C# devs often like to use constructor because they look like Class constructors in their original language, although JS doesn't have classes 

let x = {};
// when you do this, a constructor is made
//  let x = new Object{};
//  Every object has a construcor property which references the function used to create that object 

// In JS, functions are objects 

newCircle.location = { x: 1};

// enumeration 

for (let key in circle) {
    console.log(key, circle[key]);
}

if ('radius' in circle) {
    console.log(`Circle has a radius of ${circle.radius}`);
}

// Abstraction: Hide the details and complexity of your Objects, partially so your users can't access them and fuck them up 

// Exercize

// Make a stopwaatch with 3 methods, start, stop, and reset. You cannot start/stop twice in a row, unless you reset. THe duration property displays the amount of time that passed between start and stop. 


function Test() {
    this.radius = radius;

    let defaultLocation = {x: 0, y: 0};

    // we can allow limited access to the above private variable like so:

    this.getDefaultLocation = function() {
        return defaultLocation;
    }

    // the proper way to allow acces, though. Getters and Setters 
    // Object has a defineProperty property that takes 3 arguments, this, the name of the object, and an object that includes the method that will be invoked when accessing the property you are defining 
    // This way we can give the user access to view the private defaultLocation property of the Circle object without being able to edit it 
    Object.defineProperty(this, 'duration', {
        get: function() {
            return defaultLocation;
        },
        // if you want to give access to change this value
        set: function(value) {
            if (!value.x || !value.y) {
                throw new Error('Invalid location')
            }
            defaultLocation = value;
        }
    });


    // the below is private
    let computeOptimumLocation = function(factor) {
        
    }
    // the below is public
    this.draw = function() {
        this.computeOptimumLocation(0.1);
        console.log('draw');
    }
}

function Stopwatch() {
    let stopTime = 0;
    let startTime = 0;
    let status = "stopped";
    this.start = function() {
        if (status === "stopped" || status === "reset") {
            startTime = new Date();
        }
        else {
            console.log('Watch is already started! Try stopping or resetting to proceed');
        }
        status = 'started';
        
    }
    this.stop = function() {
        if (status === 'started') {
            stopTime = new Date();
            let totalTime = stopTime - startTime;
            console.log(`The watch has been running for ${totalTime} milliseconds`);
        }
        else {
            console.log('Watch has not been started yet');
        }
        status = 'stopped';
    }
    this.reset = function() {
        status = 'stopped';
        stopTime = 0;
        startTime = 0;
    }
};

const watch = new Stopwatch(); 

// The watch I made without peeking works great, but I still don't really undestand Object.property yet, or about how to properly apply abstraction to allow users to access read from an object without being able to overwrite the property. Also need to review getters and setters. 

// Reviewing these concepts from class 22
