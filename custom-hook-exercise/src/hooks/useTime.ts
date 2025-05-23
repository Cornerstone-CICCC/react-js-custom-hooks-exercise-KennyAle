import { useEffect, useState } from "react"

function useTime<T>(data: string) {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const [getDate, setGetDate] = useState<T | string>(data)
    useEffect(() => {
        const date = new Date()
        if (data == "day") {
            setGetDate(weekday[date.getDay()])
        } else {
            setGetDate(date.getHours().toString())
        }
    }, [data])
    return getDate
}

export default useTime