export const leapYears = (year: number) => {
  if (year % 400 === 0) {
    return true 
  } else if (year % 100 === 0 && year % 400 !== 0) { 
    return false 
  }
}