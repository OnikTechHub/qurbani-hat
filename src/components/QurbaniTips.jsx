import { FaHeartbeat, FaCheckCircle, FaLeaf, FaShieldAlt } from 'react-icons/fa';
import 'animate.css'; 

const QurbaniTips = () => {
    const tips = [
        { id: 1, icon: <FaHeartbeat />, title: "Health Check", desc: "Ensure the animal is active and healthy." },
        { id: 2, icon: <FaCheckCircle />, title: "Age Verify", desc: "Check teeth for age requirements." },
        { id: 3, icon: <FaLeaf />, title: "Organic Feed", desc: "Raised with 100% natural food." },
        { id: 4, icon: <FaShieldAlt />, title: "Safe Delivery", desc: "Specialized and safe transport." }
    ];

    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                
                <h2 className="text-3xl font-black text-gray-800 mb-10 text-center animate__animated animate__fadeInDown">
                    Qurbani Tips
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {tips.map((tip) => (
                        <div 
                            key={tip.id} 
                            className="p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all animate__animated animate__fadeInUp"
                            style={{ animationDelay: `${tip.id * 0.2}s` }}
                        >
                            <div className="text-3xl text-orange-600 mb-4">{tip.icon}</div>
                            <h3 className="text-lg font-bold text-gray-800 mb-2">{tip.title}</h3>
                            <p className="text-gray-500 text-sm">{tip.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QurbaniTips;