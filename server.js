const express = require("express");

const schema = require("./schema/schema");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
//Applisten
app.listen(5000, () => {
  console.log("listening");
});
