var path = require('path')
var thinky = require(path.join(__dirname, '..', 'utils', 'thinky'))
var r = thinky.r
var type = thinky.type

/**
 * Define model and properties
 */
var Subscription = thinky.createModel('Subscription', {
  id: type.string().default(r.uuid()),
  user_id: type.string(),
  name: type.string(),
  plan_id: type.string(),
  ends_at: type.date()
})

module.exports = Subscription
