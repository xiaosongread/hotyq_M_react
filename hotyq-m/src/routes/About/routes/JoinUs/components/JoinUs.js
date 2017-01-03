import React, { Component } from 'react'
import activity_small1 from '../../../../../style/img/activity_small1.jpg';
import activity_small2 from '../../../../../style/img/activity_small2.jpg';
import activity_small3 from '../../../../../style/img/activity_small3.jpg';
import activity_small4 from '../../../../../style/img/activity_small4.jpg';
import activity_small5 from '../../../../../style/img/activity_small5.jpg';
import activity_small6 from '../../../../../style/img/activity_small6.jpg';
import activity_small7 from '../../../../../style/img/activity_small7.jpg';
import activity_small8 from '../../../../../style/img/activity_small8.jpg';
import hotyq_laGou from '../../../../../style/img/hotyq_laGou.jpg';
import hotyq_zhiLian from '../../../../../style/img/hotyq_zhiLian.jpg';
import joinUs_bigImg_1 from '../../../../../style/img/joinUs_bigImg_1.jpg';
import joinUs_bigImg_2 from '../../../../../style/img/joinUs_bigImg_2.jpg';
import joinUs_bigImg_3 from '../../../../../style/img/joinUs_bigImg_3.jpg';
import joinUs_bigImg_4 from '../../../../../style/img/joinUs_bigImg_4.jpg';
import joinUs_bigImg_5 from '../../../../../style/img/joinUs_bigImg_5.jpg';
import joinUs_bigImg_6 from '../../../../../style/img/joinUs_bigImg_6.jpg';
import joinUs_bigImg_7 from '../../../../../style/img/joinUs_bigImg_7.jpg';
import joinUs_bigImg_8 from '../../../../../style/img/joinUs_bigImg_8.jpg';
const Carousel=require('nuka-carousel');
//import { Carousel } from 'antd-mobile';
//const Carousel = require('antd-mobile/lib/carousel')
const style = require('../../../../../style/about_joinus');
class JoinUs extends Component {
  constructor(props, context) {
	 super(props, context)
	 this.showBigImg = this.showBigImg.bind(this)
	 this.getChildState = this.getChildState.bind(this)
	 this.state={ display: 0 }
  }
  beforeSlide(from, to) {
    console.log(`slide from ${from} to ${to}`);
  }
  slideTo(index) {
    console.log('slide to', index);
  }
  getChildState(newStateDisplay){
    this.setState({
    		display:newStateDisplay
    })
    document.documentElement.style.position = document.body.style.position = "";
  }
  showBigImg(e){
  		var nowPage = e.currentTarget.getAttribute("data-index");
  		document.documentElement.scrollTop = document.body.scrollTop =0;
		document.documentElement.style.position = document.body.style.position = "fixed";
	  	this.setState({
	  		display:1,
	  		slideIndex:parseInt(nowPage)
	  	})
	  	console.log(this.state.display)
  }
  render() {
    return (
    		<div className="joinUsBigBox">
			<div className="joinUs">
	      		<p>我们正在寻找这样的你：年轻而踏实好学，热情且专业，细致而又不失想象力。</p>
				<p>当然，我们也非常欢迎经验丰富同时还拥有一颗年轻的心的你。</p>
				<p>我们拥有尊重个人、鼓励创新的企业文化，有积极向上、轻松活泼的工作氛围。</p>
				<p>我们的穿着不必严肃，但我们的态度和行动却始终认真而执着。</p>
				<p>除了提供五险一金之外，</p>
				<p>我们还定期举办各种团队活动，公司旅游、生日会生日礼物、下午茶是标配，</p>
				<p>另外还有各种零食饮料、生鲜水果不间断提供哦~</p>
				<ul>
					<li>
						<img src={activity_small1} onClick={this.showBigImg} data-index={0}/>
					</li>
					<li>
						<img src={activity_small2} onClick={this.showBigImg} data-index={1}/>
					</li>
					<li>
						<img src={activity_small3} onClick={this.showBigImg} data-index={2}/>
					</li>
					<li>
						<img src={activity_small4} onClick={this.showBigImg} data-index={3}/>
					</li>
					<li>
						<img src={activity_small5} onClick={this.showBigImg} data-index={4}/>
					</li>
					<li>
						<img src={activity_small6} onClick={this.showBigImg} data-index={5}/>
					</li>
					<li>
						<img src={activity_small7} onClick={this.showBigImg} data-index={6}/>
					</li>
					<li>
						<img src={activity_small8} onClick={this.showBigImg} data-index={7}/>
					</li>
				</ul>
				<p>加入我们，你会发现：这里没有森严的等级制度，</p>
				<p>只有一群能嗨、敢拼的年轻人相互学习一起成长；</p>
				<p>这里的每个人都会尽力燃烧自己的小宇宙，</p>
				<p>让我们的大集体变得更加不可思议。</p>
				<p>在这里，每天都经历着工作生活的丰富多彩，每天都在和小伙伴们一起实现新的突破！</p>
				<p>来吧，加入红演圈，我们一起成就梦想。</p>
				<p>简历投递至：hr@hotyq.com</p>
				<div className="hotyq_recruitment">
					<span>具体岗位:</span>
					<a href="https://www.lagou.com/gongsi/47523.html" target="_self"><img src={hotyq_laGou} /></a> 
					<a href="http://company.zhaopin.com/CC208309383.htm" target="_self"><img src={hotyq_zhiLian} /></a> 
				</div>
			</div>
			{
				this.state.display == 1 ? <MoreBigImg toNowPage ={this.state.slideIndex} parentStateDisplay={this.state.display} getChildState={this.getChildState}/> :''
			}
		</div>
    )
  }
  componentDidMount() {
  	document.documentElement.style.position = document.body.style.position = "relative";
  	window.scrollTo(0,0)
  }
  componentWillUnmount(){
  	
  }
}
var MoreBigImg = React.createClass({
	  getInitialState() {
	    return {
	      slideIndex:this.props.toNowPage,
	      display: this.props.parentStateDisplay
	    };
	  },
	  componentWillMount() {
	    this.clientHeight = document.documentElement.clientHeight;
	  },
	  beforeSlide(from, to) {
	    console.log(`slide from ${from} to ${to}`);
	  },
	  slideTo(index) {
	    console.log('slide to', index);
	  },
	  showBigImg(){
	  	this.setState({
	  		display:0
	  	})
	  	this.props.getChildState(0)
	  },
	  render(){
	  	const settings = {
	      dots: true,
	      autoplay: false,
	      infinite: false,
	      selectedIndex: this.state.slideIndex,
	      beforeChange: this.beforeSlide,
	      afterChange: this.slideTo,
	      edgeEasing:'easeOutCirc'
	    };
	    const flexItemStyle ={
  			height: `7.6rem`
  		};
  		const bigImgListConsStyle ={
  			marginTop: `${(this.clientHeight * 2 / 100 - 7.6) / 2}rem`
  		};
	    const bigImgBgStyle ={
  			height: `${this.clientHeight}px`
  		};
	  	return (
	  		<div className="TeamIntroduction_BigImgBox" style={bigImgBgStyle}>
				<div className="TeamIntroduction_bg" style={bigImgBgStyle} onClick={this.showBigImg}></div>
				<div className="TeamIntroduction_cons" style={bigImgListConsStyle}>
					<div className="pagination-container" >
			            <Carousel {...settings} slideIndex={this.state.slideIndex} afterSlide={newSlideIndex => this.setState({ slideIndex: newSlideIndex })}>
			              <div className="flex-container-justify" style={flexItemStyle} onClick={this.showBigImg}>
			              	<div className="lookBigImg">
			              		<img src={joinUs_bigImg_1} />
			              	</div>
			              </div>
			              <div className="flex-container-justify" style={flexItemStyle} onClick={this.showBigImg}>
			                <div className="lookBigImg">
			              		<img src={joinUs_bigImg_2} />
			              	</div>
			              </div>
			              <div className="flex-container-justify" style={flexItemStyle} onClick={this.showBigImg}>
			                <div className="lookBigImg">
			              		<img src={joinUs_bigImg_3} />
			              	</div>
			              </div>
			              <div className="flex-container-justify" style={flexItemStyle} onClick={this.showBigImg}>
			                <div className="lookBigImg">
			              		<img src={joinUs_bigImg_4} />
			              	</div>
			              </div>
			              <div className="flex-container-justify" style={flexItemStyle} onClick={this.showBigImg}>
			                <div className="lookBigImg">
			              		<img src={joinUs_bigImg_5} />
			              	</div>
			              </div>
			              <div className="flex-container-justify" style={flexItemStyle} onClick={this.showBigImg}>
			                <div className="lookBigImg">
			              		<img src={joinUs_bigImg_6} />
			              	</div>
			              </div>
			              <div className="flex-container-justify" style={flexItemStyle} onClick={this.showBigImg}>
			                <div className="lookBigImg">
			              		<img src={joinUs_bigImg_7} />
			              	</div>
			              </div>
			              <div className="flex-container-justify" style={flexItemStyle} onClick={this.showBigImg}>
			                <div className="lookBigImg">
			              		<img src={joinUs_bigImg_8} />
			              	</div>
			              </div>
			            </Carousel>
			        </div>
				</div>
			</div>
	  	)
	  }
})
module.exports = JoinUs
