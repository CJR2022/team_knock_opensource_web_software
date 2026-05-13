import { useLocation } from "react-router-dom"; //현 URL 정보 가져오는 친구


const tabs = [
  { id: "main", label: "메인", href: "/" },
  { id: "inquiry", label: "문의사항", href: "/inquiry" },
  { id: "admin", label: "관리자", href: "/admin" },
];

export default function Header() {
  const location = useLocation(); //URL 정보 가져오기
  const pathname = location.pathname;//슬래시~ 내용 ex)"/admin"
  const activeTab = pathname === "/admin" ? "admin" :
                   pathname === "/inquiry" ? "inquiry" : "main";

  return (
    <header className="header">
      <div className="max-w-[1400px] mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gray-950 flex items-center justify-center">
              <span className="text-white text-xs font-bold tracking-tighter">K</span>
            </div>
            <span className="text-lg font-bold tracking-tight text-gray-950">KNOCK</span>
          </a>

          <nav className="nav-pill">
            {tabs.map((tab) => (
              <a
                key={tab.id}
                href={tab.href}
                className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                  activeTab === tab.id
                    ? "text-gray-950"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {activeTab === tab.id && (
                  <div className="absolute inset-0 bg-white rounded-full shadow-sm border border-gray-200/50" />
                )}
                <span className="relative z-10">{tab.label}</span>
              </a>
            ))}
          </nav>
        </div>

        <button className="btn btn-primary">
          관리자 A
        </button>
      </div>
    </header>
  );
}
