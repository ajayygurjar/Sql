const db = require("../utils/db-connection");
const Student = require("../models/students");
const getStudent = (req, res) => {
  const query = "select * from students";
  db.execute(query, (err, rows) => {
    if (err) return res.status(500).send(`Database Error`);
    res.status(200).json(rows);
  });
};

const getStudentById = (req, res) => {
  const query = "select * from students where id=?";
  db.execute(query, [req.params.id], (err, rows) => {
    if (err) return res.status(500).send(`Database error`);
    if (rows.length === 0)
      return res.status(404).send(`Student data not found`);
    res.status(200).json(rows[0]);
  });
};

const addEntries = async (req, res) => {
  try {
    const { email, name, age } = req.body;
    const student = await Student.create({
      email: email,
      name: name,
      age: age,
    });
    res.status(201).send(`User with name: ${Student.name} is created`);
  } catch (error) {
    res.status(500).send(`unable to make an entry`);
  }

  // const insertQuery = "insert into students(email,name,age) values(?,?,?)";

  // db.execute(insertQuery, [email, name, age], (err) => {
  //   if (err) {
  //     console.log(err.message);
  //     res.status(500).send(err.message);
  //     return;
  //   }
  //   console.log("Values has been inserted");
  //   res.status(200).send(`Student with name ${name} successfully added`);
  // });
};

const updateEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, age } = req.body;

    const student = await Student.findByPk(id);
    if (!student) {
      res.status(404).send(`User not found`);
    }

    student.name=name;
    await student.save();
    res.status(200).send(`User has been updated!`);
  } catch (error) {
    res.status(500).send(`User cannot be updated`);
  }
};

const deleteEntry = (req, res) => {
  const { id } = req.params;
  const deleteQuery = "delete from students where id=?";

  db.execute(deleteQuery, [id], (err, result) => {
    if (err) {
      console.log(err.message);
      res.status(500).send("delete request failed");
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).send(`student not found`);
      return;
    }
    res.status(200).send(`User with ${id} is deleted`);
  });
};

module.exports = {
  addEntries,
  updateEntry,
  deleteEntry,
  getStudent,
  getStudentById,
};
