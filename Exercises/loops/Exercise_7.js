var marks = [80, 77, 88, 95, 68];
var sum = 0;

for (var i = 0; i < marks.length; i++) {
    sum += marks[i];
}

var averageMark = sum / marks.length;

var grade = '';

if (averageMark < 60) {
    grade = 'F';
} else if (averageMark < 70) {
    grade = 'D';
} else if (averageMark < 80) {
    grade = 'C';
} else if (averageMark < 90) {
    grade = 'B';
} else {
    grade = 'A';
}

console.log("Average grade is: " + grade);