class ExplorerService{
    static getStudentsInfo(students){

        return students;
    }

    static getEmailByCertificationStatus(students){

        const certifiedStudents = students.filter((student) => student.haveCertification === true);

        return certifiedStudents.map((student) => student.email);
    }

    static getStudentsByHighCredits(students){

        return students.filter((student) => student.credits > 500);
    }
}

module.exports = ExplorerService;