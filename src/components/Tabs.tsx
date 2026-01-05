import { TabItem, TabKey } from "../types";

interface TabsProps<T extends string> {
  tabs: {
    key: T;
    label: string;
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
    <div className="border-b pb-2 border-white/10">
      <ul className="flex gap-2">
        {tabs.map((tab) => {
          const isActive = tab.key === activeTab;

          return (
            <li key={tab.key}>
              <button
                type="button"
                disabled={tab.disabled}
                onClick={() => !tab.disabled && onChange(tab.key)}
                className={`
                  px-4 py-2 rounded-xl border text-sm font-medium
                  transition-all duration-200
                  ${
                    isActive
                      ? 'bg-white/10 border-white/20 text-white'
                      : 'border-white/10 text-white/70 hover:bg-white/5 hover:text-white'
                  }
                  ${
                    tab.disabled
                      ? 'opacity-40 cursor-not-allowed'
                      : ''
                  }
                `}
              >
                {tab.label}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}


// interface TabsProps<T extends TabKey> {
//   tabs: TabItem<T>[];
//   activeTab: T;
//   onChange: (key: T) => void;
// }

// export function Tabs<T extends TabKey>({
//   tabs,
//   activeTab,
//   onChange,
// }: TabsProps<T>) {
//   return (
//     <div className="text-sm font-medium text-center text-body border-b border-default">
//       <ul className="flex flex-wrap -mb-px">
//         {tabs.map((tab) => {
//           const isActive = tab.key === activeTab;

//           return (
//             <li key={tab.key} className="me-2">
//               <button
//                 type="button"
//                 disabled={tab.disabled}
//                 onClick={() => !tab.disabled && onChange(tab.key)}
//                 className={`
//                   inline-block p-4 border-b rounded-t-base
//                   ${isActive
//                     ? 'text-fg-brand border-brand'
//                     : 'border-transparent hover:text-fg-brand hover:border-brand'}
//                   ${tab.disabled
//                     ? 'text-fg-disabled cursor-not-allowed'
//                     : ''}
//                 `}
//               >
//                 {tab.label}
//               </button>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }
