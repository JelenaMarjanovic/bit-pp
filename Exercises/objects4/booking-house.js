"use strict";

(function () {

    const Continent = {
        EUROPE: 'EU',
        ASIA: 'AS',
        AFRICA: 'AF',
        SOUTH_AMERICA: 'SA',
        NORTH_AMERICA: 'NA',
        AUSTRALIA: 'AU'
    };

    Object.freeze(Continent);

    function Country(name, odds, continent) {
        this.name = name;
        this.odds = odds;
        this.continent = continent;
    }

    function Person(name, surname, dateOfBirth) {
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = new Date(dateOfBirth);

        this.getData = function () {
            var today = new Date();
            var personAge = today.getFullYear() - this.dateOfBirth.getFullYear();

            return this.name + " " + this.surname + ", " + personAge;
        };
    }

    function Player(person, betAmount, country) {
        this.person = person;
        this.betAmount = betAmount;
        this.country = country.toUpperCase();

        this.getData = function () {
            return this.country + ", " + this.betAmount.toFixed(2) + " eur, " + this.person.getData();
        };
    }

    function Address(country, city, postalCode, streetAndNumber) {
        this.country = country.toUpperCase();
        this.city = city;
        this.postalCode = postalCode;
        this.streetAndNumber = streetAndNumber;

        this.getData = function () {
            var street = this.streetAndNumber.split(" ")[0];

            return street + ", " + this.postalCode + " " + this.city;
        };
    }

    function BettingPlace(address) {
        this.address = address;
        this.listOfPlayers = [];

        this.getNumberOfPlayers = function () {
            return this.listOfPlayers.length;
        };

        this.allBets = function () {
            var sumOfAllBets = 0

            this.listOfPlayers.forEach(function (player) {

                sumOfAllBets += player.betAmount;
            });

            return sumOfAllBets;
        };

        this.getData = function () {
            return this.address.getData() + ", sum of all bets: " + this.allBets().toFixed(2) + " eur";
        };

        this.addPlayer = function (player) {
            this.listOfPlayers.push(player);
        };
    }

    function BettingHouse(competition) {
        this.competition = competition;
        this.listOfBettingPlaces = [];

        this.getNumberOfBettingPlaces = function () {
            return this.listOfBettingPlaces.length;
        };

        this.getNumberOfAllBets = function () {
            var numberOfAllBets = 0;

            this.listOfBettingPlaces.forEach(function (bettingPlace) {
                numberOfAllBets += bettingPlace.getNumberOfPlayers();
            });

            return numberOfAllBets;
        };

        this.getData = function () {
            var bettingHouseOutput = "";
            var betsOnSerbia = 0;

            this.listOfBettingPlaces.forEach(function (bettingPlace) {
                bettingHouseOutput += "\n\t" + bettingPlace.getData();

                bettingPlace.listOfPlayers.forEach(function (player) {

                    bettingHouseOutput += "\n\t\t" + player.getData();

                    if (player.country === "SR") {
                        betsOnSerbia++;
                    }
                });
            });

            return this.competition + ", " + this.getNumberOfBettingPlaces() + " betting places, " + this.getNumberOfAllBets() + " bets" + bettingHouseOutput + "\nThere are " + betsOnSerbia + " bets on Serbia";
        };

        this.addBettingPlace = function (bettingPlace) {
            this.listOfBettingPlaces.push(bettingPlace);
        };
    }

    function createPlayer(person, betAmount, country) {
        return new Player(person, betAmount, country);
    }

    function createBettingPlace(address) {
        return new BettingPlace(address);
    }

    var mozzart = new BettingHouse("Football World Cup Winner");

    var person1 = new Person("Pera", "Peric", "1983-08-06");
    var person2 = new Person("Marko", "Markovic", "1989-11-03");
    var person3 = new Person("Nikola", "Nikolic", "1992-12-23");
    var person4 = new Person("Ivana", "Ivanovic", "1978-07-31");

    var p1 = createPlayer(person1, 156.4567, "sr");
    var p2 = createPlayer(person2, 654.123, "gb");
    var p3 = createPlayer(person3, 1567.456, "sr");
    var p4 = createPlayer(person4, 345.45, "sr");

    var address1 = new Address("sr", "Belgrade", "11000", "Nemanjina 4");
    var address2 = new Address("sr", "Novi Sad", "21000", "Cvijiceva 11");

    var bp1 = createBettingPlace(address1);
    var bp2 = createBettingPlace(address2);

    bp1.addPlayer(p1);
    bp1.addPlayer(p4);
    bp2.addPlayer(p2);
    bp2.addPlayer(p3);

    mozzart.addBettingPlace(bp1);
    mozzart.addBettingPlace(bp2);

    console.log(mozzart.getData());

})()