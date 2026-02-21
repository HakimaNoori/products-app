import Laptop from "../assets/laptop.jpg";
import Camera from "../assets/comera.jpg";
import Bag from "../assets/bag.jpg";
import HeadPhone from "../assets/headphone.jpg";
import Phone from "../assets/iphone.jpg";
import Watch from "../assets/watch.jpg";

const products = [
  {
    id: "1",
    name: "Laptop Pro",
    image: Laptop,
    price: 1200,
    description: "High-performance laptop for developers and designers."
  },
  {
    id: "2",
    name: "Wireless Headphones",
    image: HeadPhone,
    price: 200,
    description: "Noise-cancelling over-ear headphones."
  },
  {
    id: "3",
    name: "Smart Watch",
    image: Watch,
    price: 300,
    description: "Track your fitness and notifications."
  },
  {
    id: "4",
    name: "Professional Camera",
    image: Camera,
    price: 850,
    description: "Capture stunning photos and videos."
  },
  {
    id: "5",
    name: "Travel Backpack",
    image: Bag,
    price: 120,
    description: "Durable backpack for daily and travel use."
  },
  {
    id: "6",
    name: "Smartphone X",
    image: Phone,
    price: 950,
    description: "Latest generation smartphone with advanced features."
  }
];

export default products;