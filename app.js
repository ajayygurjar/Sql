const express = require("express");
const app = express();
const db = require("./utils/db-connection");
const studentRoutes = require("./routes/studentsRoutes");
const courseRoutes=require('./routes/courseRoutes.js')




//models
require('./models')

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello world");
});
app.use("/students", studentRoutes);
app.use('/courses',courseRoutes);
db.sync({force:true}).then(()=>{
app.listen(3000, (err) => {
  console.log("Server is running");
});


}).catch((err)=>{
  console.log(err)
})