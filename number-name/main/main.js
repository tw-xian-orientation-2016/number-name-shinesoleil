function groupByDigits(number) {

  var strNumber = number.toString();
  var digitsGroups = [];

  for(var len=strNumber.length; len>0; len-=3) {
    digitsGroups.push(parseInt(strNumber.substr(-3)));
    strNumber = strNumber.substr(0, len-3);
  }

  return digitsGroups.reverse();
}


function getOnes() {
  return ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
}

function getTens() {
  return ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

}

function getThousands() {
  return ['', ' thousand', ' million'];
}

function convertDecade(lastTwoDigits, ones, tens) {
  if(lastTwoDigits<20) {
    return ones[lastTwoDigits];
  } else {
    return tens[parseInt(lastTwoDigits/10)] + ' ' + ones[lastTwoDigits%10];
  }
}

function convertHundred(firstDigit, ones) {
  return ones[firstDigit] === '' ? '': ones[firstDigit] + ' hundred and ';
}

function convertNumber(numberThreeDigits, ones, tens) {
  var firstDigit = parseInt(numberThreeDigits/100);
  var lastTwoDigits = numberThreeDigits%100;

  return convertHundred(firstDigit, ones) + convertDecade(lastTwoDigits, ones, tens);
}

function convertNumbers(digitsGroups, ones, tens) {
  return digitsGroups.map(function(digitsGroup) {
    return convertNumber(digitsGroup, ones, tens);
  })
}

function containHundred(numStr) {
  return numStr.indexOf('hundred') !== -1;
}

function addUnit(numStrGroups, thousands) {
  var reverseNumStrs = numStrGroups.reverse();
  for(var i=0; i<reverseNumStrs.length; i++) {
    reverseNumStrs[i] += thousands[i];
    if(reverseNumStrs[i-1] && containHundred(reverseNumStrs[i-1])) {
      reverseNumStrs[i] += ',';
    } else if (reverseNumStrs[i-1]){
      reverseNumStrs[i] += ' and';
    }
  }
  return reverseNumStrs.reverse();
}

