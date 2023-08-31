import React, { useEffect } from 'react';
import axios from 'axios';

export default function FetchData() {
    useEffect(() => {
        axios.get('http://localhost:5000/').then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
    }, []);
    return (
        <div>
            FetchData
        </div>
    )
}