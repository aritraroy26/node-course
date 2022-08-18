"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.get("/", function (req, res) {
  res.send("Hello from Heroku!");
});
var PORT = process.env.PORT || 8000;
app.listen(PORT, function () {
  console.log("app is listening on port " + PORT);
}); // in order to avoid running the hosted code using babel, we transpile the code using babel and use that code to host
// heroku expects a start script in package.json
