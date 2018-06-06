// A GET Route to /survey which should display the survey page.
// A default, catch-all route that leads to home.html which displays the home page.

var path = require("path");

// Routes

module.exports = function(app) {
// Basic route that sends the user first to the survey Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/brohome.html"));
  

  });
 

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
   
  });
};
 