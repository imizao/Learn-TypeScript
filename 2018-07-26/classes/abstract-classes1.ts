abstract class Department {
  constructor(public name: string) {

  }
  
  printName(): void {
    console.log('Department name: ' + this.name);
  }

  abstract printMeeting(): void;
}

class AccoutingDepartment extends Department {
  constructor() {
    super('Accounting and Auditing');
  }

  printMeeting(): void {
    console.log("The Accounting Department meets each Monday at 10am.")
  }

  generateReports(): void {
    console.log("Genetating accounting reports...")
  }
}

let department: Department;
department = new Department(); // 无法创建抽象类的实例
department = new AccoutingDepartment();
department.printName();
department.printMeeting();
department.generateReports(); // 无法使用不存在抽象类中的方法
