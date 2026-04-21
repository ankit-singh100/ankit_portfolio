import { ABOUT } from "../data/PortfolioData";

const Skills = ({ darkMode }) => {
    const skill = [
  { name: "Node.js", level: 95, color: "from-emerald-500 to-lime-500" },
  { name: "Express", level: 90, color: "from-sky-500 to-blue-600" },
  { name: "Python", level: 80, color: "from-yellow-400 to-green-500" },
  { name: "FastAPI", level: 80, color: "from-fuchsia-500 to-rose-500" },
  { name: "MongoDB", level: 85, color: "from-green-600 to-emerald-400" },
  { name: "PostgreSQL", level: 80, color: "from-indigo-500 to-violet-600" },
  { name: "Docker (learning)", level: 20, color: "from-cyan-500 to-blue-500" },
  { name: "Git & GitHub", level: 80, color: "from-neutral-600 to-gray-800" },
  { name: "Postman", level: 80, color: "from-orange-500 to-red-500" },
  { name: "AWS (learning)", level: 0, color: "from-amber-400 to-orange-600" },
  { name: "System Design (learning)", level: 40, color: "from-pink-500 to-purple-600" }
     ];
  return (
    <section id="skills"
    style={{
        backgroundColor: darkMode ? "#111027" : "#f9fafb"
    }}
    className='py-14 relative overflow-hidden'>
      <div className='py-14 relative overflow-hidden'>
        <div className='container px-5 py-14 mx-auto'>
            <div className='text-center mb-20'
            data-aos="fade-up"
            >
                <h1 className='sm:text-4xl text-3xl font-bold title-font mb-4'
                style={{
                    color: darkMode ? "while" : "#1f2937"
                }}>My <span
                style={{
                    background: "linear-gradient(to right, #f97316, #f59e0b)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent"
                }}>Skills</span>
                </h1>

                <p
                className='text-lg max-w-2xl mx-auto leading-relaxed'
                style={{
                    color: darkMode ? "#d1d5db" : "#4b5563"
                }}>{ABOUT.focus}</p>
            </div>

            <div className='flex flex-wrap -m-4'
            data-aos="fade-up"
            data-aos-delay="200">
                {skill.map((skill, index) => (
                    <div key={index}
                    className='p-4 lg:w-1/4 md:w-1/2 w-full'
                    data-aos="fade-up"
                    data-aos-delay={`${300 + index * 100}`}>

                        <div style={{
                            background: darkMode 
                            ? "linear-gradient(to bottom right, #1f2937, #111827)"
                            : "linear-gradient(to bottom right, #ffffff, #f3f4f6)",
                            borderColor: darkMode
                            ? "#374151"
                            : "#e5e7eb"
                        }}
                        className='h-full p-6 rounded-2xl border hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2 group hover:shadow-[0_0_30px_rgb(255, 165,0,0,0.15)]'>
                            <div className='flex items-center mb-6'>
                                <h3 className="text-2xl font-bold ml-4"
                                style={{
                                    color: darkMode 
                                    ? "white"
                                    : "#1f2937"
                                }}>{skill.name}</h3>
                            </div>

                            <div className="mb-2 flex justify-between items-center">
                                <span className="font-medium"
                                style={{
                                    color: darkMode 
                                    ? "#d1d5db"
                                    : "#6b7280"
                                }}>Proficiency</span>
                                <span
    style={{
        background: "linear-gradient(to right, #f97316, #f59e0b)",
        backgroundClip: "text",
        backgroundClip: "text",
        color: "transparent"
    }}    className="font-bold">{skill.level}%</span>
                            </div>

                            <div className="w-full rounded-full h-3 overflow-hidden"
                            style={{
                                backgroundColor: darkMode ? "#374151" : "#e5e7eb"}}>
                                    <div className={`h-full rounded-full bg-linear-to-r ${skill.color} transition-all duration-1000 ease-out`}
                                    style={{ width : `${skill.level}%`}}>
                                    </div>
                                </div>

                                <div className={`mt-6 pt-4 border-t ${darkMode ? "border-gray-700" : "border-gray-300"}`}>
                                    <div className="h-1 rounded-full opacity-70 group-hover:w-full transition-all duration-500 w-1/3" style={{
                                        background: "linear-gradient(to right, #f97316, #f59e0b)"
                                    }}></div>

                                </div>
                            </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
