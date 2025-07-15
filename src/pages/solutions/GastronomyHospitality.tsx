import React from 'react';
import { Utensils, Users, BarChart3, Clock, Shield, Zap } from 'lucide-react';
import { useLanguage } from '../../components/LanguageSelector';

const GastronomyHospitality: React.FC = () => {
  const { translate } = useLanguage();

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Utensils className="h-12 w-12" />
                <h1 className="text-4xl md:text-5xl font-bold">{translate('gastronomy.hero.title')}</h1>
              </div>
              <p className="text-xl text-orange-100 mb-8">
                {translate('gastronomy.hero.subtitle')}
              </p>
              <button 
                onClick={() => {
                  const event = new CustomEvent('openBookingModal');
                  window.dispatchEvent(event);
                }}
                className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-50 transition-colors duration-300"
              >
                {translate('gastronomy.hero.cta')}
              </button>
            </div>
            <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
              <img 
                src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt={translate('gastronomy.hero.title')} 
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{translate('gastronomy.solutions.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {translate('gastronomy.solutions.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: translate('gastronomy.reservation.title'),
                description: translate('gastronomy.reservation.description'),
                features: [
                  translate('gastronomy.reservation.features.pricing'),
                  translate('gastronomy.reservation.features.prediction'),
                  translate('gastronomy.reservation.features.automation'),
                  translate('gastronomy.reservation.features.sync')
                ]
              },
              {
                icon: BarChart3,
                title: translate('gastronomy.analytics.title'),
                description: translate('gastronomy.analytics.description'),
                features: [
                  translate('gastronomy.analytics.features.sentiment'),
                  translate('gastronomy.analytics.features.tracking'),
                  translate('gastronomy.analytics.features.identification'),
                  translate('gastronomy.analytics.features.recommendations')
                ]
              },
              {
                icon: Clock,
                title: translate('gastronomy.service.title'),
                description: translate('gastronomy.service.description'),
                features: [
                  translate('gastronomy.service.features.multilang'),
                  translate('gastronomy.service.features.orders'),
                  translate('gastronomy.service.features.faq'),
                  translate('gastronomy.service.features.complaints')
                ]
              },
              {
                icon: Shield,
                title: translate('gastronomy.inventory.title'),
                description: translate('gastronomy.inventory.description'),
                features: [
                  translate('gastronomy.inventory.features.forecasting'),
                  translate('gastronomy.inventory.features.waste'),
                  translate('gastronomy.inventory.features.supplier'),
                  translate('gastronomy.inventory.features.menu')
                ]
              },
              {
                icon: Zap,
                title: translate('gastronomy.revenue.title'),
                description: translate('gastronomy.revenue.description'),
                features: [
                  translate('gastronomy.revenue.features.pricing'),
                  translate('gastronomy.revenue.features.yield'),
                  translate('gastronomy.revenue.features.upselling'),
                  translate('gastronomy.revenue.features.forecasting')
                ]
              },
              {
                icon: Users,
                title: translate('gastronomy.staff.title'),
                description: translate('gastronomy.staff.description'),
                features: [
                  translate('gastronomy.staff.features.scheduling'),
                  translate('gastronomy.staff.features.automation'),
                  translate('gastronomy.staff.features.performance'),
                  translate('gastronomy.staff.features.training')
                ]
              }
            ].map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
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

      {/* Success Story */}
      <section className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{translate('gastronomy.success.title')}</h2>
                <h3 className="text-2xl font-semibold text-orange-600 mb-4">{translate('gastronomy.success.hotel')}</h3>
                <p className="text-lg text-gray-600 mb-6">
                  "{translate('gastronomy.success.quote')}"
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">40%</div>
                    <div className="text-sm text-gray-600">{translate('gastronomy.success.noshows')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">25%</div>
                    <div className="text-sm text-gray-600">{translate('gastronomy.success.satisfaction')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">30%</div>
                    <div className="text-sm text-gray-600">{translate('gastronomy.success.efficiency')}</div>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                  alt="Luxury hotel lobby" 
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{translate('gastronomy.process.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {translate('gastronomy.process.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: translate('gastronomy.process.audit.title'),
                description: translate('gastronomy.process.audit.description')
              },
              {
                step: '02',
                title: translate('gastronomy.process.design.title'),
                description: translate('gastronomy.process.design.description')
              },
              {
                step: '03',
                title: translate('gastronomy.process.integration.title'),
                description: translate('gastronomy.process.integration.description')
              },
              {
                step: '04',
                title: translate('gastronomy.process.optimization.title'),
                description: translate('gastronomy.process.optimization.description')
              }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">{translate('gastronomy.cta.title')}</h2>
          <p className="text-xl text-orange-100 mb-8">
            {translate('gastronomy.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                const event = new CustomEvent('openBookingModal');
                window.dispatchEvent(event);
              }}
              className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-50 transition-colors duration-300"
            >
              {translate('gastronomy.cta.demo')}
            </button>
            <button 
              onClick={() => {
                const link = document.createElement('a');
                link.href = 'mailto:ali.h@athenex.de?subject=Case Study Request&body=Please send me the hospitality case study.';
                link.click();
              }}
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300"
            >
              {translate('gastronomy.cta.casestudy')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GastronomyHospitality;