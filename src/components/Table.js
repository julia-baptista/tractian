import React, {useEffect, useState, useContext} from 'react';
import InfoContext from '../context/infoContext';
import PropTypes from 'prop-types';

const status = {
  inAlert: 'Em Alerta',
  inOperation: 'Em Operação',
  inDowntime: 'Em Parada',
}

function Table({sensor}) {
  const { requestUnitById, requestCompanyById } = useContext(InfoContext);
  const [currentUnit, setCurrentUnit] = useState({});
  const [currentCompany, setCurrentCompany] = useState({});
  
  // Selecionar unidade
  useEffect(() => {
    const response = async () => {
      setCurrentUnit(await requestUnitById(sensor.unitId));
    };
    response();
  },[requestUnitById, sensor.unitId]);

  // Selecionar empresa
  useEffect(() => {
    const response = async () => {
      setCurrentCompany(await requestCompanyById(sensor.companyId));
    };
    response();
  },[requestCompanyById, sensor.companyId]);

  return (
    <div className="ml-05">
      <table>
        <tbody>
          <tr>
            <td>Status:</td>
            <td>{status[`${sensor.status}`]}</td>
          </tr>
          <tr>
            <td>Saúde:</td>
            <td>{`${sensor.healthscore} %`}</td>
          </tr>
          <tr>
            <td>Especificações:</td>
            <td>
              <table>
                <tbody>
                  { 
                  sensor.specifications.maxTemp
                  ? <tr><td>Temperatura Máxima:</td><td className="pl-05 w-100">{` ${sensor.specifications.maxTemp} `} &#8451;</td></tr>
                  : null
                  }
                  { 
                  sensor.specifications.power
                  ? <tr><td>Potência </td><td className="pl-05 w-100">{` ${sensor.specifications.power} kWh`}</td></tr>
                  : null
                  }
                  { 
                  sensor.specifications.rpm
                  ? <tr><td>RPM:</td><td className="pl-05 w-100">{` ${sensor.specifications.rpm}`}</td></tr>
                  : null
                  }
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td>Métricas:</td>
            <td>
            <table>
              <tbody>
                { 
                sensor.metrics.totalCollectsUptime
                ? <tr><td>Total de Coletas Uptime (Ligada):</td><td className="pl-05">{` ${sensor.metrics.totalCollectsUptime}`}</td></tr>
                : null
                }
                { 
                sensor.metrics.totalUptime
                ? <tr><td>Total de Horas de Coletas Uptime (Ligada):</td><td className="pl-05">{` ${sensor.metrics.totalUptime}`}</td></tr>
                : null
                }
                { 
                sensor.metrics.lastUptimeAt
                ? <tr><td>Data da Ultima Coleta Uptime (Ligada):</td><td className="pl-05">{` ${sensor.metrics.lastUptimeAt}`}</td></tr>
                : null
                }
              </tbody>
            </table>
            </td>
          </tr>
          <tr>
            <td>Unidade:</td>
            { 
                currentUnit
                ? <td>{currentUnit.name}</td>
                : null
            }
          </tr>
          <tr>
            <td>Empresa:</td>
            { 
                currentCompany
                ? <td>{currentCompany.name}</td>
                : null
            }
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  sensor: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Table;
