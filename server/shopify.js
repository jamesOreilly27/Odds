const router = require('express').Router()
const nonce = require('nonce')
const chalk = require('chalk')
const shopifyMiddleware = require('shopify-node-api')

const fowardingAddress = 'https://5468435a.ngrok.io'
const shopify_hidden_ss = process.env.SHOPIFY_API_SECRET_KEY
const shopify_hidden_ak = process.env.SHOPIFY_API_KEY
const shopify_hidden_shopname = "dbny-code-test.myshopify.com"
const randomString = nonce()
let shopify_hidden_at = ''

const config = {
  shop: shopify_hidden_shopname,
  shopify_api_key: shopify_hidden_ak,
  shopify_shared_secret: shopify_hidden_ss,
  shopify_scope: 'write_products',
  redirect_uri: `${fowardingAddress}/shopify/finish_auth`,
  nonce: randomString
}

router.get('/', (req, res) => {
  const Shopify = new shopifyMiddleware(config)

  const auth_url = Shopify.buildAuthURL();
  res.redirect(auth_url)
})

router.get('/finish_auth', (req, res) => {
  const queryParams = req.query

  const Shopify = new shopifyMiddleware({
    shop: shopify_hidden_shopname,
    shopify_api_key: shopify_hidden_ak,
    shopify_shared_secret: shopify_hidden_ss,
    shopify_scope: 'write_products',
    redirect_uri: `${fowardingAddress}/shopify/finish_auth`,
    nonce: queryParams.state
  })

  // console.log(chalk.white.bgGreen(Shopify.is_valid_signature(queryParams)))

  Shopify.exchange_temporary_token(queryParams, function(error, data) { 
    // console.log(chalk.white.bgMagenta('HELLOOOOOOOO', Shopify.exchange_temporary_token))
    // console.log(chalk.white.bgGreen('HELOOOOOOOOO', error))
    console.log(chalk.white.bgMagenta('woooooooooorld', data['access_token']))
    shopify_hidden_at=data['access_token']
  })
})

module.exports = router
