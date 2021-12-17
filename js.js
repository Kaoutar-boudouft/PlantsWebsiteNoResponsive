
var command=[];
var oldp=0;
var num=0;
function stock(x,im){
	
		var newp=parseFloat(x);
		oldp=oldp+newp;
		$("#prix").text(oldp+"dh");
		
		num=num+1;
		$("#number").text(num);
	
	var i="<img src='"+im+"' id='ii'>";
	var c=[];
	c.push(x);
	c.push(i);
	command.push(c);
    
	  
	  
	var tab="<table id='tab'>";
	tab=tab+"<tr>";
	tab=tab+"<th>"+"Element"+"<br>"+"</th>";
	tab=tab+"<th>"+"price"+"<br>"+"</th>";
	tab=tab+"<th>"+""+"<br>"+"</th>";

	tab=tab+"</tr>";
	for(i=0;i<=command.length-1;i++)
	{
		tab=tab+"<tr id='"+i+"m'>";
		tab=tab+"<td>"+command[i][1]+"</td>";
		tab=tab+"<td>"+command[i][0]+"DH"+"</td>";
		tab=tab+"<td>"+"<input type='button' value='delet' onclick='remov("+i+")' id='re'>"+"</td>";
		tab=tab+"</tr>";	
	}
	tab=tab+"</table>";
	document.getElementById("mycart").innerHTML="<h1 id='titre'>"+"MY Order"+"</h1>"+"<br>"+tab+"<br>"+"<b id='t'>"+"TOTAL: "+oldp+"DH"+"</b>"+"<br>";
	

}
function remov(y){	
	$("#"+y+"m").remove();
	oldp=oldp/1-command[y][0]/1;
	num=num-1;
	delete command[y];
	$("#t").text("TOTAL: "+oldp+"dh");
	$("#number").text(num);
	$("#prix").text(oldp+"dh");
	if(oldp===0)
	{$("#mycart").hide(3000);}
}