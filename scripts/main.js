var divmain = document.getElementById( 'div_id' );
maindiv.onmouseover = function() {
  this.style.backgroundColor = 'green';
  var h2s = this.getElementsByTagName( 'h2' );
  h2s[0].style.backgroundColor = 'blue';
};
maindiv.onmouseout = function() {
  this.style.backgroundColor = 'pink';
  var h2s = this.getElementsByTagName( 'h2' );
  h2s[0].style.backgroundColor = 'pink';
};