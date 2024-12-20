/* eslint-disable react/prop-types */
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiAstro } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiSocketdotio } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";

export default function Icons({ style, type }) {
  return (
    <>
      {type === "arrow-right" && <FaArrowRightLong className={`${style}`} />}
      {type === "download" && <FaCloudDownloadAlt className={`${style}`} />}
      {type === "cancel" && <MdCancel className={`${style}`} />}
      {type === "bars" && <FaBarsStaggered className={`${style}`} />}
      {type === "linkedin" && (
        <FaLinkedin className={`${style} text-[#0A66C2]`} />
      )}
      {type === "messenger" && (
        <FaFacebookMessenger className={`${style} text-[#FF6070]`} />
      )}
      {type === "whatsapp" && (
        <IoLogoWhatsapp className={`${style} text-[#25D366]`} />
      )}
      {type === "github" && <FaGithub className={`${style} text-[#181717]`} />}
      {type === "git" && <FaGitAlt className={`${style} text-[#F05032]`} />}
      {type === "html" && <FaHtml5 className={`${style} text-[#E34F26]`} />}
      {type === "css" && <FaCss3Alt className={`${style} text-[#1572B6]`} />}
      {type === "tailwind" && (
        <SiTailwindcss className={`${style} text-[#38B2AC]`} />
      )}
      {type === "javaScript" && (
        <IoLogoJavascript className={`${style} text-[#F7DF1E]`} />
      )}
      {type === "react" && <FaReact className={`${style} text-[#61DAFB]`} />}
      {type === "redux" && (
        <TbBrandRedux className={`${style} text-[#764ABC]`} />
      )}
      {type === "express" && (
        <SiExpress className={`${style} text-[#000000]`} />
      )}
      {type === "node" && <FaNodeJs className={`${style} text-[#339933]`} />}
      {type === "mongodb" && (
        <DiMongodb className={`${style} text-[#47A248]`} />
      )}
      {type === "firebase" && (
        <IoLogoFirebase className={`${style} text-[#FFCA28]`} />
      )}
      {type === "socket.io" && (
        <SiSocketdotio className={`${style} text-[#010101]`} />
      )}
      {type === "astro" && <SiAstro className={`${style} text-[#FF5A03]`} />}
      {type === "typeScript" && (
        <SiTypescript className={`${style} text-[#3178C6]`} />
      )}
    </>
  );
}
