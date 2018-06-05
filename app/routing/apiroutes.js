// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var bros = require("../data/bros");

// Get list of Bros
module.exports = function(app) {
app.get("/api/bros", function(req, res) {
    return res.json(bros);
   
   
  });



app.post("/api/bros", function(req, res,) {
    // console.log('hello"')


    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newBro = req.body;
    // console.log(newBro)
  

    var broName = newBro.name
    var broPhoto = newBro.photo
    var broScore = newBro.scores;
    // console.log(broName);
    // console.log(broPhoto);
    // console.log(broScore)
    
        
    var totalDifference = 100
    

    for (var i = 0; i < bros.length; i++){
    //    console.log("friend =" + JSON.stringify(bros[i]))
    var diff = 0
        for (var j = 0; j <broScore.length; j++){
            diff += Math.abs(bros[i].scores[j] - broScore[j]);
            console.log(diff);
                    }
    
    };
   
    if (diff < totalDifference){
        	console.log('Bro Match! = ' + diff);
            console.log('Friend name = ' + bros[i].name);
            console.log('Friend image = ' + bros[i].photo);

    }
    
    // Using a RegEx Pattern to remove spaces from newBro
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newBro.routeName = newBro.name.replace(/\s+/g, "").toLowerCase();
  
    
    bros.push(newBro);
  
    res.json(newBro);
  });
}

// Compatibility logic

// Determine the user's most compatible friend using the following as a guide:

// Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
// With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.

// Example: 



// User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]

// User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]

// Total Difference: 2 + 1 + 2 = 5

// Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on. 
// The closest match will be the user with the least amount of difference.

// Once you've found the current user's most compatible friend, display the result as a modal pop-up.

// The modal should display both the name and picture of the closest match.