//function average to return the average price of the items
function itemsAverage(){
  var prices = [];

  //forEach method to traverse and return the price of each item
  items.forEach(function(item, index, array){
     prices.push(array[index].price);
  });
  var total = prices.reduce(function(sum, current) {
    return sum + current;
  });
 var average = total / items.length;
console.log(average.toFixed(2));
return average.toFixed(2);
}
itemsAverage();
//console.log(items[0].price);
