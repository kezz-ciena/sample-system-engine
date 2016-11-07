import Ember from 'ember'
import layout from './template'
export default Ember.Component.extend({
  classNames: ['grafana-sso'],
  layout: layout,
  didRender () {
    this._super()
    var grafanaSso = setInterval(function () {
      if (this.$('iframe').contents().find('input[name=\'username\']').length > 0) {
        var iframe = this.$('iframe')

        // fill in username
        var iframeSelectUsername = iframe.contents().find('input[name=\'username\']')
        iframeSelectUsername.val('admin')
        var evUsername = iframe[0].contentWindow.document.createEvent('UIEvents')
        evUsername.initUIEvent('change', true, true, window, 1)
        iframeSelectUsername[0].dispatchEvent(evUsername)

        // fill in password
        var iframeSelectPassword = iframe.contents().find('input[name=\'password\']')
        iframeSelectPassword.val('adminpw')
        var evPassword = iframe[0].contentWindow.document.createEvent('UIEvents')
        evPassword.initUIEvent('change', true, true, window, 1)
        iframeSelectPassword[0].dispatchEvent(evPassword)

        // click on login button
        iframe.contents().find('button.btn').click()
      }
    }, 500)
    setTimeout(function () {
      clearInterval(grafanaSso)
    }, 6000)
  }
})
