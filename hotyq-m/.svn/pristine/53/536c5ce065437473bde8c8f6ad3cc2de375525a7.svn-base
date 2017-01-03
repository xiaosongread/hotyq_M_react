import React, { Component } from 'react'
import { connect } from 'react-redux'
import Footer from '../../../components/Footer'
import style from '../../../style/hotMi.scss';
import firTitImg from '../../../style/img/hotmi-firtit.png';
import firConPhone from  '../../../style/img/hotmi-firpho.png';
import firShadow from '../../../style/img/hotmi-firshadow.png';
import secTitImg from '../../../style/img/hotmi-sectit.png';
import secImglt from '../../../style/img/hotmi-seclt.png';
import secImglb from '../../../style/img/hotmi-seclb.png';
import secImgrt from '../../../style/img/hotmi-secrt.png';
import secImgrb from '../../../style/img/hotmi-secrb.png';
import thrTitImg from '../../../style/img/hotmi-thrtit.png';
import thrBotImg from '../../../style/img/hotfan-thrbot.png';
import fourTitImg from '../../../style/img/hotmi-fourtit.png';
import fourConImg from '../../../style/img/hotfan-fourCon.png';
import secDownImg from '../../../style/img/hotfan-secdown.png';
import fourLt from '../../../style/img/hotmi-fourconlt.png';
import fourLb from '../../../style/img/hotmi-fourlb.png';
import fourRt from '../../../style/img/hotmi-fourrt.png';
import fourRb from '../../../style/img/hotmi-fourrb.png';
import tel from '../../../style/img/hotmi-tel.png';
import order from '../../../style/img/hotmi-order.png';
import order2 from '../../../style/img/hotmi-order2.png';
const Icon=require('antd-mobile/lib/icon');
const Carousel=require('nuka-carousel');
window.React = React;
class Hotmi extends Component {
	constructor(props, context) {
    super(props, context)
    this.state={ slideIndex: 0 }
 }
  beforeSlide(from, to) {
	  if(to==3){
	  	document.getElementsByClassName('slider-decorator-1')[0].style.display='none';
	  }else{
	  	document.getElementsByClassName('slider-decorator-1')[0].style.display='';
	  }
  	
  }
  afterSlide(index) {
  }
  componentWillMount() {
    this.clientHeight = document.documentElement.clientHeight;
  }
  mixins: [Carousel.ControllerMixin]
  render() {
  	const flexItemStyle ={
  		height: `${this.clientHeight -50}px`,
  		overflowY:'hidden'
  	}
  	const jupmUrl='http://hm.hotyq.com/html5/view/service/service-list-sixteen.html';
  	const settings = {
      dots: false,
      vertical:true,
      selectedIndex: this.state.slideIndex,
      beforeSlide: this.beforeSlide,
      afterSlide: this.afterSlide,
      edgeEasing:'easeOutCirc'
    };
    return (
       <div>
        <div className={`pagination-container hotmi ${style.wrap}`} ref="wrap" id="aa" >
            <Carousel {...settings} ref="carousel"
          slideIndex={this.state.slideIndex}
          afterSlide={newSlideIndex => this.setState({ slideIndex: newSlideIndex })}>
              <div 
                className="flex-container-justify" style={flexItemStyle} className={style.screenFir} >
                <div className={style.conFir}>
                	<div className={style.firTit}>
                		<img src={firTitImg} /> 
                	</div>
                	<p className={style.firCon}>
                		<img src={firConPhone} /> 
                	</p>
                </div>
                <div className={style.firShadow}>
                	<img src={firShadow} />
                </div>
                 <div className={style.secDown}>
	                 <p><a href={jupmUrl}><img src={order2} /></a></p>
	                 <p><a href="javescript:;" onClick={() => this.setState({ slideIndex: 1 })} ref="next" className="nextButton" data-index="1"><Icon type="down" /></a></p>
	               </div>
              </div>
              <div 
                className={`flex-container-justify ${style.screenSec}`}  style={flexItemStyle}  >
                <div className={style.secTit}><img src={secTitImg} /></div>
                <ul>
                	<li><span>主持</span><img src={secImglt}/></li>
                	<li><span>模特</span><img src={secImglb}/></li>
                	<li><span>歌舞</span><img src={secImgrt}/></li>
                	<li><span>乐器表演</span><img src={secImgrb}/></li>
                </ul>
                <div className={style.secDown}>
                 <p><a href={jupmUrl}><img src={order} /></a></p>
                 <p><a href="javescript:;" onClick={() => this.setState({ slideIndex: 2 })} ref="next" className="nextButton" data-index="2"><Icon type="down" /></a></p>
                </div>
              </div>
              <div 
                className={`flex-container-justify ${style.screenThr}`} style={flexItemStyle}  >
                <div className={style.tit}><img src={thrTitImg} /></div>
                <div className={style.secDown}>
                  <p><a href={jupmUrl}><img src={order} /></a></p>
                  <p><a href="javescript:;" onClick={() => this.setState({ slideIndex: 3 })} className="nextButton" data-index="3"><Icon type="down" /></a></p>
                </div>
              </div>
              <div 
                className={`flex-container-justify ${style.screenFour}`} style={flexItemStyle} data-index="2" >
               <div className={style.tit}><img src={fourTitImg} /></div>
               <ul>
               	<li>
               		<p><img src={fourLt} /></p>
               		<dl>
               			<dt>海量一手</dt>
               			<dd>优质海量艺人<br/>服务类比丰富，档次多样</dd>
               		</dl>
               	</li><li>
               		<p><img src={fourLb} /></p>
               		<dl>
               			<dt>超值保障</dt>
               			<dd>市场超低价格<br/>艺人接单，省去中间环节</dd>
               		</dl>
               	</li><li>
               		<p><img src={fourRt} /></p>
               		<dl>
               			<dt>专业安全</dt>
               			<dd>人保保障安全<br/>安心预约，享受零风险</dd>
               		</dl>
               	</li><li>
               		<p><img src={fourRb} /></p>
               		<dl>
               			<dt>资料保真</dt>
               			<dd>通过红蜜面试<br/>照片保真，视频保真</dd>
               		</dl>
               	</li>
               </ul>
               <div className={style.tel}><img src={tel}/></div>
                <div className={style.secDown}>
                 <p><a href={jupmUrl}><img src={order} /></a></p>
                </div>
              </div>
            </Carousel>
          
        </div>
      </div>
    )
  }
  componentDidMount() {
  		var changeWrap=this.refs.wrap; 
  		console.log("die")
  		
  }
}
function mapStateToProps(state, ownProps) {
	return {
		current: 0, slideIndex: 2
	}
}

module.exports = connect(mapStateToProps)(Hotmi)
