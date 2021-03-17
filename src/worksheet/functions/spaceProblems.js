
  const spaceProblemsExtra = (array) => {
    var newArray = []
    if (array.length<6){
      newArray.push(array.splice(0))
    }else if (array.length%4 === 3){
      
      newArray.push(array.splice(0,3))
    }else if (array.length%4 === 2) {
   
      newArray.push(array.splice(0,3))
      newArray.push(array.splice(0,3))
    } else if (array.length%4 === 1) {      
      newArray.push(array.splice(0,3))
      newArray.push(array.splice(0,3))
      newArray.push(array.splice(0,3))
    }
    for (let i=0; i<array.length; i++){
      newArray.push(array.splice(0,4))
    }
    console.log(newArray)
    return newArray
  }

  
  const spaceProblems = (array) => {
    var newArray = []
    if (array.length<6){
      newArray.push(array.splice(0))
    }else if (array.length%4 === 3){
      
      newArray.push(array.splice(0,3))
    }else if (array.length%4 === 2) {
   
      newArray.push(array.splice(0,3))
      newArray.push(array.splice(0,3))
    } else if (array.length%4 === 1) {      
      newArray.push(array.splice(0,3))
      newArray.push(array.splice(0,3))
      newArray.push(array.splice(0,3))
    }
    for (let i=0; i<array.length; i++){
      newArray.push(array.splice(0,4))
    }
    console.log(newArray)
    return newArray
  }

