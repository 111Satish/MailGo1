import React, { useState } from 'react';

function ComposeMail() {
    const [to, setTo] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle email submission (e.g., using a library like Nodemailer)
        console.log('Email data:', { to, subject, body });
    };

    return (
        <div className="compose-mail">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="to">To:</label>
                    <input
                        type="email"
                        id="to"
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label

                        htmlFor="subject">Subject:</label>


                    <input


                        type="text"


                        id="subject"


                        value={subject}


                        onChange={(e) => setSubject(e.target.value)}
                    />
                </div>


                <div

                    className="form-group">
                    <label htmlFor="body">Body:</label>
                    <textarea
                        id="body"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default ComposeMail;