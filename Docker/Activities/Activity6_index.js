const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
   host: '127.0.0.1',
   port: 39089
});