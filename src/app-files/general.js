
import {
  Page,
  Text,
  View,
  Image,
  Document,
  StyleSheet,
  Font,

  // PDFViewer,
  // ReactPDF,
  PDFDownloadLink,
} from "@react-pdf/renderer";


export var sportList = ['football', 'soccer', 'baseball']
export var boyList = ['Greg', 'David', 'Jason', 'Samuel', 'Alex', 'Trevor','Daniel', 'Javier', 'Chris', 'Brett', 'Henry', 'Kenneth']
export var girlList = ['Melissa', 'Danielle', 'Zoey', 'Denah', 'Isabella', 'Valentina', 'Addison', 'Emmy', 'Aveeyah', 'Jenna']
export var nameList = boyList.concat(girlList)
export var candyList = ["sour patch kids","skittles","m&ms", "Mike & Ikes", "Starbursts"]
export var forestAnimal = ["rabbit", "frog", "moth", "snake", "spider", "monkey", "bird"]
export var lakeAnimal = ["frog", "duck", "otter"]
export var desertAnimal = ["lion", "zebra", "giraffe","antelope", "meerkat", "warthog", "hyena"]
export var disasterList = ["zombie apocalypse", "big hurricane", "dinosaur invasion"]

export var storeList = ["Kroger", "Mega Market", "Walmart", "Target", "Fiesta", "Whole Foods Market"]

export var groupList = ["package", "container" ]
export var itemList = ["Pokemon Cards", "baseball cards", "pencils", "erasers", "books", "stickers", "pens", "jelly beans", "candies", "M&Ms", "cookies", "small toys",]
export var packageItemList = ["Cheetos", "crackers", "Skittles", "Takis", "Starbursts", "M&Ms", "Tortilla Chips", "Fruit Snacks", "Gummy Bears", "Sour Patch Kids", "Doritos", "Pasta"]
export var itemList2060 = ["game", "blanket", "game controller"]
export var itemList1020 = ["toy", 'book', 'movie', 'candle', 'lego set']
export var foodList = ["soup", "pizza", "pretzel", "cookie", "potato", "cracker", "banana"]
export var disasterFoodList = ['cookie', 'cracker','oatmeal','soup', 'candy', 'frozen dinner','mac & cheese']
export var teacherList = ["Ms. Vallery", "Mrs. Estes", "Mrs. Keefe", "Mrs. Mendoza", "Mrs. Orr", " Mrs. Guerra", "Mrs. Hatter", "Mrs. Rios", "Mrs. Quinones", "Mrs. Serrano", "Mrs. DePavia"]
export var themeList = ["flower", "space","superhero","neon","jungle","glitter"]

export const roundDec = (num, pv) => {
  var roundNum = Math.round((num + Number.EPSILON) * Math.pow(10, pv)) / Math.pow(10, pv)
  return roundNum

}
export function randWhole(x, y, nozero){
  var num =  Math.floor(Math.random() * (y - x + 1) + x)
  if (nozero === 'true'){
    if (num !== 0){
      return num
    }else {
        return randWhole(x, y, 'true')
    }
  } else {
    return num
  }

}
export const randDec = (x, y, place) => {
  var num = (Math.random()*(y-x) + x).toFixed(place)
  if (num!== 0) {
    return num
  } else {
    return randDec(x,y,place)
  }
  return 
}
export const cap = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export var cityList = [{city:'San Francisco', pop:randWhole(850000,900000)},
                    {city:'Houston', pop:randWhole(2000000,2500000)},
                    {city:'Austin', pop:randWhole(900000,1000000)},
                    {city:'San Antonio', pop:randWhole(1400000,1500000)},
                    {city:'Los Angeles', pop:randWhole(3700000,4300000)}]


export const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return (array)
  }
