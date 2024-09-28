import express, { Request, Response } from "express";
import Persona from "../models/test";


export const getPersona = async (req: Request, res: Response) => {
  const ListPersonas = await Persona.findAll();
  res.json(ListPersonas);
};