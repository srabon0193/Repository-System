import React from "react";

import PublicationList from "../components/PublicationList";

const DUMMY= [
    {
        id: 'p1',
        dept: 'Computer Science & Engineering',
        school: 'SOET',
        title: 'Practical spirituality and human development: Transformations in religions and societies',
        year: '2018',
        date: '1/1/2018',
        author: 'Giri A.',
        journal: 'Practical Spirituality and Human Development: Transformations in Religions and Societies',
        volume: ' ',
        page: '1-483',
        issue: ' ',
        doi: '10.1007/978-981-13-0803-1',
        type: 'Book',
        scopus: 'Y',
        wos: 'N',
        ugc: 'N',
        crossref: '2',
        scopusCitation: '1',
        access: '0',
        creator: 's1'
    }
]
const UserPublications = () => {
    return <PublicationList items={DUMMY} />
};

export default UserPublications;