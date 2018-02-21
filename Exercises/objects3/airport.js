"use strict";

(function App() {

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;

        this.getData = function () {
            return this.name + " " + this.surname;
        };
    }

    function Seat(number, category) {
        this.number = number || (function () {
            return Math.round(((100 - 10) * Math.random()) + 10);
        })();
        this.category = category || "e";

        this.getData = function () {
            return this.number + ", " + this.category.toUpperCase();
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

        this.getData = function () {
            return this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear() + ", " + this.relation;
        };

        this.addPassenger = function (passenger) {
            this.listOfPassengers.push(passenger);
        };
    }

    function Airport() {
        this.name = "Nikola Tesla";
        this.listOfFlights = [];

        this.getData = function () {
            var airportOutput = "";
            var numOfPassengers = 0;

            this.listOfFlights.forEach(function (flight) {
                airportOutput += "\n\t" + flight.getData();
                flight.listOfPassengers.forEach(function (passenger) {
                    airportOutput += "\n\t\t" + passenger.getData();
                    numOfPassengers++;
                });
            });

            return "Airport: " + this.name + ", total passengers: " + numOfPassengers + airportOutput;
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

    flight1.addPassenger(passenger1);
    flight1.addPassenger(passenger2);
    flight2.addPassenger(passenger3);
    flight2.addPassenger(passenger4);

    airport.addFlight(flight1);
    airport.addFlight(flight2);

    console.log(airport.getData());

})();