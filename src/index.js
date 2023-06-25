const express = require("express");
const path = require("path");
const expressHandlebars = require("express-handlebars");
const methodOverride = require("method-override");
const session = require("express-session");

// Inicializations
const app = express();

// Settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set(
  ".hbs",
  expressHandlebars.engine({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "mySecretApp",
    resave: true,
    saveUninitialized: true,
  })
);

// Global variables

// Routes
app.use(require("./routes/index"));
app.use(require("./routes/notes"));
app.use(require("./routes/users"));

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Server is listenning...
app.listen(app.get("port"), () => {
  console.log("Server is listening on port ", app.get("port"));
});
