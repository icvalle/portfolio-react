import React from 'react';

export default function About() {
  return (
    <div>
      <h5 class="text-center pt-4 pb-2">About Me</h5>
      <section id="aboutMe">
        <h1>Hi,<br>
        </br>I'm Iris.</h1>
        <h4>Nice to meet you.</h4>
        <div id="bio">
          <p>I’m a web designer based in Maryland. I&rsquo;m currently working toward a full stack web development certificate to broaden my skill set. Click on the Portfolio tab to see some samples of my work from the coding program.</p>
          <img src="assets/images/portfolio_photo_iris.png" alt="Iris" id="irisPhoto"></img>
        </div> 
      </section>

    </div>
  );
}