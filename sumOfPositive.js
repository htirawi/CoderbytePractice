function positiveSum(arr) {
var sum = 0;

for(var i = 0 ; i < arr.length; i++){

if(arr[i] > 0){
sum+=arr[i];
}
else if(arr.length === 0){
return 0;
}

  
}
return sum;

}