import { useEffect, useState } from 'react'

export const Timer = () => {
  const countdown = () => {
    const today = new Date().getTime()
    const deadline = new Date('2021-12-31, 23:59').getTime()
    const dateDifference = deadline - today

    const days = Math.floor(dateDifference / (1000 * 60 * 60 * 24)).toString(10)
    const hours = Math.floor((dateDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString(10)
    const minutes = Math.floor((dateDifference % (1000 * 60 * 60)) / (1000 * 60)).toString(10)
    const seconds = Math.floor((dateDifference % (1000 * 60)) / 1000).toString(10)

    return {
      days: days.length < 2 ? '0' + days : days,
      hours: hours.length < 2 ? '0' + hours : hours,
      minutes: minutes.length < 2 ? '0' + minutes : minutes,
      seconds: seconds.length < 2 ? '0' + seconds : seconds
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
    <div className="row mt-2">
      <div className="col-6 col-sm-3">
        <div className="countdown-days">
          <div className="countdown-label h4 font-weight-normal">Days</div>
          <div className="countdown-value h1 font-weight-normal">{timeLeft.days}</div>
        </div>
      </div>

      <div className="col-6 col-sm-3">
        <div className="countdown-hours">
          <div className="countdown-label h4 font-weight-normal">Hours</div>
          <div className="countdown-value h1 font-weight-normal">{timeLeft.hours}</div>
        </div>
      </div>

      <div className="col-6 col-sm-3">
        <div className="countdown-minutes">
          <div className="countdown-label h4 font-weight-normal">Mins</div>
          <div className="countdown-value h1 font-weight-normal">{timeLeft.minutes}</div>
        </div>
      </div>

      <div className="col-6 col-sm-3">
        <div className="countdown-seconds">
          <div className="countdown-label h4 font-weight-normal">Secs</div>
          <div className="countdown-value h1 font-weight-normal">{timeLeft.seconds}</div>
        </div>
      </div>
    </div>
  )
}
