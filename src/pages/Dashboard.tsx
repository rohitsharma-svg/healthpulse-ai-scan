import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  MapPin, 
  TrendingUp, 
  AlertTriangle, 
  Users, 
  Calendar, 
  Filter,
  BarChart3,
  Activity
} from "lucide-react";

const Dashboard = () => {
  // Mock data for demonstration
  const stats = [
    {
      title: "Total Cases",
      value: "247",
      change: "+12%",
      trend: "up",
      icon: Users,
      color: "text-health-blue"
    },
    {
      title: "Active Alerts",
      value: "8",
      change: "+3",
      trend: "up",
      icon: AlertTriangle,
      color: "text-risk-high"
    },
    {
      title: "Risk Areas",
      value: "5",
      change: "-2",
      trend: "down",
      icon: MapPin,
      color: "text-risk-medium"
    },
    {
      title: "Recovery Rate",
      value: "94.2%",
      change: "+2.1%",
      trend: "up",
      icon: TrendingUp,
      color: "text-risk-low"
    }
  ];

  const recentCases = [
    {
      id: "C001",
      name: "Rajesh Kumar",
      age: 34,
      location: "Amethi Block",
      symptoms: ["Fever", "Diarrhea"],
      reportedAt: "2024-01-15",
      status: "Active",
      risk: "Medium"
    },
    {
      id: "C002", 
      name: "Sunita Devi",
      age: 28,
      location: "Gauriganj Block",
      symptoms: ["Vomiting", "Abdominal Pain"],
      reportedAt: "2024-01-15",
      status: "Recovering",
      risk: "Low"
    },
    {
      id: "C003",
      name: "Mohan Singh",
      age: 45,
      location: "Jagdishpur Block", 
      symptoms: ["Fever", "Diarrhea", "Dehydration"],
      reportedAt: "2024-01-14",
      status: "Active",
      risk: "High"
    },
    {
      id: "C004",
      name: "Priya Sharma",
      age: 22,
      location: "Tiloi Block",
      symptoms: ["Nausea", "Headache"],
      reportedAt: "2024-01-14",
      status: "Recovered",
      risk: "Low"
    }
  ];

  const riskAreas = [
    { area: "Jagdishpur Block", cases: 23, riskLevel: "High", trend: "+15%" },
    { area: "Amethi Block", cases: 18, riskLevel: "Medium", trend: "+8%" },
    { area: "Gauriganj Block", cases: 12, riskLevel: "Medium", trend: "+5%" },
    { area: "Tiloi Block", cases: 8, riskLevel: "Low", trend: "-3%" },
    { area: "Musafirkhana Block", cases: 6, riskLevel: "Low", trend: "-1%" }
  ];

  const getRiskBadgeColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case 'high': return 'bg-risk-high text-white';
      case 'medium': return 'bg-risk-medium text-white';  
      case 'low': return 'bg-risk-low text-white';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active': return 'bg-risk-high text-white';
      case 'recovering': return 'bg-risk-medium text-white';
      case 'recovered': return 'bg-risk-low text-white';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Health Monitoring Dashboard</h1>
          <p className="text-muted-foreground">
            Real-time overview of water-borne disease cases and outbreak predictions
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-card transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-lg bg-muted ${stat.color}`}>
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <Badge variant={stat.trend === 'up' ? 'default' : 'secondary'}>
                    {stat.change}
                  </Badge>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Interactive Map Placeholder */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Case Distribution Map
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-80 bg-gradient-to-br from-health-light-blue to-health-light-green rounded-lg border-2 border-dashed border-border flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg font-medium text-foreground mb-2">Interactive Map</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Geographic visualization of reported cases with color-coded severity indicators
                  </p>
                  <Button variant="outline">
                    Load Map Integration
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Risk Areas */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-primary" />
                Risk Areas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {riskAreas.map((area, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{area.area}</p>
                      <p className="text-sm text-muted-foreground">{area.cases} cases</p>
                    </div>
                    <div className="text-right space-y-1">
                      <Badge className={getRiskBadgeColor(area.riskLevel)}>
                        {area.riskLevel}
                      </Badge>
                      <p className="text-xs text-muted-foreground">{area.trend}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                Cases Over Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gradient-to-br from-muted/30 to-muted/10 rounded-lg border-2 border-dashed border-border flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg font-medium text-foreground mb-2">Time Series Chart</p>
                  <p className="text-sm text-muted-foreground">
                    Weekly case trends and outbreak patterns
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary" />
                Symptom Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gradient-to-br from-muted/30 to-muted/10 rounded-lg border-2 border-dashed border-border flex items-center justify-center">
                <div className="text-center">
                  <Activity className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg font-medium text-foreground mb-2">Symptom Breakdown</p>
                  <p className="text-sm text-muted-foreground">
                    Most common symptoms and correlations
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Cases Table */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Recent Cases
              </CardTitle>
              <div className="flex gap-2">
                <Input placeholder="Search cases..." className="w-64" />
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Case ID</TableHead>
                  <TableHead>Patient Name</TableHead>
                  <TableHead>Age</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Symptoms</TableHead>
                  <TableHead>Reported</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Risk Level</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentCases.map((case_item) => (
                  <TableRow key={case_item.id} className="hover:bg-muted/50">
                    <TableCell className="font-medium">{case_item.id}</TableCell>
                    <TableCell>{case_item.name}</TableCell>
                    <TableCell>{case_item.age}</TableCell>
                    <TableCell>{case_item.location}</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {case_item.symptoms.slice(0, 2).map((symptom, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {symptom}
                          </Badge>
                        ))}
                        {case_item.symptoms.length > 2 && (
                          <Badge variant="secondary" className="text-xs">
                            +{case_item.symptoms.length - 2}
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>{case_item.reportedAt}</TableCell>
                    <TableCell>
                      <Badge className={getStatusBadgeColor(case_item.status)}>
                        {case_item.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getRiskBadgeColor(case_item.risk)}>
                        {case_item.risk}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;