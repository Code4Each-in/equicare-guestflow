import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Upload, Camera, Home, Phone, Calendar, AlertTriangle, CheckCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const properties = [
  "Aqua", "Aviary", "Azure", "Bliss", "Breeze", "Cypress", "Driftwood", "Encore", "Epic", "Flamingo",
  "Freestyle", "Glimmer", "Harmony", "Horizon", "Iris", "Latitude", "Mariner", "Melody", "Mojo", 
  "Nautilus", "Ovation", "Reefwood", "Salt Life", "Seafoam", "Seaquest", "Seaspray", "Shenanigans",
  "Shipwatch", "Splash", "Sunbeam", "Sundance", "Sundial", "Sunkissed", "Symphony", "Vibe", "Vista",
  "Whimsy", "Windsong"
];

const issueTypes = [
  "Air Conditioning", "Appliances", "Electrical", "Plumbing", "Internet/WiFi", "TV/Cable",
  "Hot Tub/Pool", "Cleaning", "Maintenance", "Security", "Missing Items", "Other"
];

const urgencyLevels = [
  { value: "immediate", label: "Immediately (Emergency or immediate danger)", icon: AlertTriangle },
  { value: "today", label: "Today (Available 8AM - 5PM)", icon: Calendar },
  { value: "tomorrow", label: "Tomorrow between 8AM-5PM", icon: Calendar },
  { value: "checkout", label: "After my checkout. I'm just reporting the issue", icon: CheckCircle }
];

