const {Sequelize}=require('sequelize');

const sequelize=new Sequelize('testdb','root','Ajay@2529',{
  host:'localhost',
  dialect:'mysql'
});


(async()=>{try {
  await sequelize.authenticate();
  console.log('Connection to database has been created')
} catch (error) {
  console.log(error)
}})();

module.exports=sequelize;





























// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'Ajay@2529',
//   database: 'testDB'
// });

// connection.connect((err) => {
//   if (err) {
//     console.error("Database connection failed:", err);
//     return;
//   }
//   console.log(`Connection has been created`);

//   const creationQuery = `CREATE TABLE IF NOT EXISTS Students(
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(20),
//     email VARCHAR(50) unique,
//     age int
//   )`;

//   connection.execute(creationQuery, (err) => {
//     if (err) {
//       console.error("Table creation error:", err);
//       connection.end();
//       return;
//     }
//     console.log(`Students table is ready`);
//   });
// });

// module.exports = connection;
