const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
    .connect("mongodb+srv://srivastavaanushka3:pN0JaGoiQluSfSKW@cluster0.be963zt.mongodb.net/", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB Connetion Successfull");
    })
    .catch((err) => {
        console.log(err.message);
    });

app.use("/api/user", userRoutes);

app.listen(3000, () => {
    console.log("server started on port 3000");
});

//pN0JaGoiQluSfSKW