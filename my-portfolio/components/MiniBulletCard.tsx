'use client';

import { motion } from 'framer-motion';

export default function MiniBulletCard({
  text,
  side,
}: {
  text: string;
  side: 'left' | 'right';
}) {
  const isLeft = side === 'left';

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      viewport={{ once: true }}
      className={`relative w-full md:w-[45%] px-4 md:px-6 py-3 border-l-4 border-brand-orange bg-bg text-[color:var(--base)] border border-gray-300 dark:border-gray-700 rounded-md shadow-sm ${
        isLeft ? 'self-start md:ml-0 md:mr-auto' : 'self-end md:ml-auto md:mr-0'
      }`}
    >
      <p className="text-base leading-relaxed font-mono">{text}</p>
    </motion.div>
  );
}