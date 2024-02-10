import Navbar from "@/components/sections/(nav)/nav";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
};
export default DashboardLayout;

