// Goal 1: Method to efficiently sort in O(n) patient files of
// input [file(type:high), file(type:low), file(type:flow, file, type:mid), file(type:high), file(type:low)]
// into an array output of the same files where the output preference is 1. type: high --> 2. type: mid --> 3. type: low

// Goal 2: As per Goal 1, but in O(1) utilizing an infinite loop.

// Goal 1 Solution-

// Setting 3 empty variables to populate towards returning in specified order of output.
var h = null;
var m = null;
var l = null;

function file(format) {
  this.format = format;
  this.fileCatalog = ""; //create file array
  this.type = ""; //fileSort
}

//inputArr =[file(type:high), file(type:low), file(type:flow, file, type:mid), file(type:high), file(type:low)]

var inputArr = [
  { type: high },
  { type: low },
  { type: low },
  { type: mid },
  { type: high },
  { type: low }
];
function fileSort(arr) {
  for (var i = 0; i < arr.length; i++) {}
}
