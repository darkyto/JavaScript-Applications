/* 
Create a function that:
*   **Takes** a collection of books
    *   Each book has propeties `title` and `author`
        **  `author` is an object that has properties `firstName` and `lastName`
*   **finds** the most popular author (the author with biggest number of books)
*   **prints** the author to the console
*   **Use underscore.js for all operations**
*/
function solve() {
    'use strict';
    var _ = require('underscore');
    return function(books) {
        _.chain(books)
            .each(function (book) {
                book.author.fullName = book.author.firstName +
                    ' ' +
                    book.author.lastName;
            });
        var sortedBooks = _.sortBy(books, function (book) {
            return book.author.fullName;
        });

        var grupedBooks = _.groupBy(sortedBooks, function (book) {
            return book.author.fullName;
        }),
        biggestGroup = _.max(grupedBooks, function (group) {
            return group.length;
        }),
        mostPopularCount = biggestGroup.length;

        function extracMostFavoriteGroup(grupedBooks) {
            return _.max(grupedBooks, function (group) {
                return group.length;
            });
        }
        while (biggestGroup.length === mostPopularCount) {
            biggestGroup = extracMostFavoriteGroup(grupedBooks);
            console.log(biggestGroup[0].author.fullName);
            grupedBooks = _.without(grupedBooks, biggestGroup);
            biggestGroup = extracMostFavoriteGroup(grupedBooks);

        }
    };
}

var books = [{
    title: 'A Scanner Darkly',
    author: {
        firstName: 'Philip',
        lastName: 'Dick'
    }
}, {
    title: 'Abra Ca Dabra',
    author: {
        firstName: 'Philip',
        lastName: 'Nedick'
    }
}, {
    title: 'Brave New World',
    author: {
        firstName: 'Oldeous',
        lastName: 'Huxly'
    }
}, {
    title: 'The Turing Option',
    author: {
        firstName: 'Harry',
        lastName: 'Harrison'
    }
}, {
    title: 'Minority Report',
    author: {
        firstName: 'Philip',
        lastName: 'Dick'
    }
}, ];
var func = solve();
func(books);

module.exports = solve;