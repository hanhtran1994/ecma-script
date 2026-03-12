const candidates = [
 { name: "An", skills: ["C++", "Python"], role: "AI" },
 { name: "Bình", skills: ["HTML", "CSS", "JavaScript"], role: "Frontend" },
 { name: "Châu", skills: ["NodeJS", "MongoDB"], role: "Backend" },
 { name: "Dương", skills: ["Python", "TensorFlow"], role: "AI" },
 { name: "Trung", skills: ["HTML", "CSS", "ReactJS"], role: "Frontend" },
 { name: "Thảo", skills: ["NodeJS", "Express", "Docker"], role: "Backend" },
 { name: "Hải", skills: ["Figma", "UI/UX"], role: "Design" },
 { name: "Linh", skills: ["Python","Pandas","Scikit-Learn"], role:"Data Science" }
];

const buildWebTeams = candidates.filter((candidate)=> {
  return candidate.role === "Frontend" || candidate.role === "Backend" ;

})
 console.log(buildWebTeams)

 const newStaffOfBWT= buildWebTeams.map((candidate)=>{
  return `chào ${candidate.name},mời bạn vào team Web!`
 })
  console.log(newStaffOfBWT)