//function average to return the average price of the items
function itemsAverage() {

//create empty array for the prices of every item
var prices = [];
  //forEach method to traverse and return the price of each item
  items.forEach(function(item, index, array) {
    prices.push(array[index].price);
  });
  //reduce method to add the elements to eachother and equal it to total
  var total = prices.reduce(function(sum, current) {
    return sum + current;
  });
  //get the average of the prices of items
  var average = total / items.length;
  console.log(`The average price is $${average.toFixed(2)}`);
  return average.toFixed(2);
}
//call itemsAverage
itemsAverage();

//function cheap to return items between $14 and $18 USD
 function cheap() {

//create empty array for the cheap items
var cheapItems = [];

//forEach method to traverse items and return the titles of items between $14 and $18
items.forEach(function(items, index, array){
  price = array[index].price;
  currencyCode = array[index].currency_code;
  //if statement that pushes every item between $14 and $18 USD
  if (price<= 18 && price >= 14 && currencyCode == 'USD'){
    cheapItems.push(array[index].title);
  }
});
  console.log(`Items that cost between $14.00 USD and $18.00 USD:${cheapItems}`);
  return cheapItems;
}
//call cheap
cheap();

//function globalCurrency to return items that have the GBP currency
function globalCurrency(){

  //create array for items with a GBP currency
  var code = [];
  //forEach method to traverse items and add items into array code
  items.forEach(function (items, index, array){
    currencyCode = array[index].currency_code;
    titlePrice = array[index].title + ' is $'+ array[index].price;
    price = array[index].price;
    //if statement to check if currency equals GBP
    if (currencyCode == 'GBP'){
      code.push(titlePrice);

    }

  });
  console.log(code);
  return code;
}
//call globalCurrency
globalCurrency();

//function woodenItems to return items made of wood
function woodenItems(){
  var woodItems = [];

  //forEach method to traverse items and add items into woodItems
  items.forEach(function(item, index, array){
    materials = array[index].materials;

    //filter method to traverse the materials of each item and check if wood is present
    var wood = materials.filter(function(it){
      return it == 'wood';
    });
    //if statement to add items that contain wood to the woodItems array
    if(wood == 'wood'){
      woodItems.push(`${array[index].title} is made of wood`)
    }
    });
    console.log(woodItems);
    return woodItems;
  }

//call woodenItems
woodenItems();
