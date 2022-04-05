import React, {Component} from 'react';
import "./Home.css";
import "./Detail.css";
import Goods from './Goods';
import Product from "./Product";


//add detail page ,use goods Component
function detail() {
    // read data from sessionStorage and render
    let data = JSON.parse(window.sessionStorage.getItem("goods"));

  return (
    <div className="home">

        <div id="container">



    <div className='home_container'>
    <div className="home_rowz">
        <div className="home_row">
            <Goods
                id={data.id}
                title={data.title}
                price={data.price}
                image={data.image}
                rating={data.rating}
                descr={data.descr}
                />
        </div>
    </div>
    <div className="home_rowz">
        <div className="home_title"><h3>Customers Frequently Bought Together</h3></div>
        <div className="home_row">
            <Product
                id="1235337"
                title='Workout Equipment'
                price={69.99}
                image ="https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2022/img/Home/XCM_CUTTLE_1409913_2192710_CA_CUTTLE_379x304_1X_en_CA._SY304_CB628419738_.jpg"
                rating = {5}
                descr="FUNCTIONALITY: RIMSPORTS' ankle straps can be used for cable machines and Glutes Exercise equipment and can help firm up your glutes workout These ankle cuffs are effective for exercise machines for legs, especially if you use these leg straps for exercises such as inner and outer thigh contractions, leg extensions, cable kickbacks, hip abduction, and cable lunges, to improve your leg game!"
            />
            <Product
                id="1253337"
                title='Sun Glasses'
                price={29.99}
                image ="https://m.media-amazon.com/images/I/211e2kNcJkL._AC_SY200_.jpg"
                rating = {5}
            />
            <Product
                id="16234337"
                title='Door Thingy'
                price={19.99}
                image ="https://m.media-amazon.com/images/I/216G5eCaEyL._AC_SY200_.jpg"
                rating = {4}
            />
            <Product
                id="13373457"
                title='TV'
                price={99.99}
                image ="https://m.media-amazon.com/images/G/01/kindle/journeys/YzQ1ODEyNTMt/YzQ1ODEyNTMt-OWZmOTU3NDIt-w210._AC_SY200_.jpeg"
                rating = {3}
            />
        </div>
    </div>
    <div className="home_rowz">
        <div className="home_title"><h3>Product Details</h3></div>
        <div className="home_row">
            <table class="table table-striped">
                <tbody>
                    <tr>
                        <td>Pracel Dimensions:</td>
                        <td align='center'>18.6 * 12 * 13 Grams</td>
                    </tr>
                    <tr>
                        <td>Date First Available:</td>
                        <td align='center'>Sept 26 2020</td>
                    </tr>
                    <tr>
                        <td>Manufactuer:</td>
                        <td align='center'>Think LTD</td>
                    </tr>
                    <tr>
                        <td>Place of Business:</td>
                        <td align='center'>ASasd 13s LTD</td>
                    </tr>
                    <tr>
                        <td>Asin:</td>
                        <td align='center'>DB1231030303</td>
                    </tr>
                    <tr>
                        <td>Best Seller Rank:</td>
                        <td align='center'>#1 in Beauty & Personal Care</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div className="home_rowz_comment">
        <div className="comment_left">
            <div><b>Customer reviews</b></div>
            <br/>
            <div>
                <p>★★★★☆ 4 out of 5
                    <br></br>
                    2534 customers ratings
                </p>
            </div>

            <div className="progress_row">
                <div style={{width:'80px'}}>5 star</div>
                <div className="progress_container">
                    <div className="skills" style={{width:'78%',backgroundColor:'#e9ae18'}}></div>
                </div>
                <div style={{width:'80px'}}><span style={{color:'#0894f6'}}> &nbsp; 78%</span></div>
            </div>

            <div className="progress_row">
                <div style={{width:'80px'}}>4 star</div>
                <div className="progress_container">
                    <div className="skills" style={{width:'12%',backgroundColor:'#e9ae18'}}></div>
                </div>
                <div style={{width:'80px'}}><span style={{color:'#0894f6'}}> &nbsp; 12%</span></div>
            </div>

            <div className="progress_row">
                <div style={{width:'80px'}}>3 star</div>
                <div className="progress_container">
                    <div className="skills" style={{width:'5%',backgroundColor:'#e9ae18'}}></div>
                </div>
                <div style={{width:'80px'}}><span style={{color:'#0894f6'}}> &nbsp; 5%</span></div>
            </div>

            <div className="progress_row">
                <div style={{width:'80px'}}>2 star</div>
                <div className="progress_container">
                    <div className="skills" style={{width:'2%',backgroundColor:'#e9ae18'}}></div>
                </div>
                <div style={{width:'80px'}}><span style={{color:'#0894f6'}}> &nbsp; 2%</span></div>
            </div>

            <div className="progress_row">
                <div style={{width:'80px'}}>1 star</div>
                <div className="progress_container">
                    <div className="skills" style={{width:'1%',backgroundColor:'#e9ae18'}}></div>
                </div>
                <div style={{width:'80px'}}><span style={{color:'#0894f6'}}>&nbsp;  1%</span></div>
            </div>

            <br></br>

            <div>
                <b>Review This Mask</b>
                <br></br>
                Share you thoughts with other customers
            </div>

            <div>
                <br></br>
                <button style={{width:'500px'}} type="button" className="btn btn-primary">Write A Review</button>
            </div>
        </div>
        <div className="comment_right">
            <div><b>Rating & Reviews</b></div>
            <div className="review_item">
                <div className="review_left">
                    <div>12/24/2015</div>
                    <div><p>⭐⭐⭐</p></div>
                </div>
                <div className="review-right">
                    <div><b>wfpbx</b></div>
                    <div>aqypegpte vplbnlcgbb xzaoaivvboau ofgzgyymogmm dpsdgzd lzjvdfyzibwh eoevmrjxl ikbbfgcvk vna pftdxp ewk vdbupnu ecd scfjlgcjd </div>
                </div>
            </div>
            <div className="review_item">
                <div className="review_left">
                    <div>12/24/2015</div>
                    <div><p>⭐⭐⭐</p></div>
                </div>
                <div className="review-right">
                    <div><b>wfpbx</b></div>
                    <div>aqypegpte vplbnlcgbb xzaoaivvboau ofgzgyymogmm dpsdgzd lzjvdfyzibwh eoevmrjxl ikbbfgcvk vna pftdxp ewk vdbupnu ecd scfjlgcjd </div>
                </div>
            </div>
            <div className="review_item">
                <div className="review_left">
                    <div>12/24/2015</div>
                    <div><p>⭐⭐⭐</p></div>
                </div>
                <div className="review-right">
                    <div><b>wfpbx</b></div>
                    <div>aqypegpte vplbnlcgbb xzaoaivvboau ofgzgyymogmm dpsdgzd lzjvdfyzibwh eoevmrjxl ikbbfgcvk vna pftdxp ewk vdbupnu ecd scfjlgcjd </div>
                </div>
            </div>
            <div>
                <button style={{width:'200px'}} type="button" className="btn btn-primary">Read More Reviews</button>
            </div>
        </div>
    </div>
    </div>





</div>
    </div>
  )
}

export default detail