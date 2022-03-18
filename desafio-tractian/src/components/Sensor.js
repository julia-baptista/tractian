import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';

function Sensor({sensor}) {
  const { Meta } = Card;
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src={sensor.image} />}
    >
      <Meta title={sensor.name} />
    </Card>
  );
};

Sensor.propTypes = {
  sensor: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Sensor;