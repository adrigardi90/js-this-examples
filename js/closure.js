

var button3 = document.getElementById('example3');
var text3 = document.getElementById('example3_text');
var output3 = '';

var cars = {
    models:[
        {
            model_3: 'BMW',
            km_3: '100000'
        },
        {
            model_3: 'MERCEDES',
            km_3: '100'
        }
    ],
    owner_3: 'Adrian',
    printInformation: function (){

        // When cars.printInformation() this.models point to the models array of cars obj
        this.models.forEach( function(car) {
            // However in the closure, the this points to window
            var text = this.owner_3 + ' has a ' + car.model_3 + ' with ' + car.km_3 + ' km <br>';
            console.log(text);
            output3 += text;
        })
    },
    printInformationArrow: function (){

        // When cars.printInformation() this.models point to the models array of cars obj
        this.models.forEach( (car) => {
            // The arrow function fixes automatically this context when it was defined, so this inside the closure still
            // points to the context of cars obj (object invoking the method)
            var text = this.owner_3 + ' has a ' + car.model_3 + ' with ' + car.km_3 + ' km <br>';
            console.log(text);
            output3 += text;
        })
    },
    printInformationThat: function (){

        var that = this;
        // When cars.printInformation() this.models point to the models array of cars obj
        this.models.forEach( function (car) {
            // that var keep the this context of the cars obj
            var text = that.owner_3 + ' has a ' + car.model_3 + ' with ' + car.km_3 + ' km <br>';
            console.log(text);
            output3 += text;
        })
    }
}

// undefined has a BMW with 100000 km 
// undefined has a MERCEDES with 100 km
//cars.printInformation();

// Adrian has a BMW with 100000 km 
// Adrian has a MERCEDES with 100 km
//cars.printInformationArrow();

// Adrian has a BMW with 100000 km 
// Adrian has a MERCEDES with 100 km
cars.printInformationThat();

button3.addEventListener('click', function () {
    text3.innerHTML += output3;
})
