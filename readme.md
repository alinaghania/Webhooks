# Hello, welcome ! 

**Here the instructions : **

Setting up Webhooks on Localhost Using
GitHub and ngrok

This guide will help you to set up a webhook that is triggered whenever a push is made to a GitHub repository. We will be using ngrok to tunnel to our localhost where we will have a simple ExpressJS server running.
Setup your ExpressJS Server

 Install express and body-parser
 npm install express body-parser


Next, create a new index.js file in your project root and add the following code:

 const express = require('express');
 const bodyParser = require('body-parser');
 const app = express();
 app.use(bodyParser.json());
 app.post('/webhook', (req, res) => {
   console.log('Received a post request');
   console.log(req.body);
   res.status(200).end();
});
 const port = 3000;
 app.listen(port, () => console.log(`Server is running on port ${port}`));


You can start your server by running node . Expose your Localhost with ngrok

In order to receive webhooks, your server needs to be accessible from the internet. Your local development server is behind your router's firewall and cannot be reached from outside. That's where ngrok comes in.
   Ngrok creates a tunnel from the internet to your local server.

First, download and install ngrok from their website. Then, in a new terminal window, start ngrok on the same port as your express server:
ngrok http 3000

Ngrok will show a screen with several URLs. Copy the one that starts with "https://" .
Create the GitHub Webhook

Go to your repository on GitHub and click on "Settings" then "Webhooks". Click on "Add webhook".
In the "Payload URL" field, paste the HTTPS URL from ngrok and append "/webhook" at the end (for example: https://abc123.ngrok.io/webhook).
Leave the "Content type" as application/json.

For the "Secret", you can leave it empty for this tutorial.

Choose "Just the push event" for the "Which events would you like to trigger this webhook?" option.

Finally, click "Add webhook".

Test the Webhook
To test the webhook, just push a commit to your repository. You should see the output in your server's console.
    
    Here some modifications ^^