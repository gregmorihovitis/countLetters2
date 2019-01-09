function countLetters2(word){
  var toCount = word.split(" ").join("");
  var letters = {
    title: "Object holding the letters of the input word"
  };

  for(var i = 0; i < toCount.length; i++){
    if(!letters[toCount[i]]){
      letters[toCount[i]] = [];
    }

    letters[toCount[i]].push(i);
  }

  return letters;
}

console.log(countLetters2("lighthouse in the house"));