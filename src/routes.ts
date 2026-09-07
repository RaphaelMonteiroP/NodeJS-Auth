import { Router } from "express";
import AuthController from "./controllers/AuthController.js";

const authController = new AuthController();

const router = Router();

router.get("/", (req, res) => {
  res.render("main.ejs");
});

router.get("/register", (req, res) => {
  res.render("register.ejs");
});

router.post("/register", (req, res) => authController.userRegister(req, res));

router.get("/login", (req, res) => {
  res.render("login.ejs");
});

router.post("/login", (req, res) => authController.userLogin(req, res));

export default router;
