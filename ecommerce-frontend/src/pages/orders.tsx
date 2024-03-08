import { ReactElement, useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Column } from "react-table";
import TableHOC from "../components/admin/TableHOC";
// import { Skeleton } from "../components/loader";
// import { useMyOrdersQuery } from "../redux/api/orderAPI";
// import { RootState } from "../redux/store";
// import { CustomError } from "../types/api-types";

type DataType = {
  _id: string;
  amount: number;
  quantity: number;
  discount: number;
  status: ReactElement;
  action: ReactElement;
};

const column: Column<DataType>[] = [
  {
    Header: "ID",
    accessor: "_id",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const Orders = () => {

  const [rows] = useState<DataType[]>([
    {
      _id: "adasd",
      amount: 1232,
      quantity: 12,
      discount: 566,
      status: <span className="red">
        Processing
      </span>,
      action: <Link to={"/order/adasd"}>View</Link>
    },
    {
      _id: "adasd",
      amount: 1232,
      quantity: 12,
      discount: 566,
      status: <span className="red">
        Processing
      </span>,
      action: <Link to={"/order/adasd"}>View</Link>
    } 
  ]);

  

  const Table = TableHOC<DataType>(
    column,
    rows,
    "dashboard-product-box",
    "Orders",
    rows.length > 6
  )();
  return (
    <div className="container">
      <h1>My Orders</h1>
      {/* {isLoading ? <Skeleton length={20} /> : Table} */}
      {Table}
    </div>
  );
};

export default Orders;
