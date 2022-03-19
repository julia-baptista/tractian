import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';

function Sensor({sensor}) {
  const { Meta } = Card;
  return (
    <div className='mb-30'>
    <Card
      hoverable
      style={{ width: 240}}
      cover={<img alt="example" src={sensor.image} height="179"/>}
    >
      <Meta title={sensor.name} />
    </Card>
    </div>
  );
};

Sensor.propTypes = {
  sensor: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Sensor;