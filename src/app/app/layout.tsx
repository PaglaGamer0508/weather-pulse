import MenuSlide from "@/components/MenuSlide";
import Navbar from "@/components/Navbar";
import TaskBar from "@/components/TaskBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weather Pulse",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-x-3 lg:gap-x-5 p-2 lg:p-5 h-screen">
      <MenuSlide />
      <div className="hidden sm:block">
        <Navbar />
      </div>
      <div className="flex-1">
        <div className="h-full">
          <div className="h-[8%] py-1">
            <TaskBar className="h-full" />
          </div>
          <div className="h-[92%]">{children}</div>
        </div>
      </div>
    </div>
  );
}
