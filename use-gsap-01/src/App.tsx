import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import {useRef} from 'react';

export const Container = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    useGSAP(
        () => {
            gsap.to('.circle', {
                y: -100,
                duration: 0.4,
                repeat: -1,
                ease: 'power2.inOut',
                yoyo: true,
                stagger: {
                    each: 0.05,
                },
            });
        },
        {scope: containerRef}
    );
    return (
        <div ref={containerRef} className='container'>
            <div className='circle'>1</div>
            <div className='circle'>2</div>
            <div className='circle'>3</div>
            <div className='circle'>4</div>
            <div className='circle'>5</div>
        </div>
    );
};
