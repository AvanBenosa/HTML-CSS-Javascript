var numbers = [1,2,3];
var doubleNumbers= [];

for(vari = 0; i < numbers.length; i++){
    doubleNumbers.push(number[i] * 2);

}
//map helper
var doubled = numbers.map(function(number){
 return number * 2;
});

doubled;
doubleNumbers;

//example 2
var cars = [
    { model:'Buick' , price: 'cheap'},
    { model:'Buick' , price: 'cheap'},
];

var prices = cars.map(function(car){
return car.price
});

prices; 

//example 3
var images = [
    { height: '34px', width: '39px' },
    { height: '54px', width: '19px' },
    { height: '83px', width: '75px' },
  ];
  
  
  var heights = images.map(function(image){
      return image.height;
      
  });
  //example 3
  function pluck(array, property) {   
} // solution
  function pluck(array, property) {
    var result = array.map(function(obj){
        return obj[property];
    });  
    
    return result;
}

