$(document).ready(function() {
  var sentence = prompt("Enter a sentence to be Ciphered"); //gets user input for sentence

  function combineString(sentence) {
    const first = sentence.charAt(0);
    console.log(first);

    const last = sentence.charAt(sentence.length -1);
    console.log(last);

    const both = first + last;

    const result = both.toUpperCase();
    console.log(result);
    return result
  }

  function reverseString(sentence) {
    const splitString = sentence.split("");
    
    const reverseArray= splitString.reverse();

    const joinArray = reverseArray.join("");
    return joinArray;
  }
  //console.log(combineString(sentence));

  function backCap(sentence) {
    const backwardsCapitalized = reverseString(combineString(sentence));
    const addToOG = sentence + backwardsCapitalized;
    return addToOG;
  }

  function count(sentence) {
    var n = sentence.length;
    const divide = Math.floor(n/2);
    const combo = sentence.charAt(divide) + sentence;
    return combo;
    
  }

  

  console.log(backCap(sentence));
  console.log(count(sentence) + " yes");

});


