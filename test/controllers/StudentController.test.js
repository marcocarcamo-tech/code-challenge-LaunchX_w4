const StudentController = require("../../lib/controllers/StudentController");
describe("Unit test for StudentController", ()=>{
    test("1. Get list of students", ()=>{

        const students = StudentController.getStudentsInfo();
    
        expect(students[0].name).toBe("Warren");
    });
    test("2. Get students emails by positive certification status", ()=>{
        
        const certifiedStudentsEmail = StudentController.getEmailByCertification();
    
        expect(certifiedStudentsEmail[0]).toBe("Todd@visualpartnership.xyz");
    });
    test("3. Get students by credits validation", ()=>{
        
        const studentsHighCredits = StudentController.getStudentsByHighCredits();
    
        expect(studentsHighCredits[0]).toMatchObject({
            id: "6264d5d89f1df827eb84bb23",
            name: "Warren",
            email: "Todd@visualpartnership.xyz",
            credits: 508,
            enrollments: [
              "Visual Thinking Intermedio",
              "Visual Thinking Avanzado"
            ],
            previousCourses: 1,
            haveCertification: true
          });
    });

    
});