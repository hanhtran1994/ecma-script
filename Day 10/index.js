const employees=[]

const prompt = require("prompt-sync")();
let number =Number(prompt("Nhập số lượng nhân viên mà bạn muốn tạo:"));

let id =1 ;

for (let i=0; i<number;i++){
    const name = prompt ("Nhập vào tên nhân viên:" );
    const email= prompt ("Nhập vào email nhân viên:" );
    const phoneNumber= prompt ("Nhập vào số điện thoại nhân viên:" );
    const gender= prompt ("Nhập vào giới tính nhân viên:" );
    const position= prompt ("Nhập vào vị trí nhân viên:" );
    const salary= prompt ("Nhập vào mức lương nhân viên:" );

    employees.push({

    
        id,
        name,
        email,
        phoneNumber,
        gender,
        position,
        salary,

     });
     id++;
     
}
console.log(employees);