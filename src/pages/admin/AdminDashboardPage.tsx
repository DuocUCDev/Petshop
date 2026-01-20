import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, ShoppingBag, Package, Users } from "lucide-react";

export const AdminDashboardPage = () => {
    const stats = [
        { title: "Total Revenue", value: "$45.231.890", icon: DollarSign, change: "+20.1% from last month" },
        { title: "Subscriptions", value: "+2350", icon: Users, change: "+180.1% from last month" },
        { title: "Sales", value: "+12,234", icon: ShoppingBag, change: "+19% from last month" },
        { title: "Active Products", value: "+573", icon: Package, change: "+201 since last hour" },
    ];

    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-stone-800">Dashboard</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => (
                    <Card key={index}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-stone-500">
                                {stat.title}
                            </CardTitle>
                            <stat.icon className="h-4 w-4 text-stone-400" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-stone-800">{stat.value}</div>
                            <p className="text-xs text-stone-400">{stat.change}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <div className="h-[200px] flex items-center justify-center bg-stone-50 rounded text-stone-400">
                            Chart Mockup
                        </div>
                    </CardContent>
                </Card>
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Recent Sales</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[1, 2, 3, 4, 5].map(i => (
                                <div key={i} className="flex items-center">
                                    <div className="bg-primary/10 text-primary w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs">
                                        OM
                                    </div>
                                    <div className="ml-4 space-y-1">
                                        <p className="text-sm font-medium leading-none text-stone-800">Olivia Martin</p>
                                        <p className="text-xs text-stone-500">olivia.martin@email.com</p>
                                    </div>
                                    <div className="ml-auto font-medium text-stone-800">+$1.999.00</div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};
