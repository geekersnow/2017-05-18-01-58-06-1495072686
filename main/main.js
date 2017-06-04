module.exports = function main(str) {
  // Write your cade here
  var num = '', sum = 0;
  num = str.split(''); 
  for(var i=0; i< num.length;i++)
	sum += parseInt(num[i], 10);
  return sum;
};
