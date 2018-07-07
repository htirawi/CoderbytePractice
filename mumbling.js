function accum(s) {
	var newStr = "";
	var capitalize = "";
	for(var i = 0 ; i < s.length;i++){
		capitalize = s[i].toUpperCase();
		if(s.length === 1){
			return capitalize;
		}
		else{
			newStr+=(capitalize + s[i].repeat(i))
			newStr+="-";
		} 
	}
	newStr = newStr.slice(0, -1)
	return newStr;

}