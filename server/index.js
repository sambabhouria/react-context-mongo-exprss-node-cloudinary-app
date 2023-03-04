import { app } from "./app.js";
import { PORT } from "./config.js";
import { connectDB } from "./db.js";

connectDB();
//app.listen(PORT);
//console.log("Server on port", PORT);
app.listen(
  { port: PORT },
  () =>
    console.log(
      `🚀💪🐞🥂 🐼💳💎 🛳  🦁 🍰 🏅 🔜 Server ready at http://localhost:${PORT}`
    )
  //console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
  // console.log(`🚀 Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`)
);
