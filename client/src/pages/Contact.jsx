import React from 'react';

const Contact = () => {
    return (
        <div style={{ width: '100%', height: '500px', marginTop: '50px' }}>
            <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.796365846095!2d77.35181627402619!3d11.422321246950162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba91951ed30a831%3A0x4bb64311d9272fdc!2sBTR%20SUPER%20MAARKET!5e0!3m2!1sen!2sin!4v1745763125888!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default Contact;
