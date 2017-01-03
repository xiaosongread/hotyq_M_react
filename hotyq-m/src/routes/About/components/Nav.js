import React, { Component } from 'react'
import { Link } from 'react-router'
import style from '../../../style/Nav.scss';
import about_banner from '../../../style/img/about_banner.png';
class Nav extends Component {
  constructor(props, context) {
    super(props, context)
  }
  componentDidMount(){
  	
  }
  render() {
    return (
    	<div className={style.navBox}>
	    	<img className={style.banner} src={about_banner} />
	    	<div className={style.nav}>
	    		<Link activeClassName={style.active} to="/about/companyProfile">公司简介</Link>
	    		<Link activeClassName={style.active} to="/about/developmentHistory">发展历程</Link>
	    		<Link activeClassName={style.active} to="/about/teamIntroduction">团队介绍</Link>
	    		<Link activeClassName={style.active} to="/about/joinUs">加入我们</Link>
	    	</div>
    	</div>
    )
  }
}

export default Nav