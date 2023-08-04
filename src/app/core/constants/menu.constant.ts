import { IMenuItem } from '../models/menu.interface';

export const MENU_LIST: IMenuItem[] = [
  {
    name: 'Calendario',
    active: false,
    route: '/calendario',
    icon: 'fa-solid fa-calendar',
  },
  {
    name: 'Usuario',
    active: false,
    icon: 'fa-solid fa-user',
    items: [
      { name: 'Ver Usuario', route: '/usuario', active: false },
      {
        name: 'Agregar Usuario',
        route: '/usuario/agregar',
        active: false,
      },
      { name: 'Editar Usuario', route: '/usuario/editar', active: false },
    ],
  },
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
  {
    name: 'Proyectos',
    active: false,
    icon: 'fa-solid fa-diagram-project',
    items: [
      { name: 'Ver Proyectos', route: '/proyectos', active: false },
      {
        name: 'Agregar Proyectos',
        route: '/proyectos/agregar',
        active: false,
      },
      { name: 'Editar Proyectos', route: '/proyectos/editar', active: false },
    ],
  },
];
