import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div>FAQ</div>
          <nav>
              <a 
              className="footer--github-llink"
              href="https://github.com/katia1802"
              target="_blank"
              rel="noopener noreferrer"
              >
              <i class="fab fa-github-square"/><span>Github</span>
              </a>

              <a 
              className="footer--github-llink"
              href="https://www.linkedin.com/in/katiarojassandoval/"
              target="_blank"
              rel="noopener noreferrer"
              >
              <i class="fab fa-linkedin"/><span>Linkedin</span>
              </a>
              
              <a 
              className="footer--github-llink"
              href="https://twitter.com/kat_srs"
              target="_blank"
              rel="noopener noreferrer"
              >
              <i class="fab fa-twitter-square"/><span>Linkedin</span>
              </a>
              </nav>
        </footer>

      </div>
    );
  }
}

export default Footer;
