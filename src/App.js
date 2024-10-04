import React from 'react';
import './App.css'; // Make sure to import your CSS file

const Home = () => {
  return (
    <div className="home-container">
      <div className="vertical-card">
        <h2 className="vertical-card-title">IPO DASHBOARD</h2>

        <div className="horizontal-cards-container">
          <a href="https://www.chittorgarh.com/ipo/ipo_dashboard.asp" target="_blank" className="horizontal-card">
            <img src={require('./img/vlogo1.png')} alt="" />
            <p>Open IPO</p>
          </a>
          <a href="https://www.investorgain.com/report/live-ipo-gmp/331/" target="_blank" className="horizontal-card">
            <img src={require('./img/vlogo1.png')} alt="Card 2" />
            <p>GMP</p>
          </a>
          <a href="https://ipocentral.in/" target="_blank" className="horizontal-card">
            <img src={require('./img/vlogo1.png')} alt="Card 3" />
            <p>UpComing IPO</p>
          </a>
                  </div>
      </div>
      <div className="vertical-card">
        <h2 className="vertical-card-title">Vertical Card 2</h2>
        <div className="horizontal-cards-container">
          <a href="https://example-link1.com" target="_blank" className="horizontal-card">
            <img src={require('./img/vlogo1.png')} alt="Card 1" />
            <p>Card 1 Text</p>
          </a>
          <a href="https://example-link2.com" target="_blank" className="horizontal-card">
            <img src={require('./img/vlogo1.png')} alt="Card 2" />
            <p>Card 2 Text</p>
          </a>
          <a href="https://example-link3.com" target="_blank" className="horizontal-card">
            <img src={require('./img/vlogo1.png')} alt="Card 3" />
            <p>Card 3 Text</p>
          </a>
          <a href="https://example-link4.com" target="_blank" className="horizontal-card">
            <img src={require('./img/vlogo1.png')} alt="Card 4" />
            <p>Card 4 Text</p>
          </a>
        </div>
      </div>
      <div className="vertical-card">
        <h2 className="vertical-card-title">Vertical Card 3</h2>
        <div className="horizontal-cards-container">
          <a href="https://example-link1.com" target="_blank" className="horizontal-card">
            <img src={require('./img/vlogo1.png')} alt="Card 1" />
            <p>Card 1 Text</p>
          </a>
          <a href="https://example-link2.com" target="_blank" className="horizontal-card">
            <img src={require('./img/vlogo1.png')} alt="Card 2" />
            <p>Card 2 Text</p>
          </a>
          <a href="https://example-link3.com" target="_blank" className="horizontal-card">
            <img src={require('./img/vlogo1.png')} alt="Card 3" />
            <p>Card 3 Text</p>
          </a>
          <a href="https://example-link4.com" target="_blank" className="horizontal-card">
            <img src={require('./img/vlogo1.png')} alt="Card 4" />
            <p>Card 4 Text</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
