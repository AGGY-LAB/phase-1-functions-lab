// Code your solution in this file!

function distanceFromHqInBlocks(pickupLocation){
    let scuberHq=42
    let blocks = Math.abs(pickupLocation - scuberHq)
    return blocks

}
console.log(distanceFromHqInBlocks(40));

function distanceFromHqInFeet(pickupLocation){
    let toft=264
    return toft*distanceFromHqInBlocks(pickupLocation);

}
console.log(distanceFromHqInFeet(50));

function distanceTravelledInFeet(start, destination) {
    let toft=264
    let distanceINft = Math.abs((destination-start)*toft);
    return distanceINft

}
console.log(distanceTravelledInFeet(50,60));


function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start,destination);
     if (distance<=400){
        return  0;
     }

     else if(distance >400 && distance<=2000){
        return (distance-400)*0.02

     }
     else if(distance >2000 && distance<=2500){
        return 25
     }
     else if (distance>2500){
        return 'cannot travel that far'
     }

}

console.log(calculatesFarePrice(34,32));