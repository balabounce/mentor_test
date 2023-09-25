import { FC, Suspense, lazy, memo, useState } from "react";
import { IPerson } from "../../components/PersonForm/types";

const PersonPage: FC = () => {
  const [person, setPerson] = useState({
    name: 'Azim',
    sex: 'male',
    age: 24,
    occupation: 'Frontend Developer',
  });
  const PersonForm = lazy(() => import('../../components/PersonForm'));

  const handleUpdatePerson = (updatedPerson: IPerson) => {
    setPerson(updatedPerson);
  };
  
  return (
    <>
      <h1>About me</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <PersonForm person={person} onUpdatePerson={handleUpdatePerson}/>
      </Suspense>
    </>
  );

}; 

export default memo(PersonPage);