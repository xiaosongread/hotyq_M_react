import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { selectInfoDetail } from '../../../actions'
import Footer from '../../../components/Footer'

class InfoDetail extends Component {
  constructor(props, context) {
	super(props, context)
	this.props.dispatch(selectInfoDetail(this.props.params.id))
  }
  render() {
  	const { infoDetail } = this.props
  	const style = require('../../../style/info.detail')
    return (
    	<div>
	    	<div className={style.infomation}>
	    		<span className={style.title}>{infoDetail.title}</span>
	    		<div className={style.data}>
	    			<span>{infoDetail.add_date}</span>
	    			<span> 发布</span>
	    		</div>
	    		<div className={style.main}>
	    			<div dangerouslySetInnerHTML={{__html: infoDetail.content}}></div>
	    		</div>
	    	</div>
	    	<Footer />
    	</div>
    )
  }
  componentDidMount() {
  	window.scrollTo(0,0)
  	addBaiduAnchor()
  }
}

function mapStateToProps(state, ownProps) {
	const { selectInfoDetail } = state
	const defaultInfoDetail = {title:'',add_date:'',content:''}
  	return {
  		infoDetail:selectInfoDetail.infoDetail || defaultInfoDetail
  	}
}

module.exports = connect(mapStateToProps)(InfoDetail)