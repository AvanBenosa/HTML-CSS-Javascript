//destructuring Object properties
var expenses = {
    type : 'Business',
    amount: '$45 USD',
};
// var type = expenses.type;
// var amount = expenses.amount;
const { type,amount } = expenses;

//example
var safeFiled = {
    extension : '.jpg',
    name: 'repost',
    size: 14040
};

// function fileSummary(file){
//     return `the file ${file.name}.${file.extension} is of the size ${file.size}`;
// }

function fileSummary({name, extension , size}){
    return `the file ${name}.${extension} is of the size ${size}`;
}

fileSummary(savedField);

//destructing array
const companies = [
    'Google',
    'Fcebook',
    'Uber'
];
// const firstCompany = companies[0];
const [name] = companies;


//example

const companies = [
    {name: 'google', location : 'mountain view'},
    {name: 'facebook', location : 'menlo park'},
    {name: 'uber', location : 'san francisco'},
];

//es5 code
// var location = companies[0].location;
const [ {location} ] = companies;
location; //display "mountain view"

//example
const Google = {
    locations: ['mountain view','new york','london']
};
const { location : [ location ] } = Google;
//display 'mountain view
 

//example

const points = [
    [4,5],
    [10,1],
    [0,40]
];

// points.map(function(pair){
//     // const x = pair[0],
//     // const y = pair[1]
//     cons [ x, y ] = pair;
// });

points.map(function([x,y]){
    return { x, y};
 });