import React, { useState, useEffect } from 'react';
import { ChevronDown, Droplets, Zap, Shield, Award, Phone, Mail, MapPin, Menu, X, Filter, Layers, Star, CheckCircle, ArrowRight, Twitter, Instagram, Facebook, Linkedin, Youtube  } from 'lucide-react';

// Navigation Component
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Features', 'Specs', 'Reviews', 'Contact'];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/80 backdrop-blur-xl' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
            <div className="w-px h-6 bg-gray-300 mx-4"></div>
            <span className="text-2xl font-light tracking-wide text-gray-900">H2OP</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300 font-light tracking-wide"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-6">
            <button className="text-blue-600 hover:text-blue-700 transition-colors duration-300 font-light tracking-wide flex items-center space-x-2">
              <span>Let's talk</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="w-px h-6 bg-gray-300"></div>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-500 ${
        isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-white/95 backdrop-blur-xl`}>
        <div className="px-8 py-8 space-y-6">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-gray-600 hover:text-gray-900 transition-colors duration-300 font-light tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

// Hero Section Component
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 pt-[80px]">
      {/* Animated Background Orb */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-blue-200/40 via-orange-200/40 to-blue-300/40 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-80px)]">
        {/* Mobile: Vertical Layout, Desktop: Horizontal Layout */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between min-h-[calc(100vh-80px)]">
          
          {/* Content Section */}
          <div className={`flex-1 pt-8 lg:pt-0 lg:pr-8 transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-gray-900 mb-4 leading-tight tracking-tight">
              Pure Water That
              <br />
              <span className="text-blue-600">Feels.</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 mb-4 tracking-wide">
              Experiences That Resonate.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 lg:mb-8 max-w-2xl font-light leading-relaxed">
              We blend innovation, purity, and design to create
              <br className="hidden sm:block" />
              water solutions that your body can connect with.
            </p>
            <button className="bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-light tracking-wide hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 text-sm sm:text-base">
              <span>LET'S TALK</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          {/* Image Section */}
          <div className="flex-shrink-0 mt-8 lg:mt-0 flex justify-center lg:justify-end">
            <img 
              className="w-full max-w-75 sm:max-w-100 h-auto" 
              src={`${import.meta.env.BASE_URL}/images/h2op_blue_red.png`} 
              alt="H2O Product" 
            />
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400" />
      </div>
    </section>
  );
};

