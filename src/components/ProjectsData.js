import socialMediaImg from '../images/socialMedia.jpg';
import chatbot from '../images/chatbot.jpg';
import portfolio from '../images/portfolio.jpg';

export const projects = [
    {
        'Name': 'Social Media App',
        'Built' :'June 2023',
        'About' : 'This is a dynamic social media application designed to provide users with a diverse range of features, resembling popular social media platforms like Instagram. The application allows users to follow others, like and comment on posts, create profiles, and provides robust authentication features',
        'Img': socialMediaImg,
        'Points' : [
            'Developed the fundamental logic for user authentication, feed management, and community features',
            'Built the complete set of REST APIs for a social media application and utilized REST APIs to dynamically load and render data served by the backend server',
            'Improved UI by adding responsive design elements for uniform experience across different devices'
        ],
        'Techs' : [
            'HTML','CSS','AngularJS','PrimeNg','Typescript','Firebase','RESTful APIs','Git'
        ],
    },
    {
        'Name': 'Rule-Based ChatBot',
        'Built' :'June 2021',
        'About' : 'A rule-based chatbot system implemented using Python and Flask, enriched with Natural Language Processing (NLP) techniques. The chatbot employs synonym recognition and NLP to extract and deliver data based on predefined rules, elevating user interactions through effective understanding and response to natural language queries.',
        'Img': chatbot,
        'Points' : [
            'Leveraged synonym recognition to improve the extraction and interpretation of user queries.',
            'Defined and implemented predefined rules for extracting and providing relevant data',
                ],
        'Techs' : [
            'HTML','CSS','Python','Flask','NLP','RESTful APIs','Git'
        ],
    },
    {
        'Name': 'My Portfolio',
        'Built' :'November 2023',
        'About' : 'My personal portfolio, meticulously crafted to showcase my skills, projects, and expertise. Built using a modern tech stack, the portfolio is a dynamic representation of my journey and accomplishments',
        'Img': portfolio,
        'Points' : [
            'Leveraged React and Tailwind CSS for dynamic and interactive components.',
            'Managed project development and collaboration using Git',
            'Hosted on Netlify, providing a reliable and scalable platform for seamless deployment.'
        ],
        'Techs' : [
            'HTML','CSS','React','Tailwind CSS','Netlify','Git'
        ],
    }
]
