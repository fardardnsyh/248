import styles from './Button.module.css'
import {GithubSvg, LinkedInSvg} from './Icons';
import {motion} from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate} from '@fortawesome/free-solid-svg-icons';

export function HireMeButton() {
  const [isActive, setIsActive] = React.useState(false);

  return (
    
        <div className="w-48 h-auto hidden lg:flex items-center justify-center relative md:w-24">
            <nav className="flex items-center justify-center flex-wrap pt-2 mr-4">
              <motion.a href="/certifications"
                 whileTap={{scale:0.9}}
              className="w-6 mx-3">
              <FontAwesomeIcon icon={faCertificate} className="fa-2rem w-8 mx-3" />
              </motion.a>
            </nav>
            <div>     
              <Link href="/contact" className="translate-x-[50%] translate-y-[-50%] shadow-md border absolute top-[50%] shadow-md border-solid flex items-center justify-center 
                    absolute left-[70%]  bg-dark rounded-full md:w-12 md:h-12 md:text-[10px]">
              Hire Me
              </Link>
            </div>
          
        </div> 
  )
}