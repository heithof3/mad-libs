import React, { Component } from 'react';

import MadlibForm from './madlib_form';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="backgroundSkew">
          <div className="madlib-heading">
            <h1>Mad Libs</h1>
          <div className="madlib-subheading">
            Fill out the field below and click the genrate button<br/>to see the mad lib story.
          </div>
          </div>
            <MadlibForm />
        </div>
        
      </div>
    );
  }
}
