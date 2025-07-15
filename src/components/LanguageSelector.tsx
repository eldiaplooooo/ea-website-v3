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
    
    // Home page sections
    'home.mind.title': 'MIND – Universal AI Solution',
    'home.mind.tagline': 'One brain, infinite workflows.',
    'home.mind.description': 'One intelligent system that adapts to every industry, every workflow, every challenge. MIND transforms how businesses think, learn, and grow.',
    'home.mind.price': 'Starting from',
    'home.mind.satisfaction': 'Client satisfaction',
    'home.mind.cta': 'Explore MIND',
    'home.mind.features.fast': 'Fast Deploy',
    'home.mind.features.secure': 'Secure',
    'home.mind.features.universal': 'Universal',
    'home.mind.features.precise': 'Precise',
    
    // AI-Powered Websites & Apps
    'home.websites.title': 'AI-Powered Websites & Apps',
    'home.websites.tagline': 'Websites that think; apps that anticipate.',
    'home.websites.description': 'We build intelligent websites and applications with AI booking systems, chatbots, and automation. 40-60% cost savings compared to big companies.',
    'home.websites.featured.title': 'Klavierschule Glenn Miller',
    'home.websites.featured.subtitle': 'AI-Integrated Piano School Platform',
    'home.websites.featured.description': 'Complete website with AI-powered booking system, intelligent schedule creator, and automated student management. Features smart lesson planning and personalized learning paths.',
    'home.websites.featured.visit': 'Visit Website',
    'home.websites.featured.savings': '40-60% cost savings vs big companies',
    'home.websites.services.cta': 'View All Services & Pricing',
    'home.websites.services.development.title': 'Smart Development',
    'home.websites.services.development.tagline': 'Code once, let AI cut the cost in half.',
    'home.websites.services.development.description': 'AI-assisted development process that reduces costs while maintaining enterprise-grade quality.',
    'home.websites.services.chatbots.title': 'AI Chatbots',
    'home.websites.services.chatbots.tagline': 'Customer service that never sleeps (and never says, \'Please hold\').',
    'home.websites.services.chatbots.description': 'Intelligent chatbots that handle customer service, bookings, and support automatically.',
    'home.websites.services.booking.title': 'Booking Systems',
    'home.websites.services.booking.tagline': 'Your calendar, already handled.',
    'home.websites.services.booking.description': 'Smart booking and scheduling systems with AI optimization and automation.',
    
    // Smart Home Solutions
    'home.smarthome.title': 'Smart Home Solutions',
    'home.smarthome.tagline': 'Turn four walls into a living, caring ally.',
    'home.smarthome.description': 'Transform your home with curated smart devices from leading brands. AI-powered bundles with professional installation and ongoing support.',
    'home.smarthome.features.brands': 'Philips Hue, Nest, Ring & more',
    'home.smarthome.features.installation': 'Professional installation included',
    'home.smarthome.features.savings': 'AI-optimized bundles save 30%',
    'home.smarthome.cta': 'Explore Smart Home',
    'home.smarthome.categories.lighting': 'Smart Lighting',
    'home.smarthome.categories.climate': 'Climate Control',
    'home.smarthome.categories.security': 'Security Systems',
    'home.smarthome.categories.automation': 'Home Automation',
    'home.smarthome.bundles.title': 'Smart Home Bundles',
    'home.smarthome.bundles.description': 'Save up to 30% with our curated smart home bundles. Each bundle is designed by our AI to provide the perfect combination of devices for your specific needs and budget.',
    'home.smarthome.bundles.starter': 'Starter Bundle: €449 (Save €70)',
    'home.smarthome.bundles.security': 'Security Bundle: €579 (Save €80)',
    'home.smarthome.bundles.premium': 'Premium Bundle: €999 (Save €300)',
    'home.smarthome.bundles.cta': 'View All Bundles',
    'home.smarthome.bundles.savings': 'Average Savings',
    'home.smarthome.bundles.products': 'Products',
    
    // Industry Solutions
    'home.industries.title': 'Industry Solutions',
    'home.industries.description': 'Specialized AI solutions for your industry\'s unique challenges.',
    'home.industries.hospitality.title': 'Hospitality',
    'home.industries.hospitality.tagline': 'From check-in to check-out, pure wow.',
    'home.industries.hospitality.description': 'Smart reservations, guest services, and operations',
    'home.industries.manufacturing.title': 'Manufacturing',
    'home.industries.manufacturing.tagline': 'Machines that fix themselves before they fail.',
    'home.industries.manufacturing.description': 'Predictive maintenance and quality control',
    'home.industries.healthcare.title': 'Healthcare',
    'home.industries.healthcare.tagline': 'Sharper diagnoses, happier patients.',
    'home.industries.healthcare.description': 'Diagnostic support and patient management',
    'home.industries.viewall': 'View All Industries',
    'home.industries.learnmore': 'Learn More',
    'home.industries.comingsoon': 'Coming Soon',
    
    // Hotel am Kochbrunnen
    'home.hotel.title': 'Hotel am Kochbrunnen',
    'home.hotel.subtitle': 'Complete AI Transformation',
    'home.hotel.description': 'Our flagship hospitality project showcasing 8 integrated AI pillars that transformed traditional operations into an intelligent ecosystem.',
    'home.hotel.savings': 'Monthly savings',
    'home.hotel.uptime': 'Uptime',
    'home.hotel.visit': 'Visit Hotel',
    'home.hotel.pillars': 'View 8 Pillars',
    'home.hotel.features.keyless': 'Keyless Entry',
    'home.hotel.features.concierge': 'AI Concierge',
    'home.hotel.features.climate': 'Smart Climate',
    'home.hotel.features.security': 'Zero Trust Security',
    
    // Client Trust
    'home.trust.title': 'Trusted by 4+ companies in Germany and 1 internationally',
    'home.trust.hotel.name': 'Hotel am Kochbrunnen',
    'home.trust.hotel.ceo': 'Hassan Arour',
    'home.trust.hotel.role': 'General Manager',
    'home.trust.hotel.metric': '40hrs/month saved',
    'home.trust.dental.name': 'Falchi Dental',
    'home.trust.dental.ceo': 'Martin Schneider',
    'home.trust.dental.role': 'Practice Owner',
    'home.trust.dental.metric': '60% faster diagnostics',
    'home.trust.piano.name': 'Klavierschule Glenn Miller',
    'home.trust.piano.ceo': 'Glenn Miller',
    'home.trust.piano.role': 'Founder',
    'home.trust.piano.metric': 'AI booking system',
    
    // MIND Product specific
    'mind.hero.tagline': 'Unleash one intelligence to connect dots humans didn\'t know existed.',
    'mind.architecture.neural': 'Neural Processing Core',
    'mind.architecture.neural.desc': 'Advanced neural networks with quantum-inspired algorithms',
    'mind.architecture.data': 'Intelligent Data Lake',
    'mind.architecture.data.desc': 'Self-organizing data architecture with automatic optimization',
    'mind.architecture.integration': 'Adaptive Integration Layer',
    'mind.architecture.integration.desc': 'Dynamic API management with real-time protocol adaptation',
    'mind.architecture.security': 'Zero-Trust Security',
    'mind.architecture.security.desc': 'Military-grade encryption with behavioral anomaly detection',
    'mind.architecture.analytics': 'Predictive Analytics Engine',
    'mind.architecture.analytics.desc': 'Real-time insights with future trend prediction capabilities',
    'mind.architecture.healing': 'Self-Healing Infrastructure',
    'mind.architecture.healing.desc': 'Autonomous system maintenance and performance optimization',
    
    // MIND Industries
    'mind.industries.hospitality': 'Hospitality',
    'mind.industries.manufacturing': 'Manufacturing',
    'mind.industries.healthcare': 'Healthcare',
    'mind.industries.smart': 'Smart Living',
    'mind.industries.retail': 'Retail',
    'mind.industries.finance': 'Finance',
    
    // MIND Pricing Plans
    'mind.pricing.pilot.features.models': '1 local model',
    'mind.pricing.pilot.features.connector': '1 connector',
    'mind.pricing.pilot.features.support': 'Community support',
    'mind.pricing.pilot.features.analytics': 'Basic analytics',
    'mind.pricing.pilot.features.users': 'Up to 10 users',
    'mind.pricing.growth.features.staff': 'Up to 50 staff',
    'mind.pricing.growth.features.connectors': '3 connectors',
    'mind.pricing.growth.features.optimization': 'Quarterly optimization',
    'mind.pricing.growth.features.support': 'Priority support',
    'mind.pricing.growth.features.analytics': 'Advanced analytics',
    'mind.pricing.growth.features.integrations': 'Custom integrations',
    'mind.pricing.scale.features.staff': 'Up to 250 staff',
    'mind.pricing.scale.features.connectors': 'Unlimited connectors',
    'mind.pricing.scale.features.optimization': 'Weekly optimization',
    'mind.pricing.scale.features.support': 'Priority support',
    'mind.pricing.scale.features.models': 'Advanced AI models',
    'mind.pricing.scale.features.whitelabel': 'White-label options',
    'mind.pricing.scale.features.manager': 'Dedicated success manager',
    'mind.pricing.enterprise.features.cluster': 'On-prem cluster',
    'mind.pricing.enterprise.features.sla': '24/7 SLA',
    'mind.pricing.enterprise.features.audits': 'Compliance audits',
    'mind.pricing.enterprise.features.users': 'Unlimited users',
    'mind.pricing.enterprise.features.development': 'Custom AI development',
    'mind.pricing.enterprise.features.infrastructure': 'Dedicated infrastructure',
    'mind.pricing.enterprise.features.security': 'Enterprise security',
    'mind.pricing.enterprise.features.deployment': 'Global deployment',
    
    // MIND Testimonials
    'mind.testimonials.hotel.quote': 'MIND transformed our entire hospitality operation. 40% efficiency increase and 99.9% uptime. Our guests love the seamless AI-powered experience.',
    'mind.testimonials.hotel.results.efficiency': '40% efficiency increase',
    'mind.testimonials.hotel.results.uptime': '99.9% uptime',
    'mind.testimonials.hotel.results.energy': '25% energy savings',
    'mind.testimonials.dental.quote': 'The diagnostic accuracy improvements are remarkable. MIND revolutionized our patient care with 60% faster diagnostics and 95% accuracy improvement.',
    'mind.testimonials.dental.results.diagnostics': '60% faster diagnostics',
    'mind.testimonials.dental.results.accuracy': '95% accuracy improvement',
    'mind.testimonials.dental.results.admin': '40% admin reduction',
    'mind.testimonials.piano.quote': 'MIND\'s intelligent scheduling and student management system automated our entire operation. 50% time savings and perfect lesson optimization.',
    'mind.testimonials.piano.results.time': '50% time savings',
    'mind.testimonials.piano.results.scheduling': 'Automated scheduling',
    'mind.testimonials.piano.results.optimization': 'Perfect optimization',
    
    // MIND ROI Calculator
    'mind.roi.benefits.efficiency': '65% average efficiency increase',
    'mind.roi.benefits.costs': '45% reduction in operational costs',
    'mind.roi.benefits.uptime': '99.9% system uptime guarantee',
    'mind.roi.benefits.automation': '24/7 intelligent automation',
    
    // Services page
    'services.hero.title': 'AI-Powered Websites & Apps',
    'services.hero.description': 'We build intelligent websites and applications with AI integration, smart automation, and modern design. 40-60% cost savings compared to big companies.',
    'services.hero.costsavings': 'Cost Savings',
    'services.hero.delivery': 'Weeks Delivery',
    'services.hero.integration': 'AI Integration',
    'services.hero.quote': 'Get Free Quote',
    'services.hero.portfolio': 'View Portfolio',
    
    // Method page phases
    'method.phase1.deliverables.mapping': 'Process mapping',
    'method.phase1.deliverables.analysis': 'Bottleneck analysis',
    'method.phase1.deliverables.alignment': 'Goal alignment',
    'method.phase1.deliverables.assessment': 'Technical assessment',
    'method.phase2.deliverables.blueprint': 'AI architecture blueprint',
    'method.phase2.deliverables.selection': 'Technology selection',
    'method.phase2.deliverables.plan': 'Integration plan',
    'method.phase2.deliverables.framework': 'Security framework',
    'method.phase3.deliverables.development': 'System development',
    'method.phase3.deliverables.testing': 'Integration testing',
    'method.phase3.deliverables.training': 'Staff training',
    'method.phase3.deliverables.support': 'Go-live support',
    'method.phase4.deliverables.monitoring': 'Performance monitoring',
    'method.phase4.deliverables.optimization': 'Continuous optimization',
    'method.phase4.deliverables.updates': 'Feature updates',
    'method.phase4.deliverables.guidance': 'Strategic guidance',
    
    // Why EA page
    'why.comparison.title': 'EA Solutions vs. The Competition',
    'why.comparison.subtitle': 'See how we stack up against generic AI solutions and traditional consulting firms.',
    'why.comparison.feature': 'Feature',
    'why.comparison.ea': 'EA Solutions',
    'why.comparison.generic': 'Generic AI Platforms',
    'why.comparison.traditional': 'Traditional Consulting',
    'why.comparison.custom': 'Custom AI Development',
    'why.comparison.custom.ea': '✓ Fully Bespoke',
    'why.comparison.custom.generic': '✗ One-size-fits-all',
    'why.comparison.custom.traditional': '△ Limited Customization',
    'why.comparison.expertise.title': 'Industry Expertise',
    'why.comparison.expertise.ea': '✓ Deep Domain Knowledge',
    'why.comparison.expertise.generic': '✗ Generic Solutions',
    'why.comparison.expertise.traditional': '△ Broad but Shallow',
    'why.comparison.speed': 'Implementation Speed',
    'why.comparison.speed.ea': '✓ Rapid Deployment',
    'why.comparison.speed.generic': '△ Moderate',
    'why.comparison.speed.traditional': '✗ Slow & Bureaucratic',
    'why.comparison.support': 'Ongoing Support',
    'why.comparison.support.ea': '✓ Continuous Evolution',
    'why.comparison.support.generic': '△ Basic Support',
    'why.comparison.support.traditional': '✗ Project-based Only',
    'why.comparison.guarantee': 'Performance Guarantee',
    'why.comparison.guarantee.ea': '✓ Results-based',
    'why.comparison.guarantee.generic': '✗ No Guarantees',
    'why.comparison.guarantee.traditional': '✗ No Guarantees',
    'why.comparison.security': 'Security & Privacy',
    'why.comparison.security.ea': '✓ Enterprise-grade',
    'why.comparison.security.generic': '△ Standard',
    'why.comparison.security.traditional': '△ Varies',
    
    // Booking form options
    'booking.employees.1-10': '1-10',
    'booking.employees.11-50': '11-50',
    'booking.employees.51-200': '51-200',
    'booking.employees.201-1000': '201-1000',
    'booking.employees.1000+': '1000+',
    'booking.industry.hospitality': 'Hospitality & Tourism',
    'booking.industry.manufacturing': 'Manufacturing',
    'booking.industry.healthcare': 'Healthcare',
    'booking.industry.finance': 'Finance & Banking',
    'booking.industry.retail': 'Retail & E-commerce',
    'booking.industry.technology': 'Technology',
    'booking.industry.other': 'Other',
    'booking.budget.under-10k': 'Under €10,000',
    'booking.budget.10k-50k': '€10,000 - €50,000',
    'booking.budget.50k-100k': '€50,000 - €100,000',
    'booking.budget.100k-500k': '€100,000 - €500,000',
    'booking.budget.500k+': '€500,000+',
    'booking.timeline.asap': 'ASAP',
    'booking.timeline.1-3months': '1-3 months',
    'booking.timeline.3-6months': '3-6 months',
    'booking.timeline.6-12months': '6-12 months',
    'booking.timeline.12months+': '12+ months',
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
    
    // Home page sections
    'home.mind.title': 'MIND – Universelle KI-Lösung',
    'home.mind.tagline': 'Ein Gehirn, unendliche Arbeitsabläufe.',
    'home.mind.description': 'Ein intelligentes System, das sich an jede Branche, jeden Arbeitsablauf und jede Herausforderung anpasst. MIND transformiert, wie Unternehmen denken, lernen und wachsen.',
    'home.mind.price': 'Ab',
    'home.mind.satisfaction': 'Kundenzufriedenheit',
    'home.mind.cta': 'MIND erkunden',
    'home.mind.features.fast': 'Schnelle Bereitstellung',
    'home.mind.features.secure': 'Sicher',
    'home.mind.features.universal': 'Universal',
    'home.mind.features.precise': 'Präzise',
    
    // AI-Powered Websites & Apps
    'home.websites.title': 'KI-gestützte Websites & Apps',
    'home.websites.tagline': 'Websites, die denken; Apps, die antizipieren.',
    'home.websites.description': 'Wir entwickeln intelligente Websites und Anwendungen mit KI-Buchungssystemen, Chatbots und Automatisierung. 40-60% Kosteneinsparungen im Vergleich zu großen Unternehmen.',
    'home.websites.featured.title': 'Klavierschule Glenn Miller',
    'home.websites.featured.subtitle': 'KI-integrierte Klavierschul-Plattform',
    'home.websites.featured.description': 'Vollständige Website mit KI-gestütztem Buchungssystem, intelligentem Terminplaner und automatisierter Schülerverwaltung. Bietet intelligente Unterrichtsplanung und personalisierte Lernpfade.',
    'home.websites.featured.visit': 'Website besuchen',
    'home.websites.featured.savings': '40-60% Kosteneinsparungen vs. große Unternehmen',
    'home.websites.services.cta': 'Alle Services & Preise anzeigen',
    'home.websites.services.development.title': 'Intelligente Entwicklung',
    'home.websites.services.development.tagline': 'Einmal programmieren, KI halbiert die Kosten.',
    'home.websites.services.development.description': 'KI-unterstützter Entwicklungsprozess, der Kosten reduziert und gleichzeitig Unternehmensqualität beibehält.',
    'home.websites.services.chatbots.title': 'KI-Chatbots',
    'home.websites.services.chatbots.tagline': 'Kundendienst, der nie schläft (und nie sagt: "Bitte warten").',
    'home.websites.services.chatbots.description': 'Intelligente Chatbots, die Kundendienst, Buchungen und Support automatisch abwickeln.',
    'home.websites.services.booking.title': 'Buchungssysteme',
    'home.websites.services.booking.tagline': 'Ihr Kalender, bereits verwaltet.',
    'home.websites.services.booking.description': 'Intelligente Buchungs- und Terminplanungssysteme mit KI-Optimierung und Automatisierung.',
    
    // Smart Home Solutions
    'home.smarthome.title': 'Smart Home Lösungen',
    'home.smarthome.tagline': 'Verwandeln Sie vier Wände in einen lebenden, fürsorglichen Verbündeten.',
    'home.smarthome.description': 'Verwandeln Sie Ihr Zuhause mit kuratierten Smart-Geräten führender Marken. KI-gestützte Bundles mit professioneller Installation und laufendem Support.',
    'home.smarthome.features.brands': 'Philips Hue, Nest, Ring & mehr',
    'home.smarthome.features.installation': 'Professionelle Installation inklusive',
    'home.smarthome.features.savings': 'KI-optimierte Bundles sparen 30%',
    'home.smarthome.cta': 'Smart Home erkunden',
    'home.smarthome.categories.lighting': 'Intelligente Beleuchtung',
    'home.smarthome.categories.climate': 'Klimakontrolle',
    'home.smarthome.categories.security': 'Sicherheitssysteme',
    'home.smarthome.categories.automation': 'Hausautomation',
    'home.smarthome.bundles.title': 'Smart Home Bundles',
    'home.smarthome.bundles.description': 'Sparen Sie bis zu 30% mit unseren kuratierten Smart Home Bundles. Jedes Bundle wird von unserer KI entwickelt, um die perfekte Kombination von Geräten für Ihre spezifischen Bedürfnisse und Ihr Budget zu bieten.',
    'home.smarthome.bundles.starter': 'Starter Bundle: €449 (Sparen Sie €70)',
    'home.smarthome.bundles.security': 'Sicherheits Bundle: €579 (Sparen Sie €80)',
    'home.smarthome.bundles.premium': 'Premium Bundle: €999 (Sparen Sie €300)',
    'home.smarthome.bundles.cta': 'Alle Bundles anzeigen',
    'home.smarthome.bundles.savings': 'Durchschnittliche Einsparungen',
    'home.smarthome.bundles.products': 'Produkte',
    
    // Industry Solutions
    'home.industries.title': 'Branchenlösungen',
    'home.industries.description': 'Spezialisierte KI-Lösungen für die einzigartigen Herausforderungen Ihrer Branche.',
    'home.industries.hospitality.title': 'Gastgewerbe',
    'home.industries.hospitality.tagline': 'Vom Check-in bis zum Check-out, pures Wow.',
    'home.industries.hospitality.description': 'Intelligente Reservierungen, Gästeservice und Betrieb',
    'home.industries.manufacturing.title': 'Fertigung',
    'home.industries.manufacturing.tagline': 'Maschinen, die sich selbst reparieren, bevor sie ausfallen.',
    'home.industries.manufacturing.description': 'Vorausschauende Wartung und Qualitätskontrolle',
    'home.industries.healthcare.title': 'Gesundheitswesen',
    'home.industries.healthcare.tagline': 'Schärfere Diagnosen, glücklichere Patienten.',
    'home.industries.healthcare.description': 'Diagnoseunterstützung und Patientenverwaltung',
    'home.industries.viewall': 'Alle Branchen anzeigen',
    'home.industries.learnmore': 'Mehr erfahren',
    'home.industries.comingsoon': 'Demnächst',
    
    // Hotel am Kochbrunnen
    'home.hotel.title': 'Hotel am Kochbrunnen',
    'home.hotel.subtitle': 'Vollständige KI-Transformation',
    'home.hotel.description': 'Unser Flaggschiff-Gastgewerbeprojekt zeigt 8 integrierte KI-Säulen, die traditionelle Abläufe in ein intelligentes Ökosystem verwandelt haben.',
    'home.hotel.savings': 'Monatliche Einsparungen',
    'home.hotel.uptime': 'Betriebszeit',
    'home.hotel.visit': 'Hotel besuchen',
    'home.hotel.pillars': '8 Säulen anzeigen',
    'home.hotel.features.keyless': 'Schlüsselloser Zugang',
    'home.hotel.features.concierge': 'KI-Concierge',
    'home.hotel.features.climate': 'Intelligentes Klima',
    'home.hotel.features.security': 'Zero Trust Sicherheit',
    
    // Client Trust
    'home.trust.title': 'Vertraut von 4+ Unternehmen in Deutschland und 1 international',
    'home.trust.hotel.name': 'Hotel am Kochbrunnen',
    'home.trust.hotel.ceo': 'Hassan Arour',
    'home.trust.hotel.role': 'Geschäftsführer',
    'home.trust.hotel.metric': '40 Std./Monat gespart',
    'home.trust.dental.name': 'Falchi Dental',
    'home.trust.dental.ceo': 'Martin Schneider',
    'home.trust.dental.role': 'Praxisinhaber',
    'home.trust.dental.metric': '60% schnellere Diagnostik',
    'home.trust.piano.name': 'Klavierschule Glenn Miller',
    'home.trust.piano.ceo': 'Glenn Miller',
    'home.trust.piano.role': 'Gründer',
    'home.trust.piano.metric': 'KI-Buchungssystem',
    
    // MIND Product specific
    'mind.hero.tagline': 'Entfesseln Sie eine Intelligenz, um Punkte zu verbinden, von denen Menschen nicht wussten, dass sie existieren.',
    'mind.architecture.neural': 'Neuronaler Verarbeitungskern',
    'mind.architecture.neural.desc': 'Fortschrittliche neuronale Netzwerke mit quanteninspirierten Algorithmen',
    'mind.architecture.data': 'Intelligenter Datensee',
    'mind.architecture.data.desc': 'Selbstorganisierende Datenarchitektur mit automatischer Optimierung',
    'mind.architecture.integration': 'Adaptive Integrationsschicht',
    'mind.architecture.integration.desc': 'Dynamisches API-Management mit Echtzeit-Protokollanpassung',
    'mind.architecture.security': 'Zero-Trust-Sicherheit',
    'mind.architecture.security.desc': 'Militärische Verschlüsselung mit Verhaltensanomalien-Erkennung',
    'mind.architecture.analytics': 'Prädiktive Analytics-Engine',
    'mind.architecture.analytics.desc': 'Echtzeit-Einblicke mit Zukunftstrendvorhersage-Fähigkeiten',
    'mind.architecture.healing': 'Selbstheilende Infrastruktur',
    'mind.architecture.healing.desc': 'Autonome Systemwartung und Leistungsoptimierung',
    
    // MIND Industries
    'mind.industries.hospitality': 'Gastgewerbe',
    'mind.industries.manufacturing': 'Fertigung',
    'mind.industries.healthcare': 'Gesundheitswesen',
    'mind.industries.smart': 'Smart Living',
    'mind.industries.retail': 'Einzelhandel',
    'mind.industries.finance': 'Finanzen',
    
    // MIND Pricing Plans
    'mind.pricing.pilot.features.models': '1 lokales Modell',
    'mind.pricing.pilot.features.connector': '1 Konnektor',
    'mind.pricing.pilot.features.support': 'Community-Support',
    'mind.pricing.pilot.features.analytics': 'Basis-Analytics',
    'mind.pricing.pilot.features.users': 'Bis zu 10 Benutzer',
    'mind.pricing.growth.features.staff': 'Bis zu 50 Mitarbeiter',
    'mind.pricing.growth.features.connectors': '3 Konnektoren',
    'mind.pricing.growth.features.optimization': 'Vierteljährliche Optimierung',
    'mind.pricing.growth.features.support': 'Prioritäts-Support',
    'mind.pricing.growth.features.analytics': 'Erweiterte Analytics',
    'mind.pricing.growth.features.integrations': 'Benutzerdefinierte Integrationen',
    'mind.pricing.scale.features.staff': 'Bis zu 250 Mitarbeiter',
    'mind.pricing.scale.features.connectors': 'Unbegrenzte Konnektoren',
    'mind.pricing.scale.features.optimization': 'Wöchentliche Optimierung',
    'mind.pricing.scale.features.support': 'Prioritäts-Support',
    'mind.pricing.scale.features.models': 'Erweiterte KI-Modelle',
    'mind.pricing.scale.features.whitelabel': 'White-Label-Optionen',
    'mind.pricing.scale.features.manager': 'Dedizierter Erfolgsmanager',
    'mind.pricing.enterprise.features.cluster': 'On-Prem-Cluster',
    'mind.pricing.enterprise.features.sla': '24/7 SLA',
    'mind.pricing.enterprise.features.audits': 'Compliance-Audits',
    'mind.pricing.enterprise.features.users': 'Unbegrenzte Benutzer',
    'mind.pricing.enterprise.features.development': 'Benutzerdefinierte KI-Entwicklung',
    'mind.pricing.enterprise.features.infrastructure': 'Dedizierte Infrastruktur',
    'mind.pricing.enterprise.features.security': 'Unternehmenssicherheit',
    'mind.pricing.enterprise.features.deployment': 'Globale Bereitstellung',
    
    // MIND Testimonials
    'mind.testimonials.hotel.quote': 'MIND hat unseren gesamten Gastgewerbebetrieb transformiert. 40% Effizienzsteigerung und 99,9% Betriebszeit. Unsere Gäste lieben die nahtlose KI-gestützte Erfahrung.',
    'mind.testimonials.hotel.results.efficiency': '40% Effizienzsteigerung',
    'mind.testimonials.hotel.results.uptime': '99,9% Betriebszeit',
    'mind.testimonials.hotel.results.energy': '25% Energieeinsparungen',
    'mind.testimonials.dental.quote': 'Die Verbesserungen der Diagnosegenauigkeit sind bemerkenswert. MIND revolutionierte unsere Patientenversorgung mit 60% schnellerer Diagnostik und 95% Genauigkeitsverbesserung.',
    'mind.testimonials.dental.results.diagnostics': '60% schnellere Diagnostik',
    'mind.testimonials.dental.results.accuracy': '95% Genauigkeitsverbesserung',
    'mind.testimonials.dental.results.admin': '40% Verwaltungsreduzierung',
    'mind.testimonials.piano.quote': 'MINDs intelligentes Terminplanungs- und Schülerverwaltungssystem automatisierte unseren gesamten Betrieb. 50% Zeiteinsparungen und perfekte Unterrichtsoptimierung.',
    'mind.testimonials.piano.results.time': '50% Zeiteinsparungen',
    'mind.testimonials.piano.results.scheduling': 'Automatisierte Terminplanung',
    'mind.testimonials.piano.results.optimization': 'Perfekte Optimierung',
    
    // MIND ROI Calculator
    'mind.roi.benefits.efficiency': '65% durchschnittliche Effizienzsteigerung',
    'mind.roi.benefits.costs': '45% Reduzierung der Betriebskosten',
    'mind.roi.benefits.uptime': '99,9% System-Betriebszeit-Garantie',
    'mind.roi.benefits.automation': '24/7 intelligente Automatisierung',
    
    // Services page
    'services.hero.title': 'KI-gestützte Websites & Apps',
    'services.hero.description': 'Wir entwickeln intelligente Websites und Anwendungen mit KI-Integration, intelligenter Automatisierung und modernem Design. 40-60% Kosteneinsparungen im Vergleich zu großen Unternehmen.',
    'services.hero.costsavings': 'Kosteneinsparungen',
    'services.hero.delivery': 'Wochen Lieferung',
    'services.hero.integration': 'KI-Integration',
    'services.hero.quote': 'Kostenloses Angebot erhalten',
    'services.hero.portfolio': 'Portfolio anzeigen',
    
    // Method page phases
    'method.phase1.deliverables.mapping': 'Prozessmapping',
    'method.phase1.deliverables.analysis': 'Engpass-Analyse',
    'method.phase1.deliverables.alignment': 'Zielausrichtung',
    'method.phase1.deliverables.assessment': 'Technische Bewertung',
    'method.phase2.deliverables.blueprint': 'KI-Architektur-Blueprint',
    'method.phase2.deliverables.selection': 'Technologieauswahl',
    'method.phase2.deliverables.plan': 'Integrationsplan',
    'method.phase2.deliverables.framework': 'Sicherheits-Framework',
    'method.phase3.deliverables.development': 'Systementwicklung',
    'method.phase3.deliverables.testing': 'Integrationstests',
    'method.phase3.deliverables.training': 'Mitarbeiterschulung',
    'method.phase3.deliverables.support': 'Go-Live-Support',
    'method.phase4.deliverables.monitoring': 'Leistungsüberwachung',
    'method.phase4.deliverables.optimization': 'Kontinuierliche Optimierung',
    'method.phase4.deliverables.updates': 'Feature-Updates',
    'method.phase4.deliverables.guidance': 'Strategische Beratung',
    
    // Why EA page
    'why.comparison.title': 'EA Solutions vs. Die Konkurrenz',
    'why.comparison.subtitle': 'Sehen Sie, wie wir im Vergleich zu generischen KI-Lösungen und traditionellen Beratungsunternehmen abschneiden.',
    'why.comparison.feature': 'Funktion',
    'why.comparison.ea': 'EA Solutions',
    'why.comparison.generic': 'Generische KI-Plattformen',
    'why.comparison.traditional': 'Traditionelle Beratung',
    'why.comparison.custom': 'Benutzerdefinierte KI-Entwicklung',
    'why.comparison.custom.ea': '✓ Vollständig maßgeschneidert',
    'why.comparison.custom.generic': '✗ Einheitslösung',
    'why.comparison.custom.traditional': '△ Begrenzte Anpassung',
    'why.comparison.expertise.title': 'Branchenexpertise',
    'why.comparison.expertise.ea': '✓ Tiefes Domänenwissen',
    'why.comparison.expertise.generic': '✗ Generische Lösungen',
    'why.comparison.expertise.traditional': '△ Breit aber oberflächlich',
    'why.comparison.speed': 'Implementierungsgeschwindigkeit',
    'why.comparison.speed.ea': '✓ Schnelle Bereitstellung',
    'why.comparison.speed.generic': '△ Moderat',
    'why.comparison.speed.traditional': '✗ Langsam & bürokratisch',
    'why.comparison.support': 'Laufender Support',
    'why.comparison.support.ea': '✓ Kontinuierliche Evolution',
    'why.comparison.support.generic': '△ Basis-Support',
    'why.comparison.support.traditional': '✗ Nur projektbasiert',
    'why.comparison.guarantee': 'Leistungsgarantie',
    'why.comparison.guarantee.ea': '✓ Ergebnisbasiert',
    'why.comparison.guarantee.generic': '✗ Keine Garantien',
    'why.comparison.guarantee.traditional': '✗ Keine Garantien',
    'why.comparison.security': 'Sicherheit & Datenschutz',
    'why.comparison.security.ea': '✓ Unternehmensklasse',
    'why.comparison.security.generic': '△ Standard',
    'why.comparison.security.traditional': '△ Variiert',
    
    // Booking form options
    'booking.employees.1-10': '1-10',
    'booking.employees.11-50': '11-50',
    'booking.employees.51-200': '51-200',
    'booking.employees.201-1000': '201-1000',
    'booking.employees.1000+': '1000+',
    'booking.industry.hospitality': 'Gastgewerbe & Tourismus',
    'booking.industry.manufacturing': 'Fertigung',
    'booking.industry.healthcare': 'Gesundheitswesen',
    'booking.industry.finance': 'Finanzen & Banking',
    'booking.industry.retail': 'Einzelhandel & E-Commerce',
    'booking.industry.technology': 'Technologie',
    'booking.industry.other': 'Andere',
    'booking.budget.under-10k': 'Unter €10.000',
    'booking.budget.10k-50k': '€10.000 - €50.000',
    'booking.budget.50k-100k': '€50.000 - €100.000',
    'booking.budget.100k-500k': '€100.000 - €500.000',
    'booking.budget.500k+': '€500.000+',
    'booking.timeline.asap': 'So schnell wie möglich',
    'booking.timeline.1-3months': '1-3 Monate',
    'booking.timeline.3-6months': '3-6 Monate',
    'booking.timeline.6-12months': '6-12 Monate',
    'booking.timeline.12months+': '12+ Monate',
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