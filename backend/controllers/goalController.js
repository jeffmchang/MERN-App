/* Middleware, this is a function that runs when a request is made to the server. The router (express) sends a request to "/api/goals/" and the middleware function runs.

Status(200) means that when the request is made, the server is responding with a status of 200, which means "OK" and it will return a json object with a message of "get goals".*/

//  @desc  Get all goals
//  @route GET /api/goals
//  @access Private
const getGoals = (request, response) => {
  response.status(200).json({ message: "get goals" });
};

//  @desc  Set a goals
//  @route POST /api/goals
//  @access Private
const setGoal = (request, response) => {
  if (!request.body.message) {
    response.status(400);
    throw new Error("Please enter a message");
  }
  response.status(200).json({ message: "set goal" });
};

/* request.params is an object containing properties mapped to the named route parameters. For example, if you have the route /user/:id, then the "id" property is accessible as request.params.id and it will contain whatever value was passed in the URL.

So, if a client sends a PUT request to /user/123, your route handler will respond with a status of 200 and a JSON payload of { message: "update goal 123" }.*/

//  @desc  Update a goal
//  @route PUT /api/goals/:id
//  @access Private
const updateGoal = (request, response) => {
  response.status(200).json({ message: `update goal ${request.params.id} ` });
};

//  @desc  Delete goal
//  @route DELETE /api/goals/:id
//  @access Private
const deleteGoal = (request, response) => {
  response.status(200).json({ message: `delete goal ${request.params.id} ` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
}; // Export the functions so they can be used in the routes file.
