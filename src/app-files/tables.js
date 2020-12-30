import {
    // Page,
    // Text,
    // View,
    Image,
    // Document,
    // StyleSheet,
    // PDFViewer,
    // ReactPDF,
    // PDFDownloadLink,
  } from "@react-pdf/renderer";
import html2canvas from 'html2canvas';

var image = []
export const table1 = (Options) => {
    return(
        <div id="table-snap">
        <table>
          <tr>
            <td>This is a table</td>
            <td>Hello</td>
            <td>What</td>
          </tr>
          <tr>
            <td>Zoey</td>
            <td>David</td>
            <td>Melissa</td>
    
          </tr>
        </table>
      </div>
    )

}
const convertHtml2Canvas = (id) => {
    var imgData
    html2canvas(document.querySelector(id)).then(function(canvas) {
        // console.log('Finished')
        document.body.appendChild(canvas)
        imgData = canvas.toDataURL("image/png")

        console.log('This is inside html2canvas in convertHtml2Canvas function:'+imgData)
        return imgData

    })
    // console.log('this is inside converHtml2Canvas after html2Canvas'+imgData)
    // return imgData

}
export const tableTRY12281047 = (Options) => { //
    var imgData = "data:image/jpeg;base64,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"
    // const dataURL = (x) => {
    //     return x
    // }
    
    html2canvas(document.querySelector("#table-snap")).then(function(canvas) {
        // console.log('Finished')
        document.body.appendChild(canvas)
        imgData = canvas.toDataURL("image/png")

        console.log(imgData)
        var prob = "hello this is working" 
        
        var problem = {questionText: prob,
            answerChoices: "no answers yet",
            correctAnswer: 'correct answer',
            img: imgData,
            // img:"https://images2.minutemediacdn.com/image/upload/c_crop,h_1778,w_3155,x_0,y_843/v1554928552/shape/mentalfloss/540093-istock-514343279.jpg?itok=isS-TJcM"

        } 
        return problem
        
        
    }) 
}
export const tablev4 = (Options) => { //goes with convertHtml2Canvas
    var imgData = "data:image/jpeg;base64,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"
    imgData = convertHtml2Canvas("#table-snap")
    console.log('This is inside table function after converHtml2Canvas'+imgData)
    var prob = "hello this is working" 
    var problem = {questionText: prob,
        answerChoices: "no answers yet",
        correctAnswer: 'correct answer',
        img: imgData,
        // img:"https://images2.minutemediacdn.com/image/upload/c_crop,h_1778,w_3155,x_0,y_843/v1554928552/shape/mentalfloss/540093-istock-514343279.jpg?itok=isS-TJcM"
        
    }    
    return problem
}
export const canvasToProblem= (imgData) => { 
    var prob = "This is table problem" 
    var problem = {questionText: prob,
        answerChoices: "no answers yet",
        correctAnswer: 'correct answer',
        img: imgData,
        // img:"https://images2.minutemediacdn.com/image/upload/c_crop,h_1778,w_3155,x_0,y_843/v1554928552/shape/mentalfloss/540093-istock-514343279.jpg?itok=isS-TJcM"
        
    } 
    return problem

}
export const tableTRYTHENCHAIN1228108 = () => {
    var imgData = "data:image/jpeg;base64,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"
    html2canvas(document.querySelector("#table-snap")).then(function(canvas) {
        // console.log('Finished')
        document.body.appendChild(canvas)
        imgData = canvas.toDataURL("image/png")

        console.log('This is imgData inside html2canvas inside table function'+imgData)
        return imgData
    }).then(imgData => canvasToProblem(imgData))
    // return canvasToProblem(imgData)

}






export async function table(Options){ //v5 tried chaining then? still have issue accessing problem 512281123
    var imgData = "data:image/jpeg;base64,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"
    var problem
    var hi= html2canvas(document.querySelector("#table-snap")).then(function(canvas) {
        // console.log('Finished')
        document.body.appendChild(canvas)
        imgData = canvas.toDataURL("image/png")

        // console.log('This is imgData inside html2canvas inside table function'+imgData) //imgData is correct URL
        return imgData
    }).then(imgData => {
        var prob = "This is table problem" 
        problem = {text: prob,
            answerChoices: ['answer', 'wrong','wrong','wrong', 'wrong2'],
            correctAnswer: 'correct answer',
            img: imgData,         
        }
        // console.log('this is inside 2nd then:'+ imgData)
        return problem
    })
    // const x = () => {
    //     return problem
    // }
    var result = await hi
    // console.log('After this is problem returned from await')
    // console.log(result)
    return result

}


