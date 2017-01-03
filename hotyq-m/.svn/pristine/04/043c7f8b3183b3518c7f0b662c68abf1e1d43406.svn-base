import React, { Component } from 'react'
import about_award_small1 from '../../../../../style/img/about_award_small1.jpg';
import about_award_small2 from '../../../../../style/img/about_award_small2.jpg';
import about_award_small3 from '../../../../../style/img/about_award_small3.jpg';
import about_award_small4 from '../../../../../style/img/about_award_small4.jpg';
import about_award_small5 from '../../../../../style/img/about_award_small5.jpg';
import about_award_small6 from '../../../../../style/img/about_award_small6.jpg';
import about_award_small7 from '../../../../../style/img/about_award_small7.jpg';
import about_award_small8 from '../../../../../style/img/about_award_small8.jpg';
import about_award_small9 from '../../../../../style/img/about_award_small9.jpg';
import leader_baobao from '../../../../../style/img/leader_baobao.png';
import topLeft from '../../../../../style/img/topLeft.png';
import topRight from '../../../../../style/img/topRight.png';
import bottomLeft from '../../../../../style/img/bottomLeft.png';
import bottomRight from '../../../../../style/img/bottomRight.png';

import companyProfile_bigImg_1 from '../../../../../style/img/companyProfile_bigImg_1.jpg';
import companyProfile_bigImg_2 from '../../../../../style/img/companyProfile_bigImg_2.jpg';
import companyProfile_bigImg_3 from '../../../../../style/img/companyProfile_bigImg_3.jpg';
import companyProfile_bigImg_4 from '../../../../../style/img/companyProfile_bigImg_4.jpg';
import companyProfile_bigImg_5 from '../../../../../style/img/companyProfile_bigImg_5.jpg';
import companyProfile_bigImg_6 from '../../../../../style/img/companyProfile_bigImg_6.jpg';
import companyProfile_bigImg_7 from '../../../../../style/img/companyProfile_bigImg_7.jpg';
import companyProfile_bigImg_8 from '../../../../../style/img/companyProfile_bigImg_8.jpg';
import companyProfile_bigImg_9 from '../../../../../style/img/companyProfile_bigImg_9.jpg';
import baobao_fenmian from '../../../../../style/img/baobao_fenmian.png';
import baobaoPlayBtn from '../../../../../style/img/baobaoPlayBtn.png';
//const Carousel=require('antd-mobile');
const Carousel = require('antd-mobile/lib/carousel')
//const Carousel=require('nuka-carousel');
import style from '../../../../../style/about.scss';
class CompanyProfile extends Component {
  constructor(props, context) {
	 super(props, context)
	 console.log(props)
	 console.log(context)
	 console.log(this)
	 this.showBigImgs = this.showBigImgs.bind(this)
	 this.getChildState = this.getChildState.bind(this)
	 this.clicks = this.clicks.bind(this)
	 this.onPlayBtn = this.onPlayBtn.bind(this)
	 this.state={ 
	 	num: 0,
	 	display: 0,
	 	playBtn:1
	 }
  }
  componentWillMount(){
  	
  }
  clicks(){
	if(this.state.num == 0){
		this.setState({
	  		num:1
	  	})
		this.refs.moreCons.style.height = 'auto';
		this.refs.moreBtn.innerHTML = "收起";
		this.refs.moreIcon.classList = 'moreIcon rotates';
	}else{
		this.setState({
	  		num:0
	  	})
		this.refs.moreCons.style.height = '3.2rem';
		this.refs.moreBtn.innerHTML = "展开全部";
		this.refs.moreIcon.classList = 'moreIcon';
	}
  }
  getChildState(newStateDisplay){
    this.setState({
    		display:newStateDisplay
    })
    document.documentElement.style.position = document.body.style.position = "";
  }
  showBigImgs(e){
		document.documentElement.scrollTop = document.body.scrollTop =0;
		document.documentElement.style.position = document.body.style.position = "fixed";
  		var nowPage = e.currentTarget.getAttribute("data-index");
	  	this.setState({
	  		display:1,
	  		slideIndex:nowPage
	  	})
  }
  onPlayBtn(){
  	document.getElementsByClassName("x-video-poster")[0].style.display = "none";
  	document.getElementById("x-video-button").style.display = "none";
	document.getElementsByClassName("kaiguan")[0].style.display = "none";
  }
  render() {
    return (
    	    <div className="companyProfileBigBox">
		<div className="companyProfile">
  			<p className="hotyq_cons" ref="moreCons">
  				<div>红演圈（北京）网络科技有限公司，成立于2014年，是目前国内移动互联网领域第一的文化演艺网红人力资源服务商，业务包括为艺人提供从业需要的各类付费产品、为影视机构寻找新人、为直播平台提供主播和网红、为大型赛事海选、为演艺培训机构招生，为老百姓生活演艺提供节目等。业务发展迅速，目前团队80余人。</div>
  				<div>陆续举办了：2015CHINA SHOWGIRL网络海选暨年度盛典、ATV2015亚洲小姐竞选中国内地网络海选、2015中国电竞女皇（英雄联盟）网络海选、第26届世界超级模特大赛网络赛区、江苏卫视《看见你的声音》网络海选、湖南卫视《超级女声》网络海选、新版《西游记》全国演员海选、北京卫视《周末喜刷刷》海选、校园艺人排行榜、2016欧洲杯足球宝贝、第十二届瑞丽模特大赛红演圈赛区、2016中国星女郎（第二季）海选、熊猫TV《Hello！ 女神》海选等全国性大型活动、赛事。并与新浪微博、腾讯视频、乐视、汉威信恒等多家行业领导力企业建立起紧密的战略伙伴关系，与爱奇艺、欢瑞世纪、瑞丽等企业达成良好的合作伙伴关系。</div>
  				<div>目前公司旗下有红演圈App、红蜜（微信公众号）、红贩App（合资）三款产品。</div>
  			</p>
  			<div className="more">
  				<span onClick={this.clicks} ref="moreBtn">全部展开</span>
  				<span className="moreIcon" ref="moreIcon"><i className="iconfont">&#xe604;</i></span>
  			</div>
  			<div className="companyAward">
  				<p>所获荣誉奖项:</p>
  				<ul>
  					<li>
  						<img src={about_award_small1} onClick={this.showBigImgs} data-index="0"/>
  					</li>
  					<li>
  						<img src={about_award_small2} onClick={this.showBigImgs} data-index="1"/>
  					</li>
  					<li>
  						<img src={about_award_small3} onClick={this.showBigImgs} data-index="2"/>
  					</li>
  					<li>
  						<img src={about_award_small4} onClick={this.showBigImgs} data-index="3"/>
  					</li>
  					<li>
  						<img src={about_award_small5} onClick={this.showBigImgs} data-index="4"/>
  					</li>
  					<li>
  						<img src={about_award_small6} onClick={this.showBigImgs} data-index="5"/>
  					</li>
  					<li>
  						<img src={about_award_small7} onClick={this.showBigImgs} data-index="6"/>
  					</li>
  					<li>
  						<img src={about_award_small8} onClick={this.showBigImgs} data-index="7"/>
  					</li>
  					<li>
  						<img src={about_award_small9} onClick={this.showBigImgs} data-index="8"/>
  					</li>
  				</ul>
  			</div>
  			<div className="companyLeaderSpeak">
  				<p>创始人寄语:</p>
  				<div className="companyLeaderWords">
  					<img src={topLeft} className="borderCorner topLeft"/>
  					<img src={topRight} className="borderCorner topRight"/>
  					<img src={bottomLeft} className="borderCorner bottomLeft"/>
  					<img src={bottomRight} className="borderCorner bottomRight"/>
  					<div className="LeaderHeader">
  						<img src={leader_baobao} />
  					</div>
  					<p>当时创立红演圈科技的初衷，是发现国内没有一个规范透明的文化演艺人才服务市场，就像没有“e代驾”之前的代驾市场、没有“携程”之前酒店旅游消费市场一样。一方面，大量怀揣演艺梦想的年轻人找不到顺畅的职业道路，另一方面，需要演艺人才的社会大众和机构找不到合适的艺人。所以，希望通过红演圈的创立，帮助年轻人一步踏进演艺圈，帮助社会大众更快更好的找到“艺中人”。我们希望用科技改变娱乐圈信息交流的方式，用科技改变老百姓演艺消费的习惯，最终构建一个和谐的演艺人才市场，助力中国青年演艺梦想。</p>
  					<span>鲍啸峰</span>
  				</div>
  			</div>
  			
  			<div className="companyMedia">
  				<p>媒体报道:</p>
  				<div className="companyMediaBox">
  					<img src={topLeft} className="borderCorner topLeft"/>
  					<img src={topRight} className="borderCorner topRight"/>
  					<img src={bottomLeft} className="borderCorner bottomLeft"/>
  					<img src={bottomRight} className="borderCorner bottomRight"/>
  					<div id="youkuplayer" onClick={this.onPlayBtn}></div>
  					<div className="kaiguan"><img src={baobao_fenmian} className="baobao_fenmian" /></div>
  				</div>
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
  	 var ab = new YKU.Player('youkuplayer',{
			client_id: '320a457df632b818',
			vid: 'XMTgyMzEwMjA0OA==',
			autoplay: false
			
		});
  }
  componentWillUnmount(){
  	
  }
}

var MoreBigImg = React.createClass({
	  getInitialState() {
	    return {
	    	  slideIndex:parseInt(this.props.toNowPage),
	      display: this.props.parentStateDisplay
	    };
	  },
	  componentWillMount() {
	    this.clientHeight = document.documentElement.clientHeight;
	  },
	  beforeSlide(from, to) {
	    console.log(`slide from ${from} to ${to}`);
	    console.log("向前转")
	    this.setState({
	    		slideIndex:to
	    })
	  },
	  slideTo(index) {
		console.log("向后转")  	
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
	      selectedIndex: parseInt(this.props.toNowPage),
	      beforeChange: this.beforeSlide,
	      afterChange: this.slideTo
	    };
	    const flexItemStyle ={
  			height: `7.75rem`
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
						<div className="lookPage">
							<span className="nowPage">{parseInt(this.state.slideIndex) + 1}</span><span>/9</span>
						</div>
			            <Carousel {...settings}>
			              <div className="flex-container-justify" style={flexItemStyle} onClick={this.showBigImg}>
			              	<div className="lookBigImg">
			              		<img src={companyProfile_bigImg_1} />
			              	</div>
			              	<div className="BigImg_introduceCons">
			              		<p>国安创客最具国际风范奖</p>
			              	</div>
			              </div>
			              <div className="flex-container-justify" style={flexItemStyle} onClick={this.showBigImg}>
			                <div className="lookBigImg">
			              		<img src={companyProfile_bigImg_2} />
			              	</div>
			              	<div className="BigImg_introduceCons">
			              		<p>盐商杯第二届创青春中国青年创新创业大赛</p>
			              	</div>
			              </div>
			              <div className="flex-container-justify" style={flexItemStyle} onClick={this.showBigImg}>
			                <div className="lookBigImg">
			              		<img src={companyProfile_bigImg_3} />
			              	</div>
			              	<div className="BigImg_introduceCons">
			              		<p>36氪梦想合伙人梦想之星</p>
			              	</div>
			              </div>
			              <div className="flex-container-justify" style={flexItemStyle} onClick={this.showBigImg}>
			                <div className="lookBigImg">
			              		<img src={companyProfile_bigImg_4} />
			              	</div>
			              	<div className="BigImg_introduceCons">
			              		<p>首届中韩青年创新创业大赛优秀奖</p>
			              	</div>
			              </div>
			              <div className="flex-container-justify" style={flexItemStyle} onClick={this.showBigImg}>
			                <div className="lookBigImg">
			              		<img src={companyProfile_bigImg_5} />
			              	</div>
			              	<div className="BigImg_introduceCons">
			              		<p>中信国安创客杯首都青年创新创业大赛银奖</p>
			              	</div>
			              </div>
			              <div className="flex-container-justify" style={flexItemStyle} onClick={this.showBigImg}>
			                <div className="lookBigImg">
			              		<img src={companyProfile_bigImg_6} />
			              	</div>
			              	<div className="BigImg_introduceCons">
			              		<p>创客中国用实力说话</p>
			              	</div>
			              </div>
			              <div className="flex-container-justify" style={flexItemStyle} onClick={this.showBigImg}>
			                <div className="lookBigImg">
			              		<img src={companyProfile_bigImg_7} />
			              	</div>
			              	<div className="BigImg_introduceCons">
			              		<p>中国青年APP大赛铜奖</p>
			              	</div>
			              </div>
			              <div className="flex-container-justify" style={flexItemStyle} onClick={this.showBigImg}>
			                <div className="lookBigImg">
			              		<img src={companyProfile_bigImg_8} />
			              	</div>
			              	<div className="BigImg_introduceCons">
			              		<p>中国星女郎第二季战略联盟机构</p>
			              	</div>
			              </div>
			              <div className="flex-container-justify" style={flexItemStyle} onClick={this.showBigImg}>
			                <div className="lookBigImg">
			              		<img src={companyProfile_bigImg_9} />
			              	</div>
			              	<div className="BigImg_introduceCons">
			              		<p>2016世界超级模特大赛指定报名平台</p>
			              	</div>
			              </div>
			            </Carousel>
			        </div>
				</div>
			</div>
	  	)
	  }
})
module.exports = CompanyProfile
