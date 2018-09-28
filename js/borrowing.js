
var button5 = document.getElementById('example5');
var text5 = document.getElementById('example5_text');
var output5 = '';

var car = {
    model_5: 'BMW',
    owner_5: 'Adrian',
    km_5: '100000',
    printInformation:  null,
}

var car_2 = {
    model_5: 'MERCEDES',
    owner_5: 'Juan',
    km_5: '10',

    printInformation:  function () {
        var text = this.owner_5 + ' has a ' + this.model_5 + ' with ' + this.km_5 + ' km';
        console.log(text);
        output5 += text;
    },
}

// printInformation method has the context of car_2
// car.printInformation = car_2.printInformation;
// car.printInformation(); // Adrian has a BMW with 100000 km

// We keep the car_2 context with the bind
car.printInformation = car_2.printInformation.bind(car_2);
car.printInformation(); // Juan has a MERCEDES with 10 km

button5.addEventListener('click', function () {
    text5.innerHTML += output5;
})