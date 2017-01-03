import fetch from 'isomorphic-fetch'

export const SELECT_HOME_LIST = 'SELECT_HOME_LIST'
export const SELECT_INFO_DETAIL = 'SELECT_INFO_DETAIL'
export const SELECT_REPORT_LIST = 'SELECT_REPORT_LIST'
export const SELECT_INFO_LIST = 'SELECT_INFO_LIST'
	
function homeListPosts(json) {
  return {
    type: SELECT_HOME_LIST,
		homeList: json
  }
}

export function selectHomeList() {
  return dispatch => {
		return fetch(`${api}/list.do`).then(response => response.json())
      	.then(json => dispatch(homeListPosts(json)))
  }
}

function reportListPosts(name,json) {
  return {
    type: SELECT_REPORT_LIST,
		reportList: json,
		name
  }
}

export function selectReportList(name,page) {
  return dispatch => {
		return fetch(`${api}/${name}.do?currentPage=${page}&pageSize=15`).then(response => response.json())
      	.then(json => dispatch(reportListPosts(name,json)))
  }
}

function infoListPosts(name,json) {
  return {
    type: SELECT_INFO_LIST,
		infoList: json,
		name
  }
}

export function selectInfoList(name,page) {
  return dispatch => {
		return fetch(`${api}/${name}.do?currentPage=${page}&pageSize=15`).then(response => response.json())
      	.then(json => dispatch(infoListPosts(name,json)))
  }
}

function infoDetailPosts(json) {
  return {
    type: SELECT_INFO_DETAIL,
		infoDetail: json
  }
}

export function selectInfoDetail(id) {
  return dispatch => {
		return fetch(`${api}/infoDetail/${id}`).then(response => response.json())
      	.then(json => dispatch(infoDetailPosts(json)))
  }
}