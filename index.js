const express = require('express')
const app = express()
const data = `{
  "data":{
    "id":"8634",
    "email":"livefreemiranda@gmail.com",
    "city":"Richmond",
    "state":"Virginia",
    "zip":"23226",
    "country":"USA",
    "blog-name":"Live Free Creative Co.",
    "blog-url":"http://livefreecreative.co/blog",
    "birthday":"02/09/1983",
    "gender":"Female",
    "married":true,
    "number-of-kids":3,
    "first-name":"Miranda ",
    "last-name":"Anderson",
    "do-you-have-kids":true,
    "retailers-frequented":"TARGET,COSTCO,WALMART,CVS",
    "content-topics":"DESIGN,DIY_CRAFTS,FOOD_DRINK,HOME_DECOR,KIDS_PARENTING,LIFESTYLE,TRAVEL,WOMENS_FASHION,OTHER",
    "social-media-accounts":[
       {
          "id":0,
          "type":"pinterest",
          "name":"livefreecreativeco",
          "link":"https://www.pinterest.com/livefreecreativeco"
       },
       {
          "id":1,
          "type":"twitter",
          "name":"livefreemiranda",
          "link":"https://www.twitter.com/livefreemiranda"
       },
       {
          "id":2,
          "type":"instagram",
          "name":"livefreemiranda",
          "link":"https://www.instagram.com/livefreemiranda"
       },
       {
          "id":3,
          "type":"youtube",
          "name":"livefreemiranda",
          "link":"https://www.youtube.com/channel/UC-NTYfjnguU4dgIFrIKolYQ"
       }
    ]
  }
}`;

const port = process.env.PORT || 3000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
next();
});

app.get('/influencers/8634', ((req, res) => {
    const json = JSON.parse(data);
    res.json(json)
}));

app.listen(port, () => console.log('Example app listening on port 3000!'))
