import { Request, Response } from 'express';
import * as UserService from '../services/userService';

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await UserService.findAllUsers();
    console.log("Users fetched successfully");
    res.json({ message: "Users fetched successfully", users });
  } catch (error) {
    handleRequestError(res, error, "Error fetching users");
  }
};

export const getUser = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);
  try {
    const user = await UserService.findUserById(userId);
    if (user) {
      console.log(`User with id ${userId} fetched successfully`);
      res.json({ message: "User fetched successfully", user });
    } else {
      console.log(`User with id ${userId} not found`);
      res.status(404).send({ message: "User not found" });
    }
  } catch (error) {
    handleRequestError(res, error, `Error fetching user with id ${userId}`);
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      console.log("Failed to create user due to invalid input", req.body);
      return res.status(400).send({ message: 'Name and email are required' });
    }

    const newUser = await UserService.createUser(name, email);
    console.log("User created successfully:", newUser);
    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error) {
    handleRequestError(res, error, "Error creating user");
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      console.log("Failed to update user due to invalid input", req.body);
      return res.status(400).send({ message: 'Name and email are required' });
    }

    const updatedUser = await UserService.updateUser(userId, name, email);
    console.log(`User with id ${userId} updated successfully`);
    res.json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    handleRequestError(res, error, `Error updating user with id ${userId}`);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);
  try {
    await UserService.deleteUser(userId);
    console.log(`User with id ${userId} deleted successfully`);
    res.status(204).send();
  } catch (error) {
    handleRequestError(res, error, `Error deleting user with id ${userId}`);
  }
};

function handleRequestError(res: Response, error: unknown, message: string) {
  console.error(message, error);
  if (error instanceof Error) {
    res.status(500).send({ message: error.message });
  } else {
    res.status(500).send({ message: 'An unknown error occurred' });
  }
}
