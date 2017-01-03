import React, { Component } from 'react'
import { Link } from 'react-router'
import TweenOne from 'rc-tween-one'
import Animate from 'rc-animate'
import QueueAnim from 'rc-queue-anim';
import logo from '../style/img/header_logo.png'
import list from '../style/img/header_list.png'
const style = require('../style/header')
class GlobalNav extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
    	animation:{},
    	show:false,
    	navShow:'',
    	listShadow:''
    }
    this.showNav = this.showNav.bind(this)
    this.gotoRouter = this.gotoRouter.bind(this)
  }
  
  render() {
    const { user } = this.props
    return (
    	<div>
    		<div className={`${style.header} ${this.state.navShow}`}>
    			<Link className='home nav' to="/" onClick={this.gotoRouter} ><img className={style.logo} src={logo} /></Link>
	    		<div className={`${style.tweenOneBox} ${this.state.listShadow}`}>
	    			<TweenOne animation={this.state.animation} className={style.tweenOne} onClick={this.showNav}>
			      	<img src={list} />
						</TweenOne>
	    		</div>
    		</div>
	      
				
          {this.state.show ? 
            <div key="1" className={style.navList}>
             
		        		<Link to='/hotyq' key='a'>
		        			<div className={style.navItem} onClick={this.gotoRouter}>红演圈</div>
		        		</Link>
		        		<Link to='/hotmi' key='b'>
		        			<div className={style.navItem} onClick={this.gotoRouter}>红蜜</div>
		        		</Link>
		        		<Link to='/hotfan' key='c'>
		        			<div className={style.navItem} onClick={this.gotoRouter}>红贩</div>
		        		</Link>
		        		<Link to='/about/companyProfile' key='d'>
		        			<div className={style.navItem} onClick={this.gotoRouter}>关于我们</div>
		        		</Link>
		        		<Link to='/contact' key='e'>
		        			<div className={style.navItem} onClick={this.gotoRouter}>联系我们</div>
		        		</Link>
	        		
            </div>: null}
        
      </div>
    )
  }
  showNav(){
  	if(this.state.animation.rotate == -90){
  		this.setState({
  			animation:{ rotate: 0, duration: 500 },
  			show:false,
  			navShow:'',
  			listShadow:''
  		})
  	}else{
  		this.setState({
  			animation:{ rotate: -90, duration: 500 },
  			show:true,
  			navShow:style.navShow,
  			listShadow:style.listShadow
  		})
  	}
  }
  gotoRouter(){
  	this.setState({
			animation:{ rotate: 0, duration: 500 },
			show:false,
			navShow:'',
  		listShadow:''
		})
  }
}
export default GlobalNav