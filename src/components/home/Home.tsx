import { Typography, Button, Flex, Col, Row} from 'antd';
import React from 'react';

import './Home.css';
import true_profile from '../../assets/images/true_profile.png';
import green_profile from '../../assets/images/green_profile.png';
import rose_profile from '../../assets/images/rose_profile.png';
import cv_file from '../../assets/pdf/Malgorzata_Galinska_Resume.pdf';

const { Title } = Typography;

function Home() {
  return (
    <div id='home' style={{ minHeight: '100vh', paddingTop: '20vh' }}>
      <Row style={{ minHeight: '70vh', margin: '16px'}}>
        <Col span={8}>
          <div id='profile_picture_container'>
            <img src={rose_profile}/>
            <img src={green_profile}/>
            <img src={true_profile}/>
          </div>
        </Col>
        <Col span={16} style={{textAlign: 'center'}}>
          <Title id='title'>  Małgorzata Galińska </Title>
          <Title level={3}> Software Developer </Title>
        </Col>
      </Row>
      <Flex wrap='wrap' gap='small' justify='center'>
        <Button shape='round' href='https://www.linkedin.com/in/malgorzata-galinska/' target='_blank'>LinkedIn</Button>
        <a href={cv_file} download='Malgorzata_Galinska_Resume' target='_blank'>
          <Button type='primary' shape='round' >
            Download CV
          </Button>
        </a>
        <Button shape='round' href='https://github.com/malgalinska' target='_blank'>Github</Button>
      </Flex>
    </div>
  )
}

export default Home;
