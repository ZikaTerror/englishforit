import { DeviceTabletIcon, ComputerDesktopIcon, DevicePhoneMobileIcon } from '@heroicons/react/20/solid'
import { motion } from "framer-motion"

const easing = [0.6, -0.05, 0.01, 0.99];

export default function Home() {
  return (
    <div className="bg-white">

        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                aria-hidden="true"
                className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                >
                <defs>
                    <pattern
                    x="50%"
                    y={-1}
                    id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                    width={200}
                    height={200}
                    patternUnits="userSpaceOnUse"
                    >
                    <path d="M100 200V.5M.5 .5H200" fill="none" />
                    </pattern>
                </defs>
                <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                    <path
                    d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                    strokeWidth={0}
                    />
                </svg>
                <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
                </svg>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <p className="text-base/7 font-semibold text-indigo-600">What are</p>
                            <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                Computers
                            </h1>
                            <p className="mt-6 text-xl/8 text-gray-700">
                                Computers are electronic devices that process data and perform tasks
                                according to instructions given by software programs. They can perform
                                a wide range of operations, from simple calculations to complex
                                simulations.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img
                        alt=""
                        src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                        className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                    />
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
                            <p>
                                Modern computers come in various forms, including desktops, laptops,
                                tablets, and smartphones. They are essential tools in many areas of
                                life, including education, business, science, and entertainment.
                            </p>
                            <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                <li className="flex gap-x-3">
                                <ComputerDesktopIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                                <span>
                                    <strong className="font-semibold text-gray-900">Desktop / Laptop</strong> — These are traditional computers used at home, school, or work. They are powerful and suitable for tasks like writing documents, browsing the web, or programming.
                                </span>
                                </li>
                                <li className="flex gap-x-3">
                                <DeviceTabletIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                                <span>
                                    <strong className="font-semibold text-gray-900">Tablet</strong> — A touch-screen computer, smaller and more portable than a laptop. It’s great for reading, watching videos, or casual browsing.
                                </span>
                                </li>
                                <li className="flex gap-x-3">
                                <DevicePhoneMobileIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                                <span>
                                    <strong className="font-semibold text-gray-900">Smartphone</strong> — A mobile device that fits in your pocket. It works like a mini-computer with access to apps, internet, camera, and more.
                                </span>
                                </li>
                            </ul>
                            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">How do computers work?</h2>
                            <p className="mt-6 text-gray-700">
                                Computers work by following a set of instructions called a program. They take input (like typing on a keyboard or clicking a mouse),
                                process it in the central processing unit (CPU), and then produce output (like showing something on the screen or printing).
                            </p>
                            <p className="mt-4 text-gray-700">
                                Inside a computer, hardware components like the CPU, memory (RAM), and storage (SSD or HDD) work together. The CPU is like the "brain"
                                — it performs calculations and controls tasks. Memory holds data temporarily, while storage keeps files permanently.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <section className="bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="sm:text-center">
                    <h2 className="text-lg font-semibold leading-8 text-indigo-400">Key Element</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">What is the most important part?</p>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Among all components, the CPU stands out. It acts like the brain of the machine, coordinating all tasks and decisions.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col items-center text-center bg-gray-800 p-8 rounded-xl shadow-md hover:scale-105 transition">
                        <img src="https://cdn-icons-png.flaticon.com/512/3062/3062634.png" alt="CPU Icon" className="w-20 h-20 mb-4" />
                        <h3 className="text-xl font-semibold text-white">CPU</h3>
                        <p className="mt-2 text-gray-400">
                        The Central Processing Unit processes all instructions from software and hardware.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center bg-gray-800 p-8 rounded-xl shadow-md hover:scale-105 transition">
                        <img src="https://cdn-icons-png.flaticon.com/512/843/843314.png" alt="Control" className="w-20 h-20 mb-4" />
                        <h3 className="text-xl font-semibold text-white">Control Center</h3>
                        <p className="mt-2 text-gray-400">
                        It decides what tasks to perform and when, managing input/output and memory operations.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center bg-gray-800 p-8 rounded-xl shadow-md hover:scale-105 transition">
                        <img src="https://cdn-icons-png.flaticon.com/512/1792/1792808.png" alt="Decision-making" className="w-20 h-20 mb-4" />
                        <h3 className="text-xl font-semibold text-white">Decision Maker</h3>
                        <p className="mt-2 text-gray-400">
                        All logical and arithmetic operations are handled by the CPU, making it essential.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                >
                    <h2 className="text-base font-semibold leading-7 text-indigo-600">Inside a Computer</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">What are the components?</p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">    
                        A computer is made up of different parts, each with its own job. Here's a look inside.
                    </p>
                </motion.div>

                <div className="mt-16 relative border-l-2 border-indigo-500 pl-6">
                    {[
                    {
                        title: "CPU (Processor)",
                        desc: "The brain of the computer – it executes instructions and manages operations.",
                    },
                    {
                        title: "RAM (Memory)",
                        desc: "Temporary memory that helps the computer run programs quickly.",
                    },
                    {
                        title: "Hard Drive / SSD",
                        desc: "Where all data is stored, including files, applications, and the operating system.",
                    },
                    {
                        title: "Motherboard",
                        desc: "The main board that connects all components and allows them to communicate.",
                    },
                    {
                        title: "Power Supply",
                        desc: "Converts electricity into usable power for the computer’s internal parts.",
                    },
                    {
                        title: "GPU (Graphics Card)",
                        desc: "Renders images and videos. Essential for gaming, design, or 3D work.",
                    },
                    {
                        title: "Cooling System",
                        desc: "Keeps the computer cool to prevent overheating and maintain performance.",
                    },
                    ].map((item, i) => (
                    <motion.div
                        key={i}
                        className="mb-10 ml-6"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2, duration: 0.6 }}
                    >
                        <span className="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 ring-8 ring-white">
                        <svg
                            className="h-5 w-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                        </span>
                        <h3 className="text-lg font-semibold leading-6 text-gray-900">{item.title}</h3>
                        <p className="mt-2 text-base leading-7 text-gray-600">{item.desc}</p>
                    </motion.div>
                    ))}
                </div>
            </div>
        </section>
        
        <footer className="bg-white border-t mt-24">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold text-gray-900 text-center">
                Next: Discover 20+ essential IT terms
                </h2>
                <p className="mt-2 text-lg text-gray-600 text-center">
                Explore our glossary with simple definitions and visual examples.
                </p>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="group relative rounded-xl border border-gray-200 bg-gray-50 p-6 transition hover:shadow-lg hover:bg-white">
                        <img src="https://cdn-icons-png.flaticon.com/512/2721/2721286.png" alt="CPU" className="w-12 h-12 mb-4" />
                        <h3 className="text-lg font-semibold text-gray-800">CPU</h3>
                        <p className="mt-1 text-sm text-gray-600">The brain of the computer that performs calculations and tasks.</p>
                    </div>

                    <div className="group relative rounded-xl border border-gray-200 bg-gray-50 p-6 transition hover:shadow-lg hover:bg-white">
                        <img src="https://cdn-icons-png.flaticon.com/512/10324/10324388.png" alt="RAM" className="w-12 h-12 mb-4" />
                        <h3 className="text-lg font-semibold text-gray-800">RAM</h3>
                        <p className="mt-1 text-sm text-gray-600">Temporary memory that stores active data and programs.</p>
                    </div>

                    <div className="group relative rounded-xl border border-gray-200 bg-gray-50 p-6 transition hover:shadow-lg hover:bg-white">
                        <img src="https://cdn-icons-png.flaticon.com/512/2807/2807830.png" alt="Operating System" className="w-12 h-12 mb-4" />
                        <h3 className="text-lg font-semibold text-gray-800">Operating System</h3>
                        <p className="mt-1 text-sm text-gray-600">Software that manages hardware and provides services to applications.</p>
                    </div>
                </div>

                <div className="mt-12 flex justify-center">
                    <a
                        href="#/glossary"
                        className="inline-block rounded-full bg-indigo-600 px-8 py-3 text-white font-medium hover:bg-indigo-500 transition"
                    >
                        Explore Full Glossary →
                    </a>   
                </div>
            </div>
        </footer>

    </div> 
  )
}