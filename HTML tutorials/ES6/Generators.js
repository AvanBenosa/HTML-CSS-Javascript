var numbers = [1,2,3,4];
var total = 0;

for(let number of numbers){
    total +=number // display 10
}

//example
// const testingTeam = {
//     lead:'Amanda',
//     tester: 'Bill'
// };
//  const engineeringTeam = {
//     size: 3,
//     department: 'Engineering',
//     lead: 'Jill',
//     manager: 'ALex',
//     enginineer: 'Dave',
//  };

//  function* TeamIterator(team){
//      yield team.lead;
//      yield team.manager;
//      yield team.enginineer;
//      const testingTeamGenerator = testingTeamIterator(team.testingTeam)
//      yield* testingTeamGenerator;
//  }
//  function* testingTeamIterator(team){
//      yield team.lead;
//      yield team.tester;
//  }

//  const name =[];
//  for( let name of TeamIterator(engineeringTeam)){
//      name.push(name);  //["Jill","ALex","Dave","Amanda","Bill"]
//  }

 //
 const testingTeam = {
    lead:'Amanda',
    tester: 'Bill',
    [Symbol.iterator]: function* (){
        yield this.lead;
        yield this.tester;
    }
};
 const engineeringTeam = {
     testingTeam,
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'ALex',
    enginineer: 'Dave',
    [Symbol.iterator]: function* (){
        yield this.lead;
        yield this.manager;
        yield this.enginineer;
        yield* this.testingTeam;
    }
 };

 const name =[];
 for( let name of TeamIterator(engineeringTeam)){
     name.push(name);  //["Jill","ALex","Dave","Amanda","Bill"]
 }

 // generators with recursion

 class Comment {
     constructor(content, children) {
         this.content = content;
         this.content = childrenl
     }
    *[Symbol.iterator](){
        yield this.content;
        for(let child of this.children){
            yield* child;
        }
    }
 }
  
const children = [
    new Comment('good comment', []),
    new Comment('bad comment', []),
    new Comment('me', [])
];

const tree = new Comment('Great Post!', children);
const values= [];
for(let value of tree){
    values.pusj(value)
}
values;// display all comment