import React from 'react';
import './Contact.css';
import FirstColunm from '../FirstColunm/FirstColunm';
import pencil from './../../images/pencil.png';
import Form from '../Form/Form';
import Preloader from "../Preloader/Preloader";

function Contact(props) {
    return (
        <section className="contact" id="contact">
            <div className="contact__container">
                <FirstColunm
                    colunm="Контакты"
                    colunmDescription="Если у вас есть для меня работа или вы просто хотите пообщаться, то напишите мне! Я всегда рад новому общению!"
                    image={pencil}
                />
                <Form handleSpinner={props.handleSpinner}
                handleSetInfoTooltip={props.handleSetInfoTooltip}
                handleSetInfoTooltipMistake={props.handleSetInfoTooltipMistake}
                />
                <Preloader isSpinner={props.isSpinner}/>
            </div>

        </section>
    );
}

export default Contact;