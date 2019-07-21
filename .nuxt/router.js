import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _119b810c = () => interopDefault(import('..\\pages\\About.vue' /* webpackChunkName: "pages_About" */))
const _b843275e = () => interopDefault(import('..\\pages\\Datatable.vue' /* webpackChunkName: "pages_Datatable" */))
const _7362bbb8 = () => interopDefault(import('..\\pages\\DraggableList.vue' /* webpackChunkName: "pages_DraggableList" */))
const _611e5982 = () => interopDefault(import('..\\pages\\Home.vue' /* webpackChunkName: "pages_Home" */))
const _47c855c7 = () => interopDefault(import('..\\pages\\Details\\_id\\index.vue' /* webpackChunkName: "pages_Details__id_index" */))
const _c1100b42 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/About",
      component: _119b810c,
      name: "About"
    }, {
      path: "/Datatable",
      component: _b843275e,
      name: "Datatable"
    }, {
      path: "/DraggableList",
      component: _7362bbb8,
      name: "DraggableList"
    }, {
      path: "/Home",
      component: _611e5982,
      name: "Home"
    }, {
      path: "/Details/:id?",
      component: _47c855c7,
      name: "Details-id"
    }, {
      path: "/",
      component: _c1100b42,
      name: "index"
    }],

    fallback: false
  })
}
