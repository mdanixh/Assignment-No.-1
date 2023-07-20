let alienColor: string = 'green';

// Version that runs the if block
if (alienColor === 'green') {
  console.log('Congratulations! You just earned 5 points for shooting the alien.');
} else {
  console.log('Congratulations! You just earned 10 points for shooting the alien.');
}

// Version that runs the else block
alienColor = 'red'; // Change the alien's color to something other than green
if (alienColor === 'green') {
  console.log('Congratulations! You just earned 5 points for shooting the alien.');
} else {
  console.log('Congratulations! You just earned 10 points for shooting the alien.');
}

//Version that runs the else block
alienColor = 'blue';
if (alienColor === 'green') {
    console.log('Congratulations! You just earned 5 points for shooting the alien.');
}else {
    console.log('Congratulations! You just earned 20 points for shooting the alien.');
}
