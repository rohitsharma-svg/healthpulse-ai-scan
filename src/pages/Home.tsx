import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Shield, AlertTriangle, MapPin, Users, TrendingUp, Heart } from "lucide-react";
import heroImage from "@/assets/healthcare-hero.jpg";

const Home = () => {
  const features = [
    {
      icon: AlertTriangle,
      title: "Early Warning System",
      description: "AI-powered disease outbreak prediction based on symptoms and water quality data"
    },
    {
      icon: MapPin,
      title: "Location Tracking",
      description: "Geographic mapping of cases to identify outbreak hotspots and patterns"
    },
    {
      icon: TrendingUp,
      title: "Data Analytics",
      description: "Real-time monitoring and analysis of health trends in rural communities"
    },
    {
      icon: Users,
      title: "Mobile-First Design",
      description: "Optimized for ASHA workers and health officials using smartphones in the field"
    }
  ];

  const stats = [
    { number: "500+", label: "Health Workers Using", icon: Users },
    { number: "50+", label: "Villages Covered", icon: MapPin },
    { number: "95%", label: "Early Detection Rate", icon: Shield },
    { number: "24/7", label: "Monitoring System", icon: Heart }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                AI-Powered Early Warning System for{" "}
                <span className="text-health-light-green">Water-Borne Diseases</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Protect rural communities from cholera, diarrhea, and typhoid with intelligent disease surveillance and prediction technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                  <Link to="/report">Report Case</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white hover:text-foreground">
                  <Link to="/dashboard">View Dashboard</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Healthcare workers using digital technology"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              The Challenge We're Solving
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Water-borne diseases affect millions in rural communities. Early detection and prevention 
              can save lives and prevent widespread outbreaks.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-destructive/10 rounded-full flex items-center justify-center">
                    <AlertTriangle className="h-4 w-4 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Late Disease Detection</h3>
                    <p className="text-muted-foreground">Traditional methods often identify outbreaks only after they've already spread significantly.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-destructive/10 rounded-full flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Limited Rural Access</h3>
                    <p className="text-muted-foreground">Remote communities lack immediate access to healthcare monitoring and reporting systems.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-destructive/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Poor Data Integration</h3>
                    <p className="text-muted-foreground">Disconnected data sources prevent comprehensive outbreak analysis and prediction.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card className="p-8 bg-gradient-card border-primary/20 shadow-card">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Our Solution</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Shield className="h-5 w-5 text-secondary" />
                      <span className="text-foreground">Real-time case reporting and tracking</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="h-5 w-5 text-secondary" />
                      <span className="text-foreground">AI-powered outbreak prediction</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-secondary" />
                      <span className="text-foreground">Geographic hotspot identification</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-secondary" />
                      <span className="text-foreground">Mobile-optimized for field workers</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Powerful Features for Health Protection
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive tools designed for rural health workers and officials to monitor, 
              predict, and prevent water-borne disease outbreaks.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Protect Your Community?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join health workers across the region using our AI-powered system to prevent disease outbreaks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/report">Start Reporting Cases</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white hover:text-foreground">
              <Link to="/education">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;