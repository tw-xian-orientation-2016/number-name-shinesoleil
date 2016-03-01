function groupByDigits(number) {

  var strNumber = number.toString();
  var digitsGroups = [];

  for(var len=strNumber.length; len>0; len-=3) {
    digitsGroups.push(parseInt(strNumber.substr(-3)));
    strNumber = strNumber.substr(0, len-3);
  }

  return digitsGroups.reverse();
}
