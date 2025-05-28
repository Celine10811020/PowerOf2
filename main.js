var Input;
var Answer = 2;

document.getElementById("Input").addEventListener("keyup", function(e) {
  if (e.keyCode === 13) {
    Input = document.getElementById('Input').value;
    console.log(Input + ", " + Answer);
    if(Answer == Input)
    {
      Answer = Answer * 2;
      document.getElementById("Number").innerHTML = Input;
      $("#Number").removeClass('wrong');
      $("#Number").css('color', '#00ffd0');
      document.getElementById('Input').value = "";
    }else {
      document.getElementById("Number").innerHTML = "Wrong Answer!\nPlease Recheck: " + Answer/2;
      $("#Number").addClass('wrong');
      $("#Number").css('color', '#ff427f');
      document.getElementById('Input').value = "";
    }
    document.getElementById("Input").focus();
  }
});

document.getElementById("Input").onclick = function() {
  document.getElementById('Input').value = "";
};

document.getElementById('Restart').onclick = function() {
  Answer = 2;
  document.getElementById("Number").innerHTML = 1;
  document.getElementById("Number").classList.remove('wrong');
  $("#Number").css('color', '#00ffd0');
  document.getElementById('Input').value = "";
  document.getElementById("Input").focus();
};
