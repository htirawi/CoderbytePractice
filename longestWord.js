function LongestWord(sen) {
   var y=sen.replace(/[^a-zA-Z ]/g, "")
   var x=y.split(" ")
   var max=x[0]
for (var i = 0; i < x.length; i++) {
 if (x[i].length>max.length) {
   max=x[i]
 }
}
return max;    
}
   
// keep this function call here 
LongestWord(readline());