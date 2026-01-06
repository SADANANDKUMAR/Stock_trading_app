import { LucideIcon } from "lucide-react";

interface TabsProps<T extends string> {
  tabs: {
    key: T;
    label: string;
    icon?: LucideIcon;
    disabled?: boolean;
  }[];
  activeTab: T;
  onChange: (key: T) => void;
}

export function Tabs<T extends string>({
  tabs,
  activeTab,
  onChange,
}: TabsProps<T>) {
  return (
    <div className="border-b border-white/10 pb-2">
      <ul className="flex gap-2">
        {tabs.map((tab) => {
          const isActive = tab.key === activeTab;
          const Icon = tab.icon;

          return (
            <li key={tab.key}>
              <button
                type="button"
                disabled={tab.disabled}
                onClick={() => !tab.disabled && onChange(tab.key)}
                className={`
                  flex items-center gap-2
                  px-4 py-2 rounded-xl border text-sm font-medium
                  transition-all duration-200
                  ${
                    isActive
                      ? "bg-white/10 border-white/20 text-white"
                      : "border-white/10 text-white/70 hover:bg-white/5 hover:text-white"
                  }
                  ${tab.disabled ? "opacity-40 cursor-not-allowed" : ""}
                `}
              >
                {Icon && (
                  <Icon
                    className={`w-4 h-4 ${
                      isActive ? "text-white" : "text-white/70"
                    }`}
                  />
                )}
                <span>{tab.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
