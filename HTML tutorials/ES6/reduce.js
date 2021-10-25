var numbers=[ 10,20,30];
var sum = 0;

for(i=0; i<numbers.length; i++){
    sum += numbers[i]
}
// reduce helper
numbers.reduce(function(sum, number){
    return sum += number;
}, 0);

//example 2

var primaryColors = [
    { color : 'red'},
    { color : 'yellow'},
    { color : 'blue'}
];

primaryColors.reduce(function(previous, primaryColor){
    previous.push(primaryColor.color);
    return previous;
}, [] );

//example 3
var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance;

trips.reduce(function(previous , trip){
   return previous += trip.distance; 
},0);