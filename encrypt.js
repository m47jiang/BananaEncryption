function myFunction(){
	var input,output,key, outkey;
	output = "";
	input = document.getElementById("textstyle1").value;	
	for(var i=0; i<input.length; i++)
	{
        outkey = 0;
        key = Math.floor((Math.random()*10));
	if( input[i] == " ")
	{
		output += " ";
	} else {
		var charcode = input.charCodeAt(i)
		outkey = 26*key+(charcode-96);
       		var letter, firstletter, remainder;     //the variable letter is used in order to add the correct first letter, firstletter is the integer used to determine the letter,
       		//remainder is a variable user to determine the number that remains and output is what i want to output, maybe can change output to output...
       		firstletter = Math.floor(outkey/10);
       		remainder = outkey % 10;
		if( firstletter == 0) {
			output += remainder;
		} else {
			output += String.fromCharCode(96 + firstletter) + remainder;
		}
        }
    }
    document.getElementById("textstyle2").value = output;
}
function test() {
	var output = "";
	var input = "a1 7";
	for(var i =0; i< input.length; i++) {
		if (input[i] == " ")
		{
		    output += " ";
		}
		else if(isLetter(input[i])) {
			output += input[i];
		}
		else if(input[i] >= '0' && input [i] <=9)
		{
			output += parseNumber(parseInt(input[i]));
		}
	}
document.getElementById("textstyle2").value = output;
}
function deCrypt(){

var input, output, numbervalue;
output = "";
input = document.getElementById("textstyle1").value;
for(var i =0; i< input.length; i++)
    {
        if (input[i] == " ")
        {
            output += " ";
        }
        else if(input[i] >= '0' && input [i] <=9)
        {
            numbervalue += parseInt(input[i]);
            var letterNumber = numbervalue % 26;
	    numbervalue = 0;
	    output += parseNumber(letterNumber)
        }
        else
        {
		numbervalue = (input.charCodeAt(i)-96)*10;
        }
    }
document.getElementById("textstyle2").value = output;
}
function parseNumber(numberValue) {
	return String.fromCharCode(96 + numberValue);
}
function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}
