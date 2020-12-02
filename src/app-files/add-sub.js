import { getDefaultNormalizer } from "@testing-library/react"
import * as gen from './general.js'

  export const addSub = (Options) => {
    var boy = gen.boyList[Math.floor(Math.random()*gen.boyList.length)]
    var boy2 = gen.boyList2[Math.floor(Math.random()*gen.boyList2.length)]
    var sport = gen.sportList[Math.floor(Math.random()*gen.sportList.length)]
    if (Options.specify === "whole") {
      if (Options.level === "1") {
        var [numberS, numberL, numberXS] = [Math.floor(Math.random()*500 + 100), Math.floor(Math.random()*999+500), Math.floor(Math.random()*99+50)]

      }
      else if (Options.level === "2") {
        var [numberS, numberL, numberXS] = [Math.floor(Math.random()*4000+1000), Math.floor(Math.random()*9999+4001), Math.floor(Math.random()*700+300)]

      } else {
        var [numberS, numberL, numberXS] = [Math.floor(Math.random()*4000+1000), Math.floor(Math.random()*9999+4001), Math.floor(Math.random()*700+300)]

      }
    }
    else if (Options.specify === "decimal") {
      var [numberS, numberL, numberXS] = [(Math.random()*49999+10011).toFixed(1),  (Math.random()*999999+500011).toFixed(2),  (Math.random()*3999+1001).tofixed(1)]

    }
    if (Options.specify2 === "add") {
      if (Options.specify === "whole") {
        var f = 'format'
        var answer= (numberL + numberS);
        var wrong = gen.shuffleArray(gen.wrongOptions(answer, 'add', numberL, numberS))
        var tempAC = [answer, wrong[0], wrong[1], wrong[2]]
        var AC = gen.shuffleArray(tempAC)
    
      } else if (Options.specify === "decimal") {
        var answer = (numberL+numberS.toFixed(2))
        var wrong= gen.shuffleArray(gen.wrongOptions(answer, 'decimal', numberL, numberS))
        var AC = gen.shuffleArray(answer, wrong[0], wrong[1], wrong[2])
        } 
        var problem = (boy + " played " + sport + " for " + (numberS).toString() + " minutes last year. " + boy2 +
        " played " + sport + " for " + (numberL).toString() + " minutes last year. How many minutes did "
        + boy + " and " + boy2 + " play altogether?" + '\n  ' + AC[0] + '\n  ' + AC[1] + '\n  ' + AC[2] + '\n  ' + AC[3])
    
        console.log(problem)
    }
    else if (Options.specify2 === "subtract") {
        if (Options.specify === "whole") {
          var f = 'format'
          var answer= (numberL - numberS);
          var wrong = gen.shuffleArray(gen.wrongOptions(answer, 'sub', numberL, numberS))
          var tempAC = [answer, wrong[0], wrong[1], wrong[2]]
          var AC = gen.shuffleArray(tempAC)
      
        } else if (Options.specify === "decimal") {
          var answer = (numberL-numberS.toFixed(2))
          var wrong= gen.shuffleArray(gen.wrongOptions(answer, 'decimal', numberL, numberS))
          var AC = gen.shuffleArray(answer, wrong[0], wrong[1], wrong[2])
          } 
          var sub1 = (randBoy + " played " + randSport + " for " + (NumberS).toString() + " minutes last year. " + randBoy2 +
          " played " + randSport + " for " + (NumberL).toString() + " minutes last month. How many more minutes did "
          + randBoy2 + " play than " + randBoy + "?"+ '\n  ' + AC[0] + '\n  ' + AC[1] + '\n  ' + AC[2] + '\n  ' + AC[3])
          var sub2 = (randBoy + " played " + randSport + " for " + (NumberS).toString() + " minutes last year. " + randBoy2 +
          " played " + randSport + " for " + (NumberL).toString() + " minutes last month. What is the difference between " +
          "the number of minutes " + randBoy2 + " played and the number of minutes " + randBoy + " played?" + '\n  '
          + AC[0] + '\n  ' + AC[1] + '\n  ' + AC[2] + '\n  ' + AC[3])
          randSub = [sub1, sub2][Math.floor(Math.random())]
          console.log(problem)
      }
  }

