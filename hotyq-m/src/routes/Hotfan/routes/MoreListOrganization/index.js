module.exports = {
  path: 'moreList',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/MoreListOrganization'))
    },'moreList')
  }
}
