//Exercise 1

const calculatePayments = (totalPayments) => {
  const transactionFee = 3;
  const interestFee = totalPayments * 0.001;
  return totalPayments + transactionFee + interestFee;
};

console.log(calculatePayments(500));

//Exercise 2

//Part1
const greeting = (friend1, friend2, friend3) => {
  return "Welcome " + friend1 + " " + friend2 + " " + friend3;
};
console.log(greeting("Non", "Nan", "May"));

//Part2
const calculateAge = (birthYear) => {
  const age = 2023 - birthYear;
  return age;
};
console.log(calculateAge(1994));

//Part3
const greetingFull = (friend1, age1, friend2, age2, friend3, age3) => {
    return `Welcome ${friend1}, you are ${age1}. Welcome ${friend2}, you are ${age2}. Welcome ${friend3}, you are ${age3}.`;
};

console.log(greetingFull('Noon', 1995, 'Nan', 1996, 'Nim', 1997));

//Exercise 3
const studentScore = Math.floor(Math.random() * 12);

const grading = (studentScore) => {
  if (studentScore === 11) {
    console.log("This student gets perfect scores.");
  } else if (studentScore > 8) {
    console.log("This student gets excellent scores.");
  } else if (studentScore >= 5) {
    console.log("This student passes the test.");
  } else {
    console.log("This student fails the test.");
  }
};

console.log(grading(11));