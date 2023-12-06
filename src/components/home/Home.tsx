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
      <Flex justify='center' align='start' wrap="wrap" style={{ minHeight: '70vh', width: '100%'}}>
        <div id='profile_picture_container' style={{minWidth: '320px'}}>
          <img src={rose_profile}/>
          <img src={green_profile}/>
          <img src={true_profile}/>
        </div>
        <div style={{minWidth: '320px'}}>
          <Title id='title'>  Małgorzata<br/>Galińska </Title>
          <Title id='subtitle' level={3}> Software Developer </Title>
        </div>
      </Flex>
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
