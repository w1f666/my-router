import type { RootState } from "@/store";
import { useSelector } from "react-redux";

const Month: React.FC = () => {
  const billList = useSelector((state: RootState) => state.bill.billList);
  return (<div>
    {billList.map((bill: any) => (
      <div key={bill.id}>
        <p>金额: {bill.money}</p>
        <p>类型: {bill.type}</p>
        <p>日期: {bill.date}</p>
      </div>
    ))
    }
    </div>)
}
export default Month;