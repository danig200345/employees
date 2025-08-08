import { Router } from "express";
import { validateLogin } from "../middleware/validationLogin.js";
import { loginToken, logout } from "../controllers/login.controller.js";
import { authToken } from "../middleware/auth.js";

const login = Router();

login.post('/login', validateLogin, loginToken)
login.post('/logout', logout)

export { login };