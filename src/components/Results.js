import React, { useEffect } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import styles from '@styles/Form.module.css';
import { useData } from 'hooks/useData';
import { useRouter } from 'next/router';

const Results = () => {
  const route = useRouter();
  const { data } = useData();
  useEffect(() => {
    console.log(data);
    if (data == null) {
      route.push('/');
    }
  }, [data]);
  return (
    <div className={styles.container}>
      <h3>Resultados</h3>
      <Form className={styles.form}>
        <Row className={`${styles.row} mt-2`}>
          <Col xs={8}>
            <Form.Label className={styles.label}>Fase de cultivo</Form.Label>
          </Col>
          <Col>
            <Form.Control className={styles.control} type='text'
              disabled value={data?.fase}
            />
          </Col>
        </Row>
        <Row className={styles.row}>
          <Col xs={8}>
            <Form.Label className={styles.label}>Cantidad de agua (ms2)</Form.Label>
          </Col>
          <Col>
            <Form.Control className={styles.control} type='number'
              disabled value={data?.waterVolume}
            />
          </Col>
        </Row>
        <Row className={styles.row}>
          <Col xs={8}>
            <Form.Label className={styles.label}>Peso promedio (gr)</Form.Label>
          </Col>
          <Col>
            <Form.Control className={styles.control} type='number'
              disabled value={data?.weight}
            />
          </Col>
        </Row>
        <Row className={styles.row}>
          <Col xs={8}>
            <Form.Label className={styles.label}>Alimentación diaria (gr)</Form.Label>
          </Col>
          <Col>
            <Form.Control className={styles.control} type='number'
              disabled value={data?.dailyFood}
            />
          </Col>
        </Row>
        <Row className={styles.row}>
          <Col xs={8}>
            <Form.Label className={styles.label}>Porciones (Diarias)</Form.Label>
          </Col>
          <Col>
            <Form.Control className={styles.control} type='number'
              disabled value={data?.dailyRations}
            />
          </Col>
        </Row>
        <Row className={styles.row}>
          <Col xs={8}>
            <Form.Label className={styles.label}>Alimentación (porcion)</Form.Label>
          </Col>
          <Col>
            <Form.Control className={styles.control} type='number'
              disabled value={data?.FoodXRation.toFixed(3)}
            />
          </Col>
        </Row>
        <Row className={`${styles.row} mt-2`}>
          <Col xs={12}>
            <Form.Label className={styles.label}>Temperatura (sgda)</Form.Label>
          </Col>
          <Col>
            <Form.Control className={styles.control} type='text'
              disabled value={data?.temperature}
            />
          </Col>
        </Row>
        <Button className={`${styles.button} mb-4`} variant='primary'
          onClick={() => route.push('/')}
        >
          Inicio
        </Button>
      </Form>
    </div>
  )
}

export default Results