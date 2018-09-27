
var button1 = document.getElementById('example1');
var text1 = document.getElementById('example1_text');

var button12 = document.getElementById('example12');
var text12 = document.getElementById('example12_text');

// Global variables
var model = 'MERCEDES',
    owner = 'PEPE',
    km = '100';

var car = {
    model: 'BMW',
    owner: 'Adrian',
    km: '100000',
    printInformation: function () {
        var text = this.owner + ' has a ' + this.model + ' with ' + this.km + ' km';
        console.log(text);
        return text;
    }
}

function printInformation() {
    var text = this.owner + ' has a ' + this.model + ' with ' + this.km + ' km';
    console.log(text);
    return text;
}

// This get the context of the object car
var output1 = car.printInformation(); // Adrian has a BMW with 100000

// It's the same than window.printInformation()
var output12 = printInformation(); // PEPE has a MERCEDES with 100 



button1.addEventListener('click', function () {
    text1.innerHTML += output1;
})
button12.addEventListener('click', function () {
    text12.innerHTML += output12;
})

// We would get an error if we used this.text1.innerHTML += output 
// In that case this refers to the global button object 

    // button.addEventListener('click', function () {
    //     this.text1.innerHTML += output; // Error. Cannot find innerHTML of undefined
    // })

// However using arrow functions that would not be a problem. Arrow function
// fix the 'this' to the context where it's been defined (window)

    // button.addEventListener('click', () => {
    //     this.text1.innerHTML += output;  // Adrian has a BMW with 10000
    // })