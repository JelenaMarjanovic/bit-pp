var month = 10;

var result = '';

switch (month) {
    case 12:
    case 1:
    case 2:
        result = 'Winter';
        break;
    case 3:
    case 4:
    case 5:
        result = 'Spring';
        break;
    case 6:
    case 7:
    case 8:
        result = 'Summer';
        break;
    case 9:
    case 10:
    case 11:
        result = 'Fall';
        break;
    default:
        result = 'Input must be a number between 1 and 12';
        break;
}

console.log(result);