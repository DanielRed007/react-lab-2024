import { AccordionOption, Philosopher, Writer } from "../models/interfaces";

export const mockWriters: Writer[] = [
  {
    name: "Roald Dahl",
    birthday: "12/12/2001",
    gender: "male",
    country: "England",
  },
  {
    name: "Phillip Dick",
    birthday: "12/12/2001",
    gender: "male",
    country: "USA",
  },
  {
    name: "Arthur Clarke",
    birthday: "12/12/2001",
    gender: "male",
    country: "England",
  },
  {
    name: "Isaac Asimov",
    birthday: "12/12/2001",
    gender: "male",
    country: "Russia",
  },
  {
    name: "James Joyce",
    birthday: "12/12/2001",
    gender: "male",
    country: "Scotland",
  },
  {
    name: "Clarice Lispector",
    birthday: "12/12/2001",
    gender: "female",
    country: "Brazil",
  },
];

export const accordionData: AccordionOption[] = [
  {
    title: "Titus Livi",
    content: "Titus Livis is one of the Greatests Roman writers and historians",
  },
  {
    title: "Hannibal Barca",
    content:
      "Hannibal Barca is one of the Greatests Generals and strategits in the history of the world",
  },
];

export const philosophers: Philosopher[] = [
  {
    name: "Baruch Spinoza",
    country: "Holland",
    role: "Oculist",
  },
  {
    name: "Aristoteles",
    country: "Ancient Greece",
    role: "Philosopher",
  },
  {
    name: "Marcus Aurelius",
    country: "Ancient Rome",
    role: "Emperor",
  },
];
