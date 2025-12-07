import CustomBadge from "@/components/common/custom-badge";
import DashboardCard from "@/components/common/dashboard-card";
import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  ChevronRight,
  Hand,
  MessageSquare,
  Sparkles,
  Wallet,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <MaxWidthWrapper className="px-7 py-8">
      <div className="mx-auto flex max-w-4xl flex-col space-y-3">
        <div>
          <h1 className="flex flex-row items-center gap-2 text-2xl font-bold">
            Halo, <span className="text-blue-700">Megumine! </span>{" "}
            <Hand className="animate-bounce text-blue-700" />
          </h1>
          <p className="text-gray-600">
            Berikut ringkasan bisnis Anda bulan ini.
          </p>
        </div>
        {/* Overview */}
        <div className="grid grid-cols-3 gap-4">
          <DashboardCard
            icon={Wallet}
            label={"Total Pemasukan"}
            value={"Rp. 12.500.000"}
            percentage={"+12%"}
          />
          <DashboardCard
            icon={Wallet}
            label={"Total Pemasukan"}
            value={"Rp. 12.500.000"}
            percentage={"+12%"}
          />
          <DashboardCard
            icon={Wallet}
            label={"Total Pemasukan"}
            value={"Rp. 12.500.000"}
            percentage={"+12%"}
          />
        </div>
        {/* Latest Transaction */}
        <div className="mt-5 grid grid-cols-3 gap-4">
          <div className="col-span-2 space-y-3">
            <h2 className="text-md font-bold">Transaksi Terakhir</h2>
          </div>
          <div className="col-span-1 space-y-3">
            <h2 className="text-md font-bold">Aksi Cepat</h2>
            <Card className="bg-blue-700 pb-0 text-white">
              <CardContent>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-row items-center justify-between">
                    <MessageSquare size={30} />
                    <CustomBadge
                      icon={Sparkles}
                      label={"Fast"}
                      color="text-white"
                    />
                  </div>
                  <div className="space-x-2">
                    <p className="font-semibold">Catat Via AI</p>
                    <p className="text-sm">
                      Input transaksi dengan bahasa sehari-hari.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="rounded-b-md bg-blue-100 text-blue-700">
                <div className="flex w-full flex-row items-center justify-between gap-2 py-2 text-sm">
                  <p>Mulai Chat</p>
                  <ChevronRight />
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
