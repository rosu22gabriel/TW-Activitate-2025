var object = {value: 1};

var add = function(a, b) {
    return this.value + a + b;
};

// Apel cu contextul plus lista de argumente
console.log(add.call(object, 2, 3)); // 6

// Apel cu contextul plus vector de argumente
var args = [2, 3];
add.apply(object, args);

// Legate de context plus apel cu lista de argumente
var bound = add.bind(object);
bound(2, 3); // 6

// Contextul global nu are definita variabila value
add(2, 3); // Cannot read property 'value' of undefined 