export const table12281053= (Options) => { //v3 working but the imgData is not updating URL
    var imgData = "data:image/jpeg;base64,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"
    html2canvas(document.querySelector("#table-snap")).then(function(canvas) {
        // console.log('Finished')
        document.body.appendChild(canvas)
        imgData = canvas.toDataURL("image/png")

        console.log('This is imgData inisde html2canvas inside talbe function'+imgData)
    })
    var prob = "hello this is working" 
    var problem = {questionText: prob,
        answerChoices: "no answers yet",
        correctAnswer: 'correct answer',
        img: imgData,
        // img:"https://images2.minutemediacdn.com/image/upload/c_crop,h_1778,w_3155,x_0,y_843/v1554928552/shape/mentalfloss/540093-istock-514343279.jpg?itok=isS-TJcM"
        
    }    
    console.log('this is imgData at end of table function'+imgData)
    return problem
}








export const tablev2 = (Options) => {
    var imgData
    var canvas = () => {
        html2canvas(document.querySelector("#table-snap")).then(function(canvas) {
            // console.log('Finished')
            imgData = canvas.toDataURL()
            
            
        })
        return imgData
    }
    canvas()
    var prob = "hello this is working" 
    var problem = {questionText: prob,
        answerChoices: "no answers yet",
        correctAnswer: 'correct answer',
        img: imgData,
        // img:"https://images2.minutemediacdn.com/image/upload/c_crop,h_1778,w_3155,x_0,y_843/v1554928552/shape/mentalfloss/540093-istock-514343279.jpg?itok=isS-TJcM"
        
    }
    
    return problem
}
export const tablev1 = (Options) => {
    <div id="table-snap">
    <table>
      <tr>
        <td>This is a table</td>
        <td>Hello</td>
        <td>What</td>
      </tr>
      <tr>
        <td>Zoey</td>
        <td>David</td>
        <td>Melissa</td>

      </tr>
    </table>
  </div>
    // console.log(problem)
    // return <div><p>{problem} </p></div>
    var handleCanvas = () => {
        html2canvas(document.querySelector("#table-snap")).then(function(canvas) {
            // console.log('Finished')
            var imgData = canvas.toDataURL('image/png')
            var canvasImage =(<Image src={imgData}/>)
            // var imgDolphin = ;

            var dolphinImg = (<Image src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1778,w_3155,x_0,y_843/v1554928552/shape/mentalfloss/540093-istock-514343279.jpg?itok=isS-TJcM"/>);
          console.log("hi")
            image[0] = canvas
            // var prob0 = `This is a table problem what is the answer? tableimage:${image[0]}. 
            // Answer choices:  This is a table problem 2: tableImage: ${canvasImage}. Answer choices:`
            // var prob2 = `This is question stufffs and this is a pic: ${dolphinImg}`
            var prob = "hello this is working"
            console.log(prob)

            var problem = {questionText: prob,
                answerChoices: "no answers yet",
                correctAnswer: 'correct answer'}

            return problem
          //   document.body.appendChild(canvas);
          });
    }


    
return handleCanvas()
}
export const tablexx = (Options) => {
    <div id="table-snap">
    <table>
      <tr>
        <td>This is a table</td>
        <td>Hello</td>
        <td>What</td>
      </tr>
      <tr>
        <td>Zoey</td>
        <td>David</td>
        <td>Melissa</td>

      </tr>
    </table>
  </div>
    // console.log(problem)
    // return <div><p>{problem} </p></div>
    var handleCanvas = () => {
        html2canvas(document.querySelector("#table-snap")).then(function(canvas) {
            // console.log('Finished')
            var imgData = canvas.toDataURL('image/png')
            // var canvasImage =(<Image src={imgData}/>)
            // var imgDolphin = ;

            // var dolphinImg = (<Image src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1778,w_3155,x_0,y_843/v1554928552/shape/mentalfloss/540093-istock-514343279.jpg?itok=isS-TJcM"/>);
          console.log("hi")
            image[0] = canvas
            // var prob0 = `This is a table problem what is the answer? tableimage:${image[0]}. 
            // Answer choices:  This is a table problem 2: tableImage: ${canvasImage}. Answer choices:`
            // var prob2 = `This is question stufffs and this is a pic: ${dolphinImg}`
            var prob = "hello this is working"
            console.log(prob)

            var problem = {questionText: prob,
                answerChoices: "no answers yet",
                correctAnswer: 'correct answer'}

            return problem
          //   document.body.appendChild(canvas);
          });
    }


    
return handleCanvas()
}