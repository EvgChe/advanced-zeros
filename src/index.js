module.exports = function getZerosCount(number, base) {

    var count = 0,
        value = 0,
        x;
    var factorArray = simpleFactor(base);
    var findNumberx = findNumber(factorArray);

    number -= number%findNumberx;
    while(value<number){
        value += findNumberx;
        x = value;
        while(x%findNumberx == 0 && x>0){
            count++;
            x /= findNumberx;
        }
    }
    return Math.floor(count/factorArray[findNumberx]);
}

function simpleFactor(value) {  //Функция разложения на простые множители

    var factorArray = [0,0];
    var x = 2;

    while(value>1)    {

        factorArray[x] = 0;

        while(value%x == 0){

            factorArray[x]++;
            value /= x;
        }

        x++;
    }
    return factorArray;
}

function findNumber(factorArray = []) {  //Функция определения, количество каких чисел нужно искать
    var findNumber=0;
    for (var i=0; i<factorArray.length; i++){
        if(i*factorArray[i]>findNumber*factorArray[findNumber]){
            findNumber = i;
        }
    }
    return findNumber;
}