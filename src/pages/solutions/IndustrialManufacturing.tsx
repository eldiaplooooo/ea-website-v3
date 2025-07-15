import React from 'react';
import { Factory, Cog, TrendingUp, Shield, Zap, Users } from 'lucide-react';
import { useLanguage } from '../../components/LanguageSelector';

const IndustrialManufacturing: React.FC = () => {
  const { translate } = useLanguage();

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-600 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Factory className="h-12 w-12" />
                <h1 className="text-4xl md:text-5xl font-bold">Industrial & Manufacturing</h1>
              </div>
              <p className="text-xl text-gray-300 mb-8">
                Optimize production with predictive maintenance, quality control automation, and intelligent supply chain management.
              </p>
              <button 
                onClick={() => {
                  const event = new CustomEvent('openBookingModal');
                  window.dispatchEvent(event);
                }}
                className="bg-white text-gray-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Book Your Manufacturing AI Demo
              </button>
            </div>
            <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
              <img 
                src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Industrial & Manufacturing" 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced Manufacturing AI Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From predictive maintenance to quality control, our AI solutions optimize every aspect of your manufacturing operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Cog,
                title: 'Predictive Maintenance',
                description: 'AI-powered maintenance scheduling that prevents breakdowns and optimizes equipment performance.',
                features: [
                  'Real-time equipment monitoring',
                  'Failure prediction algorithms',
                  'Automated maintenance scheduling',
                  'Spare parts inventory optimization'
                ]
              },
              {
                icon: Shield,
                title: 'Quality Control Automation',
                description: 'Automated quality inspection systems using computer vision and machine learning.',
                features: [
                  'Defect detection systems',
                  'Quality metrics tracking',
                  'Process optimization',
                  'Real-time quality monitoring'
                ]
              },
              {
                icon: TrendingUp,
                title: 'Production Planning & Optimization',
                description: 'Intelligent production scheduling and resource allocation for maximum efficiency.',
                features: [
                  'Demand-driven planning',
                  'Resource allocation optimization',
                  'Workflow automation',
                  'Capacity utilization analysis'
                ]
              },
              {
                icon: Zap,
                title: 'Supply Chain Intelligence',
                description: 'AI-driven supply chain optimization with demand forecasting and supplier management.',
                features: [
                  'Demand forecasting',
                  'Inventory optimization',
                  'Supplier performance analysis',
                  'Logistics optimization'
                ]
              },
              {
                icon: Users,
                title: 'Workforce Management',
                description: 'Intelligent workforce planning and safety monitoring for optimal productivity.',
                features: [
                  'Shift optimization',
                  'Safety monitoring',
                  'Skills gap analysis',
                  'Training recommendations'
                ]
              },
              {
                icon: Factory,
                title: 'Energy Management',
                description: 'Smart energy optimization to reduce costs and improve sustainability.',
                features: [
                  'Energy usage optimization',
                  'Peak demand management',
                  'Sustainability tracking',
                  'Energy analytics'
                ]
              }
            ].map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-gray-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="h-6 w-6 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ROI Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Proven Manufacturing Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our manufacturing AI solutions deliver measurable improvements in efficiency, quality, and cost reduction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                metric: '70%',
                description: 'Reduction in unplanned downtime',
                icon: TrendingUp
              },
              {
                metric: '45%',
                description: 'Lower maintenance costs',
                icon: Cog
              },
              {
                metric: '60%',
                description: 'Improvement in quality metrics',
                icon: Shield
              },
              {
                metric: '35%',
                description: 'Overall efficiency increase',
                icon: Factory
              }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg">
                  <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-gray-700" />
                  </div>
                  <div className="text-4xl font-bold text-gray-800 mb-2">{stat.metric}</div>
                  <p className="text-gray-600">{stat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Implementation Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Implementation Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures successful AI integration with minimal disruption to your operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                {
                  phase: 'Phase 1',
                  title: 'Assessment & Planning',
                  description: 'Comprehensive analysis of your manufacturing processes, systems, and optimization opportunities.',
                  duration: '2-3 weeks'
                },
                {
                  phase: 'Phase 2',
                  title: 'Solution Design',
                  description: 'Custom AI architecture designed for your specific manufacturing environment and requirements.',
                  duration: '3-4 weeks'
                }
              ].map((phase, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {phase.phase}
                    </div>
                    <span className="text-sm text-gray-500">{phase.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              {[
                {
                  phase: 'Phase 3',
                  title: 'Implementation & Integration',
                  description: 'Deployment of AI systems with seamless integration into your existing manufacturing infrastructure.',
                  duration: '6-8 weeks'
                },
                {
                  phase: 'Phase 4',
                  title: 'Optimization & Support',
                  description: 'Continuous monitoring, optimization, and support to ensure maximum performance and ROI.',
                  duration: 'Ongoing'
                }
              ].map((phase, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {phase.phase}
                    </div>
                    <span className="text-sm text-gray-500">{phase.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-gray-600 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Optimize Your Manufacturing?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading manufacturers who have transformed their operations with EA Solutions' industrial AI technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                const event = new CustomEvent('openBookingModal');
                window.dispatchEvent(event);
              }}
              className="bg-white text-gray-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Schedule Manufacturing Assessment
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-800 transition-all duration-300">
              Calculate Your ROI
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustrialManufacturing;