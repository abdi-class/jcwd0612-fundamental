// Interface for working hours entry
interface WorkingHours {
  name: string;
  clockIn: string;
  clockOut: string;
  dailyHour: number;
  dailySalary: number;
}

class Employee {
  name: string;
  working: WorkingHours[] = []; // Array to store working hours data

  // Private field for fixed working hours
  #fixWorkingHours: number = 6;

  constructor(_name: string) {
    this.name = _name;
  }

  // Method to calculate salary based on working hours
  calculateDailySalary = (
    workingHours: number,
    mainSalary: number,
    overTimeSalary: number
  ): number => {
    if (workingHours > this.#fixWorkingHours) {
      const amountMainSalary = this.#fixWorkingHours * mainSalary;
      const amountOverTimeSalary =
        (workingHours - this.#fixWorkingHours) * overTimeSalary;
      return amountMainSalary + amountOverTimeSalary;
    } else {
      return workingHours * mainSalary;
    }
  };
}

class FullTime extends Employee {
  private mainSalary: number = 100000;
  private overTimeSalary: number = 75000;

  constructor(_name: string) {
    super(_name);
  }

  // Method to add working hours entry
  addWorkingHours = (clockIn: string, clockOut: string): void => {
    const dailyHour =
      parseInt(clockOut.split(":")[0]) - parseInt(clockIn.split(":")[0]);

    this.working.push({
      name: this.name,
      clockIn,
      clockOut,
      dailyHour,
      dailySalary: this.calculateDailySalary(
        dailyHour,
        this.mainSalary,
        this.overTimeSalary
      ),
    });
  };

  // Method to calculate total salary
  getTotalSalary = (): number => {
    let amount = 0;
    this.working.forEach((val) => (amount += val.dailySalary));
    return amount;
  };
}

// Example usage
const employeeA = new FullTime("Alfred"); // instance of fulltime employee
employeeA.addWorkingHours("09:00", "15:00");
employeeA.addWorkingHours("09:00", "17:00");
console.log(employeeA.working);
console.log(employeeA.getTotalSalary());
