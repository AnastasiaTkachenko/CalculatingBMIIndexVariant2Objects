const jack = {
   name:'Jack', 
   lastName: 'White',
   weight: 79, 
   height: 1.70,
   calcBmi: function() {
    this.bmi = this.weight / this.height ** 2; 
      return this.bmi;
   }
}; 

const mike = {
   name: 'Mike', 
   lastName: 'Black',
   weight: 91, 
   height: 1.93, 
   calcBmi: function() {
      this.bmi = this.weight / this.height ** 2; 
        return this.bmi;
     }
}; 

console.log(jack.calcBmi()); 
console.log(jack.bmi); 

console.log(mike.calcBmi()); 
console.log(mike.bmi); 

if(jack.bmi > mike.bmi) {
   console.log(`${jack.name} ${jack.lastName} BMI (${jack.bmi}) is higher than ${mike.name} ${mike.lastName} (${mike.bmi}) !`); 

} else if (jack.bmi < mike.bmi) {
   console.log(`${mike.name} ${mike.lastName} BMI (${mike.bmi}) is higher than ${jack.name} ${jack.lastName} (${jack.bmi}) !`); 

} else {
   console.log(`${jack.name} ${jack.lastName} BMI (${jack.bmi}) and ${mike.name} ${mike.lastName} (${mike.bmi}) are equal !`); 
}