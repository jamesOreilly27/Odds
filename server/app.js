require('isomorphic-fetch')
const Koa = require('koa');
const { default: createShopifyAuth } = require('@shopify/koa-shopify-auth');
const { verifyRequest } = require('@shopify/koa-shopify-auth');
const session = require('koa-session');
const express = require('express')
const app = express()
const volleyball = require('volleyball')
const bodyParser = require('body-parser')
const chalk = require('chalk')
const path = require('path'); 
const PORT = process.env.PORT || 8332
const https = require('https')
const fs = require('fs')
const dir = require('os').homedir()
const dotenv = require('dotenv').config()

const opions = {}

!process.env.PORT ?
  options = {
    key: fs.readFileSync( `${dir}/ssl/localhost/localhost.key` ),
    cert: fs.readFileSync( `${dir}/ssl/localhost/localhost.crt` ),
    requestCert: false,
    rejectUnauthorized: false
  }
:
  options = {}

const { SHOPIFY_API_SECRET_KEY, SHOPIFY_API_KEY } = process.env

// const server = https.createServer(options, app)
const server = new Koa();
server.use(session(server));
server.keys = [SHOPIFY_API_SECRET_KEY];
server.use(async (ctx) => {
  await handle(ctx.req, ctx.res);
  ctx.respond = false;
  ctx.res.statusCode = 200;
  return
});

server.use(
  createShopifyAuth({
    apiKey: SHOPIFY_API_KEY,
    secret: SHOPIFY_API_SECRET_KEY,
    scopes: ['read_products'],
    afterAuth(ctx) {
      const { shop, accessToken } = ctx.session;

      ctx.redirect('/');
    },
  }),
);

server.use(verifyRequest());
server.use(async (ctx) => {
  await handle(ctx.req, ctx.res);
  ctx.respond = false;
  ctx.res.statusCode = 200;
  return
});


app.use(volleyball)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(express.static(path.join(__dirname, '..', 'public'))); 

app.use('/api', require('./routes'))

app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('*', (req, res, next) => res.sendFile(path.join(__dirname, '..', 'public', 'index.html')))
if(process.env.PORT) {
  app.listen(PORT, () => console.log(chalk.red.bgWhite.bold(`We are live on port ${PORT}`)))
} else {
  console.log(chalk.red.bgBlue.bold(SHOPIFY_API_SECRET_KEY, SHOPIFY_API_KEY))
  // server.listen(PORT, () => console.log(chalk.blue.bgWhite.bold(`We are live on port ${server.address().port}`)))
  server.listen(PORT, () => {
    console.log(`> Ready on http://localhost:${PORT}`);
  });
}
