import React, { createContext, useContext, useState, useEffect } from 'react';
import { Globe } from 'lucide-react';

// Define the available languages
const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' }
];

// Simplified translation dictionary for bolt.new
const translations: Record<string, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.solutions': 'Solutions',
    'nav.method': 'The EA Method',
    'nav.why': 'Why EA Solutions?',
    'nav.contact': 'Contact',
    'header.cta': 'Book AI Strategy Call',
    'hero.title': 'Your Business Has a Body. We Build Its Mind.',
    'hero.subtitle': 'We architect bespoke AI infrastructures that eradicate repetitive work, amplify human potential, and unlock unprecedented efficiency.',
    'footer.description': 'We architect bespoke AI infrastructures that eradicate repetitive work, amplify human potential, and unlock unprecedented levels of efficiency.',
    'footer.cta': 'Book Your AI Strategy Call',
    'footer.quickLinks': 'Quick Links',
    'footer.contactInfo': 'Contact Information',
    'footer.rights': 'All rights reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.legal': 'Legal Notice',
    'industry.gastronomy': 'Gastronomy & Hospitality',
    'industry.industrial': 'Industrial Manufacturing',
    'industry.finance': 'Finance & Security',
    'industry.finance.status': 'Coming Soon',
    'industry.smart': 'Smart Living',
    'industry.healthcare': 'Healthcare',
    'industry.retail': 'Retail',
    'industry.retail.status': 'Coming Soon'
  },
  de: {
    'nav.home': 'Startseite',
    'nav.solutions': 'Lösungen',
    'nav.method': 'Die EA-Methode',
    'nav.why': 'Warum EA Solutions?',
    'nav.contact': 'Kontakt',
    'header.cta': 'KI-Strategieanruf buchen',
    'hero.title': 'Ihr Unternehmen hat einen Körper. Wir bauen seinen Verstand.',
    'hero.subtitle': 'Wir entwickeln maßgeschneiderte KI-Infrastrukturen, die repetitive Arbeit beseitigen, menschliches Potenzial verstärken und beispiellose Effizienz freisetzen.',
    'footer.description': 'Wir entwickeln maßgeschneiderte KI-Infrastrukturen, die repetitive Arbeit beseitigen, menschliches Potenzial verstärken und beispiellose Effizienzsteigerungen ermöglichen.',
    'footer.cta': 'Buchen Sie Ihren KI-Strategieanruf',
    'footer.quickLinks': 'Schnelllinks',
    'footer.contactInfo': 'Kontaktinformationen',
    'footer.rights': 'Alle Rechte vorbehalten',
    'footer.privacy': 'Datenschutz',
    'footer.legal': 'Impressum',
    'industry.gastronomy': 'Gastronomie & Gastgewerbe',
    'industry.industrial': 'Industrielle Fertigung',
    'industry.finance': 'Finanzen & Sicherheit',
    'industry.finance.status': 'Demnächst',
    'industry.smart': 'Smart Living',
    'industry.healthcare': 'Gesundheitswesen',
    'industry.retail': 'Einzelhandel',
    'industry.retail.status': 'Demnächst'
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.solutions': 'الحلول',
    'nav.method': 'منهجية EA',
    'nav.why': 'لماذا EA Solutions؟',
    'nav.contact': 'اتصل بنا',
    'header.cta': 'احجز مكالمة استراتيجية للذكاء الاصطناعي',
    'hero.title': 'عملك له جسد. نحن نبني عقله.',
    'hero.subtitle': 'نحن نصمم بنية تحتية للذكاء الاصطناعي مخصصة تقضي على العمل المتكرر، وتعزز الإمكانات البشرية، وتطلق العنان لمستويات غير مسبوقة من الكفاءة.',
    'footer.description': 'نحن نصمم بنية تحتية للذكاء الاصطناعي مخصصة تقضي على العمل المتكرر، وتعزز الإمكانات البشرية، وتطلق العنان لمستويات غير مسبوقة من الكفاءة.',
    'footer.cta': 'احجز مكالمة استراتيجية للذكاء الاصطناعي',
    'footer.quickLinks': 'روابط سريعة',
    'footer.contactInfo': 'معلومات الاتصال',
    'footer.rights': 'جميع الحقوق محفوظة',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.legal': 'إشعار قانوني',
    'industry.gastronomy': 'الضيافة والمطاعم',
    'industry.industrial': 'التصنيع الصناعي',
    'industry.finance': 'المالية والأمان',
    'industry.finance.status': 'قريبًا',
    'industry.smart': 'الحياة الذكية',
    'industry.healthcare': 'الرعاية الصحية',
    'industry.retail': 'البيع بالتجزئة',
    'industry.retail.status': 'قريبًا'
  }
};

// Define the language context
interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  translate: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Language Provider component
interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
        aria-label="Select language"
      >
        <Globe className="h-5 w-5 text-gray-600 dark:text-gray-400" />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {languages.find(lang => lang.code === language)?.flag}
        </span>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 flex items-center space-x-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                language === lang.code ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              <span className="text-xl">{lang.flag}</span>
              <span className="text-sm font-medium">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Try to get the language from localStorage for bolt.new
    try {
      const savedLanguage = localStorage.getItem('language');
      if (savedLanguage && languages.some(lang => lang.code === savedLanguage)) {
        return savedLanguage;
      }
    } catch {
      // Ignore localStorage errors in bolt.new
    }
    
    const browserLang = navigator.language.split('-')[0];
    return languages.some(lang => lang.code === browserLang) ? browserLang : 'en';
  });

  useEffect(() => {
    try {
      localStorage.setItem('language', language);
    } catch {
      // Ignore localStorage errors in bolt.new
    }
  }, [language]);

  const translate = (key: string): string => {
    return translations[language]?.[key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageSelector;