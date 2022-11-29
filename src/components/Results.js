import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import styles from '@styles/Form.module.css';

const Results = () => {
  return (
    <div className={styles.container}>
      <h3>Resultados</h3>
      <Form className={styles.form}>
        <Row className={styles.row}>
          <Col xs={8}>
            <Form.Label className={styles.label}>Cantidad de agua (ms2)</Form.Label>
          </Col>
          <Col>
            <Form.Control className={styles.control} type='number' />
          </Col>
        </Row>
        <Row className={styles.row}>
          <Col xs={8}>
            <Form.Label className={styles.label}>Peso promedio (gr)</Form.Label>
          </Col>
          <Col>
            <Form.Control className={styles.control} type='number' />
          </Col>
        </Row>
        <Row className={styles.row}>
          <Col xs={8}>
            <Form.Label className={styles.label}>Alimentación diaria (gr)</Form.Label>
          </Col>
          <Col>
            <Form.Control className={styles.control} type='number' />
          </Col>
        </Row>
        <Row className={styles.row}>
          <Col xs={8}>
            <Form.Label className={styles.label}>Porciones (Diarias)</Form.Label>
          </Col>
          <Col>
            <Form.Control className={styles.control} type='number' />
          </Col>
        </Row>
        <Row className={styles.row}>
          <Col xs={8}>
            <Form.Label className={styles.label}>Alimentación (porcion)</Form.Label>
          </Col>
          <Col>
            <Form.Control className={styles.control} type='number' />
          </Col>
        </Row>
        <Row className={styles.row}>
          <Col xs={8}>
            <Form.Label className={styles.label}>Temperatura (sgda)</Form.Label>
          </Col>
          <Col>
            <Form.Control className={styles.control} type='number' />
          </Col>
        </Row>
        <Button className={styles.button} variant='primary'>
          Inicio
        </Button>
      </Form>
    </div>
  )
}

export default Results