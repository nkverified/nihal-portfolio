"use client";

import Image from "next/image";
import pp from '../public/pp.jpg';
import ThemeToggle from '../components/theme-toggle';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

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

        <main className="space-y-10">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-1"
          >
            <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
              Arun Jo Cherian
            </h1>
            <p className="text-gray-600 dark:text-gray-400">Salesforce Developer</p>
            <p className="text-gray-600 dark:text-gray-400">Kochi, Kerala</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3"
          >
            <Button className="rounded-full bg-gradient-to-r from-rose-600 to-indigo-600 text-white transition-transform hover:scale-105">
              Resume
            </Button>

            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
              <FaLinkedinIn className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
              <FaGithub className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
              <FaInstagram className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
              <FaFacebook className="w-6 h-6" />
            </Link>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
