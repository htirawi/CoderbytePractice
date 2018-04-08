function LetterChanges(str) { 

var newStr = "";
  var alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var t
    str.toLowerCase()
  for(var i = 0 ; i<str.length;i++){
       t=alpha.indexOf(str[i] )
   if(t!==-1){
           
              if( t===3 || t===7 || t===13 || t===19){
                    newStr+= alpha[(alpha.indexOf(str[i]))+1].toUpperCase()
              }else if (alpha.indexOf(str[i])===26){
                      newStr+= alpha[0].toUpperCase()
                }else{
                            newStr+= alpha[(alpha.indexOf(str[i]))+1]
                }
    }else{    newStr+=str[i] }
}
  
  return newStr; 
         
}
   
// keep this function call here 
LetterChanges(readline());