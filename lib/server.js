const StudentController = require("./controllers/StudentController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Visual Partners Api welcome!"});
});
app.get("/v1/students/", (request, response) => {
    const students = StudentController.getStudentsInfo();
    response.json(students);
});
app.get("/v1/haveCertification", (request, response) => {
    
    const certifiedStudentsEmail = StudentController.getEmailByCertification();
    const emailsObject = {};
    let haveCertificationKey = "haveCertification";
    let emailsKey = "emails";
    emailsObject[haveCertificationKey] = "true";
    emailsObject[emailsKey] = certifiedStudentsEmail;
    response.json(emailsObject);
});
app.get("/v1/highCredits", (request, response) => {
    
    const studentsByHighCredits = StudentController.getStudentsByHighCredits();
    const studentsObject = {};
    let highCreditsKey= "highCredits";
    let studentsKey = "students";
    studentsObject[highCreditsKey] = "Credits > 500";
    studentsObject[studentsKey] = studentsByHighCredits;
    response.json(studentsObject);
});
app.listen(port, () => {
    console.log(`VisualPartners API in localhost:${port}`);
});