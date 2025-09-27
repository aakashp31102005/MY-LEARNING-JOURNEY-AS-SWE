console.log("1.first ")
setTimeout(() => {
    console.log("2.fourth")
}, 0);
const fs=require("fs");
const path=require("path")
fs.readFile(path.join(__dirname,"hello.txt"),(error,data)=>{console.log("3.seveth")});
setImmediate(()=>console.log("4.fifth"))
fs.readFile(path.join(__dirname,"el_demo.txt"),(error,data)=>{console.log("5.eight")});
for(let i=0;i<1e5;i++){}
setImmediate(()=>{console.log("6.sixth")})
Promise.resolve().then(()=>console.log("7.third"))
process.nextTick(()=>console.log("8.second"))