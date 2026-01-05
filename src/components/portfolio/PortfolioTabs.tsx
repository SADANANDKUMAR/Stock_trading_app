import { useState } from "react";
import { TabItem } from "../../types";
import { Tabs } from "../Tabs";
import { TabContent } from "../TabContent";
import OrderHistory from "./OrderHistory";
import Holdings from "./Holdings";
import Watchlist from "./Watchlist";
import Transactions from "./Transactions";

type PortfolioTab =
  | 'orders'
  | 'holdings'
  | 'watchlist'
  | 'transactions';

export default function PortfolioTabs() {
  const [activeTab, setActiveTab] =
    useState<PortfolioTab>('orders');

  const tabs: TabItem<PortfolioTab>[] = [
    { key: 'orders', label: 'Order History' },
    { key: 'holdings', label: 'Holdings' },
    { key: 'watchlist', label: 'Watchlist' },
    { key: 'transactions', label: 'Transactions' },
  ];

  return (
    <>
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      <TabContent
        activeTab={activeTab}
        renderMap={{
          orders: <OrderHistory />,
          holdings: <Holdings />,
          watchlist: <Watchlist />,
          transactions: <Transactions />,
        }}
      />
    </>
  );
}
