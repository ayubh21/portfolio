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
import ResumeFile from "../src/assets/ayubs_resume.pdf"
import ProjectCard from './components/recent-work-card'
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
      <section   
      className='mb-20 '>
        <h3 className='text-[#c5c5c5] font-semibold mb-6'>MY RECENT WORK</h3>
          <div className='grid justify-center gap-4'>
            <div 
            className=' '>
          <ProjectCard src='https://www.yegmuslimconnect.ca' img='../src/assets/ymc.png' description='' tool='Next.JS'/>
            </div>
          <div className='flex justify-center gap-3'>
           <span className="inline-flex items-center rounded-md bg-black px-2 py-1 text-sm font-medium text-white ring-1 ring--400/30 ring-inset">
           Next.js
            </span> 
           <span className="inline-flex items-center rounded-md bg-black px-2 py-1 text-sm font-medium text-white ring-1 ring--400/30 ring-inset">
           Typescript
            </span> 
           <span className="inline-flex items-center rounded-md bg-black px-2 py-1 text-sm font-medium text-white ring-1 ring--400/30 ring-inset">
            Tailwind 
            </span> 
           <span className="inline-flex items-center rounded-md bg-black px-2 py-1 text-sm font-medium text-white ring-1 ring--400/30 ring-inset">
           AWS S3
            </span> 
           <span className="inline-flex items-center rounded-md bg-black px-2 py-1 text-sm font-medium text-white ring-1 ring--400/30 ring-inset">
           Postgres DB
            </span> 
            </div>
          </div>
      </section>
      <section className='flex flex-col items-center px-4'>
  <div className='flex items-center gap-4 mb-12'>
    <h3 className='text-[#c5c5c5] font-semibold text-lg '>PROJECTS</h3>
  </div> 
  <div className='max-w-4xl w-full space-y-8 text-left'>
    <div className='group bg-gradient-to-br from-[#1E1E1D] to-[#161616] p-8 rounded-lg border border-[#333] hover:border-[#555] transition-all duration-300 hover:shadow-lg hover:shadow-black/20 hover:-translate-y-1'>
      <div className='flex justify-between items-start mb-6'>
        <h4 className='font-semibold text-2xl text-white group-hover:text-orange-500 transition-colors duration-300'>Mindful Scan</h4>   
        <span className='text-[#888] text-sm font-mono bg-[#0a0a0a] px-3 py-1 rounded-full'>JAN 2024</span>
      </div> 
      <p className='text-[#e0e0e0] text-lg leading-relaxed mb-4'>MindfulScan is a GPT-4-powered content moderation tool built with React and Go to identify and flag inappropriate content in real time.</p>
      <div className='flex flex-wrap gap-2'>
        <span className='text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded'>ReactJS</span>
        <span className='text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded'>TypeScript</span>
        <span className='text-xs bg-green-900/30 text-green-300 px-2 py-1 rounded'>Golang</span>
        <span className='text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded'>GPT-4</span>
      </div>
    </div>

    <div className='group bg-gradient-to-br from-[#1E1E1D] to-[#161616] p-8 rounded-lg border border-[#333] hover:border-[#555] transition-all duration-300 hover:shadow-lg hover:shadow-black/20 hover:-translate-y-1'>
      <div className='flex justify-between items-start mb-6'>
        <h4 className='font-semibold text-2xl text-white group-hover:text-orange-500 transition-colors duration-300'>Premier Stays Capstone</h4>   
        <span className='text-[#888] text-sm font-mono bg-[#0a0a0a] px-3 py-1 rounded-full'>JAN - APR 2025</span>
      </div> 
      <p className='text-[#e0e0e0] text-lg leading-relaxed mb-4'>Collaborated with a team of four to revamp a third-party listing service using Next.js, TypeScript, Golang, Google Maps API, and AWS S3 for direct property listings with geolocation and secure image uploads.</p>
      <div className='flex flex-wrap gap-2'>
        <span className='text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded'>Next.js</span>
        <span className='text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded'>TypeScript</span>
        <span className='text-xs bg-green-900/30 text-green-300 px-2 py-1 rounded'>Golang</span>
        <span className='text-xs bg-red-900/30 text-red-300 px-2 py-1 rounded'>Google Maps API</span>
        <span className='text-xs bg-orange-900/30 text-orange-300 px-2 py-1 rounded'>AWS S3</span>
      </div>
    </div>

    <div className='group bg-gradient-to-br from-[#1E1E1D] to-[#161616] p-8 rounded-lg border border-[#333] hover:border-[#555] transition-all duration-300 hover:shadow-lg hover:shadow-black/20 hover:-translate-y-1'>
      <div className='flex justify-between items-start mb-6'>
        <h4 className='font-semibold text-2xl text-white group-hover:text-orange-500 transition-colors duration-300'>ShopSmart</h4>   
        <span className='text-[#888] text-sm font-mono bg-[#0a0a0a] px-3 py-1 rounded-full'>FEB 2025</span>
      </div> 
      <p className='text-[#e0e0e0] text-lg leading-relaxed mb-4'> Full-stack mobile application built in Flutter that compares grocery prices across multiple retailers</p>
      <div className='flex flex-wrap gap-2'>
        <span className='text-xs bg-green-900/30 text-green-300 px-2 py-1 rounded'>Express.js</span>
        <span className='text-xs bg-green-900/30 text-green-300 px-2 py-1 rounded'>Node.js</span>
        <span className='text-xs bg-cyan-900/30 text-cyan-300 px-2 py-1 rounded'>Flutter</span>
        <span className='text-xs bg-cyan-900/30 text-cyan-300 px-2 py-1 rounded'>Dart</span>
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
