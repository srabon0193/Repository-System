import React from "react";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import "./NewPublication.css";



const NewPublication = () => {
  const [formState,inputHandler]=useForm( {
      inputs: {
        title: {
          value: "",
          isValid: false,
        },
        description: {
          value: "",
          isValid: false,
        },
      },
      isValid: false,
    },false);

  
  

  const publicationSubmitHandler = event =>{
    event.preventDefault();
    console.log(formState.inputs);//send this to the backend
  }

  return (
    <form className="place-form" onSubmit={publicationSubmitHandler}>
      <Input
        id="id"
        element="input"
        type="text"
        label="Id"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
      />
      <Input
        id="dept"
        element="input"
        type="text"
        label="Department"
        validators={[VALIDATOR_MINLENGTH(2)]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
      />
      <Input
        id="school"
        element="input"
        type="text"
        label="School Name"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
      />
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
      />
      <Input
        id="year"
        element="input"
        type="text"
        label="Year"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
      />
      <Input
        id="date"
        element="input"
        type="text"
        label="Pub Date"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
      />
      <Input
        id="author"
        element="input"
        type="text"
        label="Author"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
      />
      <Input
        id="journal"
        element="input"
        type="text"
        label="Journal"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
      />
      <Input
        id="volume"
        element="input"
        type="text"
        label="Volume"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
      />
      <Input
        id="page"
        element="input"
        type="text"
        label="Page"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
      />
      <Input
        id="issue"
        element="input"
        type="text"
        label="Issue"
        validators={[]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
      />
      <Input
        id="doi"
        element="input"
        type="text"
        label="DOI"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
      />
      <Input
        id="type"
        element="input"
        type="text"
        label="Publication Type"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
      />
      <Input
        id="scopus"
        element="input"
        type="text"
        label="Scopus Index"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
      />
      <Input
        id="wos"
        element="input"
        type="text"
        label="WOS Index"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
      />
      <Input
        id="ugc"
        element="input"
        type="text"
        label="UGC CARE-B"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
      />
      <Input
        id="crossref"
        element="input"
        type="text"
        label="Crossref Citation"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
      />
      <Input
        id="scopusCitation"
        element="input"
        type="text"
        label="Scopus Citation"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
      />
      <Input
        id="access"
        element="input"
        type="text"
        label="Access"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
      />

      <Button type="submit" disables={!formState.isValid}>
        ADD PUBLICATION
      </Button>
    </form>
  );
};

export default NewPublication;
