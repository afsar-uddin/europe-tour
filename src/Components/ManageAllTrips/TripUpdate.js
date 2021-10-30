import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const TripUpdate = () => {
    const [status, setStetus] = useState();
    const { id } = useParams();

    useEffect(() => {
        const url = `http://localhost:4000/trips/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setStetus(data))
    }, []);

    const handleStatusChange = e => {
        const updateStatus = e.target.value;
        const presentStatus = { status: updateStatus };
        setStetus(presentStatus)
    };

    const handleUpadeStatus = e => {
        const url = `http://localhost:4000/trips/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(status)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert("updated successfully");
                    setStetus({})
                }
            })
        e.preventDefault();
    };



    return (
        <div>
            update your trip for {status?._id}
            <form onSubmit={handleUpadeStatus}>
                <input type="text" onChange={handleStatusChange} placeholder="Update status" value={status?.status || ''} />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default TripUpdate;