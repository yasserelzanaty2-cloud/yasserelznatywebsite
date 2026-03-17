import React, { createContext, useContext, useState, useEffect } from 'react';
import { SiteContent, Project } from '../types';

type Language = 'ar' | 'en';

const translations = {
  ar: {
    nav_home: "الرئيسية",
    nav_about: "من أنا",
    nav_skills: "المهارات",
    nav_projects: "المشاريع",
    nav_experience: "الخبرات",
    nav_certificates: "الشهادات",
    nav_contact: "تواصل",
    admin_login: "دخول المدير",
    admin_logout: "خروج",
    admin_panel: "لوحة التحكم",
    password: "كلمة المرور",
    enter: "دخول",
    change_bg: "تغيير الخلفية",
    change_img: "تغيير الصورة",
    edit_mode: "وضع التعديل مفعل",
    name_label: "الاسم",
    role_label: "المسمى الوظيفي",
    bio_edit_hint: "يمكنك تعديل النص هنا",
    latest_work: "أحدث أعمالي",
    projects_subtitle: "مشاريع نظم المعلومات الجغرافية والتحليل المكاني",
    add_project: "إضافة مشروع جديد",
    project_title: "عنوان المشروع",
    project_category: "التصنيف",
    project_desc: "الوصف",
    details: "التفاصيل",
    contact_title: "تواصل معي",
    contact_subtitle: "خلينا نتواصل",
    whatsapp: "WhatsApp",
    linkedin: "LinkedIn",
    github: "GitHub",
    email_label: "Email",
    phone: "الهاتف",
    send_message_title: "أرسل رسالة مباشرة",
    your_name: "الاسم",
    your_email: "البريد الإلكتروني",
    your_message: "الرسالة",
    send_btn: "إرسال",
    copyright: "جميع الحقوق محفوظة",
    password_error: "كلمة المرور غير صحيحة",
    reset_content: "استعادة المحتوى الافتراضي",
    download_cv: "تحميل السيرة الذاتية",
    placeholders: {
        name: "اسمك الكريم",
        email: "example@mail.com",
        message: "كيف يمكنني مساعدتك؟"
    },
    education_title: "التعليم",
    location_title: "الموقع",
    skills_title: "المهارات التقنية",
    experience_title: "خبرات عملية",
    certificates_title: "الدورات والشهادات",
    projects_title: "أبرز المشاريع"
  },
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_experience: "Experience",
    nav_certificates: "Certificates",
    nav_contact: "Contact",
    admin_login: "Admin Login",
    admin_logout: "Logout",
    admin_panel: "Control Panel",
    password: "Password",
    enter: "Login",
    change_bg: "Change Background",
    change_img: "Change Photo",
    edit_mode: "Edit Mode Active",
    name_label: "Name",
    role_label: "Job Title",
    bio_edit_hint: "You can edit text here",
    latest_work: "Latest Work",
    projects_subtitle: "GIS Projects and Spatial Analysis",
    add_project: "Add New Project",
    project_title: "Project Title",
    project_category: "Category",
    project_desc: "Description",
    details: "Details",
    contact_title: "Get in Touch",
    contact_subtitle: "Let's Connect",
    whatsapp: "WhatsApp",
    linkedin: "LinkedIn",
    github: "GitHub",
    email_label: "Email",
    phone: "Phone",
    send_message_title: "Send Direct Message",
    your_name: "Name",
    your_email: "Email",
    your_message: "Message",
    send_btn: "Send",
    copyright: "All rights reserved",
    password_error: "Incorrect Password",
    reset_content: "Reset Default Content",
    download_cv: "Download CV",
    placeholders: {
        name: "Your Name",
        email: "example@mail.com",
        message: "How can I help you?"
    },
    education_title: "Education",
    location_title: "Location",
    skills_title: "Technical Skills",
    experience_title: "Experience",
    certificates_title: "Certificates",
    projects_title: "Featured Projects"
  }
};

