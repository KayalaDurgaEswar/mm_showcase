import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  { _id: 1, title: 'Modern Kitchen', category: 'Kitchens', images: ['/placeholder-1.jpg'] },
  { _id: 2, title: 'Spacious Wardrobe', category: 'Wardrobes', images: ['/placeholder-2.jpg'] },
  { _id: 3, title: 'Office Partition', category: 'Partitions', images: ['/placeholder-3.jpg'] },
  { _id: 4, title: 'Living Room', category: 'Living', images: ['/placeholder-4.jpg'] },
  { _id: 5, title: 'Minimalist Bedroom', category: 'Bedroom', images: ['/placeholder-5.jpg'] },
];

const categories = [
  { name: 'Modular Kitchens', image: '/category-1.jpg' },
  { name: 'Wardrobes', image: '/category-2.jpg' },
  { name: 'Partitions', image: '/category-3.jpg' },
  { name: 'False Ceilings', image: '/category-4.jpg' },
];

const Home = () => {

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
  };

  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-[80vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{backgroundImage: "url('/banner.jpg')"}}
      >
         <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-6 text-center z-10">
          <motion.h1 
            initial={{y: 20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.2, duration: 0.5}}
            className="text-5xl md:text-7xl font-bold font-display text-white leading-tight mb-4">
            Designing Dreams, Building Reality
          </motion.h1>
          <motion.p 
            initial={{y: 20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.4, duration: 0.5}}
            className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8 font-serif">
            Premium aluminum interiors for modern living. From bespoke kitchens to elegant office partitions, we bring your vision to life with precision and style.
          </motion.p>
          <motion.div 
            initial={{y: 20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.6, duration: 0.5}}
            className="flex justify-center gap-4">
            <Link to="/showroom">
              <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300 flex items-center gap-2">
                Explore Showroom <ArrowRight size={20}/>
              </button>
            </Link>
            <Link to="/projects">
              <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300 border border-secondary">
                View Projects
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

       {/* Our Recent Work Section */}
       <motion.section 
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="py-16 bg-gray-50">
            <div className="container mx-auto px-6">
                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                    <div>
                        <h2 className="text-4xl font-bold font-display text-primary">Our Recent Work</h2>
                        <p className="text-gray-600 mt-2 font-serif">A glimpse into the quality and craftsmanship we bring to every project.</p>
                    </div>
                    <Link to="/projects" className="mt-4 md:mt-0">
                        <button className="bg-teal-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-teal-600 transition-all duration-300 flex items-center gap-2">
                            View Full Portfolio <ArrowRight size={20}/>
                        </button>
                    </Link>
                </div>

                <div className="relative">
                    <div ref={scrollRef} className="flex overflow-x-auto gap-8 pb-4 scroll-smooth scrollbar-hide">
                        {projects.map((project, i) => (
                            <motion.div 
                            key={project._id} 
                            initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}} transition={{delay: i * 0.1}}
                            className="flex-shrink-0 w-[300px] bg-white rounded-lg shadow-lg overflow-hidden group">
                                <Link to={`/projects/${project._id}`} >
                                    <img src={project.images[0]} alt={project.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"/>
                                    <div className="p-5">
                                        <h3 className="text-xl font-bold text-gray-800 font-serif">{project.title}</h3>
                                        <p className="text-gray-500">{project.category}</p>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                    <button onClick={() => scroll('left')} className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white transition-all z-10"><ChevronLeft/></button>
                    <button onClick={() => scroll('right')} className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white transition-all z-10"><ChevronRight/></button>
                </div>
            </div>
      </motion.section>

      {/* Categories Section */}
      <motion.section 
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 font-display text-primary">What We Do</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {categories.map((cat, i) => (
              <motion.div 
                key={cat.name}
                initial={{opacity: 0, scale: 0.9}} whileInView={{opacity: 1, scale: 1}} transition={{delay: i * 0.1}}
                className="relative aspect-[3/4] rounded-lg overflow-hidden group shadow-lg">
                 <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                 <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h3 className="text-white text-xl md:text-2xl font-bold font-display text-center p-2">{cat.name}</h3>
                 </div>
                 <Link to="/showroom" className="absolute inset-0"/>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
       <motion.section 
        variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="py-20 text-center container mx-auto px-6 bg-accent/20 rounded-t-3xl mt-12">
        <h2 className="text-4xl font-bold mb-4 font-display text-primary">Ready to start your project?</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 font-serif">
          Let's create a space that is not only beautiful but also functional. 
          Schedule a free consultation with our design experts today.
        </p>
        <Link to="/book-call">
          <button className="bg-primary text-white px-10 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300 flex items-center gap-2 mx-auto">
            Book a Free Call <ArrowRight size={22}/>
          </button>
        </Link>
      </motion.section>
    </div>
  );
};

export default Home;
