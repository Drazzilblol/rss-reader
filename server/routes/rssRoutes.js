var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var feed = require("feed-read-parser");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));


router.param(['path'], function (req, res, next, value) {
    console.log('CALLED ONLY ONCE with', value);
    next();
});


/* GET /todos/id */
router.get('/', function (req, res, next) {
    feed("https://news.mail.ru/rss/politics/91/", function(err, articles) {
        if (err) return next(err);
        res.json(articles);
       // console.log(articles);
        // Each article has the following properties:
        //
        //   * "title"     - The article title (String).
        //   * "author"    - The author's name (String).
        //   * "link"      - The original article link (String).
        //   * "content"   - The HTML content of the article (String).
        //   * "published" - The date that the article was published (Date).
        //   * "feed"      - {name, source, link}
        //
    });
    //"https://st.kp.yandex.net/rss/news.rss",
});


module.exports = router;
