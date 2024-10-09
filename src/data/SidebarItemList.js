import postIcon from "../images/icons/post.svg";
import homeIcon from "../images/icons/home.svg";
import newPostIcon from "../images/icons/post_add.svg";
import categorIcon from "../images/icons/category.svg";
import newCategoryIcon from "../images/icons/create_new_cat.svg";
import advertIcon from "../images/icons/campaign_ads.svg";
import analyticIcon from "../images/icons/analytics.svg";
import userIcon from "../images/icons/users.svg";
import logIcon from "../images/icons/log.svg";

export const SidebarItemLists = [
  {
    tile: "Dashboard",
    url: "/dashboard",
    icon: homeIcon,
  },
  {
    tile: "Posts",
    url: "/posts",
    icon: postIcon,
  },
  {
    tile: "New Posts",
    url: "/create-posts",
    icon: newPostIcon,
  },
  {
    tile: "Categories",
    url: "/categories",
    icon: categorIcon,
  },
  {
    tile: "New Category",
    url: "/create-category",
    icon: newCategoryIcon,
  },
  {
    tile: "Adverts",
    url: "/adverts",
    icon: advertIcon,
  },
  {
    tile: "Analytics",
    url: "/analytics",
    icon: analyticIcon,
  },
  {
    tile: "Users",
    url: "/users",
    icon: userIcon,
  },
  {
    tile: "log",
    url: "/log",
    icon: userIcon,
  },
];
