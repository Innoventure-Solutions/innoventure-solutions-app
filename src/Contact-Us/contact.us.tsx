import React from 'react';

interface ContactUsProps {

    title:string;

}

const ContactUs: React.FC<ContactUsProps> = ({title}) => {
return (

    <div>
        <h1>{title}</h1>
        
        </div>
);

};

export default ContactUs;