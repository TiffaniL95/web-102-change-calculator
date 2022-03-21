// Write your JavaScript here
//input: given two numbers representing the amount of a sale and the amount paid by customer
//declare variables to represent amount due and amount received
//declare variable (change) to represent (the amount tendered - the amount of sale)
//declare variables for different currency types
//ensure our given values are in the proper format, with 2 decimal places
//take change variable and divide by 20 to find number of 20dollar bills
//return$20bill quotient in one variable and redeclare change == remainder
//repeat lines 7&&8 for each change type in descending order(10, 5, 2, 1, .25, .10, .05, .01)
//insert images for currency
//animate images and answer
//animate increase in values
//output: return 5 numbers representing amount of change due in dollars(20, 10, 5, 2, 1), quarters, dimes, nickels, and pennies

//use document.getElementById .textContent % var quot = ~~(num/num1)

function handleClickEvent(e) {
    let due = parseFloat(document.getElementById('amount-due').value);
    let received = parseFloat(document.getElementById('amount-received').value);
    let change = (received - due).toFixed(2);
    document.getElementById('total-change').textContent = `Total change is $${change}`
    document.getElementById('dollars-output').textContent = parseInt(change);
    // calculate 20 denomination
    let twentyQuot = ~~(change/20);
    change = (change%20).toFixed(2);
    //calculate 10 denomination
    let tenQuot = ~~(change/10);
    change = (change%10).toFixed(2);
    //calculate 5 denomination
    let fiveQuot = ~~(change/5);
    change = (change%5).toFixed(2);
    //calculate 2 denomination
    let twoQuot = ~~(change/2);
    change = (change%2).toFixed(2);
    //calculate 1 denomination
    let oneQuot = ~~(change/1);
    
     if(change>=1){
       change = (change - 1).toFixed(2);
     };
    
    //calculate quarter denomination
    let quarterQuot = ~~(change/0.25);
    change = (change%0.25).toFixed(2);
     //calculate dime denomination
     let dimeQuot = ~~(change/0.10);
     change = (change%0.10).toFixed(2);
      //calculate nickel denomination
    let nickelQuot = ~~(change/0.05);
    change = (change%0.05).toFixed(2);
    //calculate penny denomination
    let pennyQuot = ~~(change/0.01);

    // document.getElementById('dollars-output').textContent = (twentyQuot * 20) + (tenQuot * 10) + (fiveQuot * 5) + (twoQuot * 2) + oneQuot;
    document.getElementById('twenty-output').textContent = twentyQuot;
    document.getElementById('ten-output').textContent = tenQuot;
    document.getElementById('five-output').textContent = fiveQuot;
    document.getElementById('two-output').textContent = twoQuot;
    document.getElementById('one-output').textContent = oneQuot;
    document.getElementById('quarters-output').textContent = quarterQuot;
    document.getElementById('dimes-output').textContent = dimeQuot;
    document.getElementById('nickels-output').textContent = nickelQuot;
    document.getElementById('pennies-output').textContent = pennyQuot;

    console.log('inside handleClick',);
}

document.getElementById('calculate-change').addEventListener('click', handleClickEvent);