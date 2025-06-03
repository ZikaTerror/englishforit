import { motion } from 'framer-motion';

const terms = [
  { icon: '🧠', term: 'CPU', description: 'Central Processing Unit - the brain of the computer that performs instructions.' },
  { icon: '📚', term: 'RAM', description: 'Random Access Memory - temporary memory that stores active processes and data.' },
  { icon: '💾', term: 'Hard Drive', description: 'Long-term storage where files and programs are saved.' },
  { icon: '🖥️', term: 'Monitor', description: 'Displays visual output from the computer.' },
  { icon: '⌨️', term: 'Keyboard', description: 'Input device used for typing text and commands.' },
  { icon: '🖱️', term: 'Mouse', description: 'Input device used to point, click, and interact with elements.' },
  { icon: '🌐', term: 'Internet', description: 'A global network that connects computers and devices.' },
  { icon: '🛡️', term: 'Firewall', description: 'Security system that monitors and controls incoming and outgoing network traffic.' },
  { icon: '🔒', term: 'Encryption', description: 'Process of converting data into a secure format to protect it.' },
  { icon: '🧰', term: 'Software', description: 'Programs and operating systems used by a computer.' },
  { icon: '⚙️', term: 'Hardware', description: 'The physical components of a computer system.' },
  { icon: '📁', term: 'File', description: 'A container in a computer system for storing data.' },
  { icon: '🖧', term: 'Router', description: 'Device that routes data from a local network to other networks.' },
  { icon: '📡', term: 'Wi-Fi', description: 'Wireless networking technology for internet access.' },
  { icon: '🧪', term: 'Beta', description: 'A pre-release version of software for testing purposes.' },
  { icon: '🧱', term: 'Firewall', description: 'Software or hardware that blocks unauthorized access to a network.' },
  { icon: '📦', term: 'Package', description: 'A bundle of software or a software component.' },
  { icon: '🪟', term: 'Operating System', description: 'Software that manages hardware and software resources.' },
  { icon: '🧮', term: 'Algorithm', description: 'A set of rules or steps for solving a problem or completing a task.' },
  { icon: '📊', term: 'Database', description: 'A structured set of data held in a computer.' },
  { icon: '🔌', term: 'Port', description: 'A physical or virtual point where data enters or leaves a system.' },
];

export default function Glossary() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-100 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-indigo-800"
        >
          Glossary of IT Terms
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Explore 20+ essential terms in information technology.
        </motion.p>
      </div>

      <motion.div 
        className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden" 
        animate="visible" 
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {terms.map((item, idx) => (
          <motion.div 
            key={idx} 
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition hover:scale-[1.02]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <div className="text-5xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">{item.term}</h3>
            <p className="mt-2 text-gray-600 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
