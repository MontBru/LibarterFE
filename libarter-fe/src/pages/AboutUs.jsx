import React, { useState } from "react";
import { routes } from "../constants";
import img from '../assets/AboutUs.jpeg'
import Background from "../components/Background";
import languageStore from '../zustand/languageStore';


const questions = [
    { id: 1, title: 'How do I create an account?', answer: 'By clicking on one of the options, and on the login page click on the "Dont have and account" option' },
    { id: 2, title: 'How do I put up an offer?', answer: 'You must have an account to do that! You first want to navigate to the top left part of you your screen, and then click on the "Add Offer". There you can choose if you are searching a book or you are selling one by selecting "offer" or "request". Then fill the details there and if you want to, tou can press the search button on the bottom of the page, so that we can suggest offers that match your description - if you are selling a book, we will find people that are searching it, and if you are searching a book we will find ones selling it.' },
    { id: 3, title: 'What is the "Capture ISBN" button?', answer: 'It lets you take a picture of the barcode on the back of the book and it automatically extracts the barcode for you.'},
    { id: 4, title: 'What is this green check mark on the side of the ISBN?', answer: 'Once you have captured the barcode you can press this mark and it will automatically fill out the information of the book for you. Keep in mind that some of the options like price and language need to be filled by yourself!'},
    { id: 5, title: 'How does the chat work?', answer: 'You have two types of conversations - seller and client.\n' + 'By default you will be redirected to the seller option, but you can always switch to the client option using the button on the top that says that you are the client.'}
];

const questionsBG = [
    { id: 1, title: 'Как да създам акаунт?', answer: 'Когато направите действие изискващо акаунт като например качване на обява, сайтът ще Ви помоли да влезнете в акаунта си. От логин страницата може да натиснете "нямам профил" и да създадете своя профил.' },
    { id: 2, title: 'Как да направя обява?', answer: 'Задължително е да имате акаунт! Горе вляво има меню бутон, натискате "Добави обява". Имате 2 опции за търсене или продаване на книга, като може да изберете в зависимост дали искате да закупите или продадете книга. Попълвате детайлите и ако решите може да натиснете лупичката на дъното на екрана, за да се опитаме да намерим най-добрите обяви, които отговарят на Вашата обява - това значи ако правите обява за търсене, ще се търсят хора, които продава същата книга, а ако правите обява за продажба - хора, които търсят тази книга.' },
    { id: 3, title: "Какво прави 'Сканирай ISBN' бутона?", answer: 'Позволява да сканирате баркода на гърба на книгата и извлича уникалния идентификатор (ISBN) на книгата.'},
    { id: 4, title: 'Какво прави зеленото тикче отстрани на ISBN-а?', answer: 'Когато е попълнено полето за ISBN, чрез сканиране на баркода или ръчно, можете да натиснете тикчето и ще попълним автоматично информацията за книгата Ви ако я имаме в базата ни от данни. Все пак ще трябва да попълните полета като цена и други сами!'},
    { id: 5, title: 'Как работи чата?', answer: 'Има два вида разговори - като продавач и като клиент. Може да изберете кой вид разговори да разглеждате от кръглите бутони.'}
];

function Question({ title, answer, isOpen, toggle }) {
    return (
        <button style={{width:'90%'}} className={`bg-customColors-complementary border border-customColors-primary rounded-md p-3 mb-3 hover:bg-customColors-secondary flex flex-col justify-center items-center ${isOpen &&  ' bg-customColors-secondary'}`} onClick={toggle}>
            <div className=" font-bold">{title}</div>
            {isOpen && 
            <section>
                <hr className="border border-black border-dashed my-5"/>
                <div>{answer}</div>
            </section>
            
            }
        </button>
    );
}

function Questions({ questions }) {
    const [openQuestionId, setOpenQuestionId] = useState(null);
    const {language, setLanguage} = languageStore();

    let qstns = language === "EN"? questions:questionsBG;

    const toggleQuestion = (id) => {
        setOpenQuestionId((prevId) => (prevId === id ? null : id));
    };

    return (
        <div className="questions flex flex-col items-center"> {}
            {qstns.map((question) => (
                <Question
                    key={question.id}
                    title={question.title}
                    answer={question.answer}
                    isOpen={question.id === openQuestionId}
                    toggle={() => toggleQuestion(question.id)}
                />
            ))}
        </div>
    );
}

function AboutUs() {
    const {language, setLanguage} = languageStore();
    let text = language === "EN"?["То contact us, write an email at: bryanmonticelli@gmail.com", "Our goal is to make access to books easier for everyone. If you want to work with us, write us an email! We will be happy to work with you!","About Us"]:["За контакт с нас, напишете ни имейл на: bryanmonticelli@gmail.com", "Целта ни е да направим четенето по-лесно и достъпно за всички. Ако искате да работите с нас, пишете ни имейл!Ще се радваме да работим с вас!", "За Нас"];

    return (
        <Background>
            <div className="about-us">
                <div className="mx-7 lg:flex lg:flex-row ">
                    <div className="flex justify-center p-6">
                        <img
                            src={img}
                            alt="user default image"
                            className="w-full max-w-xl h-full"
                        />
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <div className=" bg-customColors-accent border h-full rounded-md p-5 my-5 flex flex-col justify-center items-center border-customColors-primary">
                            <h1 className="font-bold text-xl mb-3">{text[2]}</h1>
                            <div className="">
                                <p>
                                    {text[0]}
                                </p>
                                <p>
                                    {text[1]}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <Questions questions={questions} />
            </div>
        </Background>
    );
}

export default AboutUs;