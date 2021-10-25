//example 1
var products = [
{name: 'cocomber', types: 'vegetable'},
{name: 'banana', types: 'fruit'},
{name: 'celery', types: 'vegetable'},
{name: 'orange', types: 'fruit'},
];

var filteredProducts = [];

for (var i=0; i<products.length; i++){
    if (products[i].type === 'fruits'){
        filteredProducts.push(product[i]);
    }
}
filteredProducts;
//filter helper

products.filter(function(product){
    return product.type ==='vegetable'
});

// example 2
//example 1
var products = [
    {name: 'cocomber', types: 'vegetable', quantity: 0, price:1},
    {name: 'banana', types: 'fruit' , quantity: 10, price:15 },
    {name: 'celery', types: 'vegetable', quantity: 30, price:13},
    {name: 'orange', types: 'fruit', quantity: 3, price:5},
    ];
//type is ''vegetable' quantity is greater than 0, prices is less than 10

products.filter(function(product){
 return product.type === 'vegetable' &&
 product.quantity > 0 &&
 product.price < 10
}); 

//example 3

var post = { id: 1, title: 'New York'};
var comments = [
    {postID:4, content: 'awesome post'},
    {postID:3, content: 'it was okay'},
    {postID:4, content: 'neat'},
];

function commentsForPost(posts,comments) {
 return comments.filter(function(comment){
    return comments.postID === post.id
 });
}
commentsForPost(post,comments);


//example 4
var users = [
    { id: 1, admin: true },  
    { id: 2, admin: false },
    { id: 3, admin: false },
    { id: 4, admin: false },
    { id: 5, admin: true },
   ];
   
   var filteredUsers = [];
   
   for (var i=0; i<users.length; i++){
       if (users[i].admin === true){
           filteredUsers.push(users[i]);
       }
   }
   filteredUsers;

   products.filter(function(product){
    return product.type ==='vegetable'
});