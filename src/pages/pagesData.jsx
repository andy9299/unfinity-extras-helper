import Home from "./home/Home";
import Stickers from "./stickers/Stickers";
import StickerPicker from "./stickers/StickerPicker";
import StickerDisplay from "./stickers/StickerDisplay";

const pagesData = [
  {
    path: "/",
    element: <Home />,
    title: "home"
  },
  {
    path: "/stickers",
    element: <Stickers />,
    title: "stickers"
  },
  {
    path: "/stickers/picker/:num",
    element: <StickerPicker />,
    title: "stickers-picker"
  },
  {
    path: "/stickers/display",
    element: <StickerDisplay />,
    title: "stickers-display"
  },
];

export default pagesData;