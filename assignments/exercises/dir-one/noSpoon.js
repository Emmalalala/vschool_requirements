let randomItems = {
    type: {
        notebook: {
            color: 'brown',
            pages: 200,
            open: true,
        },
        pen: {
            brand: 'BIC',
            color: 'black',
            uncapped: false,
            'color amount': 1,
        },
        desk: {
            computer: {
                color: 'black',
                isOpen: true,
                isOn: true,
                'plugged-in': 'charging',
                computerOn (){
                    console.log("Is the computer on: " + randomItems.type.desk.computer['isOn']);
                },
                computer_cable: {
                    color: 'white',
                    name: 'lightning',
                    brand: 'Apple',
                },
            },
        },
    },
}

console.log(randomItems.type.desk.computer.computerOn());