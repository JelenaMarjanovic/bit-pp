var day = 14;
result = '';

switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        result = 'It\'s a weekday.';
        break;
    case 6:
    case 7:
        result = 'It\'s weekend.';
        break;
    default:
        result = 'Input must be a number between 1 nad 7';
}

console.log(result);