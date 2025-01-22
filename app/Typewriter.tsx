import React, { useEffect, useRef, useState } from "react";

interface TypewriterProps {
    textArray: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    period?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({
    textArray,
    typingSpeed = 250,
    deletingSpeed = 150,
    period = 2000,
}) => {
    const [text, setText] = useState<string>("");
    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    const [loopNum, setLoopNum] = useState<number>(0);
    const [delta, setDelta] = useState<number>(typingSpeed);
    const elRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const handleTyping = () => {
            const currentText = textArray[loopNum % textArray.length];

            if (isDeleting) {
                setText(currentText.substring(0, text.length - 1));
                setDelta(deletingSpeed);
            } else {
                setText(currentText.substring(0, text.length + 1));
                setDelta(typingSpeed);
            }

            if (!isDeleting && text === currentText) {
                setTimeout(() => setIsDeleting(true), period);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, delta);

        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, textArray, typingSpeed, deletingSpeed, period]);

    return <span ref={elRef} className="typewriter">{text}<span className="cursor">|</span></span>;
};

export default Typewriter;