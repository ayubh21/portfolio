
interface ProjectCardProps {
    img: string;
    description: string;
    src: string;
    tool: string;
}

export default function ProjectCard({src}: ProjectCardProps) {
    
    return (
        <div
        >
        <iframe     
        src={src} className={` rounded-2xl opacity-25`} height={300} width={400} seamless scrolling="no">

        </iframe>
        </div>)
}