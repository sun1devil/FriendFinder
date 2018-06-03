// A GET Route to /survey which should display the survey page.
// A default, catch-all route that leads to home.html which displays the home page.

var path = require("path");

// Routes

module.exports = function(app) {
// Basic route that sends the user first to the survey Page
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
    console.log(req);
    console.log(res);
  });
  
  app.get("/brohome", function(req, res) {
    res.sendFile(path.join(__dirname, "brohome.html"));
    console.log(req);
    console.log(res);

  });
  };