const uniqueInOrder = (myInput) => {
    let myOutput = [];
    let passOrNot = '';
    
    for(let i = 0; i < myInput.length; i++){
      if(myInput[i] !== passOrNot){
        passOrNot = myInput[i]
        myOutput.push(passOrNot);
      }
    }
    return myOutput;
  }
  
  console.log(uniqueInOrder('ABBCcAD'));