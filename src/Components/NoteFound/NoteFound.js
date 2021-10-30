import React from 'react';
import { Link } from 'react-router-dom';

const NoteFound = () => {
    return (
        <div className="not-found">
            You are in wrong path, Please go to <Link to="/">Home</Link>
        </div>
    );
};

export default NoteFound;