import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  AlertTriangle, 
  Clock, 
  MapPin, 
  TrendingUp,
  Shield,
  Users,
  Zap,
  CheckCircle
} from "lucide-react";

const Alerts = () => {
  const activeAlerts = [
    {
      id: "AL001",
      title: "High Risk Cholera Outbreak - Jagdishpur Block", 
      description: "12 diarrhea cases reported in last 48 hours with similar symptoms and geographic clustering",
      severity: "High",
      location: "Jagdishpur Block",
      timeAgo: "2 hours ago",
      casesInvolved: 12,
      predictedRisk: 89,
      recommendations: [
        "Immediate water source testing required",
        "Deploy rapid response team",
        "Issue public health advisory",
        "Set up temporary medical camp"
      ]
    },
    {
      id: "AL002", 
      title: "Water Contamination Alert - Amethi Block",
      description: "pH levels below safe threshold detected with 8 related symptom reports",
      severity: "Medium",
      location: "Amethi Block", 
      timeAgo: "6 hours ago",
      casesInvolved: 8,
      predictedRisk: 64,
      recommendations: [
        "Verify water quality measurements",
        "Advise boiling water before consumption", 
        "Monitor for symptom escalation",
        "Contact local water authorities"
      ]
    },
    {
      id: "AL003",
      title: "Typhoid Risk Pattern - Gauriganj Block",
      description: "Fever and abdominal pain cases showing epidemiological pattern consistent with typhoid",
      severity: "Medium",
      location: "Gauriganj Block",
      timeAgo: "12 hours ago", 
      casesInvolved: 6,
      predictedRisk: 58,
      recommendations: [
        "Blood culture testing recommended",
        "Food safety inspection needed",
        "Community hygiene awareness program",
        "Monitor household contacts"
      ]
    }
  ];

  const resolvedAlerts = [
    {
      id: "AL004",
      title: "Diarrhea Cluster - Tiloi Block",
      description: "Successfully contained outbreak through rapid intervention",
      location: "Tiloi Block",
      resolvedAt: "2 days ago",
      casesInvolved: 15,
      outcome: "Contained"
    },
    {
      id: "AL005", 
      title: "Water Quality Issue - Musafirkhana Block",
      description: "Water treatment facility repaired, quality restored to safe levels",
      location: "Musafirkhana Block", 
      resolvedAt: "5 days ago",
      casesInvolved: 4,
      outcome: "Resolved"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'high': return 'bg-risk-high text-white border-risk-high';
      case 'medium': return 'bg-risk-medium text-white border-risk-medium';
      case 'low': return 'bg-risk-low text-white border-risk-low';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'high': return AlertTriangle;
      case 'medium': return TrendingUp;
      case 'low': return Shield;
      default: return AlertTriangle;
    }
  };

  const getRiskColor = (risk: number) => {
    if (risk >= 80) return 'text-risk-high';
    if (risk >= 60) return 'text-risk-medium'; 
    return 'text-risk-low';
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">AI Outbreak Alerts</h1>
          <p className="text-muted-foreground">
            Real-time disease outbreak predictions and risk assessments powered by artificial intelligence
          </p>
        </div>

        {/* Alert Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-l-4 border-l-risk-high">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <AlertTriangle className="h-8 w-8 text-risk-high" />
                <Badge className="bg-risk-high text-white">Urgent</Badge>
              </div>
              <p className="text-2xl font-bold text-foreground">1</p>
              <p className="text-sm text-muted-foreground">High Risk Alerts</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-risk-medium">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <TrendingUp className="h-8 w-8 text-risk-medium" />
                <Badge className="bg-risk-medium text-white">Monitor</Badge>
              </div>
              <p className="text-2xl font-bold text-foreground">2</p>
              <p className="text-sm text-muted-foreground">Medium Risk Alerts</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-primary">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Users className="h-8 w-8 text-primary" />
                <Badge variant="secondary">Active</Badge>
              </div>
              <p className="text-2xl font-bold text-foreground">26</p>
              <p className="text-sm text-muted-foreground">Cases Under Watch</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-risk-low">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <CheckCircle className="h-8 w-8 text-risk-low" />
                <Badge className="bg-risk-low text-white">Resolved</Badge>
              </div>
              <p className="text-2xl font-bold text-foreground">15</p>
              <p className="text-sm text-muted-foreground">Alerts This Week</p>
            </CardContent>
          </Card>
        </div>

        {/* Active Alerts */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            Active Alerts
          </h2>
          <div className="space-y-6">
            {activeAlerts.map((alert) => {
              const SeverityIcon = getSeverityIcon(alert.severity);
              return (
                <Card key={alert.id} className="border-l-4 border-l-primary hover:shadow-card transition-shadow duration-200">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex items-start gap-4">
                        <div className={`p-2 rounded-lg ${alert.severity === 'High' ? 'bg-risk-high/10' : 'bg-risk-medium/10'}`}>
                          <SeverityIcon className={`h-6 w-6 ${alert.severity === 'High' ? 'text-risk-high' : 'text-risk-medium'}`} />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl text-foreground mb-2">{alert.title}</CardTitle>
                          <p className="text-muted-foreground mb-4">{alert.description}</p>
                          <div className="flex flex-wrap gap-4 text-sm">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4 text-primary" />
                              <span className="text-foreground">{alert.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4 text-primary" />
                              <span className="text-foreground">{alert.timeAgo}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4 text-primary" />
                              <span className="text-foreground">{alert.casesInvolved} cases involved</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-right space-y-2">
                        <Badge className={getSeverityColor(alert.severity)}>
                          {alert.severity} Risk
                        </Badge>
                        <div className="text-right">
                          <p className={`text-2xl font-bold ${getRiskColor(alert.predictedRisk)}`}>
                            {alert.predictedRisk}%
                          </p>
                          <p className="text-xs text-muted-foreground">AI Confidence</p>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Recommended Actions:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {alert.recommendations.map((recommendation, index) => (
                            <div key={index} className="flex items-center gap-2 p-2 rounded bg-muted/30">
                              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                              <span className="text-sm text-foreground">{recommendation}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-end gap-3">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        <Button size="sm">
                          Take Action
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Resolved Alerts */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <CheckCircle className="h-6 w-6 text-risk-low" />
            Recently Resolved
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resolvedAlerts.map((alert) => (
              <Card key={alert.id} className="border-l-4 border-l-risk-low opacity-75 hover:opacity-100 transition-opacity duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-risk-low flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{alert.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{alert.description}</p>
                      </div>
                    </div>
                    <Badge className="bg-risk-low text-white">
                      {alert.outcome}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-foreground">{alert.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-foreground">{alert.resolvedAt}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-foreground">{alert.casesInvolved} cases</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alerts;