import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { selectHomeList , selectReportList , selectInfoList } from '../actions'
import Information from '../components/Information'
import GlobalNav from '../components/GlobalNav'
import Footer from '../components/Footer'
//import { Button } from 'antd-mobile'
//import { Carousel } from 'antd-mobile'
import classNames from 'classnames'
import banner_1 from '../style/img/banner_1.jpg'
import banner_2 from '../style/img/banner_2.jpg'
import banner_3 from '../style/img/banner_3.jpg'
import banner_4 from '../style/img/banner_4.jpg'
import banner_5 from '../style/img/banner_5.jpg'
import hotyq from '../style/img/hotyq.png'
import hotmi from '../style/img/hotmi.png'
import hotfan from '../style/img/hotfan.png'

const Carousel = require('antd-mobile/lib/carousel')
//require('antd-mobile/dist/antd-mobile.min.css')

class HomePage extends Component {
  render() {
  	const { infoList, reportList } = this.props
  	const style = require('../style/home.page')
    return (
    	<div className={`home-page ${style.homePage}`}>
    		<div className={style.main}>
    			<div className={style.carousel}>
    				<Carousel autoplay={true} infinite={true}>
	    			
		    			<a href='http://hm.hotyq.com/html5/view/service/service-detail.html?serviceId=364&serviceCateId=limitTime'><img src={banner_1} className={style.bannerItem} /></a>
		    			<a href='http://hm.hotyq.com/html5/view/service/service-detail.html?serviceId=391&serviceCateId=34'><img src={banner_5} className={style.bannerItem} /></a>
		    			<a href='http://money.china.com/fin/xf/201611/11/5543033.html'><img src={banner_2} className={style.bannerItem} /></a>
		    			<Link to='/hotfan'><img src={banner_3} className={style.bannerItem} /></Link>
		    			<a href='http://e.gmw.cn/2016-03/04/content_19173399.htm'><img src={banner_4} className={style.bannerItem} /></a>
			      </Carousel>
    			</div>
		      <div className={style.pictureNav}>
		      	<Link to="/hotyq" >
		      		<img src={hotyq} />
		      		<p>红演圈</p>
		      	</Link>
		      	<Link to="/hotmi" >
		      		<img src={hotmi} />
		      		<p>红蜜</p>
		      	</Link>
		      	<Link to="/hotfan" >
		      		<img src={hotfan} />
		      		<p>红贩</p>
		      	</Link>
		      </div>
					<Information list={reportList} type='report' title='媒体报道' />
					<Information list={infoList} type='info' title='红演资讯' />
    		</div>
				<Footer />
    	</div>
    )
  }
  constructor(props, context) {
    super(props, context)
    this.props.dispatch(selectHomeList())
    //this.props.dispatch(selectReportList('report',1))
    //this.props.dispatch(selectInfoList('info',1))
  }
  componentWillReceiveProps(){
  	
  }
  componentWillMount(){
  	
  }
  componentDidMount() {
  	addBaiduAnchor()
  }
}

function mapStateToProps(state, ownProps) {
	const { selectHomeList } = state
	const infoList = selectHomeList.infoList || []
	const reportList = selectHomeList.reportList || []
  return {
  	infoList,
  	reportList
  }
}

export default connect(mapStateToProps)(HomePage)
