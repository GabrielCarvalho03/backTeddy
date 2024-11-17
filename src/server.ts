import { app } from "./http/app";

app.listen({ port: 8000 }, () => {
  console.log("Server is running on port 8000");
});
