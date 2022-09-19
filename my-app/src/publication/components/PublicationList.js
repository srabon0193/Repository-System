import React from "react";

import Card from '../../shared/components/UIElements/Card'
import PublicationItem from "./PublicationItem";
import Button from "../../shared/components/FormElements/Button";
import './PublicationList.css';

const PublicationList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="publicaiton-list center text-white">
        <Card>
          <h2>No publications found. Maybe create one?</h2>
          <Button to="/publications/new">Share Publication</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {props.items.map((publication) => (
        <PublicationItem
          key={publication.id}
          id={publication.id}
          dept={publication.dept}
          school={publication.school}
          title={publication.title}
          year={publication.year}
          date={publication.date}
          author={publication.author}
          journal={publication.journal}
          volume={publication.volume}
          page={publication.page}
          issue={publication.issue}
          doi={publication.doi}
          type={publication.type}
          scopus={publication.scopus}
          wos={publication.wos}
          ugc={publication.ugc}
          crossref={publication.crossref}
          scopusCitation={publication.scopusCitation}
          access={publication.access}
          creatorId={publication.creator}
        />
      ))}
    </ul>
  );
};

export default PublicationList;