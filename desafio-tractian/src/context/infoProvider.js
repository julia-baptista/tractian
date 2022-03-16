import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import InfoContext from './infoContext';

function InfoProvider({ children }) {
  

  const contextValues = {
 
  };

  return (
  // diponibiliza os estados e funcoes para o context
  //  ira englobar toda aplicaçao e fornecer esses estados e funcoes
    <InfoContext.Provider value={ contextValues }>
      { children }
    </InfoContext.Provider>
  );
}

export default InfoProvider;

InfoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};