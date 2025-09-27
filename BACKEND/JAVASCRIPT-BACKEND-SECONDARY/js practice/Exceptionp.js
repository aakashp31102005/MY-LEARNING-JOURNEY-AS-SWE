function calculator(a,b){
    try{
        let data=a/b;
        if(data === Infinity){
            throw new Error("devide by zero error")
        }
        return data;
    }catch(error){
        console.log("error occured:");
    }
}
console.log( typeof calculator(1,0))
const fs=require("fs");
const { URL } = require("url");
let fileopen;
try{

    fileopen=fs.openSync(`${__dirname}/nodes/el_demo.txt`);
        if(fileopen !== undefined){
    console.log("file openened")
    let data=fs.readFileSync(fileopen,"utf-8")
    console.log(data.toString())
        }else{
            throw new Error("file can't openend")
        }
}catch(error){
        console.log("file error occured",error.message)
}
finally{
    if(fileopen !== undefined){
    fs.closeSync(fileopen)
    console.log("file closed")
    }
}

async function fetchd(url){
    let u=new URL(url);
    try{
        let data=await fetch(u);
        console.log(data.status)
        if(data.status == 404){
            throw new Error("404 not found")
        }else if(data.status ==403){
            throw new Error("403 forbidden")
        }
    }catch(error){
        console.log(error.message)
    }
}
fetchd("https://jsonplaceholder.typicode.com/post")
fetchd("https://jsonplaceholder.typicode.com/posts")


function jsonparser(jsonstr){
    try{
    const jsonobj=JSON.parse(jsonstr);
    console.log("str to json",jsonobj,typeof jsonobj)
    }catch(error){
        console.log(error.message)
    }
}
jsonparser(`{"name":"aakash","age":12}`)

function accessprop(obj){
    try{
        console.log(obj.accress.city);
    }catch(error){
        console.log("no such property called city")
    }console.log("accessprop function finished")
}
accessprop({address:"kallakurichi"})
function calculatesquareroot(n){
    try{
        if(n < 0){
            throw new Error("can't find sqrt for negative numbers")
        }
    }catch(error){
        throw new Error(error.message);
    }
}
try{
    calculatesquareroot(-1)
}catch(error){
    console.log(error.message)
}

class Networkerror extends Error{
    constructor(message){
            super(message);
            this.name="Network error";
    }
}
function  fetchuserid(id){
        if(Math.random()< 0.2){
            throw new Networkerror("net work error occured");
        }
        return {userid:id,name:"aakash"}
}
try{
console.log(fetchuserid(1));
}catch(error){
    if(error instanceof Networkerror){
        console.log(error.name)
    }
}
function idontsaythesecret(){
    if(Math.random()<0.75){
        return Promise.reject("i said it to my another friend")
    }else{
        return Promise.resolve("i dont say it yet")
    }
}
idontsaythesecret().then(message=>console.log(message)).catch(message=>console.log(message))
