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
import WorkExperience from './components/work-experience'
import {motion} from "framer-motion"
import LinkedinInIcon from "../src/assets/linkedin-svgrepo-com.svg"
import GithubIcon from "../src/assets/github.svg"
import X from "../src/assets/x.svg"




function App() {
  const icons = [JavascriptLogo,PythonLogo,TypescriptLogo,TailwindcssLogo,ReactLogo,NextLogo,DockerIcon,GoLogo,MysqlLogo,DotnetLogo,AWSLogo,PostgresLogo]
  return (
    <>
    <div className=''>
      {/* <Navbar/> */}
      <div className='mt-60'>
        <h2 className='font-bold text-7xl mb-20'>Hi, I'm Ayub 👋</h2>
        <motion.h3 
        style={{overflow: "hidden", whiteSpace: "nowrap"}}
        initial={{width: 0}}
        animate={{width: "100%"}}
        transition={{duration: 2, ease: "easeInOut"}}
        >   
        <span className='font-bold text-7xl'>I build stuff <span className='text-orange-400'> sometimes</span></span>
        </motion.h3>
      </div>
      <div className='text-[#8591A0] text-center  justify-center flex my-10'>
        <p className='w-[500px]'>
          I am a passionate full-stack developer with a knack for transforming complex challenges into elegant solutions through code.
          Building responsive applications, or optimizing performance, I'm always excited to take on the next development challenge.
        </p>
      </div>
      <section className='flex justify-center gap-4 mb-10'>
          {/* <button className='get-in-touch'>
              Get In Touch
          </button> */}
          
          <button  className='download-cv'>
            <a className='text-white' href={ResumeFile} download>
              Download CV
            </a>
          </button>
      </section>
      <section className='mb-20'>  
        <h3 className='text-[#c5c5c5] font-semibold mb-6'>EXPERIENCE WITH</h3>
        <div className='flex justify-center'>
        <div className='flex justify-center gap-6 flex-wrap w-[550px] items-center'>
          {icons.map((icon) => (
            <div className=''>
              <img className='w-16' src={icon}/>
            </div>
          ))}
        </div>
        </div>
      </section>
      <WorkExperience/>
      <section className='flex flex-col items-center px-4 mb-16'>
  <h3 className='text-[#c5c5c5] font-semibold text-lg mb-10'>PROJECTS</h3>
  <div className='max-w-4xl w-full grid sm:grid-cols-2 gap-6 text-left'>
    <div className='group rounded-xl border border-[#2a2a2a] bg-[#141414] p-6 hover:border-[#444] transition-colors duration-300'>
      <div className='flex justify-between items-start gap-3 mb-2'>
        <h4 className='font-semibold text-lg text-white group-hover:text-orange-500 transition-colors duration-300'>Mindful Scan</h4>
        <span className='text-[#888] text-xs font-mono whitespace-nowrap'>JAN 2024</span>
      </div>
      <p className='text-[#a0a0a0] text-sm leading-relaxed mb-3'>GPT-4-powered content moderation tool built with React and Go to identify and flag inappropriate content in real time.</p>
      <div className='flex flex-wrap gap-2'>
        <span className='text-xs bg-blue-900/30 text-blue-300 px-2 py-0.5 rounded'>React</span>
        <span className='text-xs bg-blue-900/30 text-blue-300 px-2 py-0.5 rounded'>TypeScript</span>
        <span className='text-xs bg-green-900/30 text-green-300 px-2 py-0.5 rounded'>Golang</span>
        <span className='text-xs bg-purple-900/30 text-purple-300 px-2 py-0.5 rounded'>GPT-4</span>
      </div>
    </div>

    <div className='group rounded-xl border border-[#2a2a2a] bg-[#141414] p-6 hover:border-[#444] transition-colors duration-300'>
      <div className='flex justify-between items-start gap-3 mb-2'>
        <h4 className='font-semibold text-lg text-white group-hover:text-orange-500 transition-colors duration-300'>Premier Stays Capstone</h4>
        <span className='text-[#888] text-xs font-mono whitespace-nowrap'>JAN - APR 2025</span>
      </div>
      <p className='text-[#a0a0a0] text-sm leading-relaxed mb-3'>Revamped a third-party listing service with a team of four, adding direct property listings with geolocation and secure image uploads.</p>
      <div className='flex flex-wrap gap-2'>
        <span className='text-xs bg-gray-700/50 text-gray-300 px-2 py-0.5 rounded'>Next.js</span>
        <span className='text-xs bg-blue-900/30 text-blue-300 px-2 py-0.5 rounded'>TypeScript</span>
        <span className='text-xs bg-green-900/30 text-green-300 px-2 py-0.5 rounded'>Golang</span>
        <span className='text-xs bg-red-900/30 text-red-300 px-2 py-0.5 rounded'>Google Maps API</span>
      </div>
    </div>

    <div className='group rounded-xl border border-[#2a2a2a] bg-[#141414] p-6 hover:border-[#444] transition-colors duration-300'>
      <div className='flex justify-between items-start gap-3 mb-2'>
        <h4 className='font-semibold text-lg text-white group-hover:text-orange-500 transition-colors duration-300'>Edmonton Muslim Directory</h4>
        <span className='text-[#888] text-xs font-mono whitespace-nowrap'>APR 2025 - PRESENT</span>
      </div>
      <p className='text-[#a0a0a0] text-sm leading-relaxed mb-3'>Business directory connecting the Edmonton Muslim community with local Muslim-owned businesses, with map-based search and an admin dashboard for listings.</p>
      <div className='flex flex-wrap gap-2'>
        <span className='text-xs bg-gray-700/50 text-gray-300 px-2 py-0.5 rounded'>Next.js</span>
        <span className='text-xs bg-blue-900/30 text-blue-300 px-2 py-0.5 rounded'>TypeScript</span>
        <span className='text-xs bg-purple-900/30 text-purple-300 px-2 py-0.5 rounded'>Drizzle ORM</span>
        <span className='text-xs bg-red-900/30 text-red-300 px-2 py-0.5 rounded'>Google Maps API</span>
      </div>
    </div>
  </div>
</section>
<footer className='  mt-20 h-[100px] p-6 text-left flex flex-col gap-2 font-semibold'> 
  <div className='flex gap-4'>
    <a href='https://github.com/ayubh21'>
      <img height={40} width={40} src={GithubIcon}/>
    </a>
    <a href='https://linkedin.com/in/ayubhussein21'>
      <img height={40} width={40} src={LinkedinInIcon}/>
    </a>
    <a href='https://x.com/AyubHus40421689'>
      <img height={40} width={40} src={X}/>
    </a>
  </div>
</footer>
    </div>
    </>
  )
}

export default App
