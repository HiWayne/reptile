const express = require('express');
const app = express();
const superagent = require('superagent');
const { getHotNews, getLocalNews } = require('./util/index.js');

let hotNews = [];
let localNews = [];

superagent.get('https://news.baidu.com/').end((err, res) => {
  if (err) {
    console.log(`热点新闻抓取失败-${err}`);
  } else {
    hotNews = getHotNews(res);
    localNews = getLocalNews(res);
  };
});

app.get('/', function (req, res) {
  res.send({ hotNews, localNews });
});

const server = app.listen(3000, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Your App is running at http://%s:%s', host, port)
})