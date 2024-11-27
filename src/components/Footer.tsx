import React from "react";
import styles from "../styles/Footer.module.css";

// Import icons individually
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaGlobe } from "react-icons/fa";

interface FooterProps {
  name: string;
  createdBy: string;
  email: string;
  linkedin: string;
  github: string;
  instagram: string;
  portfolio: string;
}

const Footer: React.FC<FooterProps> = ({
  name,
  createdBy,
  email,
  linkedin,
  github,
  instagram,
  portfolio,
}) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.name}>{name}</p>
        <p className={styles.createdBy}>{createdBy}</p>
        <div className={styles.socialLinks}>
          <a href={`mailto:${email}`} className={styles.link}>
            <FaEnvelope className={styles.icon} /> Email
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className={styles.link}>
            <FaLinkedin className={styles.icon} /> LinkedIn
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer" className={styles.link}>
            <FaGithub className={styles.icon} /> GitHub
          </a>
          <a href={instagram} target="_blank" rel="noopener noreferrer" className={styles.link}>
            <FaInstagram className={styles.icon} /> Instagram
          </a>
          <a href={portfolio} target="_blank" rel="noopener noreferrer" className={styles.link}>
            <FaGlobe className={styles.icon} /> Portfolio
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
