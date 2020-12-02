import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import * as addsub from './app-files/add-sub'

function App() {
  useEffect(() => {
    addsub.addSub({specify:"whole", specify2:"add", level:"2" })
  }, []);
// def wrongOptions(answer, op, numL, numS):
//     wrong = []
//     if op == 'multiply':
//         if numS >9:
//             noPlaceHolder = sum(int(digit) for digit in str(numS))
//         else:
//             noPlaceHolder = numS+1
//         wrong.extend((answer+1, answer*10, numL+numS, round(numL//numS),answer+100, answer+10, answer-10, answer-1, numL*noPlaceHolder))
//     elif op == 'divide':
//         wrong.extend((answer+1, answer*10, numL+numS, numL*numS, abs(answer-10), abs(answer-1), abs(answer-2)))
//     elif op == 'decimal':
//         wrong.extend((answer+1, answer*10, answer*100, answer/10, answer/100, abs(answer-1), answer+1, answer+0.1, abs(answer-0.1), answer+0.01))
//     elif op == 'perimeter':
//         wrong.extend((numL+numS, numL*numS, numL+numS+numS, answer+1, answer+2, answer-2, numL+numL, numS+numS))
//     elif op == 'add':
//         wrong.extend((answer+1, answer+2, numL+numS+numL, numL-numS, answer-10, answer-1, answer-2, answer+10))
//     elif op == 'sub':
//         wrong.extend((answer+1, answer+2, numL+numS, answer-10, answer-1, answer-2, answer+10))

//     wrongChoice = np.random.permutation(wrong)

//     return [wrongChoice[0], wrongChoice[1], wrongChoice[2]]



  // def addSub(Options):
  // // randBoy, randBoy2, randSport= random.choice(Boy), random.choice(Boy), random.choice(Sport)
  // // if Options["specify"][0] == "whole":
  // //     if Options["level"] == "1":
  // //         NumberS, NumberL, NumberXS = randint(100, 499), randint(500, 999), randint(50, 99)
  //     // elif Options["level"] == "2":
  //     //     NumberS, NumberL, NumberXS = randint(1000, 4000), randint(4001, 9999), randint(300, 700)
  //     // else:
  //     //     NumberS, NumberL, NumberXS = randint(1000, 4000), randint(4001, 9999), randint(300, 700)
  // elif Options["specify"][0] == "decimal":
  //     NumberS, NumberL, NumberXS = randint(10011, 49999)/10, randint(500011, 999999)/100, randint(1001, 3999)/10
  // if Options["specify"][1] == "add":

  //     if Options['specify'][0] == 'whole':
  //         f = 'format'
  //         answer = (NumberL+NumberS)
  //         wrong = np.random.permutation(wrongOptions(answer, 'add', NumberL, NumberS))
  //         AC = AnswerChoicesKey(answer, wrong[0], wrong[1], wrong[2], f)
  //     elif Options['specify'][0] == 'decimal':
  //         f = 'roundFormat'
  //         answer = round((NumberL+NumberS), 2)
  //         wrong = np.random.permutation(wrongOptions(answer, 'decimal', NumberL, NumberS))
  //         AC = AnswerChoicesKey(answer, wrong[0], wrong[1], wrong[2], f)
  //     problem = (randBoy + " played " + randSport + " for " + str(NumberS) + " minutes last month. " + randBoy2 +
  //                " played " + randSport + " for " + str(NumberL) + " minutes last month. How many minutes did "
  //                + randBoy + " and " + randBoy2 + " play altogether?" + '\n  ' + AC[0] + '\n  ' + AC[1] + '\n  ' + AC[2] + '\n  ' + AC[3])
  //     print(problem)
  //     return problem

  // elif Options["specify"][1] == "subtract":
  //     if Options['specify'][0] == 'whole':
  //         f = 'format'
  //         answer = (NumberL-NumberS)
  //         wrong = np.random.permutation(wrongOptions(answer, 'sub', NumberL, NumberS))
  //         AC = AnswerChoicesKey(answer, wrong[0], wrong[1], wrong[2], f)
  //     if Options['specify'][0] == 'decimal':
  //         f = 'roundFormat'
  //         answer = NumberL-NumberS
  //         wrong = np.random.permutation(wrongOptions(answer, 'decimal', NumberL, NumberS))
  //         AC = AnswerChoicesKey(answer, wrong[0], wrong[1], wrong[2], f)
  //     sub1 = (randBoy + " played " + randSport + " for " + str(NumberS) + " minutes last month. " + randBoy2 +
  //             " played " + randSport + " for " + str(NumberL) + " minutes last month. How many more minutes did "
  //             + randBoy2 + " play than " + randBoy + "?"+ '\n  ' + AC[0] + '\n  ' + AC[1] + '\n  ' + AC[2] + '\n  ' + AC[3])
  //     sub2 = (randBoy + " played " + randSport + " for " + str(NumberS) + " minutes last month. " + randBoy2 +
  //             " played " + randSport + " for " + str(NumberL) + " minutes last month. What is the difference between "
  //             "the number of minutes " + randBoy2 + " played and the number of minutes " + randBoy + " played?" + '\n  '
  //             + AC[0] + '\n  ' + AC[1] + '\n  ' + AC[2] + '\n  ' + AC[3])
  //     randSub = random.choice([sub1, sub2])
  //     print(randSub)
  //     return randSub

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
