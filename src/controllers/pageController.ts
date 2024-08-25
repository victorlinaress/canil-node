import { Request, Response } from "express";
import { Pet } from '../models/pet';
import { createMenuObject } from "../helpers/createMenuObject";

export const home = (req: Request, res: Response) => {
let list = Pet.getAll();

  res.render("pages/page", {
    menu: createMenuObject("all"),
    banner: {
      title: "Todos os animais",
      background: "allanimals.jpg",
    },
    list
  });
};

export const dogs = (req: Request, res: Response) => {
  let list = Pet.getFromType('dog');
  res.render("pages/page", {
    menu: createMenuObject("dog"),

    title: "cachorros",
    background: "banner_dog.jpg",
  });
  list
};

export const cats = (req: Request, res: Response) => {
  let list = Pet.getFromType('cat');

  res.render("pages/page", {
    menu: createMenuObject("cat"),

    title: "gatos",
    background: "banner_cat.jpg",
  });
  list
};

export const fishes = (req: Request, res: Response) => {
  let list = Pet.getFromType('fish');

  res.render("pages/page", {
    menu: createMenuObject("fish"),

    title: "peixes",
    background: "banner_fish.jpg",
  });
  list
};

export const search = (req: Request, res: Response) => {};
