import { loadStripe } from "@stripe/stripe-js";

export const stripePromise=loadStripe("pk_test_51NjIfCH2z6mEntjByqqjMB0PhXtytLB19LQBWJXdp8GiBSGKnIpH3mwGWahPcHKLTyGH1R9BRH693k2uSCGk5fs7006xdudi8n") //pass the publishable key to loadstripe