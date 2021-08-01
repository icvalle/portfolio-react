import React from 'react';

export default function Project({ samples }) {
  return (
    <main>
      <section id="workSamples">
          {samples.map((samples) => (
              <figure id={samples.attribute.id} data-toggle="modal" data-target={samples.attribute.target}>
                      <h6>{samples.app.name}</h6>
              </figure>
          ))}
      </section>
    </main>
  );
}
