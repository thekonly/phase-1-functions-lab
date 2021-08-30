// Code your solution in this file!

const headquarters = 42;

function distanceFromHqInBlocks(pickupLocation) {
        return Math.abs(pickupLocation - headquarters);
}

function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation)* 264;
}
    
function distanceTravelledInFeet(pickupLocation, dropoffLocation) {
    return Math.abs((pickupLocation - dropoffLocation) *264);
}

function calculatesFarePrice(pickupLocation, dropoffLocation) {
    if (distanceTravelledInFeet(pickupLocation, dropoffLocation) < 400) {
        return 0;
    }
    else if (distanceTravelledInFeet(pickupLocation, dropoffLocation) > 400 && distanceTravelledInFeet(pickupLocation, dropoffLocation) < 2000){
        return (distanceTravelledInFeet(pickupLocation, dropoffLocation) - 400) * .02;
    }
    else if (distanceTravelledInFeet(pickupLocation, dropoffLocation) > 2000 && distanceTravelledInFeet(pickupLocation, dropoffLocation) < 2500){
        return 25;
    }
    else if (distanceTravelledInFeet(pickupLocation, dropoffLocation) > 2500){
        return "cannot travel that far"
    }
}