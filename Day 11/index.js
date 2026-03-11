const employees = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    email: "nva@company.com",
    phoneNumber: "0901234567",
    gender: "Male",
    position: "Developer",
    salary: 2000,
  },
  {
    id: 2,
    name: "Trần Thị B",
    email: null,
    phoneNumber: "0912345678",
    gender: "Female",
    position: "Tester",
    salary: 1200,
  },
  {
    id: 3,
    name: "Lê Văn C",
    email: "lvc@company.com",
    phoneNumber: null,
    gender: "Male",
    position: "Developer",
    salary: 1800,
  },
  {
    id: 4,
    name: "Phạm Thị D",
    email: null,
    phoneNumber: null,
    gender: "Female",
    position: "HR",
    salary: 1000,
  },
  {
    id: 5,
    name: "Hoàng Văn E",
    email: "hve@company.com",
    phoneNumber: "0934567890",
    gender: "Male",
    position: "Manager",
    salary: 3500,
  },
];

const filterEmployees = employees.filter((employee)=>{
  const {email, phoneNumber}= employees;
 return employee.email || employee.phoneNumber ;

})
console.log(filterEmployees);

const upContactInfo = filterEmployees.map((employee)=>{
    const {email,id,position}= employee;
  
     return email
     ? employee
     :{...employee, email:`${id}_${position.toLowerCase()}@company.com`};
});
 console.log(upContactInfo);

 const totalSalary= employees.reduce((sum,employee)=>{
    return sum + employee.salary;
},0);
 const avgSalary = totalSalary / employees.length;

 console.log(avgSalary.toLocaleString());

 const higherSalary = employees.filter((employee)=>{
    return employee.salary > avgSalary
 });
  console.log(higherSalary);

  const lowerSalary = employees.filter((employee)=>{
    return employee.salary < avgSalary
  });
   console.log(lowerSalary);