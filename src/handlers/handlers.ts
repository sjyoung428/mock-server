import { signupHandler } from "./auth/signup";
import { signinHandler } from "./auth/signin";
import { postGetAllHandler } from "./post/getAll";

export const handlers = [signupHandler, signinHandler, postGetAllHandler];
