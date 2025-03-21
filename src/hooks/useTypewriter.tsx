import {useEffect, useState} from 'react'

export default function useTypewriter({
                                          texts,
                                          speed = 100,
                                          delay = 500,
                                          loop = true
                                      }) {
    const [displayText, setDisplayText] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const [textIndex, setTextIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [isPaused, setIsPaused] = useState(false)

    useEffect(() => {
        if (!texts.length) return
        setIsTyping(true)
        const currentText = texts[textIndex]

        if (!isDeleting && charIndex <= currentText.length) {
            const typingTimeout = setTimeout(() => {
                setDisplayText(currentText.slice(0, charIndex + 1))
                setCharIndex((prev) => prev + 1)
            }, speed)
            return () => clearTimeout(typingTimeout)
        } else if (!isDeleting) {
            setTimeout(() => setIsDeleting(true), delay)
        } else if (isDeleting && charIndex > 0) {
            const deletingTimeout = setTimeout(() => {
                setDisplayText(currentText.slice(0, charIndex - 1))
                setCharIndex((prev) => prev - 1)
            }, speed / 2)
            return () => clearTimeout(deletingTimeout)
        } else {
            setIsDeleting(false)
            setIsPaused(true)
            setTextIndex((prev) => (loop ? (prev + 1) % texts.length : prev + 1))
        }
    }, [charIndex, textIndex, texts, speed, delay, loop, isDeleting, isPaused])

    return {displayText, isTyping}
}