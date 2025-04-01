
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Circle } from 'lucide-react';

// Mock data
const monthlyData = [
  { month: 'Jan', income: 8000, expenses: 6200, savings: 1800 },
  { month: 'Feb', income: 7800, expenses: 5900, savings: 1900 },
  { month: 'Mar', income: 9500, expenses: 7100, savings: 2400 },
  { month: 'Apr', income: 8900, expenses: 6700, savings: 2200 },
  { month: 'May', income: 9200, expenses: 6500, savings: 2700 },
  { month: 'Jun', income: 8700, expenses: 7100, savings: 1600 },
  { month: 'Jul', income: 9600, expenses: 7400, savings: 2200 },
  { month: 'Aug', income: 10200, expenses: 7800, savings: 2400 },
  { month: 'Sep', income: 9800, expenses: 7200, savings: 2600 },
  { month: 'Oct', income: 10500, expenses: 7900, savings: 2600 },
  { month: 'Nov', income: 11000, expenses: 8200, savings: 2800 },
  { month: 'Dec', income: 12000, expenses: 8800, savings: 3200 },
];

const categoryData = [
  { name: 'Housing', value: 35 },
  { name: 'Food', value: 20 },
  { name: 'Transport', value: 15 },
  { name: 'Entertainment', value: 10 },
  { name: 'Utilities', value: 8 },
  { name: 'Shopping', value: 7 },
  { name: 'Other', value: 5 },
];

const COLORS = ['#8b5cf6', '#6366f1', '#ec4899', '#f43f5e', '#f97316', '#eab308', '#84cc16'];

const incomeVsExpensesData = [
  { year: '2020', income: 85000, expenses: 65000 },
  { year: '2021', income: 92000, expenses: 70000 },
  { year: '2022', income: 100000, expenses: 75000 },
  { year: '2023', income: 115000, expenses: 82000 },
];

const savingsData = [
  { year: '2020', amount: 20000 },
  { year: '2021', amount: 22000 },
  { year: '2022', amount: 25000 },
  { year: '2023', amount: 33000 },
];

const Analytics = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Analytics</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Cash Flow</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`$${value}`, ""]} />
                  <Legend />
                  <Bar dataKey="income" name="Income" fill="#22c55e" />
                  <Bar dataKey="expenses" name="Expenses" fill="#ef4444" />
                  <Bar dataKey="savings" name="Savings" fill="#8b5cf6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Expense Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="name"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, ""]} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Detailed Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="incomeVsExpenses">
            <TabsList className="mb-4">
              <TabsTrigger value="incomeVsExpenses">Income vs Expenses</TabsTrigger>
              <TabsTrigger value="savings">Savings Trend</TabsTrigger>
            </TabsList>
            <TabsContent value="incomeVsExpenses">
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={incomeVsExpensesData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`$${value}`, ""]} />
                    <Legend />
                    <Line type="monotone" dataKey="income" name="Income" stroke="#22c55e" strokeWidth={2} dot={{ r: 5 }} activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="expenses" name="Expenses" stroke="#ef4444" strokeWidth={2} dot={{ r: 5 }} activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center p-4 border rounded-lg">
                  <Circle className="text-profit mr-2" size={16} fill="#22c55e" />
                  <div>
                    <h3 className="text-sm font-medium">Income Growth</h3>
                    <p className="text-2xl font-bold">+35.3%</p>
                    <p className="text-sm text-muted-foreground">From 2020 to 2023</p>
                  </div>
                </div>
                <div className="flex items-center p-4 border rounded-lg">
                  <Circle className="text-loss mr-2" size={16} fill="#ef4444" />
                  <div>
                    <h3 className="text-sm font-medium">Expense Growth</h3>
                    <p className="text-2xl font-bold">+26.2%</p>
                    <p className="text-sm text-muted-foreground">From 2020 to 2023</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="savings">
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={savingsData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`$${value}`, "Amount"]} />
                    <Bar dataKey="amount" name="Savings" fill="#8b5cf6">
                      {savingsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill="#8b5cf6" />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 p-4 border rounded-lg">
                <div className="flex items-center">
                  <Circle className="text-primary mr-2" size={16} fill="#8b5cf6" />
                  <div>
                    <h3 className="text-sm font-medium">Savings Growth</h3>
                    <p className="text-2xl font-bold">+65.0%</p>
                    <p className="text-sm text-muted-foreground">From 2020 to 2023</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
