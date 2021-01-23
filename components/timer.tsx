import { useEffect, useState } from 'react'

export const Timer = () => {
  const countdown = () => {
    // https://github.com/tipenehughes/space-x-app/blob/master/src/Components/HomePage/Home.js

    const today = new Date().getTime()
    const deadline = new Date('2021-12-31, 23:59').getTime()
    const dateDifference = deadline - today

    const days = Math.floor(dateDifference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((dateDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((dateDifference % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((dateDifference % (1000 * 60)) / 1000)

    return {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    }
  }

  const [timeLeft, setTimeLeft] = useState(countdown())

  useEffect(() => {
    const countdownTimer = setTimeout(() => {
      setTimeLeft(countdown())
    }, 1000)

    return () => clearTimeout(countdownTimer)
  })

  return (
    <div>
      <div className="countdown-days">
        <div className="countdown-label">Days</div>

        <div className="countdown-value">{timeLeft.days}</div>
      </div>

      <div className="countdown-hours">
        <div className="countdown-label">Hours</div>

        <div className="countdown-value">{timeLeft.hours}</div>
      </div>

      <div className="countdown-minutes">
        <div className="countdown-label">Minutes</div>

        <div className="countdown-value">{timeLeft.minutes}</div>
      </div>

      <div className="countdown-seconds">
        <div className="countdown-label">Seconds</div>

        <div className="countdown-value">{timeLeft.seconds}</div>
      </div>
    </div>
  )
}
