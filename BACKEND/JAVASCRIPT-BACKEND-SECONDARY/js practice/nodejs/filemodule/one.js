const { error } = require("console")
const fs=require("fs")
const path=require("path");
const fspromise=require("fs/promises");
const { rejects } = require("assert");

fs.readFile(path.join(__dirname,"hello.txt"),(error,data)=>{
    console.log(data.toString(),":file ready by asynchrnous callback")
})

// let data=fs.readFileSync(path.join(__dirname,"hello.txt"));
// console.log(data.toString(),":by synchronous method");


// let promdata=fspromise.readFile(path.join(__dirname,"hello.txt"));
// promdata.then((value)=>{return value.toString()}).then((data)=>{console.log(data,":by promise method")})


// fs.unlink(path.join(__dirname,"..","small.txt"),(err)=>{if(err){console.log("file not found"); return}console.log("file deleted")})


function logFileContentSync(fpath=path.join(__dirname)){
    if(fpath !== undefined){
        fpath=path.join(__dirname,fpath);
    }
    let filedata;
    filedata=fs.readFileSync(fpath)
    if(filedata === undefined){
        return `file not found in ${path} `;
    }
    
    return `file contents: ${filedata.toString()}`;
}
console.log(logFileContentSync("hello.txt"))


async function readFiletoString(fpath){
   if(fpath !== undefined){
        fpath=path.join(__dirname,fpath);
    }
    try{
    const filedata=await fspromise.readFile(fpath,{encoding:"utf-8",flag:'r'});
    return filedata;
    }catch(err){
        throw err;
    }
}

readFiletoString("hello.txt").then((data)=>{console.log("readfiletoString function data:",data.toString())})

// const readFiletoBase64=async (fpath)=>{
//  if(fpath !== undefined){
//         fpath=path.join(__dirname,fpath);
//     }
//     let imgdata= await fs.ReadStream(fpath,{encoding:"base64"});
//     return imgdata;

// }
fs.readdir(path.join(__dirname,"filemodule"),(err,file)=>{if(!err){console.log(file)}})



function parseConfigfile(fpath) {
    if (fpath !== undefined) {
        fpath = path.join(__dirname, fpath);
    }
    let jsonfile = fs.readFileSync(fpath, "utf8"); // read as text
    let jdata = JSON.parse(jsonfile); // parse JSON
    console.log(JSON.stringify(jdata)); // pretty print
}

parseConfigfile("config.json");
