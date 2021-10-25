var users = [
{name: 'avan'},
{name: 'ALliah'},
{name: 'Muchang'},
];

var user;

for (var i = 0; i<users.length; i++){
    if(users[i].name === 'Avan'){
        user = users[i];
        break;
    }
}
user;
//find helper
users.find(function(user){
    return user.name === 'Avan';
});

//example 2
function Car(model){
    this.model = model;
}

var cars = [
    new Car('Buick'),
    new Car('Cararo'),
    new Car('Toyota')
];

cars.find(function(car){
    return car.model === 'Camaro';
})

//example 3

var posts =[
    {id:1 , title: 'New post'},
    {id:2 , title: 'Old post'},
]

var comment = { postId:1, content: 'Great Post'};

function postForcomment(posts,comment){
    return posts.find(function(post){
        return post.id === comment.postId;
    });
}
postForcomment(posts,comment);
//example 4
var users = [
    { id: 1, admin: false },
    { id: 2, admin: false },
    { id: 3, admin: true }
  ];
  
  var admin;
  
  for(var i=0; i<users.length;i++){
      if(users[i].admin === true){
          admin=users[i];
      }
  }
  //find helper
  users.find(function(user){
    return user.admin === true;
  });

  //example 5
  var accounts = [
    { balance: -10 },
    { balance: 12 },
    { balance: 0 }
  ];
  
  var account;
  for(var i=0; accounts.length; i++){
      if(accounts[i].balance ===12){
          account=accounts[i];
      }
  }