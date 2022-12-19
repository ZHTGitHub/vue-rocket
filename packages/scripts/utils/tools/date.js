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

  const am00Time = new Date(currentDate.setHours(0, 0, 0, 0)).getTime()
  const pm24Time = new Date(currentDate.setHours(0, 0, 0, 0) + 24 * 60 * 60 * 1000 - 1).getTime()

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

    am00Time,
    pm24Time
	}
}

export default date

