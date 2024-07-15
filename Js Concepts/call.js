function setName(name) {
  this.name = name;
}

function setFields(name, email, phoneNumber) {
  setName.call(this, name);
  this.email = email;
  this.phone = phoneNumber;
}

const newFields = new  setFields("coderbro", "coder@code", "007")
console.log(newFields);



// call jo ha wo curent execution context kese or function ko pass kr dta ha