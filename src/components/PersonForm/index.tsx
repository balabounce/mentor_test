import React, { FC, useState } from 'react';
import { IPerson } from './types';

interface IPersonFormProps {
  person: IPerson,
  onUpdatePerson: (p: IPerson) => void;
}

const PersonForm: FC<IPersonFormProps> = ({person, onUpdatePerson}) => {
  const [name, setName] = useState(person.name);
  const [sex, setSex] = useState(person.sex);
  const [age, setAge] = useState(person.age);
  const [occupation, setOccupation] = useState(person.occupation);
  
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangeSex = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSex(e.target.value);
  };

  const handleChangeAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof +e.target.value === 'number')
      setAge(+e.target.value);
  };

  const handleChangeOccupation = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOccupation(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    onUpdatePerson({
      name,
      sex,
      age,
      occupation
    })
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input type='text' value={name} onChange={handleChangeName}/>
          </label>
        </div>
        <div>
          <label>
            Sex:
            <input type='text' value={sex} onChange={handleChangeSex}/>
          </label>
        </div>
        <div>
          <label>
            Age:
            <input type='text' value={age} onChange={handleChangeAge}/>
          </label>
        </div>
        <div>
          <label>
            Occupation:
            <input type='text' value={occupation} onChange={handleChangeOccupation}/>
          </label>
        </div>
        <button type='submit'>Update</button>
      </form>
    </>
  )
};

export default PersonForm;