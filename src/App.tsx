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

        // Set up the canvas dimensions
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();

        // window.addEventListener('resize', resizeCanvas);

        const javaSnippets = [
            "",
            " :: Spring Boot ::                (v3.4.4)",
            "",
            "2025-04-11T14:49:47.336+01:00  INFO 29972 --- [firasportfolio] [           main] o.f.p.f.FirasportfolioApplication        : Starting FirasportfolioApplication using Java 17.0.14 with PID 29972 ",
            "2025-04-11T14:49:47.338+01:00  INFO 29972 --- [firasportfolio] [           main] o.f.p.f.FirasportfolioApplication        : No active profile set, falling back to 1 default profile: \"default\"",
            "2025-04-11T14:49:47.806+01:00  INFO 29972 --- [firasportfolio] [           main] .s.d.r.c.RepositoryConfigurationDelegate : Bootstrapping Spring Data JPA repositories in DEFAULT mode.",
            "2025-04-11T14:49:47.843+01:00  INFO 29972 --- [firasportfolio] [           main] .s.d.r.c.RepositoryConfigurationDelegate : Finished Spring Data repository scanning in 30 ms. Found 1 JPA repository interface.",
            "2025-04-11T14:49:48.108+01:00  INFO 29972 --- [firasportfolio] [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port 8080 (http)",
            "2025-04-11T14:49:48.116+01:00  INFO 29972 --- [firasportfolio] [           main] o.apache.catalina.core.StandardService   : Starting service [Tomcat]",
            "2025-04-11T14:49:48.116+01:00  INFO 29972 --- [firasportfolio] [           main] o.apache.catalina.core.StandardEngine    : Starting Servlet engine: [Apache Tomcat/10.1.39]",
            "2025-04-11T14:49:48.149+01:00  INFO 29972 --- [firasportfolio] [           main] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext",
            "2025-04-11T14:49:48.150+01:00  INFO 29972 --- [firasportfolio] [           main] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 770 ms",
            "2025-04-11T14:49:48.250+01:00  INFO 29972 --- [firasportfolio] [           main] o.hibernate.jpa.internal.util.LogHelper  : HHH000204: Processing PersistenceUnitInfo [name: default]",
            "2025-04-11T14:49:48.290+01:00  INFO 29972 --- [firasportfolio] [           main] org.hibernate.Version                    : HHH000412: Hibernate ORM core version 6.6.11.Final",
            "2025-04-11T14:49:48.314+01:00  INFO 29972 --- [firasportfolio] [           main] o.h.c.internal.RegionFactoryInitiator    : HHH000026: Second-level cache disabled",
            "2025-04-11T14:49:48.528+01:00  INFO 29972 --- [firasportfolio] [           main] o.s.o.j.p.SpringPersistenceUnitInfo      : No LoadTimeWeaver setup: ignoring JPA class transformer",
            "2025-04-11T14:49:48.552+01:00  INFO 29972 --- [firasportfolio] [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Starting...",
            "2025-04-11T14:49:49.767+01:00  INFO 29972 --- [firasportfolio] [           main] com.zaxxer.hikari.pool.HikariPool        : HikariPool-1 - Added connection com.mysql.cj.jdbc.ConnectionImpl@1fd37440",
            "2025-04-11T14:49:49.769+01:00  INFO 29972 --- [firasportfolio] [           main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Start completed.",
            "2025-04-11T14:49:49.891+01:00  WARN 29972 --- [firasportfolio] [           main] org.hibernate.orm.deprecation            : HHH90000025: MySQL8Dialect does not need to be specified explicitly using 'hibernate.dialect' (remove the property setting and it will be selected by default)",
            "2025-04-11T14:49:49.891+01:00  WARN 29972 --- [firasportfolio] [           main] org.hibernate.orm.deprecation            : HHH90000026: MySQL8Dialect has been deprecated; use org.hibernate.dialect.MySQLDialect instead",
            "2025-04-11T14:49:49.903+01:00  INFO 29972 --- [firasportfolio] [           main] org.hibernate.orm.connections.pooling    : HHH10001005: Database info:",
            "\tDatabase JDBC URL [Connecting through datasource 'HikariDataSource (HikariPool-1)']",
            "\tDatabase driver: undefined/unknown",
            "\tDatabase version: 8.0",
            "\tAutocommit mode: undefined/unknown",
            "\tIsolation level: undefined/unknown",
            "\tMinimum pool size: undefined/unknown",
            "\tMaximum pool size: undefined/unknown",
            "2025-04-11T14:49:50.457+01:00  INFO 29972 --- [firasportfolio] [           main] o.h.e.t.j.p.i.JtaPlatformInitiator       : HHH000489: No JTA platform available (set 'hibernate.transaction.jta.platform' to enable JTA platform integration)",
            "2025-04-11T14:49:50.756+01:00  INFO 29972 --- [firasportfolio] [           main] j.LocalContainerEntityManagerFactoryBean : Initialized JPA EntityManagerFactory for persistence unit 'default'",

        ];

        const fontSize = 18;
        const columns = Math.floor(canvas.width / fontSize);
        const drops = new Array(columns).fill(0);

        // Used for throttling the draw loop
        let frameCount = 7;
        const frameSkip = 7; // Increase to slow down more (e.g. 4 or 5)

        const draw = () => {
            frameCount++;
            if (frameCount % frameSkip === 0) {
                ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                ctx.fillStyle = "#00FF00";
                ctx.font = `${fontSize}px monospace`;

                for (let i = 0; i < drops.length; i++) {
                    const text = javaSnippets[Math.floor(Math.random() * javaSnippets.length)];
                    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                    // Reset drop to top randomly or if out of screen
                    if (drops[i] * fontSize > canvas.height || Math.random() > 0.99) {
                        drops[i] = 0;
                    } else {
                        drops[i]++;
                    }
                }
            }

            requestAnimationFrame(draw);
        };

        requestAnimationFrame(draw);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
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
