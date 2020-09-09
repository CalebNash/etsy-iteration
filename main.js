//function average to return the average price of the items
function itemsAverage() {

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
itemsAverage();

 function cheap() {

var cheapItems = [];

items.forEach(function(items, index, array){
  price = array[index].price;
  currencyCode = array[index].currency_code;
  if (price<= 18 && price >= 14 && currencyCode == 'USD'){
    cheapItems.push(array[index].title);
  }
});
  console.log(`Items that cost between $14.00 USD and $18.00 USD:${cheapItems}`);
}
cheap();
//console.log(prices);
