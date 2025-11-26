import { DashboardLayout } from "@/modules/dasboard/ui/layouts/dashboard-layout";

const Layout = ({ children }: { children: React.ReactNode; }) => {
    return (
        <DashboardLayout>
            { children }
        </DashboardLayout>
       
    );
};

export default Layout;