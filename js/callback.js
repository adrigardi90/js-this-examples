
var button2 = document.getElementById('example2');
var text2 = document.getElementById('example2_text');

var car = {
    model1: 'BMW',
    owner1: 'Adrian',
    km1: '100000',

    printInformation:  function () {
        var text = this.owner1 + ' has a ' + this.model1 + ' with ' + this.km1 + ' km';
        console.log(text);
        text2.innerHTML += text;
    },

    printInformationArrow: () => {
        var text = this.owner1 + ' has a ' + this.model1 + ' with ' + this.km1;
        console.log(this.owner1 + ' has a ' + this.model1 + ' with ' + this.km1);
        text2.innerHTML += text;
    }
}

// this would take the context of the button object
//button2.addEventListener('click', car.printInformation) // undefined has a undefined with undefined

// We need to bind the callback method with the this context of the car
button2.addEventListener('click', car.printInformation.bind(car)) // Adrian has a BMW with 100000


// If we define the prinInformation method with arrow function, the this takes the context where it's been 
// defined, hence, this points to window
// So when we use the method as a callback function, it will try to get this.owner/this.model1/this.km1 from the window object

// button2.addEventListener('click', car.printInformationArrow)  // undefined has a undefined with undefined
// button2.addEventListener('click', car.printInformationArrow.bind(car)) // Still undefined has a undefined with undefined



