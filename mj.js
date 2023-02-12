
function newFact() {
  var facts = ["hhhhh hhhh hhh", "hhj jjjjjj jjjkdfa lsglagh", "3tof bbbbbwkjbaf balkfb kabvabvalkbvak"];
var randomFact = Math.floor(Math.random() * facts.length);
  document.getElementById('factDisplay').innerHTML = facts[randomFact];
}
//color pick start
function redd(){
  document.getElementById("quote").style.border = "2px solid red";
  document.getElementById("quote").style.backgroundColor = "rgb(90, 76, 43)";

  document.getElementById("factDisplay").style.fontFamily = "cursive";
  document.getElementById("factDisplay").style.fontSize = "22px";
}

function yellow(){
  document.getElementById("quote").style.border = "2px solid rgb(252, 218, 106)";
  document.getElementById("quote").style.backgroundColor = "rgb(43, 96, 43)";

  document.getElementById("factDisplay").style.fontFamily = "Courier";
  document.getElementById("factDisplay").style.fontSize = "24px";
}

function green(){
  document.getElementById("quote").style.border = "2px solid rgb(57, 255, 60)";
  document.getElementById("quote").style.backgroundColor = "rgb(80, 16, 43)";

  document.getElementById("factDisplay").style.fontFamily = "Arial";
  document.getElementById("factDisplay").style.fontSize = "20px";
}

function blue(){
  document.getElementById("quote").style.border = "2px solid rgb(165, 77, 236)";
  document.getElementById("quote").style.backgroundColor = "rgb(70, 26, 83)";

  document.getElementById("factDisplay").style.fontFamily = "fantasy";
  document.getElementById("factDisplay").style.fontSize = "22px";

}
//color pick end
function convert(){
  if (document.getElementById("weight").value == "kg") {
    document.getElementById("calculate").innerText =
      document.getElementById("fname").value * 0.4536 + "kg";
  } else {
    document.getElementById("calculate").innerText =
      document.getElementById("fname").value * 2.2046 + "lbs";
  }
   
}
//part2t1
function numberCalc(){
  var inputs= document.getElementById("nname").value;

  var myString= inputs.split(",");

  var reverses= myString.reverse();
  document.getElementById("reverse").innerHTML= "Reverse: "+reverses;

  var myMax=Math.max(...myString);
  document.getElementById("max").innerHTML= "Max: "+myMax;

  var myMin=Math.min(...myString);
  document.getElementById("min").innerHTML= "Min: "+myMin;
      

  var mySum=0;
  for( i=0;i<myString.length;i++){
mySum= mySum+ parseFloat(myString[i]);
  }
  var myAvg= mySum/myString.length;
  document.getElementById("sum").innerHTML= "Sum: "+mySum;
  document.getElementById("average").innerHTML= "Avg: "+myAvg;

}

//part4

function upperCase(){
 var txt= document.getElementById("tname").value;
 txt=txt.toUpperCase();
 document.getElementById("tname").value=txt;
}
function clearIt(){
  var txt= document.getElementById("tname").value;
 txt="";
 document.getElementById("tname").value=txt;
}
function reverseIt(){
  var inputs= document.getElementById("tname").value;
var myStrings=[];
  myStrings.push(inputs);

  var reverses= myStrings.reverse();
  var newr =reverses.toString();
  document.getElementById("tname").value= newr;

  }
