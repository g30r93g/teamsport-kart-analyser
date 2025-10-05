import { db } from "@/db";
import { venue } from "@/db/schema";
import { SmsTimingVenue } from "@/types/sms-timing/venue";
import { Venue } from "@/types/venue";

async function fetchVenuesFromSmsTimingAPI(): Promise<SmsTimingVenue[]> {
    const venueUrl = "https://backend.sms-timing.com/api/cluster/teamsport"
    const response = await fetch(venueUrl);

    if (!response.ok) {
        throw new Error(`Failed to fetch venues: ${response.statusText}`);
    }

    const { clientsInfo }: {
        clientsInfo: SmsTimingVenue[];
    } = await response.json();


    return clientsInfo;
}

function smsVenueToVenue(response: SmsTimingVenue): Venue {
    return {
        clientKey: response.clientkey,
        name: response.name,
        baseAddress: parseInt(response.baseAddress),
    };
}

export async function fetchVenues() {
    // Perform the query to fetch venues from sms-timing API
    const smsVenues = await fetchVenuesFromSmsTimingAPI();
    const transformedVenues = smsVenues.map(smsVenueToVenue);

    // Get all existing venues
    const existingVenues: Venue[] = await db.select().from(venue);

    // Determine if we need to add a new venue
    const smsSet = new Set(transformedVenues.map(v => v.clientKey));
    const existingSet = new Set(existingVenues.map(v => v.clientKey));

    const newVenues = transformedVenues.filter(v => !existingSet.has(v.clientKey));

    // Insert new venues into the database
    if (newVenues.length > 0) {
        const toInsert = newVenues.map(v => ({
            clientKey: v.clientKey,
            name: v.name,
            baseAddress: v.baseAddress,
        }));
        await db.insert(venue).values(toInsert);
    }

    // Return all venues
    return await db.select().from(venue);
}
