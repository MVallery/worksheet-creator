import React, { useState, useContext } from "react";
import { useHttpClient } from "../../shared/hooks/http-hook";

import { AuthContext } from "../../shared/context/auth-context";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import WorksheetData from "./WorksheetData";

const WorksheetItem = (props) => {
  const auth = useContext(AuthContext);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  // const placeId = useParams().placeId;
  // console.log(placeId)
  console.log(props.id);
  const showDeleteWarningHandler = () => setShowConfirmModal(true);
  const cancelDeleteHandler = () => setShowConfirmModal(false);
  const confirmDeleteHandler = async () => {
    setShowConfirmModal(false);
    try {
      // const history = useHistory();
      await sendRequest(
        `http://localhost:5000/worksheets/${props.id}`,
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
        footerClass="place-item__modal-actions"
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
      <li className="place-item">
        <Card className="place-item__content">
          {isLoading && <LoadingSpinner asOverlay />}
          <div className="place-item__info">
            <WorksheetData
              userSelection={props.userSelection}
              title={props.title}
              docStyle={props.docStyle}
              creatorId={props.creatorId}
            />
          </div>
          <div className="place-item__actions">
            {auth.userId === props.creatorId && (
              <Button to={`/worksheets/${props.id}`}>EDIT</Button>
            )}
                        {auth.userId === props.creatorId && (
              <Button to={`/worksheets/${props.id}`}>MAKE ANOTHER</Button>
            )}
            {auth.userId === props.creatorId && (
              <Button danger onClick={showDeleteWarningHandler}>
                DELETE
              </Button>
            )}
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default WorksheetItem;