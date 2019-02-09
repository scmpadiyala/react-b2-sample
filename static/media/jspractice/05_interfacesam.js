/*
    This defines the specification for API (Application Programming Interface)

    Component A & B ==> Want to interact 

    Contract / Guidelines
*/

export default interface IStudent {

    calcTotalMarks() : number;

    calcTotalMarks(sportCategory : String) : number;

    calcStudentAge() : number;

    getStudentDetails() ;
}