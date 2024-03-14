import {
  AccordionOption,
  CheckoutDataOption,
  Philosopher,
  Writer,
} from "../models/interfaces";

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

const tabDataContent = [
  [
    {
      id: 1,
      title: "Undervalued Roman Emperor",
      date: "1700 years ago",
      commentCount: 2,
      shareCount: 23,
    },
    {
      id: 2,
      title: "Many thing popular about him are false",
      date: "1700 years ago",
      commentCount: 3,
      shareCount: 2,
    },
  ],
  [
    {
      id: 1,
      title: "He restored the empire in critical times",
      date: "1700 years ago",
      commentCount: 2,
      shareCount: 23,
    },
    {
      id: 2,
      title: "Many thing popular about him are false",
      date: "1700 years ago",
      commentCount: 3,
      shareCount: 2,
    },
  ],
  [
    {
      id: 1,
      title: "The last great roman emperor",
      date: "2d ago",
      commentCount: 9,
      shareCount: 5,
    },
    {
      id: 2,
      title: "Brutally betrayed by Ricimer the nefarious",
      date: "4d ago",
      commentCount: 1,
      shareCount: 2,
    },
  ],
];

export const tabData = {
  Maxentius: tabDataContent[0],
  Aurelianus: tabDataContent[1],
  Majorian: tabDataContent[2],
};

export const checkoutData: CheckoutDataOption[] = [
  {
    title: "Personal Data",
    content:
      "If youre unhappy with your purchase for any reason, email us within 90 days and well refund you in full, no questions asked.",
  },
  {
    title: "Your Order",
    content:
      "If youre unhappy with your purchase for any reason, email us within 90 days and well refund you in full, no questions asked.",
  },
];
