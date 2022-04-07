// Hello, object

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// Check for emptiness 


let testobj = {};

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true; 
}

isEmpty(testobj);

// sum object properties

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

function returnSum(obj) {
    let sum = 0;
    for (let key in obj) {
        sum+=obj[key];
    }
    return sum; 
}

returnSum(salaries);

// multiply numeric property values by two 
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

  function multiplyNumeric(obj) {
      for (let key in obj) {
          if (typeof obj[key] == 'number') {
              obj[key]*=2
          }
      }
  }

  multiplyNumeric(menu);