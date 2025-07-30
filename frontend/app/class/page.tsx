import axios from 'axios';
import { useEffect } from 'react';

export default function ClassPage() {
    useEffect() => {
        axios.get('https://grade-calculator-onxm.onrender.com/assessment-types')
    }

    return (
        <div>
            <div className="bg-gray-500 rounded-full w-40 m-10 text-white p-2">
                Class
            </div>
        </div>
    )
}