import React,{ Component } from 'react'
import Navbar from './components 2/Navbar';
import News  from './components 2/News';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  apiKey=process.env.REACT_APP_NEWS_API;
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({
      progress:progress
    })
  }
  render() {
    return (
      <div>
  {/*we have given different keys so that mounting occurs everytime of routing without it we have to reload the page */}
        <Router>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
        />
        <Navbar/>
        <Routes>
        <Route path='/'  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="1"category="general"/>}/>
        <Route path='/business'  element={<News setProgress={this.setProgress} apiKey={this.apiKey}key="2" category="business"/>}/>
        <Route path='/entertainment'  element={<News setProgress={this.setProgress}apiKey={this.apiKey} key="3" category="entertainment"/>}/>
        <Route path='/health'  element={<News setProgress={this.setProgress}apiKey={this.apiKey} key="4" category="health"/>}/>
        <Route path='/science'  element={<News setProgress={this.setProgress}apiKey={this.apiKey} key="5"category="science"/>}/>
        <Route path='/sports'  element={<News setProgress={this.setProgress}apiKey={this.apiKey} key="6"category="sports"/>}/>
        <Route path='/technology'  element={<News setProgress={this.setProgress} apiKey={this.apiKey}key="7"category="technology"/>}/>  
        </Routes>
        </Router>
      </div>
    )
  }
}
