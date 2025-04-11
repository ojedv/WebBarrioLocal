let array = [500,200,100,50,20,10,5,2,1];
let billetes = [];
let num = 999;

for (let i = 0; array[i]<= num; i++){
    billetes.push(num/array[i] - num%array[i])
}
alert (billetes);