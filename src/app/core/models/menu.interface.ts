export interface IMenuItem {
    name: string;
    route?: string | null;
    active?: boolean;
    icon?: string;
    items?: Array<ISubMenuItem>;
  }
  
  export interface ISubMenuItem {  
    name: string;
    route: string | null;
    icon?: string;
    active?: boolean;
    items?: Array<ISubMenuItem>;
  }