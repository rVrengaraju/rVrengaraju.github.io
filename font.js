
<<<<<<< HEAD
function getRandomColor()
{
    var colors = new Array('#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
=======
function getRandomClass()
{
    var classes = new Array('#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
>>>>>>> a21f2b98f03cdde8d0b62a508e329161bd5e1b60
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF');
    var randomNumber = Math.floor(Math.random()*50);
<<<<<<< HEAD
    return colors[randomNumber];
}

var x=getRandomColor;
=======
    return classes[randomNumber];
}

var x=getRandomClass;
>>>>>>> a21f2b98f03cdde8d0b62a508e329161bd5e1b60

$(document).ready(function() {
	$("#comp_sci").hover(function(){
		$(this).css("font-size", 50);
	},
	function(){
		$(this).css("font-size", 40);
	});
});


$(document).ready(function() {
	$("#aboutME").hover(function(){
		$(this).css("color", x);
	},
	function(){
		$(this).css("color", "#f2f2f2");
	});
});