const animationProgress = (scrollY, start, distance) => {
  // it returns a number in the interval [0-1] which interprets the level of progression of the animation
  if (scrollY < start) return 1
  if (scrollY > start + distance) return 0
  return 1 - (scrollY - start) / distance
}

export default animationProgress
