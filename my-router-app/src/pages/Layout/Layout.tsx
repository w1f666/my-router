import { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { getBillList } from "@/store/module/BillStore";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/store";
import { TabBar } from 'antd-mobile'
import {
  BillOutline,
  CalculatorOutline,
  AddCircleOutline
} from 'antd-mobile-icons'
import './layout.scss'
const Layout: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getBillList());
  }, [dispatch])

  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location

  const setRouteActive = (value: string) => {
    navigate(value)
  }

  const tabs = [
    {
      key: '/month',
      title: '月度账单',
      icon: <BillOutline />,
    },
    {
      key: '/new',
      title: '记账',
      icon: <AddCircleOutline />,
    },
    {
      key: '/year',
      title: '年度账单',
      icon: <CalculatorOutline />,
    },
  ]

  return (
    <div className="app-layout">
      <div className="app-body">
      <Outlet />
      </div>
      <div className="app-footer">
      <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
        {tabs.map(item => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
      </div>
    </div>
  )
}
export default Layout;
