'use client';

import { Memo, useObservable } from "@legendapp/state/react";
import { useRef } from "react";


export default function ParentComponent() {
    const renderCount = ++useRef(0).current;

    const count$ = useObservable(0);

    const handleClick = () => {
        console.log(count$.get())
        count$.set(prev => prev + 1)
    }

    return (
        <div>
            <button onClick={handleClick} className="bg-yellow-600">
                CLICK ME
            </button>
            <p>Count: <Memo>{count$}</Memo></p>
            <p> Parent Component render count: {renderCount} </p>
        </div>
    )
}