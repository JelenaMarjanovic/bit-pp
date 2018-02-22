"use strict";

(function App() {

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
        this.fullName = name + " " + surname;

        this.getData = function () {
            return this.fullName;
        };
    }

    function Seat(number, category) {
        this.number = number || (function () {
            return Math.round(((100 - 10) * Math.random()) + 10);
        })();
        this.category = category || "e";

        this.getData = function () {
            var categoryName = "";
            if (this.category == "b") {
                categoryName = "business";
            } else {
                categoryName = "economy";
            }

            return this.number + ", " + categoryName;
        };
    }

    function Passenger(person, seat) {
        this.person = person;
        this.seat = seat;

        this.getData = function () {
            return this.seat.getData() + ", " + this.person.getData();
        };
    }

    function Flight(relation, date) {
        this.relation = relation;
        this.date = new Date(date);
        this.listOfPassengers = [];

        this.getNumOfBusinessPassengers = function () {
            var counter = 0;

            this.listOfPassengers.forEach(function (passenger) {
                if (passenger.seat.category === "b") {
                    counter++;
                }
            });

            return counter;
        };

        this.getData = function () {
            var relation = [];
            var relationArr = this.relation.slice().split(" - ");

            relationArr.forEach(function (city) {
                var cityArr = city.split("");
                var firstConsonant = cityArr[0];
                var lastConsonant = "";

                cityArr.forEach(function (letter) {
                    if (!(/^[aeiou]$/i).test(letter)) {
                        lastConsonant = letter;
                    }
                });

                relation.push(firstConsonant + lastConsonant.toUpperCase());
            });


            return this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear() + ", " + relation.join(" - ");
        };

        this.addPassenger = function (passenger) {
            if (this.listOfPassengers.length === 100) {
                console.log("This flight is full!\n");
                return;
            }

            for (var i = 0; i < this.listOfPassengers.length; i++) {
                if (passenger.seat.number === this.listOfPassengers[i].seat.number) {
                    console.log("Two passengers can not have the same seat number!\n");
                    return;
                }

                if (passenger.person.fullName === this.listOfPassengers[i].person.fullName) {

                    this.listOfPassengers.splice(i, 1, passenger);
                    console.log("This passenger's seat is changed.\n");
                    return;
                }
            }

            this.listOfPassengers.push(passenger);
        };
    }

    function Airport() {
        this.name = "Nikola Tesla";
        this.listOfFlights = [];

        this.getData = function () {
            var airportOutput = "";
            var numOfPassengers = 0;
            var totalBusinessPassengers = 0;

            this.listOfFlights.forEach(function (flight) {
                var businessPassengersPerFlight = flight.getNumOfBusinessPassengers();

                airportOutput += "\n\t" + flight.getData() + ", business passengers: " + businessPassengersPerFlight;

                flight.listOfPassengers.forEach(function (passenger) {
                    airportOutput += "\n\t\t" + passenger.getData();
                    numOfPassengers++;
                });

                totalBusinessPassengers += businessPassengersPerFlight;
            });

            return "Airport: " + this.name + ", total passengers: " + numOfPassengers + ", business passengers: " + totalBusinessPassengers + airportOutput;
        };

        this.addFlight = function (flight) {
            this.listOfFlights.push(flight);
        };
    }

    function createFlight(relation, date) {
        return new Flight(relation, date);
    }

    function createPassenger(firstName, lastName, seatNumber, category) {
        return new Passenger(new Person(firstName, lastName), new Seat(seatNumber, category));
    }

    var airport = new Airport();

    var flight1 = createFlight("Belgrade - New York", "Oct 25 2017");
    var flight2 = createFlight("Barcelona - Belgrade", "Nov 11 2017");

    var passenger1 = createPassenger("John", "Snow", 1, "b");
    var passenger2 = createPassenger("Cersei", "Lannister", 2, "b");
    var passenger3 = createPassenger("Daenerys", "Targaryen", 14);
    var passenger4 = createPassenger("Tyrion", "Lannister");
    var passengerTest = createPassenger("Jaime", "Lannister", 7, "b");

    flight1.addPassenger(passenger1);
    flight1.addPassenger(passenger2);
    flight2.addPassenger(passenger3);
    flight2.addPassenger(passenger4);
    flight2.addPassenger(passengerTest);

    airport.addFlight(flight1);
    airport.addFlight(flight2);

    console.log(airport.getData());

})();