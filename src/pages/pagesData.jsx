import Home from "./home/Home";
import Stickers from "./stickers/Stickers";
import StickerPicker from "./stickers/StickerPicker";
import StickerDisplay from "./stickers/StickerDisplay";

const pagesData = [
  {
    path: "/unfinity-extras-helper/",
    element: <Home />,
    title: "home"
  },
  {
    path: "/unfinity-extras-helper/stickers",
    element: <Stickers />,
    title: "stickers"
  },
  {
    path: "/unfinity-extras-helper/stickers/picker/:num",
    element: <StickerPicker />,
    title: "stickers-picker"
  },
  {
    path: "/unfinity-extras-helper/stickers/display",
    element: <StickerDisplay />,
    title: "stickers-display"
  },
];

export default pagesData;