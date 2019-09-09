//In the space below each problem, write the code to answer. This page connects to index.html

/* 1.--------
 Write the JavaScript to display the current day and time in the following format and output it to the html page to the span with an id of "question-1"
*/


var d = new Date();
var day = d.getDay()
var dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var month = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
var dayNum = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09"]


document.getElementById("answer1").innerHTML = "Today is " + dayName[d.getDay()] + "<br />" + d.toLocaleTimeString();
document.getElementById("answer2").innerHTML = month[d.getMonth()] + "-" + dayNum[d.getDate()] + "-" + d.getFullYear() + "<br />" + month[d.getMonth()] + "/" + dayNum[d.getDate()] + "/" +  d.getFullYear() + "<br />" + dayNum[d.getDate()] + "/" + month[d.getMonth()] + "/" + d.getFullYear();

function myFunction (){
  document.getElementById("demo").innerHTML="My First JavaScript Function";
  document.getElementById("date").innerHTML=myBday;
}

$(document).ready(function() {
'use strict';
paper.install(window);
paper.setup(document.getElementById('mainCanvas'));
var tool = new Tool();
var c = Shape.Circle(200, 200, 80);
c.fillColor = 'black';
var text = new PointText(200, 200);
text.justification = 'center';
text.fillColor = 'white';
text.fontSize = 20;
text.content = 'hello world';
tool.onMouseDown = function(event) {
var c = Shape.Circle(event.point.x, event.point.y, 20);
c.fillColor = 'green';
};
});
