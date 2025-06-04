import { OurMission } from "./OurMission/OurMission";
import { OurPrinciples } from "./OurPrinciples/OurPrinciples";
import { WhyWish } from "./WhyWish/WhyWish";

export function AboutUsPage() {
    return (
        <main>
            <OurMission />
            <OurPrinciples />
            <WhyWish />
        </main>
    )
}