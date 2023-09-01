export default async function useFetch(
	route,
	steamId,
	{ setIsError, setErrorText, setLoader }
) {
	//Fetch returns a promise
	const res = await fetch(`/api/${route}/${steamId}`, {
		next: {
			revalidate: 60 * 60 * 24,
		},
	})

	//Fetch error handling
	if (!res.ok) {
		const err = `Could not retrieve ${route}`

		setLoader(false)
		setErrorText(err)
		setIsError(true)

		throw new Error(err)
	}

	//Await promise and store json data
	const json = await res.json()
	const data = json.data.response

	return { data }
}
