import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor's degree in Computer Science"
            subTitle="Lycée de Garçon Sousse"
            result="12.43"
            des="In 2018, I pursued a Bachelor's degree in Computer Science at the Lycée de Garçon Sousse"
          />
        <ResumeCard
        title="Master of Science in Business Intelligence"
        subTitle="University of Sousse (2023)"
        result="GPA: 4.8/5"
        des="In 2023, I pursued a Master's degree in Business Intelligence at the University of Sousse"
        />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Front-End Developer"
            subTitle="Binazone Tn (2020)"
            result="3/4"
            des="Experience 1"
            />
        <ResumeCard
            title="Front-End Developer"
            subTitle="CSI Sécurité International"
            result="1/2"
            des="experience 2"
        />
        </div>
      </div>
    </motion.div>
  );
}

export default Education