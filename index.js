// Code your solution in this file!
const drivers = ['Antonia','Nuru','Amari','Mo']
const returnFirstTwoDrivers = function(drivers){
 //returnFirstTwoDrivers(drivers)
 return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(2,4)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier = function(int){
    let fare
 return function(fare){
   return fare * int
 }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler  = createFareMultiplier(3)

const selectDifferentDrivers = function(array,returnFirstTwoDrivers){
    return returnFirstTwoDrivers(array)
}
