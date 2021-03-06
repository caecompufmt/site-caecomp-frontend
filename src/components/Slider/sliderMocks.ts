import { SlideItem } from "./types";

import imageOne from "./slider/mock@9600x5400.jpg";
import imageTwo from "./slider/mock2@9600x5400.jpg";
import imageThree from "./slider/mock3@5375x3583.jpg";

const slideItems: SlideItem[] = [
  {
    id: 0,
    category: "Eventos",
    title: "Lançada a 1 semana da Engenharia de Computação!",
    description:
      "O evento é realizado pelo Curso de Engenharia de Computação em parceria com a Faculdade de Engenharia da UFMT",
    src: imageOne,
  },
  {
    id: 1,
    category: "Ipsum",
    title: "Et non aliqua proident enim aliqua elit.",
    description:
      "Do culpa nulla ex eu velit tempor nisi. Laborum sunt deserunt reprehenderit ex anim. Lorem culpa fugiat pariatur aute magna. Cillum cillum exercitation culpa sunt et. Nostrud deserunt nisi veniam voluptate. Duis dolore laboris est in dolor ad anim. Anim in elit nisi cupidatat cupidatat eiusmod nostrud excepteur.",
    src: imageTwo,
  },
  {
    id: 2,
    category: "Lorem Ipsum",
    title: "Ullamco incididunt reprehenderit labore et aute velit voluptate.",
    description:
      "Aliquip mollit laboris consectetur eu reprehenderit laboris consectetur commodo consequat elit. Consequat cillum laboris dolor dolore ea reprehenderit voluptate. Aliquip pariatur officia deserunt quis voluptate laborum sit elit exercitation nisi elit. Aute quis labore duis officia non cupidatat proident.",
    src: imageThree,
  },
];

export default slideItems;
