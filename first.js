function makeInputVerifier(minimum, maximum) {
  return function verify(key){
      if(key < minimum){
          return "Input is less than minimum value";
      }
      else if(key >= minimum && key <= maximum){
          return "Input is in range"
      }
      else if (key > maximum)
      return "Input is more than maximum value"
  }
}
