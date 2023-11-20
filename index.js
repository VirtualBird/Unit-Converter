/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

function convertBtn()
{
    const inputValue = getInputValue();
    
    const lengthConversionEl = document.getElementById("length-conversion");
    const volumeConversionEl = document.getElementById("volume-conversion");
    const massConversionEl = document.getElementById("mass-conversion");
    
    /*  Length conversion   */
    let meters = inputValue / 3.281;
    let feet = inputValue * 3.281;
    meters = floatRoundTo(meters, 3);
    feet = floatRoundTo(feet, 3);
    
    /*  Volume conversion   */
    let liters = inputValue / 0.264;
    let gallons = inputValue * 0.264;
    liters = floatRoundTo(liters, 3);
    gallons = floatRoundTo(gallons, 3);
    
    /*  Mass conversion     */
    let kilos = inputValue / 2.204;
    let pounds = inputValue * 2.204;
    kilos = floatRoundTo(kilos, 3);
    pounds = floatRoundTo(pounds, 3)
    
    /*  create strings   */
    const lengthStr = `${inputValue} meters = ${feet} feet | ${inputValue} feet = ${meters} meters`;
    const volumeStr = `${inputValue} liters = ${gallons} gallons | ${inputValue} gallons = ${liters} liters`;
    const massStr = `${inputValue} kilos = ${pounds} pounds | ${inputValue} pounds = ${kilos} kilos`;
    
    /*  Display string to dom   */
    lengthConversionEl.textContent = lengthStr;
    volumeConversionEl.textContent = volumeStr;
    massConversionEl.textContent = massStr;    
    
}

function floatRoundTo(inputNum, decimalPoints)
{
    let roundedNum = inputNum.toFixed(decimalPoints) ;
    let floatValue = parseFloat(roundedNum);
    
    return floatValue;
}

function getInputValue()
{
    inputEl = document.getElementById("input-convert");
    inputElValue = inputEl.value;
    
    /**Set to 0 if no value was inputted */
    if (inputElValue == "")
    {
        inputElValue = 0;
    }
    
    return inputElValue;
}