export const wrongOptions = (answer, op, numL, numS) => {
    var wrong = []
    wrong.push(answer+1, answer*10, answer+10) // need more
    var stringNumS = (numS).toString()
    if (op === 'multiply') {
      if (numS > 9) { //no placeholder
        var noPlaceHolder = Math.floor(Number(stringNumS[0])*numL+ Number(stringNumS[1])*numL)
        console.log('correct:'+ answer+'noplaceholder:'+noPlaceHolder)
        wrong.push(noPlaceHolder)
      } else {
      }
      wrong.push(answer+100)
    }else if (op === 'add') {
      console.log("If op === add")
      wrong.push(answer+2, numL+numS+numL, numL-numS, answer-10, answer-1, answer-2, answer+10)
    }else if (op === 'sub') {
      wrong.push(answer+2, answer-10, answer-1, answer-2, answer+10, numL+numS)
    }else if (op === 'divide') {
      wrong.push(answer-1, answer+10, numL+numS, numL*numS)
    } else if (op === 'decimal') {
      wrong.push(roundDec(answer*100, 3), roundDec(answer/10, 3), roundDec(answer -0.2, 3)) //(numL+numS).toFixed(2), (answer +100).toFixed(1), (answer+0.1).toFixed(2), (answer +0.03).toFixed(2),
    }else {
      console.log("op=== not triggering")
      wrong.push(answer +3, answer-1)
    }
    var wrongChoice = shuffleArray(wrong)
    return ([wrongChoice[0], wrongChoice[1], wrongChoice[2]])
  }
  const tstyles = StyleSheet.create({
    table: {
        display: "table",
         width: "200px",
         textAlign:'center',
    },
    row: {
        flexDirection: "row",
    },
    cell: {
        // padding: '3px'
      },
    header: {
      backgroundColor: 'grey'
    }
  });
  export const answerChoicesKey = (answer, wrong, wrong2, wrong3, f) => {
    var answers = [answer, wrong, wrong2, wrong3]
    answers = shuffleArray(answers)
    if (f === '$') {
      var [$, unit] = ['$', '']
    } else if (f === undefined) {
      var [$, unit] = ['', '']
    } else {
      var [$, unit] = ['', ' '+f]
    } 
    if (typeof answer === 'string') {
      var A = (' A ' + answers[0])
      var B = (' B ' + answers[1])
      var C = (' C ' + answers[2])
      var D = (' D ' + answers[3])
      var E = ''
      if (answers[0] === answer) {
        correctAnswer = A
    } else if (answers[1] === answer) {
      correctAnswer = B
    } else if (answers[2] === answer) {
      correctAnswer = C
    } else {
      correctAnswer = D
    }
    } else if (typeof answer === 'number'){
      var A = (' A ' + $ + answers[0].toLocaleString()+ unit)
      var B = (' B ' + $ + answers[1].toLocaleString()+ unit)
      var C = (' C ' + $ + answers[2].toLocaleString()+ unit)
      var D = (' D ' + $ + answers[3].toLocaleString()+ unit)
      var E = ''
      if (answers[0] === answer) {
        correctAnswer = A
    } else if (answers[1] === answer) {
      correctAnswer = B
    } else if (answers[2] === answer) {
      correctAnswer = C
    } else {
      correctAnswer = D
    }
    } else { //answerchoices are tables
      // var A = <View><Text> A </Text> {answers[0]}</View>
      // var B = <View><Text> A </Text> {answers[0]}</View>
      // var C = <View><Text> A </Text> {answers[0]}</View>
      // var D = <View><Text> A </Text> {answers[0]}</View>

      var A = <View><Text>A</Text>{answers[0]}</View>
      var B = <View><Text>B</Text>{answers[1]}</View>
      var C = <View><Text>C</Text>{answers[2]}</View>
      var D = <View><Text>D</Text>{answers[3]}</View>
      var correctAnswer = ''
      var answerLetter = ''
      if (answers[0] === answer) {
        correctAnswer = <View>{A}</View>
    } else if (answers[1] === answer) {
        correctAnswer = <View>{B}</View>
    } else if (answers[2] === answer) {
      correctAnswer = <View>{C}</View>
    } else {
      correctAnswer = <View>{D}</View>
    }

    }

    // console.log('A = ' +answer)
    // console.log('answers[2]'+ answers[2])

    // console.log(A, B, C, D, E)
    return [A, B, C, D, correctAnswer, answerLetter]
  }
//   export const numberWithCommas = (x) => {
//     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }