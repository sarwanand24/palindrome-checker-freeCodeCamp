function palindrome(str) {
   str = str.toLowerCase();
   var newStr = "";
   var revarr = [];
   var rev = "";
  var Alpha = /[a-z0-9]/ 
  for(var i=0; i<str.length; i++){
    if(str[i].match(Alpha)){
       newStr += str[i];
       revarr.unshift(str[i]);
    }
  }
  for(var j=0; j<revarr.length; j++){
     rev += revarr[j];
  }
    console.log(newStr)
    console.log(rev)
  if(rev == newStr){
       return true;
  }
  else{
    return false
  }
}

palindrome("rani");