export default function MaintenanceForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    phone: '',
    property: '',
    checkInDate: '',
    issueType: '',
    description: '',
    satisfaction: '',
    urgency: '',
    photos: [] as File[]
  });
  
  const [uploadingPhotos, setUploadingPhotos] = useState(false);
  const { toast } = useToast();

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (files.length > 0) {
      setUploadingPhotos(true);
      setTimeout(() => {
        setFormData(prev => ({
          ...prev,
          photos: [...prev.photos, ...files].slice(0, 4)
        }));
        setUploadingPhotos(false);
        toast({
          title: "Photos uploaded successfully",
          description: `${files.length} photo(s) added to your request.`
        });
      }, 1500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Maintenance request submitted!",
      description: "Your request has been sent to our team. You'll receive updates via text.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10">
      {/* Header */}
      <header className="bg-gradient-ocean text-white py-6 shadow-elevated">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center tracking-tight">
            WE CARE - MAINTENANCE REQUEST
          </h1>
          <p className="text-center mt-2 text-primary-foreground/90 font-medium">
            The fastest way to request maintenance, report issues, or request missing items
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Welcome Section */}
        <Card className="mb-8 shadow-coastal border-0 bg-card/80 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Thank you for choosing one of our family's
              </h2>
              <h3 className="text-3xl font-bold bg-gradient-ocean bg-clip-text text-transparent mb-4">
                Emerald Coast Beach Properties
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We care immensely about your satisfaction during your stay! If you are experiencing a maintenance issue, 
                please tell us about it below. Your information will immediately be texted to the family or service team 
                member who is best able to resolve your issue. And, you'll receive status updates via text.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Main Form */}
        <Card className="shadow-elevated border-0 bg-card/95 backdrop-blur-sm">
          <CardHeader className="pb-6">
            <CardTitle className="text-2xl text-center text-foreground">
              Submit Your Maintenance Request
            </CardTitle>
            <CardDescription className="text-center text-muted-foreground">
              Please fill out all required fields to ensure we can assist you quickly
            </CardDescription>
          </CardHeader>
          
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-foreground font-medium flex items-center gap-2">
                    <Home className="w-4 h-4 text-primary" />
                    Your First Name *
                  </Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                    className="border-border bg-input/50 focus:ring-primary focus:border-primary"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground font-medium flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    Your Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="border-border bg-input/50 focus:ring-primary focus:border-primary"
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>
              </div>

              {/* Property and Check-in */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-foreground font-medium">Property Name *</Label>
                  <Select onValueChange={(value) => setFormData(prev => ({ ...prev, property: value }))}>
                    <SelectTrigger className="border-border bg-input/50 focus:ring-primary">
                      <SelectValue placeholder="Select your property" />
                    </SelectTrigger>
                    <SelectContent>
                      {properties.map((property) => (
                        <SelectItem key={property} value={property}>
                          {property}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="checkIn" className="text-foreground font-medium flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    Check In Date *
                  </Label>
                  <Input
                    id="checkIn"
                    type="date"
                    value={formData.checkInDate}
                    onChange={(e) => setFormData(prev => ({ ...prev, checkInDate: e.target.value }))}
                    className="border-border bg-input/50 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
              </div>

              {/* Issue Type */}
              <div className="space-y-2">
                <Label className="text-foreground font-medium">The basic issue is: *</Label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, issueType: value }))}>
                  <SelectTrigger className="border-border bg-input/50 focus:ring-primary">
                    <SelectValue placeholder="Select the type of issue" />
                  </SelectTrigger>
                  <SelectContent>
                    {issueTypes.map((issue) => (
                      <SelectItem key={issue} value={issue}>
                        {issue}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Detailed Description */}
              <div className="space-y-2">
                <Label htmlFor="description" className="text-foreground font-medium">
                  A more detailed explanation is: *
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  className="min-h-[120px] border-border bg-input/50 focus:ring-primary focus:border-primary resize-none"
                  placeholder="Please provide as much detail as possible about the issue..."
                  required
                />
              </div>

              {/* Satisfaction */}
              <div className="space-y-2">
                <Label htmlFor="satisfaction" className="text-foreground font-medium">
                  I will be 100% satisfied if this issue is resolved: *
                </Label>
                <Textarea
                  id="satisfaction"
                  value={formData.satisfaction}
                  onChange={(e) => setFormData(prev => ({ ...prev, satisfaction: e.target.value }))}
                  className="min-h-[80px] border-border bg-input/50 focus:ring-primary focus:border-primary resize-none"
                  placeholder="Describe what would fully resolve this issue for you..."
                  required
                />
              </div>

              {/* Urgency Level */}
              <div className="space-y-4">
                <Label className="text-foreground font-medium">When do you need this resolved? *</Label>
                <RadioGroup
                  value={formData.urgency}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, urgency: value }))}
                  className="space-y-3"
                >
                  {urgencyLevels.map((level) => {
                    const Icon = level.icon;
                    return (
                      <div key={level.value} className="flex items-start space-x-3 p-4 rounded-lg border border-border bg-input/30 hover:bg-input/50 transition-colors">
                        <RadioGroupItem
                          value={level.value}
                          id={level.value}
                          className="border-primary text-primary focus:ring-primary mt-1"
                        />
                        <div className="flex items-start gap-3 flex-1">
                          <Icon className={`w-5 h-5 mt-0.5 ${level.value === 'immediate' ? 'text-destructive' : 'text-primary'}`} />
                          <Label htmlFor={level.value} className="text-foreground font-medium leading-relaxed cursor-pointer">
                            {level.label}
                          </Label>
                        </div>
                      </div>
                    );
                  })}
                </RadioGroup>
              </div>

              {/* Photo Upload */}
              <div className="space-y-4">
                <Label className="text-foreground font-medium flex items-center gap-2">
                  <Camera className="w-4 h-4 text-primary" />
                  Picture(s) of this issue (optional):
                </Label>
                
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center bg-input/20 hover:bg-input/30 transition-colors">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                    id="photo-upload"
                  />
                  <label htmlFor="photo-upload" className="cursor-pointer">
                    <div className="flex flex-col items-center gap-4">
                      {uploadingPhotos ? (
                        <div className="animate-spin">
                          <Upload className="w-8 h-8 text-primary" />
                        </div>
                      ) : (
                        <Upload className="w-8 h-8 text-primary" />
                      )}
                      <div>
                        <p className="text-foreground font-medium">
                          {uploadingPhotos ? 'Uploading photos...' : 'Click to upload photos or take pictures'}
                        </p>
                        <p className="text-muted-foreground text-sm mt-1">
                          Upload up to 4 photos (JPG, PNG)
                        </p>
                      </div>
                    </div>
                  </label>
                </div>

                {formData.photos.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {formData.photos.map((photo, index) => (
                      <div key={index} className="relative">
                        <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                          <Camera className="w-8 h-8 text-muted-foreground" />
                        </div>
                        <p className="text-xs text-muted-foreground mt-1 truncate">
                          {photo.name}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  className="w-full bg-gradient-ocean hover:opacity-90 text-white text-lg py-6 rounded-lg shadow-coastal transition-all duration-300 hover:shadow-elevated"
                >
                  Submit Maintenance Request
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}