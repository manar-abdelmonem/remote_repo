var obj = {
    name:"manar",
    age:23,
    address:"Benha"
}

var handler = {
      get:function(target,propName,person){
        if(!(propName in target)){
            throw(`the prop ${propName} is not exist `);
        }
        
        return target[propName];
      },
    set(target, prop, value) {
      if (prop === 'name') {
        if (typeof value === 'string' && value.length === 7) {
          target[prop] = value;
        } else {
          throw new Error("Name must be a string of exactly 7 characters.");
        }
      } else if (prop === 'address') {
        if (typeof value === 'string') {
          target[prop] = value;
        } else {
          throw new Error("Address must be a string.");
        }
      } else if (prop === 'age') {
        if (typeof value === 'number' && value >= 25 && value <= 60) {
          target[prop] = value;
        } else {
          throw new Error("Age must be a number between 25 and 60.");
        }
      } else {
        throw new Error(`Property '${prop}' is not allowed.`);
      }
      return true;
    }
  };
  
  const person = new Proxy(obj, handler);
//   person.age = 30;  
  console.log(person);
  