import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

interface SLideshowProps {
    children: React.ReactNode[];
}

const PostSlides: React.FC<SLideshowProps> = ({ children }) => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [dragStart, setDragStart] = useState<number | null>(null);
    const [dragging, setDragging] = useState(false);


    const handleSwipedLeft = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % children.length);
    }

    const handleSwipedRight = () => {
        setCurrentSlide((prevSlide) => prevSlide === 0 ? children.length - 1 : prevSlide - 1);
    }

    const handlers = useSwipeable({
        onSwipedLeft: handleSwipedLeft,
        onSwipedRight: handleSwipedRight
    });

    const handleMouseDown = (e: React.MouseEvent) => {
        setDragStart(e.clientX);
        setDragging(true);
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!dragging || dragStart === null) return;

        const dragDistance = e.clientX - dragStart;
        if (dragDistance > 50) {
            handleSwipedRight();
            setDragging(false);
        } else if (dragDistance < -50) {
            handleSwipedLeft();
            setDragging(false);
        }
    };

    const handleMouseUp = () => {
        setDragging(false);
    };


    return (
        <div
            {...handlers}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
            <div
                style={{
                    display: 'flex',
                    transition: 'transform 0.5s ease-in-out',
                    transform: `translateX(-${currentSlide * 100}%)`,
                    height: '100%',
                    userSelect: 'none',  // Prevents text selection
                }}
            >
                {children.map((child, index) => (
                    <div
                        key={index}
                        style={{ width: '100%', flexShrink: 0 }}
                    >
                        {child}
                        {currentSlide}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PostSlides;
