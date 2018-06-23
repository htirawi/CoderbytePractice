function digital_root(n) {

	var str = n + '';
	var result = 0;

	if(result.toString().length > 1){
		rec(result.toString());
	}

	function rec (str){

		for(var i =0; i<str.length; i++){
			result += parseInt(str[i]);
		}
		return result;
	}

	var checkResLength = rec(str);
	if(checkResLength.toString().length > 1){
		return digital_root(checkResLength)
	}
	return checkResLength;
}