const StudentController = require("../../lib/controllers/StudentController");
describe("Unit test for StudentController", ()=>{
    test("1. Get list of students", ()=>{

        const students = StudentController.getStudentsInfo();
    
        expect(students[0].name).toBe("Warren");
    });
    
});