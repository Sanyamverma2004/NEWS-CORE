// import logo from './logo.svg';
import './App.css';
// console.log(typeof document.querySelector(".App").innerHTML);
// const name=(<h1>
//   thi is me
// </h1>);
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//           {name}
//         </p>
//         <a
//           classNameName="App-link"
//           href="https://reactjs.org"
//           target="_blank"    // jsx is nothing but html in js we use classNameName in place of className, htmlFor in place of for
//           rel="noopener noreferrer"  // and many more also we use parenthesis in return as we are preventing javascript to 
//           // to put ";" in the html code
//         >
//           Learn React 
//         </a>
//       </header>
//     </div>
//   );
// }



// import React,{useState} from 'react';
// import About from './components/About';
// import Navbar from './components/Navbar';
// import Textform from './components/Textform';
// import Alert from './components/Alert';
// import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
// function App() {
//   const [alert,setAlert]=useState(
//     null
//   );
//   const funcalert=(type,msg)=>{
//     setAlert({
//       type:type,
//       msg:msg
//     });
//     setTimeout(()=>setAlert(null),2000);
//   }
//   const [dmode,setmode]=useState('light');
//   const togglemode=()=>{
//     if(dmode==='light'){
//       setmode('dark');
//       // console.log(typeof dmode);
//       document.body.style.backgroundColor='black';
//     }
//     else{
//       setmode('light');
//       // console.log(dmode);
//       document.body.style.backgroundColor='white';

//     }
//   }
//   return (
//     /*<></> is a jsx fragment used to return more than one different tags*/
//     <>
//     <Router>
//     <Navbar About="About" mode={dmode} toggle={togglemode}/>
//     <Alert alert={alert}/>
//     <div className="container my-3">
//       <Routes>
//       <Route path="/" element={<Textform heading="please fill the form" mode={dmode} funcalert={funcalert} />}/>


//       <Route exact path="/about" element={<About/>}/>
//        {/* exact is used for exact oath matching ,without it it is partial checking */}

//       </Routes>
//       </div>
//     </Router>
//     </>
//   );
// }



// import React,{ Component } from 'react'
// import Navbar from './components 2/Navbar';
// import News  from './components 2/News';
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import LoadingBar from 'react-top-loading-bar'
// export default class App extends Component {
//   apiKey=process.env.REACT_APP_NEWS_API;
//   state={
//     progress:0
//   }
//   setProgress=(progress)=>{
//     this.setState({
//       progress:progress
//     })
//   }
//   render() {
//     return (
//       <div>
//   {/*we have given different keys so that mounting occurs everytime of routing without it we have to reload the page */}
//         <Router>
//         <LoadingBar
//         color='#f11946'
//         progress={this.state.progress}
//         // onLoaderFinished={() => setProgress(0)}
//         />
//         <Navbar/>
//         <Routes>
//         <Route path='/'  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="1"category="general"/>}/>
//         <Route path='/business'  element={<News setProgress={this.setProgress} apiKey={this.apiKey}key="2" category="business"/>}/>
//         <Route path='/entertainment'  element={<News setProgress={this.setProgress}apiKey={this.apiKey} key="3" category="entertainment"/>}/>
//         <Route path='/health'  element={<News setProgress={this.setProgress}apiKey={this.apiKey} key="4" category="health"/>}/>
//         <Route path='/science'  element={<News setProgress={this.setProgress}apiKey={this.apiKey} key="5"category="science"/>}/>
//         <Route path='/sports'  element={<News setProgress={this.setProgress}apiKey={this.apiKey} key="6"category="sports"/>}/>
//         <Route path='/technology'  element={<News setProgress={this.setProgress} apiKey={this.apiKey}key="7"category="technology"/>}/>  
//         </Routes>
//         </Router>
//       </div>
//     )
//   }
// }




// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Navbar from './components iNotebook/Navbar';
// import Home from './components iNotebook/Home';
// import About from './components iNotebook/About'
// import NoteState from './context/notes/Notestate';
// import Alert from './components iNotebook/Alert';
// function App() {
//   return (
//     <>
//       <NoteState>
//         <div className="App">
//           <Router>
//             <Navbar />
//             <Alert message="Success"/>
//             <div className='container'>
//               <Routes>
//                 <Route exact path="/" element={<Home />} />
//                 <Route exact path="/about" element={<About />} />
//                 {/* exact is used for exact oath matching ,without it it is partial checking */}
//               </Routes>
//             </div>
//           </Router>
//         </div>
//       </NoteState>
//     </>

//   );
// }

// export default App;




// import React, { useState } from 'react'
// import Navbar from './tester/navbar.js';
// import Textform from './tester/textform.js';
// import About from './tester/about.js';
// import Alert from './tester/alert';
// import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
// function App(){
// const [dec,setdec]=useState('dark');
// const [alert,setalert]=useState(null);
// const func=(type,msg)=>{
//   setalert({
//     type:type,
//     msg:msg

//   })
//   setTimeout(()=>{
//     setalert(null)
//   },2000)
// }
// const a=document.body;
// if(dec==='dark' ){
//   a.style.backgroundColor="#808080";
// }
// else{
//   a.style.backgroundColor="rgb(255,255,255)";
// }
//     return (
//       <>
//       <Router>
//       <Navbar dec={dec}/>
//       <Alert alert={alert} />
//       <div className='container my-3'>

//         <Routes>
//           <Route path="/" element={<Textform dec={dec} func={func}/>}/>
//           <Route exact path="/about" element={<About setdec={setdec} func={func}/>}/>
//         </Routes>
//       </div>
//       </Router>
//       </>
//     )
// }
// export default App;

// import React,{Component} from 'react'
// import Navbar from './ecomm/Navbar';
// export default class App extends Component{
//     render(){
//         return(
//             <div>
//                 <Navbar></Navbar>
                
//             </div>

//         )
//     }
// }