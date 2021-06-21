import React from "react";
import Hello from './hello'

const people = () => {
  let saludo = "oelo";
  return (
    <div className="container">

        <Hello />

      <h2>im people component {saludo}</h2>
      <button type="button" class="btn btn-primary me-2">
        Primary
      </button>
      <button type="button" class="btn btn-secondary me-2">
        Secondary
      </button>
      <button type="button" class="btn btn-success me-2">
        Success
      </button>
      <button type="button" class="btn btn-danger">
        Danger
      </button>
      <button type="button" class="btn btn-warning">
        Warning
      </button>
      <button type="button" class="btn btn-info">
        Info
      </button>
      <button type="button" class="btn btn-light">
        Light
      </button>
      <button type="button" class="btn btn-dark">
        Dark
      </button>

      <button type="button" class="btn btn-link mr-2">
        Link
      </button>
      
    </div>
  );
};

export default people;
