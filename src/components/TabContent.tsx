import { TabKey } from "../types";

interface TabContentProps<T extends TabKey> {
  activeTab: T;
  renderMap: Record<T, React.ReactNode>;
}

export function TabContent<T extends TabKey>({
  activeTab,
  renderMap,
}: TabContentProps<T>) {
  return <div className="mt-4">{renderMap[activeTab]}</div>;
}
