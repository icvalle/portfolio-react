import React from 'react';
import Project from '../Project';
import samples from '../../samples';

export default function Portfolio() {
  return (
    <div>
      <h5 class="text-center pt-4 pb-2">Portfolio</h5>
      <Project samples={samples} />
    </div>
  );
}