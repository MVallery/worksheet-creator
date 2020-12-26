import {
    Page,
    Text,
    View,
    Image,
    Document,
    StyleSheet,
    // PDFViewer,
    // ReactPDF,
    PDFDownloadLink,
  } from "@react-pdf/renderer";
import html2canvas from 'html2canvas';

var image = []
export const table1 = (Options) => {
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
}
export const table = (Options) => {
    var dolphinImg = <Image src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1778,w_3155,x_0,y_843/v1554928552/shape/mentalfloss/540093-istock-514343279.jpg?itok=isS-TJcM"/>;
    var probTextOnly = <Text>Hello this is react-pdf text from table</Text> //type mismatch
    var prob1 = `This is question stufffs and this is a pic: ${dolphinImg}` //shows up as [object:object]
    var prob2 = (<Text>This is question stufffs and this is a pic: <Image src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1778,w_3155,x_0,y_843/v1554928552/shape/mentalfloss/540093-istock-514343279.jpg?itok=isS-TJcM"/>answer choices</Text>)// error mismatch type append child? 
    var prob = "hello this is working" //now this also gives type mismatch?

    var problem = {questionText: prob,
        answerChoices: "no answers yet",
        correctAnswer: 'correct answer',
        img:"https://images2.minutemediacdn.com/image/upload/c_crop,h_1778,w_3155,x_0,y_843/v1554928552/shape/mentalfloss/540093-istock-514343279.jpg?itok=isS-TJcM",
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
            var prob0 = `This is a table problem what is the answer? tableimage:${image[0]}. 
            Answer choices:  This is a table problem 2: tableImage: ${canvasImage}. Answer choices:`
            var prob2 = `This is question stufffs and this is a pic: ${dolphinImg}`
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