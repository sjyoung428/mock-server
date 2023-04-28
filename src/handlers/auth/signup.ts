import { rest } from "msw";
import { user } from "../../database/user";
import { SignupBody, SignupResponse } from "./types";

// export const newUser = [...user];

export const signupHandler = rest.post<SignupBody, SignupResponse>(
  "/api/signup",
  (req, res, ctx) => {
    const { email, password, username } = req.body;

    user.push({
      id: user.length + 1,
      email,
      password,
      username,
      token: "token",
    });

    if (email && username && password) {
      return res(
        ctx.status(200),
        ctx.json({
          message: "Success",
        })
      );
    } else {
      return res(
        ctx.status(400),
        ctx.json({
          message: "Invalid input",
        })
      );
    }
  }
);
