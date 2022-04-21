const conversionInput = document.getElementById('input-el')
const conversionLength = document.getElementById('length')
const conversionVolume = document.getElementById('volume')
const conversionMass = document.getElementById('mass')
let conversionNumber;



conversionInput.addEventListener("input", function(){
    conversionNumber = conversionInput.value
    const metersToFeet = (conversionNumber * 3.28084).toFixed(3);
    const feetToMeters = (conversionNumber * 0.3048).toFixed(3)
    const litersToGallons = (conversionNumber * 0.264172).toFixed(3)
    const gallonsToLiters = (conversionNumber * 3.78541).toFixed(3)
    const kilosToPounds = (conversionNumber * 2.20462).toFixed(3)
    const PoundsToKilos = (conversionNumber * 0.453592).toFixed(3)
    conversionLength.innerHTML = `${conversionNumber} meters = ${metersToFeet} feet | ${conversionNumber} feet = ${feetToMeters} meters`
    conversionVolume.innerHTML = `${conversionNumber} liters = ${litersToGallons} gallons | ${conversionNumber} gallons = ${gallonsToLiters} liters`
    conversionMass.innerHTML = `${conversionNumber} kilos = ${kilosToPounds} pounds | ${conversionNumber} pounds = ${PoundsToKilos} kilos`
    
});

    