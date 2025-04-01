
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { BadgeCheck, Clock, Server, Activity, HardDrive, Cpu, RefreshCcw, Database } from 'lucide-react';

const ServerStatus = () => {
  // Mock data for server status
  const serverStatus = {
    uptime: '99.98%',
    responseTime: '120ms',
    lastUpdated: new Date().toLocaleString(),
    cpuUsage: 35,
    memoryUsage: 42,
    diskUsage: 68,
    activeConnections: 215,
    databaseStatus: 'Healthy',
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Server Status</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 bg-primary/10 rounded-full mb-4">
                <BadgeCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-sm font-medium mb-2">Uptime</h3>
              <p className="text-2xl font-bold">{serverStatus.uptime}</p>
              <p className="text-xs text-muted-foreground mt-1">Last 30 days</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 bg-primary/10 rounded-full mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-sm font-medium mb-2">Response Time</h3>
              <p className="text-2xl font-bold">{serverStatus.responseTime}</p>
              <p className="text-xs text-muted-foreground mt-1">Average</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 bg-primary/10 rounded-full mb-4">
                <Activity className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-sm font-medium mb-2">Active Connections</h3>
              <p className="text-2xl font-bold">{serverStatus.activeConnections}</p>
              <p className="text-xs text-muted-foreground mt-1">Current</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 bg-primary/10 rounded-full mb-4">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-sm font-medium mb-2">Database</h3>
              <p className="text-2xl font-bold">{serverStatus.databaseStatus}</p>
              <p className="text-xs text-muted-foreground mt-1">Current status</p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Resource Usage</CardTitle>
            <div className="flex items-center text-sm text-muted-foreground">
              <RefreshCcw className="h-4 w-4 mr-1" />
              Last updated: {serverStatus.lastUpdated}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Cpu className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm font-medium">CPU Usage</span>
                </div>
                <span className="text-sm">{serverStatus.cpuUsage}%</span>
              </div>
              <Progress value={serverStatus.cpuUsage} className="h-2" />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Server className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm font-medium">Memory Usage</span>
                </div>
                <span className="text-sm">{serverStatus.memoryUsage}%</span>
              </div>
              <Progress value={serverStatus.memoryUsage} className="h-2" />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <HardDrive className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm font-medium">Disk Usage</span>
                </div>
                <span className="text-sm">{serverStatus.diskUsage}%</span>
              </div>
              <Progress value={serverStatus.diskUsage} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>System Events</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">System Update</span>
                <span className="text-xs text-muted-foreground">Today, 09:15 AM</span>
              </div>
              <p className="text-sm text-muted-foreground">Scheduled maintenance completed successfully. All systems operational.</p>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Traffic Spike</span>
                <span className="text-xs text-muted-foreground">Yesterday, 02:30 PM</span>
              </div>
              <p className="text-sm text-muted-foreground">Unusual traffic spike detected. System scaled resources automatically.</p>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Security Scan</span>
                <span className="text-xs text-muted-foreground">2 days ago, 11:45 PM</span>
              </div>
              <p className="text-sm text-muted-foreground">Weekly security scan completed. No vulnerabilities detected.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServerStatus;
