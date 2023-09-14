import "./style.css"
import {motion} from 'framer-motion'
const textAnimation = {
    hidden: {
      x: -20,
      opacity: 0,
      transition: {
        ease: "easeOut",
        duration: 0.5,
      },
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: {
        ease: "easeIn",
        duration: 0.5,
        delay: custom * 0.2,
      },
    }),
  };

const Header = () => {
    return ( <header className="header">
        <motion.section initial = 'hidden' whileInView = "visible">
    <div className="header__wrapper">
        <motion.h1 custom={1} variants={textAnimation} className="header__title">
            <motion.strong custom={1} variants={textAnimation}>STUDENT <em>HANDBOOK</em></motion.strong><br/>
        </motion.h1>
        <div className="header__text">
            <motion.p custom={1} variants={textAnimation}>СПРАВОЧНИК - ПУТЕВОДИТЕЛЬ</motion.p>
            <motion.p custom={1} variants={textAnimation}> ДЛЯ СТУДЕНТОВ</motion.p>
        </div>
        <motion.a custom={1} variants={textAnimation} href="./STUDENT HANDBOOK RUS.pdf" download="STUDENT HANDBOOK RUS.pdf" className="btn">СКАЧАТЬ ФАЙЛ</motion.a>
    </div>
    </motion.section>
</header>
 );
}
 
export default Header;