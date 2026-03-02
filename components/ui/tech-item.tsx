import { IconType } from 'react-icons';
import { motion } from 'motion/react';

// Tech Stack Cards within the first bento grid cell
const TechItem = ({
  id,
  title,
  icon,
}: {
  id: number;
  title: string;
  icon: IconType;
}) => {
  const Icon = icon;

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.05 }}
      className={`flex flex-col items-center justify-center md:aspect-square gap-3 md:p-4 md:w-33 md:h-33 w-20 h-20
      rounded-xl bg-white/5 border border-white/10 hover:shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-shadow`}
    >
      <Icon className="md:text-4xl text-2xl md:mb-2" />
      <h3 className="text-sm md:text-lg text-gray-300 font-semibold">
        {title}
      </h3>
    </motion.div>
  );
};

export default TechItem;
