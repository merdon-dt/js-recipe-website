
import React, { useMemo, useState } from 'react'

const data = [
    {
        age: "20",
        sub: [
            {
                name: "apple",
                tam: "20",
                eng: "20"
            }
        ]
    },
    {
        age: "20",
        sub: [
            {
                name: "orange",
                tam: "20",
                eng: "20"
            }
        ]
    },
    {
        age: "20",
        sub: [
            {
                name: "banana",
                tam: "20",
                eng: "20"
            }
        ]
    },
    {
        age: "20",
        sub: [
            {
                name: "grapes",
                tam: "20",
                eng: "20"
            }
        ]
    }
]

const Pract = () => {
    const [search, setSearch] = useState('')

    const store = useMemo(() => {
        if (!search) return data;

        const match = [];
        const rest = [];

        data.forEach((item) => {
            const willMatch = item.sub.some((v) =>
                v.name.toLowerCase().includes(search.toLowerCase())
            );
            if (willMatch) {
                match.push(item);
            } else {
                rest.push(item);
            }
        });

        return [...match, ...rest];
    }, [search]);

    return (
        <div>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            
            />

            {store.map((d, index) => (
                <ul key={index}>
                    <li>ID: {d.age}</li>
                    {d.sub.map((f, idx) => (
                        <ul key={idx}>
                            <li>Name: {f.name}</li>
                            <li>Eng: {f.eng}</li>
                            <li>Tam: {f.tam}</li>
                        </ul>
                    ))}
                </ul>
            ))}
        </div>
    )
}

export default Pract

