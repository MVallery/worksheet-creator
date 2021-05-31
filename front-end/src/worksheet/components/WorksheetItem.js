import React, { useState, useContext } from "react";
import { useHttpClient } from "../../shared/hooks/http-hook";

import { AuthContext } from "../../shared/context/auth-context";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import WorksheetData from "./WorksheetData";

import './WorksheetItem.css'
const WorksheetItem = (props) => {
  const auth = useContext(AuthContext);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const showDeleteWarningHandler = () => setShowConfirmModal(true);
  const cancelDeleteHandler = () => setShowConfirmModal(false);
  const confirmDeleteHandler = async () => {
    setShowConfirmModal(false);
    try {
      props.worksheetDeletedHandler(props.id);

      // const history = useHistory();
      await sendRequest(
        `/api/worksheets/${props.id}`,
        "DELETE",
        null,
        { Authorization: "Bearer " + auth.token }
      );

      // history.push('/');
    } catch (err) {
      console.log('Could not delete worksheet')
    }
  };



  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header="Are you sure?"
        footerClass="worksheet-item__modal-actions"
        footer={
          <React.Fragment>
            <Button inverse onClick={cancelDeleteHandler}>
              CANCEL
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              DELETE
            </Button>
          </React.Fragment>
        }
      >
        <p>
          Do you want to proceed and delete this worksheet? Please note that it
          can't be undone.
        </p>
      </Modal>
      <li className="worksheet-item">
        <Card className="worksheet-item__content">
          {isLoading && <LoadingSpinner asOverlay />}
          <div className="worksheet-item__info">
            <WorksheetData
              key={props.key}
              userSelection={props.userSelection}
              generalSelection={props.generalSelection}
              // title={props.title}
              // docStyle={props.docStyle}
              creatorId={props.creatorId}
              created={props.created}
              handleDuplicate={props.handleDuplicate}
              questAnswerList={props.questAnswerList}
              showDeleteWarningHandler={showDeleteWarningHandler}

            />
          </div>

        </Card>
      </li>
    </React.Fragment>
  );
};

export default WorksheetItem;