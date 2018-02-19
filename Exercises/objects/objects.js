
function Person(name, surname, yearOfBirth){
    this.firstName = name;
    this.lastName = surname;
    this.date = new Date();
    this.calculateAge = function (){
        return this.date.getFullYear() - yearOfBirth;
    }
}

var matija = new Person("Matija", "Misic", 1983);

console.log(matija.calculateAge());

var jelena = new Person("Jelena", "Marjanovic", 1984);

console.log(jelena.calculateAge());
