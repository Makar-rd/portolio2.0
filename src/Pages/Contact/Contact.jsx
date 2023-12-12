import React from "react";
import Social from "../../Components/SocialCard/Social";
import "./Contact.scss";

import git from '../../assets/git.png';
import instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';
import telegram from "../../assets/telegram.png";
import whatsapp from '../../assets/whatsapp.png';
import gmail from "../../assets/gmail.png";
import mail from '../../assets/mail.png';
import discord from '../../assets/discord.png';



const Contact = () => {
  return (
    <div className="contact">
      <h1>Get in Touch</h1>
      <span>
      Кроме удобства, MaxText обеспечивает гибкость в выборе тем и стилей. 
      В частности, можно заказать текст по описанию, детализировать требования и даже указать ключевые слова для SEO. 
      Просто подробно распишите какой материал нужно написать, какие ключевые слова заголовки использовать. 
      Это обеспечивает высокую адаптивность контента под конкретные нужд
      </span>

      <div className="socials">
        <Social logo={git} value="GitHub" link='https://github.com/Makar-rd'/>
        <Social logo={instagram} value="instagram" link='https://instagram.com/_makkarronn_?igshid=MzNlNGNkZWQ4Mg=='/>
        <Social logo={telegram} value="telegram" link='https://t.me/makarr1'/>
        <Social logo={whatsapp} value="whatsapp" link='https://wa.me/qr/3QVLQPF3WKJMG1'/>
        <Social logo={linkedin} value="linkedin" link='https://www.linkedin.com/in/makkarronn/'/>
        <Social logo={discord} value="discord" link='https://discord.com/users/makar.366'/>
        <Social logo={mail} value="yandex.mail" link="mailto:rudakov.makar@yandex.ru?subject=your title&body=Hello"/>
        <Social logo={gmail} value="Gmail" link="mailto:rudakov.makar161@gmail.com?subject=your title&body=Hello"/>
      </div>

      
    </div>
  );
};

export default Contact;
