import React, { Component } from 'react'

export class Newsitem extends Component {
  
  render() {
    let {title,description,imageUrl,newsUrl}=this.props;
    return (
      <div className='container'>
        <div className="card">
  <img className="card-img-top" src={`${imageUrl}`} alt="Card cap"/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">Read more</a>
  </div>
</div>
      </div>
    )
  }
}

export default Newsitem