import Image from 'next/image';
import Link from "next/link";
import Layout from '@/components/Layout';
import {DownloadSvg} from '../components/Icons';
import profilePic from "../../public/kj_80.webp";
import AnimatedText from '@/components/AnimatedText'
import styles from 'src/styles/Home.module.css';
import '../app/globals.css';

export default function Home() {
  return (
    <div className='{styles.container}'>
      <main className='flex items-center text-dark w-full min-h-screen xl:p-24 '>
        <Layout >  
          <div className="flex items-center text-dark w-full min-h-screen">
            <div className='w-1/2'>
              <Image src={profilePic} alt="Kaijeng" className='w-full h-auto br-5'
              priority sizes="(max-width: 768px) 100vw
                              (max-width: 1200px) 50vw
                              50vw"></Image>
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText text="Turning Ideas into Code" className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl xl:text-6xl' />
              <p>
                As a Software Engineer, I am dedicated to turn ideas into creative web applications. Explore my projects and experiences, showcasing my various fields in Software Development.
              </p>
              <div className='flex items-center self-start mt-2'>
                <Link href="/Resume.pdf" target={"blank"}
                className="flex items-center bg-dark text-light p-2.5 px-6
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border border-soldi border-transparent hover:border-dark
                "
                download={false}>Resume <DownloadSvg className='w-6 ml-1'/></Link>
                <Link href="mailto:kaijengre2@gmail.com"
                className="ml-4 text-lg font-medium capitalize text-dark"
                >Email Me</Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
      
      <div className={styles.grid}>
        <Link className={styles.card} href="/about"><h2>About Me</h2>
          <br />
          <p>More about me</p>
        </Link>

        <Link className={styles.card} href="/experiences"><h2>My Experiences</h2>
          <br />
          <p>Check out my Experiences</p>
        </Link>

        <Link className={styles.card} href="/certifications"><h2>My Certifications</h2>
          <br />
          <p>Check out my Certifications here</p>
        </Link>

        <Link className={styles.card} href="/contact"><h2>My Contact</h2>
          <br />
          <p>Contact Me Here</p>
        </Link>

        {/* <Link className={styles.card} href="/sorting"><h2>Sorting</h2>
          <br />
          <p>Go to this page to learn about Sorting Algorithm</p>
        </Link> */}
        <Link className={styles.card} href="https://kaijeng.netlify.app/"><h2>My Netlify App</h2>
          <br />
          <p>Go to this page to Check out my Netlify Portfolio</p>
        </Link>
      </div>
    </div>
  );
}