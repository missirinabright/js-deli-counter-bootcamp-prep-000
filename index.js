var katzDeliLine = [];

var num = 0;
function takeANumber(katzDeliLine) {
  num += 1;
  katzDeliLine.push(num);
  return "You are number " + num + " in line.";
}

function currentLine(NewLine) {
    var line = []
    if (NewLine.length === 0) {
      return "The line is currently empty."
    } else {
      for(var i = 0; i < NewLine.length; i++) {
        line += (i + 1) + ". " + NewLine[i] + ", "
      }
      line = line.slice(0, line.length-2)
      return "The line is currently: " + line
    }
    //
}
function nowServing(x) {
  if (x.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var name = x[0];
    x.splice(0, 1);
    return "Currently serving " + name + ".";
  }
}
