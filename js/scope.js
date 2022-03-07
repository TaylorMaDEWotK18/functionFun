let person = 'Lee';

function greeting() {
  let person = 'Meg';
  alert(`Hi, ${person}!`);
}

greeting();
alert(`Hi ${person}!`);
greeting();

function greeting2() {
  let person = 'TMade';
  alert(`What's good ${person}! I think your thinking is in the proper scope of things!`);
}

greeting2();
greeting();