// Text glitch directive
const glitchChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'

export function vGlitch(el: HTMLElement, binding: any) {
  const originalText = el.textContent || ''
  let intervalId: ReturnType<typeof setInterval> | null = null

  const scramble = () => {
    let iterations = 0
    const maxIterations = 5

    intervalId = setInterval(() => {
      el.textContent = originalText
        .split('')
        .map((char, index) => {
          if (index < iterations) {
            return originalText[index]
          }
          return glitchChars[Math.floor(Math.random() * glitchChars.length)]
        })
        .join('')

      if (iterations >= originalText.length) {
        if (intervalId) clearInterval(intervalId)
        el.textContent = originalText
      }

      iterations += 1
    }, 50)
  }

  el.addEventListener('mouseenter', scramble)
  el.addEventListener('mouseleave', () => {
    if (intervalId) clearInterval(intervalId)
    el.textContent = originalText
  })
}