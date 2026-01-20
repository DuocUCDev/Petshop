import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MoreHorizontal } from "lucide-react";

const SimpleTable = ({ children }: { children: React.ReactNode }) => (
    <div className="w-full overflow-auto border rounded-xl shadow-sm">
        <table className="w-full caption-bottom text-sm text-left">
            {children}
        </table>
    </div>
);

export const AdminOrdersPage = () => {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-stone-800">Orders</h2>
                    <p className="text-stone-500">Manage customer orders.</p>
                </div>
            </div>

            <div className="flex items-center py-4">
                <div className="relative max-w-sm w-full">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-stone-500" />
                    <Input placeholder="Filter orders..." className="pl-9 bg-white" />
                </div>
            </div>

            <SimpleTable>
                <thead className="[&_tr]:border-b">
                    <tr className="border-b transition-colors hover:bg-stone-50/50 data-[state=selected]:bg-stone-50 text-stone-500 bg-stone-50">
                        <th className="h-12 px-4 text-left align-middle font-medium">Order</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Customer</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Total</th>
                        <th className="h-12 px-4 text-left align-middle font-medium text-right">Actions</th>
                    </tr>
                </thead>
                <tbody className="[&_tr:last-child]:border-0 bg-white">
                    {[1, 2, 3, 4, 5].map((item) => (
                        <tr key={item} className="border-b transition-colors hover:bg-stone-50/50">
                            <td className="p-4 align-middle font-medium text-stone-800">
                                #302{item}
                            </td>
                            <td className="p-4 align-middle">
                                Customer {item}
                                <div className="text-xs text-stone-400">customer{item}@example.com</div>
                            </td>
                            <td className="p-4 align-middle">
                                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
                                    Processing
                                </div>
                            </td>
                            <td className="p-4 align-middle">$45.990</td>
                            <td className="p-4 align-middle text-right">
                                <Button variant="ghost" size="icon">
                                    <MoreHorizontal className="h-4 w-4" />
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </SimpleTable>
        </div>
    );
};
