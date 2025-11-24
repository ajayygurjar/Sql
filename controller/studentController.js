const db = require("../utils/db-connection");
const {Student} = require("../models");
const {IdentityCard} = require("../models");

//Get all student using sequelize
const getStudent = async (req, res) => {
  try {
    const students = await Student.findAll();
    res.status(200).json(students);
  } catch (error) {
    console.error(error);
    res.status(500).send("Database Error");
  }
};

//Get student by id using sequelize
const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByPk(id);
    if (!student) {
      return res.status(404).send("Student data not found");
    }
    res.status(200).json(student);
  } catch (error) {
    console.error(error);
    res.status(500).send("Database Error");
  }
};

//Post request using sequelize adding student
const addEntries = async (req, res) => {
  try {
    const { email, name, age } = req.body;
    const student = await Student.create({
      email: email,
      name: name,
      age: age,
    });
    res.status(201).send(`User with name: ${student.name} is created`);
  } catch (error) {
    res.status(500).send(`unable to make an entry`);
  }
};

//Put request using sequelize updating student

const updateEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, age } = req.body;

    const student = await Student.findByPk(id);
    if (!student) {
      return res.status(404).send(`User not found`);
    }

    student.name = name;
    await student.save();
    res.status(200).send(`User has been updated!`);
  } catch (error) {
    res.status(500).send(`User cannot be updated`);
  }
};

//Delete request using sequelize deleting student
const deleteEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.destroy({
      where: {
        id: id,
      },
    });
    if (!student) {
      return res.status(404).send(`User not found`);
    }
    res.status(200).send(`User is deleted`);
  } catch (error) {
    console.log(error);
    res.status(500).send(`Error encountered while deleting.`);
  }
};

const addingValuesToStudentAdnIdentityTable = async (req, res) => {
  try {
    const student = await Student.create(req.body.student);
    const idCard = await IdentityCard.create({
      ...req.body.identityCard,
      StudentId: student.id,
    });
    res.status(201).json({ student, idCard });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error);
  }
};

module.exports = {
  addEntries,
  updateEntry,
  deleteEntry,
  getStudent,
  getStudentById,
  addingValuesToStudentAdnIdentityTable,
};
