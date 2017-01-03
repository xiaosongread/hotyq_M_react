import React, { Component } from 'react';
import teamImg from '../../../../../style/img/teamImg.png';
import leader_bigImg_baobao from "../../../../../style/img/leader_bigImg_baobao.png";
import leader_bigImg_jiangzong from "../../../../../style/img/leader_bigImg_jiangzong.png";
import leader_bigImg_shenyue from "../../../../../style/img/leader_bigImg_shenyue.png";
import leader_bigImg_wangchao from "../../../../../style/img/leader_bigImg_wangchao.png";
import leader_bigImg_zhangqiang from "../../../../../style/img/leader_bigImg_zhangqiang.png";
import leader_bigImg_chengrui from "../../../../../style/img/leader_bigImg_chengrui.png";
const Carousel=require('nuka-carousel');
const style = require('../../../../../style/about_team')

class TeamIntroduction extends Component {
  constructor(props, context) {
	 super(props, context)
	 console.log(props)
	 console.log(context)
	 console.log(this)
	 this.showBigImg = this.showBigImg.bind(this)
	 this.getChildState = this.getChildState.bind(this)
	 this.state={ display: 0 }
  }
  getChildState(newStateDisplay){
  	document.documentElement.style.position = document.body.style.position = "";
    this.setState({
    		display:newStateDisplay
    })
  }
  showBigImg(){
  		document.documentElement.scrollTop = document.body.scrollTop =0;
		document.documentElement.style.position = document.body.style.position = "fixed";
	  	this.setState({
	  		display:1
	  	})
	  	console.log(this.state.display)
  }
  render() {
    return (
    	<div className="teamIntroductionBigBox">
		<div className="teamIntroduction" onClick={this.showBigImg}>
	     	<img src={teamImg}/> 	
	     	<p>点击查看团队团队详细资料</p>
		</div>
		{
			this.state.display == 1 ? <MoreTeamIntroduction parentStateDisplay={this.state.display} getChildState={this.getChildState}/> :''
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
var MoreTeamIntroduction = React.createClass({
	 getInitialState() {
	    return {
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
		const flexItemStyle ={
  			height: `10rem`
  		};
		const bigImgBgStyle ={
  			height: `${this.clientHeight}px`
  		};
		const TeamIntroductionConsStyle ={
  			marginTop: `${(this.clientHeight * 2 / 100 - 10) / 2}rem`
  		};
		const settings = {
	      dots: true,
	      autoplay: false,
	      infinite: true,
	      selectedIndex: this.state.current,
	      beforeChange: this.beforeSlide,
	      afterChange: this.slideTo,
	      edgeEasing:'easeOutCirc'
	    };
		return (
			<div className="TeamIntroduction_BigImgBox" style={bigImgBgStyle}>
				<div className="TeamIntroduction_bg" style={bigImgBgStyle} onClick={this.showBigImg}></div>
				<div className="TeamIntroduction_cons" style={TeamIntroductionConsStyle}>
					<div className="pagination-container" >
			            <Carousel {...settings}>
			              <div className="flex-container-justify" style={flexItemStyle} onClick={this.showBigImg}>
			                <div className="companyLeader one">
			                		<img src={leader_bigImg_baobao} />
			                		<div className="leader_bigImg_baobao_cons">
			                			<p>创始人&董事长</p>
			                			<p>鲍啸峰</p>
			                			<div className="leader_bigImg_baobao_introduce">
			                				<p>浙江宁波人，毕业于对外经济贸易大学国贸专业，连续10年创业者，曾参与创办全国青少年成长励志营和君和天下知识产权，多年服务腾讯、百度、华谊兄弟、万达文化、乐视、优酷、青青树等知名文化娱乐公司。</p>
			                				<p>现任北京市朝阳区政协委员、北京市青年联合会委员、首都文化产业协会常务理事、首都青创联盟副理事长、北京市朝阳区工商联会员、北京市朝阳区青年联合会委员、北京市怀柔区青年联合会委员。</p>
			                			</div>
			                		</div>
			                </div>
			              </div>
			              <div className="flex-container-justify" style={flexItemStyle} onClick={this.showBigImg}>
			                <div className="companyLeader two">
			                		<img src={leader_bigImg_jiangzong} />
			                		<div className="leader_bigImg_baobao_cons">
			                			<p>联合创始人&CEO</p>
			                			<p>姜海</p>
			                			<div className="leader_bigImg_baobao_introduce">
			                				<p>中国农业大学管理专业学士、文化部国家网络文化标准化委员会委员、参与创办音乐网站ting365.com；投资创立闪客帝国，引入ADOBE投资；参与创办君和天下知识产权和战略咨询公司，任高级合伙人。拥有超过10年的互联网和娱乐项目运作经验。</p>
			                			</div>
			                		</div>
			                </div>
			              </div>
			              <div className="flex-container-justify" style={flexItemStyle} onClick={this.showBigImg}>
			                <div className="companyLeader three">
			                		<img src={leader_bigImg_wangchao}/>
			                		<div className="leader_bigImg_baobao_cons">
			                			<p>红蜜副总裁</p>
			                			<p>王朝</p>
			                			<div className="leader_bigImg_baobao_introduce">
			                				<p>毕业于UIBE，连续创业者。创业是一种心态，我一直在路上。</p>
			                			</div>
			                		</div>
			                </div>
			              </div>
			              <div className="flex-container-justify" style={flexItemStyle} onClick={this.showBigImg}>
			                <div className="companyLeader three">
			                		<img src={leader_bigImg_shenyue} />
			                		<div className="leader_bigImg_baobao_cons">
			                			<p>产品VP</p>
			                			<p>申悦</p>
			                			<div className="leader_bigImg_baobao_introduce">
			                				<p>从事产品经理5年，具有开发和UI设计经验，历任中兴通讯开发工程师，网易、e代驾高级产品经理。拥有通信设备制造、云计算、移动互联网、O2O行业经验。</p>
			                			</div>
			                		</div>
			                </div>
			              </div>
			              <div className="flex-container-justify" style={flexItemStyle} onClick={this.showBigImg}>
			                <div className="companyLeader three">
			                		<img src={leader_bigImg_chengrui} />
			                		<div className="leader_bigImg_baobao_cons">
			                			<p>设计总监</p>
			                			<p>陈锐</p>
			                			<div className="leader_bigImg_baobao_introduce">
			                				<p>从事广告设计期间，服务过三星、联想HTC、中粮、奔驰等客户。从事视频包装相关设计，服务过CCTV3、CCTV9、BTV等相关栏目。</p>
			                			</div>
			                		</div>
			                </div>
			              </div>
			              <div className="flex-container-justify" style={flexItemStyle} onClick={this.showBigImg}>
			                <div className="companyLeader three">
			                		<img src={leader_bigImg_zhangqiang} />
			                		<div className="leader_bigImg_baobao_cons">
			                			<p>CTO</p>
			                			<p>张强</p>
			                			<div className="leader_bigImg_baobao_introduce">
			                				<p>曾任职于汇智互联、华通人、小马金融等公司，担任近6年的项目经理，在电商、银行、保险、航天等多个行业领域带领团队研发。</p>
			                			</div>
			                		</div>
			                </div>
			              </div>
			            </Carousel>
			        </div>
				</div>
			</div>
		)
	}
})
module.exports = TeamIntroduction
