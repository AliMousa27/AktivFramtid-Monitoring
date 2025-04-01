
// Define the purchase type
export type Purchase = {
  date: string;
  description: string;
  category: 'Team Accounts' | 'Cups' | 'Equipment' | 'Memberships' | 'Market Sales';
  amount: number;
};

// Define the user type with purchases
export type User = {
  id: string;
  name: string;
  email: string;
  team: string;
  purchases: Purchase[];
};

// Mock user data
export const users: User[] = [
  {
    id: '1',
    name: 'Emma Larsson',
    email: 'emma.larsson@example.com',
    team: 'Development',
    purchases: [
      { date: '2023-12-01', description: 'Annual Team Account License', category: 'Team Accounts', amount: 3500 },
      { date: '2023-12-10', description: 'Team Building Equipment', category: 'Equipment', amount: 1200 },
      { date: '2023-11-15', description: 'Branded Coffee Cups', category: 'Cups', amount: 450 },
      { date: '2023-11-05', description: 'Developer Conference Membership', category: 'Memberships', amount: 1800 },
    ]
  },
  {
    id: '2',
    name: 'Lukas Nilsson',
    email: 'lukas.nilsson@example.com',
    team: 'Design',
    purchases: [
      { date: '2023-12-05', description: 'Design Software License', category: 'Team Accounts', amount: 2800 },
      { date: '2023-11-20', description: 'Drawing Tablets', category: 'Equipment', amount: 3200 },
      { date: '2023-11-10', description: 'Designer Cups', category: 'Cups', amount: 350 },
      { date: '2023-12-15', description: 'UX Conference Membership', category: 'Memberships', amount: 2100 },
    ]
  },
  {
    id: '3',
    name: 'Sofia Bergström',
    email: 'sofia.bergstrom@example.com',
    team: 'Marketing',
    purchases: [
      { date: '2023-12-03', description: 'Marketing Software Subscription', category: 'Team Accounts', amount: 1950 },
      { date: '2023-11-25', description: 'Exhibition Equipment', category: 'Equipment', amount: 4200 },
      { date: '2023-12-12', description: 'Marketing Week Items', category: 'Market Sales', amount: 1850 },
      { date: '2023-11-08', description: 'Industry Network Membership', category: 'Memberships', amount: 1500 },
    ]
  },
  {
    id: '4',
    name: 'Anders Johansson',
    email: 'anders.johansson@example.com',
    team: 'Sales',
    purchases: [
      { date: '2023-12-07', description: 'CRM Software', category: 'Team Accounts', amount: 2200 },
      { date: '2023-11-22', description: 'Presentation Equipment', category: 'Equipment', amount: 1850 },
      { date: '2023-12-18', description: 'Client Meeting Items', category: 'Market Sales', amount: 2200 },
      { date: '2023-11-12', description: 'Sales Conference Membership', category: 'Memberships', amount: 2300 },
    ]
  },
  {
    id: '5',
    name: 'Maja Lindholm',
    email: 'maja.lindholm@example.com',
    team: 'Product',
    purchases: [
      { date: '2023-12-09', description: 'Product Planning Software', category: 'Team Accounts', amount: 2500 },
      { date: '2023-11-28', description: 'Testing Equipment', category: 'Equipment', amount: 3850 },
      { date: '2023-12-16', description: 'Product Launch Merchandise', category: 'Market Sales', amount: 3200 },
      { date: '2023-11-17', description: 'Coffee Cups for Product Team', category: 'Cups', amount: 380 },
    ]
  },
  {
    id: '6',
    name: 'Erik Sundberg',
    email: 'erik.sundberg@example.com',
    team: 'Finance',
    purchases: [
      { date: '2023-12-11', description: 'Accounting Software', category: 'Team Accounts', amount: 3150 },
      { date: '2023-11-30', description: 'Office Equipment', category: 'Equipment', amount: 1650 },
      { date: '2023-12-20', description: 'Finance Cups', category: 'Cups', amount: 420 },
      { date: '2023-11-19', description: 'Financial Analyst Membership', category: 'Memberships', amount: 1750 },
    ]
  },
  {
    id: '7',
    name: 'Hanna Ekström',
    email: 'hanna.ekstrom@example.com',
    team: 'HR',
    purchases: [
      { date: '2023-12-13', description: 'HR Management System', category: 'Team Accounts', amount: 2350 },
      { date: '2023-12-02', description: 'Training Equipment', category: 'Equipment', amount: 1950 },
      { date: '2023-11-24', description: 'Recruitment Items', category: 'Market Sales', amount: 1400 },
      { date: '2023-12-08', description: 'HR Professional Membership', category: 'Memberships', amount: 1600 },
    ]
  },
];
