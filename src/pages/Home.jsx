import Card from '../components/Card';
import semesterProjectScreenshot from '../assets/semesterProject2/semesterProject_landingPage.png';
import jsFrameworksScreenshot from '../assets/jsFrameworks/jsFrameworks_landingPage.png';
import projectExam2Screenshot from '../assets/projectExam2/projectExam2_landingPage.png';
import selfPortrait from '../assets/selvportrett005-kopi.jpg';
import Contact from './Contact';

export default function Home(){
    return (
        <>
            <section className='row mt-5 pt-5 mb-3'>
                <div className='col-md-6'>
                    <h1>Oskar Jenssen | Portfolio</h1>
                    <p>Hello world! My name is Oskar Jenssen and this is my portfolio.</p>
                </div>
                <div className='col'>
                    <div className='img-container mx-auto d-block'>
                        <img className='img-fluid' src={selfPortrait} />
                    </div>
                </div>
            </section>
            <section className='row row-cols-1 row-cols-md-3 g-4'>
                <Card 
                    title='Semester Project 2'
                    description='This was my second semester project at Noroff. Here we took the skills learned over the past three semesters and created an auction website.'
                    githubRepo='https://github.com/ohjenssen/semester_project_2'
                    liveSite='https://auctionace.oskarjenssen.com/'
                    media={semesterProjectScreenshot}
                    projectName='Auction Ace'
                />
                <Card
                    title='JavaScript Frameworks Course Assignment'
                    description='Course assignment in JavaScript Frameworks where we created a simple e-commerce website with React.' 
                    githubRepo='https://github.com/ohjenssen/js-frameworks-ca'
                    liveSite='https://oskarjenssen-js-fw-ca.netlify.app/'
                    media={jsFrameworksScreenshot}
                    projectName='eCom'
                />
                <Card 
                    title='Project Exam 2'
                    description='This was the final graded project at Noroff.'
                    githubRepo='https://github.com/ohjenssen/projectExamHolidaze'
                    liveSite='https://ohjenssen-pe-holidaze.netlify.app/'
                    media={projectExam2Screenshot}
                    projectName='Holidaze'
                />
            </section>
            <section className='row my-3' id='contact'>
               <Contact />
            </section>
        </>
    )
}