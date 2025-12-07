import { Sparkles } from "lucide-react";
import CustomBadge from "../common/custom-badge";
import MaxWidthWrapper from "../layout/max-width-wrapper";
import { Button } from "../ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="hero">
      <MaxWidthWrapper className="pt-40 pb-20">
        <div className="mx-auto flex max-w-170 flex-col items-center space-y-3 text-center">
          <CustomBadge icon={Sparkles} label={"Khusus UMKM Jasa"} />
          <h1 className="text-5xl leading-[50px] font-bold tracking-[0.2px]">
            Catat Transaksi Semudah <br />
            <span className="text-blue-700">Chatting dengan Teman</span>
          </h1>
          <p className="tracking-[0.7px] text-gray-600">
            Lupakan pembukuan rumit. Cukup ketik &quot;Servis AC Pak Budi
            150rb&quot;, AI kami yang akan merapikan datanya untuk Anda.
          </p>
          <div className="mt-5 flex items-center justify-center space-x-5">
            <Button
              asChild
              className="text-md rounded-md bg-blue-700 px-8 py-6 text-white hover:bg-blue-800"
            >
              <Link href="/register">Coba Demo Sekarang</Link>
            </Button>
            <Button
              asChild
              variant={"ghost"}
              className="text-md rounded-md border border-gray-300 px-8 py-6 text-gray-600 hover:bg-blue-400/10"
            >
              <Link href="/register">Lihat Design System</Link>
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
