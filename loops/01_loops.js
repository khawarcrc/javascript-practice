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