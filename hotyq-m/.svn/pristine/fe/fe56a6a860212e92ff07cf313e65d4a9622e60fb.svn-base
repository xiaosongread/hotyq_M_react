module.exports = {
  path: 'more/:name',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/MoreList'))
    },'moreList')
  }
}
