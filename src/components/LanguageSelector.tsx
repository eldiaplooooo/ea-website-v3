import React, { createContext, useContext, useState, useEffect } from 'react';
import { Globe } from 'lucide-react';

// Define the available languages
const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' }
];

// Comprehensive translation dictionary
const translations: Record<string, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.solutions': 'Solutions',
    'nav.method': 'The EA Method',
    'nav.why': 'Why EA Solutions?',
    'nav.contact': 'Contact',
    
    // Header
    'hero.title': 'Your Business Has a Body. We Build Its Mind.',
    'hero.subtitle': 'We architect bespoke AI infrastructures that eradicate repetitive work, amplify human potential, and unlock unprecedented levels of efficiency for your enterprise.',
    
    // Footer
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
    'industry.retail.status': 'Coming Soon',
    
    // Smart Living translations
    'smartliving.hero.title': 'Smart Living & Personal AI',
    'smartliving.hero.subtitle': 'Create intelligent living spaces with adaptive home automation, personal assistant systems, and energy optimization that learns from your lifestyle.',
    'smartliving.hero.cta': 'Book Your Smart Home Demo',
    'smartliving.transformation.title': 'Complete Smart Home Transformation',
    'smartliving.transformation.subtitle': 'Discover our curated collection of premium smart home products and AI-powered bundles.',
    'smartliving.transformation.cta': 'Shop Smart Home Products',
    'smartliving.categories.lighting': 'Smart Lighting',
    'smartliving.categories.climate': 'Climate Control',
    'smartliving.categories.security': 'Security Systems',
    'smartliving.categories.speakers': 'Smart Speakers',
    'smartliving.bundles.title': 'AI-Powered Smart Home Bundles',
    'smartliving.bundles.description': 'Get everything you need for a complete smart home transformation with our expertly curated bundles.',
    'smartliving.bundles.starter': 'Starter Bundle - Perfect for beginners',
    'smartliving.bundles.security': 'Security Bundle - Complete protection',
    'smartliving.bundles.premium': 'Premium Bundle - Full automation',
    'smartliving.bundles.savings': 'Average Savings',
    'smartliving.bundles.cta': 'View All Bundles',
    'smartliving.why.title': 'Why Home Automation?',
    'smartliving.why.subtitle': 'Transform your daily life with intelligent automation',
    'smartliving.why.errand.title': 'Automated Errands',
    'smartliving.why.errand.description': 'Let AI handle routine tasks like grocery ordering, appointment scheduling, and bill payments.',
    'smartliving.why.bookings.title': 'Smart Bookings',
    'smartliving.why.bookings.description': 'Automatically book services, reservations, and appointments based on your preferences and schedule.',
    'smartliving.why.climate.title': 'Perfect Climate',
    'smartliving.why.climate.description': 'Maintain optimal temperature, humidity, and air quality automatically based on occupancy and weather.',
    'smartliving.why.security.title': 'Enhanced Security',
    'smartliving.why.security.description': 'Intelligent security systems that learn your patterns and protect your home proactively.',
    'smartliving.why.care.title': 'Family Care',
    'smartliving.why.care.description': 'Monitor elderly family members, pets, and children with smart sensors and AI-powered alerts.',
    'smartliving.why.control.title': 'Total Control',
    'smartliving.why.control.description': 'Control every aspect of your home from anywhere with voice commands or mobile apps.',
    'smartliving.why.cta.title': 'Ready to Transform Your Home?',
    'smartliving.why.cta.subtitle': 'Start with our AI-recommended bundles or browse individual products.',
    'smartliving.why.cta.bundles': 'View Smart Bundles',
    'smartliving.why.cta.demo': 'Book Free Demo',
    'smartliving.solutions.title': 'Comprehensive Smart Living Solutions',
    'smartliving.solutions.subtitle': 'Our AI-powered solutions create intelligent living spaces that adapt to your lifestyle and preferences.',
    'smartliving.solutions.assistant.title': 'Personal AI Assistant',
    'smartliving.solutions.assistant.description': 'Voice-controlled AI that manages your home, schedule, and daily tasks with natural language processing.',
    'smartliving.solutions.assistant.features.voice': 'Voice control in multiple languages',
    'smartliving.solutions.assistant.features.schedule': 'Intelligent scheduling and reminders',
    'smartliving.solutions.assistant.features.control': 'Complete home device control',
    'smartliving.solutions.assistant.features.recommendations': 'Personalized recommendations',
    'smartliving.solutions.climate.title': 'Intelligent Climate Control',
    'smartliving.solutions.climate.description': 'AI-optimized heating, cooling, and air quality management that learns your preferences and saves energy.',
    'smartliving.solutions.climate.features.temperature': 'Adaptive temperature control',
    'smartliving.solutions.climate.features.weather': 'Weather-based adjustments',
    'smartliving.solutions.climate.features.occupancy': 'Occupancy-based optimization',
    'smartliving.solutions.climate.features.energy': 'Energy efficiency optimization',
    'smartliving.solutions.lighting.title': 'Smart Lighting Systems',
    'smartliving.solutions.lighting.description': 'Adaptive lighting that adjusts to your circadian rhythm, activities, and natural light conditions.',
    'smartliving.solutions.lighting.features.circadian': 'Circadian rhythm optimization',
    'smartliving.solutions.lighting.features.scene': 'Automated scene setting',
    'smartliving.solutions.lighting.features.motion': 'Motion-based activation',
    'smartliving.solutions.lighting.features.natural': 'Natural light integration',
    'smartliving.solutions.security.title': 'Advanced Security Systems',
    'smartliving.solutions.security.description': 'AI-powered security with facial recognition, behavioral analysis, and predictive threat detection.',
    'smartliving.solutions.security.features.facial': 'Facial recognition access',
    'smartliving.solutions.security.features.intrusion': 'Intelligent intrusion detection',
    'smartliving.solutions.security.features.notifications': 'Smart alert notifications',
    'smartliving.solutions.security.features.monitoring': '24/7 AI monitoring',
    'smartliving.solutions.energy.title': 'Energy Management',
    'smartliving.solutions.energy.description': 'Optimize energy consumption with AI-driven load balancing, peak shaving, and renewable integration.',
    'smartliving.solutions.energy.features.optimization': 'Consumption optimization',
    'smartliving.solutions.energy.features.shaving': 'Peak load shaving',
    'smartliving.solutions.energy.features.solar': 'Solar panel integration',
    'smartliving.solutions.energy.features.analytics': 'Energy usage analytics',
    'smartliving.solutions.automation.title': 'Home Automation Hub',
    'smartliving.solutions.automation.description': 'Centralized control system that integrates all smart devices and creates intelligent automation routines.',
    'smartliving.solutions.automation.features.centralized': 'Centralized device control',
    'smartliving.solutions.automation.features.integration': 'Cross-platform integration',
    'smartliving.solutions.automation.features.routines': 'Custom automation routines',
    'smartliving.solutions.automation.features.remote': 'Remote access and control',
    'smartliving.benefits.title': 'Proven Smart Home Benefits',
    'smartliving.benefits.subtitle': 'Real results from homeowners who have transformed their living spaces with our smart home solutions.',
    'smartliving.benefits.energy': 'Energy cost reduction',
    'smartliving.benefits.time': 'Daily time saved',
    'smartliving.benefits.satisfaction': 'User satisfaction rate',
    'smartliving.benefits.security': 'Security improvement',
    'smartliving.installation.title': 'Professional Installation Process',
    'smartliving.installation.subtitle': 'Our certified technicians ensure seamless installation and setup of your smart home system.',
    'smartliving.installation.assessment.title': 'Home Assessment',
    'smartliving.installation.assessment.description': 'Comprehensive evaluation of your home\'s infrastructure and smart home potential.',
    'smartliving.installation.design.title': 'Custom Design',
    'smartliving.installation.design.description': 'Personalized smart home design tailored to your lifestyle and preferences.',
    'smartliving.installation.installation.title': 'Professional Installation',
    'smartliving.installation.installation.description': 'Expert installation and configuration of all smart home devices and systems.',
    'smartliving.installation.optimization.title': 'AI Optimization',
    'smartliving.installation.optimization.description': 'Fine-tuning and optimization of AI algorithms for maximum efficiency and comfort.',
    'smartliving.features.title': 'Advanced AI Features',
    'smartliving.features.subtitle': 'Cutting-edge artificial intelligence capabilities that make your home truly intelligent.',
    'smartliving.features.predictive.title': 'Predictive Automation',
    'smartliving.features.predictive.description': 'AI learns your patterns and anticipates your needs before you even realize them.',
    'smartliving.features.predictive.features.behavioral': 'Behavioral pattern learning',
    'smartliving.features.predictive.features.scheduling': 'Predictive scheduling',
    'smartliving.features.predictive.features.adjustments': 'Proactive adjustments',
    'smartliving.features.predictive.features.optimization': 'Continuous optimization',
    'smartliving.features.voice.title': 'Natural Voice Control',
    'smartliving.features.voice.description': 'Advanced natural language processing for intuitive voice control in multiple languages.',
    'smartliving.features.voice.features.multilang': 'Multi-language support',
    'smartliving.features.voice.features.gesture': 'Gesture recognition',
    'smartliving.features.voice.features.context': 'Context understanding',
    'smartliving.features.voice.features.responses': 'Natural responses',
    'smartliving.features.health.title': 'Health & Wellness Monitoring',
    'smartliving.features.health.description': 'Monitor air quality, sleep patterns, and wellness metrics for a healthier living environment.',
    'smartliving.features.health.features.air': 'Air quality monitoring',
    'smartliving.features.health.features.sleep': 'Sleep pattern analysis',
    'smartliving.features.health.features.activity': 'Activity tracking',
    'smartliving.features.health.features.insights': 'Health insights',
    'smartliving.features.adaptive.title': 'Adaptive Learning',
    'smartliving.features.adaptive.description': 'AI continuously learns and adapts to your changing preferences and lifestyle.',
    'smartliving.features.adaptive.features.baselines': 'Behavioral baselines',
    'smartliving.features.adaptive.features.assessment': 'Preference assessment',
    'smartliving.features.adaptive.features.response': 'Adaptive response',
    'smartliving.features.adaptive.features.privacy': 'Privacy protection',
    'smartliving.cta.title': 'Transform Your Home Today',
    'smartliving.cta.subtitle': 'Join thousands of homeowners who have revolutionized their living experience with our smart home solutions.',
    'smartliving.cta.consultation': 'Free Consultation',
    'smartliving.cta.products': 'Browse Products',
    
    // Healthcare translations
    'healthcare.hero.title': 'Healthcare & Life Sciences',
    'healthcare.hero.subtitle': 'Improve patient outcomes with diagnostic assistance, automated administrative tasks, and intelligent patient management systems.',
    'healthcare.hero.cta': 'Book Your Healthcare AI Demo',
    'healthcare.solutions.title': 'Advanced Healthcare AI Solutions',
    'healthcare.solutions.subtitle': 'From diagnostic support to patient management, our AI solutions enhance healthcare delivery and improve patient outcomes.',
    'healthcare.solutions.diagnostic.title': 'AI Diagnostic Support',
    'healthcare.solutions.diagnostic.description': 'Advanced AI algorithms that assist healthcare professionals in accurate diagnosis and treatment planning.',
    'healthcare.solutions.diagnostic.features.imaging': 'Medical imaging analysis',
    'healthcare.solutions.diagnostic.features.symptoms': 'Symptom pattern recognition',
    'healthcare.solutions.diagnostic.features.differential': 'Differential diagnosis support',
    'healthcare.solutions.diagnostic.features.stratification': 'Risk stratification',
    'healthcare.solutions.management.title': 'Patient Management Systems',
    'healthcare.solutions.management.description': 'Comprehensive patient management with AI-powered scheduling, monitoring, and care coordination.',
    'healthcare.solutions.management.features.pathways': 'Clinical pathway optimization',
    'healthcare.solutions.management.features.scheduling': 'Intelligent appointment scheduling',
    'healthcare.solutions.management.features.adherence': 'Medication adherence monitoring',
    'healthcare.solutions.management.features.communication': 'Patient communication automation',
    'healthcare.solutions.documentation.title': 'Clinical Documentation',
    'healthcare.solutions.documentation.description': 'Automated clinical documentation with natural language processing and intelligent data extraction.',
    'healthcare.solutions.documentation.features.transcription': 'Voice-to-text transcription',
    'healthcare.solutions.documentation.features.generation': 'Automated report generation',
    'healthcare.solutions.documentation.features.coding': 'Medical coding assistance',
    'healthcare.solutions.documentation.features.assurance': 'Quality assurance checks',
    'healthcare.solutions.monitoring.title': 'Remote Patient Monitoring',
    'healthcare.solutions.monitoring.description': 'Continuous patient monitoring with AI-powered alerts and predictive health analytics.',
    'healthcare.solutions.monitoring.features.vitals': 'Vital signs monitoring',
    'healthcare.solutions.monitoring.features.alerts': 'Intelligent alert systems',
    'healthcare.solutions.monitoring.features.analysis': 'Trend analysis',
    'healthcare.solutions.monitoring.features.preventive': 'Preventive care recommendations',
    'healthcare.solutions.research.title': 'Clinical Research Support',
    'healthcare.solutions.research.description': 'AI-powered research tools for drug discovery, clinical trials, and medical research acceleration.',
    'healthcare.solutions.research.features.molecular': 'Molecular analysis',
    'healthcare.solutions.research.features.trials': 'Clinical trial optimization',
    'healthcare.solutions.research.features.biomarkers': 'Biomarker discovery',
    'healthcare.solutions.research.features.automation': 'Research automation',
    'healthcare.solutions.personalized.title': 'Personalized Medicine',
    'healthcare.solutions.personalized.description': 'Tailored treatment plans based on individual patient data, genetics, and medical history.',
    'healthcare.solutions.personalized.features.genomic': 'Genomic analysis',
    'healthcare.solutions.personalized.features.personalization': 'Treatment personalization',
    'healthcare.solutions.personalized.features.prediction': 'Outcome prediction',
    'healthcare.solutions.personalized.features.dosing': 'Precision dosing',
    'healthcare.impact.title': 'Measurable Healthcare Impact',
    'healthcare.impact.subtitle': 'Our healthcare AI solutions deliver proven improvements in patient care, operational efficiency, and clinical outcomes.',
    'healthcare.impact.accuracy': 'Diagnostic accuracy improvement',
    'healthcare.impact.documentation': 'Documentation time reduction',
    'healthcare.impact.readmission': 'Readmission rate reduction',
    'healthcare.impact.treatment': 'Treatment efficiency increase',
    'healthcare.success.title': 'Healthcare Success Story',
    'healthcare.success.company': 'Leading Dental Practice',
    'healthcare.success.quote': 'Athenex\'s AI diagnostic tools have revolutionized our practice with significant',
    'healthcare.success.results.time': '40% reduction in diagnostic time',
    'healthcare.success.results.accuracy': '95% improvement in treatment accuracy',
    'healthcare.success.results.experience': 'Enhanced patient experience',
    'healthcare.compliance.title': 'Healthcare Compliance & Security',
    'healthcare.compliance.subtitle': 'Our solutions meet the highest healthcare standards for security, privacy, and regulatory compliance.',
    'healthcare.compliance.hipaa.title': 'HIPAA Compliance',
    'healthcare.compliance.hipaa.description': 'Full HIPAA compliance with encrypted data handling and secure patient information management.',
    'healthcare.compliance.fda.title': 'FDA Validation',
    'healthcare.compliance.fda.description': 'FDA-validated algorithms and medical device compliance for clinical decision support systems.',
    'healthcare.compliance.security.title': 'Enterprise Security',
    'healthcare.compliance.security.description': 'Military-grade encryption and security protocols protecting sensitive medical data.',
    'healthcare.compliance.audit.title': 'Audit Trail',
    'healthcare.compliance.audit.description': 'Comprehensive audit trails and logging for regulatory compliance and quality assurance.',
    'healthcare.compliance.privacy.title': 'Data Privacy',
    'healthcare.compliance.privacy.description': 'Advanced privacy protection with anonymization and secure data processing capabilities.',
    'healthcare.compliance.integration.title': 'EHR Integration',
    'healthcare.compliance.integration.description': 'Seamless integration with existing Electronic Health Record systems and healthcare workflows.',
    'healthcare.cta.title': 'Ready to Transform Healthcare Delivery?',
    'healthcare.cta.subtitle': 'Join leading healthcare organizations that have improved patient outcomes with Athenex\'s AI solutions.',
    'healthcare.cta.demo': 'Schedule Healthcare Demo',
    'healthcare.cta.guide': 'Download Implementation Guide'
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.solutions': 'Lösungen',
    'nav.method': 'Die EA-Methode',
    'nav.why': 'Warum EA Solutions?',
    'nav.contact': 'Kontakt',
    
    // Header
    'hero.title': 'Ihr Unternehmen hat einen Körper. Wir bauen seinen Verstand.',
    'hero.subtitle': 'Wir entwickeln maßgeschneiderte KI-Infrastrukturen, die repetitive Arbeit eliminieren, menschliches Potenzial verstärken und beispiellose Effizienzlevel für Ihr Unternehmen freischalten.',
    
    // Footer
    'footer.description': 'Wir entwickeln maßgeschneiderte KI-Infrastrukturen, die repetitive Arbeit beseitigen, menschliches Potenzial verstärken und beispiellose Effizienzsteigerungen ermöglichen.',
    'footer.cta': 'Buchen Sie Ihr KI-Strategiegespräch',
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
    'industry.retail.status': 'Demnächst',
    
    // Smart Living German translations
    'smartliving.hero.title': 'Smart Living & Persönliche KI',
    'smartliving.hero.subtitle': 'Schaffen Sie intelligente Wohnräume mit adaptiver Hausautomation, persönlichen Assistenzsystemen und Energieoptimierung, die von Ihrem Lebensstil lernt.',
    'smartliving.hero.cta': 'Buchen Sie Ihre Smart Home Demo',
    'smartliving.transformation.title': 'Komplette Smart Home Transformation',
    'smartliving.transformation.subtitle': 'Entdecken Sie unsere kuratierte Sammlung von Premium Smart Home Produkten und KI-gestützten Bundles.',
    'smartliving.transformation.cta': 'Smart Home Produkte kaufen',
    'smartliving.categories.lighting': 'Intelligente Beleuchtung',
    'smartliving.categories.climate': 'Klimakontrolle',
    'smartliving.categories.security': 'Sicherheitssysteme',
    'smartliving.categories.speakers': 'Smart Speaker',
    'smartliving.bundles.title': 'KI-gestützte Smart Home Bundles',
    'smartliving.bundles.description': 'Erhalten Sie alles, was Sie für eine komplette Smart Home Transformation benötigen, mit unseren fachmännisch kuratierten Bundles.',
    'smartliving.bundles.starter': 'Starter Bundle - Perfekt für Einsteiger',
    'smartliving.bundles.security': 'Sicherheits Bundle - Kompletter Schutz',
    'smartliving.bundles.premium': 'Premium Bundle - Vollautomatisierung',
    'smartliving.bundles.savings': 'Durchschnittliche Ersparnis',
    'smartliving.bundles.cta': 'Alle Bundles anzeigen',
    'smartliving.why.title': 'Warum Hausautomation?',
    'smartliving.why.subtitle': 'Transformieren Sie Ihr tägliches Leben mit intelligenter Automatisierung',
    'smartliving.why.errand.title': 'Automatisierte Besorgungen',
    'smartliving.why.errand.description': 'Lassen Sie KI Routineaufgaben wie Lebensmittelbestellungen, Terminplanung und Rechnungszahlungen übernehmen.',
    'smartliving.why.bookings.title': 'Intelligente Buchungen',
    'smartliving.why.bookings.description': 'Automatische Buchung von Dienstleistungen, Reservierungen und Terminen basierend auf Ihren Präferenzen und Zeitplan.',
    'smartliving.why.climate.title': 'Perfektes Klima',
    'smartliving.why.climate.description': 'Automatische Aufrechterhaltung optimaler Temperatur, Luftfeuchtigkeit und Luftqualität basierend auf Belegung und Wetter.',
    'smartliving.why.security.title': 'Erweiterte Sicherheit',
    'smartliving.why.security.description': 'Intelligente Sicherheitssysteme, die Ihre Muster lernen und Ihr Zuhause proaktiv schützen.',
    'smartliving.why.care.title': 'Familienfürsorge',
    'smartliving.why.care.description': 'Überwachen Sie ältere Familienmitglieder, Haustiere und Kinder mit intelligenten Sensoren und KI-gestützten Alarmen.',
    'smartliving.why.control.title': 'Totale Kontrolle',
    'smartliving.why.control.description': 'Kontrollieren Sie jeden Aspekt Ihres Zuhauses von überall mit Sprachbefehlen oder mobilen Apps.',
    'smartliving.why.cta.title': 'Bereit, Ihr Zuhause zu transformieren?',
    'smartliving.why.cta.subtitle': 'Beginnen Sie mit unseren KI-empfohlenen Bundles oder durchsuchen Sie einzelne Produkte.',
    'smartliving.why.cta.bundles': 'Smart Bundles anzeigen',
    'smartliving.why.cta.demo': 'Kostenlose Demo buchen',
    'smartliving.solutions.title': 'Umfassende Smart Living Lösungen',
    'smartliving.solutions.subtitle': 'Unsere KI-gestützten Lösungen schaffen intelligente Wohnräume, die sich an Ihren Lebensstil und Ihre Präferenzen anpassen.',
    'smartliving.solutions.assistant.title': 'Persönlicher KI-Assistent',
    'smartliving.solutions.assistant.description': 'Sprachgesteuerter KI-Assistent, der Ihr Zuhause, Ihren Zeitplan und tägliche Aufgaben mit natürlicher Sprachverarbeitung verwaltet.',
    'smartliving.solutions.assistant.features.voice': 'Sprachsteuerung in mehreren Sprachen',
    'smartliving.solutions.assistant.features.schedule': 'Intelligente Terminplanung und Erinnerungen',
    'smartliving.solutions.assistant.features.control': 'Komplette Hausgerätesteuerung',
    'smartliving.solutions.assistant.features.recommendations': 'Personalisierte Empfehlungen',
    'smartliving.solutions.climate.title': 'Intelligente Klimakontrolle',
    'smartliving.solutions.climate.description': 'KI-optimierte Heizungs-, Kühlungs- und Luftqualitätsverwaltung, die Ihre Präferenzen lernt und Energie spart.',
    'smartliving.solutions.climate.features.temperature': 'Adaptive Temperaturkontrolle',
    'smartliving.solutions.climate.features.weather': 'Wetterbasierte Anpassungen',
    'smartliving.solutions.climate.features.occupancy': 'Belegungsbasierte Optimierung',
    'smartliving.solutions.climate.features.energy': 'Energieeffizienz-Optimierung',
    'smartliving.solutions.lighting.title': 'Intelligente Beleuchtungssysteme',
    'smartliving.solutions.lighting.description': 'Adaptive Beleuchtung, die sich an Ihren zirkadianen Rhythmus, Aktivitäten und natürliche Lichtverhältnisse anpasst.',
    'smartliving.solutions.lighting.features.circadian': 'Zirkadiane Rhythmus-Optimierung',
    'smartliving.solutions.lighting.features.scene': 'Automatische Szeneneinstellung',
    'smartliving.solutions.lighting.features.motion': 'Bewegungsbasierte Aktivierung',
    'smartliving.solutions.lighting.features.natural': 'Natürliche Lichtintegration',
    'smartliving.solutions.security.title': 'Erweiterte Sicherheitssysteme',
    'smartliving.solutions.security.description': 'KI-gestützte Sicherheit mit Gesichtserkennung, Verhaltensanalyse und prädiktiver Bedrohungserkennung.',
    'smartliving.solutions.security.features.facial': 'Gesichtserkennungszugang',
    'smartliving.solutions.security.features.intrusion': 'Intelligente Einbruchserkennung',
    'smartliving.solutions.security.features.notifications': 'Intelligente Alarm-Benachrichtigungen',
    'smartliving.solutions.security.features.monitoring': '24/7 KI-Überwachung',
    'smartliving.solutions.energy.title': 'Energiemanagement',
    'smartliving.solutions.energy.description': 'Optimieren Sie den Energieverbrauch mit KI-gesteuertem Lastausgleich, Spitzenlastreduzierung und erneuerbarer Integration.',
    'smartliving.solutions.energy.features.optimization': 'Verbrauchsoptimierung',
    'smartliving.solutions.energy.features.shaving': 'Spitzenlastreduzierung',
    'smartliving.solutions.energy.features.solar': 'Solarpanel-Integration',
    'smartliving.solutions.energy.features.analytics': 'Energieverbrauchsanalyse',
    'smartliving.solutions.automation.title': 'Hausautomations-Hub',
    'smartliving.solutions.automation.description': 'Zentralisiertes Steuerungssystem, das alle intelligenten Geräte integriert und intelligente Automatisierungsroutinen erstellt.',
    'smartliving.solutions.automation.features.centralized': 'Zentralisierte Gerätekontrolle',
    'smartliving.solutions.automation.features.integration': 'Plattformübergreifende Integration',
    'smartliving.solutions.automation.features.routines': 'Benutzerdefinierte Automatisierungsroutinen',
    'smartliving.solutions.automation.features.remote': 'Fernzugriff und -steuerung',
    'smartliving.benefits.title': 'Bewährte Smart Home Vorteile',
    'smartliving.benefits.subtitle': 'Echte Ergebnisse von Hausbesitzern, die ihre Wohnräume mit unseren Smart Home Lösungen transformiert haben.',
    'smartliving.benefits.energy': 'Energiekostenreduzierung',
    'smartliving.benefits.time': 'Täglich gesparte Zeit',
    'smartliving.benefits.satisfaction': 'Benutzerzufriedenheitsrate',
    'smartliving.benefits.security': 'Sicherheitsverbesserung',
    'smartliving.installation.title': 'Professioneller Installationsprozess',
    'smartliving.installation.subtitle': 'Unsere zertifizierten Techniker gewährleisten eine nahtlose Installation und Einrichtung Ihres Smart Home Systems.',
    'smartliving.installation.assessment.title': 'Hausbewertung',
    'smartliving.installation.assessment.description': 'Umfassende Bewertung der Infrastruktur Ihres Hauses und des Smart Home Potenzials.',
    'smartliving.installation.design.title': 'Individuelles Design',
    'smartliving.installation.design.description': 'Personalisiertes Smart Home Design, zugeschnitten auf Ihren Lebensstil und Ihre Präferenzen.',
    'smartliving.installation.installation.title': 'Professionelle Installation',
    'smartliving.installation.installation.description': 'Fachgerechte Installation und Konfiguration aller Smart Home Geräte und Systeme.',
    'smartliving.installation.optimization.title': 'KI-Optimierung',
    'smartliving.installation.optimization.description': 'Feinabstimmung und Optimierung von KI-Algorithmen für maximale Effizienz und Komfort.',
    'smartliving.features.title': 'Erweiterte KI-Funktionen',
    'smartliving.features.subtitle': 'Modernste Künstliche Intelligenz-Fähigkeiten, die Ihr Zuhause wirklich intelligent machen.',
    'smartliving.features.predictive.title': 'Prädiktive Automatisierung',
    'smartliving.features.predictive.description': 'KI lernt Ihre Muster und antizipiert Ihre Bedürfnisse, bevor Sie sie überhaupt bemerken.',
    'smartliving.features.predictive.features.behavioral': 'Verhaltensmuster-Lernen',
    'smartliving.features.predictive.features.scheduling': 'Prädiktive Terminplanung',
    'smartliving.features.predictive.features.adjustments': 'Proaktive Anpassungen',
    'smartliving.features.predictive.features.optimization': 'Kontinuierliche Optimierung',
    'smartliving.features.voice.title': 'Natürliche Sprachsteuerung',
    'smartliving.features.voice.description': 'Erweiterte natürliche Sprachverarbeitung für intuitive Sprachsteuerung in mehreren Sprachen.',
    'smartliving.features.voice.features.multilang': 'Mehrsprachige Unterstützung',
    'smartliving.features.voice.features.gesture': 'Gestenerkennung',
    'smartliving.features.voice.features.context': 'Kontextverständnis',
    'smartliving.features.voice.features.responses': 'Natürliche Antworten',
    'smartliving.features.health.title': 'Gesundheits- und Wellness-Überwachung',
    'smartliving.features.health.description': 'Überwachen Sie Luftqualität, Schlafmuster und Wellness-Metriken für eine gesündere Wohnumgebung.',
    'smartliving.features.health.features.air': 'Luftqualitätsüberwachung',
    'smartliving.features.health.features.sleep': 'Schlafmuster-Analyse',
    'smartliving.features.health.features.activity': 'Aktivitätsverfolgung',
    'smartliving.features.health.features.insights': 'Gesundheitseinblicke',
    'smartliving.features.adaptive.title': 'Adaptives Lernen',
    'smartliving.features.adaptive.description': 'KI lernt kontinuierlich und passt sich an Ihre sich ändernden Präferenzen und Ihren Lebensstil an.',
    'smartliving.features.adaptive.features.baselines': 'Verhaltensbaselines',
    'smartliving.features.adaptive.features.assessment': 'Präferenzbewertung',
    'smartliving.features.adaptive.features.response': 'Adaptive Reaktion',
    'smartliving.features.adaptive.features.privacy': 'Datenschutz',
    'smartliving.cta.title': 'Transformieren Sie Ihr Zuhause heute',
    'smartliving.cta.subtitle': 'Schließen Sie sich Tausenden von Hausbesitzern an, die ihr Wohnerlebnis mit unseren Smart Home Lösungen revolutioniert haben.',
    'smartliving.cta.consultation': 'Kostenlose Beratung',
    'smartliving.cta.products': 'Produkte durchsuchen',
    
    // Healthcare German translations
    'healthcare.hero.title': 'Gesundheitswesen & Biowissenschaften',
    'healthcare.hero.subtitle': 'Verbessern Sie Patientenergebnisse mit Diagnosehilfe, automatisierten Verwaltungsaufgaben und intelligenten Patientenverwaltungssystemen.',
    'healthcare.hero.cta': 'Buchen Sie Ihre Gesundheitswesen-KI Demo',
    'healthcare.solutions.title': 'Erweiterte Gesundheitswesen-KI-Lösungen',
    'healthcare.solutions.subtitle': 'Von Diagnoseunterstützung bis Patientenverwaltung verbessern unsere KI-Lösungen die Gesundheitsversorgung und Patientenergebnisse.',
    'healthcare.solutions.diagnostic.title': 'KI-Diagnoseunterstützung',
    'healthcare.solutions.diagnostic.description': 'Erweiterte KI-Algorithmen, die Gesundheitsfachkräfte bei präziser Diagnose und Behandlungsplanung unterstützen.',
    'healthcare.solutions.diagnostic.features.imaging': 'Medizinische Bildanalyse',
    'healthcare.solutions.diagnostic.features.symptoms': 'Symptommuster-Erkennung',
    'healthcare.solutions.diagnostic.features.differential': 'Differentialdiagnose-Unterstützung',
    'healthcare.solutions.diagnostic.features.stratification': 'Risikostratifizierung',
    'healthcare.solutions.management.title': 'Patientenverwaltungssysteme',
    'healthcare.solutions.management.description': 'Umfassende Patientenverwaltung mit KI-gestützter Terminplanung, Überwachung und Pflegekoordination.',
    'healthcare.solutions.management.features.pathways': 'Klinische Pfadoptimierung',
    'healthcare.solutions.management.features.scheduling': 'Intelligente Terminplanung',
    'healthcare.solutions.management.features.adherence': 'Medikamenten-Adhärenz-Überwachung',
    'healthcare.solutions.management.features.communication': 'Patientenkommunikations-Automatisierung',
    'healthcare.solutions.documentation.title': 'Klinische Dokumentation',
    'healthcare.solutions.documentation.description': 'Automatisierte klinische Dokumentation mit natürlicher Sprachverarbeitung und intelligenter Datenextraktion.',
    'healthcare.solutions.documentation.features.transcription': 'Sprache-zu-Text-Transkription',
    'healthcare.solutions.documentation.features.generation': 'Automatisierte Berichtserstellung',
    'healthcare.solutions.documentation.features.coding': 'Medizinische Kodierungshilfe',
    'healthcare.solutions.documentation.features.assurance': 'Qualitätssicherungsprüfungen',
    'healthcare.solutions.monitoring.title': 'Fernpatientenüberwachung',
    'healthcare.solutions.monitoring.description': 'Kontinuierliche Patientenüberwachung mit KI-gestützten Alarmen und prädiktiver Gesundheitsanalytik.',
    'healthcare.solutions.monitoring.features.vitals': 'Vitalzeichenüberwachung',
    'healthcare.solutions.monitoring.features.alerts': 'Intelligente Alarmsysteme',
    'healthcare.solutions.monitoring.features.analysis': 'Trendanalyse',
    'healthcare.solutions.monitoring.features.preventive': 'Präventive Pflegeempfehlungen',
    'healthcare.solutions.research.title': 'Klinische Forschungsunterstützung',
    'healthcare.solutions.research.description': 'KI-gestützte Forschungstools für Arzneimittelentdeckung, klinische Studien und medizinische Forschungsbeschleunigung.',
    'healthcare.solutions.research.features.molecular': 'Molekularanalyse',
    'healthcare.solutions.research.features.trials': 'Klinische Studienoptimierung',
    'healthcare.solutions.research.features.biomarkers': 'Biomarker-Entdeckung',
    'healthcare.solutions.research.features.automation': 'Forschungsautomatisierung',
    'healthcare.solutions.personalized.title': 'Personalisierte Medizin',
    'healthcare.solutions.personalized.description': 'Maßgeschneiderte Behandlungspläne basierend auf individuellen Patientendaten, Genetik und Krankengeschichte.',
    'healthcare.solutions.personalized.features.genomic': 'Genomanalyse',
    'healthcare.solutions.personalized.features.personalization': 'Behandlungspersonalisierung',
    'healthcare.solutions.personalized.features.prediction': 'Ergebnisvorhersage',
    'healthcare.solutions.personalized.features.dosing': 'Präzisionsdosierung',
    'healthcare.impact.title': 'Messbare Gesundheitswesen-Auswirkungen',
    'healthcare.impact.subtitle': 'Unsere Gesundheitswesen-KI-Lösungen liefern bewährte Verbesserungen in der Patientenversorgung, operativen Effizienz und klinischen Ergebnissen.',
    'healthcare.impact.accuracy': 'Diagnosepräzisions-Verbesserung',
    'healthcare.impact.documentation': 'Dokumentationszeit-Reduzierung',
    'healthcare.impact.readmission': 'Wiederaufnahmeraten-Reduzierung',
    'healthcare.impact.treatment': 'Behandlungseffizienz-Steigerung',
    'healthcare.success.title': 'Gesundheitswesen-Erfolgsgeschichte',
    'healthcare.success.company': 'Führende Zahnarztpraxis',
    'healthcare.success.quote': 'Athenex\'s KI-Diagnosetools haben unsere Praxis mit bedeutenden revolutioniert',
    'healthcare.success.results.time': '40% Reduzierung der Diagnosezeit',
    'healthcare.success.results.accuracy': '95% Verbesserung der Behandlungspräzision',
    'healthcare.success.results.experience': 'Verbesserte Patientenerfahrung',
    'healthcare.compliance.title': 'Gesundheitswesen-Compliance & Sicherheit',
    'healthcare.compliance.subtitle': 'Unsere Lösungen erfüllen die höchsten Gesundheitswesen-Standards für Sicherheit, Datenschutz und regulatorische Compliance.',
    'healthcare.compliance.hipaa.title': 'HIPAA-Compliance',
    'healthcare.compliance.hipaa.description': 'Vollständige HIPAA-Compliance mit verschlüsselter Datenverarbeitung und sicherer Patienteninformationsverwaltung.',
    'healthcare.compliance.fda.title': 'FDA-Validierung',
    'healthcare.compliance.fda.description': 'FDA-validierte Algorithmen und Medizinprodukte-Compliance für klinische Entscheidungsunterstützungssysteme.',
    'healthcare.compliance.security.title': 'Unternehmenssicherheit',
    'healthcare.compliance.security.description': 'Militärische Verschlüsselung und Sicherheitsprotokolle zum Schutz sensibler medizinischer Daten.',
    'healthcare.compliance.audit.title': 'Audit-Trail',
    'healthcare.compliance.audit.description': 'Umfassende Audit-Trails und Protokollierung für regulatorische Compliance und Qualitätssicherung.',
    'healthcare.compliance.privacy.title': 'Datenschutz',
    'healthcare.compliance.privacy.description': 'Erweiterte Datenschutzschutz mit Anonymisierung und sicheren Datenverarbeitungsfähigkeiten.',
    'healthcare.compliance.integration.title': 'EHR-Integration',
    'healthcare.compliance.integration.description': 'Nahtlose Integration mit bestehenden elektronischen Gesundheitsakten-Systemen und Gesundheitswesen-Workflows.',
    'healthcare.cta.title': 'Bereit, die Gesundheitsversorgung zu transformieren?',
    'healthcare.cta.subtitle': 'Schließen Sie sich führenden Gesundheitsorganisationen an, die Patientenergebnisse mit Athenex\'s KI-Lösungen verbessert haben.',
    'healthcare.cta.demo': 'Gesundheitswesen-Demo planen',
    'healthcare.cta.guide': 'Implementierungsleitfaden herunterladen'
  },
  ar: {
    // Keep existing Arabic translations
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
    // Try to get the language from localStorage
    try {
      const savedLanguage = localStorage.getItem('language');
      if (savedLanguage && languages.some(lang => lang.code === savedLanguage)) {
        return savedLanguage;
      }
    } catch {
      // Ignore localStorage errors
    }
    
    const browserLang = navigator.language.split('-')[0];
    return languages.some(lang => lang.code === browserLang) ? browserLang : 'en';
  });

  useEffect(() => {
    try {
      localStorage.setItem('language', language);
    } catch {
      // Ignore localStorage errors
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