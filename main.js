document.write(Number.MAX_VALUE + "<br />"); <!--Prints Max and Min Values for Page-->
document.write(Number.MIN_VALUE + "<br />");

var samp_str = "Here are some excaped character \" \' \\ \t \n";  
document.write(samp_str + "<br />");

var first_str = "First String ";
var second_str = "Second String";

var combined_string = first_str + second_str;

document.writeln(combined_string + "<br />");
document.writeln("Length of string: " + combined_string.length + "<br />");
document.writeln("First, Substring: " + combined_string.substring(0, 5) + "<br />");
document.writeln("Last Char, charAt:" + combined_string.charAt(combined_string.length-1) + "<br />");
document.writeln("Index of t is, indexOf: " + combined_string.indexOf('t') + "<br />");

var str_var = "5";
var num_var = 10;

document.writeln("+ = string, * = num" + "<br />");

var total_num = num_var + str_var;
var multi_tot = num_var * str_var;

document.writeln("5 + 10 = " + total_num + "<br />");
document.writeln("5 * 10 = " + multi_tot + "<br />");

total_num = num_var + Number(str_var);

document.writeln("Type conversion to number = 5 + 10 = " + total_num + "<br />");

total_str = String(num_var) + str_var;

document.writeln("Type conversion to string = 5 + 10 = " + total_str + "<br />");

var float_var = 3.1415
var float_cut = float_var.toFixed(2);

document.writeln("Float cut down to 2 deci: " + float_cut + "<br />");

var boolean_var = Boolean(23);
document.writeln("Boolean = 0 or NaN = false, Boolean != 0 or !NaN = true: " + boolean_var + "<br />");

var rand1 = 5;
var rand2 = 10;

document.write("Is 5 > 10: " + (rand1 > rand2) + "<br />");
document.write("Is 5 < 10: " + (rand1 < rand2) + "<br />");
document.write("Is 5 >= 10: " + (rand1 >= rand2) + "<br />");
document.write("Is 5 <= 10: " + (rand1 <= rand2) + "<br />");

document.write("Logical op: Is 5 < 10 = && 5 != 10: " + ((rand1 < rand2) && (rand1 != rand2)) + "<br />");

var vehicles = new Array("car", "truck", "van", "tractor");
document.write("The value of the second value in the array is: " + vehicles[1] + "<br />");

for (i in vehicles)
{
    document.write("Value of i value in array " + vehicles[i] + "<br />");
}

var if_var = (5 < 10) ? "5 is less than 10" : "5 is greater than 10";
document.write(if_var + "<br />");

if (5 > 10)
    document.write("5 is greater than 10" + "<br />");
else if (5 < 10)
    document.write("5 is < 10" + "<br />");
else
    document.write("5 is = to 10" + "<br />");

var state = "Jersey";

switch (state)
{
    case "California":
        document.write("Warmer than me" + "<br />");
        break;
    case "Jersey":
        document.write("Is me" + "<br />");
        break;
}





