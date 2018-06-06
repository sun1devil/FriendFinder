// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var bros = require("../data/bros");

// Get list of Bros
module.exports = function (app) {
    app.get("/api/bros", function (req, res) {
        return res.json(bros);


    });



    app.post("/api/bros", function (req, res, ) {
        // console.log('hello"')


        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body-parser middleware

        var newBro = req.body;

        var broScore = newBro.scores;
        
        var totalDifference = 100;

        var broMatch;


        for (var i = 0; i < bros.length; i++) {
            //    console.log("friend =" + JSON.stringify(bros[i]))
            var diff = 0
            for (var j = 0; j < broScore.length; j++) {
                diff += Math.abs(bros[i].scores[j] - broScore[j]);
        
                if (diff < totalDifference) {
                    totalDifference = diff;
                    broMatch = bros[i];
                    
                }
                bros.push(newBro);
            }
        }


             
        res.json(broMatch);

    });

};

