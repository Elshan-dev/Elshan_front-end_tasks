// Task1 random

let randomnum = parseInt(Math.random() * 50 + 1);
let usernum = +prompt("Enter number:");
let say = 1;

while (randomnum !== usernum) {
  say = say + 1;
  if (randomnum > usernum) {
    usernum = +prompt("Enter bigger number:");
  } else {
    usernum = +prompt("Enter smaller number:");
  }
}

if (say === 1) {
  console.log(`1000 dollars has been credited to your account.`);
} else if (say >1 && say<6) {
  console.log(`750 dollars has been credited to your account.`);
} else if (say >5 && say<10) {
  console.log(`250 dollars has been credited to your account.`);
} else if (say >= 10) {
  console.log(`250 dollars has been drawn from your account.`);
}

console.log(`Congrats, you have found number ${randomnum} in ${say} attempts.`);

// Task2 sum

let usernumb = +prompt('Enter number:')
let u = 0
for (x = 1; x <= usernumb; x++) {
  u = u+x
}
console.log(`The sum is ${u}`)

// Task3 *

for (let i=4 ; i>=1 ; i--) {
    for(let m=1 ; m<=i ; m++){
        document.write('*')
    }
    document.write('<br/>')
}

// Task4 factorial

let usernumber = +prompt('Enter number:')
let m = 1
for (i = 1; i <= usernumber; i++) {
  m = m*i
}
console.log(`The factorial is ${m}`)