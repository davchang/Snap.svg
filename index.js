console.log('-- ready --');

// var s = Snap(600, 600);
// s.text("50%", "50%", "Snap tutorial").attr({
// 	font: "300 100px Source Sans Pro",
// 	textAnchor: "middle",
// 	fill: "#fff"
// })

var s = Snap(600, 600);
Snap.load("testArrowBox.svg", function(f) {
	s.append(f);
});

s.attr({
	fill: 'red'
});

// var textNode = s.select("#myText");
//
// textNode.attr({       // I thought this is how its done..
//   text: 'hello!'
// });

// s.select('polygon').text(290, 350, "Hello!").attr({
//    fill: "#fff",
//    'font-size': 20
// });

// s.text("50%", "50%", "Snap tutorial").attr({
// 	font: "30 10px Source Sans Pro",
// 	textAnchor: "middle",
// 	fill: "#fff"
// })

// var s = Snap("#svg");
// var block = s.rect(50, 50, 100, 100, 20, 20);
//
// block.attr({
//    fill: "rgb(236, 240, 241)",
//    stroke: "#1f2c39",
//    strokeWidth: 3
// });
//
// var text = s.text(70, 135, "Hello!");
// text.attr({
//    'font-size':100
// });
//
// block.attr({
//    width: (text.node.clientWidth + 50)
// });
