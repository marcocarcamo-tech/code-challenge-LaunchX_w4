const StudentController = require("../../lib/controllers/StudentController");
describe("Unit test for StudentController", ()=>{
    test("1. Get list of students", ()=>{

        const students = StudentController.getStudentsInfo();
    
        expect(students[0].name).toBe("Warren");
    });
    test("2. Get students emails by positive certification status", ()=>{
        
        const certifiedStudentsEmail = StudentController.getEmailByCertification();
    
        expect(certifiedStudentsEmail[0].name).toBe("Warren");
    });
    
});