//1st no: Conversion of feet to mile.

function feetToMile(feet){
  var mile = Math.round(feet/5280);
  
  return mile;

}

var result =  feetToMile(10000);
console.log(result);


//2nd no: Calculation of total wood.

function woodCalculator(chair, table, bed){

if(chair>0 && table >0 && bed> 0){
 var woodForChair = chair*1;
 var woodForTable = table*3
 var woodForBed = bed*5;

 var total = woodForChair + woodForTable + woodForBed;
 return total;
  }

 else {
  return "The number of chair, table and bed cannot be negative!";
 }

}
 var result1 =  woodCalculator(15,15,5);
 var result2 =  woodCalculator(15,5,5);
 var result3 =  woodCalculator(10,10,10);
 var result4 =  woodCalculator(20,3,20);
 var result5 =  woodCalculator(0,0,0);
 console.log(result1, result2, result3, result4, result5);


//3rd no: Calculating brick of some floor.

function brickCalculator(floor){

  for(let i =1; i<=floor; i++){
    if(i>0 && i<=10){
      var totalBrick = i*15*1000;

    }
   else if(i>=11 && i<=20){
    var totalBrick = i*12*1000;

    }
    else if(i>=21){
      var totalBrick = i*10*1000;
    }
  
  }
  return totalBrick;
 
}
var result =  brickCalculator(10);
console.log("you will need:",  result, "brick");



// 4th no: Find smallest name among my frinds.

function tinyFriend(name) {
  var shortLength = Infinity;
  var smallest = "";

  if (name.length > 0) {
      for (let i = 0; i < name.length; i++) {
          if (name[i].length < shortLength) {
              smallest = name[i];
              shortLength = name[i].length;
          }
      }
  }
  return smallest;
}

var output = tinyFriend([ 'NishatTasnimMithila', 'mithila', 'mi', 'mithil', 'nish']);
console.log(output); 
