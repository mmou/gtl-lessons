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
	var count = 0;
	var sum = 0;
	users.forEach(function(element, index, array) {
		count ++;
		sum += element.age;
	});
	return sum/count;
}


var aveAge = aveAge(data.content)
console.log("Average age of all users: " + aveAge)


/*

(2) How many active female users are there?

*/

var numActiveFemales = function(users) {
	var count = 0;
	users.forEach(function(element, index, array) {
	  if (element.isActive && element.gender === "female") {
	    count++;
	  };
	});
	return count;
}


var numActiveFemales = numActiveFemales(data.content)
console.log("Number of users that are active and female: " + numActiveFemales)




/*

(3) How many users have a balance >= $2000?

*/


var numHighBalance = function(users) {
	var count = 0;
	users.forEach(function(element, index, array) {
	  var balanceString = element.balance;
	  var balanceFloat = parseFloat(balanceString.substring(1).replace(",",""))
	  if (balanceFloat >= 2000) {
	  	count ++;
	  }
	});
	return count;
};


var numHighBalance = numHighBalance(data.content)
console.log("Number of users with more than $2000: " +  numHighBalance)



/*

(4) What is the most common favorite fruit?

*/

var mostFavoriteFruit = function(users) {

	var favoriteFruits = {};

	users.forEach(function(element, index, array) {
		var fruitName = element.favoriteFruit;
		if (fruitName in favoriteFruits) {
			favoriteFruits[fruitName]++;
		} else {
			favoriteFruits[fruitName] = 1;			
		}
	});

	var maxCount = 0;
	var maxFruit;
	Object.keys(favoriteFruits).forEach(function(element, index, array) {
		if (favoriteFruits[element] >= maxCount) {
			maxFruit = element;
			maxCount = favoriteFruits[element];
		} 
	});

	return maxFruit;
};


var mostFavoriteFruit = mostFavoriteFruit(data.content)
console.log("Most common favorite fruit: " +  mostFavoriteFruit)


