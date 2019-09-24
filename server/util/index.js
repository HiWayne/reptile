const cheerio = require('cheerio');

const getHotNews = res => {
  let $ = cheerio.load(res.text);
  const hotNews = [];
  $('div#pane-news ul li a').each((index, ele) => {
    let news = {
      title: $(ele).text(),
      href: $(ele).attr('href')
    }
    hotNews.push(news);
  })
  return hotNews;
}

const getLocalNews = res => {
  let $ = cheerio.load(res.text);
  const localNews = [];
  console.log('element', $('ul#localnews-focus li a'))
  $('ul#localnews-focus li a').each((index, ele) => {
    console.log(index, ele);
    const news = {
      title: $(ele).text(),
      href: $(ele).attr('href')
    }
    localNews.push(news);
  })
  $('div#localnews-zixun ul li a').each((index, ele) => {
    const news = {
      title: ele.children[0].data,
      href: ele.attribs.href
    }
    localNews.push(news);
  })
  return localNews;
}

module.exports = { getHotNews, getLocalNews };