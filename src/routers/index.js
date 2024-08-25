import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundpage";
import Original from "../pages/OriginalPage/OriginalPage";
import Genres from "../pages/GenresPage/GenresPage";

export const routes = [
  {
    path: "/",
    page: HomePage,
    isShowHeader: true,
  },
  {
    path: "/original",
    page: Original,
    isShowHeader: true,
  },
  {
    path: "/genres",
    page: Genres,
    isShowHeader: true,
  },
  {
    path: "*",
    page: NotFoundPage,
  },
];
