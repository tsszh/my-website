export default {
  path: 'home',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./index').default)
    }, 'home')
  }
}
