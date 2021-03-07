import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WorksheetList from "../components/WorksheetList";

import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

import { useHttpClient } from "../../shared/hooks/http-hook";

const UserWorksheets = () => {
  const userId = useParams().userId;
  const [loadedWorksheets, setLoadedWorksheets] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchWorksheets = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/worksheets/${userId}`
        );
        setLoadedWorksheets(responseData.worksheets);
      } catch (err) {}
    };
    fetchWorksheets();
  }, [sendRequest, userId]);
  console.log(loadedWorksheets);
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
        <WorksheetList
          items={loadedWorksheets}
          onDeleteWorksheet={worksheetDeletedHandler}
        />
      )}
    </React.Fragment>
  );
};

export default UserWorksheets;
