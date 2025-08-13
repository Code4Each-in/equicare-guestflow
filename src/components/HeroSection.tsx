import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import familyHero from "@/assets/family-beach-hero.jpg";
import legacyLogo from "@/assets/legacy-logo.png";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="text-center lg:text-left">
              <img 
                src={legacyLogo} 
                alt="Legacy Beach Homes" 
                className="w-24 h-24 mx-auto lg:mx-0 mb-6 animate-float"
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Thank you for</span>
                <br />
                <span className="text-foreground">choosing one of</span>
                <br />
                <span className="text-foreground">our family's</span>
                <br />
                <span className="bg-gradient-ocean bg-clip-text text-transparent">
                  Emerald Coast
                </span>
                <br />
                <span className="bg-gradient-ocean bg-clip-text text-transparent">
                  beach properties
                </span>
              </h1>
            </div>
            
            <Card className="bg-card/80 backdrop-blur-sm border-0 shadow-coastal">
              <CardContent className="p-6 space-y-4">
                <p className="text-lg text-foreground leading-relaxed">
                  <strong>We care immensely about your satisfaction during your stay!</strong>
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  If you are experiencing a maintenance issue, please tell us about it below.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Your information will immediately be texted to the family or service team member 
                  who is best able to resolve your issue. And, you'll receive status updates via text.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right Image */}
          <div className="relative animate-slide-up">
            <div className="relative overflow-hidden rounded-2xl shadow-elevated">
              <img
                src={familyHero}
                alt="Legacy Beach Homes Family"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-gradient-sunset text-white p-4 rounded-xl shadow-elevated animate-float">
              <div className="text-center">
                <p className="text-sm font-medium">Family Owned</p>
                <p className="text-xs opacity-90">Since 1985</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}