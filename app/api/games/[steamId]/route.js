import { NextResponse } from "next/server"

//https://nextjs.org/docs/app/building-your-application/routing/route-handlers#dynamic-route-segments
export async function GET(request, { params }) {
	const steamId = params.steamId
	const key = process.env.API_KEY

	const res = await fetch(
		`https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${key}&steamid=${steamId}&format=json&include_appinfo=true`,
		{
			next: {
				revalidate: 0,
			},
		}
	)

	const data = await res.json()

	return NextResponse.json({ data })
}
