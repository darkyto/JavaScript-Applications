/* 
Create a function that:
*   Takes an array of students
    *   Each student has a `firstName`, `lastName` and `age` properties
*   **finds** the students whose age is between 18 and 24
*   **prints**  the fullname of found students, sorted lexicographically ascending
    *   fullname is the concatenation of `firstName`, ' ' (empty space) and `lastName`
*   **Use underscore.js for all operations**
*/
function solve() {
    'use strict';
    var _ = require('underscore');
    return function(students) {

        function filterByAge(student) {
            return student.age >= 18 && student.age <= 24;
        }

        var studentsWithSpecificAge = _.filter(students, filterByAge);

        _.each(studentsWithSpecificAge, function (student) {
            student.fullName = student.firstName + ' ' + student.lastName;
        });

        var sorted = _.sortBy(studentsWithSpecificAge, 'fullName');
        _.each(sorted, function (student) {
            console.log(student.fullName);
        });
    };
}

var students = [{
    firstName: 'Efstathios',
    lastName: 'Eyvindr',
    age: 27
}, {
    firstName: 'Valtteri',
    lastName: 'Mansoor',
    age: 22
}, {
    firstName: 'Darin',
    lastName: 'Lorin',
    age: 27
}, {
    firstName: 'Sunil',
    lastName: 'Pavlo',
    age: 9
}, {
    firstName: 'Diniz',
    lastName: 'Shahar',
    age: 14
}, {
    firstName: 'Brutus',
    lastName: 'Vlad',
    age: 40
}, {
    firstName: 'Moishe',
    lastName: 'Anaru',
    age: 16
}, {
    firstName: 'Ole',
    lastName: 'Ranj',
    age: 17
}, {
    firstName: 'Zsombor',
    lastName: 'Mykyta',
    age: 36
}, {
    firstName: 'Gautstafr',
    lastName: 'Derry',
    age: 28
}, {
    firstName: 'Dragutin',
    lastName: 'Apollinaris',
    age: 8
}, {
    firstName: 'Adam',
    lastName: 'Willem',
    age: 25
}, {
    firstName: 'Zlatko',
    lastName: 'Denis',
    age: 18
}, {
    firstName: 'Arik',
    lastName: 'Somhairle',
    age: 41
}, {
    firstName: 'Akuchi',
    lastName: 'Vishnu',
    age: 48
}, {
    firstName: 'Alfr',
    lastName: 'Eric',
    age: 46
}, {
    firstName: 'Matija',
    lastName: 'Jaagup',
    age: 41
}, {
    firstName: 'Ruperto',
    lastName: 'Chenaniah',
    age: 39
}, {
    firstName: 'Adrian',
    lastName: 'Rabindra',
    age: 35
}, {
    firstName: 'Weland',
    lastName: 'Musa',
    age: 29
}, {
    firstName: 'Daedalus',
    lastName: 'Icarus',
    age: 36
}, {
    firstName: 'Nasib',
    lastName: 'Bahman',
    age: 13
}, {
    firstName: 'Manus',
    lastName: 'Ghulam',
    age: 5
}, {
    firstName: 'Saleem',
    lastName: 'Remus',
    age: 30
}, {
    firstName: 'Ioubal',
    lastName: 'Itzhak',
    age: 4
}, {
    firstName: 'Hebel',
    lastName: 'Hirshel',
    age: 0
}, {
    firstName: 'Giotto',
    lastName: 'Damir',
    age: 24
}, {
    firstName: 'Nonus',
    lastName: 'Charlie',
    age: 8
}, {
    firstName: 'Ahtahkakoop',
    lastName: 'Jaydon',
    age: 25
}, {
    firstName: 'Dipaka',
    lastName: 'Gijsbert',
    age: 28
}, {
    firstName: 'Ormazd',
    lastName: 'Haran',
    age: 45
}, {
    firstName: 'Stanislav',
    lastName: 'Chan',
    age: 2
}, {
    firstName: 'Radoslav',
    lastName: 'Elvan',
    age: 0
}, {
    firstName: 'Lucjan',
    lastName: 'Thaddeus',
    age: 22
}, {
    firstName: 'Aslan',
    lastName: 'Timotheos',
    age: 43
}, {
    firstName: 'Hrodebert',
    lastName: 'Fitz',
    age: 14
}, {
    firstName: 'Lavi',
    lastName: 'Iairos',
    age: 12
}, {
    firstName: 'Anisim',
    lastName: 'Nilam',
    age: 10
}, {
    firstName: 'Honza',
    lastName: 'Dino',
    age: 14
}, {
    firstName: 'Nsia',
    lastName: 'Hadrien',
    age: 30
}, {
    firstName: 'Ferdi',
    lastName: 'Dorijan',
    age: 20
}, {
    firstName: 'Toninho',
    lastName: 'Armen',
    age: 22
}, {
    firstName: 'Wallace',
    lastName: 'Amund',
    age: 6
}, {
    firstName: 'Setiawan',
    lastName: 'Igon',
    age: 21
}, {
    firstName: 'Helios',
    lastName: 'Rabindra',
    age: 13
}, {
    firstName: 'Octavius',
    lastName: 'Angelos',
    age: 36
}, {
    firstName: 'Monroe',
    lastName: 'Junior',
    age: 49
}, {
    firstName: 'Samuel',
    lastName: 'Andrew',
    age: 36
}, {
    firstName: 'Leudoberct',
    lastName: 'Thamir',
    age: 7
}, {
    firstName: 'Zander',
    lastName: 'Levi',
    age: 35
}, {
    firstName: 'Gevorg',
    lastName: 'Mayur',
    age: 15
}, {
    firstName: 'Tural',
    lastName: 'Edelmiro',
    age: 43
}, {
    firstName: 'Antinanco',
    lastName: 'Firdaus',
    age: 30
}, {
    firstName: 'Darijus',
    lastName: 'Humphry',
    age: 3
}, {
    firstName: 'Ciriaco',
    lastName: 'Rustam',
    age: 6
}, {
    firstName: 'Nur',
    lastName: 'Baha',
    age: 16
}, {
    firstName: 'Matija',
    lastName: 'Jerker',
    age: 35
}, {
    firstName: 'Pryderi',
    lastName: 'Aaron',
    age: 30
}, {
    firstName: 'Manuel',
    lastName: 'Evan',
    age: 24
}, {
    firstName: 'Oedipus',
    lastName: 'Leonidas',
    age: 42
}, {
    firstName: 'Yidel',
    lastName: 'Karen',
    age: 40
}];

var func = solve();
func(students);

module.exports = solve;