var computers =[
    {name: 'apple',ram: 24},
    {name: 'Compaq',ram: 4},
    {name: 'Acer',ram: 32},
];

var AllComputersCanRunProgram= true;
var OnlySomeComputersCanRunProgram = false;

for(i=0; i<computers.length;i++){
    var computer = computers[i];

    if(computers.ram <16){
        AllComputersCanRunProgram= false;
    } else {
        OnlySomeComputersCanRunProgram = true;
    }
}

// every Helper
computers.every(function(computer){
    return computer.ram> 16;
})

computers.some(function(computer){
    return computer.ram> 16;
})

//example
var names= [
    "Alexa",
    "Mattew",
    "Joe"
];

names.every(function(name){
return name.length > 4  //false
});

names.some,e(function(name){
    return name.length > 4  //true
    });

//example

function Filed(value){
    thisvalue = value;
}

field.prototype.validate =function(){
    return this.value.length > 0;
}
var username = new Filed("2cool");
var password = new Filed("my+password");

var fields = [ username, password];
var formIsValid = fields.every(function(field){
    return field.validate();
});

 if(formIsValid){
     //allow user to submit
 } else {
     // not
 }

//example
// given an array of users, return 'true' if every users submitted a request form

 var users = [
    { id: 21, hasSubmitted: true },
    { id: 62, hasSubmitted: false },
    { id: 4, hasSubmitted: true }
  ];
  
  var hasSubmitted;
  
  users.every(function(user){
     return user.hasSubmitted === true; 
  });
  

