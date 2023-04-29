import { signupHandler } from "./auth/signup";
import { signinHandler } from "./auth/signin";
import { articleGetAllHandler } from "./article/getAll";

export const handlers = [signupHandler, signinHandler, articleGetAllHandler];
