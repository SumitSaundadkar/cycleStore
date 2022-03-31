import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/71vl1vpWiIL._SL1500_.jpg",
    title: "Urban Terrain UT5000 ",
    priceDiscount: 16000,
    priceOriginal: 17000,
    category: "Kid",
    offer: 5 % "off"
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/81wGn2TQJeL._SL1500_.jpg",
    title: "Urban Tribe UT550 ",
    priceDiscount: 10000,
    priceOriginal: 13000,
    offer: 7 % "off",
    category: "Men"
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/713bvEm9qHL._SL1500_.jpg",
    title: "LifeLong Tribe Cycle",
    priceDiscount: 16000,
    priceOriginal: 17000,
    category: "Adventure",
    offer: 3 % "off"
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/8166lsA66yL._SL1500_.jpg",
    title: "Strome Turben Cycle ",
    priceDiscount: 10000,
    priceOriginal: 12000,
    category: "Adventure",
    offer: 4 % "off"
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/71G4stZQ4dL._SL1500_.jpg",
    title: "Off Road Cycle ",
    priceDiscount: 10880,
    priceOriginal: 12000,
    offer: 3
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/81el+OWOf1L._SL1500_.jpg",
    title: "Pink Aww Cycle ",
    priceDiscount: 10000,
    priceOriginal: 12000,
    category: "Girl",
    offer: 3
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/81FtSzYNuwL._SL1500_.jpg",
    title: "Adventure Cycle ",
    priceDiscount: 10000,
    priceOriginal: 12000,
    category: "Adventure",
    offer: 3
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/81FtSzYNuwL._SL1500_.jpg",
    title: "  Kid Cycle ",
    priceDiscount: 10000,
    priceOriginal: 12000,
    category: "Kid",
    offer: 3
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/81ZplH7yjwL._SX569_.jpg",
    title: "LEADER Urban Girl ",
    priceDiscount: 10000,
    priceOriginal: 12000,
    category: "Girl",
    offer: 3
  },
];
