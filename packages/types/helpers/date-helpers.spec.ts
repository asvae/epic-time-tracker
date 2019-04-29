import { readableInterval, readableDistanceInDays } from './date-helpers'
import {subDays} from 'date-fns'

describe('date-helpers', () => {
  it('readableInterval', () => {
    expect(readableInterval(5 * 1000)).toBe('less than a minute')
    expect(readableInterval(7 * 60 * 1000)).toBe('7 minutes')
  })
  it('readableDistanceInDays', () => {
    expect(readableDistanceInDays(subDays(new Date(), 5))).toBe('5 days ago')
    expect(readableDistanceInDays(subDays(new Date(), 50))).toBe('about 2 months ago')
  })
})
