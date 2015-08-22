/* 
Create a function that:
*   **Takes** an array of animals
    *   Each animal has propeties `name`, `species` and `legsCount`
*   **finds** and **prints** the total number of legs to the console in the format:
    *   "Total number of legs: TOTAL_NUMBER_OF_LEGS"
*   **Use underscore.js for all operations**
*/
function solve() {
    'use strict';
    var _ = require('underscore');
    return function (animals) {
        var sum = 0;
        _.each(animals, function (animal) {
            sum += animal.legsCount;
        });
        console.log('Total number of legs: ' + sum);
    };
}

var animals = [{
    name: 'Dog',
    species: 'Mammal',
    legsCount: 4
}, {
    name: 'Cat',
    species: 'Mammal',
    legsCount: 4
}, {
    name: 'Snail',
    species: 'Insect',
    legsCount: 1
}, {
    name: 'Monkey',
    species: 'Mammal',
    legsCount: 2
}, {
    name: 'Crow',
    species: 'Bird',
    legsCount: 2
}, {
    name: 'Eagle',
    species: 'Bird',
    legsCount: 2
}, {
    name: 'Whale',
    species: 'Mammal',
    legsCount: 0
}];
var func = solve();
func(animals);

module.exports = solve;