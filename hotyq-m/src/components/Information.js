import React, { Component } from 'react'
import { Link } from 'react-router'

class PictureNav extends Component {
  render() {
  	const style = require('../style/home.page')
  	//console.log(this.props.list)
		return (
	      <div className={style.information}>
				<div className={style.title}>
					<span>{this.props.title}</span>
					<Link to={`/more/${this.props.type}`} onClick={this.goToMoreList} ><span>更多<i className='iconfont'>&#xe601;</i></span></Link>
				</div>
				{this.props.list.map((item, i) =>
		          <div className={style.infoItem} key={i}>
					{
	          			this.props.type == 'report'?
	          			<a href={item.url}>{item.title}</a>:
	          			<Link to={`/info/${item.id}`}>{item.title}</Link>
	          		}
				  </div>
		        )}
				
	      </div>
	    )
  }
  constructor(props, context) {
    super(props, context)
    this.goToMoreList=this.goToMoreList.bind(this)
  }
  componentDidMount() {
  	
  }
  goToMoreList(){
  	global.moreListType = this.props.type
  	global.reportListScrollY = 0
  	global.infoListScrollY = 0
  }
}
export default PictureNav
