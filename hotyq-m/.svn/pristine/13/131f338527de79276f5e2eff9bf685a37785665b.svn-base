module.exports = {
  path: 'Partners',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Partners'))
    },'partners')
  }
}
