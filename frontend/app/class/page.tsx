'use client'

import axios from 'axios';
import { useEffect, useState } from 'react';

export default function ClassPage() {
    const [assessmentTypes, setAssessmentTypes] = useState<any>();

    useEffect(() => {
        axios.get('https://grade-calculator-onxm.onrender.com/assessment-types/')
            .then((res: any) => {
                let data = res.data;
                setAssessmentTypes(data);
            })
            .catch((err: any) => {})
    }, [])

    useEffect(() => {
        console.log(assessmentTypes)
    })

    return (
        <div>
            {assessmentTypes?.map((item: any) => (
                <div className="bg-gray-500 rounded-full w-40 m-10 text-white p-2">
                    {item.name}
                </div>
            ))}
        </div>
    )
}