import pages from "../../pages";
import { LOGIN_PATH, REGISTER_PATH, HOME_PATH, PROFILE_PATH } from "./paths";

const PAGE_LOGIN = {
  component: pages.Login,
  path: LOGIN_PATH,
  isPrivate: false,
};

const PAGE_REGISTER = {
  component: pages.Register,
  path: REGISTER_PATH,
  isPrivate: false,
};

const PAGE_HOME = {
  component: pages.Home,
  path: HOME_PATH,
  isPrivate: true,
};

const PAGE_PROFILE = {
  component: pages.Profile,
  path: PROFILE_PATH,
  isPrivate: true,
};

const routes = [PAGE_LOGIN, PAGE_REGISTER, PAGE_HOME, PAGE_PROFILE];

export default routes;
