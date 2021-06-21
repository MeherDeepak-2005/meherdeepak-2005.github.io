import './App.css';
import React, { Component } from 'react'
import girl from './img/landing-page-girl.png';
import Search from './search'
import logo from './img/logo.png'
import youtubeApi from './api/api'
import { assertNullLiteralTypeAnnotation } from '@babel/types';


const express = require('express')
const path = require('path');

const app = express()
const port = process.env.PORT || 3000 // Heroku will need the PORT environment variable

app.use(express.static(path.join(__dirname, 'build')));

app.listen(port, () => console.log(`App is live on port ${port}!`))

class App extends React.Component {
  state = {
    videoMetaInfo: [],
    selectVideoId: null,
    title: []
  };
  onSearch = async (keyword) => {
    keyword = keyword + ' latest song'
    const response = await youtubeApi.get("/search", {
      params: {
        q: keyword
      }
    });
    const title = response.data.items[0].snippet.title
    const videoLink = response.data.items[0].id.videoId
    alert('Latest Song of ' + keyword + 'is' + "    " + title)
  };

  render() {
    return (
    <div className="App">
      <nav className='About-nav'>
        <div className="scroll">
          <h2 className='About'>About</h2>
            <h3 className='About-app'>The App</h3>
            <p>Alan is an Automated computer bot powered by python. It collects data from net about the latest song of every
              artist.Popular artists data is stored in a Firebase Realtime Database to reduce the workload. The data is
              refreshed every 1 hour (without any human interaction). So this might be a very good site to know about the
              latest music updates :)
            </p>
            <h3 className='About-creator'>The Creator</h3>
            <p>Hi, I am Meher (15 years old) when I created this website.I like programming, gaming, MTB(red bull). I am big
              fan of Formula-1 (Micheal Schumacher) and anime (Fav: Death Note and Code Geass).</p>
          </div>
    </nav>
    <nav>
      <div className="logo">
        <img src={logo} alt='' />
      </div>
      <div className="tagline">
        <p>Alan</p>
      </div>
    </nav>
    <header>
      <div className="landing-page-photo">
        <img className='landing-page-girl' src={girl} alt='girl enjoying to music'/>
      </div>
      <div className="header">
        <div className="header-main">
          <p className="header-first">Find</p>
          <h1 className='header-between'>Latest Songs</h1>
          <p className='header-last'>of popular artists</p>
        </div>
        <div className="header-secondary">
          <Search onSearch={this.onSearch}/>
        </div>
      </div>
    </header>
    <header className='header-mobile'>
      <div className="header">
        <div className="header-main">
          <p className="header-first">Find</p>
          <h1 className='header-between'>Latest Songs</h1>
          <p className='header-last'>of popular artists</p>
        </div>
        <div className="header-secondary">
          <form className="search">
            <input className="search__text" type="text" name="" placeholder="Artist Name"/>
            <a href="/" className="search__button"><i class="fas fa-search"></i></a>
          </form>
        </div>
      </div>
    </header>
    <main>
      <section className="popular-artists">
        <div className="popular-artists-text">
          <h2>Popular Artists</h2>
          <p className='explanation'>The data is updated every hour by Alan an automated bot.</p>
        </div>
        <span className='plus'>&#43;</span>
        <ul id='list'>
        </ul>
      </section>
    </main>
    </div>
  );
}
  }
  

export default App;
