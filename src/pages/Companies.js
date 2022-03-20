import React, { useEffect, useState, useContext } from 'react';
import InfoContext from '../context/infoContext';
import './Companies.css';

function Companies() {
  const { requestAllCompanies } = useContext(InfoContext);
  const [allCompanies, setAllCompanies] = useState([]);
  const [companyName, setCompanyName] = useState({
    name: "",
  });

useEffect(()=> {
  const response = async () => {
    setAllCompanies(await requestAllCompanies());
  };
  response();
}, [requestAllCompanies]);

const handleChange = ({ target: { value, name } }) => {
  setCompanyName({
    [name]: value,
  });
};

const onSubmit = (event) => {
  event.preventDefault();
  const length = allCompanies.length;
  const id = allCompanies[length -1].id + 1

  const newCompany = {
    id,
    name: companyName.name
  }

  setAllCompanies((prev) => ([
    ...prev, newCompany
  ]));

  setCompanyName({
    name: ""
  });
}

  return(
      <div className="container">
        <h1>Companies</h1>
        <div>
          <ul>
            {
              allCompanies
              ? allCompanies.map((company, index) => (
              <li key={ index }>
                <span className="p-05">{`Empresa : ${company.name}`}</span>
                <span className="p-05">{` Id: ${company.id}`}</span>
              </li>))
              : null
            }
          </ul>
        </div>
        <div className="company-form-container">
        <form onSubmit={onSubmit} className="company-form">
          <label htmlFor='name' className='mr-20'>Adicionar empresa:</label>
          <input
            type= 'text'
            name= 'name'
            value={companyName.name}
            onChange={handleChange}
            className="default-input"
          />     
          <input type='submit' value='Adicionar'/>
        </form>
        </div>
      </div>
  )
}

export default Companies;