const defaultContentAr: SiteContent = {
  hero: {
    title: "ياسر الزناتي",
    subtitle: "أخصائي نظم معلومات جغرافية | تحويل البيانات المكانية إلى قرارات ذكية",
    ctaText: "تواصل معي",
    backgroundImage: ""
  },
  about: {
    name: "ياسر الزناتي",
    role: "أخصائي نظم معلومات جغرافية (GIS)",
    image: "https://drive.google.com/uc?export=view&id=14sRBWLGy9qpGsjc350ZR7IGCuwJtGcWc",
    bio: "أخصائي نظم معلومات جغرافية واستشعار عن بعد بخبرة قوية في التحليل المكاني، المراقبة البيئية، ورسم خرائط الطاقة المتجددة. ماهر في استخدام ArcGIS و QGIS و Google Earth Engine، مع قدرة مثبتة على تقديم مجموعات بيانات دقيقة وتصورات وأدوات دعم القرار.\n\nمعروف بالقيادة القوية والتواصل الفعال والقدرة على توجيه وتحفيز الزملاء نحو تحقيق أهداف المشروع. بارع في العمل الجماعي وحل المشكلات وإدارة الوقت، مع عقلية تعاونية تعزز الابتكار والإنتاجية.",
    education: {
      degree: "ليسانس آداب - برنامج الجيوماتكس",
      institution: "جامعة الزقازيق",
      year: "تخرج: 2026 (تقدير عام: جيد جداً مرتفع)"
    },
    location: "ميت غمر، الدقهلية، مصر"
  },
  contact: {
    email: "yasserelzanaty2@gmail.com",
    phone: "01559332262",
    whatsapp: "01559332262",
    linkedin: "https://www.linkedin.com/in/yasser-elzanaty-7a6084233",
    github: "",
    location: "ميت غمر، الدقهلية، مصر",
    cvUrl: "https://drive.google.com/uc?export=download&id=1JcWavjmuctkhMK3Iy5UBMgxiRmf0-VDw"
  },
  projects: [
    {
      id: 1,
      title: "تطبيقات ولوحات تحكم GIS",
      category: "تطبيقات الويب",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=80",
      description: "تطوير تطبيقات ولوحات تحكم GIS باستخدام ArcGIS Online، وجمع بيانات ميدانية وخرائط موضوعية لدعم رؤى الأعمال (Pantheros Labs).",
      tags: ["ArcGIS Online", "Dashboards", "Field Maps"],
      features: ["تطبيقات ويب ولوحات تفاعلية", "جمع بيانات ميدانية ودمجها", "خرائط موضوعية"]
    },
    {
      id: 2,
      title: "تحليل مكاني وأتمتة سير العمل",
      category: "تحليل مكاني",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
      description: "تحليل مكاني وخرائط وتصورات، دمج الاستشعار عن بعد، وسكربتات Python لأتمتة GIS وتحسين التكاليف (FlueroGen).",
      tags: ["ArcGIS Pro", "QGIS", "Python"],
      features: ["تحسين مكاني وتقليل التكاليف", "مراقبة استخدام الأراضي والبيئة", "أتمتة العمليات"]
    },
    {
      id: 3,
      title: "تحدي NASA Space Apps",
      category: "مسابقات دولية",
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&q=80",
      description: "مشاركة مرتين (القاهرة وبورسعيد). مشروع القاهرة ضمن أفضل 10% من المشاريع المقدمة. مشروع بورسعيد حصل على المركز الخامس.",
      tags: ["NASA", "Space Apps", "Innovation"],
      features: ["القاهرة: ضمن أفضل 10%", "بورسعيد: المركز الخامس", "حلول مبتكرة"]
    },
    {
      id: 4,
      title: "يوم GIS العالمي والأنشطة",
      category: "أنشطة مجتمعية",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
      description: "عرض مشروع GIS في يوم GIS العالمي بالجمعية الجغرافية المصرية (7 فبراير 2026). المركز الثاني في مسابقة الطالب المثالي بكلية الآداب – جامعة الزقازيق.",
      tags: ["World GIS Day", "الجمعية الجغرافية", "Awards"],
      features: ["عرض في يوم GIS العالمي", "المركز الثاني – الطالب المثالي", "مشاركة في معرض IWWI 2025"]
    },
    {
      id: 5,
      title: "تحليل ملاءمة الهيدروجين الأخضر",
      category: "تحليل مكاني",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1000&auto=format&fit=crop",
      description: "دراسة تحليلية لتحديد أفضل المواقع لإنشاء محطات إنتاج الهيدروجين الأخضر في مصر بناءً على معايير مكانية وبيئية دقيقة.",
      tags: ["ArcGIS Pro", "Spatial Analysis"],
      features: ["تحليل المعايير المتعددة", "نمذجة مكانية", "تقييم الأثر البيئي"]
    }
  ],
  skills: [
    {
      category: "البرمجة والتحليل",
      items: [
        { name: "Python, ArcPy", percentage: 85 },
        { name: "تصميم الخرائط وقواعد البيانات", percentage: 90 },
        { name: "التحليل المكاني", percentage: 95 }
      ]
    },
    {
      category: "تصور البيانات ونظم المعلومات الجغرافية",
      items: [
        { name: "ArcGIS Pro, QGIS", percentage: 95 },
        { name: "AutoCAD, Civil 3D", percentage: 80 },
        { name: "Google Earth Pro/Engine", percentage: 85 },
        { name: "ArcGIS Online & Dashboards", percentage: 90 }
      ]
    },
    {
      category: "اللغات",
      items: [
        { name: "العربية (اللغة الأم)", percentage: 100 },
        { name: "الإنجليزية (B1)", percentage: 70 }
      ]
    }
  ],
  experience: [
    {
      id: 1,
      role: "محلل نظم معلومات جغرافية / عالم بيانات مكانية",
      company: "FlueroGen",
      period: "2024 – 2025",
      description: "إجراء التحليل المكاني لتحديد الأنماط ودعم اتخاذ القرارات القائمة على الموقع. استخدام ArcGIS Pro و QGIS لإنشاء خرائط تفصيلية وتصورات جغرافية مكانية. دمج بيانات الاستشعار عن بعد لاستخدام الأراضي والمراقبة البيئية. تطوير سكربتات Python لأتمتة سير عمل GIS وتحسين معالجة البيانات."
    },
    {
      id: 2,
      role: "أخصائي نظم معلومات جغرافية مبتدئ",
      company: "Pantheros Labs",
      period: "2023 – 2024",
      description: "تنظيف وتحويل وترميز مجموعات البيانات المكانية جغرافيًا من مصادر مختلفة. المساعدة في تطوير تطبيقات الويب ولوحات المعلومات GIS باستخدام ArcGIS Online. دعم جمع البيانات الميدانية وضمان التكامل الدقيق في أنظمة GIS. إجراء إحصائيات مكانية وإنشاء خرائط موضوعية لدعم رؤى الأعمال."
    }
  ],
  certificates: [
    {
      id: 1,
      title: "دورة متقدمة في الاستشعار عن بعد ونظم المعلومات الجغرافية",
      issuer: "الهيئة القومية للاستشعار عن بعد",
      date: "2024",
      description: "تدريب متقدم على تقنيات الاستشعار عن بعد وتطبيقات GIS.",
      type: "course"
    },
    {
      id: 2,
      title: "شهادة في تطبيقات GIS",
      issuer: "Esri",
      date: "2024",
      description: "شهادة معتمدة في استخدام تطبيقات Esri المختلفة.",
      type: "certification"
    },
    {
      id: 3,
      title: "برنامج تدريبي في أنظمة إمداد المياه والصرف الصحي",
      issuer: "شركة مياه الشرب والصرف الصحي بالشرقية",
      date: "2023",
      description: "تطبيق GIS في إدارة شبكات المياه والصرف الصحي.",
      type: "workshop"
    },
    {
      id: 4,
      title: "دورة تدريبية في نظم المعلومات الجغرافية",
      issuer: "كلية الآداب، جامعة الزقازيق",
      date: "2023",
      description: "دورة تدريبية في أساسيات وتطبيقات نظم المعلومات الجغرافية.",
      type: "course"
    },
    {
      id: 5,
      title: "برنامج متخصص في GIS وتقنيات التحليل المكاني",
      issuer: "مركز GIS Navigator UHD",
      date: "2023",
      description: "برنامج متخصص في تقنيات التحليل المكاني ونظم المعلومات الجغرافية.",
      type: "course"
    }
  ]
};

