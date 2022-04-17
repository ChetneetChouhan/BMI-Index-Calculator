
// Calculation of BMI Index

//      first data
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;


//      second data

/*
const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;
*/

// formulas
const markBmiIndex = markMass / markHeight ** 2;
const johnBmiIndex = johnMass / johnHeight ** 2;

const markBmiIndexV2 = markMass / (markHeight * markHeight);
const johnBmiIndexV2 = johnMass / (johnHeight * johnHeight);;


// boolean
markHigherBMI = markBmiIndex > johnBmiIndex;

// prints
console.log("Mark's BMI index =", markBmiIndex);
console.log("v2 BMI index formula = ", markBmiIndexV2)

console.log("John's BMI index =", johnBmiIndex);
console.log("v2 BMI index formula", johnBmiIndexV2);

console.log("Is mark's BMI index higher? =  ", markHigherBMI);

