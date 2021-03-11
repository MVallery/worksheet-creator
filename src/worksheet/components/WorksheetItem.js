import React, { useState, useContext } from "react";
import { useHttpClient } from "../../shared/hooks/http-hook";

import { AuthContext } from "../../shared/context/auth-context";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import WorksheetData from "./WorksheetData";

// import './WorksheetItem.css'
const WorksheetItem = (props) => {
  const auth = useContext(AuthContext);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  console.log(props.id);
  const showDeleteWarningHandler = () => setShowConfirmModal(true);
  const cancelDeleteHandler = () => setShowConfirmModal(false);
  const confirmDeleteHandler = async () => {
    setShowConfirmModal(false);
    try {
      // const history = useHistory();
      await sendRequest(
        `http://localhost:5000/api/worksheets/${props.id}`,
        "DELETE",
        null,
        { Authorization: "Bearer " + auth.token }
      );
      props.onDelete(props.id);
      // history.push('/');
    } catch (err) {}
  };

  console.log(props.userSelection);
  console.log(props.docStyle);
  console.log(props.creatorId);

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
              userSelection={props.userSelection}
              title={props.title}
              docStyle={props.docStyle}
              creatorId={props.creatorId}
              createdAt={props.createdAt}
            />
          </div>

        </Card>
      </li>
    </React.Fragment>
  );
};

export default WorksheetItem;