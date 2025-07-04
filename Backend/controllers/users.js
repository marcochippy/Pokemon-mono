import { isValidObjectId } from "mongoose";
import * as bcrypt from "bcrypt";
import User from "../models/User.js";

const getUsers = async (req, res) => {
    const users = await User.find().lean();
    res.json(users);
};

const createUser = async (req, res) => {
    const {
        sanitizedBody: { email, password },
    } = req;

    const found = await User.findOne({ email });

    if (found) throw new Error("Email already exists", { cause: 400 });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        ...req.sanitizedBody,
        password: hashedPassword,
    });
    res.json(user);
};

const getUserById = async (req, res) => {
    const {
        params: { id },
    } = req;

    if (!isValidObjectId(id)) throw new Error("Invalid id", { cause: 400 });

    const user = await User.findById(id).select("+password").lean();
    if (!user) throw new Error("User not found", { cause: 404 });
    res.json(user);
};

const updateUser = async (req, res) => {
    const {
        sanitizedBody,
        params: { id },
    } = req;

    if (!isValidObjectId(id)) throw new Error("Invalid id", { cause: 400 });

    const user = await User.findByIdAndUpdate(id, sanitizedBody, { new: true });

    if (!user) throw new Error("User not found", { cause: 404 });

    res.json(user);
};

const deleteUser = async (req, res) => {
    const {
        params: { id },
    } = req;

    if (!isValidObjectId(id)) throw new Error("Invalid id", { cause: 400 });

    const user = await User.findByIdAndDelete(id);

    if (!user) throw new Error("User not found", { cause: 404 });

    res.json({ message: "User deleted" });
};

export { getUsers, createUser, getUserById, updateUser, deleteUser };
