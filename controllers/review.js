let puppeteer = require('puppeteer');

module.exports = {
    getReview: async function(req, res) {
        try {
            let pageUrl = req.body.pageUrl;
            if(!pageUrl) {
                res.status(400).send("No page url provided");
                return;
            }
            let browser = await puppeteer.launch({ headless: true });
            let page = await browser.newPage();
            await page.goto(pageUrl);
            // Main review div
            await page.waitForSelector('#CustomerReviewsBlock');
            // Individual review divs
            let reviews = await page.$$eval('#customerReviews .review', (elements) => {
                let reviews = [];
                elements.forEach((element) => {
                    // Extracting comment
                    let comment = element.querySelector('.rightCol');
                    comment = comment.querySelector('blockquote');
                    comment = comment.querySelector('h6').innerHTML + ' \n ' + comment.querySelector('p').innerHTML;

                    // Extracting rating
                    let rating = element.querySelector('.itemRating');
                    rating = rating.querySelector('strong').innerHTML;

                    // Extracting reviewer name
                    let reviewer = element.querySelectorAll('.reviewer dd')[0].innerHTML;

                    // Extracting review date
                    let reviewDate = element.querySelectorAll('.reviewer dd')[1].innerHTML;

                    reviews.push({ comment: comment, rating: rating, reviewer: reviewer, reviewDate: reviewDate });
                });
                return reviews;
            });
            res.status(200).json(reviews);
        }
        catch(err) {
            console.log(err);
            res.sendStatus(400);
        }
    }
};