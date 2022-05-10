const StudentService = require("../../lib/services/StudentService");

describe("Unit test for ExplorerService", ()=>{
    test("1. Get all students listed with all their fields", ()=>{
        const students = [
            {
                id: "6264d5d89f1df827eb84bb23",
                name: "Warren", 
              },
              {
                id: "6264d5d85cf81c496446b67f",
                name: "Lucinda",
              },
              {
                id: "6264d5d8cda17de0d2e9f236",
                name: "Fuentes",
              }
        ];
    
        const studentsList = StudentService.getStudentsInfo(students);
    
        expect(studentsList).toMatchObject([
            {
                id: "6264d5d89f1df827eb84bb23",
                name: "Warren", 
              },
              {
                id: "6264d5d85cf81c496446b67f",
                name: "Lucinda",
              },
              {
                id: "6264d5d8cda17de0d2e9f236",
                name: "Fuentes",
              }
        ]);
    });
    test("2. Get students emails by certification status", ()=>{
        const students = [{email: "Todd@visualpartnership.xyz", haveCertification: true}];
    
        const studentsEmail = StudentService.getEmailByCertificationStatus(students);
    
        expect(studentsEmail).toMatchObject(["Todd@visualpartnership.xyz"]);
    });
    test("3. Get students by credits validation", ()=>{
        const students = [{credits: 508}, {credits: 499}];
    
        const studentsHighCredits = StudentService.getStudentsByHighCredits(students);
    
        expect(studentsHighCredits).toMatchObject([{credits: 508}]);
    });
});