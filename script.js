var enterButton = document.getElementById("enter");
var word;
var numWrong = 0;
var gameOver = false;

function enterWord() {
  document.getElementById("wordInput").style.display = "none";
  document.getElementById('enter').style.visibility = 'hidden';
  word = document.getElementById("wordInput").value;
  var wordLength = word.length;
  var index = 0;

  while(index < wordLength) {
    if(word[index]==" ") {
      document.getElementById("blanks").innerHTML += "|";
    }
    else if(checkPunctuation(word[index])) {
      document.getElementById("blanks").innerHTML += word[index];
    }
    else {
      document.getElementById("blanks").innerHTML += "_";
    }
    document.getElementById("blanks").innerHTML += " ";
    index++;
  }
}

function checkLetter(letter) {
  copyWord = word.toUpperCase();
  if(gameOver) {
    //DO NOTHING
  }
  else if(copyWord.indexOf(letter) != -1) {
    document.getElementById(letter).style.color = 'black';
    document.getElementById(letter).style.background =            'green';
    while(copyWord.indexOf(letter) != -1) {
      var copy = document.getElementById("blanks").innerHTML;
      var newCopy = copy.slice(0, copyWord.indexOf(letter)*2) +         letter + copy.substring((copyWord.indexOf(letter)*2)+1);
      document.getElementById("blanks").innerHTML = newCopy;
      copyWord = copyWord.slice(0, copyWord.indexOf(letter)) +      "!" + copyWord.substring(copyWord.indexOf(letter)+1);
    }
    if(newCopy.indexOf("_")==-1) {
      document.getElementById("winLoss").innerHTML = "You           win! :)";
      document.getElementById("winLoss").style.color =              'green';
      gameOver = true;
    }
  }
  else {
    if(document.getElementById(letter).style.background== 'red') {
      //DO NOTHING
    }
    else if(numWrong==0) {
      numWrong++;
      document.getElementById('hanger').src='hangman_head.png';
    }
    else if(numWrong==1) {
      numWrong++;
      document.getElementById('hanger').src='hangman_body.png';
    }
    else if(numWrong==2) {
      numWrong++;
      document.getElementById('hanger').src='hangman_leg1.png';
    }
    else if(numWrong==3) {
      numWrong++;
      document.getElementById('hanger').src='hangman_leg2.png';
    }
    else if(numWrong==4) {
      numWrong++;
      document.getElementById('hanger').src='hangman_arm1.png';
    }
    else if(numWrong==5) {
      numWrong++;
      document.getElementById('hanger').src='hangman_arm2.png';
      document.getElementById("winLoss").innerHTML = "You           lose! :(";
      document.getElementById("winLoss").style.color = 'red';
      gameOver = true;
      for(let i = 0; i < copyWord.length; i++) {
        if(copyWord[i]!="!") {
          var copy =                                                    document.getElementById("blanks").innerHTML;
          var newCopy = copy.slice(0, i*2) + copyWord[i] +                  copy.substring((i*2)+1);
          document.getElementById("blanks").innerHTML =                 newCopy;
          copyWord = copyWord.slice(0, i) + "!" +                       copyWord.substring(i+1);
        }
      }
    }
    document.getElementById(letter).style.color = 'black';
    document.getElementById(letter).style.background = 'red'; 
  }
}

function checkPunctuation(symbol) {
  if((symbol==".")||(symbol==",")||(symbol=="!")||(symbol=="?")||(symbol=="-")||(symbol=="&")||(symbol=="'")||(symbol==":")) {
    return true;
  }
  else {
    return false;
  }
}
