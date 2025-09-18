import { useRef, useState } from "react"
import ResultModal from "./ResultModal"

export default function TimerChallange({title, targetTime}) {
    const timer = useRef()
    const dialog = useRef()
    const [timerStarted, setTimerStarted] = useState(false)
    const [timerExpired, setTimerExpired] = useState(false)

    const handleStart = () => {
        timer.current = setTimeout(() => {
            setTimerExpired(true)
            dialog.current.showModal()
        }, targetTime * 1000)

        setTimerStarted(true)
    }

    const handleStop = () => {
        clearTimeout(timer.current)
    }

    return (
        <>
        <ResultModal targetTime={targetTime} result={"lost"} ref={dialog} />
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>You lost!</p>}
            <p className="challange-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerStarted ? handleStop : handleStart}>
                    {timerStarted ? 'Stop' : 'Start'} challange
                </button>                
            </p>
            <p className={timerStarted ? 'active' : undefined}>
                {timerStarted ? 'Time is running...' : 'Timer inactive'}
            </p>
        </section>        
        </>

    )
}