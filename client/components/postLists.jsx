import React, { Component } from 'react';
import { Link } from 'react-router';

export default class PostLists extends Component {
  render() {
    return (
      <main>
        <h1>ArtMap</h1>
        <div>list here</div>
        <div><Link to="/lists/title">Art 1</Link></div>
        <div><Link to="/lists/title">Art 2</Link></div>
      </main>
    );
  }
}
