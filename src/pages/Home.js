// import {motion} from 'framer-motion'
import React, { useEffect } from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import FAQData from "./../components/FAQ/FAQData";
import FAQList from "./../components/FAQ/FAQList";
import Header from "./../components/Header/Header"
import '../styles/main.css'
import {motion} from 'framer-motion'
import {forwardRef} from 'react'

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
  


const Home = () => {
    return (
        <>
            <Header />
            <motion.section initial = 'hidden' whileInView = "visible">
                
        

            <main className="section">
                <div className="container">
                <motion.h2 custom={1} variants={textAnimation} className="title-2 bold">ДОРОГОЙ ПЕРВОКУРСНИК!</motion.h2>
                <motion.h2 custom={1} variants={textAnimation} className="title-2 bold">Добро пожаловать в Казахский национальный женский педагогический университет!</motion.h2>
                    <ul className="content-list">
                        <li className="content-list__item">
                            <div className="welcome-block">
                                <motion.p custom={2} variants={textAnimation}>Для меня большая честь приветствовать вас в кузнице педагогического образования, которая и по сей день остается пионером в области женского образования в нашей стране и Центральной Азии. Мы очень рады, что вы присоединились к нашей семье.</motion.p>
                                <motion.p custom={2} variants={textAnimation}>Мы разработали данный путиводитель, чтобы настроить вас на успех. Вы будете посещать презентации и участвовать в мероприятиях, которые познакомят вас с жизнью студента нашего Университета.</motion.p>
                                <motion.p custom={2} variants={textAnimation}>По мере того, как наш Университет движется вперед, мы стремимся к увеличению лидерства наших студентов и сотрудников, а также обеспечению условии, в которых все сообщество нашего Университета могло бы чувствовать поддержку и достигать профессиональных высот.</motion.p>
                                <motion.p custom={2} variants={textAnimation}>Наша главная задача - создать культуру взаимоуважения и академической честности. Для достижения данных целей нам нужна ваша поддержка и вовлеченность в развитие нашего Университета.</motion.p>
                                <motion.p custom={2} variants={textAnimation} className="bold">Настройте себя на успех!</motion.p>
                            </div>
                        </li>

                        <li className="content-list__item4">
                            <div className="signature-block">
                                <motion.img custom={1} variants={textAnimation} src="https://www.inform.kz/radmin/news/2022/01/11/220111163032736e.jpg" alt="b" className="signature-image" />
                                <motion.p custom={2} variants={textAnimation}>С наилучшими пожеланиями,</motion.p>
                                <motion.p custom={2} variants={textAnimation} className="bold">Қанай Гүлмира Әмірханқызы, PhD</motion.p>
                                <motion.p custom={2} variants={textAnimation}>Председатель Правления – Ректор</motion.p>
                            </div>
                        </li>
                    </ul>

                </div>
            </main>

           
            <main className="section3">
                <div className="container">
                    <ul className="content-list3">
                        <li className="content-list__item3">
                            <div className="FAQ">
                                <h1 className="faq-title">FAQ - Часто задаваемые вопросы</h1>
                                <FAQList faqData={FAQData} />
                            </div>
                        </li>
                    </ul>
                </div>
            </main>
            <main className="section2">
                <div className="container">
                        <motion.h2 custom={1} variants={textAnimation} className="title-22222">ВАЖНЫЕ КОНТАКТНЫЕ ДАННЫЕ</motion.h2>
                        <motion.p custom={1} variants={textAnimation} className="title-222222">СКОРАЯ МЕДИЦИНСКАЯ ПОМОЩЬ <strong>103</strong></motion.p>
                    <div className="gridBlock">    
                    <ul className="content-list55">
                        <li className="content-list__item55">
                            <h2 className="title-2222">единый номер (круглосуточно)</h2>
                            <p className="title-222">+7 (727) 297-78-03</p>
                            <p className="title-222">+7 (727) 297-73-71</p>
                        </li>
                    </ul>
                    <ul className="content-list55">
                        <li className="content-list__item55">
                            <h2 className="title-2222">диспетчерская</h2>
                            <p className="title-222">+7 (727) 297-78-03</p>
                            <p className="title-222">+7 (727) 297-73-71</p>
                        </li>
                    </ul>
                    </div>
                    <h2 className='title-222222'>АЛМАЛИНСКИЙ РУВД</h2>
                    <div className="gridBlock">    
                    <ul className="content-list55">
                        <li className="content-list__item55">
                            <h2 className="title-2222">Адрес</h2>
                            <p className="title-222">Ул. Красай батыра 88, Almaty 050000</p>
                        </li>
                    </ul>
                    <ul className="content-list55">
                        <li className="content-list__item55">
                            <h2 className="title-2222">Телефон</h2>
                            <p className="title-222">+7 (7272) 24 46 12</p>
                        </li>
                    </ul>
                    </div>
                    <h2 className='title-222222'>ПСИХОЛОГИЧЕСКАЯ ПОМОЩЬ, ИНДИВИДУАЛЬНАЯ КОНСУЛЬТАЦИЯ И ТРЕНИНГИ</h2>
                    <div className="gridBlock">    
                    <ul className="content-list5555">
                        <li className="content-list__item55">
                            <h2 className="title-2222">Телефон</h2>
                            <p className="title-222">+7 727 393 66 74</p>
                        </li>
                    </ul>
                    </div>
                    <h2 className='title-222222'>МЕДИЦИНСКАЯ ПУНКТ УНИВЕРСИТЕТА</h2>
                    <div className="gridBlock">    
                    <ul className="content-list55">
                        <li className="content-list__item555">
                            <h2 className="title-2222">Адрес</h2>
                            <p className="title-222">Гоголя 114/4, возле 1 этажа студенческого общежития №4 на территории университета.</p>
                        </li>
                    </ul>
                    </div>
                    <div className="gridBlock">    
                    <ul className="content-list55555">
                        <li className="content-list__item55">
                            <h2 className="title-2222">Время работы</h2>
                            <p className="title-222">с 9:00 - 18:00</p>
                            <p className="title-222">перерыв 13:00 - 14:00</p>
                        </li>
                    </ul>
                    <ul className="content-list55555">
                        <li className="content-list__item55">
                            <h2 className="title-2222">Рабочий телефон медицинского пункта</h2>
                            <p className="title-222">+7 (727) 279-96-19</p>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className='bg-section'></div>
            </main>
            </motion.section>
        </>
    );
}

export default Home;