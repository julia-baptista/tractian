import React from 'react';
import { Form, Input, Button } from 'antd';


function ResponsibleForm() {

  const onFinish = (e) => {
    console.log(e);  
  }

  return (
    <Form onFinish={onFinish}>
      <Form.Item label="Insir o nome de um presponsável" name="responsible">
        <Input required></Input>
      </Form.Item>
      <Form.Item>
        <Button type='primay' htmlType='submit'>Adicionar</Button>
      </Form.Item>
    </Form>
  );
}

export default ResponsibleForm;