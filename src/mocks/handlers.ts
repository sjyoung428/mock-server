import { rest } from "msw";
import { user } from "../database/user";

interface SignupBody {
  email: string;
  password: string;
  username: string;
}

interface SignupResponse {
  message: string;
}

export const handlers = [
  // sign up
  rest.post<SignupBody, SignupResponse>("/api/signup", (req, res, ctx) => {
    const { email, password, username } = req.body;
    user.concat({
      id: user.length + 1,
      email,
      password,
      username,
      token: "token",
    });
    if (email && password) {
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
  }),
];
