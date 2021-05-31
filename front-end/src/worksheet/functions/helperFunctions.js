export const specifyList = (obj, value) => { //searching for true values
  let specifyArray = []
  for (let i in obj) {
    if (i === 'probStyle' && obj[i].length>0){
      specifyArray.push(obj[i])
    } else if (i === 'quantity') {
      continue;
    } else {
      let filterValues = Object.keys(obj[i]).filter(key => obj[i][key]===value)
      specifyArray = [...specifyArray, ...filterValues]
    }
  }
  let joinedSpecifyArray = specifyArray.join(', ')
  return joinedSpecifyArray
}