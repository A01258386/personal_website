const courseList= [{ 'code': "ACIT 1620" ,  "name": " Web Fundamental Technologies"},{ 'code': "ACIT 1515" ,  "name": " Scripting for IT"},{ 'code': "ACIT 1630" ,  "name": "Database Systems"},]
let user;
do{
   user= prompt("your 4 digit number");
} while(!isNaN(user) || user.length != 4); 
user= prompt("your 4 digit number");