// Write your solution in this file!
const employee = 
{  name: "angel",
streetAddress: "11 Broadway",
    }
function updateEmployeeWithKeyAndValue(object, key, value){
    return { ...employee,["name"]: "Sam", ["streetAddress"]:"11 Broadway", };
}
function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value){
    employee["name"]= "Sam";
    employee["streetAddress"]= "12 Broadway"
    return employee;
}
function deleteFromEmployeeByKey(object,key){
return {...employee[delete "name"]}
}
function destructivelyDeleteFromEmployeeByKey(object,key){
    delete employee.name
    return employee;
}