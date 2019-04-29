import { timeInDay } from './TimeTrack-helpers'
import { TimeTrack } from './TimeTrack'

describe('TimeTrack-helpers', () => {
  describe('timeInDay', () => {
    it('middle  of day', () => {
      const timeTrack = new TimeTrack({
        start: new Date(2010, 6, 20, 8),
        end: new Date(2010, 6, 20, 14),
      })
      const timeMs = timeInDay(timeTrack, timeTrack.start)
      expect(timeMs).toBe(6 * 60 * 60 * 1000)
    })
    it('between days', () => {
      const timeTrack = new TimeTrack({
        start: new Date(2010, 6, 20, 20),
        end: new Date(2010, 6, 21, 2),
      })
      const timeMs = timeInDay(timeTrack, timeTrack.start)
      expect(timeMs).toBe(4 * 60 * 60 * 1000 - 1)
    })
  })
})
