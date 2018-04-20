function LetterCapitalize(str) { 

	var newStr = str.replace(str[0],str[0].toUpperCase());
	for(var i = 0 ; i < newStr.length; i++){
		if(newStr[i].includes(" ")){
			newStr = newStr.replace(str[i+1],str[i+1].toUpperCase());
		}

	}

  // code goes here
  return newStr; 
  
}