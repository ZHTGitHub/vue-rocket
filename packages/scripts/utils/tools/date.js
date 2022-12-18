const date = (value) => {
  const currentDate = value ? new Date(value) : new Date()
	const year = currentDate.getFullYear()
	const month = currentDate.getMonth()
	const day = currentDate.getDay()
	const date = currentDate.getDate()
	const hours = currentDate.getHours()
	const minutes = currentDate.getMinutes()
	const seconds = currentDate.getSeconds()
	const milliseconds = currentDate.getMilliseconds()
	const time = currentDate.getTime()

  const normalMonth = month + 1
	const normalDay = day + 1
	
	return {
		year,
		month,
		day,
		date,
		hours,
		minutes,
		seconds,
		milliseconds,
		time,

    normalMonth,
		normalDay
	}
}

export default date

