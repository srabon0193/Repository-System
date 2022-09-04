import React from "react";


import Card from "../../shared/components/UIElements/Card";
import './PublicationItem.css';

const PublicationItem = (props) => {
  return (
    <li className="place-item">
      <Card className="place-item__content">
        <div className="place-item__info">
          
        </div>
        <div className="place-item__actions">
            <button>EDIT</button>
            <button>DELETE</button>
        </div>
      </Card>
    </li>
  );
};

export default PublicationItem;