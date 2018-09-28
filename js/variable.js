var button4 = document.getElementById('example4');
var text4 = document.getElementById('example4_text');
var output4 = '';

var car = {
    model_4: 'BMW',
    owner_4: 'Adrian',
    km_4: '100000',

    printInformation:  function () {
        var text = this.owner_4 + ' has a ' + this.model_4 + ' with ' + this.km_4 + ' km';
        console.log(text);
        output4 += text;
    },

    printInformationArrow: () => {
        var text = this.owner_4 + ' has a ' + this.model_4 + ' with ' + this.km_4 + ' km';
        console.log('Arrow: ' + text);
        output4 += text;
    }
}

var myFunction = car.printInformation; 
var myArrowFunction = car.printInformationArrow;
var myBindFunction = car.printInformation.bind(car); 
// We loose the context when we assign the method to a variable and after that, we try to invoke it

// myFunction(); // undefined has a undefined with undefined km
// myArrowFunction(); Arrow: undefined has a undefined with undefined km
myBindFunction();

button4.addEventListener('click', function() {
    text4.innerHTML += output4;
}) 