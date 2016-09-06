export default {
  path: 'about',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./index').default)
    }, 'about')
  }
}