const defaultContentEn: SiteContent = {
  hero: {
    title: "Yasser Elzanaty",
    subtitle: "GIS Specialist | Transforming Spatial Data into Smart Decisions",
    ctaText: "Contact Me",
    backgroundImage: ""
  },
  about: {
    name: "Yasser Elzanaty",
    role: "GIS Specialist",
    image: "https://drive.google.com/uc?export=view&id=14sRBWLGy9qpGsjc350ZR7IGCuwJtGcWc",
    bio: "GIS and Remote Sensing specialist with strong expertise in spatial analysis, environmental monitoring, and renewable energy mapping. Skilled in ArcGIS, QGIS, and Google Earth Engine, with proven ability to deliver accurate datasets, visualizations, and decision-support tools.\n\nRecognized for strong leadership, effective communication, and the ability to guide and motivate colleagues toward achieving project goals. Adept at teamwork, problem-solving, adaptability, and time management.",
    education: {
      degree: "Bachelor’s Degree, Geomatics Program",
      institution: "Zagazig University – Faculty of Arts",
      year: "Graduation Year: 2026 (Grade: Very Good High)"
    },
    location: "Met Gamer, Daqahliya, EG"
  },
  contact: {
    email: "yasserelzanaty2@gmail.com",
    phone: "01559332262",
    whatsapp: "01559332262",
    linkedin: "https://www.linkedin.com/in/yasser-elzanaty-7a6084233",
    github: "",
    location: "Met Gamer, Daqahliya, EG",
    cvUrl: "https://drive.google.com/uc?export=download&id=1JcWavjmuctkhMK3Iy5UBMgxiRmf0-VDw"
  },
  projects: [
    {
      id: 1,
      title: "GIS Web Applications & Dashboards",
      category: "Web Applications",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=80",
      description: "Developed GIS web applications and dashboards using ArcGIS Online; field data collection and thematic maps for business insights (Pantheros Labs).",
      tags: ["ArcGIS Online", "Dashboards", "Field Maps"],
      features: ["Web apps and interactive dashboards", "Field data collection and integration", "Thematic maps"]
    },
    {
      id: 2,
      title: "Spatial Analysis & Workflow Automation",
      category: "Spatial Analysis",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
      description: "Spatial analysis, maps and visualizations, remote sensing integration, Python scripts for GIS automation and cost optimization (FlueroGen).",
      tags: ["ArcGIS Pro", "QGIS", "Python"],
      features: ["Spatial optimization and cost reduction", "Land use and environmental monitoring", "Workflow automation"]
    },
    {
      id: 3,
      title: "NASA Space Apps Challenge",
      category: "International Competitions",
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&q=80",
      description: "Participated twice (Cairo and Port Said). Cairo project ranked among top 10% of submitted projects. Port Said project achieved 5th place overall.",
      tags: ["NASA", "Space Apps", "Innovation"],
      features: ["Cairo: Top 10%", "Port Said: 5th place", "Innovative solutions"]
    },
    {
      id: 4,
      title: "World GIS Day & Activities",
      category: "Community Activities",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
      description: "Presented a GIS project at World GIS Day, Egyptian Geographical Society (Feb 7, 2026). 2nd place in Ideal Student Competition, Faculty of Arts, Zagazig University.",
      tags: ["World GIS Day", "Geographical Society", "Awards"],
      features: ["World GIS Day presentation", "2nd place – Ideal Student", "IWWI Exhibition 2025 participation"]
    },
    {
      id: 5,
      title: "Green Hydrogen Suitability Analysis",
      category: "Spatial Analysis",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1000&auto=format&fit=crop",
      description: "Analytical study to determine the best locations for establishing green hydrogen production stations in Egypt based on precise spatial and environmental criteria.",
      tags: ["ArcGIS Pro", "Spatial Analysis"],
      features: ["Multi-criteria Analysis", "Spatial Modeling", "Environmental Impact Assessment"]
    }
  ],
  skills: [
    {
      category: "Programming & Analysis",
      items: [
        { name: "Python, ArcPy", percentage: 85 },
        { name: "Mapping & Geodatabases", percentage: 90 },
        { name: "Spatial Analysis", percentage: 95 }
      ]
    },
    {
      category: "Data Visualization & GIS",
      items: [
        { name: "ArcGIS Pro, QGIS", percentage: 95 },
        { name: "AutoCAD, Civil 3D", percentage: 80 },
        { name: "Google Earth Pro/Engine", percentage: 85 },
        { name: "ArcGIS Online & Dashboards", percentage: 90 }
      ]
    },
    {
      category: "Languages",
      items: [
        { name: "Arabic (Native)", percentage: 100 },
        { name: "English (B1)", percentage: 70 }
      ]
    }
  ],
  experience: [
    {
      id: 1,
      role: "GIS Analyst / Spatial Data Scientist",
      company: "FlueroGen",
      period: "2024 – 2025",
      description: "Conducted spatial analysis to identify patterns and support location-based decision-making. Utilized ArcGIS Pro and QGIS to create detailed maps and geospatial visualizations. Integrated remote sensing data for land use and environmental monitoring. Developed Python scripts for automating GIS workflows and improving data processing efficiency."
    },
    {
      id: 2,
      role: "Junior GIS Specialist",
      company: "Pantheros Labs",
      period: "2023 – 2024",
      description: "Cleaned, transformed, and geocoded spatial datasets from various sources. Assisted in developing GIS web applications and dashboards using ArcGIS Online. Supported field data collection and ensured accurate integration into GIS systems. Conducted spatial statistics and created thematic maps to support business insights."
    }
  ],
  certificates: [
    {
      id: 1,
      title: "Advanced Course in Remote Sensing and GIS",
      issuer: "National Authority for Remote Sensing",
      date: "2024",
      description: "Advanced training on remote sensing techniques and GIS applications.",
      type: "course"
    },
    {
      id: 2,
      title: "Certificate in GIS Applications",
      issuer: "Esri",
      date: "2024",
      description: "Certified in using various Esri applications.",
      type: "certification"
    },
    {
      id: 3,
      title: "Water Supply and Wastewater Management Systems",
      issuer: "Sharqia Water Company",
      date: "2023",
      description: "Applying GIS in managing water and wastewater networks.",
      type: "workshop"
    },
    {
      id: 4,
      title: "Training Course in Geographic Information Systems",
      issuer: "Faculty of Arts, Zagazig University",
      date: "2023",
      description: "Training course in GIS fundamentals and applications.",
      type: "course"
    },
    {
      id: 5,
      title: "Specialized Program in GIS and Spatial Analysis Techniques",
      issuer: "GIS Navigator UHD Center",
      date: "2023",
      description: "Specialized program in spatial analysis techniques and GIS.",
      type: "course"
    }
  ]
};

