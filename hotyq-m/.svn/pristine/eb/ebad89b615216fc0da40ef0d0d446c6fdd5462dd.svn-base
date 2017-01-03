import React, { Component , PropTypes } from 'react'
import { Link , browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { selectReportList , selectInfoList } from '../../../actions'
import Footer from '../../../components/Footer'
import ReactIScroll from 'react-iscroll'
import iScroll from 'iscroll/build/iscroll-probe'
const Button = require('antd-mobile/lib/button')

class MoreList extends Component {
  constructor(props, context) {
    super(props, context)
    const { name , page } = this.props.params
    if(!global.reportListInstall && name == 'report'){
    	this.props.dispatch(selectReportList(name,1))
    	global.reportListInstall = true
    }else if(!global.infoListInstall && name == 'info'){
    	this.props.dispatch(selectInfoList(name,1)),
    	global.infoListInstall = true
    }
    
    this.onPageChange = this.onPageChange.bind(this)
    this.onScrollEnd = this.onScrollEnd.bind(this)
    this.onScroll = this.onScroll.bind(this)
    this.showLoadingBtn = this.showLoadingBtn.bind(this)
    this.showEndBtn = this.showEndBtn.bind(this)
    this.hideLoadingBtn = this.hideLoadingBtn.bind(this)
    this.hideEndBtn = this.hideEndBtn.bind(this)
    
    this.state = {
    	options: {
        mouseWheel: true,
        scrollbars: true,
        click: true,
        startY:name == 'report' ? global.reportListScrollY : global.infoListScrollY,
        fadeScrollbars:true,
        preventDefault:true,
        probeType: 2
     }
    }
  }
  componentWillReceiveProps(){
  	
  }
  componentWillMount(){
  	
  }
  render() {
  	const style = require('../../../style/more.list')
  	const name = this.props.params.name == 'report' ? '媒体报道' : '红演资讯'
  	const { report , info } = this.props
  	const list = this.props.params.name == 'report' ? report.list : info.list
  	//console.log(list)
  	var i = 0, len = 100, listOfLi = [];
 
    for(i; i < len; i++) {
      listOfLi.push(<li key={i}>Row {i+1}</li>)
    }
    
    return (
      <div id='more-list-content' className={style.information}>
      	<ReactIScroll iScroll={iScroll}
                      options={this.state.options}
                      onBeforeScrollStart={this.onBeforeScrollStart}
				              onScrollCancel={this.onScrollCancel}
				              onScrollStart={this.onScrollStart}
				              onScroll={this.onScroll}
				              onScrollEnd={this.onScrollEnd}
				              onFlick={this.onFlick}
				              onZoomStart={this.onZoomStart}
				              onZoomEnd={this.onZoomEnd}
				              onRefresh={this.onRefresh}>
      		<div>
      			<div className={style.title}>
							<span>{name}</span>
						</div>
						{list.map((item, i) =>
				      <div className={style.infoItem} key={i}>
								{
	          			this.props.params.name == 'report'?
	          			<a href={item.url}>{item.title}</a>:
	          			<Link to={`/info/${item.id}`}>{item.title}</Link>
	          		}
						  </div>
				    )}
						<Button id='loadingBtn' ref='loadingBtn' className={style.loading} loading activeStyle={false}>上拉加载更多</Button>
						<Button id='endBtn' ref='endBtn' className={style.loading} activeStyle={false}>没有更多了</Button>
      		</div>
      		
        </ReactIScroll>
        <div id='footer' style={{display:'none'}}>
        	<Footer />
        </div>
      </div>
    )
  }
  onBeforeScrollStart(){
  }
  onScrollCancel(){
  }
  onScrollStart(){
  }
  showLoadingBtn(){
  	let loadingBtn = document.getElementById('loadingBtn')
  	loadingBtn.style.display='inline-block'
  }
  hideLoadingBtn(){
  	let loadingBtn = document.getElementById('loadingBtn')
  	loadingBtn.style.display='none'
  }
  showEndBtn(){
  	let endBtn = document.getElementById('endBtn')
  	endBtn.style.display='inline-block'
  }
  hideEndBtn(){
  	let endBtn = document.getElementById('endBtn')
  	endBtn.style.display='none'
  }
  onScroll(iScrollInstance){
  	//console.log(iScrollInstance.maxScrollY + '_' + iScrollInstance.y)
  	const bottomHeight = iScrollInstance.maxScrollY - iScrollInstance.y
   	if(bottomHeight >= 5){
   		//console.log('上拉加载')
   		const { name , page } = this.props.params
   		const { report , info } = this.props
   		if(name == 'report'){
   			if(report.length < 15){
   				this.hideLoadingBtn()
   				//this.showEndBtn()
   			}else{
   				this.showLoadingBtn()
   				//this.hideEndBtn()
   			}
   		}
   		if(name == 'info'){
   			if(info.length < 15){
   				this.hideLoadingBtn()
   				//this.showEndBtn()
   			}else{
   				this.showLoadingBtn()
   				//this.hideEndBtn()
   			}
   		}
   	}else{
   		this.hideLoadingBtn()
   		//this.hideEndBtn()
   	}
   	console.log(bottomHeight)
   	if(bottomHeight < -100){
   		$('#more-list-content').css('height','calc(100% - 50px)')
			$('#gapDiv').hide()
			iScrollInstance.refresh()
   	}
  }
  onScrollEnd(iScrollInstance){
    const { name , page } = this.props.params
  	if(name == 'report'){
  		global.reportListScrollY = iScrollInstance.y;
  	}else{
  		global.infoListScrollY = iScrollInstance.y;
  	}	
    if(iScrollInstance.maxScrollY == iScrollInstance.y){//判断是否滚动到最底部
    	const { name , page } = this.props.params
    	const { report , info } = this.props
    	this.hideLoadingBtn()
   		this.hideEndBtn()
    	if(name == 'report'){
    		const nextPage = parseInt(report.nowPage)+1
    		if(report.length == 15){
    			//global.reportNowPage++
	    		this.props.dispatch(selectReportList(name,nextPage))
    		}else{
    			$('#footer').show()
    			//$('#gapDiv').show()
    			iScrollInstance.refresh()
    			$('#more-list-content').css('height','calc(100% - 150px)')
    		}
	    }else{
	    	const nextPage = parseInt(info.nowPage)+1
	    	if(info.length == 15){
    			//global.infoNowPage++
	    		this.props.dispatch(selectInfoList(name,nextPage))
    		}else{
    			$('#footer').show()
    			$('#more-list-content').css('height','calc(100% - 150px)')
    			$('#gapDiv').show()
    			iScrollInstance.refresh()
    		}
	    }
	    //console.log('到底了')
    }
  }
  onFlick(){
  }
  onZoomStart(){
  }
  onZoomEnd(){
  }
  onRefresh(){
  }
  onPageChange(){
  }
  componentDidMount() {
  	document.addEventListener('touchmove', this.touchmove, false);
  }
  componentWillUnmount(){
  	document.removeEventListener('touchmove', this.touchmove, false);
  }
  touchmove(e){
  	e.preventDefault();
  }
  componentDidUpdate(){
  }
}

function mapStateToProps(state, ownProps) {
	const { selectMoreList } = state
	//console.log(state)
	const defaultMoreList = {
		report:{
			list:[{
				add_date:'',
				id:0,
				title:'',
				url:''
			}],
			length:0,
			nowPage:1,
			totalCount:1,
			totalPage:1
		},
		info:{
			list:[{
				add_date:'',
				id:0,
				title:'',
				url:''
			}],
			length:0,
			nowPage:1,
			totalCount:1,
			totalPage:1
		}
	}
	const { report , info } = selectMoreList.report ? selectMoreList : defaultMoreList
  	return {
  		report, 
  		info
  	}
}

module.exports = connect(mapStateToProps)(MoreList)