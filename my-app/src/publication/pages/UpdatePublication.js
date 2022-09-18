import React from "react";
import { useParams } from "react-router-dom";

import './NewPublication.css';
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";

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
        creator: 'S1'
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
];

const UpdatePublication =() => {
    const publicationId=useParams().publicationId;

    const identifiedPublication=DUMMY.find(p=>p.id === publicationId);
    
    const [formState,inputHandler]=useForm({
        dept: {
            value:identifiedPublication.dept,
            isValid:true
        },
        title: {
            value:identifiedPublication.title,
            isValid:true
        },
        author: {
            value:identifiedPublication.author,
            isValid:true
        }
    },true);

    const PublicationUpdteSubmit=event =>{
        event.preventDefault();
        console.log(formState.inputs);
    };

    if(!identifiedPublication) {
        return (
            <div className="center">
                <h2>Could not find place!</h2>
            </div>
        );
    }
    return  (
    <form className="place-form" onSubmit={PublicationUpdteSubmit}>
        <Input
        id="dept"
        element="input"
        type="text"
        label="Department"
        validators={[VALIDATOR_MINLENGTH(2)]}
        errorText="Please enter a valid department."
        onInput={inputHandler}
        initialValue={formState.inputs.dept.value}
        initialValid={formState.inputs.dept.isValid}
      />
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="author"
        element="input"
        type="text"
        label="Author"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid author."
        onInput={inputHandler}
        initialValue={formState.inputs.author.value}
        initialValid={formState.inputs.author.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>UPDATE</Button>
    </form>
    )
};

export default UpdatePublication;