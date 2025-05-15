
import Navbar from './Navbar';


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
        image: 'https://media.istockphoto.com/id/1342062117/photo/smart-arab-guy-student-with-backpack-and-books.webp?b=1&s=612x612&w=0&k=20&c=6NQZ9g_IbiPh9S5xSia9lVHSW_yE-KOpIPD7v_u4lA8=',
    },
    {
        company: 'Paypal',
        role: 'Intern + PPO',
        name: 'Epsita Mukherjee',
        branch: 'CSE',
        degree: 'BTech',
        batch: '2021-25',

        logo: 'https://th.bing.com/th/id/OIP.EPCf8M65-MDw6Xct8T29ZQHaHT?rs=1&pid=ImgDetMain',
        image: 'https://media.istockphoto.com/id/1342062117/photo/smart-arab-guy-student-with-backpack-and-books.webp?b=1&s=612x612&w=0&k=20&c=6NQZ9g_IbiPh9S5xSia9lVHSW_yE-KOpIPD7v_u4lA8=',
    },
    {
        company: 'Goldman Sachs',
        role: 'Intern',
        name: 'Atiob Jobayer',
        branch: 'CSE',
        degree: 'BTech',
        batch: '2021-25',

        logo: 'https://th.bing.com/th/id/OIP.20UZG_OJdxb6vdhuboZ1vgHaEK?rs=1&pid=ImgDetMain',
        image: 'https://media.istockphoto.com/id/1342062117/photo/smart-arab-guy-student-with-backpack-and-books.webp?b=1&s=612x612&w=0&k=20&c=6NQZ9g_IbiPh9S5xSia9lVHSW_yE-KOpIPD7v_u4lA8=',
    },
];
import Footer from './Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col md:flex-row items-center justify-center min-h-screen w-full bg-gradient-to-r from-white to-[#f0f2fc]">
                {/* Left Text Section */}
                <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 px-4">
                    <h2 className="text-3xl font-semibold text-black mb-2">
                        Manage & Simplify
                    </h2>
                    <h1 className="text-4xl font-bold text-blue-700 mb-4">
                        College Placement Activities
                    </h1>
                    <p className="text-lg text-gray-700 mb-6">
                        {/* <Typewriter
                            options={{
                                strings: [
                                    'Streamline the placement process with our comprehensive management system.',
                                    'Empowering students to achieve their dream careers.',
                                    'Connecting colleges with top companies effortlessly.',
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 50,
                                deleteSpeed: 30,
                            }} /> */}

                    </p>
                    <button className="bg-blue-700 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-800 transition duration-200">
                        <span className="text-yellow-400">Explore</span> Placement Solutions →
                    </button>
                </div>

                {/* Right Video Embed */}
                <div className="md:w-1/2 w-full max-w-xl rounded-3xl overflow-hidden shadow-xl px-4">
                    <div className="relative pb-[56.25%] h-0">
                        <video
                            className="absolute top-0 left-0 w-full h-full"
                            src={"./home.mp4"}
                            autoPlay
                            loop
                            muted
                            playsInline
                        ></video>
                    </div>
                </div>
            </div>

            {/* Companies Section */}
            <section className="py-16 bg-gray-50 text-center">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
                    Trusted by Leading <span className="text-blue-600 font-bold">Companies</span>
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center items-center px-4 md:px-12">
                    {companies.map((company) => (
                        <img
                            key={company.name}
                            src={company.logo}
                            alt={company.name}
                            className="h-10 transition duration-300"
                        />
                    ))}
                </div>

                <p className="text-gray-500 mt-8 text-lg">+ many more</p>
            </section>

            {/* Selected Students Section */}
            <section className="bg-gray-50 py-16">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Our Placed Students</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-20">
                    {students.map((s, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
                        >
                            <div className="bg-gradient-to-br from-purple-500 to-blue-300 p-4 rounded-t-xl text-white font-semibold text-center text-lg">
                                {s.company} ({s.role})
                            </div>
                            <div className="flex flex-col items-center p-4 space-y-3">
                                <img
                                    src={s.image}
                                    alt={s.name}
                                    className="w-20 h-20 rounded-full border-2 border-blue-500"
                                />
                                <div className="text-sm text-gray-700 text-left space-y-1">
                                    <p><strong>Name:</strong> {s.name}</p>
                                    <p><strong>Branch:</strong> {s.branch}</p>
                                    <p><strong>Degree:</strong> {s.degree}</p>
                                    <p><strong>Batch:</strong> {s.batch}</p>
                                </div>

                                <img src={s.logo} alt={`${s.company} logo`} className="h-8 mt-2" />
                            </div>
                        </div>
                    ))}
                </div>
                {/* See More Button */}
                <div className="text-center mt-10">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-200">
                        See More Students
                    </button>
                </div>
            </section>

            {/* Our Mission Section */}
            <section className="py-16 bg-white text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                    Our Mission
                </h2>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-20">
                    {/* Mission Text */}
                    <p className="text-lg text-gray-700 md:w-1/2">
                        At <span className="font-bold text-blue-600">Placement Management System</span>, our mission is to simplify and enhance the placement process for colleges and students. We aim to connect students with top companies and provide tools to manage the entire placement lifecycle efficiently.
                    </p>
                    {/* Mission Video */}
                    <div className="md:w-1/2">
                        <video
                            className="rounded-lg shadow-lg w-full"
                            src={"./our_mission.mp4"} // Adjust the path based on your folder structure
                            autoPlay
                            loop
                            muted
                            playsInline
                        ></video>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Home;