import React, { Component } from 'react'
import { connect } from 'react-redux'
import hotyq_onebg_wave from "../../../style/img/hotyq_onebg_wave.png";
import hotyq_oneTitle from "../../../style/img/hotyq_oneTitle.png";
import hotyq_one_phone from "../../../style/img/hotyq_one_phone.png";
import hotyq_twobg_air from "../../../style/img/hotyq_twobg_air.png";
import hotyq_twoTitle from "../../../style/img/hotyq_twoTitle.png";
import hotyq_two_iphone from "../../../style/img/hotyq_two_iphone.png";
import hotyq_two_consLogo from "../../../style/img/hotyq_two_consLogo.png";
import hotyq_two_consOne from "../../../style/img/hotyq_two_consOne.png";
import hotyq_two_consTwo from "../../../style/img/hotyq_two_consTwo.png";
import hotyq_two_consThree from "../../../style/img/hotyq_two_consThree.png";
import hotyq_two_consFour from "../../../style/img/hotyq_two_consFour.png";
import hotyq_two_consFive from "../../../style/img/hotyq_two_consFive.png";
import hotyq_two_consSix from "../../../style/img/hotyq_two_consSix.png";
import hotyq_two_consSeven from "../../../style/img/hotyq_two_consSeven.png";
import hotyq_two_consEight from "../../../style/img/hotyq_two_consEight.png";
import hotyq_two_consNine from "../../../style/img/hotyq_two_consNine.png";
import hotyq_threeTitle from "../../../style/img/hotyq_threeTitle.png";
import hotyq_three_oneCons_oneimg from "../../../style/img/hotyq_three_oneCons_oneimg.png";
import hotyq_three_oneCons_twoimg from "../../../style/img/hotyq_three_oneCons_twoimg.png";
import hotyq_three_oneCons_threeimg from "../../../style/img/hotyq_three_oneCons_threeimg.png";
import hotyq_three_twoCons_oneimg from "../../../style/img/hotyq_three_twoCons_oneimg.png";
import hotyq_three_threeCons_oneimg from "../../../style/img/hotyq_three_threeCons_oneimg.png";
import hotyq_three_threeCons_twoimg from "../../../style/img/hotyq_three_threeCons_twoimg.png";
import hotyq_three_threeCons_threeimg from "../../../style/img/hotyq_three_threeCons_threeimg.png";
import hotyq_three_fourCons_oneimg from "../../../style/img/hotyq_three_fourCons_oneimg.png";
import hotyq_three_fourCons_twoimg from "../../../style/img/hotyq_three_fourCons_twoimg.png";
import hotyq_three_fourCons_threeimg from "../../../style/img/hotyq_three_fourCons_threeimg.png";
import hotyq_three_fourCons_fourimg from "../../../style/img/hotyq_three_fourCons_fourimg.png";
import hotyq_four_title from "../../../style/img/hotyq_four_title.png";
import hotyq_four_bg from "../../../style/img/hotyq_four_bg.png";
import hotyq_four_cons from "../../../style/img/hotyq_four_cons.png";
import hotyq_four_words from "../../../style/img/hotyq_four_words.png";
import hotyq_four_bottombg from "../../../style/img/hotyq_four_bottombg.png";
import hotyq_five_bottombg from "../../../style/img/hotyq_five_bottombg.png";
import hotyq_five_cons from "../../../style/img/hotyq_five_cons.png";
import hotyq_fiveTitle from "../../../style/img/hotyq_five_title.png";
import hotyq_sixTitle from "../../../style/img/hotyq_six_title.png";
import hotyq_six_consOne from "../../../style/img/hotyq_six_consOne.png";
import hotyq_six_consTwo from "../../../style/img/hotyq_six_consTwo.png";
import hotyq_six_consThree from "../../../style/img/hotyq_six_consThree.png";
import hotyq_six_consFour from "../../../style/img/hotyq_six_consFour.png";
import hotyq_six_consFive from "../../../style/img/hotyq_six_consFive.png";
import hotyq_six_consSix from "../../../style/img/hotyq_six_consSix.png";
import hotyq_six_bottombg from "../../../style/img/hotyq_six_bottombg.png";
const Carousel=require('nuka-carousel');
const style = require('../../../style/hotyq.scss');
export class Hotyq extends Component {
  constructor(props, context) {
	 super(props, context)
    this.state={ slideIndex: 0 }
  }
  beforeSlide(from, to) {
  }
  beforeSlide(from, to) {
    console.log(`slide from ${from} to ${to}`);
      if(to==5){
	  	document.getElementsByClassName('slider-decorator-1')[0].style.display='none';
	  }else{
	  	document.getElementsByClassName('slider-decorator-1')[0].style.display='';
	  }
  }
  slideTo(index) {
  }
  componentWillMount() {
    this.clientHeight = document.documentElement.clientHeight;
  }
  render() {
  	const settings = {
      dots: false,
      vertical:true,
      selectedIndex: this.state.slideIndex,
      beforeChange: this.beforeSlide,
      afterChange: this.slideTo,
      beforeSlide:this.beforeSlide,
      edgeEasing:'easeOutCirc'
    };
    const flexItemStyle ={
  		height: `${this.clientHeight -50}px`
  	}
    return (
       <div className="hotyq_box">
	      <Carousel {...settings} >
	      	<div className="hotyq_oneBox" style={flexItemStyle}>
	      		<NavSectionOne />
	      	</div>
	      	<div className="hotyq_TwoBox" style={flexItemStyle}>
	      		<NavSectionTwo />
	      	</div>
	      	<div className="hotyq_ThreeBox" style={flexItemStyle}>
	      		<NavSectionThree />
	      	</div>
	      	<div className="hotyq_FourBox" style={flexItemStyle}>
	      		<NavSectionFour />
	      	</div>
	      	<div className="hotyq_FiveBox" style={flexItemStyle}>
	      		<NavSectionFive />
	      	</div>
	      	<div className="hotyq_SixBox" style={flexItemStyle}>
	      		<NavSectionSix />
	      	</div>
	      </Carousel>

       </div>
    )
  }
}

