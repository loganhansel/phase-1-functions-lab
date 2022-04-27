// Code your solution in this file!

function distanceFromHqInBlocks(someValue) {
    if (someValue >= 42) {
        return (someValue - 42);
    } else {
        return (42 - someValue);
    }
}

function distanceFromHqInFeet(someValue) {
    return (distanceFromHqInBlocks(someValue) * 264);
}

function distanceTravelledInFeet(value1, value2) {
    const dist1 = distanceFromHqInFeet(value1);
    const dist2 = distanceFromHqInFeet(value2);
    if (dist1 >= dist2) {
        return dist1 - dist2;
    } else {
        return dist2 - dist1;
    }
}

function calculatesFarePrice(start, destination) {
    const travel = distanceTravelledInFeet(start, destination);
    if (travel <= 400) {
        return 0;
    } else if (travel <= 2000) {
        return (((travel - 400) * 2) / 100);
    } else if (travel <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}