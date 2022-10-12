import {
  mdiHomeOutline,
  mdiAlphaTBoxOutline,
  mdiEyeOutline,
  mdiCreditCardOutline,
  mdiTable,
  mdiFileOutline,
  mdiFormSelect,
  mdiAccountCogOutline,
} from '@mdi/js'

const menuTree = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'item',
    icon: mdiHomeOutline,
    routes: 'dashboard',
  },
  {
    id: 'account_settings',
    title: 'Account Settings',
    type: 'item',
    icon: mdiAccountCogOutline,
    routes: 'pages-account-settings',
  },
  {
    id: 'pages',
    title: 'Pages',
    type: 'group',
    icon: mdiFileOutline,
    children: [
      {
        id: 'login',
        title: 'Login',
        type: 'item',
        routes: 'pages-login',
        target: '_blank',
      },
      {
        id: 'register',
        title: 'Register',
        type: 'item',
        routes: 'pages-register',
        target: '_blank',
      },
      {
        id: 'error',
        title: 'Error',
        type: 'item',
        routes: 'error-404',
        target: '_blank',
      },
      {
        id: 'Level 2',
        title: 'Level 2',
        type: 'group',
        children: [
          {
            id: 'Level 3',
            title: 'Level 3',
            type: 'item',
            icon: mdiAlphaTBoxOutline,
            routes: 'typography',
          },
          {
            id: 'Level 3 1',
            title: 'Level 3',
            type: 'item',
            icon: mdiAlphaTBoxOutline,
            routes: 'icons',
          },
          {
            id: 'Level 3 2',
            title: 'Level 3',
            type: 'item',
            icon: mdiAlphaTBoxOutline,
            routes: 'icons',
          },
        ],
      },
    ],
  },
  {
    id: 'USER_INTERFACE',
    title: 'USER INTERFACE',
    type: 'section',
  },
  {
    id: 'Typography',
    title: 'Typography',
    type: 'item',
    icon: mdiAlphaTBoxOutline,
    routes: 'icons',
  },
  {
    id: 'Icons',
    title: 'Icons',
    type: 'item',
    icon: mdiEyeOutline,
    routes: 'icons',
  },
  {
    id: 'cards',
    title: 'Cards',
    type: 'item',
    icon: mdiCreditCardOutline,
    routes: 'cards',
  },
  {
    id: 'tables',
    title: 'Tables',
    type: 'item',
    icon: mdiTable,
    routes: 'simple-table',
  },
  {
    id: 'Form Layouts',
    title: 'Form Layouts',
    type: 'item',
    icon: mdiFormSelect,
    routes: 'form-layouts',
  },
]

export default menuTree
