import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let funPart = ["Hey, listen to this one", "Have you heard this joke", "This one's for you", "Here's a funny one for you", "Check this out", "You'll love this one", "This joke is just for you", "I bet you'll laugh at this", "Get ready to laugh", "Here's something to brighten your day", "Here's a good one", "For you", "Here's a joke", "Ready for a laugh", "This will crack you up", "Here's a chuckle for you", "You might enjoy this", "Laugh along with this one", "This one's a classic", "Here's a joke to make you smile", "Hope you like this one", "This will make you laugh", "Enjoy this joke", "Check out this joke", "You’re going to love this", "Get ready to laugh", "This one's for your entertainment", "Here's something funny", "Let's laugh together", "Enjoy this funny moment", "This should cheer you up", "Here's something to make you smile", "A joke just for you", "Have a laugh with this one", "This will tickle your funny bone", "A little humor for you", "Ready for some humor", "Laugh at this", "Here’s a little something to make you laugh", "Here's a bit of fun", "Enjoy a laugh", "This one's for your amusement", "A funny one for you", "Here’s a joke to lighten your mood", "Here's a joke to enjoy", "Something funny for you", "This will make you giggle", "Here's a witty one", "Get a laugh out of this", "Here's a hilarious one for you"]
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs", {title: "Get a Personalized Joke",});
  });

  app.post("/submit", async (req, res) => {
    
    try {
        const yourName = req.body["name"];
        console.log(yourName);
        const result = await axios.get("https://v2.jokeapi.dev/joke/Any");
        res.render("index.ejs", { question: JSON.stringify(result.data.setup),
                                  punchLine:JSON.stringify(result.data.delivery),
                                  greeting: funPart, you: yourName,
         });
        console.log(result.data.setup);
        console.log(result.data.delivery);
        console.log(funPart);
        } catch (error) {
        res.render("index.ejs", { content: JSON.stringify(error.response.data) });
    }
  });


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });