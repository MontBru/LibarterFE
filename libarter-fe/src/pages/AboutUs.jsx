import React, { useState } from "react";
import { routes } from "../constants";
import img from '../assets/AboutUs.jpeg'
import Background from "../components/Background";

const questions = [
    { id: 1, title: 'How do I create an account?', answer: 'By clicking on one of the options, and on the login page click on the "Dont have and account" option' },
    { id: 2, title: 'How do I order a book?', answer: 'You must have an account to do that! You first want to navigate to the top left part of you your screen, and then click on the "Add Offer" and since you want to buy a book, then you select the "Request" option and fill the details there.(Keep in mind that it will try to match you with the people already selling this book and vice versa' },
    { id: 3, title: 'How do I put up an offer?', answer: 'First You need to have an account and be logged in, after that you can navigate to the "Add offer" in the menu located on the top left side of the screen. Pick the type of offer that you want to put and simply fill out the information!'},
    { id: 4, title: 'What is the "Capture ISBN" button?', answer: 'It lets you take a picture of the barcode on the back of the book and it automatically extracts the barcode for you.'},
    { id: 5, title: 'What is this green check mark on the side of the ISBN?', answer: 'Once you have captured the barcode you can press this mark and it will automatically fill out the information of the book for you. Keep in mind that some of the options like price and language need to be filled by yourself!'},
    { id: 6, title: 'How does the chat work?', answer: 'You have two types of conversations - seller and client.\n' + 'By default you will be redirected to the seller option, but you can always switch to the client option using the button on the top that says that you are the client.'}
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

    const toggleQuestion = (id) => {
        setOpenQuestionId((prevId) => (prevId === id ? null : id));
    };

    return (
        <div className="questions flex flex-col items-center"> {}
            {questions.map((question) => (
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
                            <h1 className="font-bold text-xl mb-3">About Us</h1>
                            <div className="">
                                <p>
                                    We are a passionate group of book lovers who believe in the power of
                                    stories to transport, educate, and inspire. Our mission is to provide
                                    accurate selection of books for readers of all ages and interests.
                                </p>
                                <p>
                                    We believe that everyone deserves access to great books, which is why
                                    we offer a variety of formats, including physical books, ebooks, and
                                    audiobooks. We also strive to create a welcoming community for book
                                    lovers to connect and share their love of reading.
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