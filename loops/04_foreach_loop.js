const languages = ["js", "c++", "c", "java", "python", "rust"];
// languages.forEach(function (item) {
//   console.log(item);
// });
languages.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

const journery = [
  { language: "js", languageFullName: "javascript" },
  { language: "c++", languageFullName: "c++ full" },
  { language: "java", languageFullName: "java full" },
];
journery.forEach((item) => {
  console.log(item.languageFullName);
});


