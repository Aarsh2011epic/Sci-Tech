function Cave() {
  var possibilities = ["You have succeded in choosing the right cave, we are now using a filteration system to extract all the precious minerals from the rock at the current moment", "OH NO! Selenium has leaked into the waters because you chose the wrong cave", "Thats bad! You just chose the wrong cave, now the pollution caused by the selenium is now killing and disabiling birds and fish",];
    var choice = possibilities[Math.floor(Math.random() * possibilities.length)];
    document.getElementById("input").textContent = choice;
  };

  function ResetCave(){
    document.getElementById("input").textContent = "";
  };
  
