import IStudent from "./05_interfacesam";

export PGStudent implements IStudent {


    calcTotalMarks() : number {
        return 350;
    }

    calcTotalMarks(sportCategory : String) : number {
        return 459;
    }

    calcStudentAge() : number {
        return 18;
    }

    getStudentDetails() {
        return "Sample"
    }

}