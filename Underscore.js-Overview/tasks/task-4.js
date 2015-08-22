/* 
Create a function that:
*   **Takes** an array of animals
    *   Each animal has propeties `name`, `species` and `legsCount`
*   **groups** the animals by `species`
    *   the groups are sorted by `species` descending
*   **sorts** them ascending by `legsCount`
    *   if two animals have the same number of legs sort them by name
*   **prints** them to the console in the format:

```
    ----------- (number of underscores is equal to the length of the GROUP_1_NAME + 1)
    GROUP_1_NAME:
    ----------- (number of underscores is equal to the length of the GROUP_1_NAME + 1)
    NAME has LEGS_COUNT legs //for the first animal in group 1
    NAME has LEGS_COUNT legs //for the second animal in group 1
    ----------- (number of underscores is equal to the length of the GROUP_2_NAME + 1)
    GROUP_2_NAME:
    ----------- (number of underscores is equal to the length of the GROUP_2_NAME + 1)
    NAME has LEGS_COUNT legs //for the first animal in the group 2
    NAME has LEGS_COUNT legs //for the second animal in the group 2
    NAME has LEGS_COUNT legs //for the third animal in the group 2
    NAME has LEGS_COUNT legs //for the fourth animal in the group 2
```
*   **Use underscore.js for all operations**
*/
function solve() {
    'use strict';
    var _ = require('underscore');
    return function (animals) {

        function drawHeader(group) {
            var groupMember = _.first(group);
            console.log(new Array(groupMember.species.length + 2).join('-'));
            console.log(groupMember.species + ':');
            console.log(new Array(groupMember.species.length + 2).join('-'));
        }

        function drawAnimalInfo(animal) {
            console.log(animal.name + ' has ' + animal.legsCount + ' legs');
        }

        _.chain(animals)
            .groupBy(function (animal) {
                return animal.species;
            })
            .sortBy('group[0].species')
            .reverse()
            .each(function (group) {

                drawHeader(group);

                _.chain(group)
                    .sortBy(function (animal) {
                        return animal.name;
                    })
                    .sortBy(function (animal) {
                        return animal.legsCount;
                    })
                    .each(function (animal) {
                        drawAnimalInfo(animal);
                    });

            });
    };
}

var animals = [{
    name: 'Minkov',
    species: 'Bogomolka',
    legsCount: 4
}, {
    name: 'Doncho',
    species: 'Centipede',
    legsCount: 201
}, {
    name: 'Komara',
    species: 'Mosquito',
    legsCount: 8
}];
var func = solve();
func(animals);

module.exports = solve;