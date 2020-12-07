import './App.css';
// import PropTypes from 'prop-types';
import React, { 
  // Component
 } from 'react';
import { Page, 
  // Text, 
  // View, 
  Document, 
  // StyleSheet, 
  // PDFViewer 
}

   from '@react-pdf/renderer';
// import cw from './App.js'



class CreateWorksheet extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
      return (
        <div>
        {this.props.displayQuestionList ? 
          <Document>
          <Page>
          {this.props.cw[0]}
          </Page>

          <Page>
          {this.props.cw[1]}
          </Page>
        </Document>
        :null}
        </div>
      )
  }
}

// function Problems() {
//   return (
//     <div className="App">
//     <p>7 + 2</p>

//     </div>
//   );
// }


export default CreateWorksheet;