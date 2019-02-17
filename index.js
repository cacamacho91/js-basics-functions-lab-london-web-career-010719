function distanceFromHqInBlocks(location){
  return Math.abs(location - 42);
}

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(start - end)*264;
}

 function calculatesFarePrice(start, end) {
   let distance = distanceTravelledInFeet(start, end);
   let fare;

   if (distance < 400) {
     fare = 0;
   } else if (distance > 2000 && distance < 2500) {
     fare = 25;
   } else if (distance > 2500) {
     fare = 'cannot travel that far';
   } else {
     fare = (distance-400)*0.02
   }
   
   return fare;
 }
