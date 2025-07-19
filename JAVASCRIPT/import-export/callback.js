// Callback ---> function take argument as function called...

// let greeting = (callback) => {
//     console.log("1st function");
//     callback();
// };

// let test = () => {
//     console.log("2nd function");
// };

// greeting(test);


//  CALLBACK HELL


// let firstFunction = (callback , m , n , z) => {
//     console.log("first Function called")
//     callback(m , n , z)
// }
// let secoundFunction = (m , n , z) => {                     
//     console.log("second function called")
//     m(n , z)
// }
// let thirdFunction = (n , z) => {
//     console.log("Third function called")
//     n(z)
    
// }
// let FourthFunction = (z) => {
//     console.log("fourth function called")
//     z()
// }

// let fifthFunction = () => {
//     console.log("fifth function called")
// }

// firstFunction(secoundFunction , thirdFunction, FourthFunction ,  fifthFunction)


// let firstFunction = (a , b , c , d) => {
//     console.log("first Function called")
//     a(b , c , d)
    
// }
// let secoundFunction = (b , c , d) => {                     
//     console.log("second function called")
//     b(c , d)
   
// }
// let thirdFunction = (c , d) => {
//     console.log("Third function called")
//     c(d)
    
    
// }
// let FourthFunction = (d) => {
//     console.log("fourth function called")
//     d()
// }

// let fifthFunction = () => {
//     console.log("fifth function called")
// }

// firstFunction(secoundFunction , thirdFunction , FourthFunction , fifthFunction )


// let icc = (acc , bcci , sca) => {
//     console.log("icc order");
//     acc(bcci , sca)
// }

// let acc = (bcci , sca) => {
//     console.log("acc order")
//     bcci(sca)
// }

// let bcci = (sca) => {
//     console.log("bcci order")
//     sca()
// }

// let sca = () => {
//     console.log("sca perform")
// }

// icc(acc , bcci , sca);


