module.exports = function check(str, bracketsConfig) {
	let arr = [];
	bracketsConfig.forEach(i=>{
		arr.push(i.join(''));
	});
	let count;
	do{count = 0;
		for(let i = 0; i<arr.length; i++){
			if(str.indexOf(arr[i])>=0){
				count++; str = str.replace(arr[i],'')
			}
		}
	}while(count!=0);	
	return str.length == 0;
}
