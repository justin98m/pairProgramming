// Medium (4)
// Create a car object with the items: Make, Model, Year, Mileage, and Color. 
//Then create 3 methods in the object; 
//A driveToWork method, driveAroundTheWorld method, and runErrands method. 
//Each of these methods should affect the car’s mileage adding to it each time 
//and console logging the old mileage and the new mileage.

// driveToWork = 33 miles
// driveAroundTheWorld = 24,000 miles
// runErrands = 30 miles 

// Example 1:
// car.driveToWork();
// Output: old mileage: 2000 | new mileagea: 2033
// Explanation: 2000 + 33 = 2033

// Example 2:
// car.driveAroundTheWorld();
// Output: old mileage: 2033 | new mileage: 26033 

// Example 2:
// car.runErrands();
// Output: old mileage: 26033 | new mileage: 26063


let Car = {
  make: 'Ford',
  model: 'Edge',
  year: 2009,
  mileage: 170000,
  color: 'grey',
  driveToWork: function () {
    console.log(`Old Mileage | ${this.mileage}`);
    this.mileage += 33;
    console.log(`New Mileage | ${this.mileage}`);
  },
  driveAroundTheWorld: function () {
    console.log(`Old Mileage | ${this.mileage}`);
    this.mileage += 24000;
    console.log(`New Mileage | ${this.mileage}`);
  },
  runErrands: function () {
    console.log(`Old Mileage | ${this.mileage}`);
    this.mileage += 33;
    console.log(`New Mileage | ${this.mileage}`);
  }
  
};
console.log(Car.mileage);
Car.driveToWork();
Car.driveAroundTheWorld();
Car.runErrands();