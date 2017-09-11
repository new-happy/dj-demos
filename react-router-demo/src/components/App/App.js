import React, { Component } from 'react'
import './app.css'
import {
  BrowserRouter as Router,
  Route
 } from 'react-router-dom'

import Layout from '../Layout/Layout'
import Main from '../Main/Main'

class App extends Component {

  state = {
    posts: [
      {
        id: '134',
        title: 'Git 使用技巧',
        content: 'main content'
      },
      {
        id: '256',
        title: '命令使用技巧',
        content: 'main content'
      },
      {
        id: '545',
        title: 'Github 基础',
        content: 'main content'
      }
    ]
  }

  render () {

    return (
      <Router>
        <Layout>
          <Main />
        </Layout>
      </Router>
    )
  }
}

export default App
