const { config } = require("process");
const { text } = require("stream/consumers");

function createLimiter(callback,n){
let ntimecalled=1;
return function Limiter(){
    if(ntimecalled <=n){
        ntimecalled+=1;
        callback();
    }else{
        console.log("limit exceed")
    }
}
}

const Limiter=createLimiter(()=>console.log("called limiter"),2);
Limiter()
Limiter()
Limiter()


function createSecretKeeper(secret,password){
    return {
        objname:"secretkeeper",
        getter:(tpassword)=>{
                if(password === tpassword){
                    console.log(this.objname)
                    console.log(secret)
                }else{
                    console.log("denaid")
                }
        },
        setter:(newsecret)=>{
                
                secret=newsecret;
        }
    }
}
const keeper = createSecretKeeper("My secret", "1234");
keeper.getter("wrong")
keeper.getter("1234")
keeper.setter("New secret");
keeper.getter("1234")

const obj={
    name:"aaksh",
    getname:()=>{
        console.log(this.name)
    }
}
let name="ganesh";
obj.getname();
const number=[1,,4,2];
number.sort((a,b)=>a-b)
console.log(number)

const result=[1,2,4,5].splice(1,3).reverse().map(x=>x+1);
console.log(result);

const originalData=[{id:1,value:'a'},{id:2,value:'b'}]
const processod=originalData.map(item=>{
    return {processod:true,...item}
})
console.table(processod)
console.table(originalData)

function analyseArray(arr){
    return {
        sum(){
            arr.reduce((previous,currentvalue)=>previous+currentvalue,sum)
        },
        max(){
            let max=Math.max(...arr)
            console.log(max)
        }
    }
}

const s=[1,2,3]
const analayserarrayobj=analyseArray(s);
analayserarrayobj.max()


console.log("==================array creating methods===================")
//method one
const arraymo=[1,2,3]
console.log(arraymo)
///method two
const arraymt=Array.of(1,2,3)
arraymt.push(3)
console.log(arraymt)

//method three
const arraymth=new Array(1,3,45)
arraymth.push(4)
console.log(arraymth)

//method four
let s_arraymf="1234ab"
const arraymfo=Array.from(s_arraymf);
console.log("arraymethod four",arraymfo)

console.log("========sparse array============")
const sparsearray=new Array(5);
sparsearray[0]=22;
sparsearray[3]=3;
sparsearray.forEach(element => {
    if(typeof element !== "undefined")
    console.log(element)
});

class stack{
    constructor(stack){
            this.stack=stack;
            this.last=0;
    }
    push(element){
            this.stack[this.last]=element;
            this.last++;
    }
    pop(){
        return this.stack.pop();
    }

}
const sobj=new stack([]);
sobj.push(1);
sobj.push(3)
console.log(sobj)

const queueobj=[1,2,3,4];
console.log(queueobj.shift())
console.log(queueobj)
console.log(queueobj.unshift(12))
console.log(queueobj)

const stacks=["React","Angular","vue"];
stacks.unshift("Svelete")
stacks.splice(1,1)
console.log(stacks)


console.log("+========replace or insert element at specific indes================")

let rep=[1,2,3,4,5];
rep.fill(0);
rep[3]=9
console.log(rep)

rep.splice(3,0,99);
console.log(rep)
//slice+rest operatory
rep=[...rep.slice(0,3),89,...rep.slice(4,rep.length)]
console.log(rep)

let copywith=[1,2,3,4,5]
console.log(copywith.copyWithin(3,0,2))
copywith=[...copywith.copyWithin(3,0,2)]
console.log(copywith)

let arcop1=[1,2];
let arcop2=[3,4];
console.log(arcop1.concat(arcop2))
arcop2=[...arcop1,...arcop2]
console.log(arcop2)

let tostr=["js","Ts","Python"];
let stroftwstr=tostr.join(", ")
console.log(stroftwstr);


