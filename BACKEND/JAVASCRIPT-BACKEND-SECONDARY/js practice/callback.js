function processArray(arr,callback){
    
       arr=arr.map(element => {
           return callback(element)
        });
        console.log(arr)
}
processArray([1,2,3,4],(element)=>{
    return element*2;
})


Array.prototype.myforeach=function(callbackfun){
        for(let element of this){
            callbackfun(element);
        }
    }

let arr=[1,3,5];
arr.myforeach((element)=>{console.log("element",element)})
console.log(Array.prototype instanceof Object)

function myfilter(callback){
    for(let i=0;i<this.length;i++){
        if(!callback(this[i])){
                this.splice(i,1);
                --i;
        }
    }
    return this;      
}
let ar_filter_sample=[1,2,3,4];
Array.prototype.myfilter=myfilter;
ar_filter_sample=ar_filter_sample.myfilter((element)=>element%2 ===0);
console.log(ar_filter_sample)

function myreduce(arr,callback,ref){

}