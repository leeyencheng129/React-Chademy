import React from 'react'
import { withRouter } from 'react-router-dom'
import hotel from '../images/hotel.jpg'
function ProductSix(props) {
  const { product, item } = props
  console.log(product)

  return (
    <>
      <div className="container">
        <div className="row justify-content-center title">
          <p>Boutique Hotel Project</p>
        </div>
        <div className="row">
          <div className="col hotel-left">
            <p>Miramonti Boutique Hotel</p>
            <p>HAFLING-MERAN, ITALY</p>

            <div className="left-icon">
              <img src={hotel} alt="" />
            </div>
          </div>
          <div className="col right-img">
            <img src={require('../../img/' + item.photo)} alt="" />
          </div>
          <img src={require('../../img/' + item.photo)} alt="" />
          <img src={require('../../img/' + item.photo)} alt="" />
        </div>
      </div>
    </>
  )
}

export default withRouter(ProductSix)
