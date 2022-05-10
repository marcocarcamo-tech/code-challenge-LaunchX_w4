class ExplorerService{
    static getStudentsInfo(students){

        return students;
    }

    static getEmailByCertificationStatus(students){

        const certifiedStudents = students.filter((student) => student.haveCertification === true);

        return certifiedStudents.map((student) => student.email);
    }
}

module.exports = ExplorerService;