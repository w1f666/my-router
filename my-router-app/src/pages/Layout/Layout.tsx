import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return  (
    <div>
      <Outlet />
    我是layout组件
    </div>
  )
}
export default Layout;