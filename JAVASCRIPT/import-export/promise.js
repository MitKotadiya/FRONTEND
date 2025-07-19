    // PROMISE --- > Pending , resolve , reject

let data = new Promise((resolve, reject) => {
    let a = false;
    if (a) {
        resolve("run...");
    } else {
        reject("not run.....");
    }
}); 

data.then(resolve => console.log(resolve));
data.catch(reject => console.log(reject));
console.log(data);

