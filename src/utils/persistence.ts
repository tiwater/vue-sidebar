class Keys {
  static sidebarStatus = 'xside-sidebar-status';
}

enum SidebarStatus {
  Expanded = 'expanded',
  Collapsed = 'collapsed'
}

export const loadSidebarStatus = (): boolean => {
  const status = localStorage.getItem(Keys.sidebarStatus);
  return !!status && status === SidebarStatus.Expanded;
};

export const saveSidebarStatus = (expanded: boolean) => {
  localStorage.setItem(
    Keys.sidebarStatus, 
    expanded ? SidebarStatus.Expanded : SidebarStatus.Collapsed
  );
};
