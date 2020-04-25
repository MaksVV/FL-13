let checkNumber = prompt('Please, input check number');
let tipPercent = prompt('Please, input tip percentage');
let tipAmount;
let totalSum;
let percent=100;

if (isNaN(checkNumber)) {
    alert('Invalid input data');
}else if (checkNumber <= 0){
    alert('Invalid input data');
}else if(isNaN(tipPercent) || tipPercent <= 0 || tipPercent > percent){
    alert('Invalid input data');
}else {
    let tipAmount = tipPercent / percent * checkNumber;
    let totalSum = +checkNumber + +tipAmount;
    alert('Check number : '+checkNumber + '\n' + 'Tip : '+tipPercent +'%' + '\n' + 'Tip \
    amount : '+tipAmount + '\n' + 'Total sum to pay : '+totalSum);
} 
