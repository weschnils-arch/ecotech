
import React from 'react';

interface BackgroundBlobProps {
    color?: string; // Tailwind color class like 'bg-ecotech-green' or just hex
    position?: string; // Tailwind positioning classes like 'top-0 left-0'
    size?: string; // Tailwind size classes like 'w-96 h-96'
    opacity?: string; // Tailwind opacity, e.g. 'opacity-20'
    blur?: string; // Tailwind blur amount, e.g. 'blur-3xl'
    className?: string;
    variant?: 'green' | 'blue' | 'orange' | 'purple' | 'cyan' | 'grey';
}

export function BackgroundBlob({
    color,
    position = 'top-0 left-0',
    size = 'w-64 h-64 md:w-96 md:h-96',
    opacity = 'opacity-20',
    blur = 'blur-[100px]',
    className = '',
    variant
}: BackgroundBlobProps) {

    let bgClass = color || 'bg-ecotech-green';

    if (variant) {
        switch (variant) {
            case 'green': bgClass = 'bg-ecotech-green'; break;
            case 'blue': bgClass = 'bg-blue-medium'; break; // Using the extended colors
            case 'orange': bgClass = 'bg-orange'; break;
            case 'purple': bgClass = 'bg-purple'; break;
            case 'cyan': bgClass = 'bg-cyan'; break;
            case 'grey': bgClass = 'bg-ecotech-grey-lighter'; break;
        }
    }

    return (
        <div
            className={`absolute ${position} ${size} ${bgClass} ${opacity} ${blur} rounded-full pointer-events-none -z-10 animate-pulse-slow ${className}`}
        />
    );
}
