//创建路由实例 绑定path element

import { createBrowserRouter } from "react-router-dom";
import Layout from "@/pages/Layout/Layout";
import Year from "@/pages/Year/Year";
import Month from "@/pages/Month/Month";
import New from "@/pages/New/New";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "year",
                element: <Year />
            },
            {
                path: "month",
                element: <Month />
            },
        ]},
        {
                path: "new",
                element: <New />
            }
]);

export default router;