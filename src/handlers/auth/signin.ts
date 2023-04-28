import { rest } from "msw";
import { user } from "../../database/user";
import { SigninBody, SigninResponse } from "./types";

export const signinHandler = rest.post<SigninBody, SigninResponse>(
  "/api/signin",
  (req, res, ctx) => {
    const { authToken } = req.cookies;
    const { email, password } = req.body;

    const userFound = user.find(
      (user) => user.email === email && user.password === password
    );

    if (authToken && userFound) {
      return res(
        ctx.status(200),
        ctx.json({
          message: "Success",
          token: userFound.token,
        })
      );
    }
    return res(
      ctx.status(403),
      ctx.json({
        message: "Failed to authenticate!",
      })
    );
  }
);
