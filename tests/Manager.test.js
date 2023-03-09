const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("constructor", () => {
        it("should place the pass parameters in their appropriate properties in the constructor", () => {
            //Arrange
            newManName = "Rodolfo";
            newManId = "342"
            newManEmail = "rsanchez@place.com"
            newManOfficeNumber = "5628675309"
            //Act
            const newManager = new Manager(newManName, newManId, newManEmail, newManOfficeNumber);
            //Assert
            expect(newManager.name).toBe(newManName);
            expect(newManager.id).toBe(newManId);
            expect(newManager.email).toBe(newManEmail);
            expect(newManager.officeNumber).toBe(newManOfficeNumber);

        });
    });
    describe("methods", () => {
        it("should return the officenumber when using getOfficeNumber", () => {
            //Arrange
            newManName = "Rodolfo";
            newManId = "342"
            newManEmail = "rsanchez@place.com"
            newManOfficeNumber = "5628675309"
            //Act
            const newManager = new Manager(newManName, newManId, newManEmail, newManOfficeNumber);
            //Assert
            expect(newManager.getOfficeNumber()).toBe(newManOfficeNumber);
        });
        it("should return the role as Manager when using getRole", () => {
            //Arrange & Act
            const newManager = new Manager('Rsanchez', '263434', 'jon@smith.com', "8945694789");
            //Assert
            expect(newManager.getRole()).toBe("Manager");
        });
    });
});