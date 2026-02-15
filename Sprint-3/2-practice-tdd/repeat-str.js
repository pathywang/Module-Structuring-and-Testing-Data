function repeatStr(str,count) {
  if (count>0) return str.repeat(count)
  if (count===0) return ""
  if (count<0) return"invalid count"
}

console.log(repeatStr("hello",5))
console.log(repeatStr("nihao",1))
console.log(repeatStr("nihao",-5))

module.exports = repeatStr;
