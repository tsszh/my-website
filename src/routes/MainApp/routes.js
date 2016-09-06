export default (store) => ({
  path: '/',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      // require('SRC/components/sub-nav/SubNav')
      cb(null, require('./containers/base').default)
    }, 'main')
  },
  indexRoute: { onEnter: (nextState, replace) => replace('/home') },
  childRoutes: [
    require('./routes/home/routes.js').default,
    require('./routes/about/routes.js').default,
    require('./routes/resume/routes.js').default,
    require('./routes/demo/routes.js').default,
    require('./routes/blog/routes.js').default(store)
  ]
})
