import React, { Component } from 'react'

export class NewsItem extends Component {
  

  render() {
      let{title, description, imageUrl, newsUrl}= this.props
      return (
      <div>
        <div className="card m-4 " >
         <img src={!imageUrl?'https://images.hindustantimes.com/img/2022/12/29/1600x900/3a1d3d62-d050-11eb-886b-f0dbf2921c38_1624036465222_1672316440476_1672316440476.jpg': imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <a href={newsUrl} target= '_blank' className="btn btn-primary">Go somewhere</a>
    </div>
      </div>
      </div>
    )
  }
}

export default NewsItem