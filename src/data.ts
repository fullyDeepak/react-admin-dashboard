import { FiUsers, FiUser, FiEdit, FiSettings } from 'react-icons/fi';
import {
  AiOutlinePieChart,
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from 'react-icons/ai';
import { BsBoxSeam, BsFileEarmarkMedical } from 'react-icons/bs';
import { HiOutlineNewspaper } from 'react-icons/hi';
import { RxDashboard } from 'react-icons/rx';
import { LuLayoutList, LuCalendarDays, LuDatabaseBackup } from 'react-icons/lu';
import { FcConferenceCall } from 'react-icons/fc';

export const menu = [
  {
    id: 1,
    title: 'main',
    listItems: [
      {
        id: 1,
        title: 'Homepage',
        url: '/',
        iconComponent: AiOutlineHome,
      },
      {
        id: 2,
        title: 'Profile',
        url: '/users/1',
        iconComponent: FiUser,
      },
    ],
  },
  {
    id: 2,
    title: 'lists',
    listItems: [
      {
        id: 1,
        title: 'Users',
        url: '/users',
        iconComponent: FiUsers,
      },
      {
        id: 2,
        title: 'Products',
        url: '/products',
        iconComponent: AiOutlineShoppingCart,
      },
      {
        id: 3,
        title: 'Orders',
        url: '/orders',
        iconComponent: BsBoxSeam,
      },
      {
        id: 4,
        title: 'Posts',
        url: '/posts',
        iconComponent: HiOutlineNewspaper,
      },
    ],
  },
  {
    id: 3,
    title: 'general',
    listItems: [
      {
        id: 1,
        title: 'Elements',
        url: '/',
        iconComponent: RxDashboard,
      },
      {
        id: 2,
        title: 'Notes',
        url: '/',
        iconComponent: FiEdit,
      },
      {
        id: 3,
        title: 'Forms',
        url: '/',
        iconComponent: LuLayoutList,
      },
      {
        id: 4,
        title: 'Calender',
        url: '/',
        iconComponent: LuCalendarDays,
      },
    ],
  },
  {
    id: 4,
    title: 'Maintenance',
    listItems: [
      {
        id: 1,
        title: 'Settings',
        url: '/',
        iconComponent: FiSettings,
      },
      {
        id: 2,
        title: 'Backups',
        url: '/',
        iconComponent: LuDatabaseBackup,
      },
    ],
  },
  {
    id: 5,
    title: 'analytics',
    listItems: [
      {
        id: 1,
        title: 'Charts',
        url: '/',
        iconComponent: AiOutlinePieChart,
      },
      {
        id: 2,
        title: 'Logs',
        url: '/',
        iconComponent: BsFileEarmarkMedical,
      },
    ],
  },
];

export const topDealUsers = [
  {
    id: 1,
    img: 'https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=80&lazy=load',
    username: 'Elva McDonald',
    email: 'elva@gmail.com',
    amount: '3.668',
  },
  {
    id: 2,
    img: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=80',
    username: 'Linnie Nelson',
    email: 'linnie@gmail.com',
    amount: '3.256',
  },
  {
    id: 3,
    img: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=80',
    username: 'Brent Reeves',
    email: 'brent@gmail.com',
    amount: '2.998',
  },
  {
    id: 4,
    img: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=80',
    username: 'Adeline Watson',
    email: 'adeline@gmail.com',
    amount: '2.512',
  },
  {
    id: 5,
    img: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=80',
    username: 'Juan Harrington',
    email: 'juan@gmail.com',
    amount: '2.134',
  },
  {
    id: 6,
    img: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=80',
    username: 'Augusta McGee',
    email: 'augusta@gmail.com',
    amount: '1.932',
  },
  {
    id: 7,
    img: 'https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=80',
    username: 'Angel Thomas',
    email: 'angel@gmail.com',
    amount: '1.560',
  },
];

export const chartBoxUser = {
  color: '#8884d8',
  icon: FcConferenceCall,
  title: 'Total Users',
  number: '11.238',
  dataKey: 'users',
  percentage: 45,
  chartData: [
    { name: 'Sun', users: 400 },
    { name: 'Mon', users: 600 },
    { name: 'Tue', users: 500 },
    { name: 'Wed', users: 700 },
    { name: 'Thu', users: 400 },
    { name: 'Fri', users: 500 },
    { name: 'Sat', users: 450 },
  ],
};
