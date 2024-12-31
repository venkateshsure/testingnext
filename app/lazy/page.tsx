'use client';

import { useState, Suspense } from 'react';
import dynamic from 'next/dynamic';

// Client Components:
const ComponentA = dynamic(() => import('../components/AddToCard'), { ssr: false });
const ComponentB = dynamic(() => import('../components/Product'), { ssr: false });
const ComponentC = dynamic(() => import('../components/review'), { ssr: false });

export default function ClientComponentExample() {
    const [showMore, setShowMore] = useState(false);

    return (
        <div>
            {/* Load immediately, but in a separate client bundle */}
            <Suspense fallback={<div>Loading ComponentA...</div>}>
                <ComponentA />
            </Suspense>

            {/* Load on demand, only when/if the condition is met */}
            {showMore && (
                <Suspense fallback={<div>Loading ComponentB...</div>}>
                    <ComponentB />
                </Suspense>
            )}

            <button onClick={() => setShowMore(!showMore)}>Toggle</button>

            {/* Load only on the client side */}
            <Suspense fallback={<div>Loading ComponentC...</div>}>
                <ComponentC />
            </Suspense>
        </div>
    );
}
