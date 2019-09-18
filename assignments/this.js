/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding - the default binding where THIS is the global context whenever the function is invoked w/o any other rules/principals

* 2. Implicit Binding - this binding occurs when dot notation (a period .) is used when we are invoking our function. Anything to the left side of our . is what our THIS is in the function

* 3. New Binding - this binding occurs when we use a constructor function, and a constructor function is a function that returns an object, so it is creating an object. We can create our variables that have this. to the left of them,  and assign them (=) values. Example would be this.greeting = 'Hello'; 

* 4. Explicit Binding - .call() .apply() and .bind() all allow us to point more objects to the THIS keyword. This binding occurs when we apply any of these methods (call, apply, bind) on a function. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function myFood(favFood){
    console.log(`Hello I am Zack and my favorite food is ${favFood}`);
    console.log(this);
}

myFood('tacos 🌮.');





// Principle 2

// code example for Implicit Binding

let myGames = {
    game1: 'Call of Duty 🎮',
    game2: 'World of Warcraft 🧙🏾‍',
    games: function(){
        console.log(`My two favorite games of all time are ${this.game1} and ${this.game2}.`);
    }
}

myGames.games();





// Principle 3

// code example for New Binding

function FavoriteRestaurant(best){
    this.restaurant = best;
}

let aberdeensBestRestaurant = new FavoriteRestaurant('The Brass Kettle 🍱 🍷.');

console.log(`The best restaurant in Aberdeen, SD is hands down ${aberdeensBestRestaurant.restaurant}`);





// Principle 4

// code example for Explicit Binding