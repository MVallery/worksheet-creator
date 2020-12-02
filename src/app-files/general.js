export var boyList = ['Greg', 'David', 'Jason', 'Samuel', 'Alex', 'Trevor']
export var boyList2 = ['Daniel', 'Javier', 'Chris', 'Brett', 'Henry', 'Kenneth']
export var sportList = ['football', 'soccer', 'baseball']




export const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return (array)
  }
export const wrongOptions = (answer, op, numL, numS) => {
    var wrong = []
    if (op === 'multiply') {
      if (numS > 9) {
          var noPlaceHolder = "noplaceholder"
      } else {
          var noPlaceHolder = numS+1
      }
      wrong.push(answer+1, answer*10, numL+numS) // need more
    }else if (op === 'add') {
      console.log("If op === add")
      wrong.push(answer+1, answer+2, numL+numS+numL, numL-numS, answer-10, answer-1, answer-2, answer+10)
    }else if (op === 'sub') {
      wrong.push(answer+1, answer+2, numL+numS, answer-10, answer-1, answer-2, answer+10)
    }else if (op === 'divide') {
      wrong.push(answer+1, answer*10, numL+numS, numL*numS)
    } else {
      console.log("op=== not triggering")
      wrong.push(answer +3, answer-1, answer*10, answer+1)
    }
    var wrongChoice = shuffleArray(wrong)
    return ([wrongChoice[0], wrongChoice[1], wrongChoice[2]])
  }