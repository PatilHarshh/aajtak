import React, { Component } from 'react'

export class Crousel extends Component {
    render() {
      let{title, imageUrl, description, newsUrl}= this.props;
    return (
      <div>
               <div id="carouselExampleCaptions" className="carousel slide m-5 5 5 5   " >
  <div className="carousel-indicators ">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner w-100 ">
    <div className="carousel-item active"data-bs-interval="1000" >
      <img src={'https://c.ndtvimg.com/2022-12/ct1rq48o_saud-shakeel-afp_625x300_30_December_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675'} className="d-block w-100 " alt="..."style={{borderRadius: '15px'}}/>
     
      <div className="carousel-caption d-none d-md-block">
        <h5>{title}</h5>
        <p>{description}</p>
        <a href={newsUrl} className="btn btn-sm btn-primary">Read More</a>

      </div>
    </div>
    <div className="carousel-item"data-bs-interval="2000" >
      <img src={'https://images.hindustantimes.com/img/2022/12/29/1600x900/3a1d3d62-d050-11eb-886b-f0dbf2921c38_1624036465222_1672316440476_1672316440476.jpg'} className="d-block w-100" alt="..."style={{borderRadius: '15px'}}/>       <div className="carousel-caption d-none d-md-block">
        <h5>CBSE 2023 LIVE: Class 10, 12 datesheet, exam ...</h5>
        <p>{description}</p>
        <a href={newsUrl} className="btn btn-sm btn-primary">Read More</a>       </div>     </div>     <div className="carousel-item"data-bs-interval="3000">
      <img src={'https://images.indianexpress.com/2022/12/Yusaku-Maezawa-SpaceX-20221209-2.jpg'} className="d-block w-100" alt="..."style={{borderRadius: '15px'}}/>       <div className="carousel-caption d-none d-md-block">         <h5>{title}</h5>         <p>{description}</p>
        <a href={newsUrl} className="btn btn-sm btn-primary">Read More</a>       </div>     </div>
  </div>
  <button className="carousel-control-prev w-50" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
     <span className="carousel-control-next-icon" aria-hidden="true"></span>
     <span className="visually-hidden">Next</span>
   </button>
 </div>
      </div>
    )
  }
}

export default Crousel