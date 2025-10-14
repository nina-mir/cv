import { GitHubLogoIcon, GlobeIcon, FileTextIcon } from "@radix-ui/react-icons"
import Link from 'next/link'


interface ProjectProps {
    title: string;
    date: string;
    githubUrl: string;
    liveUrl?: string;
    reportUrl?: string;
    description: string;
}

export default function Project({
    title,
    date,
    githubUrl,
    liveUrl,
    reportUrl,
    description
}: ProjectProps) {
    return (
        <div className="mb-2 py-2 px-2">

            <div className="flex flex-col md:flex-row">
                <h2 className="font-semibold">{title}</h2>
                <div className="flex flex-row items-center justify-between md:gap-3">
                    <span>({date})</span>
                    <div className=" flex gap-3 mr-3">
                        <Link href={githubUrl}><GitHubLogoIcon className="w-5 h-5" /></Link>
                        {liveUrl && <Link href={liveUrl}><GlobeIcon className="w-5 h-5" /></Link>}
                        {reportUrl && <Link href={reportUrl}><FileTextIcon className="w-5 h-5" /></Link>}
                    </div>


                </div>
            </div>
            <p>{description}</p>
        </div>
    )
}