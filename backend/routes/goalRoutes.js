// Set up express router
const express = require("express"); // Import express (server)
const router = express.Router(); // Create an instance of express router
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController"); // Import the functions from the controller

// Set up the routes using the instance of express router
router.route("/").get(getGoals).post(setGoal);
router.route("/:id").delete(deleteGoal).put(updateGoal);

module.exports = router;
