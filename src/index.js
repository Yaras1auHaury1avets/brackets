module.exports = function check(str, bracketsConfig) {
  bracketsConfig = bracketsConfig.map(a => a[0] + a[1]);
  let checkStr = "";
  while(str.length!=checkStr.length){
    checkStr = str;
    for(let i of bracketsConfig){
      str = str.replaceAll(i, "");
    }
  }
  return str.length==0;
}
