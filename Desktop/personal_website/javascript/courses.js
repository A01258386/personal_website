const courseList= [{ code: "1620" ,  name: " Web Fundamental Technologies"},{ code: "1515" ,  name: " Scripting for IT"},{ code: "1630" ,  name: "Database Systems"},]
var user;
do{
   user= prompt("your 4 digit number").toString;
   for (let code of courseList ){
   if (courseList.code ==user){
       break
   }
}
} while(!isNaN(user) || user.toString().length !== 4); 
user= prompt("your 4 digit number");

for(let course of courseList)
{
    if(course.code === user )
    {
        console.log("Yes I am taking the course: ACIT ${course.code}"+ '-' + "${course.name}")
    }
    else {
        courseList.push({code:user,name:null,})
    }
    console.log('Successful')
}