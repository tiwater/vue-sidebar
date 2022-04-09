import Cookies from 'js-cookie';

class Keys {
  static sidebarStatus = 'xside-sidebar-status';
}

export const getSidebar = () => Cookies.get(Keys.sidebarStatus);
export const setSidebar = (status: string) => Cookies.set(Keys.sidebarStatus, status);
