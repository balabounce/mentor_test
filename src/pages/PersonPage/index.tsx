import React, { FC, useState } from "react";
import { IPerson } from "../../components/PersonForm/types";
import PersonForm from "../../components/PersonForm";

const PersonPage: FC = () => {
  const [person, setPerson] = useState({
    name: 'Azim',
    sex: 'male',
    age: 24,
    occupation: 'Frontend Developer',
  });

  const handleUpdatePerson = (updatedPerson: IPerson) => {
    console.log(updatedPerson)
    setPerson(updatedPerson);
  };

  return (
    <>
      <h1>About me</h1>
      <PersonForm person={person} onUpdatePerson={handleUpdatePerson} /> 
    </>
  );

}; 

export default PersonPage;