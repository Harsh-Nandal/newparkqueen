import Image from "next/image";
import Button from "@/components/ui/Button";

export const metadata = { title: "Page Not Found" };

export default function NotFound() {
  return (
    <div className="grid min-h-screen place-items-center bg-ivory px-6 text-center">
      <div>
        <Image
          src="/images/logo.png"
          alt="The ParkQueen Hotel"
          width={140}
          height={46}
          className="mx-auto mb-10 h-11 w-auto object-contain"
        />
        <span className="font-body text-[11px] font-medium uppercase tracking-[0.42em] text-gold">
          Error 404
        </span>
        <h1 className="mt-4 font-display text-[clamp(28px,4vw,44px)] font-medium uppercase tracking-[0.1em] text-navy">
          Page Not Found
        </h1>
        <p className="mx-auto mt-5 max-w-[50ch] text-[15px] text-grey">
          The page you&rsquo;re looking for may have been moved or no longer exists. Let us guide you
          back to a warmer welcome.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4.5">
          <Button href="/" variant="solid">
            Back to Home
          </Button>
          <Button href="/contact">Contact Us</Button>
        </div>
      </div>
    </div>
  );
}
