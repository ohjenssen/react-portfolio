import { EnvelopeFill } from 'react-bootstrap-icons';

export default function Contact(){
    return (
        <>
            <div className='col'>
                <div className='card'>
                    <div className='card-body'>
                        <h5 className='card-title'>Contact</h5>
                        <p className='card-text'>For contact, please feel free to reach out to me on mail.</p>
                        <div className='contact-info'>
                            <EnvelopeFill />
                            <p>oskar_jenssen@hotmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}