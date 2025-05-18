"use client";
import { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';

const companies = [
    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
    { name: 'Goldman Sachs', logo: 'https://th.bing.com/th/id/OIP.20UZG_OJdxb6vdhuboZ1vgHaEK?rs=1&pid=ImgDetMain' },
    { name: 'PayPal', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg' },
    { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
    { name: 'Salesforce', logo: 'https://logospng.org/wp-content/uploads/salesforce.png' },
    { name: 'NetApp', logo: 'https://th.bing.com/th/id/OIP.pE4pBiyJzU-g1iQ244onBAHaDO?rs=1&pid=ImgDetMain' },
    { name: 'Hitachi', logo: 'https://logos-world.net/wp-content/uploads/2020/11/Hitachi-Emblem.png' },
    { name: 'JPMorgan', logo: 'https://th.bing.com/th/id/OIP.tT_4b1wK0rnKnu7ytiJT5AHaEK?rs=1&pid=ImgDetMain' },
    { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
    { name: 'Dell', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg' },
    { name: 'Deloitte', logo: 'https://1000logos.net/wp-content/uploads/2019/08/Deloitte-Logo.png' },
    { name: 'KPMG', logo: 'https://th.bing.com/th/id/OIP.ygXXHoW2Hb5POmJsZ-ki5gHaFb?rs=1&pid=ImgDetMain' },
    { name: 'ISRO', logo: 'https://th.bing.com/th/id/OIP.mlcMNzViid1Tsom3g3BfIwHaEr?rs=1&pid=ImgDetMain' },
    { name: 'Mercedes-Benz', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg' },
    { name: 'EY', logo: 'https://th.bing.com/th/id/OIP.fxTpMQMhOouusSWwfqEPkwHaD4?rs=1&pid=ImgDetMain' },
    { name: 'Airtel', logo: 'https://c8.alamy.com/comp/2M6RX84/airtel-networks-limited-rotated-logo-white-background-b-2M6RX84.jpg' },
];

const students = [
    {
        company: 'Microsoft',
        role: 'Full-Time',
        name: 'Kartik Agarwal',
        branch: 'CSE',
        degree: 'BTech',
        batch: '2021-25',
        logo: 'https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo-2012-present.jpg',
        image: 'https://media.istockphoto.com/id/1473711199/photo/face-portrait-student-and-man-in-university-ready-for-back-to-school-learning-goals-or.jpg?s=612x612&w=0&k=20&c=Xrwp5ePvm6RjixgAjJo-OAw9oXkLt_HcmT3bdlLZUdw=',
    },
    {
        company: 'Google',
        role: 'Intern',
        name: 'Rojal Sapkota',
        branch: 'CSE',
        degree: 'B.Tech',
        batch: '2021-25',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
        image: 'https://img.freepik.com/premium-photo/student-hd-images-university-collage-student-images_1012565-11131.jpg',
    },
    {
        company: 'Samsung',
        role: 'SDE',
        name: 'Arif Nowfel',
        branch: 'CSE',
        degree: 'BSc (Bangladesh)',
        batch: '2021-25',
        logo: 'https://th.bing.com/th/id/OIP.PdvjSg32Ay2Mh9lUDPzilAHaHa?rs=1&pid=ImgDetMain',
        image: 'https://media.istockphoto.com/id/1342062117/photo/smart-arab-guy-student-with-backpack-and-books.webp?b=1&s=612x612&w=0&k=20&c=6NQZ9g_IbiPh9S5xSia9lVHSW_yE-KOpIPD7v_u4lA8=',
    },
    {
        company: 'Amazon',
        role: 'Intern',
        name: 'Anusha Reddy',
        branch: 'CSE',
        degree: 'BTech',
        batch: '2021-25',
        logo: 'https://cdn.pixabay.com/photo/2021/08/10/16/02/amazon-6536326_1280.png',
        image: 'https://images.unsplash.com/photo-1514355315815-2b64b0216b14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        company: 'Paypal',
        role: 'Intern + PPO',
        name: 'Epsita Mukherjee',
        branch: 'CSE',
        degree: 'BTech',
        batch: '2021-25',
        logo: 'https://th.bing.com/th/id/OIP.EPCf8M65-MDw6Xct8T29ZQHaHT?rs=1&pid=ImgDetMain',
        image: 'https://plus.unsplash.com/premium_photo-1682096181675-12f8293cd31e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        company: 'Goldman Sachs',
        role: 'Intern',
        name: 'Luke Valentine',
        branch: 'CSE',
        degree: 'BTech',
        batch: '2021-25',
        logo: 'https://th.bing.com/th/id/OIP.20UZG_OJdxb6vdhuboZ1vgHaEK?rs=1&pid=ImgDetMain',
        image: 'https://images.unsplash.com/photo-1511551203524-9a24350a5771?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
];

const TypewriterAnimation = () => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const texts = [
        "Streamlining campus recruitment",
        "Connecting students with dream jobs",
        "Simplifying placement workflows",
        "Empowering college career centers"
    ];

    useEffect(() => {
        const currentText = texts[currentIndex];
        const speed = isDeleting ? 30 : 80;

        const timer = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(currentText.substring(0, displayText.length + 1));
                if (displayText === currentText) {
                    setTimeout(() => setIsDeleting(true), 1500);
                }
            } else {
                setDisplayText(currentText.substring(0, displayText.length - 1));
                if (displayText === '') {
                    setIsDeleting(false);
                    setCurrentIndex((prev) => (prev + 1) % texts.length);
                }
            }
        }, speed);

        return () => clearTimeout(timer);
    }, [displayText, currentIndex, isDeleting]);

    return (
        <motion.div
            className="h-16 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <p className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                {displayText}
                <motion.span
                    className="ml-1 text-blue-600"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    |
                </motion.span>
            </p>
        </motion.div>
    );
};

const Home = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <div className="overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
                <motion.div
                    className="absolute inset-0 z-0"
                    style={{ y: yBg }}
                >
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-white/80"></div>
                </motion.div>

                <div className="container mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center justify-center relative z-10">
                    {/* Left Text Section */}
                    <motion.div
                        className="md:w-1/2 text-center md:text-left mb-16 md:mb-0"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h2
                            className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            Manage & Simplify
                        </motion.h2>
                        <motion.h1
                            className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            College Placement Activities
                        </motion.h1>

                        <TypewriterAnimation />

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                        >
                            <motion.button
                                className="relative overflow-hidden group bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="relative z-10 flex items-center">
                                    <span className="text-yellow-300 mr-2">Explore</span> Placement Solutions
                                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </span>
                                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Right Video Embed */}
                    <motion.div
                        className="md:w-1/2 w-full max-w-xl px-4"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            className="relative overflow-hidden rounded-3xl shadow-2xl border-2 border-white/20 bg-white/10 backdrop-blur-sm"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <div className="relative pb-[56.25%]">
                                <video
                                    className="absolute inset-0 w-full h-full object-cover"
                                    src="/home.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Floating animated elements */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-blue-400/20 blur-xl"
                    animate={{
                        y: [0, -20, 0],
                        x: [0, 20, 0]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/3 right-1/3 w-24 h-24 rounded-full bg-purple-400/20 blur-xl"
                    animate={{
                        y: [0, 30, 0],
                        x: [0, -30, 0]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </section>

            {/* Companies Section */}
            <section className="py-20 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <div className="container mx-auto px-6 relative">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Trusted by <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Leading Companies</span>
                    </motion.h2>

                    <div className="relative">
                        {/* Infinite scrolling logos */}
                        <motion.div
                            className="flex gap-12 py-4"
                            animate={{
                                x: ['0%', '-100%'],
                            }}
                            transition={{
                                duration: 40,
                                repeat: Infinity,
                                ease: 'linear'
                            }}
                        >
                            {[...companies, ...companies].map((company, index) => (
                                <motion.div
                                    key={`${company.name}-${index}`}
                                    className="flex-shrink-0 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                                    whileHover={{ scale: 1.1, y: -5 }}
                                >
                                    <img
                                        src={company.logo}
                                        alt={company.name}
                                        className="h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    <motion.p
                        className="text-center mt-12 text-gray-500 text-lg font-medium"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        + many more
                    </motion.p>
                </div>
            </section>

            {/* Selected Students Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('/grid-dark.svg')]"></div>
                <div className="container mx-auto px-6 relative">
                    <motion.h2
                        className="text-3xl md:text-5xl font-bold text-center mb-20"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Placed Students</span>
                    </motion.h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence>
                            {students.map((s, index) => (
                                <motion.div
                                    key={index}
                                    className="group relative bg-white rounded-2xl shadow-lg overflow-hidden border border-white/20 hover:shadow-xl transition-all duration-300"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -10 }}
                                >
                                    {/* Glowing border effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"></div>

                                    {/* Header with gradient */}
                                    <div className="relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
                                        <div className="relative z-10 p-6 text-white">
                                            <div className="flex justify-between items-center">
                                                <h3 className="text-xl font-bold">{s.company}</h3>
                                                <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm">{s.role}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Student content */}
                                    <div className="p-6">
                                        <div className="flex flex-col items-center">
                                            {/* Avatar with glow effect */}
                                            <motion.div
                                                className="relative mb-6 -mt-12"
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                <div className="absolute inset-0 bg-blue-400 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                                                <img
                                                    src={s.image}
                                                    alt={s.name}
                                                    className="relative z-10 w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
                                                />
                                            </motion.div>

                                            {/* Student info */}
                                            <div className="w-full space-y-4 text-center">
                                                <h4 className="text-xl font-semibold text-gray-900">{s.name}</h4>

                                                <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                                                    <motion.div
                                                        className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors"
                                                        whileHover={{ scale: 1.03 }}
                                                    >
                                                        <span className="block text-xs text-gray-500">Branch</span>
                                                        {s.branch}
                                                    </motion.div>
                                                    <motion.div
                                                        className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors"
                                                        whileHover={{ scale: 1.03 }}
                                                    >
                                                        <span className="block text-xs text-gray-500">Degree</span>
                                                        {s.degree}
                                                    </motion.div>
                                                    <motion.div
                                                        className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors"
                                                        whileHover={{ scale: 1.03 }}
                                                    >
                                                        <span className="block text-xs text-gray-500">Batch</span>
                                                        {s.batch}
                                                    </motion.div>
                                                    <motion.div
                                                        className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors"
                                                        whileHover={{ scale: 1.03 }}
                                                    >
                                                        <span className="block text-xs text-gray-500">Status</span>
                                                        <span className="text-green-600 font-medium">Placed</span>
                                                    </motion.div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Company logo footer */}
                                    <div className="px-6 pb-6 flex justify-center">
                                        <motion.div
                                            className="bg-white p-2 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all"
                                            whileHover={{ y: -5 }}
                                        >
                                            <img
                                                src={s.logo}
                                                alt={`${s.company} logo`}
                                                className="h-8 object-contain"
                                            />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* See More Button */}
                    <motion.div
                        className="text-center mt-16"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <motion.button
                            className="relative overflow-hidden group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="relative z-10 flex items-center">
                                See More Students
                                <svg className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </span>
                            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* Our Mission Section */}
            <section className="py-20 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <div className="container mx-auto px-6 relative">
                    <motion.h2
                        className="text-3xl md:text-5xl font-bold text-center mb-20"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Mission</span>
                    </motion.h2>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                        {/* Mission Text */}
                        <motion.div
                            className="md:w-1/2"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                                At <span className="font-bold text-blue-600">Placement Management System</span>, our mission is to simplify and enhance the placement process for colleges and students. We aim to connect students with top companies and provide tools to manage the entire placement lifecycle efficiently.
                            </p>
                            <motion.div
                                className="mt-8"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <motion.button
                                    className="px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Learn More About Us
                                </motion.button>
                            </motion.div>
                        </motion.div>

                        {/* Mission Video */}
                        <motion.div
                            className="md:w-1/2"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <motion.div
                                className="relative overflow-hidden rounded-3xl shadow-2xl border-2 border-white/20 bg-white/10 backdrop-blur-sm"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <div className="relative pb-[56.25%]">
                                    <video
                                        className="absolute inset-0 w-full h-full object-cover"
                                        src="./our_mission.mp4"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Home;