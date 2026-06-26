import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between mx-auto overflow-hidden bg-primary">
      
      {/* المحتوى الرئيسي: النص والرسومات الجانبية */}
      <div
        className={`relative w-full max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-4 md:gap-6 pt-[25vh] md:pt-[30vh] z-10`}
      >
        {/* الخط الجانبي والدائرة */}
        <div className='flex flex-col justify-center items-center mt-2 md:mt-3'>
          <div className='w-3 h-3 sm:w-5 sm:h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 h-32 sm:h-48 md:h-64 violet-gradient' />
        </div>

        {/* النصوص التعريفية */}
        <div className="max-w-4xl">
          <h1 className={`${styles.heroHeadText} text-white font-bold leading-tight text-3xl sm:text-4xl md:text-6xl lg:text-7xl`}>
            Hi, I'm <span className='text-[#915EFF]'>Mostafa</span>
          </h1>

          <p className={`${styles.heroSubText} mt-4 text-white-100 font-medium text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed`}>
            Front-End Developer with 2+ years of experience 
            <span className="hidden sm:inline"> </span>
            building high-performance SaaS platforms, dashboards, 
            and e-commerce applications using React.js, Next.js, and TypeScript.
          </p>
        </div>
      </div>

      {/* زر التمرير لأسفل (Scroll Down) */}
      <div className='w-full flex justify-center items-center pb-8 md:pb-12 z-10'>
        <a href='#about' aria-label="Scroll to about section">
          <div className='w-[30px] h-[54px] sm:w-[35px] sm:h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 feedback-blur'>
            <motion.div
              animate={{
                y: [0, 18, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;