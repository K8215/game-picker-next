import { NextResponse } from "next/server"

export async function GET(request, { params }) {
	const steamId = params.steamId
	const key = process.env.API_KEY

	const res = await fetch(
		`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${key}&format=json&steamids=${steamId}`,
		{
			next: {
				revalidate: 0,
			},
		}
	)

	const data = await res.json()

	return NextResponse.json({ data })
}