//1频
var NavSectionOne= React.createClass({
	render: function(){
		return (
			<div>
				<div className="hotyq_oneTitle">
					<img src={hotyq_oneTitle} />
				</div>
				<div className="hotyq_one_phone">
					<img src={hotyq_one_phone} />
				</div>
				<div className="hotyq_onebg_wave">
	          		<img src={hotyq_onebg_wave} />
	          	</div>
	          	<div className="hotyq_one_bottomdiv"></div>
	         	<div className="Hotyq_downBox">
	         		<a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.hotyq.app.android">
						<p>下载红演圈APP</p>
					</a>
					<div className="afterpage" onClick = {this.changeClick}>
						<i className="iconfont down">&#xe610;</i>
					</div>
				</div>
			</div>
		)
	}
})
//2频
var NavSectionTwo= React.createClass({
	render: function(){
		var twoData = [
		[hotyq_two_consLogo,"hotyq_two_consLogo"],[hotyq_two_consOne,"hotyq_two_consOne"],[hotyq_two_consTwo,"hotyq_two_consTwo"],
		[hotyq_two_consThree,"hotyq_two_consThree"],[hotyq_two_consFour,"hotyq_two_consFour"],[hotyq_two_consFive,"hotyq_two_consFive"],
		[hotyq_two_consSix,"hotyq_two_consSix"],[hotyq_two_consSeven,"hotyq_two_consSeven"],[hotyq_two_consEight,"hotyq_two_consEight"],[hotyq_two_consNine,"hotyq_two_consNine"]]
		return (
			<div>
				<div className="hotyq_twoTitle">
					<img src={hotyq_twoTitle} />
				</div>
				<div className="hotyq_two_iphoneBox">
					<img src={hotyq_two_iphone} className="hotyq_two_iphone"/>
					<div className="hotyq_squareOne"></div>
					<div className="hotyq_squareTwo"></div>
					<div className="hotyq_squareThree"></div>
					<div className="hotyq_squareFour"></div>
					<div className="hotyq_squareFive"></div>
					{
						twoData.map(function(item,index){
							return (
								<img src={item[0]} className={item[1]} key={`twoData${index}`}/>
							)
						})
					}
				</div>
				<div className="hotyq_twobg_air">
              		<img src={hotyq_twobg_air} />
              	</div>
              	<div className="Hotyq_downBox">
					<a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.hotyq.app.android">
						<p>下载红演圈APP</p>
					</a>
					<div className="afterpage" onClick = {this.changeClick}>
						<i className="iconfont down">&#xe610;</i>
					</div>
				</div>
			</div>
		)
	}
})
//3频
var NavSectionThree= React.createClass({
	render: function(){
		return (
			<div>
				<div className="hotyq_threeTitle">
					<img src={hotyq_threeTitle} />
				</div>
				<div className="hotyq_threeCons">
					<ul className="hotyq_three_oneCons">
						<li>
							<img src={hotyq_three_oneCons_oneimg} />
						</li>
						<li>
							<img src={hotyq_three_oneCons_threeimg} />
						</li>
						<li>
							<img src={hotyq_three_oneCons_twoimg} />
						</li>
					</ul>
					<div className="hotyq_three_twoCons">
						<img src={hotyq_three_twoCons_oneimg} />
					</div>
					<ul className="hotyq_three_threeCons">
						<li>
							<img src={hotyq_three_threeCons_oneimg} />
						</li>
						<li>
							<img src={hotyq_three_threeCons_twoimg} />
						</li>
						<li>
							<img src={hotyq_three_threeCons_threeimg} />
						</li>
					</ul>
					<ul className="hotyq_three_fourCons">
						<li>
							<img src={hotyq_three_fourCons_oneimg} />
						</li>
						<li>
							<img src={hotyq_three_fourCons_twoimg} />
						</li>
						<li>
							<img src={hotyq_three_fourCons_threeimg} />
						</li>
						<li>
							<img src={hotyq_three_fourCons_fourimg} />
						</li>
					</ul>
				</div>
				<div className="Hotyq_downBox">
					<a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.hotyq.app.android">
						<p>下载红演圈APP</p>
					</a>
					<div className="afterpage" onClick = {this.changeClick}>
						<i className="iconfont down">&#xe610;</i>
					</div>
				</div>
			</div>
		)
	}
})
//4频
var NavSectionFour= React.createClass({
	render: function(){
		return (
			<div>
				<div className="hotyq_four_Title">
					<img src={hotyq_four_title} />
				</div>
				<img src={hotyq_four_cons} className="hotyq_four_cons" />
				<img src={hotyq_four_words} className="hotyq_four_words" />
				<div className="Hotyq_downBox">
					<a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.hotyq.app.android">
						<p>下载红演圈APP</p>
					</a>
					<div className="afterpage" onClick = {this.changeClick}>
						<i className="iconfont down">&#xe610;</i>
					</div>
				</div>
			</div>
		)
	}
})
//5频
var NavSectionFive= React.createClass({
	render: function(){
		return (
			<div>
				<div className="hotyq_five_Title">
					<img src={hotyq_fiveTitle} />
				</div>
				<img src={hotyq_five_cons} className="hotyq_five_cons" />
				<img src={hotyq_five_bottombg} className="hotyq_five_bottombg"/>
				
				<div className="Hotyq_downBox">
					<a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.hotyq.app.android">
						<p>下载红演圈APP</p>
					</a>
					<div className="afterpage" onClick = {this.changeClick}>
						<i className="iconfont down">&#xe610;</i>
					</div>
				</div>
			</div>
		)
	}
})
//6频
var NavSectionSix= React.createClass({
	render: function(){
		var sixData = [hotyq_six_consOne,hotyq_six_consTwo,hotyq_six_consThree,hotyq_six_consFour,hotyq_six_consFive,hotyq_six_consSix]
		return (
			<div>
				<div className="hotyq_sixTitle">
					<img src={hotyq_sixTitle} />
				</div>
				<ul className="hotyq_six_cons">
				{
					sixData.map(function(item,index){
						return (
							<li key={`sixData${index}`}>
								<img src={item} />
							</li>
						)
					})
				}
				</ul>
				<img src={hotyq_six_bottombg} className="hotyq_six_bottombg" />
				<div className="Hotyq_downBox">
					<a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.hotyq.app.android">
						<p>下载红演圈APP</p>
					</a>
				</div>
			</div>
		)
	}
})
module.exports = Hotyq