// Product Display Component
const ProductDisplay = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  
  const features = [
    {
      name: 'Advanced Filtration',
      title: 'H2OP Gen 1',
      description: 'Revolutionary multi-stage filtration system that removes of contaminants while preserving essential minerals on the go.',
      image: `${import.meta.env.BASE_URL}/images/h2op_blue_internals.png`,
      icon: <Filter className="h-24 w-24 text-white" />,
      tags: ['5-STAGE FILTER', 'MINERAL RETENTION', 'FAST FLOW']
    },
    {
      name: 'Modular System',
      title: 'H2OP Gen 1',
      description: 'Adaptable design that grows with your needs. Stackable modules, adaptable capacities',
      image: `${import.meta.env.BASE_URL}/images/h2op_blue_exploded.png`,
      icon: <Layers className="h-24 w-24 text-white" />,
      tags: ['STACKABLE', 'EXPANDABLE']
    }
  ];

  const currentFeature = features[activeFeature];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Product Visualization */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-orange-100/50 to-blue-200/50 rounded-full blur-3xl"></div>
            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
              <img className="" src={currentFeature.image} alt="" />
            </div>
                        
            {/* Feature Pills - Only center area is clickable */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {features.map((feature, index) => (
                <div
                  key={feature.name}
                  className={`px-4 py-2 rounded-full text-sm font-light tracking-wide transition-all duration-300 ${
                    activeFeature === index
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  } relative overflow-hidden`}
                >
                  {feature.name}
                  {/* Clickable area - only the center portion */}
                  <button
                    onClick={() => setActiveFeature(index)}
                    className="absolute inset-0 flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full"                    
                    aria-label={`Select ${feature.name}`}
                  >
                    <span className="sr-only">{feature.name}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Dynamic Product Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-light text-gray-900 mb-6 tracking-tight">
                {currentFeature.title}
              </h2>
              <p className="text-xl text-gray-600 font-light leading-relaxed">
                {currentFeature.description}
              </p>
            </div>

            {/* Dynamic Tags */}
            <div className="flex flex-wrap gap-4">
              {currentFeature.tags.map((tag, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-gray-100 rounded-full text-sm font-light tracking-wide text-gray-700 transition-all duration-300"
                >
                  {tag}
                </div>
              ))}
            </div>

            {/* Feature Indicator */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Feature {activeFeature + 1} of {features.length}</span>
              <div className="flex gap-1">
                {features.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeFeature === index ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


// Features Section Component
const FeaturesSection = () => {
  const features = [
    {
      icon: <Droplets className="h-8 w-8 text-blue-600" />,
      title: "Advanced Filtration",
      description: "Multi-stage filtration that removes 99.99% of contaminants while preserving essential minerals"
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-500" />,
      title: "Instant Results",
      description: "Revolutionary flow-through technology delivers pure water in seconds, not minutes"
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Military Grade",
      description: "Built to withstand extreme conditions and trusted by professionals worldwide"
    }
  ];

  return (
    <section id="features" className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Design That Feels.
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            Every element crafted to create meaningful connections
            <br />
            between you and pure water.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl hover:bg-white hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-wide">{feature.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Coming Soon Section
const ComingSoonSection = () => {
  const socialIcons = [
    { name: 'twitter', icon: Twitter },
    { name: 'instagram', icon: Instagram },
    { name: 'facebook', icon: Facebook },
    { name: 'linkedin', icon: Linkedin },
    { name: 'youtube', icon: Youtube }
  ];

  return (
    <section id="coming-soon" className="py-32 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background Orb */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-80 h-80 bg-gradient-to-br from-orange-200/60 to-orange-300/60 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
        <h2 className="text-6xl lg:text-8xl font-light text-gray-900 mb-8 tracking-tight">
          Coming soon!
        </h2>
        
        <div className="flex justify-center space-x-6">
          {socialIcons.map(({ name, icon: Icon }) => (
            <button
              key={name}
              className="w-12 h-12 bg-white/80 backdrop-blur-xl rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
            >
              <Icon className="w-5 h-5 text-gray-600 hover:text-gray-800 transition-colors" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

// Specifications Section Component
// const SpecificationsSection = () => {
//   const specs = [
//     { label: "Weight", value: "340g" },
//     { label: "Dimensions", value: "25cm × 8cm × 8cm" },
//     { label: "Filter Life", value: "1000L / 265 gallons" },
//     { label: "Flow Rate", value: "1.7L per minute" },
//     { label: "Removes", value: "99.99% pathogens" },
//     { label: "Material", value: "BPA-free polymer" },
//     { label: "Temperature", value: "-10°C to 60°C" },
//     { label: "Warranty", value: "2 years limited" }
//   ];

//   return (
//     <section id="specs" className="py-32 bg-white">
//       <div className="max-w-7xl mx-auto px-8">
//         <div className="text-center mb-20">
//           <h2 className="text-5xl font-light text-gray-900 mb-6 tracking-tight">
//             Technical Specifications
//           </h2>
//           <p className="text-xl text-gray-600 font-light">
//             Precision engineering for maximum performance
//           </p>
//         </div>

//         <div className="max-w-4xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {specs.map((spec, index) => (
//               <div
//                 key={index}
//                 className="flex justify-between items-center py-6 border-b border-gray-100 hover:bg-gray-50/50 transition-all duration-300 px-6 rounded-lg group"
//               >
//                 <span className="text-gray-700 font-light tracking-wide text-lg">{spec.label}</span>
//                 <span className="text-gray-900 font-light text-lg group-hover:text-blue-600 transition-colors duration-300">{spec.value}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// Reviews Section Component
// const ReviewsSection = () => {
//   const reviews = [
//     {
//       name: "Sarah Johnson",
//       role: "Adventure Photographer",
//       comment: "This purifier changed how I experience remote locations. The water tastes incredible and I feel completely safe."
//     },
//     {
//       name: "Mike Chen",
//       role: "Emergency Response Team",
//       comment: "We've tested dozens of purifiers. This one delivers on every promise. Reliable, fast, and beautifully designed."
//     },
//     {
//       name: "Emma Davis",
//       role: "Sustainable Living Advocate",
//       comment: "Finally, a product that combines environmental responsibility with exceptional performance. Truly revolutionary."
//     }
//   ];

//   return (
//     <section id="reviews" className="py-32 bg-white">
//       <div className="max-w-7xl mx-auto px-8">
//         <div className="text-center mb-20">
//           <h2 className="text-5xl font-light text-gray-900 mb-6 tracking-tight">
//             Experiences That Resonate.
//           </h2>
//           <p className="text-xl text-gray-600 font-light">
//             Real stories from real people
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {reviews.map((review, index) => (
//             <div
//               key={index}
//               className="p-8 rounded-2xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:border-gray-200"
//             >
//               <p className="text-gray-700 mb-8 font-light leading-relaxed text-lg italic">
//                 "{review.comment}"
//               </p>
//               <div className="border-t border-gray-100 pt-6">
//                 <div className="font-light text-gray-900 tracking-wide">{review.name}</div>
//                 <div className="text-gray-500 text-sm font-light tracking-wide">{review.role}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// Contact Section Component
// const ContactSection = () => {
//   return (
//     <section id="contact" className="py-32 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-[calc(50%-8rem)] left-[calc(-8rem)] w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
//         <div className="absolute top-[calc(50%-8rem)] right-[calc(-8rem)] w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"></div>
//       </div>

//       <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
//         <h2 className="text-6xl font-light mb-8 tracking-tight">
//           Ready to Feel Pure?
//         </h2>
//         <p className="text-xl text-gray-300 font-light mb-16 tracking-wide">
//           Join the water purification revolution
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
//           <div className="text-center">
//             <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center mx-auto mb-6">
//               <Phone className="h-8 w-8 text-blue-400" />
//             </div>
//             <h3 className="text-xl font-light mb-3 tracking-wide">Call Us</h3>
//             <p className="text-gray-300 font-light">+91 1234567890</p>
//           </div>
//           <div className="text-center">
//             <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center mx-auto mb-6">
//               <Mail className="h-8 w-8 text-orange-400" />
//             </div>
//             <h3 className="text-xl font-light mb-3 tracking-wide">Email Us</h3>
//             <p className="text-gray-300 font-light">hello@h2op.com</p>
//           </div>
//         </div>

//         <button className="bg-white text-gray-900 px-12 py-4 rounded-full font-light tracking-wide hover:bg-gray-100 transition-all duration-300 text-lg flex items-center space-x-3 mx-auto">
//           <span>LET'S TALK</span>
//           <ArrowRight className="w-5 h-5" />
//         </button>
//         <p className="text-gray-400 mt-8 font-light tracking-wide">
//           Free shipping worldwide • 30-day guarantee • Premium support
//         </p>
//       </div>
//     </section>
//   );
// };

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-6 mb-6 md:mb-0">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            </div>
            <div className="w-px h-6 bg-gray-600"></div>
            <span className="text-xl font-light tracking-wide">H2OP</span>
          </div>
          <div className="flex items-center space-x-6">
            <button className="text-gray-400 hover:text-white transition-colors duration-300">
              <ArrowRight className="w-5 h-5 rotate-180" />
            </button>
            <span className="text-gray-400 font-light tracking-wide">Return to Homepage</span>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 font-light tracking-wide">
            © 2025 H2OP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProductDisplay />
      <FeaturesSection />
      <ComingSoonSection />
      {/* <SpecificationsSection /> */}
      {/* <ReviewsSection /> */}
      {/* <ContactSection /> */}
      <Footer />
    </div>
  );
};

export default App;