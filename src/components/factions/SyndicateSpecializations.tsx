import { Database, Cpu, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Specialization {
  icon: ReactNode;
  title: string;
  description: string;
}

const specializations: Specialization[] = [
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={24}
        height={24}
        viewBox='0 0 32 32'
        className='text-[rgb(var(--foreground-rgb))]'
      >
        <path
          fill='currentColor'
          d='M27 22.14V17a2 2 0 0 0-2-2h-8V9.86a4 4 0 1 0-2 0V15H7a2 2 0 0 0-2 2v5.14a4 4 0 1 0 2 0V17h18v5.14a4 4 0 1 0 2 0M8 26a2 2 0 1 1-2-2a2 2 0 0 1 2 2m6-20a2 2 0 1 1 2 2a2 2 0 0 1-2-2m12 22a2 2 0 1 1 2-2a2 2 0 0 1-2 2'
        />
      </svg>
    ),
    title: 'Digital Warfare',
    description:
      'Specialize in hacking, data manipulation, and electronic warfare. Disable enemy systems, steal information, and control the digital battlefield.',
  },
  {
    icon: <Database className='w-6 h-6 text-[rgb(var(--foreground-rgb))]' />,
    title: 'Cryptocurrency Manipulation',
    description:
      'Master the flow of digital currency, manipulating markets and extracting wealth from financial systems with sophisticated algorithms.',
  },
  {
    icon: <Cpu className='w-6 h-6 text-[rgb(var(--foreground-rgb))]' />,
    title: 'Neural Implants',
    description:
      'Enhance cognitive abilities with advanced neural interfaces that accelerate thought processes and enable direct neural connection to networks.',
  },
  {
    icon: <Zap className='w-6 h-6 text-[rgb(var(--foreground-rgb))]' />,
    title: 'Energy Weapons',
    description:
      'Wield cutting-edge energy-based weaponry that harnesses quantum fluctuations to deliver devastating attacks with minimal physical footprint.',
  },
];

export function SyndicateSpecializations() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className='w-full py-12'
    >
      <div className='w-full max-w-6xl mx-auto px-6 space-y-8 p-6'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='border border-[#0a3653] rounded-xl p-8 bg-[rgb(var(--background-start-rgb))]  '
        >
          <h2 className='text-2xl font-bold text-center mb-8'>
            Syndicate Specializations
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {specializations.map((spec, index) => (
              <div
                key={index}
                className='p-6 rounded-lg 
            border border-[rgba(0,255,255,0.2)] bg-[#0B1B32]'
              >
                <div className='flex flex-col space-y-4'>
                  <div
                    className='w-12 h-12 rounded-full bg-[rgba(0,255,255,0.1)] 
                flex items-center justify-center'
                  >
                    {spec.icon}
                  </div>
                  <h3 className='text-lg font-semibold'>{spec.title}</h3>
                  <p className='text-sm text-[rgb(var(--foreground-rgb))] opacity-70'>
                    {spec.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            className='mt-8 p-6 rounded-lg bg-[#0B1B32]
        border border-[rgba(0,255,255,0.2)]'
          >
            <h3 className='text-lg font-semibold mb-2'>
              Joining the Syndicate
            </h3>
            <p className='text-sm text-[rgb(var(--foreground-rgb))] opacity-70'>
              {` To join the Neon Syndicate, candidates must demonstrate exceptional
          technological aptitude and undergo a rigorous series of digital
          trials. Those who succeed are granted access to the Syndicate's vast
          resources and knowledge base, but are expected to contribute their
          skills to advancing the faction's goals.`}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
