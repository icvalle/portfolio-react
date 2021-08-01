import React from 'react';

export default function Footer() {

  return (
    <footer id="footerInfo">
        <ul id="direct">
            <li><span class="contact">Call &rang;</span>&nbsp; 443 &#8226; 351 &#8226; 7843</li>
            <li><span class="contact">Email &rang;</span>&nbsp; <a href="mailto:valle.web.design@gmail.com">valle.web.design@gmail.com</a></li>
        </ul>
        <ul id="social">
            <li><a href="https://www.linkedin.com/in/valleiris" target="_blank" rel="noreferrer"><img src="assets/images/linkedin.png" alt="LinkedIn" width="35" height="auto" /></a></li>
            <li><a href="https://github.com/icvalle" target="_blank" rel="noreferrer"><img src="assets/images/github.png" alt="GitHub" width="45" height="auto" /></a></li>
        </ul>
    </footer>
  );
}