import React, { Component } from 'react'
import Crousel from './Crousel'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
 static defaultProps ={
  country: 'in',
  category: 'general'
 }
 static propTypes = {
  country : PropTypes.string,
  category: PropTypes.string
 }
  
  constructor(){
    super();
    console.log("Hello i am constructor running from News Component")
    this.state ={
      articles : [],
      loading:false
    }
  }
  async componentDidMount(){  // Run after all rendering
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category =${this.props.category}&apiKey=e1434b8d14e9488fba0ed084ae79acb1`
    let data = await fetch(url)
    let parseData = await data.json();
    this.setState({articles : parseData.articles})

  }




 handlePrevClick=  async()=>{
  console.log('previous')
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category =${this.props.category}&apiKey=e1434b8d14e9488fba0ed084ae79acb1&page=${this.state.page -1}&pageSize=20 `;
  let data = await fetch(url);
  let parseData = await data.json();
    this.setState({
      page : this.state.page - 1,
      articles : parseData.articles

    })

  }
  handleNextClick= async()=>{
    console.log('next')
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category =${this.props.category}&apiKey=e1434b8d14e9488fba0ed084ae79acb1 ${this.state.page +1}&pageSize=20 `;
    let data = await fetch(url);
    let parseData = await data.json();
      this.setState({
        page : this.state.page + 1,
        articles : parseData.articles

      })
  }

  render() {
    return (
      <div>
        <h1 className='top mt-3' style={{display: 'flex', justifyContent:'center'}}>TOP HEADLINES</h1>
        {this.state.loading && <Spinner/>}
           <Crousel title={'jjdjdj'}key={'dfa'}  newsUrl={'lll'}/>
        {/* {this.state.articles.map((element)=>{
          
        })}
      */}
      
        <div className="row">
        {this.state.articles.map((element)=>{
            return <div className='col-md-4'key={element.url}>
            <NewsItem  title={element.title?element.title.slice(0, 45):''}  description={element.description?element.description.slice(0, 88):''} imageUrl={element.urlToImage} className="d-block w-100 " alt="..."newsUrl={element.url} />
            </div>
        })}
            
            
        </div>
        <div className="container d-flex justify-content-between">
        <button  disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button type="button" className="btn btn-dark" onClick= {this.handleNextClick}>Next &rarr;</button>

        </div>
      </div>
    )
  }
}

export default News