const Employee = require('../lib/Employee')
const Intern = require('../lib/Intern')

describe("Intern", () => {
    describe("constructor", () => {
        it("should place the pass parameters in their appropriate properties in the constructor", () => {
            //Arrange
            newInternName = "Ryan";
            newInternId = "789"
            newInternEmail = "ryan@dundermifflin.com"
            newInternSchool = "University of Pennslyvania Scranton"
            //Act
            const newIntern = new Intern(newInternName, newInternId, newInternEmail, newInternSchool);
            //Assert
            expect(newIntern.name).toBe(newInternName);
            expect(newIntern.id).toBe(newInternId);
            expect(newIntern.email).toBe(newInternEmail);
            expect(newIntern.school).toBe(newInternSchool);
        });
    });
    describe("methods", () => {
        it("should return the name of the school when using getSchool", () => {
            //Arrange
            newInternName = "Ryan";
            newInternId = "789"
            newInternEmail = "ryan@dundermifflin.com"
            newInternSchool = "University of Pennslyvania Scranton"
            //Act
            const newIntern = new Intern(newInternName, newInternId, newInternEmail, newInternSchool);
            //Assert
            expect(newIntern.getSchool()).toBe(newInternSchool);
        });
        it("should return the role as Intern when using getRole", () => {
            //Arrange & Act
            const newIntern = new Intern('Chris', '456', 'gomez@msn.com', "University of California, Irvine");
            //Assert
            expect(newIntern.getRole()).toBe("Intern");
        });
    });
})