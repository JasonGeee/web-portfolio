import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Jason Gutierrez</title>
      </Head>
      <header>
        {/* First Section */}
        <div>
          <h1 className="text-lg">Jason Gutierrez</h1>
        </div>
        {/* Second Section */}
        <div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Resume</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
      </header>
      <main>
        {/* Main Section */}
        <div></div>
        {/* About Section */}
        <div></div>
        {/* Skils Section */}
        <div></div>
        {/* Projects Section */}
        <div></div>
        {/* Contact Form Section */}
        <div></div>
      </main>
    </div>
  );
};

export default Home;
