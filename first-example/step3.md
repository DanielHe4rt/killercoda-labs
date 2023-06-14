Let's open a new tab and leave the actual terminal to our CQLSH. Head to `Editor Tab` , we're gonna setup the development environment by downloading everything we need.

![Arrows pointing to open the Code Editor Tab](./images/3-2-opening-the-editor.png)

Now on the `Editor Tab` tab we need to enter the project folder, which is called `twitch-sentinel`. 

`cd twitch-sentinel`{{execute}}

After your terminal is also inside the project folder, we need to install the project dependencies. For this project we'll need only two:

- [ScyllaDB/Cassandra](https://www.npmjs.com/package/cassandra-driver) connector to NodeJS
- [tmi.js](https://tmijs.com/)(Twitch Chat Client). 


You can run the command below and install the dependencies: 

```sh
npm i tmi.js cassandra-driver
```{{execute}}

Now run the project with: 

```sh
node index.js
```

You can add your channel name into line 6 and send a few messages on your twitch chat to test it. 

If you want to see some real environemnt, comment the line 6 and uncomment the line 7 and it will load a small list of streamers that can be possibly online.


## Understanding the code

To use ScyllaDB in any language, you will need to download any of our drivers OR can also be using a 3rd party driver from Cassandra. You can check the available drivers [here](https://docs.scylladb.com/stable/using-scylla/drivers/cql-drivers/index.html).

In this example we used the `cassandra-driver` because we don't have a native driver for NodeJS yet. 

On the connector, we will need to provive all the information related to which datacenter we're about to store the application data.

```js
const cassandra = require('cassandra-driver');
const cluster = new cassandra.Client({
    contactPoints: ["172.17.0.2", "172.17.0.3", "172.17.0.4"],
    credentials: { username: 'scylla', password: 'secret-password'},
    localDataCenter: 'datacenter1',
    keyspace: 'twitch_sentinel'
})
```

* Since this application is running in a local environment, with Docker, the `localDataCenter` variable needs to be `datacenter1` that is used for this kind of situation. 
* Important the `contactPoints` refers to the node IP addresses setted on `Replication Factor`. In our case, we setted 3 nodes so it will be expecting 3 IP's.
* Your credentials depend on each environment you're running
    * **Docker:** username is `scylla` and the password can be anything.
    * **Scylla Cloud:** username is `scylla` and the password can be found in the `Instructions Tab`.
* `Keyspace` is optional since you can connect on CQLSH and create it by running a query, but sooner you have it set-up, better.

> Drivers in other languages may require `CONSISTENCY_LEVEL` to start but in this case, you can set it on a specific query.

```js 

```
