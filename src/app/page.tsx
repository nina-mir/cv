import Image from "next/image";

import Header from '@/components/Header'
import Experience from "@/components/Experience";
import Project from "@/components/Project";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex flex-col sm:items-start">

        <section className="flex flex-col justify-center items-center container mx-auto max-w-4xl ">
          <h2 className="self-start px-2 text-2xl text-gray-400">Experience</h2>
          <Experience
            title="Lecturer"
            employer="San Francisco State University"
            location="San Francisco, CA"
            startingTime="2024"
            endingTime="Present"
            tasks={[
              "Teaching CSC 317 (Intro to Web Software Development) course.",
              "Topics covered include Linux OS, HTML5, CSS, JavaScript, Node.js, Express.js, Relational Databases (SQL), Git, authentication & HTTP protocol."
            ]}
          />
          <Experience
            title="Frontend/UI Developer"
            employer="Transgender.org"
            location="San Francisco, CA"
            startingTime="2023"
            endingTime="2024"
            tasks={[
              "Designed and developed a fully accessible, responsive website serving 100,000 users/month for the Transgender Foundation's advocacy platform.",
              "Built an internal analytics dashboard that visualized user interactions and geographic data, enabling the team to better understand community needs and optimize content strategy.",
              "Implemented WCAG 2.1 AA compliance standards and cross-platform compatibility using React, TypeScript, and modern CSS."
            ]}
          />
        </section>
        <section className="flex flex-col justify-center items-center container mx-auto max-w-4xl ">
          <h2 className="self-start px-2 text-2xl text-gray-400">Select Projects</h2>
          <Project
            title="Visualizing Live Constellation API Data of WindBorne Systems"
            date="Oct 2025"
            githubUrl="https://github.com/nina-mir/windborne-job-application"
            liveUrl="https://nina-mir.github.io/windborne-job-application/"
            description="Built a full-stack application to visualize WindBorne Systems' sounding balloon fleet trajectories over 24-hour intervals. Developed an automated data pipeline using Node.js, SQLite, and cron jobs on a DigitalOcean cloud server to ingest, process, and archive hourly coordinate data, with deployment via Cloudflare Workers for edge caching. Created interactive visualizations (world map and Sankey chart) using d3.js."
          />
          <Project
            title="Taschen-Doelmetcher.Revisited"
            date="Aug 2025"
            githubUrl="https://github.com/nina-mir/taschen-dolmetcher"
            liveUrl="https://nina-mir.github.io/taschen-dolmetcher/"
            description="Created a multilingual educational web app using React, TypeScript, and TailwindCSS and Storybook for UI testing & responsive design. Based on a WWII-era German military phrasebook, the app teaches German/Russian/English phrases while educating users about Holocaust history through historical materials and witnesses’ artworks."
          />
          <Project
            title="Responsive Web Edition of The Treblinka Hell by Vasily Grossman"
            date="March 2025"
            githubUrl="https://github.com/nina-mir/the-treblinka-hell"
            liveUrl="http://nina-mir.github.io/the-treblinka-hell/"
            description="Built a responsive website for Vasily Grossman's 1946 essay The Treblinka Hell using HTML5, CSS, JavaScript, and DOM API. Integrated OpenAI's API to transcribe the original 1946 text, ensuring historical accuracy while delivering enhanced readability and modern UI across all platforms."
          />
          <Project
            title="Circles — Master’s project"
            date="Summer 2023"
            githubUrl="https://github.com/nina-mir/classifier_data_viz"
            reportUrl="https://github.com/nina-mir/classifier_data_viz/blob/main/Classifier_Analyzer_Poster(v1.0).pdf"
            description="Design and implementation of a full-stack web app (Vue.js, node.js) to visualize the outputs of numerous ML classifier models on a classification problem of up to 1000 classes in a single view. The problem of visual clutter was addressed by using a novel concentric layout. A class filtering feature and an interactive tooltip chart makes analyzing the results easier. The app also computes and renders several important ML metrics for each model. "
          />
        </section>


      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
