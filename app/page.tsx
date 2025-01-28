"use client";

import Image from "next/image";
import pp from '../public/ppp.png';

import ThemeToggle from '../components/theme-toggle';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { Card, CardContent } from "@/components/ui/card";
import image1 from '../public/1.png'
import image2 from '../public/2.jpg'
import image3 from '../public/3.png'
import image4 from '../public/4.png'
import image5 from '../public/5.png'
import image6 from '../public/6.jpg'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-xl px-4 py-20">

        <motion.header
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-12"
        >
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <Image 
              src={pp} 
              alt="profile picture" 
              className="cursor-pointer transition-all duration-300 hover:scale-110"
            />
          </div>
          <ThemeToggle />
        </motion.header>

        <main className="space-y-8">
          <section className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-1"
            >
              <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
                Arun Jo Cherian
              </h1>
              <p className="text-gray-600 dark:text-gray-400 font-extrabold">Salesforce Developer</p>
              <p className="text-gray-600 dark:text-gray-400 font-extralight">Kochi, Kerala</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-3"
            >
              <h2 className="text-lg font-semibold">Building Scalable Solutions for Tomorrow </h2>
<p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
  Experienced Salesforce Developer skilled in designing and optimizing CRM workflows. Proficient in Apex, Visualforce, and Lightning, with hands-on experience in developing triggers, Apex classes, and Lightning Web Components (LWC). Strong in technical documentation, teamwork, and delivering scalable solutions tailored to dynamic business needs.
</p>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3"
            >
              <Button 
                as="a" 
                href="/arunjo.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="rounded-full bg-gradient-to-r from-rose-600 to-indigo-600 text-white transition-transform hover:scale-105"
              >
                Resume
              </Button>
              <Link href="https://www.linkedin.com/in/arun-jo-cherian-0180ab178" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                <FaLinkedinIn className="w-6 h-6" />
              </Link>
              <Link href="https://www.instagram.com/_arun.jo_" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                <FaInstagram className="w-6 h-6" />
              </Link>
              <Link href="https://www.facebook.com" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                <FaFacebook className="w-6 h-6" />
              </Link>
            </motion.div>
          </section>

          <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">Experience</h2>

            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  
                  <p className="font-semibold text-lg">Salesforce Developer/Admin</p>
                  <p className="text-blue-600 dark:text-blue-400">Tata Consultancy Services</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">July, 2019-Present</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
  <span className="text-black dark:text-white font-semibold">Salesforce Developer & Administrator</span> with over 5 years of experience in customizing applications on the Salesforce platform. Expertise in developing <span className="text-black dark:text-white font-semibold">Lightning flows</span>, <span className="text-black dark:text-white font-semibold">Apex triggers</span>, and <span className="text-black dark:text-white font-semibold">LWC</span> to streamline processes and enhance user experiences.
</p>
<p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
  Proficient in creating <span className="text-black dark:text-white font-semibold">workflow rules</span>, <span className="text-black dark:text-white font-semibold">validation rules</span>, and configuring <span className="text-black dark:text-white font-semibold">role hierarchies</span> to align with business logic and user requirements. Experienced in <span className="text-black dark:text-white font-semibold">CPQ</span> and designing dynamic templates using <span className="text-black dark:text-white font-semibold">X-Author for Word</span>. Skilled in building customized dashboards and reports, including <span className="text-black dark:text-white font-semibold">summary</span> and <span className="text-black dark:text-white font-semibold">matrix reports</span>, to provide actionable business insights.
</p>
<p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl">
  Collaborated with cross-functional teams to develop tailored solutions, ensuring seamless integration and deployment of custom features. Actively supported fellow developers and participated in code reviews, knowledge sharing, and troubleshooting to ensure the highest quality of applications.
</p>

            </div>
          </motion.section>

          <motion.section
           initial={{ opacity: 0, y: 100 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           className="space-y-8"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">Education</h2>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  
                  <p className="font-medium">B.Tech:Electronics And Communication Engineering</p>
                  <p className="text-blue-600 dark:text-blue-400">MBC College,Kuttikkanam</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">April,2013-2017</p>
                </div>
              </div>
              
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  
                  <p className="font-medium">Higher Secondary: Biology Science</p>
                  <p className="text-blue-600 dark:text-blue-400">St.Joseph's HSS,Peruvanthanam</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">April,2011-2013</p>
                </div>
              </div>
             
            </div>

            

          </motion.section>

          <motion.section
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
          >
             <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-4">
                    <Image src={image1} alt="Project 1" className="rounded-lg mb-4"/>

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Project 1</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Apex,Visual Force</p>
                      
                      </div>

                      <Button variant="ghost" size="icon"> {'->'}</Button>

                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-4">
                    <Image src={image2} alt="Project 1" className="rounded-lg mb-4"/>

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Project 2</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">LWC, Javacript</p>
                      
                      </div>

                      <Button variant="ghost" size="icon">{'->'}</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-4">
                    <Image src={image3} alt="Project 1" className="rounded-lg mb-4"/>

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Project 3</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">SOSL,SOQL</p>
                      
                      </div>

                      <Button variant="ghost" size="icon">{'->'}</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-4">
                    <Image src={image4} alt="Project 1" className="rounded-lg mb-4"/>

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Project 4</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Salesforce CLI </p>
                      
                      </div>

                      <Button variant="ghost" size="icon">{'->'}</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-4">
                    <Image src={image5} alt="Project 1" className="rounded-lg mb-4"/>

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Project 5</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">HTML, CSS</p>
                      
                      </div>

                      <Button variant="ghost" size="icon">{'->'}</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-4">
                    <Image src={image6} alt="Project 1" className="rounded-lg mb-4"/>

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Project 6</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Developer Console </p>
                      
                      </div>

                      <Button variant="ghost" size="icon">{'->'}</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <p className="text-gray-500">@ 2025 Arun Jo Cherian</p>
          </motion.section>
        </main>
      </div>
    </div>
  );
}
