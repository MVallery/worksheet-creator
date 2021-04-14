
import {Text,View, StyleSheet,} from "@react-pdf/renderer";


export var sportList = ['football', 'soccer', 'baseball']
export var boyList = ['Greg', 'David', 'Jason', 'Samuel', 'Alex', 'Trevor','Daniel',
 'Matthew', 'Logan', 'Aiden', 'Max', 'Zack', 'Jeremy', 'Joshua', 'Andrew', 'Isaac', 'Julian', 'Javier', 
'Javier', 'Chris', 'Brett', 'Liam', 'Noah', 'Oliver', 'William', 'Elijah', 'James', 'Ben', 'Lucas', 
'Mason', 'Ethan', 'Henry', 'Kenneth', 'Frank', 'Jose', 'Jackson', 'Jared', 'Eduardo', 'Aaron', 'Carlos',
'Cristian', 'Erick', 'Jorge', 'Misael', 'Josue', 'Juan', 'Miguel', 'Gabriel', 'Kevin',
'Leandro', 'Luis','Emiliano', 'Walter', 'Angel', 'Raul', 'Josiah', 'Donte',

]
export var girlList = ['Melissa', 'Danielle', 'Zoey', 'Denah', 'Isabella', 'Valentina', 
'Olivia', 'Emma', 'Ava', 'Sophia', 'Charlotte', 'Amelia', 'Harper', 'Evelyn', 'Avery', 'Lily', 
'Natalie', 'Aria', 'Layla', 'Lyla', 'Chloe', 'Grace', 'Madison','Victoria', 'Veronica', 
'Christine', 'Addison', 'Emmy', 'Mary', 'Jenna', 'Ashley','Maria', 'Kylie', 'Laura', 'Sarah', 
'Hannah','Rachel','Emily','Monica', 'Nicole', 'Stehanie', 'Camila', 'Miranda','Evelyn',
'Diana','Brittany','Andrea','Allison','Lizbeth','Marilyn','Carrie','Angela','Hailey','Yasmin',
'Lorena','Fatima','Natalia','Sophia','Lanay','Jaleska','Baylie',]
export var nameList = boyList.concat(girlList)
export var womanList = ["Ms. Vallery", "Mrs. Estes", 'Ms. Smith', 'Ms. Gonzalez', 'Ms. Hernandez', 
'Mrs. Mendez', 'Mrs. Magee', 'Mrs. Henderson', 'Mrs. Robertson', 'Mrs. Martin', 'Ms. Davidson', 
'Ms. Brown', 'Mrs. Perez', 'Mrs. Peterson', "Mrs. Keefe", "Mrs. Mendoza", "Mrs. Orr", 
"Mrs. Guerra", "Mrs. Hatter", "Mrs. Rios", "Mrs. Quinones", "Mrs. Serrano", "Mrs. DePavia",
'Mrs. Duncan', 'Mrs. Howard', 'Mrs. Sanchez', 'Mrs. Swain', 
]

export var candyList = ["sour patch kids","skittles","m&ms", "Mike & Ikes", "Starbursts"]
export var forestAnimal = ["rabbit", "frog", "moth", "snake", "spider", "monkey", "bird"]
export var lakeAnimal = ["frog", "duck", "otter"]
export var desertAnimal = ["lion", "zebra", "giraffe","antelope", "meerkat", "warthog", "hyena"]

export var bigPetList = ["cat", "dog", "rabbit"]
export var smallPetList = ["rabbit","guinea pig", 'lizard','turtle','hamster','ferret','rat']
export var xsmallPetList = ['hamster', 'fish', 'frog','tarantula']
export var disasterList = ["zombie apocalypse", "category 5 hurricane", 'snow storm', 'tsunami','ice storm', 'flood','natural disaster']

export var storeList = ["Kroger", "Mega Market", "Walmart", "Target", "Fiesta", "Whole Foods Market"]

export var itemLong = ['string', 'wood', 'rope', 'paper', 'yarn', 'metal', 'wire', 'pipe']
export var measureList = ['inches','feet','yards','meters','centimeters']

