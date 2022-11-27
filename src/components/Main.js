import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import styles from '@styles/Form.module.css';

const Main = () => {
  return (
    <div className={styles.container}>
      <h3>Simulador para peces</h3>
      <Form className={styles.form}>
        <Row className={styles.row}>
          <Col xs={8}>
            <Form.Label className={styles.label}>Cantidad de peces</Form.Label>
          </Col>
          <Col>
            <Form.Control className={styles.control} type='number' />
          </Col>
        </Row>
        <Row className={styles.row}>
          <Col xs={8}>
            <Form.Label className={styles.label}>Tiempo (Mes)</Form.Label>
          </Col>
          <Col>
            <Form.Control className={styles.control} type='number' />
          </Col>
        </Row>
        <Row className={styles.row}>
          <Col xs={8}>
            <Form.Label className={styles.label}>Temperatura (°)</Form.Label>
          </Col>
          <Col>
            <Form.Control className={styles.control} type='number' />
          </Col>
        </Row>
        <Row className={styles.row}>
          <Col xs={8}>
            <Form.Label className={styles.label}>Tipo de pez</Form.Label>
          </Col>
          <Col>
            <Form.Select className={styles.control}>
              <option>Seleccione</option>
              <option>Trucha</option>
              <option>Salmon</option>
              <option>Atun</option>

            </Form.Select>
          </Col>
        </Row>
        <Button className={styles.button} variant='primary'>
          Calcular
        </Button>
      </Form>
    </div>
  )
}

export default Main