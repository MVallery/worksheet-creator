// const handlePDF2 = () => {
//     const pdf = new jsPDF();
//     pdf.fromHTML(handleDisplayWorksheet());
//     pdf.save('pdf')
//   }

    // const handlePDFPdf = () => {
  //   <Pdf targetRef={ref} filename={docTitle}>
  //     {({toPdf}) => <button onClick={toPdf}>Generate PDF</button>}
  //   </Pdf>
  // }

//   const handleCanvas = () => {
//     html2canvas(document.querySelector("#table-snap")).then(function(canvas) {
//       // console.log('Finished')
//       document.body.appendChild(canvas);
//     });
//   }
//   const handleDisplayWorksheet = () => { //for displaying onto the screen
//     return ( //// div had: ref={ref}
//       <div > 
//       <div className="name-title">
//         <p>Name:_________________________________________________ Date_________________</p>
//         <p>{docTitle}</p>
//         <p className="worksheet">
//           {createWorksheet[0]}
//         </p>
//       </div>
//       <div className="answer-key">
//         <p>Answer Key:</p>
//         <p> {createWorksheet[1]}</p>
//       </div>
//       </div>    
//     )
    
//   }

//   const handlePrintWorksheet = () => {
//     {window.print()}
//   }


{/* <button type="button" onClick={handlePDF}>
Display PDF
</button>
<button type="button" onClick={handlePrintWorksheet}>
Print Worksheet
</button>
<button type="button" onClick={handleCanvas}>
Table to Img
</button> */}

        {/* <Pdf targetRef={ref} filename={docTitle}>
      {({toPdf}) => <button onClick={toPdf}>Generate PDF</button>}
    </Pdf> */}


    {/* 
        <label for="quantity">Quantity:</label>

        <input
          type="number"
          id="quantity"
          onChange={handleInputQuantity}
          value={quantityState}
          name="quantity"
          min="1"
          max="50"
        /> */}

        {/* <label htmlFor="level">Difficulty:</label>
        <input
          type="number"
          id="level"
          value={levelState}
          onChange={handleInputLevel}
          name="level"
          min="1"
          max="3"
        /> */}
        {/* <label htmlFor="order">Mix up the questions:</label>
        <input 
                  type="checkbox"  
                  id="order"
                  onChange={()=> handleOrder()}
                  value={order}/> */}
        {/* <label htmlFor="docStyle">Columns:</label>
        <input 
                  type="checkbox"  
                  id="docStyle"
                  onChange={()=> handleDocStyle()}
                  value={docStyle}/> */}

                //   <div id="table-snap">
                //   <table>
                //     <tr>
                //       <td>This is a table</td>
                //       <td>Hello</td>
                //       <td>What</td>
                //     </tr>
                //     <tr>
                //       <td>Zoey</td>
                //       <td>David</td>
                //       <td>Melissa</td>
              
                //     </tr>
                //   </table>
                // </div>

                // html2canvas(document.getElementsByClassName("table-snap")).then(function(canvas) {
//   document.body.appendChild(canvas);
// });
// html2canvas(document.querySelector('#table-snap')).then(function(canvas) {
//   document.body.appendChild(canvas);
// });

  // const [order, setOrder] = useState('order');
  // const [quantityState, setQuantityState] = useState("");
  // const [levelState, setLevelState] = useState("");
  // const [conceptState, setConceptState] = useState("");
  // const [specifyState, setSpecifyState] = useState('');
  // const [docTitle, setDocTitle] = useState("");
  // const [docStyle, setDocStyle] = useState('');

    // const handleAddConceptOLD = (e) => {
  //   e.preventDefault();
  //   var tempList = JSON.parse(JSON.stringify(userSelection));

  //   var conceptSelection = {
  //     concept: conceptState,
  //     level: levelState,
  //     docTitle: docTitle,
  //     quantity: quantityState,
  //     specify: specifyState,
  //     isChecked: false,
  //     order: order,
  //     docStyle:docStyle,
  //   };
  //   tempList.push(conceptSelection);
  //   setLevelState("")
  //   setQuantityState("")
  //   setConceptState("")
  //   setUserSelection(tempList);

  // };
  
//   const handleSelectOLD = () => { //changes all of them when one is changed but with (index) it wasn't working
//     let temp = JSON.parse(JSON.stringify(userSelection));
//     for (var i=0; i <temp.length; i++){
//       temp[i].isChecked = !temp[i].isChecked;
//     }
//     console.log(userSelection)
//     setUserSelection(temp)
//   }
  // const handleOrder = (i) => {
  //   setOrder('mixed')
  // }
  // const handleDocStyle = () => { //change later to handle many options
  //   setDocStyle('column')
  // }