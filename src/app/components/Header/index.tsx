"use client";
import React from 'react';
import Link from 'next/link';
import Logo from './logo';
import styles from './header.module.css';

export default function Header() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={styles.navbar}>
            <div className="container mx-auto px-4 h-full">
                <div className="flex justify-between items-center h-full">
                    <a href="#" onClick={() => scrollToSection('hero')}><Logo /></a>
                    
                    <div className={styles.navLinks}>
                        <a href="#" onClick={() => scrollToSection('projects')}>Projects</a>
                        <a href="#" onClick={() => scrollToSection('skills')}>Skills</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
