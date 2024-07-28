import React, { Component } from 'react'
import Newsitem from './Newsitem'
import propTypes from'prop-types'
export class News extends Component {
  static propTypes={
    category: propTypes.string
  }
  constructor(props){
    super(props);
    this.state={
      article:[],
      loading:false,
      page:1,
    }
    document.title=`${this.props.category}-News Core`;
  }
  async funcComp(){
    await this.props.setProgress(1);
    const data=await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=20`);
    let parseData=await data.json();
    this.setState({article:parseData.articles,total:parseData.totalResults});
    console.log(this.state.article);
    await this.props.setProgress(100);
  }
  async componentDidMount(){// this works after everything is parsed
    // const data=await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=ed2999957cdb402ead6f4b0c42b18a5d&page=${this.state.page}&pageSize=20`);
    // let parseData=await data.json();
    // this.setState({article:parseData.articles,total:parseData.totalResults});
    await this.funcComp();
  }
  funcnext=async ()=>{
    // if(this.state.page+1<=Math.ceil(this.state.total/20)){
    // let data=await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=ed2999957cdb402ead6f4b0c42b18a5d&page=${this.state.page+1}&pageSize=20`);
    // let parseData=await data.json();
    // this.setState({article:parseData.articles});
    // this.setState({page: this.state.page+1});}
    this.setState({page:this.state.page+1});
    this.funcComp();
  }
  funcprev=async()=>{
    // if(this.state.page-1>=1){
    // let data=await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=ed2999957cdb402ead6f4b0c42b18a5d&page=${this.state.page-1}&pageSize=20`);
    // let parseData=await data.json();
    // this.setState({article:parseData.articles});
    // this.setState({page:this.state.page-1});}
    this.setState({page:this.state.page-1});
    this.funcComp();
  }
  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center" style={{margin:'35px 0px',marginTop:'90px'}}>News Headlines</h2>
        <div className='row'>
          {this.state.article.map(element=>{return <div className='col-md-4' key={element.url}>
        <Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
        </div>})}
        <div className='container d-flex justify-content-between'>
        <button type="button" disabled={this.state.page===1}className="btn btn-dark" onClick={this.funcprev}> &larr;Previous </button>
        <button type="button" disabled={this.state.page+1>Math.ceil(this.state.total/20)}className="btn btn-dark" onClick={this.funcnext}> Next&rarr;</button>
        </div>
        </div>
        
      </div>
    )
  }
}

export default News