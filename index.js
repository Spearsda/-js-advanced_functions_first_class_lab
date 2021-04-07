
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function (drivers) {
    const copyDrivers = [...drivers]
    return copyDrivers.slice(0,2)
}

const returnLastTwoDrivers = function (drivers) {
    const altDrivers = [...drivers]
    return altDrivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (multiplier) {
    return function (value) {
        return multiplier * value;

    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (drivers, returnedDrivers) {
    return returnedDrivers(drivers);
  };