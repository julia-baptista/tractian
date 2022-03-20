import React, { useEffect, useState, useContext } from 'react';
import InfoContext from '../context/infoContext';
import { Card } from 'antd';
import './Users.css';

function Users() {
  const { requestAllUnits, requestAllCompanies, requestAllUsers } = useContext(InfoContext);
  const [allUsers, setAllUsers] = useState([]);
  const [allUnits, setAllUnits] = useState([]);
  const [allCompanies, setAllCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState({
    email: '',
  });

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

  const handleChange = ({ target: { value, name } }) => {
    setEmail({
      [name]: value,
    });
  };

  return (
      <div className="container">
        <h1>Users</h1>
        <div className='users-form'>
          <form>
            <label>Filtre usuário pelo email: </label>
            <input
              type= 'text'
              name= 'email'
              value={email.email}
              onChange={handleChange}
              className="default-input"
            /> 
          </form>
        </div>
        <div>
          {
            !isLoading
            ? allUsers.filter((users) => users.email.toLowerCase().includes(email.email.toLocaleLowerCase()))
            .map((user, index) => {
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
