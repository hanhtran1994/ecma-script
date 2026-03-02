// let name = "Tran Tin Hanh";
// const birthday ="08/04/1994";
// let birthplace_live = "Ho Chi Minh city";
// let goalforyear= "My goal for this year is complete well with Full Stack Website Programming and continue the level 2";

// console.log(name);
// console.log(birthday);
// console.log(birthplace_live);
// console.log(goalforyear);


// let a=8
// let b=4

// console.log(`phep tinh ${a}+${b}=${a+b}`);
// console.log(`phep tinh ${a}-${b}=${a-b}`);
// console.log(`phep tinh ${a}*${b}=${a*b}`);
// console.log(`phep tinh ${a}/${b}=${a/b}`);

// // let sleepHours=10；

// // if(sleepHours < 5){
// //     console.log(`rất buồn ngủ vì hôm qua ngủ chỉ có ${sleppHours} tiếng`);
// // } else if (sleepHours >= 5 && sleepHours < 7){
// //     console.log(`Hơi mết vì hôm qua ngủ chỉ có ${sleepHours} tiếng`);
// // } else if (sleepHours >=7 && sleepHours < 9){
// //     console.log(`Tỉnh táo vì hôm qua ngủ đủ ${sleepHours} tiếng`);
// // } else {
// //     console.log(`Nhức đầu vì hôm qua ngủ tận ${sleepHours} tiếng`);
// }

let month = 4
let year = 2013

 if ( month === 1 || month ===3 ||month ===5 ||month ===7 ||month ===8 ||month ===10 ||month ===12 ) {
    console.log(`Tháng ${month} có 31 ngày`);
   
 } else if (month ===4 ||month ===6 ||month ===9 ||month ===11 ){
    console.log(`Tháng ${month} có 30 ngày`);

 } else if(month ===2 ){

       if(year % 4 ===0 && year % 100 !==0){
        console.log(`Tháng 2 có 29 ngày`);

        }else {
         console.log(`Tháng 2 có 28 ngày`);
         }
 } else{
       console.log(` Tháng không hợp lệ`);
 }
    