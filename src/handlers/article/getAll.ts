import { rest } from "msw";
import { articles } from "../../database/article";

export const articleGetAllHandler = rest.get(
  "/api/articles",
  (req, res, ctx) => {
    let token = req.headers.get("Authorization");
    if (token) {
      token = JSON.parse(token.split("Bearer ")[1])["state"]["authToken"];

      return res(
        ctx.status(200),
        ctx.json({
          message: "Success",
          articles,
        })
      );
    }
  }
);
