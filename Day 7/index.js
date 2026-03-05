// const carts=['táo','nho','bàn chải','quần','áo','gối','dầu gội','sữa tắm'];

// console.log(carts.length);
// console.log(carts[0]);
// console.log(carts[carts.length-1]);

const friendName =['Linh','Nam','Thanh'];
friendName.push('Dũng')
friendName.unshift("Nhi");
friendName.pop()
friendName.splice(1,0,"Hải")


console.log(friendName); 
console.log(friendName.length);
console.log(friendName[0]);

let i=0
for(let i=0; i < friendName.length ;i++){
    console.log(friendName[i])
}

