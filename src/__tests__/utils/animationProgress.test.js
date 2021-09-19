import animationProgress from '../../utils/animationProgress'

describe('util animationProgress', () => {

  it('it should return a number in the range [0-1] with the scroll position lower at the beginning of the effect', () => {
    const scrollPosition = 100
    const start = 130
    const distance = 200

    const progress = animationProgress(scrollPosition, start, distance)

    expect(progress).toBeGreaterThanOrEqual(0)
    expect(progress).toBeLessThanOrEqual(1)
  })

  it('should return a number in the range [0-1] with the upper scroll position at the beginning of the effect', () => {
    const scrollPosition = 100
    const start = 99
    const distance = 200

    const progress = animationProgress(scrollPosition, start, distance)

    expect(progress).toBeGreaterThanOrEqual(0)
    expect(progress).toBeLessThanOrEqual(1)
  })

  it('should return a number in the range [0-1] with the scroll position greater than the effect duration', () => {
    const scrollPosition = 400
    const start = 130
    const distance = 200

    const progress = animationProgress(scrollPosition, start, distance)

    expect(progress).toBeGreaterThanOrEqual(0)
    expect(progress).toBeLessThanOrEqual(1)
  })
})