interface ContentContextType {
  content: SiteContent;
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.ar;
  isAdmin: boolean;
  login: (password: string) => boolean;
  logout: () => void;
  updateContent: (section: keyof SiteContent, data: any) => void;
  updateProject: (id: number, data: Partial<Project>) => void;
  addProject: () => void;
  deleteProject: (id: number) => void;
  resetContent: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');
  const [contentAr, setContentAr] = useState<SiteContent>(defaultContentAr);
  const [contentEn, setContentEn] = useState<SiteContent>(defaultContentEn);
  const [isAdmin, setIsAdmin] = useState(false);

  // Load from local storage on mount
  useEffect(() => {
    const savedAr = localStorage.getItem('site_content_ar');
    const savedEn = localStorage.getItem('site_content_en');
    const savedLang = localStorage.getItem('site_language') as Language;
    
    if (savedAr) {
      try { setContentAr(JSON.parse(savedAr)); } catch (e) { console.error("Failed parse AR"); }
    }
    if (savedEn) {
      try { setContentEn(JSON.parse(savedEn)); } catch (e) { console.error("Failed parse EN"); }
    }
    if (savedLang && (savedLang === 'ar' || savedLang === 'en')) {
      setLanguage(savedLang);
    }
  }, []);

  // Update document direction and language
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('site_language', language);
  }, [language]);

  // Save to local storage on change
  useEffect(() => {
    localStorage.setItem('site_content_ar', JSON.stringify(contentAr));
  }, [contentAr]);

  useEffect(() => {
    localStorage.setItem('site_content_en', JSON.stringify(contentEn));
  }, [contentEn]);

  const content = language === 'ar' ? contentAr : contentEn;
  const setContent = language === 'ar' ? setContentAr : setContentEn;

  const login = (password: string) => {
    if (password === '371920') {
      setIsAdmin(true);
      return true;
    }
    return false;
  };

  const logout = () => setIsAdmin(false);

  const updateContent = (section: keyof SiteContent, data: any) => {
    setContent(prev => ({
      ...prev,
      [section]: { ...prev[section], ...data }
    }));
  };

  const updateProject = (id: number, data: Partial<Project>) => {
    setContent(prev => ({
      ...prev,
      projects: prev.projects.map(p => p.id === id ? { ...p, ...data } : p)
    }));
  };

  const addProject = () => {
    const newProject: Project = {
      id: Date.now(),
      title: language === 'ar' ? "مشروع جديد" : "New Project",
      category: language === 'ar' ? "تصنيف" : "Category",
      description: language === 'ar' ? "وصف المشروع..." : "Project Description...",
      image: "https://placehold.co/600x400?text=New+Project"
    };
    setContent(prev => ({
      ...prev,
      projects: [newProject, ...prev.projects]
    }));
  };

  const deleteProject = (id: number) => {
    setContent(prev => ({
      ...prev,
      projects: prev.projects.filter(p => p.id !== id)
    }));
  };

  const resetContent = () => {
    if(confirm(translations[language].reset_content + "?")) {
      if (language === 'ar') setContentAr(defaultContentAr);
      else setContentEn(defaultContentEn);
    }
  }

  return (
    <ContentContext.Provider value={{ 
      content, 
      language,
      setLanguage,
      t: translations[language],
      isAdmin, 
      login, 
      logout, 
      updateContent,
      updateProject,
      addProject,
      deleteProject,
      resetContent
    }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) throw new Error("useContent must be used within ContentProvider");
  return context;
};