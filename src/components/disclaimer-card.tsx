import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function DisclaimerCard() {
    const CompanyLink = (
        <Link className="text-underline font-medium" href="https://find-and-update.company-information.service.gov.uk/company/05030696" target="_blank" rel="noopener noreferrer">Go Karting for Fun Ltd.</Link>
    )

    return (
        <Card>
            <CardHeader>
                <CardTitle>This software is not affiliated with TeamSport.</CardTitle>
                <CardDescription>The TeamSport name is a registered trademark of {CompanyLink}</CardDescription>
            </CardHeader>
        </Card>
    )
}
