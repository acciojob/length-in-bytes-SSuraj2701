const byteSize = (str) => {
  // write your code here
function byteSize(str) {
	return new Blob([str]).size;
}
	return byteSize(str);
	
		
	  

};
 

// Do not change the code below
const str = prompt("Enter some string."); 
alert(byteSize(str));

