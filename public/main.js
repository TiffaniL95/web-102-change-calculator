
let currency = [
  {'twenty': 20},
  {'ten': 10},
  {'five': 5},
  {'two': 2},
  {'one': 1},
  {'quarters': 0.25},
  {'dimes': 0.10},
  {'nickels': 0.05},
  {'pennies':0.01}
]
function calculateChange(change){
  currency.map(curr=>{
    let key = `${(Object.keys(curr)).toString()}-output`
    let value = Number(Object.values(curr))
    let output = ~~(change/value)
    change =  (change - (value*output)).toFixed(2)
    document.getElementById(key).textContent = output;
  })
}

function handleClickEvent(e) {
    let due = parseFloat(document.getElementById('amount-due').value);
    let received = parseFloat(document.getElementById('amount-received').value);
    let change = (received - due).toFixed(2);
    document.getElementById('total-change').textContent = `Total change is $${change}`
    document.getElementById('dollars-output').textContent = parseInt(change);

    calculateChange(change)
   
}

document.getElementById('calculate-change').addEventListener('click', handleClickEvent);