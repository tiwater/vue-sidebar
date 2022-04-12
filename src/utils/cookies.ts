import Cookies from 'js-cookie';

class Keys {
  static sidebarStatus = 'xside-sidebar-status';
}

enum SidebarStatus {
  Expanded = 'expanded',
  Collapsed = 'collapsed'
}

export const loadSidebarStatus = (): boolean => {
  const status = Cookies.get(Keys.sidebarStatus);
  return !!status && status === SidebarStatus.Expanded;
};

export const saveSidebarStatus = (expanded: boolean) => {
  Cookies.set(
    Keys.sidebarStatus, 
    expanded ? SidebarStatus.Expanded : SidebarStatus.Collapsed
  );
};
