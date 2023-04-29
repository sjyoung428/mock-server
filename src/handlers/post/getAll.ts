import { rest } from "msw";
import { posts } from "../../database/post";

export const postGetAllHandler = rest.get("/api/posts", (req, res, ctx) => {
  let token = req.headers.get("Authorization");
  if (token) {
    token = JSON.parse(token.split("Bearer ")[1])["state"]["authToken"];

    return res(
      ctx.status(200),
      ctx.json({
        message: "Success",
        posts,
      })
    );
  }
});
