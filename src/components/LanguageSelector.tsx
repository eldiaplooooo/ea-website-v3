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
    'header.cta': 'Book AI Strategy Call',
    
    // Hero
    'hero.title': 'Your Business Has a Body. We Build Its Mind.',
    'hero.subtitle': 'We architect bespoke AI infrastructures that eradicate repetitive work, amplify human potential, and unlock unprecedented efficiency.',
    
    // Footer
    'footer.description': 'We architect bespoke AI infrastructures that eradicate repetitive work, amplify human potential, and unlock unprecedented levels of efficiency.',
    'footer.cta': 'Book Your AI Strategy Call',
    'footer.quickLinks': 'Quick Links',
    'footer.contactInfo': 'Contact Information',
    'footer.rights': 'All rights reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.legal': 'Legal Notice',
    
    // Industries
    'industry.gastronomy': 'Gastronomy & Hospitality',
    'industry.industrial': 'Industrial Manufacturing',
    'industry.finance': 'Finance & Security',
    'industry.finance.status': 'Coming Soon',
    'industry.smart': 'Smart Living',
    'industry.healthcare': 'Healthcare',
    'industry.retail': 'Retail',
    'industry.retail.status': 'Coming Soon',
    
    // CTA Buttons
    'cta.book': 'Book AI Strategy Call',
    'cta.start': 'Start Your AI Journey',
    'cta.learn': 'Learn More About Our Process',
    'cta.discovery': 'Start Your Discovery Phase',
    'cta.download': 'Download Methodology Guide',
    'cta.experience': 'Experience the Difference',
    'cta.schedule': 'Schedule Your Strategy Call',
    'cta.portfolio': 'Download Our Portfolio',
    'cta.trial': 'Start Free Trial',
    'cta.demo': 'Watch Demo',
    'cta.consultation': 'Get Free Consultation',
    
    // Final section
    'final.title': 'Ready to Transform Your Business?',
    'final.subtitle': 'Don\'t let your competitors get ahead. Start your AI transformation journey today.',
    'final.cta': 'Book Your AI Strategy Call Now',
    
    // MIND Product
    'mind.description': 'One intelligent system that adapts to every industry, every workflow, every challenge. MIND transforms how businesses think, learn, and grow.',
    'mind.trusted': 'Trusted by leading companies worldwide',
    'mind.features.title': 'Powerful Features',
    'mind.features.subtitle': 'Everything you need to transform your business with AI',
    'mind.features.universal.title': 'Universal Intelligence',
    'mind.features.universal.desc': 'One AI system that adapts to any industry and workflow',
    'mind.features.fast.title': 'Lightning Fast',
    'mind.features.fast.desc': 'Deploy in days, not months, with immediate results',
    'mind.features.security.title': 'Enterprise Security',
    'mind.features.security.desc': 'Military-grade security with full compliance',
    'mind.features.integration.title': 'Seamless Integration',
    'mind.features.integration.desc': 'Works with your existing systems and tools',
    'mind.architecture.title': 'Advanced Architecture',
    'mind.architecture.subtitle': 'Built on cutting-edge AI technology',
    'mind.industries.title': 'Industries We Serve',
    'mind.industries.subtitle': 'Specialized solutions for every sector',
    'mind.pricing.title': 'Simple, Transparent Pricing',
    'mind.pricing.subtitle': 'Choose the plan that fits your needs',
    'mind.pricing.pilot': 'Perfect for small teams and pilot projects',
    'mind.pricing.growth': 'Ideal for growing businesses',
    'mind.pricing.scale': 'For large organizations',
    'mind.pricing.enterprise': 'Custom solutions for enterprises',
    'mind.pricing.popular': 'Most Popular',
    'mind.pricing.contact': 'Contact Sales',
    'mind.pricing.trial': 'Start Free Trial',
    'mind.pricing.features': 'All plans include',
    'mind.testimonials.title': 'What Our Clients Say',
    'mind.testimonials.subtitle': 'Real results from real businesses',
    'mind.roi.title': 'Calculate Your ROI',
    'mind.roi.subtitle': 'See how much you could save with MIND',
    'mind.roi.employees': 'Number of Employees',
    'mind.roi.revenue': 'Annual Revenue',
    'mind.roi.industry': 'Industry',
    'mind.roi.plan': 'Selected Plan',
    'mind.roi.monthly': 'Monthly Savings',
    'mind.roi.annual': 'Annual Savings',
    'mind.roi.payback': 'Payback Period',
    'mind.roi.benefits': 'Additional Benefits',
    'mind.roi.report': 'Get Detailed ROI Report',
    'mind.cta.title': 'Ready to Get Started?',
    'mind.cta.subtitle': 'Join thousands of businesses already using MIND to transform their operations',
    'mind.cta.trial': 'Start Your Free Trial',
    'mind.cta.schedule': 'Schedule a Demo',
    
    // Legal
    'legal.privacy.title': 'Privacy Policy',
    'legal.privacy.subtitle': 'How we protect your data',
    'legal.privacy.security': 'Data Security',
    'legal.privacy.security.desc': 'Your data is protected with enterprise-grade security',
    'legal.privacy.transparency': 'Transparency',
    'legal.privacy.transparency.desc': 'Clear information about how we use your data',
    'legal.privacy.rights': 'Your Rights',
    'legal.privacy.rights.desc': 'Full control over your personal information',
    'legal.privacy.section1.title': 'Information We Collect',
    'legal.privacy.section1.content': 'We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.',
    'legal.privacy.section2.title': 'How We Use Your Information',
    'legal.privacy.section2.content': 'We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.',
    'legal.privacy.section3.title': 'Information Sharing',
    'legal.privacy.section3.content': 'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.',
    'legal.privacy.contact.title': 'Contact Us',
    'legal.privacy.contact.content': 'If you have any questions about this Privacy Policy, please contact us.',
    'legal.impressum.title': 'Legal Notice',
    'legal.impressum.subtitle': 'Legal information and company details',
    'legal.impressum.company.title': 'Company Information',
    'legal.impressum.company.details': 'Company Details',
    'legal.impressum.contact.title': 'Contact Information',
    'legal.impressum.legal.title': 'Legal Information',
    'legal.impressum.legal.responsibility': 'Responsibility for Content',
    'legal.impressum.legal.responsibility.content': 'The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents\' accuracy, completeness or topicality.',
    'legal.impressum.legal.liability': 'Liability for Links',
    'legal.impressum.legal.liability.content': 'Our offer includes links to external third party websites. We have no influence on the contents of those websites, therefore we cannot guarantee for those contents.',
    'legal.impressum.legal.copyright': 'Copyright',
    'legal.impressum.legal.copyright.content': 'The contents and works created by the site operators on these pages are subject to German copyright law.',
    'legal.impressum.dispute.title': 'Dispute Resolution',
    'legal.impressum.dispute.content': 'The European Commission provides a platform for online dispute resolution (OS).',
    
    // Contact Form
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.company': 'Company Name',
    'contact.form.phone': 'Phone Number',
    'contact.form.message': 'Message',
    'contact.form.employees': 'Number of Employees',
    'contact.form.industry': 'Industry',
    'contact.form.budget': 'Budget Range',
    'contact.form.timeline': 'Project Timeline',
    'contact.form.goals': 'Business Goals',
    'contact.form.challenges': 'Current Challenges',
    'contact.form.submit': 'Send Message',
    'contact.form.required': 'Required',
    'contact.livechat': 'Start Live Chat',
    
    // Why EA Page
    'why.advantage.title': 'The EA Solutions Advantage',
    'why.advantage.subtitle': 'We don\'t just implement AI – we architect intelligent ecosystems that evolve with your business.',
    'why.bespoke.title': 'Radically Bespoke',
    'why.bespoke.desc': 'We don\'t sell software. We build solutions. Every line of code, every algorithm, and every integration is custom-architected for you.',
    'why.expertise.title': 'Elite Expertise',
    'why.expertise.desc': 'Our team consists of experienced AI engineers and business strategists who understand both technology and industry needs.',
    'why.impact.title': 'Measurable Impact',
    'why.impact.desc': 'Our goal is your bottom line. We deliver measurable improvements in efficiency, cost reduction, and revenue generation.',
    'why.cta.title': 'Ready to Experience the EA Difference?',
    'why.cta.subtitle': 'Join the growing number of industry leaders who have chosen EA Solutions for their AI transformation journey.',
    
    // EA Method Page
    'method.title': 'The EA Method',
    'method.subtitle': 'Our proven methodology ensures your AI transformation is seamless, strategic, and sustainable.',
    'method.phases.title': 'Four Stages to AI Excellence',
    'method.phases.subtitle': 'Our comprehensive approach ensures every aspect of your AI implementation is carefully planned, expertly executed, and continuously optimized for maximum impact.',
    'method.phase1.title': 'Deep Dive & Discovery',
    'method.phase1.desc': 'We embed with your team to map every process, identify bottlenecks, and understand your ultimate goals.',
    'method.phase2.title': 'Architectural Design',
    'method.phase2.desc': 'We design a bespoke AI blueprint for your business, selecting the optimal blend of technologies.',
    'method.phase3.title': 'Seamless Implementation',
    'method.phase3.desc': 'Our elite engineers build and deploy your AI infrastructure with precision and minimal disruption.',
    'method.phase4.title': 'Evolution & Enhancement',
    'method.phase4.desc': 'Your AI mind is a living entity. We provide continuous optimization and enhancement.',
    'method.results.title': 'Proven Results',
    'method.results.subtitle': 'Our methodology consistently delivers measurable results across all industries.',
    'method.cta.title': 'Ready to Experience the EA Method?',
    'method.cta.subtitle': 'Join industry leaders who have transformed their operations with our proven methodology.',
    
    // Contact Page
    'contact.title': 'Let\'s Build.',
    'contact.subtitle': 'Ready to start the conversation? Reach out, and let\'s explore how EA Solutions can architect the next evolution of your business.',
    'contact.email': 'Email Us',
    'contact.location': 'Our Headquarters',
    'contact.form.title': 'Get in Touch',
    'contact.form.subtitle': 'Have a question or ready to start your AI transformation? We\'d love to hear from you.',
    'contact.options.title': 'Prefer a Different Approach?',
    'contact.options.subtitle': 'Choose the option that works best for you.',
    'contact.options.call.title': 'Book a Strategy Call',
    'contact.options.call.desc': 'Schedule a personalized consultation to discuss your AI transformation goals.',
    'contact.options.email.title': 'Email Directly',
    'contact.options.email.desc': 'Send us an email and we\'ll get back to you within 24 hours.',
    'contact.options.email.cta': 'Send Email',
    'contact.options.chat.title': 'Live Chat',
    'contact.options.chat.desc': 'Start a live chat conversation with our AI specialists right now.',
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.solutions': 'Lösungen',
    'nav.method': 'Die EA-Methode',
    'nav.why': 'Warum EA Solutions?',
    'nav.contact': 'Kontakt',
    
    // Header
    'header.cta': 'KI-Strategiegespräch buchen',
    
    // Hero
    'hero.title': 'Ihr Unternehmen hat einen Körper. Wir bauen seinen Verstand.',
    'hero.subtitle': 'Wir entwickeln maßgeschneiderte KI-Infrastrukturen, die repetitive Arbeit beseitigen, menschliches Potenzial verstärken und beispiellose Effizienz freisetzen.',
    
    // Footer
    'footer.description': 'Wir entwickeln maßgeschneiderte KI-Infrastrukturen, die repetitive Arbeit beseitigen, menschliches Potenzial verstärken und beispiellose Effizienzsteigerungen ermöglichen.',
    'footer.cta': 'Buchen Sie Ihr KI-Strategiegespräch',
    'footer.quickLinks': 'Schnelllinks',
    'footer.contactInfo': 'Kontaktinformationen',
    'footer.rights': 'Alle Rechte vorbehalten',
    'footer.privacy': 'Datenschutz',
    'footer.legal': 'Impressum',
    
    // Industries
    'industry.gastronomy': 'Gastronomie & Gastgewerbe',
    'industry.industrial': 'Industrielle Fertigung',
    'industry.finance': 'Finanzen & Sicherheit',
    'industry.finance.status': 'Demnächst',
    'industry.smart': 'Smart Living',
    'industry.healthcare': 'Gesundheitswesen',
    'industry.retail': 'Einzelhandel',
    'industry.retail.status': 'Demnächst',
    
    // CTA Buttons
    'cta.book': 'KI-Strategiegespräch buchen',
    'cta.start': 'Starten Sie Ihre KI-Reise',
    'cta.learn': 'Erfahren Sie mehr über unseren Prozess',
    'cta.discovery': 'Starten Sie Ihre Entdeckungsphase',
    'cta.download': 'Methodenleitfaden herunterladen',
    'cta.experience': 'Erleben Sie den Unterschied',
    'cta.schedule': 'Strategiegespräch vereinbaren',
    'cta.portfolio': 'Portfolio herunterladen',
    'cta.trial': 'Kostenlose Testversion starten',
    'cta.demo': 'Demo ansehen',
    'cta.consultation': 'Kostenlose Beratung erhalten',
    
    // Final section
    'final.title': 'Bereit, Ihr Unternehmen zu transformieren?',
    'final.subtitle': 'Lassen Sie nicht zu, dass Ihre Konkurrenten voraus sind. Starten Sie noch heute Ihre KI-Transformationsreise.',
    'final.cta': 'Buchen Sie jetzt Ihr KI-Strategiegespräch',
    
    // MIND Product
    'mind.description': 'Ein intelligentes System, das sich an jede Branche, jeden Workflow und jede Herausforderung anpasst. MIND transformiert, wie Unternehmen denken, lernen und wachsen.',
    'mind.trusted': 'Vertraut von führenden Unternehmen weltweit',
    'mind.features.title': 'Leistungsstarke Funktionen',
    'mind.features.subtitle': 'Alles, was Sie brauchen, um Ihr Unternehmen mit KI zu transformieren',
    'mind.features.universal.title': 'Universelle Intelligenz',
    'mind.features.universal.desc': 'Ein KI-System, das sich an jede Branche und jeden Workflow anpasst',
    'mind.features.fast.title': 'Blitzschnell',
    'mind.features.fast.desc': 'Bereitstellung in Tagen, nicht Monaten, mit sofortigen Ergebnissen',
    'mind.features.security.title': 'Unternehmenssicherheit',
    'mind.features.security.desc': 'Militärische Sicherheit mit vollständiger Compliance',
    'mind.features.integration.title': 'Nahtlose Integration',
    'mind.features.integration.desc': 'Funktioniert mit Ihren bestehenden Systemen und Tools',
    'mind.architecture.title': 'Fortschrittliche Architektur',
    'mind.architecture.subtitle': 'Basierend auf modernster KI-Technologie',
    'mind.industries.title': 'Branchen, die wir bedienen',
    'mind.industries.subtitle': 'Spezialisierte Lösungen für jeden Sektor',
    'mind.pricing.title': 'Einfache, transparente Preise',
    'mind.pricing.subtitle': 'Wählen Sie den Plan, der zu Ihren Bedürfnissen passt',
    'mind.pricing.pilot': 'Perfekt für kleine Teams und Pilotprojekte',
    'mind.pricing.growth': 'Ideal für wachsende Unternehmen',
    'mind.pricing.scale': 'Für große Organisationen',
    'mind.pricing.enterprise': 'Maßgeschneiderte Lösungen für Unternehmen',
    'mind.pricing.popular': 'Am beliebtesten',
    'mind.pricing.contact': 'Vertrieb kontaktieren',
    'mind.pricing.trial': 'Kostenlose Testversion starten',
    'mind.pricing.features': 'Alle Pläne beinhalten',
    'mind.testimonials.title': 'Was unsere Kunden sagen',
    'mind.testimonials.subtitle': 'Echte Ergebnisse von echten Unternehmen',
    'mind.roi.title': 'Berechnen Sie Ihren ROI',
    'mind.roi.subtitle': 'Sehen Sie, wie viel Sie mit MIND sparen könnten',
    'mind.roi.employees': 'Anzahl der Mitarbeiter',
    'mind.roi.revenue': 'Jahresumsatz',
    'mind.roi.industry': 'Branche',
    'mind.roi.plan': 'Ausgewählter Plan',
    'mind.roi.monthly': 'Monatliche Einsparungen',
    'mind.roi.annual': 'Jährliche Einsparungen',
    'mind.roi.payback': 'Amortisationszeit',
    'mind.roi.benefits': 'Zusätzliche Vorteile',
    'mind.roi.report': 'Detaillierten ROI-Bericht erhalten',
    'mind.cta.title': 'Bereit anzufangen?',
    'mind.cta.subtitle': 'Schließen Sie sich Tausenden von Unternehmen an, die bereits MIND nutzen, um ihre Abläufe zu transformieren',
    'mind.cta.trial': 'Starten Sie Ihre kostenlose Testversion',
    'mind.cta.schedule': 'Demo vereinbaren',
    
    // Legal
    'legal.privacy.title': 'Datenschutzerklärung',
    'legal.privacy.subtitle': 'Wie wir Ihre Daten schützen',
    'legal.privacy.security': 'Datensicherheit',
    'legal.privacy.security.desc': 'Ihre Daten sind mit Unternehmenssicherheit geschützt',
    'legal.privacy.transparency': 'Transparenz',
    'legal.privacy.transparency.desc': 'Klare Informationen darüber, wie wir Ihre Daten verwenden',
    'legal.privacy.rights': 'Ihre Rechte',
    'legal.privacy.rights.desc': 'Vollständige Kontrolle über Ihre persönlichen Informationen',
    'legal.privacy.section1.title': 'Informationen, die wir sammeln',
    'legal.privacy.section1.content': 'Wir sammeln Informationen, die Sie uns direkt zur Verfügung stellen, z.B. wenn Sie ein Konto erstellen, unsere Dienste nutzen oder uns für Support kontaktieren.',
    'legal.privacy.section2.title': 'Wie wir Ihre Informationen verwenden',
    'legal.privacy.section2.content': 'Wir verwenden die gesammelten Informationen, um unsere Dienste bereitzustellen, zu warten und zu verbessern, Transaktionen zu verarbeiten und mit Ihnen zu kommunizieren.',
    'legal.privacy.section3.title': 'Informationsaustausch',
    'legal.privacy.section3.content': 'Wir verkaufen, handeln oder übertragen Ihre persönlichen Informationen nicht an Dritte ohne Ihre Zustimmung, außer wie in dieser Richtlinie beschrieben.',
    'legal.privacy.contact.title': 'Kontaktieren Sie uns',
    'legal.privacy.contact.content': 'Wenn Sie Fragen zu dieser Datenschutzerklärung haben, kontaktieren Sie uns bitte.',
    'legal.impressum.title': 'Impressum',
    'legal.impressum.subtitle': 'Rechtliche Informationen und Unternehmensdetails',
    'legal.impressum.company.title': 'Unternehmensinformationen',
    'legal.impressum.company.details': 'Unternehmensdetails',
    'legal.impressum.contact.title': 'Kontaktinformationen',
    'legal.impressum.legal.title': 'Rechtliche Informationen',
    'legal.impressum.legal.responsibility': 'Verantwortung für Inhalte',
    'legal.impressum.legal.responsibility.content': 'Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.',
    'legal.impressum.legal.liability': 'Haftung für Links',
    'legal.impressum.legal.liability.content': 'Unser Angebot enthält Links zu externen Webseiten Dritter. Auf deren Inhalte haben wir keinen Einfluss, deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.',
    'legal.impressum.legal.copyright': 'Urheberrecht',
    'legal.impressum.legal.copyright.content': 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.',
    'legal.impressum.dispute.title': 'Streitbeilegung',
    'legal.impressum.dispute.content': 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) zur Verfügung.',
    
    // Contact Form
    'contact.form.name': 'Vollständiger Name',
    'contact.form.email': 'E-Mail-Adresse',
    'contact.form.company': 'Firmenname',
    'contact.form.phone': 'Telefonnummer',
    'contact.form.message': 'Nachricht',
    'contact.form.employees': 'Anzahl der Mitarbeiter',
    'contact.form.industry': 'Branche',
    'contact.form.budget': 'Budgetbereich',
    'contact.form.timeline': 'Projektzeitplan',
    'contact.form.goals': 'Geschäftsziele',
    'contact.form.challenges': 'Aktuelle Herausforderungen',
    'contact.form.submit': 'Nachricht senden',
    'contact.form.required': 'Erforderlich',
    'contact.livechat': 'Live-Chat starten',
    
    // Why EA Page
    'why.advantage.title': 'Der EA Solutions Vorteil',
    'why.advantage.subtitle': 'Wir implementieren nicht nur KI – wir entwickeln intelligente Ökosysteme, die sich mit Ihrem Unternehmen weiterentwickeln.',
    'why.bespoke.title': 'Radikal maßgeschneidert',
    'why.bespoke.desc': 'Wir verkaufen keine Software. Wir bauen Lösungen. Jede Codezeile, jeder Algorithmus und jede Integration ist speziell für Sie entwickelt.',
    'why.expertise.title': 'Elite-Expertise',
    'why.expertise.desc': 'Unser Team besteht aus erfahrenen KI-Ingenieuren und Geschäftsstrategen, die sowohl Technologie als auch Branchenbedürfnisse verstehen.',
    'why.impact.title': 'Messbare Auswirkungen',
    'why.impact.desc': 'Unser Ziel ist Ihr Gewinn. Wir liefern messbare Verbesserungen in Effizienz, Kostenreduzierung und Umsatzgenerierung.',
    'why.cta.title': 'Bereit, den EA-Unterschied zu erleben?',
    'why.cta.subtitle': 'Schließen Sie sich der wachsenden Zahl von Branchenführern an, die EA Solutions für ihre KI-Transformation gewählt haben.',
    
    // EA Method Page
    'method.title': 'Die EA-Methode',
    'method.subtitle': 'Unsere bewährte Methodik stellt sicher, dass Ihre KI-Transformation nahtlos, strategisch und nachhaltig ist.',
    'method.phases.title': 'Vier Stufen zur KI-Exzellenz',
    'method.phases.subtitle': 'Unser umfassender Ansatz stellt sicher, dass jeder Aspekt Ihrer KI-Implementierung sorgfältig geplant, fachmännisch ausgeführt und kontinuierlich für maximale Wirkung optimiert wird.',
    'method.phase1.title': 'Tiefgreifende Analyse & Entdeckung',
    'method.phase1.desc': 'Wir arbeiten mit Ihrem Team zusammen, um jeden Prozess zu kartieren, Engpässe zu identifizieren und Ihre ultimativen Ziele zu verstehen.',
    'method.phase2.title': 'Architektonisches Design',
    'method.phase2.desc': 'Wir entwerfen eine maßgeschneiderte KI-Blaupause für Ihr Unternehmen und wählen die optimale Technologiekombination aus.',
    'method.phase3.title': 'Nahtlose Implementierung',
    'method.phase3.desc': 'Unsere Elite-Ingenieure bauen und implementieren Ihre KI-Infrastruktur mit Präzision und minimaler Störung.',
    'method.phase4.title': 'Evolution & Verbesserung',
    'method.phase4.desc': 'Ihr KI-Verstand ist eine lebende Entität. Wir bieten kontinuierliche Optimierung und Verbesserung.',
    'method.results.title': 'Bewährte Ergebnisse',
    'method.results.subtitle': 'Unsere Methodik liefert konsistent messbare Ergebnisse in allen Branchen.',
    'method.cta.title': 'Bereit, die EA-Methode zu erleben?',
    'method.cta.subtitle': 'Schließen Sie sich Branchenführern an, die ihre Abläufe mit unserer bewährten Methodik transformiert haben.',
    
    // Contact Page
    'contact.title': 'Lassen Sie uns bauen.',
    'contact.subtitle': 'Bereit, das Gespräch zu beginnen? Kontaktieren Sie uns und lassen Sie uns erkunden, wie EA Solutions die nächste Evolution Ihres Unternehmens gestalten kann.',
    'contact.email': 'E-Mail an uns',
    'contact.location': 'Unser Hauptsitz',
    'contact.form.title': 'Kontakt aufnehmen',
    'contact.form.subtitle': 'Haben Sie eine Frage oder sind Sie bereit, Ihre KI-Transformation zu starten? Wir würden gerne von Ihnen hören.',
    'contact.options.title': 'Bevorzugen Sie einen anderen Ansatz?',
    'contact.options.subtitle': 'Wählen Sie die Option, die am besten für Sie funktioniert.',
    'contact.options.call.title': 'Strategiegespräch buchen',
    'contact.options.call.desc': 'Vereinbaren Sie eine personalisierte Beratung, um Ihre KI-Transformationsziele zu besprechen.',
    'contact.options.email.title': 'Direkt per E-Mail',
    'contact.options.email.desc': 'Senden Sie uns eine E-Mail und wir melden uns innerhalb von 24 Stunden bei Ihnen.',
    'contact.options.email.cta': 'E-Mail senden',
    'contact.options.chat.title': 'Live-Chat',
    'contact.options.chat.desc': 'Starten Sie jetzt ein Live-Chat-Gespräch mit unseren KI-Spezialisten.',
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