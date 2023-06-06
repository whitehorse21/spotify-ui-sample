const useFormatMMSS = time => {
  const minutes = String(Math.floor(time / 60))
  const seconds = String(Math.floor(time % 60)).padStart(2, '0')

  return `${minutes}:${seconds}`
}

export default useFormatMMSS