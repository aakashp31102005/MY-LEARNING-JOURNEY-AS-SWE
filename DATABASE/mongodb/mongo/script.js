const mongoose=require('mongoose');
const usr=require('./usermodel');

mongoose.connect('mongodb://localhost:27017/office')
.then(()=>{
    console.log('connected');
}).catch(()=>{
    console.log(`didn't connecct`);})


const userobj1=new usr({
    name:'aakash',
    age:20
})

userobj1.save().then(()=>{console.log('user saved')
});