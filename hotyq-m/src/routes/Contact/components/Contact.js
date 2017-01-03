import React, { Component } from 'react'
import style from '../../../style/contact.scss'
import hotyq_contactAddressImg from '../../../style/img/hotyq_contactAddressImg.png';
import hotmi_contactAddressImg from '../../../style/img/hotmi_contactAddressImg.png';
import hotyq_contactCodeImg from '../../../style/img/hotyq_contactCodeImg.jpg';
import hotmi_contactCodeImg from '../../../style/img/hotmi_contactCodeImg.png';
import Footer from '../../../components/Footer'
class Contact extends Component {
  render() {
    return (
    	  <div>
      <div className={`${style.contact}`}>
   		<div className={`${style.hotyqContactCons}`}>
   			<img src={hotyq_contactAddressImg} />
   			<p>公司:红演圈(北京)网络科技有限公司</p>
   			<p>地址:北京市朝阳区酒仙桥中路878东区2层</p>
   			<p>总机:<a href="tel:010-57799869" className={`${style.blueShow}`}>010-57799869</a></p>
   			<h3>商务合作</h3>
   			<span>TEL：<a href="tel:010-57799869-8182" className={`${style.blueShow}`}>010-57799869-8182</a></span>
   			<span>Mail：BD@hotyq.com</span>
   			<h3>客服</h3>
   			<span>TEL：<a href="tel:010-57799869-8182" className={`${style.blueShow}`}>010-57799869-8183</a></span>
   			<span>Mail：kf@hotyq.com</span>
   			<span>QQ：2284680653</span>
   			<h3>红演圈微博:</h3>
   			<a href="http://weibo.com/hotyq" target="_self"><span className={`${style.blueShow}`}>http://weibo.com/hotyq</span></a>
   			<img src={hotyq_contactCodeImg} className={`${style.hotyq_contactCodeImg}`}/>
   			<h3>红演圈微信</h3>
   		</div>
   		<div className={`${style.hotmiContactCons}`}>
   			<img src={hotmi_contactAddressImg} />
   			<p>地址：北京市朝阳区百子湾黄木厂路1号院1号楼底商</p>
   			<p>总机：<a href="tel:400-960-9099" className={`${style.blueShow}`}>400-960-9099</a></p>
   			<h3>红蜜家微博:</h3>
   			<a href="http://weibo.com/p/1005055958399021" target="_self"><span className={`${style.blueShow}`}>http://weibo.com/p/1005055958399021</span></a>
   			<img src={hotmi_contactCodeImg} className={`${style.hotmi_contactCodeImg}`}/>
   			<h3>红蜜家微信</h3>
   		</div>
      </div>
      <Footer />
      </div>
    )
  }
  componentDidMount(){
  	window.scrollTo(0,0)
  }
}
module.exports = Contact
