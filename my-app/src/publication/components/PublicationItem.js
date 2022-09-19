import React, { useState, useContext } from "react";

import Table from "react-bootstrap/Table";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import { AuthContext } from "../../shared/context/auth-context";
import "./PublicationItem.css";

const PublicationItem = (props) => {
  const auth = useContext(AuthContext);

  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };

  const confirmDeleteHandler = () => {
    setShowConfirmModal(false);
    console.log("DELETING...");
  };
  return (
    <React.Fragment>
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
          Do you want to proceed and delete this publication? Please note that
          it can't be undone thereafter.
        </p>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__info">
            <Table bordered hover variant="dark">
              <thead>
                <tr className="table_row text-center">
                  <th>ID</th>
                  <th>Department</th>
                  <th>School Name</th>
                  <th>Title</th>
                  <th>Year</th>
                  <th>Pub. Date</th>
                  <th>Author(s)</th>
                  <th>Journal</th>
                  <th>Volume</th>
                  <th>Pages</th>
                  <th>Issue</th>
                  <th>Publication Type</th>
                  <th>Scopus Indexed</th>
                  <th>WOS Indexed</th>
                  <th>UGC CARE-B</th>
                  <th>Crossref Citation</th>
                  <th>Scopus Citation</th>
                  <th>Access</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{props.id}</td>
                  <td>{props.dept}</td>
                  <td>{props.school}</td>
                  <td>{props.title}</td>
                  <td>{props.year}</td>
                  <td>{props.date}</td>
                  <td>{props.author}</td>
                  <td>{props.journal}</td>
                  <td>{props.volume}</td>
                  <td>{props.page}</td>
                  <td>{props.issue}</td>
                  <td>{props.doi}</td>
                  <td>{props.type}</td>
                  <td>{props.scopus}</td>
                  <td>{props.wos}</td>
                  <td>{props.ugc}</td>
                  <td>{props.crossref}</td>
                  <td>{props.access}</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="place-item__actions">
            {auth.isLoggedIn && (
              <Button to={`/publications/${props.id}`}>EDIT</Button>
            )}
            {auth.isLoggedIn && (
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

export default PublicationItem;
