import { Link } from "react-router-dom";
import { CONTACT } from "../constants";
import { motion } from "motion/react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Contact
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <Link to="/" className="border-b">
          {CONTACT.email}
        </Link>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/parinwat-kiatthitipon-41b54b299/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/IceParinwat" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.facebook.com/iceparinwat/" target="_blank">
          <FaFacebookSquare />
        </a>
      </div>
    </section>
  );
}
