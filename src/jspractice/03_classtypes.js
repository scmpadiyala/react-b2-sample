// Class defintion sample program


export default class Student {
  // member variables

  constructor() {
    this.stdid = 450;
    this.name = "Sample student";
    this.gender = true; // true means male
    this.standard = "4th Standard";
  }

  // member functions
  displayStudentInfo() {
    console.log("===============Student Info===============");
    console.log("std id " + this.stdid);
    //console.log("ID : " + this.id);
    console.log("Student Name : " + this.name);
    console.log("Gender " + this.gender ? "Male" : "Female");
    console.log("Standard : " + this.standard);
  }

  isMaleStudent() {
    return this.gender;
  }
}

// create object of type Student

var ram = new Student();

// invoke / call the displayStudentInfo function of Student
ram.displayStudentInfo();
console.log("is male student : " + ram.isMaleStudent());

// KGStudent is a child class for Student (parent)
class KGStudent extends Student {
  
    constructor() {
    super();
    this.kg = "LKG";
    this.isDayCare = true;
  }

  // Overriding
  displayStudentInfo() {
    super.displayStudentInfo();
    console.log("KG : " + this.kg);
    console.log("Day Care student : " + this.isDayCare);
  }
}

lkgStudent = new KGStudent();

lkgStudent.displayStudentInfo();
