### Initialized 4 difference packages into the project:

`npm i express dotenv mongoose colors`

The command `npm i express dotenv mongoose colors` installs four different packages into your Node.js project using npm (Node Package Manager), which is a default package manager for the Node.js runtime environment.

Let's break down what each of these packages does:

1. `express`: This is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It simplifies the process of standing up a server and handling HTTP requests and responses.

2. `dotenv`: As explained in a previous message, dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env`.

3. `mongoose`: This is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.

4. `colors`: This is a package for adding colors to the console text in Node.js, useful for differentiating between different types of log messages.

The `i` in `npm i` is shorthand for `install`. After running this command, these packages will be added to your `node_modules` folder and references to them will be added to the `dependencies` section of your `package.json` file.

### Setup server scripts

Nodemon will watch the files in the directory in which nodemon was started, and if any files change, nodemon will automatically restart your node application.

```"scripts": {
"start": "node backend/server.js",
"server": "nodemon backend/server.js"
},
```

### Setup server.js

Dotenv allows you to separate secrets from your source code. This is useful in the case of an open source project such as this, where you don't want to expose your database password to the world. The code can be found in the `.env` file.

You can access the information by using `process.env.VARIABLE_NAME`. Then we enable express with `app.listen`and pass in the port and a callback function that will console log a message to the terminal when the server is running.

```const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT;

const app = express();

app.listen(port, () => console.log(`Server is running on port ${port}`));
```

### Setup .env file

Setting the NODE_ENV to development changes the behavior of Express and other packages. For example, Express will provide more verbose error messages and will restart automatically when changes are made to the code. The PORT variable is used to specify the port that the server will run on. The `.env` file should be added to the `.gitignore` file so that it is not committed to the repository.

```NODE_ENV = development
PORT = 5000
```
