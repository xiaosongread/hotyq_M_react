import React, { Component } from 'react'
import { Link } from 'react-router'
import style from '../style/footer.scss'
class Footer extends Component {
  render() {
    return (
      <div className={`${style.footer}`}>
      	<div className={`${style.footerTableList}`}>
      		<Link to='/Partners' className={`${style.activebottom}`}>合作伙伴</Link>
      		<Link to='/about/companyProfile' className={`${style.activebottom}`}>关于我们</Link>
      		<Link to='/contact' className={`${style.activebottom}`}>联系我们</Link>
      	</div>
  		<div className={`${style.footerTerms}`}>
  			<span>红演圈（北京）网络科技有限公司</span>
  			<Link to='/terms' className={`${style.activebottom1}`}> | 服务条款</Link>
      		<Link to='/policy' className={`${style.activebottom1}`}> | 隐私政策</Link>
      		<Link to='/declare' className={`${style.activebottom1}`}> | 版权声明</Link>
  		</div>
  		<p>Copyright © 2014-2016 Hotyq.com All Rights Reserved</p>
      </div>
    )
  }
  constructor(props, context) {
    super(props, context)
  }
  componentDidMount() {
  	
  }
}
export default Footer
