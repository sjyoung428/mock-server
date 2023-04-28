import { rest } from "msw";
import { user } from "../database/user";
import { signupHandler } from "./auth/signup";
import { signinHandler } from "./auth/signin";

export const handlers = [signupHandler, signinHandler];
