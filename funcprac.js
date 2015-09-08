// function tripleFive(){
// 	for (var i=0; i<3; i++){
// 		console.log("Five!");
// 	}
// }
// tripleFive()

// var lastLetter = function (string){
// 	return string.charAt((string.length)-1);
// }
// console.log(lastLetter("mystring"))

// function lastLetter(string){
// 	console.log(string.charAt((string.length)-1));
// }
// lastLetter("mystring")

// function square(x){
// 	return x*x
// }
// console.log(square(5))

// function negate(x){
// 	return x=-x
// }
// console.log(negate(20))

// function toArray(x, y, z){
// 	var myArray=[];
// 	myArray.push(x);
// 	myArray.push(y);
// 	myArray.push(z);
// 	return myArray
// }
// console.log(toArray(1, 2, 3))

// function startsWithA(string){
// 	if (string.charAt(0)==="A" || string.charAt(0)==="a"){
// 		return true
// 	}
// 	else{
// 		return false
// 	}
// }
// console.log(startsWithA("abba"))

// function excite(string){
// 	return string + "!!!"
// }
// console.log(excite("yay"))

// function sun(string){
// 	var n=string.indexOf("sun");
// 	if (n===-1){
// 		return false
// 	}
// 	else{
// 		return true
// 	}
// }
// console.log(sun("sunrise"))

// function tiny (x){
// 	if(x>0 && x<1){
// 		return true
// 	}
// 	else{
// 		return false
// 	}
// }
// console.log(tiny(0.2))

// function getSeconds(h, m){
// 	var numHours = parseInt(h)
// 	var numMin = parseInt(m)
// 	return numHours*60 + numMin	
// }
// console.log(getSeconds(2, 30))

function getSeconds(time){
	var numHours = parseInt(time)
	var numMin = time.substring(3, 5)
	var numMinNum = parseInt(numMin)
	return numHours*60 + numMinNum	
}
console.log(getSeconds("01:30"))
