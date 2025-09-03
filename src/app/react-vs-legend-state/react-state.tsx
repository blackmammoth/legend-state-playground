'use client'

import { memo, useRef, useState } from "react";

export default function ParentComponent() {
    const renderCount = ++useRef(0).current;
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(prev => prev + 1)
    }

    return (
        <div>
            <button onClick={handleClick} className="bg-yellow-600">
                CLICK ME
            </button>
            <CountDisplay count={count}/>
            <StaticComponent />
            <p> Parent Component render count: {renderCount} </p>
        </div>
    )
}

const StaticComponentBase = () => {
    const staticRenderCount = ++useRef(0).current;
    return <p>Static Child Renders: {staticRenderCount}</p>;
};

const StaticComponent = memo(StaticComponentBase)

const CountDisplayBase = ({ count }: { count: number }) => {
    // This increases everytime the count prop changes
    const childRenderCount = ++useRef(0).current;
    return (
        <p>
            Count: {count} (Child renders: {childRenderCount})
        </p>
    );
};

const CountDisplay = memo(CountDisplayBase)
