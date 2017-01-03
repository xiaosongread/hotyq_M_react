import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { SELECT_HOME_LIST , SELECT_REPORT_LIST , SELECT_INFO_LIST , SELECT_INFO_DETAIL } from '../actions'

export function selectHomeList(state = { }, action) {
	switch (action.type) {
    case SELECT_HOME_LIST:
      return Object.assign({}, state, {
      	infoList:action.homeList.infoList,
      	reportList:action.homeList.reportList
      })
    default:
      return state
	}
}

export function selectMoreList(state = {report:{list:[]},info:{list:[]}}, action) {
	switch (action.type) {
    case SELECT_REPORT_LIST:
      return Object.assign({}, state, {
      	report:{
      		length:action.reportList[action.name+'List'].length,
	      	totalPage:action.reportList.totalPage,
	      	totalCount:action.reportList.totalCount,
	      	nowPage:action.reportList.nowPage,
	      	list:[...state.report.list,...action.reportList[action.name+'List']]
      	}
      })
    case SELECT_INFO_LIST:
      return Object.assign({}, state, {
  	  	info:{
      		length:action.infoList[action.name+'List'].length,
	      	totalPage:action.infoList.totalPage,
	      	totalCount:action.infoList.totalCount,
	      	nowPage:action.infoList.nowPage,
	      	list:[...state.info.list,...action.infoList[action.name+'List']]
      	}
    })
      //return [...state,...action.moreList[action.name+'List']]
    default:
      return state
	}
}

export function selectInfoDetail(state = { }, action) {
	switch (action.type) {
    case SELECT_INFO_DETAIL:
      return Object.assign({}, state, {
      	infoDetail:action.infoDetail
      })
    default:
      return state
	}
}

const rootReducer = combineReducers({
	selectHomeList,
	selectMoreList,
	selectInfoDetail,
  	routing
})

export default rootReducer
