var katzDeliLine = [];
var lineNumber = 1;

function takeANumber (line,number) {
  line.push(number);
  let greeting = `Welcome. You are ${number}.`;
  number++;
  return greeting
}
console.log(takeANumber(katzDeliLine, lineNumber))
console.log(takeANumber(katzDeliLine, lineNumber))
console.log(takeANumber(katzDeliLine, lineNumber))
console.log(nowServing(katzDeliLine))
console.log(takeANumber(katzDeliLine, lineNumber))

function nowServing (line) {
  let serving;
  if (line.length === 0) {
    serving = "There is nobody waiting to be served!"
  } else {
    let name = line.shift();
    serving = `Currently serving ${name}.` 
  }
  
  return serving
}

function currentLine (line) {
  let lineString = ''
  if (line.length ===0) {
    return 'The line is currently empty.'
  } else {
    lineString = 'The line is currently: ';
    for (let i = 0; i < line.length; i++) {
      lineString = lineString + (i + 1) + ". " + line[i];
      if (i !== line.length-1) {
        lineString = lineString + ', ';
      }
    }
  }
  
  return lineString
}