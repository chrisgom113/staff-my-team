class Employee {
    constructor(name, id, email, role = 'Employee') {
        this.name = name;
        this.id = id;
        this.email = email
        this.role = role;
    };

    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };
    getRole() {
        return this.role;
    };
}

module.exports = Employee