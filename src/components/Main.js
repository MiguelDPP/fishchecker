import React, { useEffect, useRef, useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import styles from '@styles/Form.module.css';
import { useData } from 'hooks/useData';
import { useRouter } from 'next/router';

const Main = () => {
  const route = useRouter();
  const dataIni = useRef(null);
  const [alert, setAlert] = useState({});
  const { data, calculateData } = useData();

  useEffect(() => {
    if (alert.active) {
      setTimeout(() => {
        setAlert({});
      }, 3000);
    }
  }, [alert]);

  const handleClick = () => {
    const formData = new FormData(dataIni.current);
    let messages = [];
    if (formData.get('fishes') == '') {
      messages.push('Debe ingresar la cantidad de peces');
    }else if (formData.get('fishes') < 0) {
      messages.push('La cantidad de peces debe ser mayor a 0');
    }
    if (formData.get('weeks') == '') {
      messages.push('Debe ingresar la cantidad de semanas');
    }else if (formData.get('weeks') < 0) {
      messages.push('La cantidad de semanas debe ser mayor a 0');
    }
    if (formData.get('fishType') == 1 && formData.get('weeks') > 30) {
      messages.push('La cantidad de semanas debe ser menor a 30');
    }else if (formData.get('fishType') == 2 && formData.get('weeks') > 27) {
      messages.push('La cantidad de semanas debe ser menor a 27');
    }
    if (formData.get('temperature') == '') {
      messages.push('Debe ingresar la temperatura');
    }else if (formData.get('temperature') < 0) {
      messages.push('La temperatura debe ser mayor a 0');
    }

    if (messages.length > 0) {
      setAlert({
        'active': true,
        'type': 'danger',
        'messages': messages,
      });
    }else {
      setAlert({
        'active': false,
        'type': '',
        'messages': [],
      });

      // console.log(data);
      console.log(calculateData(formData.get('fishes'), formData.get('weeks'), formData.get('temperature'), formData.get('fishType')));
    
      route.push('/result');
    }

  }


  return (
    <div className={styles.container}>
      <h3>Simulador para peces</h3>
      <Form className={styles.form} ref={dataIni}>
        <Row className={styles.row}>
          <Col xs={7}>
            <Form.Label  className={styles.label}>Cantidad de peces</Form.Label>
          </Col>
          <Col>
            <Form.Control name='fishes' className={styles.control} type='number' />
          </Col>
        </Row>
        <Row className={styles.row}>
          <Col xs={7}>
            <Form.Label className={styles.label}>Tiempo (Semana)</Form.Label>
          </Col>
          <Col>
            <Form.Control name='weeks' className={styles.control} type='number' />
          </Col>
        </Row>
        <Row className={styles.row}>
          <Col xs={7}>
            <Form.Label className={styles.label}>Temperatura (°)</Form.Label>
          </Col>
          <Col>
            <Form.Control name='temperature' className={styles.control} type='number' />
          </Col>
        </Row>
        <Row className={styles.row}>
          <Col xs={7}>
            <Form.Label className={styles.label}>Tipo de pez</Form.Label>
          </Col>
          <Col>
            <Form.Select className={styles.control} name='fishType'>
              <option value='1'>Mojarra</option>
              <option value='2'>Cachama blanca</option>
            </Form.Select>
          </Col>
        </Row>
        <Button className={styles.button} variant='primary'
          onClick={handleClick}
        >
          Calcular
        </Button>
        <Row className={`${styles.row} mt-4`}>
          <Col>
          { alert.active && (
          <div className={`alert alert-${alert.type}`} role='alert'>
            {alert.messages.map((message, index) => (
              <p key={index}>{message}</p>
            ))}
          </div>
        )}
        </Col>
        </Row>
      </Form>
    </div>
  )
}

export default Main