import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Droplets, 
  Utensils, 
  Trash2, 
  HandHeart,
  AlertCircle,
  BookOpen,
  Languages,
  Download
} from "lucide-react";
import { useState } from "react";

const Education = () => {
  const [language, setLanguage] = useState("en");

  const preventionTips = [
    {
      icon: Droplets,
      title: "Safe Water Practices",
      titleHi: "सुरक्षित पानी की प्रथाएं",
      tips: [
        "Always boil water for at least 1 minute before drinking",
        "Use water purification tablets when boiling is not possible", 
        "Store treated water in clean, covered containers",
        "Avoid ice unless made from safe water"
      ],
      tipsHi: [
        "पीने से पहले पानी को कम से कम 1 मिनट तक उबालें",
        "जब उबालना संभव न हो तो पानी शुद्धीकरण गोलियों का उपयोग करें",
        "उपचारित पानी को साफ, ढके हुए बर्तनों में रखें", 
        "सुरक्षित पानी से बनी बर्फ के अलावा बर्फ से बचें"
      ]
    },
    {
      icon: HandHeart,
      title: "Hand Hygiene",
      titleHi: "हाथों की स्वच्छता",
      tips: [
        "Wash hands with soap for 20 seconds frequently",
        "Always wash hands before eating and after using toilet",
        "Use alcohol-based sanitizer when soap is unavailable",
        "Avoid touching face with unwashed hands"
      ],
      tipsHi: [
        "बार-बार 20 सेकंड तक साबुन से हाथ धोएं",
        "खाने से पहले और शौचालय का उपयोग करने के बाद हमेशा हाथ धोएं",
        "जब साबुन उपलब्ध न हो तो अल्कोहल आधारित सैनिटाइज़र का उपयोग करें",
        "बिना धुले हाथों से चेहरे को छूने से बचें"
      ]
    },
    {
      icon: Utensils,
      title: "Food Safety",
      titleHi: "भोजन की सुरक्षा",
      tips: [
        "Eat food while it's still hot and freshly cooked",
        "Avoid raw or undercooked meat, fish, and vegetables", 
        "Peel fruits yourself and avoid pre-cut fruits",
        "Avoid street vendor food and unpasteurized dairy"
      ],
      tipsHi: [
        "भोजन को तब तक खाएं जब तक वह गर्म और ताज़ा पका हुआ हो",
        "कच्चे या अधपके मांस, मछली और सब्जियों से बचें",
        "फलों को स्वयं छीलें और पहले से कटे फलों से बचें",
        "स्ट्रीट वेंडर के भोजन और बिना पाश्चुरीकृत डेयरी से बचें"
      ]
    },
    {
      icon: Trash2,
      title: "Waste Management",
      titleHi: "कचरा प्रबंधन",
      tips: [
        "Dispose of garbage in covered bins away from water sources",
        "Use proper toilet facilities and avoid open defecation",
        "Keep surroundings clean and free of standing water",
        "Report broken sewage systems to local authorities"
      ],
      tipsHi: [
        "कूड़े को पानी के स्रोतों से दूर ढके हुए डिब्बों में फेंकें",
        "उचित शौचालय सुविधाओं का उपयोग करें और खुले में शौच से बचें",
        "आसपास को साफ रखें और खड़े पानी से मुक्त रखें",
        "टूटी हुई सीवेज सिस्टम की रिपोर्ट स्थानीय अधिकारियों को करें"
      ]
    }
  ];

  const diseases = [
    {
      name: "Cholera",
      nameHi: "हैजा",
      symptoms: ["Severe watery diarrhea", "Vomiting", "Dehydration", "Muscle cramps"],
      symptomsHi: ["गंभीर पानी जैसा दस्त", "उल्टी", "निर्जलीकरण", "मांसपेशियों में ऐंठन"],
      prevention: "Safe water, proper sanitation, good hygiene",
      preventionHi: "सुरक्षित पानी, उचित स्वच्छता, अच्छी स्वच्छता"
    },
    {
      name: "Typhoid",
      nameHi: "टाइफाइड",
      symptoms: ["High fever", "Headache", "Abdominal pain", "Rose-colored spots"],
      symptomsHi: ["तेज बुखार", "सिर दर्द", "पेट दर्द", "गुलाबी रंग के धब्बे"],
      prevention: "Clean water, cooked food, vaccination",
      preventionHi: "साफ पानी, पका हुआ भोजन, टीकाकरण"
    },
    {
      name: "Diarrhea", 
      nameHi: "दस्त",
      symptoms: ["Frequent loose stools", "Abdominal cramps", "Nausea", "Fever"],
      symptomsHi: ["बार-बार पतले दस्त", "पेट में ऐंठन", "मतली", "बुखार"],
      prevention: "Hand hygiene, safe water, proper food handling",
      preventionHi: "हाथों की स्वच्छता, सुरक्षित पानी, उचित भोजन हैंडलिंग"
    }
  ];

  const emergencySteps = [
    {
      step: 1,
      title: "Recognize Symptoms",
      titleHi: "लक्षणों की पहचान करें",
      description: "Identify early warning signs like severe diarrhea, vomiting, fever, or dehydration",
      descriptionHi: "गंभीर दस्त, उल्टी, बुखार या निर्जलीकरण जैसे प्रारंभिक चेतावनी संकेतों की पहचान करें"
    },
    {
      step: 2, 
      title: "Provide Immediate Care",
      titleHi: "तत्काल देखभाल प्रदान करें",
      description: "Give ORS solution, maintain hygiene, keep patient hydrated and comfortable",
      descriptionHi: "ORS समाधान दें, स्वच्छता बनाए रखें, रोगी को हाइड्रेटेड और आरामदायक रखें"
    },
    {
      step: 3,
      title: "Report the Case",
      titleHi: "मामले की रिपोर्ट करें", 
      description: "Use our reporting system or contact local health authorities immediately",
      descriptionHi: "हमारी रिपोर्टिंग प्रणाली का उपयोग करें या तुरंत स्थानीय स्वास्थ्य अधिकारियों से संपर्क करें"
    },
    {
      step: 4,
      title: "Prevent Spread",
      titleHi: "फैलाव को रोकें",
      description: "Isolate if necessary, sanitize surroundings, inform community members",
      descriptionHi: "यदि आवश्यक हो तो अलग रखें, आसपास को कीटाणुरहित करें, समुदाय के सदस्यों को सूचित करें"
    }
  ];

  const t = (en: string, hi: string) => language === "en" ? en : hi;

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              {t("Health Education & Awareness", "स्वास्थ्य शिक्षा और जागरूकता")}
            </h1>
            <p className="text-muted-foreground">
              {t("Essential knowledge for preventing water-borne diseases in rural communities", "ग्रामीण समुदायों में जल-जनित रोगों को रोकने के लिए आवश्यक ज्ञान")}
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

        {/* Quick Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gradient-to-br from-health-light-blue to-health-blue/20 border-primary/20 hover:shadow-card transition-shadow duration-200">
            <CardContent className="p-6 text-center">
              <AlertCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {t("Emergency Protocol", "आपातकालीन प्रोटोकॉल")}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {t("Quick steps for outbreak response", "प्रकोप प्रतिक्रिया के लिए त्वरित कदम")}
              </p>
              <Button variant="outline" size="sm">
                {t("View Protocol", "प्रोटोकॉल देखें")}
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-health-light-green to-health-green/20 border-secondary/20 hover:shadow-card transition-shadow duration-200">
            <CardContent className="p-6 text-center">
              <BookOpen className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {t("Training Materials", "प्रशिक्षण सामग्री")}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {t("Comprehensive guides and resources", "व्यापक गाइड और संसाधन")}
              </p>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                {t("Download", "डाउनलोड")}
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-muted to-muted/50 border-border hover:shadow-card transition-shadow duration-200">
            <CardContent className="p-6 text-center">
              <Utensils className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {t("Community Guidelines", "समुदायिक दिशानिर्देश")}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {t("Best practices for villages", "गांवों के लिए सर्वोत्तम प्रथाएं")}
              </p>
              <Button variant="outline" size="sm">
                {t("Learn More", "और जानें")}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Prevention Tips */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            {t("Prevention Guidelines", "रोकथाम दिशानिर्देश")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {preventionTips.map((tip, index) => (
              <Card key={index} className="hover:shadow-card transition-shadow duration-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <tip.icon className="h-6 w-6 text-primary" />
                    </div>
                    {language === "en" ? tip.title : tip.titleHi}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {(language === "en" ? tip.tips : tip.tipsHi).map((tipText, tipIndex) => (
                      <div key={tipIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-foreground">{tipText}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Disease Information */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            {t("Common Water-Borne Diseases", "सामान्य जल-जनित रोग")}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {diseases.map((disease, index) => (
              <Card key={index} className="hover:shadow-card transition-shadow duration-200">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">
                    {language === "en" ? disease.name : disease.nameHi}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {t("Symptoms:", "लक्षण:")}
                    </h4>
                    <div className="space-y-1">
                      {(language === "en" ? disease.symptoms : disease.symptomsHi).map((symptom, sIndex) => (
                        <Badge key={sIndex} variant="secondary" className="mr-2 mb-2">
                          {symptom}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {t("Prevention:", "रोकथाम:")}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {language === "en" ? disease.prevention : disease.preventionHi}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Emergency Response */}
        <Card className="bg-gradient-to-br from-risk-high/5 to-risk-medium/5 border-risk-medium/20">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground flex items-center gap-2">
              <AlertCircle className="h-6 w-6 text-risk-high" />
              {t("Emergency Response Steps", "आपातकालीन प्रतिक्रिया के चरण")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {emergencySteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto">
                      {step.step}
                    </div>
                    {index < emergencySteps.length - 1 && (
                      <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-primary/30 -translate-y-0.5"></div>
                    )}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {language === "en" ? step.title : step.titleHi}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {language === "en" ? step.description : step.descriptionHi}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button size="lg" className="mr-4">
                {t("Report Emergency Case", "आपातकालीन मामले की रिपोर्ट करें")}
              </Button>
              <Button variant="outline" size="lg">
                {t("Contact Health Authorities", "स्वास्थ्य अधिकारियों से संपर्क करें")}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Education;