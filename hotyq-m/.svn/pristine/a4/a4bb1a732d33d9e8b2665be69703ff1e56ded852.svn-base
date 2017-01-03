import React, { Component } from 'react'
import { Link } from 'react-router'
import Footer from '../../../components/Footer'
import style from '../../../style/hotFan.scss';
import firTitImg from '../../../style/img/hotfan-firtit.png';
import secTitImg from '../../../style/img/hotfan-sectit.png';
import secPhoneImg from '../../../style/img/hotfan-secphone.png';
import secDownImg from '../../../style/img/hotfan-secdown.png';
import secBotImg from '../../../style/img/hotfan-secbot.png';
import thrTitImg from '../../../style/img/hotfan-thrtit.png';
import thrLeftImg from '../../../style/img/hotfan-thrleft.png';
import thrRightImg from '../../../style/img/hotfan-thrright.png';
import thrBotImg from '../../../style/img/hotfan-thrbot.png';
import fourTitImg from '../../../style/img/hotfan-fourtit.png';
import fourConImg from '../../../style/img/hotfan-fourCon.png';
const Icon=require('antd-mobile/lib/icon');
const Carousel=require('nuka-carousel');
class Hotfan extends Component {
  beforeSlide(from, to) {
    console.log(`slide from ${from} to ${to}`);
      if(to==3){
		  	document.getElementsByClassName('slider-decorator-1')[0].style.display='none';
		  }else{
		  	document.getElementsByClassName('slider-decorator-1')[0].style.display='';
		  }
		 
  }

  slideTo(index) {
    console.log('slide to', index);
  }
  componentWillMount() {
    this.clientHeight = document.documentElement.clientHeight;
  }
  render() {
  	const flexItemStyle ={
  		height: `${this.clientHeight -50}px`,
  		overflowY:'hidden'
  	}
  	const settings = {
      dots: false,
      infinite: true,
      vertical:true,
      edgeEasing:'easeOutCirc',
      selectedIndex: this.current,
      beforeSlide: this.beforeSlide,
      afterChange: this.slideTo,
    };
    return (
       <div>
       {this.props.children ||
          
        <div className={`pagination-container hotfan ${style.wrap}`} ref="wrap" id="aa" >
            <Carousel {...settings}>
              <div 
                className="flex-container-justify" style={flexItemStyle} className={style.screenFir} vertical={true} >
                <div className={style.conFir} >
                	<div>
                		<img src={firTitImg} /> 
                	</div>
                	<p>
                		新媒红贩（北京）网络科技有限公司是由红演圈科技和新媒诚品合资成立，专注于精品影游交易的互联网中介公司。公司拥有高品质，高热度作品版权源头。一对一为投资人提供有料，并且合适投资人风格方向的版权作品。版权交易的主要流程为线上曝光，线下交易。线上对我们拥有版权作品进行展示；线下进行版权拍卖和严格的版权交易流程。
                	</p>
                </div>
                <div className={style.secDown}>
                 <p><a href="javescript:;" ref="next" className="nextButton" data-index="2"><Icon type="down" /></a></p>
                </div>
              </div>
              <div 
                className={`flex-container-justify ${style.screenSec}`}  style={flexItemStyle} >
                <div className={style.secTit}><img src={secTitImg} /></div>
                <div className={style.secPhone}><img src={secPhoneImg} /></div>
                <div className={style.secBot}><img src={secBotImg} /></div>
                <div className={style.secDown}>
                 <p><a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.hotfan.app"><img src={secDownImg} /></a></p>
                 <p><a href="javescript:;" ref="next" className="nextButton" data-index="2"><Icon type="down" /></a></p>
                </div>
              </div>
              <div 
                className={`flex-container-justify ${style.screenThr}`} style={flexItemStyle}  onClick={this.changeTop}>
                <div className={style.tit}><img src={thrTitImg} /></div>
                <div className={style.conImg}><img src={thrLeftImg} /><img src={thrRightImg} /><img src={thrBotImg} /></div>
                <div className={style.secDown}>
                  <p><a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.hotfan.app"><img src={secDownImg} /></a></p>
                  <p><a href="javescript:;" className="nextButton" data-index="3"><Icon type="down" /></a></p>
                </div>
              </div>
              <div 
                className={`flex-container-justify ${style.screenFour}`} style={flexItemStyle}>
               <div className={style.tit}><img src={fourTitImg} /></div>
               <div className={style.con}><img src={fourConImg} /></div>
               
               <div className={style.all} key="all"><Link  to="/hotfan/moreList" >查看更多<Icon type="down" /></Link></div>
              </div>
            </Carousel>
          
        </div>
        } 
      </div>
    )
  }
  componentDidMount() {
  		var changeWrap=this.refs.wrap; 
  		console.log("die")
  }
}
module.exports = Hotfan
