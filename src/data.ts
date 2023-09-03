import { FiUsers, FiUser, FiEdit, FiSettings } from 'react-icons/fi';
import {
  AiOutlinePieChart,
  AiOutlineHome,
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import { BsBoxSeam, BsFileEarmarkMedical } from 'react-icons/bs';
import { HiOutlineNewspaper } from 'react-icons/hi';
import { RxDashboard } from 'react-icons/rx';
import { LuLayoutList, LuCalendarDays, LuDatabaseBackup } from 'react-icons/lu';
import {
  FcBullish,
  FcConferenceCall,
  FcFilingCabinet,
  FcSalesPerformance,
} from 'react-icons/fc';

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

export const chartBoxConversion = {
  color: 'gold',
  icon: FcBullish,
  title: 'Total Ratio',
  number: '2.6',
  dataKey: 'ratio',
  percentage: 12,
  chartData: [
    { name: 'Sun', ratio: 400 },
    { name: 'Mon', ratio: 600 },
    { name: 'Tue', ratio: 500 },
    { name: 'Wed', ratio: 700 },
    { name: 'Thu', ratio: 400 },
    { name: 'Fri', ratio: 500 },
    { name: 'Sat', ratio: 450 },
  ],
};

export const chartBoxRevenue = {
  color: 'teal',
  icon: FcSalesPerformance,
  title: 'Total Revenue',
  number: '$56.432',
  dataKey: 'revenue',
  percentage: -12,
  chartData: [
    { name: 'Sun', revenue: 400 },
    { name: 'Mon', revenue: 600 },
    { name: 'Tue', revenue: 500 },
    { name: 'Wed', revenue: 700 },
    { name: 'Thu', revenue: 400 },
    { name: 'Fri', revenue: 500 },
    { name: 'Sat', revenue: 450 },
  ],
};

export const chartBoxProduct = {
  color: 'skyblue',
  icon: FcFilingCabinet,
  title: 'Total Products',
  number: '238',
  dataKey: 'products',
  percentage: 21,
  chartData: [
    { name: 'Sun', products: 400 },
    { name: 'Mon', products: 600 },
    { name: 'Tue', products: 500 },
    { name: 'Wed', products: 700 },
    { name: 'Thu', products: 400 },
    { name: 'Fri', products: 500 },
    { name: 'Sat', products: 450 },
  ],
};

export const barChartBoxVisit = {
  title: 'Total Visit',
  color: '#FF8042',
  dataKey: 'visit',
  chartData: [
    {
      name: 'Sun',
      visit: 4000,
    },
    {
      name: 'Mon',
      visit: 3000,
    },
    {
      name: 'Tue',
      visit: 2000,
    },
    {
      name: 'Wed',
      visit: 2780,
    },
    {
      name: 'Thu',
      visit: 1890,
    },
    {
      name: 'Fri',
      visit: 2390,
    },
    {
      name: 'Sat',
      visit: 3490,
    },
  ],
};

export const barChartBoxRevenue = {
  title: 'Profit Earned',
  color: '#8884d8',
  dataKey: 'profit',
  chartData: [
    {
      name: 'Sun',
      profit: 4000,
    },
    {
      name: 'Mon',
      profit: 3000,
    },
    {
      name: 'Tue',
      profit: 2000,
    },
    {
      name: 'Wed',
      profit: 2780,
    },
    {
      name: 'Thu',
      profit: 1890,
    },
    {
      name: 'Fri',
      profit: 2390,
    },
    {
      name: 'Sat',
      profit: 3490,
    },
  ],
};

export const LeadsBySource = {
  title: 'Leads By Source',
  chartData: [
    { name: 'Mobile', value: 400, color: '#0088fe' },
    { name: 'Desktop', value: 300, color: '#00c49f' },
    { name: 'Laptop', value: 500, color: '#ffbb28' },
    { name: 'Tablet', value: 200, color: '#ff8042' },
  ],
};

export const revenueAnalytics = {
  title: 'Revenue Analytics',
  areaData: [
    { dataKey: 'electronic', stroke: '#8884d8', fill: '#8884d8' },

    { dataKey: 'clothes', stroke: '#82ca9d', fill: '#82ca9d' },

    { dataKey: 'books', stroke: '#ffc658', fill: '#ffc658' },
  ],
  chartData: [
    {
      name: 'Sun',
      books: 4000,
      clothes: 2400,
      electronic: 2400,
    },
    {
      name: 'Mon',
      books: 3000,
      clothes: 1398,
      electronic: 2210,
    },
    {
      name: 'Tue',
      books: 2000,
      clothes: 9800,
      electronic: 2290,
    },
    {
      name: 'Wed',
      books: 2780,
      clothes: 3908,
      electronic: 2000,
    },
    {
      name: 'Thu',
      books: 1890,
      clothes: 4800,
      electronic: 2181,
    },
    {
      name: 'Fri',
      books: 2390,
      clothes: 3800,
      electronic: 2500,
    },
    {
      name: 'Sat',
      books: 3490,
      clothes: 4300,
      electronic: 2100,
    },
  ],
};
