import './App.css'
import  JavascriptLogo from "../src/assets/javascript.svg"
import  PythonLogo  from "../src/assets/python.svg"
import  TypescriptLogo  from "../src/assets/typescript-icon.svg"
import  TailwindcssLogo from "../src/assets/tailwindcss-icon.svg"
import  ReactLogo from "../src/assets/react.svg"
import  NextLogo from "../src/assets/nextjs-icon.svg"
import  DockerIcon from "../src/assets/docker-icon.svg"
import  GoLogo from "../src/assets/go.svg"
import MysqlLogo from "../src/assets/mysql.svg"
import DotnetLogo  from "../src/assets/dotnet.svg"
import AWSLogo from "../src/assets/aws.svg"
import PostgresLogo from "../src/assets/postgresql.svg"
import ResumeFile from "../src/assets/ayub-resume.pdf"
import Navbar from './components/navbar'
import WorkExperience from './components/work-experience'
import Projects from './components/projects'
function App() {
  const icons = [JavascriptLogo,PythonLogo,TypescriptLogo,TailwindcssLogo,ReactLogo,NextLogo,DockerIcon,GoLogo,MysqlLogo,DotnetLogo,AWSLogo,PostgresLogo]
  return (
    <>
    <div className=''>
      <Navbar/>
      <div id='home' className='pt-44'>
<h2 className='font-bold text-5xl sm:text-7xl mb-2'>I'm Ayub Hussein</h2>
        {/* <motion.h3
        style={{overflow: "hidden", whiteSpace: "nowrap"}}
        initial={{width: 0}}
        animate={{width: "100%"}}
        transition={{duration: 2, ease: "easeInOut"}}
        >
        <span className='font-bold text-5xl sm:text-7xl'>Full-Stack <span className='text-orange-400'>Developer</span></span>
        </motion.h3> */}
      </div>
      <div className='text-[#8591A0] text-center  justify-center flex my-10'>
        <p className='w-[500px]'>
          I am a passionate developer with a knack for transforming complex challenges into elegant solutions through code.
          Building responsive applications, or optimizing performance, I'm always excited to take on the next development challenge.
        </p>
      </div>
      <section className='flex justify-center gap-4 mb-20'>
          <a href={ResumeFile} download className='download-cv'>
            Download CV
          </a>
          <a href='#projects' className='see-my-work'>
            See my work
          </a>
      </section>
      <section className='mb-20'>
        <h3 className='text-[#c5c5c5] font-semibold mb-6'>TECHNOLOGIES I USE</h3>
        <div className='flex justify-center'>
        <div className='flex justify-center gap-3 flex-wrap max-w-2xl items-center'>
          {icons.map((icon, i) => (
            <div key={i} className='flex items-center justify-center w-14 h-14 rounded-xl border border-[#2a2a2a] bg-[#141414] hover:border-[#444] transition-colors duration-300'>
              <img className='w-7' src={icon}/>
            </div>
          ))}
        </div>
        </div>
      </section>
      <WorkExperience/>
      <Projects/>
<footer className='mt-20 h-16' />
    </div>
    </>
  )
}

export default App
