const Reader = require("../utils/Reader");
const StudentService = require("../services/StudentService");
class StudentController{
    static getStudentsInfo(){

        const students = Reader.readJsonFile("visualpartners.json");

        return StudentService.getStudentsInfo(students);

    }
}

module.exports = StudentController;