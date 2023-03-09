const Employee = require('../lib/Employee')
const Engineer = require('../lib/Engineer')

describe("Engineer", () => {
    describe("constructor", () => {
        it("should place the pass parameters in their appropriate properties in the constructor", () => {
            //Arrange
            newEngName = "Judas";
            newEngId = "666"
            newEngEmail = "bringdownthesystem@hell.com"
            newEngGithub = "damien420"
            //Act
            const newEng = new Engineer(newEngName, newEngId, newEngEmail, newEngGithub);
            //Assert
            expect(newEng.name).toBe(newEngName);
            expect(newEng.id).toBe(newEngId);
            expect(newEng.email).toBe(newEngEmail);
            expect(newEng.github).toBe(newEngGithub);
        });
    });
    describe("methods", () => {
        it("should return the github usernmae when using getGithub", () => {
            //Arrange
            newEngName = "Jesus";
            newEngId = "001"
            newEngEmail = "jChrist@heaven.com"
            newEngGithub = "waterJogger312"
            //Act
            const newEng = new Engineer(newEngName, newEngId, newEngEmail, newEngGithub);
            //Assert
            expect(newEng.github).toBe(newEngGithub);
        });
        it("should return the role as Engineer when using getRole", () => {
            //Arrange & Act
            const newEng = new Engineer('jChrist', '001', 'jChrist@heaven.com', "waterJogger312");
            //Assert
            expect(newEng.getRole()).toBe("Engineer");
        });
    });
})