
<div style="text-align:center;">
    <img src="./images/twitch-logo.png" width="150">
    <img src="./images/scylla-logo.png" width="250">
</div>


---

This lab demonstrates, using a hands-on example, how you can create a high availability application using Twitch chat as a target. You’ll try create your own environment on Scylla and connect it to many Twitch chats as you can, and dump all the chat messages at the time.

We will use NodeJS but the example is valid to any language/technology you want that has a Driver available.


## About the Project

The app that we're about to build is called "Twitch Sentinel", a bot that will scrap all messages inside any channel that you want.

The idea is to show how the "real world" throughput can work based on your demand.

