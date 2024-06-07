import { RequestHandler } from "express";

import CreateUser from "#/@types/user";

import User from "#/models/user";

const create: RequestHandler = async (req: CreateUser, res) => {
    const { name, email, password } = req.body;

    // const newUser = new User({name, email, password});
    // newUser.save();

    const newUser = await User.create({ name, email, password });
    res.status(201).json({ newUser });
  }

export default create;