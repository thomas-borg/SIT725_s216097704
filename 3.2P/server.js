var express = require("express")
var app = express()

app.use(express.static(__dirname+'/public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

var port = process.env.port || 3000;

const baseUrl = 'https://' + 'covers.openlibrary.org' + '/b/isbn/';

const cardList = [
    {
        title: "Dune",
        author: "Frank Herbert",
        image: baseUrl + "9780441172719-L.jpg",
        description: "A classic sci-fi novel set on the desert planet Arrakis."
    },
    {
        title: "Mistborn: The Final Empire",
        author: "Brandon Sanderson",
        image: baseUrl + "9780765350381-L.jpg",
        description: "A heist crew plans to overthrow an immortal ruler using metal-based magic."
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        image: baseUrl + "9780547928227-L.jpg",
        description: "Bilbo Baggins is swept into an epic quest to reclaim a lost dwarf kingdom."
    }
];

app.get('/api/books', (req, res) => {
    res.json({ statusCode: 200, data: cardList, message: "Success" });
});


app.listen(port, () => {
  console.log("App listening to: " + port)
})
