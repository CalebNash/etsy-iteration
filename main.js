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

//filter method to return the item with the currency code of GBP
  britishItems = items.filter(function(item){
    return item.currency_code === 'GBP';
  });

  // forEach method to console.log the items with GBP
  britishItems.forEach(function(item){
    console.log(item.title + ' is £'+ item.price);
  })
}
//call globalCurrency
globalCurrency();

//function woodenItems to return items made of wood
function woodenItems(){

    //filter method to return the items made of wood
    const woodItems = items.filter(function(item){
      return item.materials.includes('wood');
    });
    // forEach method to console.log the items made of wood
    const woodLog = woodItems.forEach(function(item){
      console.log(`${item.title} is made of wood`);
    })


  }

//call woodenItems
woodenItems();


 function largeItems(){

   //filter method to return the items that have 8 or more materials
  const moreThanEight = items.filter(function(item){
    return item.materials.length >= 8;
  })
  //forEach method to console.log items with 8 or more materials
  const matLog= moreThanEight.forEach(function(item){
    console.log(`${item.title} has ${item.materials.length} materials:`);
    //forEach moethod to console.log the materials
    item.materials.forEach(function(item){
      console.log(item);
    })
    console.log('\n');
  });
}

largeItems();


function madeBySellers(){
  //filter method to return items that were made by the seller
  const madeBySeller = items.filter(function(item){
    return item.who_made === 'i_did';
  });
  console.log(`${madeBySeller.length} were made by their sellers`);
}
madeBySellers()
