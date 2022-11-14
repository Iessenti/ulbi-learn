import { useState } from "react"
import classes from './Counter.module.scss'

export const Counter = () => {
    const [count, setCount] = useState<number>(0)

    return (
        <div
            onClick={() => setCount(count+1)}
            className={ classes.txt }
        >
            {
                count
            }
        </div>
    )
}