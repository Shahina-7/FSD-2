const students = [
    {id:1,name:"Ravi",age:20},
    {id:2,name:"Raju",age:22},
    {id:3,name:"Karthik",age:20},
];
//create a student
const newStudent = {id:4,name:"Anil",age:21};
students.push(newStudent);
//read all students
console.log("All Students : ",students);
//read a student by ID
const studentReadId = 2;
const student = students.find((stu)=>stu.id===studentReadId);
if(student){
    console.log('Student with id $(studentReadId) : ',student);
}else{
    console.log('Student with id $(studentReadId) not found');
}
//update a student by ID
const updateId = 3;
const updateData = {id:3,name:"Rohan",age:21};
const updateIndex = students.findIndex((stu)=>stu.id===updateId);
if(updateIndex!==-1){
    students[updateIndex]={...students[updateIndex],...updateData};
    console.log("Student Updated : ",students[updateIndex]);
}else{
    console.log('Student with id $(updateId) not found');
}
//delete a student by ID
const deleteId = 1;
const deleteIndex = students.findIndex((stu)=>stu.id===deleteId);
if(deleteIndex!==-1){
    const deletedStudents = students.splice(deleteIndex,1);
    console.log("Student Deleted : ",deletedStudents[0]);
}else{
    console.log('Student with id $(deleteId) not found');
}
console.log("Students after crud : ",students);