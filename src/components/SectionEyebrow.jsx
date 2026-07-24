import React from "react";

export default function SectionEyebrow({ children, isDark = false, className = "" }) {
    return (
        <p className={`text-center text-xs font-bold tracking-[0.2em] uppercase mb-3 ${isDark ? "text-amber-400" : "text-amber-600"} ${className}`}>
            {children}
        </p>
    );
}
