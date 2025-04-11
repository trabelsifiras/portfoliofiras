import React, { useState, useEffect, useRef } from 'react';
import { cvData } from './data/cv';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import { motion } from 'framer-motion';
import LinksAndProjects from "./components/LinksAndProjects.tsx";
import Navigation from "./components/Navigation.tsx";

function App() {
    const [language, setLanguage] = useState('en');
    const [error, setError] = useState<string | null>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const data = cvData[language];

    const linksAndProjects = [
        {
            title: 'Upwork – Google Maps Places API - search review, place name and category',
            description: 'Create code that I can run to create CSV export of results from Google Map Places searches of 1) key words the Place name, 2) keywords in the Reviews and/or 3) Place tags/categories, bounded to a certain area. For instance, I want to search only [Category:rivers OR Placename includes word \'river\'] AND [one or more reviews also contains e.g. keyword = swimming]. Ideally this would display results filtered on a Google Maps, but could possibly by just a Python code which returns a CSV (which I can then import back into maps) or *ideally* can select map area and the input words, and ideally returns the filtered results on the same map .',
            link: 'https://www.upwork.com/jobs/~0110ee9afb613a2edb',
            rating:5
        },
        {
            title: 'Upwork - Scrapping all dentists from CQC website',
            description: 'Extract all dentists and all their underlying information from this site in the UK. https://www.192.com/businesses/search/ All Data needs to be delivered in excel Website URL, name, contact details, financial details, full address, opening hours, number of dentists nearby.',
            link: 'https://www.upwork.com/jobs/~0119135cd157d1bc8d',
            rating:5
        },
        {
            title: 'Upwork - Python script for website scrapping',
            description: 'You will be responsible for developing a script that will siphon off all the content of a page. Then, based on this page, you will need to determine the total number of pages there are, and iterate on the remaining pages. The data obtained will be stored in a csv file.The site has no defence mechanism like Captchas/Cloudflare and does not require Javascript to be run. The use of Selenium is not required for this exercise.',
            link: 'https://www.upwork.com/jobs/~012cc4190dc0eb8b7a',
            rating:5
        }
    ];

    // MATRIX BACKGROUND LOGIC
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const javaSnippets = [
            'public class HelloWorld {',
            '  public static void main(String[] args) {',
            '    System.out.println("Hello, World!");',
            '  }',
            '}',
            '[INFO] Building MyApp 1.0-SNAPSHOT',
            '[INFO] --- maven-compiler-plugin ---',
            '[INFO] Compilation successful',
            'Starting Spring Boot Application...',
            'Tomcat started on port(s): 8080',
            'Application started successfully'
        ];

        const fontSize = 16;
        const columns = Math.floor(canvas.width / fontSize);
        const drops = new Array(columns).fill(1);

        const draw = () => {
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "#00FF00";
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = javaSnippets[Math.floor(Math.random() * javaSnippets.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height || Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 100);

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // IP Tracking
    useEffect(() => {
        const fetchVisitorInfo = async () => {
            try {
                const response = await fetch('https://ipinfo.io/json');
                if (!response.ok) throw new Error('Failed to fetch visitor information');
                const data = await response.json();

                const visitorInfo = {
                    ip: data.ip,
                    city: data.city,
                    region: data.region,
                    country: data.country,
                    org: data.org,
                    timezone: data.timezone,
                };

                const postResponse = await fetch('https://firasportfolio-6f57312343c9.herokuapp.com/api/visitors', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(visitorInfo),
                });

                if (!postResponse.ok) throw new Error('Failed to send visitor data');
                console.log('Visitor data sent successfully!');
            } catch (err) {
                console.error(err);
                setError('Unable to retrieve or send visitor information');
            }
        };

        fetchVisitorInfo();
    }, []);

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Matrix Canvas Background */}
            <canvas
                ref={canvasRef}
                className="fixed top-0 left-0 w-full h-full z-0"
                style={{ backgroundColor: 'black' }}
            />

            {/* Foreground Content */}
            <div className="relative z-10">
                <Header
                    personalInfo={data.personalInfo}
                    language={language}
                    onLanguageChange={setLanguage}
                />
                <Navigation />
                <motion.main
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-5xl mx-auto px-4 md:px-8 py-8"
                >
                    <Skills skills={data.skills} />
                    <Experience experiences={data.experience} />
                    <Education education={data.education} />
                    <LinksAndProjects items={linksAndProjects} />
                </motion.main>
            </div>
        </div>
    );
}

export default App;
