import { MdHomeFilled } from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";
import { BiSolidMoviePlay } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";

export const navigation = [
    {
      label: "TV Shows",
      href: "MoviesDB/tv",
      icons: <PiTelevisionFill />
    },
    {
      label: "Movies",
      href: "MoviesDB/movie",
      icons: <BiSolidMoviePlay /> 
    }
  ];
  
  export const mobileNavigation = [
    {
      label: "Home",
      href: "/MoviesDB/",
      icons: <MdHomeFilled />
    },
    ...navigation,
    {
        label: "search",
        href: "MoviesDB/search",
        icons: <IoSearchOutline />
    }
  ]