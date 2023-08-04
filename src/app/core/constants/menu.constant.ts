import { IMenuItem } from '../models/menu.interface';

export const MENU_LIST: IMenuItem[] = [
  {
    name: 'Clientes',
    active: false,
    icon: 'fa-solid fa-users',
    items: [
      { name: 'Ver Clientes', route: '/clientes', active: false },
      { name: 'Agregar Cliente', route: '/clientes/agregar', active: false },
      { name: 'Editar Cliente', route: '/clientes/editar', active: false },
    ],
  },
  {
    name: 'Proveedores',
    active: false,
    icon: 'fa-solid fa-truck-moving',
    items: [
      { name: 'Ver Proveedores', route: '/proveedores', active: false },
      {
        name: 'Agregar Proveedor',
        route: '/proveedores/agregar',
        active: false,
      },
      { name: 'Editar Proveedor', route: '/proveedores/editar', active: false },
    ],
  },
];
