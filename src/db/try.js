const add= (a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(a<0 || b<0){
                return reject('Number must be non negetive');
            }
            resolve(a+b);
        },2000);
    })
}


// add(2,2).then((sum)=>{
//     console.log(sum);
//     return add(sum, 4);

// }).then((sum2)=>{
//     console.log(sum2);
// }).catch((e)=>{
//     console.log(e);
// })

const doWork = async()=>{
    var res=await add(1,2);
    var res2=await add(res,1);
    var res3= await add(res2,1);
    return res3;
}
doWork().then((result)=>{
    console.log("REsult:",result);
}).catch((e)=>{
    console.log('e',e);
})


console.log("a")
doWork()
console.log("b")
