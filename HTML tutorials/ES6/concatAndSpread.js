const defaultColors = [ 'red','green'];
const userFavoriteColors = ['orange', 'yellow'];
const fallColors = ['fire red', 'fall orange'];
defaultColors.concat(userFavoriteColors);
// ['red','green','orange','yellow']
[...defaultColors, ...userFavoriteColors];
// ['red','green','orange','yellow']
[...defaultColors, ...userFavoriteColors, ...fallColors];
// ['red','green','orange','yellow','fire red', fall orange]

//example
function ValidShoppingList(...items){
if(items.indexOf('milk') < 0){
    return ['milk', ...items]
}
return items;
}
ValidShoppingList('orange', 'bread');
//["milk","orange","bread"]