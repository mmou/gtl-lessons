/*

Example: How many users have blue eyes? 

*/

var numBlueEyes = function(users) {
    var count = 0;
    users.forEach(function(element, index, array) {
        if (element.eyeColor === "blue") {
            count++;
        };
    });
    return count;
}


var numBlueEyes = numBlueEyes(data.content)
console.log("Number of users with blue eyes: " + numBlueEyes)

/*

(1) What is the average age of all the users?

*/


var aveAge = function(users) {
    // YOUR CODE HERE
}


var aveAge = aveAge(data.content)
console.log("Average age of all users: " + numBlueEyes)


/*

(2) How many active female users are there?

*/

var numActiveFemales = function(users) {
    // YOUR CODE HERE
}

var numActiveFemales = numActiveFemales(data.content)
console.log("Number of users that are active and female: " + numActiveFemales)




/*

(3) How many users have a balance >= $2000?

*/


var numHighBalance = function(users) {
    // YOUR CODE HERE
};


var numHighBalance = numHighBalance(data.content)
console.log("Number of users with more than $2000: " +  numHighBalance)



/*

(4) What is the most common favorite fruit?

*/

var mostFavoriteFruit = function(users) {
    // YOUR CODE HERE
};


var mostFavoriteFruit = mostFavoriteFruit(data.content)
console.log("Most common favorite fruit: " +  mostFavoriteFruit)


