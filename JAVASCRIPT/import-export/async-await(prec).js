let sum = async(a,b) => {
    let pro =  await new Promise((resolve,reject)=>{
        setTimeout(()=> {
            return resolve(a+b);
        },2000)
    })
    console.log(pro)
}
sum(10,15)