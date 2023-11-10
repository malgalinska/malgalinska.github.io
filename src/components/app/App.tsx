import { Anchor, Row, Col, ConfigProvider} from 'antd';
import React from 'react';
import './App.css';
import Home from '../home/Home';
import About from '../about/About';
import Experience from '../experience/Experience';
import { relative } from 'path';

function Menu() {
  return (
    <Anchor
      items={[
        {
          key: 'home',
          href: '#home',
          title: 'Home',
        },
        {
          key: 'about',
          href: '#about',
          title: 'About',
        },
        {
          key: 'experience',
          href: '#experience',
          title: 'Experience',
        },
      ]}
    />
  );
}

function App() {
  return (
    <div className="App" style={{background: 'rgba(255,0,0,0.02)'}}>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: 'Montserrat',
          },
        }}
      >
        <Row gutter={16}>
          <Col span={4} />
          <Col span={16}>
            <Home />
            <About />
            <Experience />
          </Col>
          <Col span={4}>
            <div style={{ marginTop: '8vh', marginRight: '8vh' }}>
              <Menu />
            </div>
          </Col>
        </Row>
      </ConfigProvider>
    </div>
  );
}

export default App;
