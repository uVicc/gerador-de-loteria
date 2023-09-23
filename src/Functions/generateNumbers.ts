export default function generateNumbers() {
    var numberGenerated = [];
    let numbersConfig = {
        maxNumbers: 6,
        lowestNumber: 1,
        highestNumber: 60
    };

    for(var i = 0; i < numbersConfig.maxNumbers; i++) {
        var number = Math.floor(Math.random() * numbersConfig.highestNumber + 1) + numbersConfig.lowestNumber;
        var checkNumber = numberGenerated.find((e) => e == number);
        
        while(checkNumber) {
            number = Math.floor(Math.random() * numbersConfig.highestNumber + 1) + numbersConfig.lowestNumber;
            checkNumber = numberGenerated.find((e) => e == number);
        };

        numberGenerated.push(number);
    };

    return numberGenerated
}