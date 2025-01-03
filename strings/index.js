const client = require("./client")


// client.get("user:1")
// .then(msg=>console.log(msg))
// .catch(err=>console.log(err))

async function init() {
    // await client.set("email:1","abhi@gmail.com")
    // await client.expire("count", 10)
    console.log("email is", await client.get("email:1"))
}
init()