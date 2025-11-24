
const Student=require('./students');
const IdentityCard=require('./identityCard');

//one to one

Student.hasOne(IdentityCard);
IdentityCard.belongsTo(Student);


module.exports={
    Student,IdentityCard
}