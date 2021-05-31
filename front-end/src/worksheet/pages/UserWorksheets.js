import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import WorksheetList from "../components/WorksheetList";

import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { AuthContext } from "../../shared/context/auth-context";

import { useHttpClient } from "../../shared/hooks/http-hook";
import './UserWorksheets.css'
import './CustomizeGeneral.css'

const UserWorksheets = (props) => {
  const auth = useContext(AuthContext);

  const [loadedWorksheets, setLoadedWorksheets] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    props.handleClearSelections()
    const fetchWorksheets = async () => {
      try {
        const responseData = await sendRequest(
          `/api/worksheets/${auth.userId}`
        );
        setLoadedWorksheets(responseData.worksheets);
      } catch (err) {}
    };
    fetchWorksheets();
  }, [sendRequest, auth.userId]);
  console.log('loadedworksheets', loadedWorksheets)
  const worksheetDeletedHandler = (deletedWorksheetId) => {
    setLoadedWorksheets((prevWorksheets) =>
      prevWorksheets.filter((worksheet) => worksheet.id !== deletedWorksheetId)
    );
  };
  // const loadedPlaces = DUMMY_PLACES.filter(place => place.creator===userId)
  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedWorksheets && (
        <div className="main-container userworksheets-container">
        <h3 className="userworksheets-title">My Worksheet Collection</h3>
        <WorksheetList
          items={loadedWorksheets}
          worksheetDeletedHandler={worksheetDeletedHandler}
          handleDuplicate={props.handleDuplicate}
 
        />
        </div>
      )}
    </React.Fragment>
  );
};

export default UserWorksheets;
