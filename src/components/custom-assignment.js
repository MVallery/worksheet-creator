import {
    Page,
    Text,
    // View,
    Document,
    StyleSheet,
    PDFViewer,
    // ReactPDF,
    PDFDownloadLink,
  } from "@react-pdf/renderer";
  import {Router, Route, Link, Switch } from "react-router-dom";

const CustomAssignment = (props) => {
    return (
        <div>
            <div>
            <Link to="/concept-selection">
                <button
                onClick= {props.handleClearSelections}>
                    Make another assignment
                    
                </button>
            </Link>
            </div>


        {/* <PDFDownloadLink document={()=>props.handlePDF()} fileName={props.userSelection[0].docTitle}>
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
        </PDFDownloadLink>
        <PDFViewer className= {props.userSelection[0].docTitle} children={()=>props.handlePDF()} width= {1000} height= {1500}>
        </PDFViewer>  */}
        
      </div>
    )
}

export default CustomAssignment