const tao=[1,2,3]
tao.splice(1,0,12)
console.log(tao)
//create ,update,delete
tao.splice(1,1,22)
console.log(tao)

let rarr=["a", "b", "c"]
let rarrvalue="";
rarr.reduceRight((previous,current)=>{current.concat(previous)});
console.log(rarrvalue)

let inar=["apple", "banana", "orange"];
console.log(inar.indexOf("orange"))

let chk=[2,4,6];
console.log(chk.with(1,22))
console.log(chk.every(number=>number%2==0))

let flaten=[1, [2, [3, [4]]]];
console.log(flaten.flat(3))

let r=["hello", "world"];
console.log(r.flatMap((value)=>value.split("")))

let iteratorarr = [10, 20, 30];
let iter = iteratorarr[Symbol.iterator]();

let resultt = iter.next();
while (!resultt.done) {
    console.log(resultt.value);
    resultt = iter.next();
}

const evens = {
  from: 2,
  to: 10,
  [Symbol.iterator]() {
    let current = this.from;
    let end = this.to;

    return {
      next() {
        if (current <= end) {
          let result = { value: current, done: false };
          current += 2; // step by 2
          return result;
        }
        return { value: undefined, done: true };
      }
    };
  }
};

console.log([...evens]); // [2, 4, 6, 8, 10]

let refer=[{name:"apple", qty:2}, {name:"banana", qty:5}];
refer=[...refer,{name:"orage",qty:4}]
console.log(refer)

console.log(refer.filter(obj=> obj.name!=="banana"))
refer.splice(1,1)
let flatstr="aakash";
console.log("===================objects==================")
const objc1={a:"1"}
const objc2=new Object()
objc2["b"]="2"
objc2.a="1"
console.log(objc2)

delete objc2.b
console.log(objc2)

console.log("=============Enumeration of object===============")
for(prop in objc1){
    console.log(objc1[prop])
}

const arr=[...Object.entries(objc2)]
console.log(arr)

const assignobj={a:1,b:2};
const assignobjt={c:3,d:3};
console.log(Object.assign(assignobj,assignobjt))
const assignobj3={b:5}//override previous target prop
console.log(Object.assign(assignobj,assignobj3))

console.log("============property method===============")

const objgs={
    "name":"aakash",
    get x(){return this.name},
    set y(name){this.name=name}
}
const objgs2={
    "name":"ganesh",
    get x(){return this.name},
    set y(name){this.name=name},
}

console.log(objgs2.x)

console.log("===========object practice==========")

const Book={
        title:"psychology of money",
        author:"aakash",
        year:"2005",
}
const pofmoneyv2=Object.create(Book)
Object.defineProperty(pofmoneyv2,"version",{value:"3", writable: true,
  enumerable: true,
  configurable: true})
console.log(pofmoneyv2.title);
console.log(Object.getOwnPropertyDescriptor(Book,"title"))
function createUser(name,age){
    return {
        name,age
    }
}
const userone=createUser("aakash",23);
const usertwo=createUser("ganesh",45)
console.log(userone,usertwo)

const person={
    name:"personone",age:24
}
console.log(person.name,person.age)
let propvar="age";
console.log(person[propvar])

let propname="gender"
person[propname]="male";
console.log(person)

console.log(Object.hasOwn(person,"age"))

delete person.age;
console.log("is age property present in person object:",Object.hasOwn(person,"age"))

function objeprint(object){
    for(entry of Object.entries(object)){
        console.log("key",entry[0]);
        console.log("value",entry[1])
    }
}
objeprint(person);

const objectf={varone:"one",vartwo:"two"};
Object.freeze(objectf)//marks configuration of all properties as non configurable and non writable
objectf["varthee"]="three";
console.log(objectf)//no effects
delete objectf.varone;
console.log(objectf)//no effects
objectf.varone="onevalue"
console.log(objectf)//no effects

const objes={varone:"one",vartwo:"two"}
Object.seal(objes)
objes["varthree"]="three"
console.log(objes)//no effects
objes["varone"]="first"
console.log(objes)//have effects
delete objes.varone;
console.log(objes)//on effect

const extensionobj={first:"one"};
Object.preventExtensions(extensionobj)
extensionobj["second"]="two";
console.log(extensionobj)

console.log("NaN == NaN",NaN == NaN)
console.log("NaN === NaN",NaN === NaN)
console.log("Object.is(NaN,NaN)",Object.is(NaN,NaN))
console.log("{} is {}" ,Object.is({},{}))

const proto={a:'aakash'}
const childobj=Object.create(proto)
childobj.a="ganesh"
console.log(childobj.a)//shadows parent property
delete childobj.a;//restore to parent property in prototype 
console.log(childobj.a)

function Person(name) {
  this.name = name;
   this.prototype={greet:"hello"};
}
Person.prototype.add=3;
const obj1=new Person()
Object.setPrototypeOf(obj1,{age:12})
console.log(Person.prototype === obj1.__proto__)
console.log(Object.getPrototypeOf(obj1))
console.log("=============prototype================")

function Car(brand ,model){
    this.brand=brand;
    this.model=model;
}
Car.prototype.brand="audi"
Car.prototype.model="u2"
Car.prototype.getDetails=function(){
    console.log(this.brand,this.model)
}
const car1=new Car("benz","u1");
console.log(car1.__proto__.brand)
const car=new Car();
console.log(car.__proto__.brand)

console.log("===custom instanceof operator====")
function Personc(){
}
function myinstanceof(object,constructor){
    return object.__proto__==constructor.prototype;
}
const pcobj=new Personc();
console.log(myinstanceof(pcobj,Personc))
console.log(myinstanceof(pcobj,Array))

console.log("=========difference between proto and __proto__")


function User(name){

}
const u1=new User("u1") //--__proto__ -> User.prototype ={}
console.log(u1.__proto__)
User.prototype.sayhi=function(){ //User.prototype={sayhi()}
    console.log("hi")
}
const u2=new User("u2") //__proto__ -> User.prototyp={sayhi()}
console.log(u2.__proto__)
u2.__proto__.sayhi()

function Animal(type){
    this.type=type;
}
Animal.prototype.speak=function(){
    console.log("animal speaks")
}

const Dog=new Animal("dog");
Dog.__proto__.speak=function(){console.log("dog speaking")}
Dog.speak()
console.log(Dog.__proto__==Animal.prototype)//overrideing same function but different implementation in child

function Books(title){
    this.title=title;
}
Books.prototype.category="general"
const bookone=new Books("pshycology of money")
console.log(bookone.category)
bookone.__proto__.category="Novel";// shadowing the property ,Shadowing = about variables in different scopes .overriding =about methods
console.log(bookone.category)


function getPrototypeChain(obj) {
    const chain = [];

    while (obj !== null) {
        const name = obj.constructor?.name || "Unknown";
        chain.push(name);
        obj = Object.getPrototypeOf(obj); 
    }

    chain.push("null"); 
    return chain;
}

let arrch = [];
console.log(getPrototypeChain(arrch)); 
 
const objo1={name:"aakash"};
const objo2={age:12};
const objo3={gender:"male"};
objo2.__proto__=objo1;
objo3.__proto__=objo2;

console.log(objo2.constructor)

function persons(name){
    this.name=name ;
}
persons.prototype.sayHI=function(){console.log('hi')}
persons.createAnonymous=function(){console.log("home")}

persons.prototype.sayHI()
persons.createAnonymous()
const ff=()=>{console.log(this)}

console.log("=================this keyword practice============")
function logthis(){
    console.log(this)
    function llinthis(){console.log(this)}
    llinthis()
}

logthis()

function outerr(value){
    this.name=value;
    this.age=23;
    const innerobj={
        age:13,
         sm:()=>{
            console.log(this.age)//23 because it is in outterr lexical context arrow always refer lexical envnt
            this.name="hello"
            const ll=()=>{
            console.log(this.name);
            }
            return ll;
        },
        nfn:function(){
            console.log(this.age);
        }
    }
    return innerobj;
}
const outerobj=new outerr("hello")
const ref=outerr("hi");
let ref2=ref.sm()
ref2()
ref.nfn();

const objrefone={value:"tt",methodone(){console.log('method one',this.value)}}
const objreftwo=Object.create(objrefone);
objrefone.methodone()
objreftwo.value="ff"
objreftwo.methodone();
function showArgs() {
  const args = Array.prototype.slice.call(arguments);
  console.log(args);
}

showArgs(1, 2, 3, 4);
//method borrowing
const person1 = {
  name: "Aakash",
  greet: function (msg) {
    console.log(msg + ", I am " + this.name);
  }
};
const person2={name:"ganesh"}
person1.greet.call(person2,"hello")
//here method from person1 act like it is in peson2 object 

//lost context problem
setTimeout(person1.greet, 1000);//here connection is lost 
setTimeout(person1.greet.bind(person1,"welcome"), 200);
setTimeout(() => {
    person1.greet("hi")
}, 1000);

console.log("===============nodejs internals ================")

setTimeout(() => {
    console.log("in first settime out")
}, 2000);

const myinterval=setInterval(()=>{console.log("in first set interval");clearInterval(myinterval)},2000,)

const promise=new Promise((resolve)=>{console.log("in first promise"); resolve()}).then(()=>{console.log("micro task queue")})
const secondtimeout=setTimeout(() => {
    console.log("second timeout")
},2100);
console.log("synchronous test")


let darr=[1,2]
let sdarre=[1];
let fdarre=[1];
let [dfe,dse]=darr
console.log(dfe,dse);
let [...dfe2]=darr;
console.log(dfe2)

const arr11=[10,20,30,40,50];
let[farrv,,sarrv]=arr11;
console.log("first and third value of arr11",sarrv,farrv)

let[,,,frarrv]=arr11;
console.log(frarrv)

let[ftwo1,ft2,...remain]=arr11;
console.log("first and second",ftwo1,ft2,remain)

// let [,,,,,defarv]=arr11;
// console.log(defarv) handled by default value


let [,,,,,defarv=60]=arr11;
console.log(defarv) 

//swaping two value 
let a2='one';
let b2='two';
// a2,b2=b2,a2 it is wrong swapping

[a2,b2]=[b2,a2]
console.log("first ",a2,"second",b2)
console.log("================ OBJECT destructuring==================")
const userdest={uname:"aakash",age:20,email:"aakash@gmail.com",address:{streed:"kali temple street",zip:606303,city:"kallakurichy"},preference:{"notification":true,theme:"dark"}};
let {usedestname,usedestemail}=userdest;
console.log(usedestemail,usedestname)//you will get undefined because in object destructring is based on keye not index
let {uname,email}=userdest;
console.log(uname,email)

let {age:yearsold}=userdest;
console.log(yearsold)

let{zip}=userdest["address"]//destructuring from nested objects
console.log(zip)

let {phone=99987343}=userdest;
console.log(phone)

let {uname:usetestname,...remainuserinfo}=userdest;
console.log(usetestname,"remaining user info other than name",remainuserinfo);
function destructureone({name,age,country='india'}){
console.log(name,age,country)
}
destructureone({name:"suresh",age:22,country:"africa"})

function destructringtwo({parent:[fathername,mothername],childname:[secondchild,...otherchild]}){
console.log(fathername,mothername);
(function childnname(){console.log(secondchild,otherchild)})()
}
destructringtwo({parent:['ponnusamy','bhuvaneshwari'],childname:['aakash',"durga","ganesh"]})

function configuration({encoding="utf8",flag="r"}){
    console.log(encoding,flag)
}
configuration({encoding:"ASCII"})
configuration({flag:"w"})
configuration({encoding:"utf16",flag:"a"})

console.log("==================Array destructuring============")
let genreone=["rocksongs"];let genretwo=["jazzsongs"]; 
let genrethree=["popsongs"]


let allgenre=[...genreone,...genretwo,...genrethree]
console.log(allgenre);

let playlistfordrive=[...allgenre]
console.log(playlistfordrive);

let hellostr="hello";
let strchar=[...hellostr]
console.log(strchar);

function playtrack(trackname,arist,volume){
console.log(trackname,arist,volume)
}
let track=["mysong","aniruth",80]
playtrack(...track);

const defaultuserst={theme:"light",notification:true,language:"english"}
const userpreference={theme:"dark"}
let finalsettings={...defaultuserst,...userpreference};//here i found the further object property override property of before object if have same key value
console.log(finalsettings)
finalsettings={...finalsettings,isActive:true};
console.table(finalsettings)
const myinfo={...userdest}
myinfo.uname="ganesh"
console.log(myinfo,userdest)

function sumrest(...dynamicsum){
 let dsum=dynamicsum.reduce((pre,current)=>{return pre+current},0)
 console.log(dsum)
}
sumrest(1,2,3,4,5)

const data = [101, 'John', 'Doe', 30, 'New York', 'USA'];
let [dataid,dataname,datalname,dataage,...remaining]=data;
console.log(dataid,dataname,datalname,dataage,remaining)


console.log("================REGEX IN JAVASCRIPT===========")

const pattern1=/abc/;
console.log(pattern1.test("akllajdabc"))
const pattern2=/^a/;
console.log(pattern2.test("aabc"))
console.log(pattern2.test('babce'))
const pattern3=/h$/
console.log(pattern3.test("aakasH"))//case sensitive
console.log(pattern3.test("aakash"))
const pattern4=/a.b/
console.log(pattern4.test("axb"))
console.log(pattern4.test("a4b"))
console.log("------------------")
const emailstr="hello@gmail.com";
console.log(/^[\w.-]+@[A-Za-z\d.-]+\.{1}[A-Za-z]{2,}$/.test(emailstr))
console.log("jels23l123".match(/\d+/g))
console.log("ijkadf123li4322".match(/\d+/))
const pattern5="The price is 45 dollars and 30 cents";
console.log(pattern5.match(/\d{2,}/g))
console.log(pattern5.match(/\w+/g))
console.log(/^Hello+/.test("Hello"))
console.log(/jpg$/.test("sample.png"))
const test5="Hai i am Aakash"//extract all the lowercase letters
console.log(test5.match(/\b[a-z]+\b/g))
console.log(test5.match(/\b[A-Z][a-z]*\b/g))
const test6="kkk KKK AKAJ lkj"
console.log(test6.match(/[A-Z]+\b/g))
console.log(test5.match(/[aeiou]/g))
const test7="hello@gmail.com"
console.log(test7.match(/^[\w\d]+@gmail\.com$/))
const dateone="2025-10-21";
let datearr=dateone.match(/^(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/);
console.log("month:",datearr.groups.month)
//backfreference
const boldtag="<bold>bold</bold>";
const boldtaginvalid="<h>hai<b>";
console.log(/<(bold)>.*<\/(bold)>/.test(boldtag))
console.log(/<(\w+)>.*<\/\1>/.test(boldtaginvalid))
const ouser = {
  name: "John",
  social: {
    twitter: "@john123"
  }
};
console.log(ouser.social.instagram);
const oorder = {
  id: 101,
  customer: {
    name: "Alice"
  }
};

// console.log(oorder.customer.address.city); error
console.log(oorder.customer.address?.city);
const company = {
  name: "TechCorp",
  manager: {
    name: "Sara"
  }
};
console.log(company.manager.phone)
console.log(company.manager.phone?.nsp)
const product = {
  name: "Laptop",
  reviews: []
};
console.log("review ",product.reviews[2]);