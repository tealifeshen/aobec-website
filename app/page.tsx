import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsUpgrade from "@/components/StatsUpgrade";
import Solutions from "@/components/Solutions";
import WhyAobec from "@/components/WhyAobec";
import GlobalPresence from "@/components/GlobalPresence";
import TrustSection from "@/components/TrustSection";
import Certification from "@/components/Certification";
import FeaturedProjects from "@/components/FeaturedProjects";
import Process from "@/components/Process";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function HomePage(){
return(
<main>
<Navbar/>
<Hero/>
<StatsUpgrade/>
<Solutions/>
<WhyAobec/>
<GlobalPresence/>
<TrustSection/>
<Certification/>
<FeaturedProjects/>
<Process/>
<ContactCTA/>
<Footer/>
</main>
)
}
