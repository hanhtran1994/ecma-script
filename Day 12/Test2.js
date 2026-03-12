const workHours =  [2,4,0,5,3,6,2];
let sum =0 
for( let i=0 ; i< workHours.length; i++){
    sum += workHours[i];
}
 console.log(sum);

for( let i=0 ; i< workHours.length; i++)
if(workHours[i] >= 5 ){
    console.log(`ngày thứ ${i+1} làm việc rất năng suất`);
 } else{
    console.log(`Làm việc không đạt năng suất`);
 }