import { useMemo } from 'react'
import delay from 'delay.js'

import useReducer, { types } from './reducer'

type ReturnType<T> = [
  boolean,
  {
    set: (oldValue: T) => Promise<void>,
    reset: () => void,
  },
]

export default <T>(delayMs: number): ReturnType<T> => {
  const [longCalculating, dispatchLongCalculating] = useReducer<T>()

  const runCalculatingTimer = async (oldValue: T) => {
    dispatchLongCalculating({
      type: types.set,
      payload: oldValue,
    })
    await delay(delayMs)
    dispatchLongCalculating({
      type: types.set,
      payload: oldValue,
    })
  }

  const resetLongCalculating = () => {
    dispatchLongCalculating({
      type: types.reset,
    })
  }

  const actions = useMemo(() => ({
    set: runCalculatingTimer,
    reset: resetLongCalculating,
  }), [])

  return [longCalculating.isLong, actions]
}
