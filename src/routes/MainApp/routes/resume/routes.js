export default {
  path: 'resume',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./index').default)
    }, 'resume')
  }
}
