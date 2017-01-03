module.exports = {
  path: 'hotfan',
  getChildRoutes(partialNextState,cb){
  	require.ensure([], (require) => {
      cb(null, [require('./routes/MoreListOrganization')])
    })
  },
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Hotfan'))
    },'hotfan')
  }
}