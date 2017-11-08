window.onload = function () {
  var michi = document.getElementById('cat');

  michi.addEventListener("click", addX);
};

var centinel = false;

function addX (event) {
  if (centinel) {
    event.target.textContent = "x";
    centinel=false;
    }
  else {
    event.target.textContent = "o";
    centinel=true;
  }
  };

function reset () {
location.reload ();
};
