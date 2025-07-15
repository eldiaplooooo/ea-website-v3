import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Smartphone, Zap, Thermometer, Lock, Lightbulb, ArrowRight, ShoppingCart, Star, Package } from 'lucide-react';
import { useLanguage } from '../../components/LanguageSelector';

const SmartLiving: React.FC = () => {
  const { translate } = useLanguage();

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Home className="h-12 w-12" />
                <h1 className="text-4xl md:text-5xl font-bold">{translate('smartliving.hero.title')}</h1>
              </div>
              <p className="text-xl text-blue-100 mb-8">
                {translate('smartliving.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
                  {translate('smartliving.hero.cta')}
                </button>
                <Link
                  to="/solutions/smart-living/products"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  {translate('smartliving.transformation.cta')}
                </Link>
              </div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
              <img 
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Smart home technology" 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Smart Home Products Showcase */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{translate('smartliving.transformation.title')}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              {translate('smartliving.transformation.subtitle')}
            </p>
            <Link
              to="/solutions/smart-living/products"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg"
            >
              <Package className="mr-2 h-5 w-5" />
              {translate('smartliving.transformation.cta')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          {/* Featured Product Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                name: translate('smartliving.categories.lighting'),
                description: 'Philips Hue, LIFX und mehr',
                image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=400',
                products: '50+ Produkte',
                startingPrice: 'Ab €29.99'
              },
              {
                name: translate('smartliving.categories.climate'),
                description: 'Nest, Ecobee, Honeywell',
                image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
                products: '25+ Produkte',
                startingPrice: 'Ab €149.99'
              },
              {
                name: translate('smartliving.categories.security'),
                description: 'Ring, Arlo, SimpliSafe',
                image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
                products: '40+ Produkte',
                startingPrice: 'Ab €99.99'
              },
              {
                name: translate('smartliving.categories.speakers'),
                description: 'Amazon Echo, Google Nest',
                image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
                products: '30+ Produkte',
                startingPrice: 'Ab €49.99'
              }
            ].map((category, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-t-xl overflow-hidden">
                  <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{category.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{category.products}</div>
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-400">From {category.startingPrice}</div>
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">4.8</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bundle Highlights */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">{translate('smartliving.bundles.title')}</h3>
                <p className="text-blue-100 mb-6">
                  {translate('smartliving.bundles.description')}
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                    <span>{translate('smartliving.bundles.starter')}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                    <span>{translate('smartliving.bundles.security')}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                    <span>{translate('smartliving.bundles.premium')}</span>
                  </li>
                </ul>
                <Link
                  to="/solutions/smart-living/products"
                  className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
                >
                  {translate('smartliving.bundles.cta')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="text-center">
                <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
                  <div className="text-4xl font-bold mb-2">30%</div>
                  <div className="text-lg">{translate('smartliving.bundles.savings')}</div>
                  <div className="text-sm text-blue-200 mt-2">bei Bundle-Käufen</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Home Automation Section */}
      <section className="py-32 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
              {translate('smartliving.why.title')}
            </h2>
            <p className="text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light italic">
              {translate('smartliving.why.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🛒',
                title: translate('smartliving.why.errand.title'),
                description: translate('smartliving.why.errand.description'),
                gradient: 'from-green-500 to-emerald-600'
              },
              {
                icon: '🎫',
                title: translate('smartliving.why.bookings.title'),
                description: translate('smartliving.why.bookings.description'),
                gradient: 'from-purple-500 to-violet-600'
              },
              {
                icon: '🌡️',
                title: translate('smartliving.why.climate.title'),
                description: translate('smartliving.why.climate.description'),
                gradient: 'from-blue-500 to-cyan-600'
              },
              {
                icon: '🛡️',
                title: translate('smartliving.why.security.title'),
                description: translate('smartliving.why.security.description'),
                gradient: 'from-red-500 to-orange-600'
              },
              {
                icon: '👥',
                title: translate('smartliving.why.care.title'),
                description: translate('smartliving.why.care.description'),
                gradient: 'from-pink-500 to-rose-600'
              },
              {
                icon: '🎛️',
                title: translate('smartliving.why.control.title'),
                description: translate('smartliving.why.control.description'),
                gradient: 'from-indigo-500 to-purple-600'
              }
            ].map((benefit, index) => (
              <div key={index} className="group bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                <div className={`w-20 h-20 bg-gradient-to-br ${benefit.gradient} rounded-3xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <div className="text-3xl">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {translate('smartliving.why.cta.title')}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                {translate('smartliving.why.cta.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/solutions/smart-living/products"
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg"
                >
                  {translate('smartliving.why.cta.bundles')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
                  {translate('smartliving.why.cta.demo')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Solutions */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{translate('smartliving.solutions.title')}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {translate('smartliving.solutions.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Smartphone,
                title: translate('smartliving.solutions.assistant.title'),
                description: translate('smartliving.solutions.assistant.description'),
                features: [translate('smartliving.solutions.assistant.features.voice'), translate('smartliving.solutions.assistant.features.schedule'), translate('smartliving.solutions.assistant.features.control'), translate('smartliving.solutions.assistant.features.recommendations')]
              },
              {
                icon: Thermometer,
                title: translate('smartliving.solutions.climate.title'),
                description: translate('smartliving.solutions.climate.description'),
                features: [translate('smartliving.solutions.climate.features.temperature'), translate('smartliving.solutions.climate.features.weather'), translate('smartliving.solutions.climate.features.occupancy'), translate('smartliving.solutions.climate.features.energy')]
              },
              {
                icon: Lightbulb,
                title: translate('smartliving.solutions.lighting.title'),
                description: translate('smartliving.solutions.lighting.description'),
                features: [translate('smartliving.solutions.lighting.features.circadian'), translate('smartliving.solutions.lighting.features.scene'), translate('smartliving.solutions.lighting.features.motion'), translate('smartliving.solutions.lighting.features.natural')]
              },
              {
                icon: Lock,
                title: translate('smartliving.solutions.security.title'),
                description: translate('smartliving.solutions.security.description'),
                features: [translate('smartliving.solutions.security.features.facial'), translate('smartliving.solutions.security.features.intrusion'), translate('smartliving.solutions.security.features.notifications'), translate('smartliving.solutions.security.features.monitoring')]
              },
              {
                icon: Zap,
                title: translate('smartliving.solutions.energy.title'),
                description: translate('smartliving.solutions.energy.description'),
                features: [translate('smartliving.solutions.energy.features.optimization'), translate('smartliving.solutions.energy.features.shaving'), translate('smartliving.solutions.energy.features.solar'), translate('smartliving.solutions.energy.features.analytics')]
              },
              {
                icon: Home,
                title: translate('smartliving.solutions.automation.title'),
                description: translate('smartliving.solutions.automation.description'),
                features: [translate('smartliving.solutions.automation.features.centralized'), translate('smartliving.solutions.automation.features.integration'), translate('smartliving.solutions.automation.features.routines'), translate('smartliving.solutions.automation.features.remote')]
              }
            ].map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-blue-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{translate('smartliving.benefits.title')}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {translate('smartliving.benefits.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                metric: '40%',
                description: translate('smartliving.benefits.energy'),
                icon: Zap
              },
              {
                metric: '2 hrs',
                description: translate('smartliving.benefits.time'),
                icon: Smartphone
              },
              {
                metric: '95%',
                description: translate('smartliving.benefits.satisfaction'),
                icon: Home
              },
              {
                metric: '30%',
                description: translate('smartliving.benefits.security'),
                icon: Lock
              }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-8 text-center shadow-lg">
                  <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.metric}</div>
                  <p className="text-gray-600 dark:text-gray-400">{stat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{translate('smartliving.installation.title')}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {translate('smartliving.installation.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: translate('smartliving.installation.assessment.title'),
                description: translate('smartliving.installation.assessment.description'),
                icon: Home
              },
              {
                step: '02',
                title: translate('smartliving.installation.design.title'),
                description: translate('smartliving.installation.design.description'),
                icon: Lightbulb
              },
              {
                step: '03',
                title: translate('smartliving.installation.installation.title'),
                description: translate('smartliving.installation.installation.description'),
                icon: Zap
              },
              {
                step: '04',
                title: translate('smartliving.installation.optimization.title'),
                description: translate('smartliving.installation.optimization.description'),
                icon: Smartphone
              }
            ].map((phase, index) => {
              const IconComponent = phase.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {phase.step}
                  </div>
                  <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{phase.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{phase.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="py-20 bg-gray-900 dark:bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{translate('smartliving.features.title')}</h2>
            <p className="text-xl text-gray-300 dark:text-gray-400 max-w-3xl mx-auto">
              {translate('smartliving.features.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: translate('smartliving.features.predictive.title'),
                description: translate('smartliving.features.predictive.description'),
                features: [translate('smartliving.features.predictive.features.behavioral'), translate('smartliving.features.predictive.features.scheduling'), translate('smartliving.features.predictive.features.adjustments'), translate('smartliving.features.predictive.features.optimization')]
              },
              {
                title: translate('smartliving.features.voice.title'),
                description: translate('smartliving.features.voice.description'),
                features: [translate('smartliving.features.voice.features.multilang'), translate('smartliving.features.voice.features.gesture'), translate('smartliving.features.voice.features.context'), translate('smartliving.features.voice.features.responses')]
              },
              {
                title: translate('smartliving.features.health.title'),
                description: translate('smartliving.features.health.description'),
                features: [translate('smartliving.features.health.features.air'), translate('smartliving.features.health.features.sleep'), translate('smartliving.features.health.features.activity'), translate('smartliving.features.health.features.insights')]
              },
              {
                title: translate('smartliving.features.adaptive.title'),
                description: translate('smartliving.features.adaptive.description'),
                features: [translate('smartliving.features.adaptive.features.baselines'), translate('smartliving.features.adaptive.features.assessment'), translate('smartliving.features.adaptive.features.response'), translate('smartliving.features.adaptive.features.privacy')]
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-800 dark:bg-gray-900 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300 dark:text-gray-400 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300 dark:text-gray-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">{translate('smartliving.cta.title')}</h2>
          <p className="text-xl text-blue-100 mb-8">
            {translate('smartliving.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                const event = new CustomEvent('openBookingModal');
                window.dispatchEvent(event);
              }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
            >
              {translate('smartliving.cta.consultation')}
            </button>
            <Link
              to="/solutions/smart-living/products"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              {translate('smartliving.cta.products')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartLiving;