// set --> store unique value

// let setdata = new Set([100,100,200,400])

// setdata.add(300)
// console.log(setdata.has(300));
// setdata.delete(300)
// console.log(setdata.size);
// setdata.forEach((element,index)=> {
//     console.log(element)
// })
// console.log(setdata.keys());
// console.log(setdata.values());
// setdata.clear()
// console.log(setdata);


// map ---> map store unique key and value (object)


// let mapdata = new Map([["100 ", "Hundred"] , ["name" , "mit"]]);

// mapdata.set("200","Two")
// mapdata.delete("200","Two")
// console.log(mapdata.has("200","Two"));
// console.log(mapdata.keys());
// console.log(mapdata.values());
// console.log(mapdata.size);
// console.log(mapdata.get("100")); // return value as per key
// mapdata.forEach((element,index)=> {
//     console.log(`${index} --> ${element}`);
// })
// console.log(mapdata)

// weakset ---> setmap store non-premative value (Object) but not show in console becuse its refrance is week

// let a = {"id" : 1} , b = {"id" : 2} 

// let weekset = new WeakSet([a,b]);

// console.log(weekset.has(a));


// weakmap ---> sweakmap store non-premative value (Object) but not show in console becuse its refrance is week

let a = { id: 1 }, 
    b = { id: 2 };

let weakmap = new WeakMap([
    [a, "first object"],
    [b, "second object"]
]);

console.log(weakmap.get(a)); 
console.log(weakmap.get(b)); 

