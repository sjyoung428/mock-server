import { createServer } from "@mswjs/http-middleware";
import { handlers } from "./mocks/handlers";

// port number for the server to listen on (default 8080)
const PORT = 8080;

const httpServer = createServer(...handlers);

httpServer.listen(PORT, () => {
  console.log(`Mock server listening at http://localhost:${PORT}`);
});
