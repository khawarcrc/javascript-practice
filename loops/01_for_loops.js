for (let i = 0; i <= 10; i++) {
  console.log(`outer loop ${i}`);
  for (let j = 0; j <= 10; j++) {
    // console.log(`inner loop value ${j} and inner ${i}`)
    console.log(i + "*" + j + " = " + i * j);
  }
}

let forlooparray = ["hello", "hi", "fly", "dry"];
console.log(forlooparray.length);
for (let index = 0; index < forlooparray.length; index++) {
  const element = forlooparray[index];
  console.log(element);
}

for (let index = 1; index <= 20; index++) {
  console.log(`value of i ${index}`);
}

const foroff=[10,20,30,40,50,60]
for (const iterator of foroff) {
   console.log(`value of ${iterator}`)
}