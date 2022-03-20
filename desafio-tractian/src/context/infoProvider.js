import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import InfoContext from './infoContext';

function InfoProvider({ children }) {
  const [allSensors, setAllSensors] = useState([]);
  // const [currentSensor, setCurrentSensor] = useState({});

  const REQUEST_FAILED = 'Falha na requisiçao';
  
  // Acessar todos os ativos
    const requestAllSensors = async () => {
      const request = await axios
        .get('https://my-json-server.typicode.com/tractian/fake-api/assets')
        .then((res) => res.data)
        .catch((err) => err.response);
  
      if (!request) return REQUEST_FAILED;
      setAllSensors(request);
      return request;
    };

  // Acessar ativo pelo id
  const requestSingleSensor = async (id) => {
    const request = await axios
      .get(`https://my-json-server.typicode.com/tractian/fake-api/assets/${id}`)
      .then((res) => res.data)
      .catch((err) => err.response);

    if (!request) return REQUEST_FAILED;
    return request;
  };

  // Acessar todas as Unidades
  const requestAllUnits = async () => {
    const request = await axios
      .get('https://my-json-server.typicode.com/tractian/fake-api/units')
      .then((res) => res.data)
      .catch((err) => err.response);

    if (!request) return REQUEST_FAILED;
    return request;
  };

  // Acessar as Unidades pelo id
  const requestUnitById = async (id) => {
    const request = await axios
      .get(`https://my-json-server.typicode.com/tractian/fake-api/units/${id}`)
      .then((res) => res.data)
      .catch((err) => err.response);

    if (!request) return REQUEST_FAILED;
    return request;
  };

  // Acessar todas as Empresas
  const requestAllCompanies = async () => {
    const request = await axios
      .get('https://my-json-server.typicode.com/tractian/fake-api/companies')
      .then((res) => res.data)
      .catch((err) => err.response);

    if (!request) return REQUEST_FAILED;
    return request;
  };

  // Acessar Empresa pelo id
  const requestCompanyById = async (id) => {
    const request = await axios
      .get(`https://my-json-server.typicode.com/tractian/fake-api/companies/${id}`)
      .then((res) => res.data)
      .catch((err) => err.response);

    if (!request) return REQUEST_FAILED;
    return request;
  }

  // Acessar todos os usuários
  const requestAllUsers = async () => {
    const request = await axios
      .get('https://my-json-server.typicode.com/tractian/fake-api/users')
      .then((res) => res.data)
      .catch((err) => err.response);

    if (!request) return REQUEST_FAILED;
    return request;
  };


  const contextValues = {
    allSensors,
    requestAllSensors,
    requestSingleSensor,
    requestAllUnits,
    requestUnitById,
    requestAllCompanies,
    requestCompanyById,
    requestAllUsers,
  };

  return (
  // diponibiliza os estados e funcoes para o context
  //  ira englobar toda aplicaçao e fornecer esses estados e funcoes
    <InfoContext.Provider value={ contextValues }>
      { children }
    </InfoContext.Provider>
  );
}

InfoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InfoProvider;