export var groupList = ["package", "container" ]
export var itemList = ["Pokemon cards", "baseball cards", "pencils", "erasers", "books", "stickers", "pens", "jelly beans", "candies", "M&Ms", "cookies", "small toys",]
export var itemPkgList = ["Cheetos", "crackers", "Skittles", "takis", "Starbursts", "M&Ms", "tortilla chips", "fruit snacks", "gummy bears", "Sour Patch Kids", "Doritos", "Pasta"]
export var itemList400_1500 = ['phone','tv','computer','laptop', 'game system']
export var itemList20_60 = ["game", "blanket", "game controller"]
export var itemList10_20 = ["toy", 'book', 'movie', 'candle', 'lego set', 'board game', 'card game']
export var itemList2_9 = ['doll', 'lego set', 'movie', 'toy', 'bag of chip', 'teddy bear', 'puzzle', "rubik's cube", ]
export var foodList = ["soup", "pizza", "pretzel", "cookie", "potato", "cracker", "banana"]
export var disasterFoodList = ['cookie', 'cracker','oatmeal','soup', 'candy', 'frozen dinner','mac & cheese']
export var themeList = ["flower", "space","superhero","neon","jungle","glitter"]
export var tourList = ['glacier', 'whale watching', 'ice cave', 'puffin viewing', 'castle', 'northern lights viewing', 'volcano viewing', 'mountain climbing', 'scuba diving', 'zipline', 'snorkeling']
export var eventHire = ['caterer', 'photographer', 'band', 'DJ']
export var each = ['for each', 'for one', 'per']
export var canItemList = ['black beans', 'kidney beans', 'chick peas', 'spinach', 'pinto beans', 'sweet potatoes']
export var materialList = ['maple wood', 'pipe', 'drywall', 'roof shingles', 'bricks']
export var buildList = ['house', 'apartment building', 'shed', 'tree house', 'library', 'store']
export const roundDec = (num, pv) => {
  if (Number.isInteger(num)) {
    return num
  } else {
    var roundNum = Math.round((num + Number.EPSILON) * Math.pow(10, pv)) / Math.pow(10, pv)
    return Number(roundNum)

  }

}
export function randWhole(x, y, nozerone){
  var num =  Math.floor(Math.random() * (y - x + 1) + x)
  if (nozerone === 'true'){
    if (num !== 0 && num!== 1){
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
  if (Number.isInteger(Number(num))) {
    return randDec(x,y,place)
  } else {
    return Number(num)
  }
}
export const decPV = (x) => {
  if (Number.isInteger(Number(x))){
    return 0
  }else{
    return x.toString().split('.')[1].length
  }
}
export const largestDecPV = (x, y) => {
  return Math.max(decPV(x), decPV(y))
}
export const decOp = (x, y, pv, op) => {
  return (Number(eval(x+op+y).toFixed(pv)))
}
export const multDecPV = (x, y) => {

  if(Number.isInteger(Number(x)) && Number.isInteger(Number(y))) {
    return 0
  } else {
    return(decPV(x)+decPV(y))
  }
}

export const removeDec = (x) => {
  return Number(x.toString().replace('.', ''))
}
export const splitDec = (x) => {
  let splitDec = x.toString().split('.')
  let whole = splitDec[0]
  if (splitDec[1] === undefined){
    var decimal = ''
  } else {
    decimal = splitDec[1]
  }
  return [whole, decimal]

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
export const wrongOptions = (answer, op, numL, numS, pv) => {
    var wrong = []
    wrong.push(answer+1, answer*10, answer+10) // need more
    var stringNumS = (numS).toString()
    if (op === 'multiply') {
      if (numS > 9) { //no placeholder
        var noPlaceHolder = Math.floor(Number(stringNumS[0])*numL+ Number(stringNumS[1])*numL)
        wrong.push(noPlaceHolder)
      } else {
      }
      wrong.push(answer+100)
    }else if (op === 'add') {
      wrong.push(answer+2, numL+numS+numL, numL-numS, answer+3, answer-1, answer-2)
    }else if (op === 'sub') {
      wrong.push(answer+2, Math.abs(answer-1), numL+numS)
    }else if (op === 'divide') {
      wrong.push(answer+10, numL+numS, numL*numS)
    } else if (op === 'decimal') {
      if (pv === 2){
        wrong.push(roundDec(answer+0.01, pv), Math.abs(roundDec(answer-0.01, pv)))
      }
      if (answer>99) {
        wrong.push(roundDec(answer+100, pv), roundDec(answer-11, pv), roundDec(answer-1.1, pv), roundDec(answer+101.1, pv))
      }
      wrong.push(roundDec(answer/10, pv), roundDec(answer+11, pv), roundDec(answer+11.1, pv), roundDec(answer+0.1, pv), roundDec(answer+0.2, pv), Math.abs(roundDec(answer-0.1, pv)), Math.abs(roundDec(answer-0.2, pv))) //(numL+numS).toFixed(2), (answer +100).toFixed(1), (answer+0.1).toFixed(2), (answer +0.03).toFixed(2),
    
    }else {
      wrong.push(answer +3, answer-1)
    }
    var wrongChoice = shuffleArray(wrong)
    
    return ([wrongChoice[0], wrongChoice[1], wrongChoice[2]])
  }
  // const tstyles = StyleSheet.create({
  //   table: {
  //       display: "table",
  //        width: "200px",
  //        textAlign:'center',
  //   },
  //   row: {
  //       flexDirection: "row",
  //   },
  //   cell: {
  //       // padding: '3px'
  //     },
  //   header: {
  //     backgroundColor: 'grey'
  //   }
  // });
  export const answerChoicesKey = (answer, wrong, wrong2, wrong3, f) => {
    var answers = [answer, wrong, wrong2, wrong3]
    answers = shuffleArray(answers)
    if (f === '$') {
      
      answers = shuffleArray([roundDec(answer,2), roundDec(wrong,2), roundDec(wrong2,2), roundDec(wrong3,2)])
      var [$, unit] = ['$', '']
    } else if (f === undefined) {
      [$, unit] = ['', '']
    } else {
      [$, unit] = ['', ' '+f]
    } 
    if (typeof answer === 'string') {
      var A = (' A ' + answers[0])
      var B = (' B ' + answers[1])
      var C = (' C ' + answers[2])
      var D = (' D ' + answers[3])
      var E = ''
      if (answers[0] === answer) {
      var correctAnswer = A
    } else if (answers[1] === answer) {
      correctAnswer = B
    } else if (answers[2] === answer) {
      correctAnswer = C
    } else {
      correctAnswer = D
    }
    } else if (typeof answer === 'number'){
      A = (' A ' + $ + answers[0].toLocaleString()+ unit)
      B = (' B ' + $ + answers[1].toLocaleString()+ unit)
      C = (' C ' + $ + answers[2].toLocaleString()+ unit)
      D = (' D ' + $ + answers[3].toLocaleString()+ unit)
      E = ''
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
      A = <View><Text>A</Text>{answers[0]}</View>
      B = <View><Text>B</Text>{answers[1]}</View>
      C = <View><Text>C</Text>{answers[2]}</View>
      D = <View><Text>D</Text>{answers[3]}</View>
      correctAnswer = ''
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

    return [A, B, C, D, correctAnswer, answerLetter]
  }
//   export const numberWithCommas = (x) => {
//     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }