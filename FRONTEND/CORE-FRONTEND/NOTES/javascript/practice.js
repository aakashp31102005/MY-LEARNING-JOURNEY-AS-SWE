function createCounter(a,b){
    let v=a;
    return function counter(){
        v+=b;
        return v;
    }
}
const counter =createCounter(5,2);
console.log(counter())
console.log(counter())

const toggle=(function createToggle(){
    let result=false;
    return function toggle(){
            result=!result;
            return result;
    }
})();
console.log(toggle());
console.log(toggle());
console.log(toggle());

function createBankaccount(amount){
    let balance=0;
     if (amount>0){
        balance+=amount;
              }
    return {
        remaining:balance,
        getbalance:()=>{
            return balance;
        }
        ,deposit:(amount)=>{
            if (amount>0){
        balance+=amount;
              }
    }
}
}

const account = createBankaccount(100);
console.log(account.getbalance());
account.deposit(50);
console.log(account.remaining)
console.log(account.getbalance());


function testdebugger(){
    let varone="one";
    let obj={
        hel:"hello"
    };
    function inner(){
        varone+=" two";
        console.log("inner")
    }
    inner();
    function getter(){
        return varone;
    }
    return {getter}
}

const objtestd=new testdebugger();
console.log(objtestd.getter())