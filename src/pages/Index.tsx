
import React, { useState } from 'react';
import CashFlowSummary from '@/components/dashboard/CashFlowSummary';
import CashFlowCharts from '@/components/dashboard/CashFlowCharts';
import TransactionsTable from '@/components/dashboard/TransactionsTable';
import TimeFilter from '@/components/dashboard/TimeFilter';
import FinancialTip from '@/components/dashboard/FinancialTip';

// Mock data - in a real app, this would come from an API
const mockExpenseData = [
  { name: 'Food', value: 1200, color: '#8b5cf6' },
  { name: 'Rent', value: 2500, color: '#6366f1' },
  { name: 'Transport', value: 450, color: '#ec4899' },
  { name: 'Entertainment', value: 350, color: '#f43f5e' },
  { name: 'Utilities', value: 400, color: '#f97316' },
  { name: 'Shopping', value: 680, color: '#eab308' },
  { name: 'Travel', value: 1200, color: '#84cc16' },
  { name: 'Other', value: 300, color: '#22c55e' },
];

const mockTimeSeriesData = [
  { date: 'Jan', income: 8000, expenses: 6200 },
  { date: 'Feb', income: 7800, expenses: 5900 },
  { date: 'Mar', income: 9500, expenses: 7100 },
  { date: 'Apr', income: 8900, expenses: 6700 },
  { date: 'May', income: 9200, expenses: 6500 },
  { date: 'Jun', income: 8700, expenses: 7100 },
  { date: 'Jul', income: 9600, expenses: 7400 },
  { date: 'Aug', income: 10200, expenses: 7800 },
  { date: 'Sep', income: 9800, expenses: 7200 },
  { date: 'Oct', income: 10500, expenses: 7900 },
  { date: 'Nov', income: 11000, expenses: 8200 },
  { date: 'Dec', income: 12000, expenses: 8800 },
];

const mockCategoryComparisonData = [
  { category: 'Salary', income: 9500, expenses: 0 },
  { category: 'Freelance', income: 2500, expenses: 0 },
  { category: 'Housing', income: 0, expenses: 2500 },
  { category: 'Food', income: 0, expenses: 1200 },
  { category: 'Transport', income: 0, expenses: 450 },
  { category: 'Entertainment', income: 0, expenses: 350 },
  { category: 'Shopping', income: 0, expenses: 680 },
];

const mockTransactions = [
  { id: '1', date: '2023-12-01', description: 'Monthly Salary', category: 'salary', amount: 9500, type: 'income' as const },
  { id: '2', date: '2023-12-03', description: 'Apartment Rent', category: 'housing', amount: 2500, type: 'expense' as const },
  { id: '3', date: '2023-12-05', description: 'Grocery Store', category: 'food', amount: 150, type: 'expense' as const },
  { id: '4', date: '2023-12-08', description: 'Freelance Project', category: 'freelance', amount: 1200, type: 'income' as const },
  { id: '5', date: '2023-12-10', description: 'Gas Station', category: 'transport', amount: 60, type: 'expense' as const },
  { id: '6', date: '2023-12-12', description: 'Restaurant Dinner', category: 'food', amount: 85, type: 'expense' as const },
  { id: '7', date: '2023-12-15', description: 'Freelance Project', category: 'freelance', amount: 1300, type: 'income' as const },
  { id: '8', date: '2023-12-18', description: 'Movie Tickets', category: 'entertainment', amount: 35, type: 'expense' as const },
  { id: '9', date: '2023-12-20', description: 'Online Shopping', category: 'shopping', amount: 120, type: 'expense' as const },
  { id: '10', date: '2023-12-22', description: 'Utility Bills', category: 'utilities', amount: 200, type: 'expense' as const },
  { id: '11', date: '2023-12-25', description: 'Grocery Store', category: 'food', amount: 130, type: 'expense' as const },
  { id: '12', date: '2023-12-28', description: 'Transport Pass', category: 'transport', amount: 80, type: 'expense' as const },
];

const financialTips = [
  "Try the 50/30/20 rule: 50% for needs, 30% for wants, and 20% for savings and debt repayment.",
  "Review your subscriptions monthly - you might be paying for services you no longer use.",
  "Setting up automatic transfers to your savings account can help build wealth without thinking about it.",
  "Consider tracking every expense for a month to identify spending patterns and potential savings.",
  "When shopping online, leave items in your cart for 24 hours before purchasing to avoid impulse buying."
];

const Dashboard = () => {
  const [timePeriod, setTimePeriod] = useState('thisWeek');
  
  // In a real app, this data would change based on the selected time period
  const earnings = 12000;
  const spendings = 8000;
  
  const handleTimeFilterChange = (period: string) => {
    setTimePeriod(period);
    // In a real app, you would fetch new data based on the selected time period
    console.log(`Filter changed to: ${period}`);
  };

  // Randomly select a financial tip
  const randomTip = financialTips[Math.floor(Math.random() * financialTips.length)];

  return (
    <div>
      <FinancialTip tip={randomTip} />
      
      <TimeFilter onFilterChange={handleTimeFilterChange} />
      
      <CashFlowSummary 
        earnings={earnings} 
        spendings={spendings} 
        earningsPercentage={5.2} 
        spendingsPercentage={3.8}
        earningsTrend="up"
        spendingsTrend="up"
      />
      
      <h2 className="dashboard-section-title">Financial Overview</h2>
      <CashFlowCharts 
        expenseData={mockExpenseData} 
        timeSeriesData={mockTimeSeriesData}
        categoryComparisonData={mockCategoryComparisonData}
      />
      
      <TransactionsTable transactions={mockTransactions} />
    </div>
  );
};

export default Dashboard;
