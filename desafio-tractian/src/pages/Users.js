import React, { useEffect, useState, useContext } from 'react';
import InfoContext from '../context/infoContext';
import { Card } from 'antd';

function Users() {
  const { requestAllUnits, requestAllCompanies, requestAllUsers } = useContext(InfoContext);
  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setfilteredUsers] = useState([]);
  const [allUnits, setAllUnits] = useState([]);
  const [allCompanies, setAllCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=> {
    const response = async () => {
      setAllUsers(await requestAllUsers());
    };
    response();
  }, [requestAllUsers]);

  useEffect(()=> {
    const response = async () => {
      setAllUnits(await requestAllUnits());
    };
    response();
  }, [requestAllUnits]);

  useEffect(()=> {
    const response = async () => {
      setAllCompanies(await requestAllCompanies());
    };
    response();
  }, [requestAllCompanies]);

  useEffect(()=> {
    if(allUsers.length >=1 && allUnits.length >=1 && allCompanies.length >=1 ) {
      setIsLoading(false);
    }
  }, [allUsers, allUnits, allCompanies]);

  

  return (
      <div className="container">
        <h1>Users</h1>
        <div>
          <form>
            <label></label>
            <input/>
          </form>
        </div>
        <div>
          {
            !isLoading
            ? allUsers.map((user, index) => {
              const unit = allUnits.find((item) => (item.id ===  user.unitId));
              let company = allCompanies.find(item => item.id ===  user.companyId);
              return <Card title={user.name} style={{ width: 300 }} key={ index } className="mb-30">
                <p>{`E-mail: ${user.email}`}</p>
                <p>{`Unidade: ${unit.name}`}</p>
                <p>{`Empresa: ${company.name}`}</p>
            </Card>
            })
            : <p>Carregando ...</p>
          }
        </div>
      </div>
  )
}

export default Users;
