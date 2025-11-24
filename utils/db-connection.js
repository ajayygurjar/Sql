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
