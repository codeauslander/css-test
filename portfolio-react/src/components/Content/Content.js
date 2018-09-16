import React, { Component } from 'react';
import './Content.css';

export default class Content extends Component {
  render() {
    return (
      <main className='content'>

        <section className='left'>
          <p>
            I create projects that may or may not seriously break the universe
          </p>
        </section>

        <section className="right">
          <h1 className='right-tittle'>Here We go! projects</h1>

          <p>Elit anim commodo eu ad ipsum incididunt sit officia sunt irure ullamco.</p>
        </section>
        
      </main>
    )
  }
}
