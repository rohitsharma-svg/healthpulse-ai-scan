import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { FileText, Languages, MapPin, User, Stethoscope, Droplets } from "lucide-react";

const CaseReporting = () => {
  const { toast } = useToast();
  const [language, setLanguage] = useState("en");
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    symptoms: [] as string[],
    duration: "",
    location: "",
    customLocation: "",
    pH: "",
    turbidity: "",
    contamination: "",
    additionalInfo: ""
  });

  const symptoms = [
    { id: "fever", label: "Fever", labelHi: "बुखार" },
    { id: "diarrhea", label: "Diarrhea", labelHi: "दस्त" },
    { id: "vomiting", label: "Vomiting", labelHi: "उल्टी" },
    { id: "abdominal_pain", label: "Abdominal Pain", labelHi: "पेट दर्द" },
    { id: "nausea", label: "Nausea", labelHi: "मतली" },
    { id: "headache", label: "Headache", labelHi: "सिर दर्द" },
    { id: "dehydration", label: "Dehydration", labelHi: "निर्जलीकरण" },
    { id: "weakness", label: "Weakness", labelHi: "कमजोरी" }
  ];

  const villages = [
    "Amethi Block", "Gauriganj Block", "Jagdishpur Block", "Tiloi Block",
    "Musafirkhana Block", "Sultanpur Block", "Kadipur Block", "Jaisinghpur Block"
  ];

  const handleSymptomChange = (symptomId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      symptoms: checked 
        ? [...prev.symptoms, symptomId]
        : prev.symptoms.filter(id => id !== symptomId)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.age || !formData.gender || formData.symptoms.length === 0) {
      toast({
        title: language === "en" ? "Missing Information" : "अनुपस्थित जानकारी",
        description: language === "en" ? "Please fill in all required fields." : "कृपया सभी आवश्यक फ़ील्ड भरें।",
        variant: "destructive"
      });
      return;
    }

    // Simulate API call
    toast({
      title: language === "en" ? "Case Reported Successfully" : "मामला सफलतापूर्वक रिपोर्ट किया गया",
      description: language === "en" 
        ? "The case has been submitted and will be reviewed by health officials." 
        : "मामला जमा कर दिया गया है और स्वास्थ्य अधिकारियों द्वारा समीक्षा की जाएगी।"
    });

    // Reset form
    setFormData({
      name: "",
      age: "",
      gender: "",
      symptoms: [],
      duration: "",
      location: "",
      customLocation: "",
      pH: "",
      turbidity: "",
      contamination: "",
      additionalInfo: ""
    });
  };

  const t = (en: string, hi: string) => language === "en" ? en : hi;

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              {t("Report New Case", "नया मामला रिपोर्ट करें")}
            </h1>
            <p className="text-muted-foreground">
              {t("Submit detailed case information for disease monitoring", "रोग निगरानी के लिए विस्तृत मामला जानकारी जमा करें")}
            </p>
          </div>
          <Button
            variant="outline"
            onClick={() => setLanguage(language === "en" ? "hi" : "en")}
            className="flex items-center gap-2"
          >
            <Languages className="h-4 w-4" />
            {language === "en" ? "हिंदी" : "English"}
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Patient Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                {t("Patient Information", "रोगी की जानकारी")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">{t("Patient Name", "रोगी का नाम")} *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder={t("Enter patient name", "रोगी का नाम दर्ज करें")}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="age">{t("Age", "आयु")} *</Label>
                  <Input
                    id="age"
                    type="number"
                    value={formData.age}
                    onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
                    placeholder={t("Enter age", "आयु दर्ज करें")}
                    required
                  />
                </div>
                <div>
                  <Label>{t("Gender", "लिंग")} *</Label>
                  <Select onValueChange={(value) => setFormData(prev => ({ ...prev, gender: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder={t("Select gender", "लिंग चुनें")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">{t("Male", "पुरुष")}</SelectItem>
                      <SelectItem value="female">{t("Female", "महिला")}</SelectItem>
                      <SelectItem value="other">{t("Other", "अन्य")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="duration">{t("Duration of Illness", "बीमारी की अवधि")}</Label>
                  <Input
                    id="duration"
                    value={formData.duration}
                    onChange={(e) => setFormData(prev => ({ ...prev, duration: e.target.value }))}
                    placeholder={t("e.g., 3 days", "जैसे, 3 दिन")}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Symptoms */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Stethoscope className="h-5 w-5 text-primary" />
                {t("Symptoms", "लक्षण")} *
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {symptoms.map((symptom) => (
                  <div key={symptom.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={symptom.id}
                      checked={formData.symptoms.includes(symptom.id)}
                      onCheckedChange={(checked) => handleSymptomChange(symptom.id, checked as boolean)}
                    />
                    <Label htmlFor={symptom.id} className="text-sm">
                      {language === "en" ? symptom.label : symptom.labelHi}
                    </Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Location */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                {t("Location Information", "स्थान की जानकारी")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label>{t("Village/Block", "गाँव/ब्लॉक")}</Label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, location: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder={t("Select location", "स्थान चुनें")} />
                  </SelectTrigger>
                  <SelectContent>
                    {villages.map((village) => (
                      <SelectItem key={village} value={village}>{village}</SelectItem>
                    ))}
                    <SelectItem value="other">{t("Other (specify below)", "अन्य (नीचे निर्दिष्ट करें)")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {formData.location === "other" && (
                <div>
                  <Label htmlFor="customLocation">{t("Custom Location", "कस्टम स्थान")}</Label>
                  <Input
                    id="customLocation"
                    value={formData.customLocation}
                    onChange={(e) => setFormData(prev => ({ ...prev, customLocation: e.target.value }))}
                    placeholder={t("Enter custom location", "कस्टम स्थान दर्ज करें")}
                  />
                </div>
              )}
            </CardContent>
          </Card>

          {/* Water Quality Data */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Droplets className="h-5 w-5 text-primary" />
                {t("Water Quality Data", "पानी की गुणवत्ता डेटा")} ({t("Optional", "वैकल्पिक")})
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="pH">{t("pH Level", "pH स्तर")}</Label>
                  <Input
                    id="pH"
                    type="number"
                    step="0.1"
                    value={formData.pH}
                    onChange={(e) => setFormData(prev => ({ ...prev, pH: e.target.value }))}
                    placeholder="6.5-8.5"
                  />
                </div>
                <div>
                  <Label htmlFor="turbidity">{t("Turbidity (NTU)", "टर्बिडिटी (NTU)")}</Label>
                  <Input
                    id="turbidity"
                    type="number"
                    value={formData.turbidity}
                    onChange={(e) => setFormData(prev => ({ ...prev, turbidity: e.target.value }))}
                    placeholder="< 4 NTU"
                  />
                </div>
                <div>
                  <Label>{t("Contamination Flag", "संदूषण फ्लैग")}</Label>
                  <Select onValueChange={(value) => setFormData(prev => ({ ...prev, contamination: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder={t("Select status", "स्थिति चुनें")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="clean">{t("Clean", "साफ")}</SelectItem>
                      <SelectItem value="suspicious">{t("Suspicious", "संदिग्ध")}</SelectItem>
                      <SelectItem value="contaminated">{t("Contaminated", "दूषित")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                {t("Additional Information", "अतिरिक्त जानकारी")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value={formData.additionalInfo}
                onChange={(e) => setFormData(prev => ({ ...prev, additionalInfo: e.target.value }))}
                placeholder={t("Any additional observations or notes...", "कोई अतिरिक्त अवलोकन या नोट्स...")}
                rows={4}
              />
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button type="submit" size="lg" className="px-8">
              {t("Submit Case Report", "मामला रिपोर्ट जमा करें")}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CaseReporting;