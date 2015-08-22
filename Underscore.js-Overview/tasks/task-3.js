/* 
Create a function that:
*   Takes an array of students
    *   Each student has:
        *   `firstName`, `lastName` and `age` properties
        *   Array of marks 
            *   Each mark has properties `subject` and `value`        
*   **finds** the student with highest average mark
*   **prints** to the console  'FOUND_STUDENT_FULLNAME has an average score of MARK_OF_THE_STUDENT'
    *   fullname is the concatenation of `firstName`, ' ' (empty space) and `lastName`
*   **Use underscore.js for all operations**
*/
function solve() {
    'use strict';
    var _ = require('underscore');
    return function (students) {

        _.each(students, function (student) {
            var totalMarkScore = 0;
            _.each(student.marks, function (eachMark) {
                totalMarkScore += eachMark;
            });
            student.averageScore = totalMarkScore / student.marks.length;
            student.fullName = student.firstName + ' ' + student.lastName;
        });

        students = _.sortBy(students, function (student) {
            return -student.averageScore;
        });

        var bestStudent = _.first(students);
        console.log(bestStudent.fullName +
            ' has an average score of ' +
            bestStudent.averageScore);
    };
}

var students = [{
    firstName: 'John',
    lastName: 'Smith',
    age: 24,
    marks: [6, 6, 5, 4, 3, 6]
}, {
    firstName: 'Maria',
    lastName: 'Smith',
    age: 19,
    marks: [6, 6, 3, 6]
}, {
    firstName: 'Venelin',
    lastName: 'Smith',
    age: 17,
    marks: [6, 2, 6, 5, 4, 3, 6]
}, {
    firstName: 'Pedro',
    lastName: 'Smith',
    age: 26,
    marks: [3, 6, 5, 5, 3, 6]
}, {
    firstName: 'Hans',
    lastName: 'Smith',
    age: 32,
    marks: [4, 4, 6, 4, 3, 6]
}, {
    firstName: 'Olivia',
    lastName: 'Smith',
    age: 15,
    marks: [6, 6, 5, 4, 3, 6]
}];

var func = solve();
func(students);

module.exports = solve;