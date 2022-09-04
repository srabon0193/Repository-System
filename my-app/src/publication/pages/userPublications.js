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
    },

    {
        id: 'p2',
        dept: 'Computer Science & Engineering',
        school: 'SOET',
        title: 'Sparse encoding algorithm for real-time ECG compression',
        year: '2019',
        date: '1/1/2019',
        author: 'Roy R.B.;Roy A.;Mukherjee A.;Ghosh A.;Bhattacharyya S.;Naskar M.K.',
        journal: 'Advances in Intelligent Systems and Computing',
        volume: '727',
        page: '31-38',
        issue: ' ',
        doi: '10.1007/978-981-10-8863-6_4',
        type: 'Conference Paper',
        scopus: 'Y',
        wos: 'N',
        ugc: 'N',
        crossref: '5',
        scopusCitation: '7',
        access: '4',
        creator: 'S2'
    }
]
const UserPublications = () => {
    return <PublicationList items={DUMMY} />
};

export default UserPublications;