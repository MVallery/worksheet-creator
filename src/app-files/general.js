export var boyList = ['Greg', 'David', 'Jason', 'Samuel', 'Alex', 'Trevor']
export var boyList2 = ['Daniel', 'Javier', 'Chris', 'Brett', 'Henry', 'Kenneth']
export var sportList = ['football', 'soccer', 'baseball']



export const randWhole = (x, y) => {
    return Math.floor(Math.random()*y + x)
}
export const randDec = (x, y, place) => {
  return (Math.random()*y + x).toFixed(place)
}
export const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return (array)
  }
export const wrongOptions = (answer, op, numL, numS) => {
    var wrong = []
    wrong.push(answer+1, answer*10, numL+numS, answer+10) // need more

    if (op === 'multiply') {
      if (numS > 9) { //placeholder
      } else {
      }
    }else if (op === 'add') {
      console.log("If op === add")
      wrong.push(answer+2, numL+numS+numL, numL-numS, answer-10, answer-1, answer-2, answer+10)
    }else if (op === 'sub') {
      wrong.push(answer+2, answer-10, answer-1, answer-2, answer+10)
    }else if (op === 'divide') {
      wrong.push(answer*10, numL+numS, numL*numS)
    } else if (op === 'decimal') {
      wrong.push((answer*100).toFixed(3), (answer/10).toFixed(2), (answer -0.2).toFixed(2)) //(numL+numS).toFixed(2), (answer +100).toFixed(1), (answer+0.1).toFixed(2), (answer +0.03).toFixed(2),
    }else {
      console.log("op=== not triggering")
      wrong.push(answer +3, answer-1, answer*10, answer+1)
    }
    var wrongChoice = shuffleArray(wrong)
    return ([wrongChoice[0], wrongChoice[1], wrongChoice[2]])
  }

  export const answerChoicesKey = (answer, wrong, wrong2, wrong3, f) => {
    var answers = [answer, wrong, wrong2, wrong3]
    answers = shuffleArray(answers)
    var A = (' A ' + answers[0].toLocaleString())
    var B = (' B ' + answers[1].toLocaleString())
    var C = (' C ' + answers[2].toLocaleString())
    var D = (' D ' + answers[3].toLocaleString())
    var E = ''
    console.log('A = ' +answer)
    console.log('answers[2]'+ answers[2])
    if (answers[0] === answer) {
        E = A
    } else if (answers[1] === answer) {
        E = B
    } else if (answers[2] === answer) {
        E = C
    } else if (answers[3] === answer) {
        E = D
    }
    console.log(A, B, C, D, E)
    return [A, B, C, D, E]
  }
//   export const numberWithCommas = (x) => {
//     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }