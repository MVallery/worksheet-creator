import { getDefaultNormalizer } from "@testing-library/react"
import * as gen from './general.js'



export const addWhole = (Options) => {
    var boy = gen.boyList[Math.floor(Math.random()*gen.boyList.length)]
    var boy2 = gen.boyList2[Math.floor(Math.random()*gen.boyList2.length)]
    var sport = gen.sportList[Math.floor(Math.random()*gen.sportList.length)]
    var [numberS, numberL, numberXS] = [Math.floor(Math.random()*500 + 100), Math.floor(Math.random()*999+500), Math.floor(Math.random()*99+50)];

    if (Options === "2") {
    [numberS, numberL, numberXS] = [Math.floor(Math.random()*4000+1000), Math.floor(Math.random()*9999+4001), Math.floor(Math.random()*700+300)];

    } else if (Options ==="3") {
    [numberS, numberL, numberXS] = [Math.floor(Math.random()*4000+1000), Math.floor(Math.random()*9999+4001), Math.floor(Math.random()*700+300)];

    } 
    var answer = (numberL+numberS)
    var wrong= gen.wrongOptions(answer, 'whole', numberL, numberS)
    var AC = (answer, wrong[0], wrong[1], wrong[2])
    // var wrong= gen.shuffleArray(gen.wrongOptions(answer, 'decimal', numberL, numberS))
    // var AC = gen.shuffleArray(answer, wrong[0], wrong[1], wrong[2])
    
    var problem = (boy + " played " + sport + " for " + (numberS).toString() + " minutes last year. " + boy2 +
    " played " + sport + " for " + (numberL).toString() + " minutes last year. How many minutes did "
    + boy + " and " + boy2 + ' play altogether? \n  ' + AC[0] + '\n  ' + AC[1] + '\n  ' + AC[2] + '\n  ' + AC[3])
    console.log(problem)
    // return <div><p>{problem} </p></div>
    return problem

    // console.log(problem)
            
}
export const addDec = (Options) => {
    var boy = gen.boyList[Math.floor(Math.random()*gen.boyList.length)]
    var boy2 = gen.boyList2[Math.floor(Math.random()*gen.boyList2.length)]
    var sport = gen.sportList[Math.floor(Math.random()*gen.sportList.length)]
    var [numberS, numberL, numberXS] = [(Math.random()*49999+10011).toFixed(1),  (Math.random()*999999+500011).toFixed(2),  (Math.random()*3999+1001).tofixed(1)];
    var f = 'format'
    var answer= (numberL + numberS);
    var wrong= gen.wrongOptions(answer, 'decimal', numberL, numberS)
    var AC = (answer, wrong[0], wrong[1], wrong[2])
    // var wrong = gen.shuffleArray(gen.wrongOptions(answer, 'add', numberL, numberS))
    // var tempAC = [answer, wrong[0], wrong[1], wrong[2]]
    // var AC = gen.shuffleArray(tempAC)
    var problem = (boy + " played " + sport + " for " + (numberS).toString() + " minutes last year. " + boy2 +
    " played " + sport + " for " + (numberL).toString() + " minutes last year. How many minutes did "
    + boy + " and " + boy2 + " play altogether?\n    " + AC[0] + '\n  ' + AC[1] + '\n  ' + AC[2] + '\n  ' + AC[3])

    console.log(problem)
    
}

export const subDec = (Options) => {
    var boy = gen.boyList[Math.floor(Math.random()*gen.boyList.length)]
    var boy2 = gen.boyList2[Math.floor(Math.random()*gen.boyList2.length)]
    var sport = gen.sportList[Math.floor(Math.random()*gen.sportList.length)]
    var f = 'format'
    var [numberS, numberL, numberXS] = [(Math.random()*49999+10011).toFixed(1),  (Math.random()*999999+500011).toFixed(2),  (Math.random()*3999+1001).tofixed(1)];

    var answer= (numberL - numberS);
    var wrong = gen.shuffleArray(gen.wrongOptions(answer, 'sub', numberL, numberS))
    var tempAC = [answer, wrong[0], wrong[1], wrong[2]]
    var AC = tempAC
    var sub1 = (boy + " played " + sport + " for " + (numberS).toString() + " minutes last year. " + boy2 +
    " played " + sport + " for " + (numberL).toString() + " minutes last month. How many more minutes did "
    + boy2 + " play than " + boy + "?"+ '\n  ' + AC[0] + '\n  ' + AC[1] + '\n  ' + AC[2] + '\n  ' + AC[3])
    var sub2 = (boy + " played " + sport + " for " + (numberS).toString() + " minutes last year. " + boy2 +
    " played " + sport + " for " + (numberL).toString() + " minutes last month. What is the difference between " +
    "the number of minutes " + boy2 + " played and the number of minutes " + boy + " played?\n   " 
    + AC[0] + '\n  ' + AC[1] + '\n  ' + AC[2] + '\n  ' + AC[3])
    var randSub = [sub1, sub2][Math.floor(Math.random())]
    console.log(randSub)
}

export const subWhole = (Options) => {
    var boy = gen.boyList[Math.floor(Math.random()*gen.boyList.length)]
    var boy2 = gen.boyList2[Math.floor(Math.random()*gen.boyList2.length)]
    var sport = gen.sportList[Math.floor(Math.random()*gen.sportList.length)]
    var f = 'format'
    var [numberS, numberL, numberXS] = [Math.floor(Math.random()*500 + 100), Math.floor(Math.random()*999+500), Math.floor(Math.random()*99+50)];

    if (Options.level === "2") {
        [numberS, numberL, numberXS] = [Math.floor(Math.random()*4000+1000), Math.floor(Math.random()*9999+4001), Math.floor(Math.random()*700+300)];
    
    } else if (Options.level === "3") {
        [numberS, numberL, numberXS] = [Math.floor(Math.random()*4000+1000), Math.floor(Math.random()*9999+4001), Math.floor(Math.random()*700+300)];

    }
    var answer= (numberL - numberS);
    var wrong = gen.shuffleArray(gen.wrongOptions(answer, 'sub', numberL, numberS))
    var tempAC = [answer, wrong[0], wrong[1], wrong[2]]
    var AC = tempAC
    var sub1 = (boy + " played " + sport + " for " + (numberS).toString() + " minutes last year. " + boy2 +
    " played " + sport + " for " + (numberL).toString() + " minutes last month. How many more minutes did "
    + boy2 + " play than " + boy + "?"+ '\n  ' + AC[0] + '\n  ' + AC[1] + '\n  ' + AC[2] + '\n  ' + AC[3])
    var sub2 = (boy + " played " + sport + " for " + (numberS).toString() + " minutes last year. " + boy2 +
    " played " + sport + " for " + (numberL).toString() + " minutes last month. What is the difference between " +
    "the number of minutes " + boy2 + " played and the number of minutes " + boy + " played?\n   " 
    + AC[0] + '\n  ' + AC[1] + '\n  ' + AC[2] + '\n  ' + AC[3])
    var randSub = [sub1, sub2][Math.floor(Math.random())]
    console.log(randSub)

}