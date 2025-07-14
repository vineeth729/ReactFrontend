import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch(process.env.REACT_APP_APIURL)
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }))
      .catch((err) => this.setState({ apiResponse: "Error fetching API" }));
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <header className="navbar">
          <div className="logo">DevBank</div>
          <nav>
            <ul className="nav-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Login</a></li>
            </ul>
          </nav>
        </header>

        <section className="hero">
          <div className="hero-text">
            <h1>Welcome to DevBank</h1>
            <p>Smart, Secure, and Reliable Banking for Developers</p>
            <a href="#" className="btn">Get Started</a>
          </div>
        </section>

        <section className="services">
          <h2>Our Services</h2>
          <div className="service-cards">
            <div className="card">
              <h3>Online Banking</h3>
              <p>Access your accounts anytime, anywhere.</p>
            </div>
            <div className="card">
              <h3>Developer Loans</h3>
              <p>Special financing tailored for tech entrepreneurs.</p>
            </div>
            <div className="card">
              <h3>24/7 Support</h3>
              <p>Get expert help whenever you need it.</p>
            </div>
          </div>
        </section>

        <section className="api-response">
          <h2>Server Message</h2>
          <p>{this.state.apiResponse}</p>
        </section>

        <footer className="footer">
          <p>&copy; 2025 DevBank. All rights reserved.</p>
        </footer>
      </div>
    );
  }
}

export default App;
