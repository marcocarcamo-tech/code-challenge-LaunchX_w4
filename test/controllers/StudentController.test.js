const StudentController = require("../../lib/controllers/StudentController");
describe("Unit test for ExplorerController", ()=>{
    test("1. Get list of students", ()=>{

        const studentList = [{name: "Warren"},{name: "Lucinda"}]
        const students = ExplorerController.getStudentsInfo(studentList);
    
        expect(students).toMatchObject({name: "Warren"},{name: "Lucinda"});
    });
    
});