import { Row, Col, Card, Typography } from 'antd';
import React from 'react';
import './Experience.css';
import { relative } from 'path';

const { Title, Paragraph, Text, Link } = Typography;

function Experience() {
  return (
    <div id='experience' style={{ minHeight: '100vh', paddingTop: '20vh' }}>
      <Title> Experience </Title>
      <Row gutter={16}>
        <Col span={8}>
          <Card title='Ruby on Rails developer' bordered={false}>
          Part-time work on projects: Intum, Siteor, Fakturownia. Programming in Ruby using JavaScript, HTML, and MySQL. Using Git, Docker, and Docker Compose.
          </Card>
        </Col>
        <Col span={8}>
          <Card title='Algorithmics tutor' bordered={false}>
          Conducting additional classes at the XIV LO in Warsaw during the school year and at holiday camps. Teaching algorithms and their implementation in C++ and preparing students to participate in the Olympiad in Informatics. Coordinating teamwork.
          </Card>
        </Col>
        <Col span={8}>
          <Card title='Graduate' bordered={false}>
            I have graduate my master's degree in September 2023 with GPA 3.65.
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Experience;
