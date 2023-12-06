import { Anchor, Layout } from 'antd';
import React from 'react';

import './App.css';
import Home from '../home/Home';
import About from '../about/About';
import Experience from '../experience/Experience';

const { Footer } = Layout;

function Menu() {
  return (
    <div style={{ position: 'fixed', top: '120px', insetInlineEnd: 0, marginRight: '80px'}}>
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
              title: 'Experience & skills',
            },
          ]}
        />
    </div>
  );
}

function App() {
  return (
    <div className='App'>
      <Layout>
        <Menu />
        <Home />
        <About />
        <Experience />
        <Footer style={{ textAlign: 'center', zIndex: '3' }}>
          ©2023 Created by Małgorzata Galińska
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
