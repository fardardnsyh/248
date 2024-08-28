import React from 'react';
import Layout from './Layout';
import Link from 'next/link'
import { useUrl } from 'nextjs-current-url';

const Footer = () => {
    const { href: currentUrl } = useUrl() ?? {};
    const testurl = currentUrl?.split('//')[1].split('/')[0].split('.')[0];
    return (
        <footer className='myfooter w-full border-t-2 border-solid border-dark font-medium text-lg'>
            <div className='py-8 text-xs flex items-center justify-between'>
                <span>{new Date().getFullYear()} &copy; {testurl}</span>
                <span>Best viewed in Chrome, Safari, Firefox and Edge.</span>
            </div>
        </footer>
    )
    
}
export default Footer