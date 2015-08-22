/* 
Create a function that:
*   Takes an array of students
    *   Each student has a `firstName` and `lastName` properties
*   **Finds** all students whose `firstName` is before their `lastName` alphabetically
*   Then **sorts** them in descending order by fullname
    *   fullname is the concatenation of `firstName`, ' ' (empty space) and `lastName`
*   Then **prints** them to the console
*   **Use underscore.js for all operations**
*/
function solve() {
    'use strict';
    var _ = require('underscore');
    return function (students) {
        var filteredStudents = _.filter(students, function (student) {
            return student.firstName < student.lastName;
        });

        _.each(filteredStudents, function (student) {
            student.fullName = student.firstName + ' ' + student.lastName;
        });

        var sortedDescendingStudents = _.sortBy(filteredStudents, function (student) {
            return student.fullName;
        }).reverse();

        _.each(sortedDescendingStudents, function (student) {
            console.log(student.fullName);
        });
    };
}

var students = [{
    firstName: 'John',
    lastName: 'Smith',
    age: 24,
    marks: [{
        subject: 'JS Fund',
        mark: 130
    }, {
        subject: 'JS OOP',
        mark: 46
    }, {
        subject: 'JS DOM',
        mark: 40
    }, {
        subject: 'JS Apps',
        mark: 75
    }]
}, {
    firstName: 'Maria',
    lastName: 'Smith',
    age: 19,
    marks: [{
        subject: 'JS Fund',
        mark: 170
    }, {
        subject: 'JS OOP',
        mark: 56
    }, {
        subject: 'JS DOM',
        mark: 70
    }, {
        subject: 'JS Apps',
        mark: 108
    }]
}, {
    firstName: 'Venelin',
    lastName: 'Smith',
    age: 17,
    marks: [{
        subject: 'JS Fund',
        mark: 150
    }, {
        subject: 'JS OOP',
        mark: 66
    }, {
        subject: 'JS DOM',
        mark: 20
    }, {
        subject: 'JS Apps',
        mark: 85
    }]
}, {
    firstName: 'Pedro',
    lastName: 'Smith',
    age: 26,
    marks: [{
        subject: 'JS Fund',
        mark: 200
    }, {
        subject: 'JS OOP',
        mark: 76
    }, {
        subject: 'JS DOM',
        mark: 60
    }, {
        subject: 'JS Apps',
        mark: 105
    }]
}, {
    firstName: 'Hans',
    lastName: 'Smith',
    age: 32,
    marks: [{
        subject: 'JS Fund',
        mark: 110
    }, {
        subject: 'JS OOP',
        mark: 35
    }, {
        subject: 'JS DOM',
        mark: 25
    }, {
        subject: 'JS Apps',
        mark: 52
    }]
}, {
    firstName: 'Olivia',
    lastName: 'Smith',
    age: 15,
    marks: [{
        subject: 'JS Fund',
        mark: 230
    }, {
        subject: 'JS OOP',
        mark: 72
    }, {
        subject: 'JS DOM',
        mark: 66
    }, {
        subject: 'JS Apps',
        mark: 67
    }]
}, ],
    func = solve();
func(students);

module.exports = solve;