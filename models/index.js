
const Student=require('./students');
const IdentityCard=require('./identityCard');
const department=require('./department');

//one to one

Student.hasOne(IdentityCard);
IdentityCard.belongsTo(Student);

//one to many

department.hasMany(Student);
Student.belongsTo(department);


module.exports={
    Student,IdentityCard
}