import { useChatStore } from "../store/useChatStore";

function ActiveTabSwitch() {
  const { activeTab, setActiveTab } = useChatStore();

  return (
    <div className="tabs tabs-boxed bg-transparent p-2 m-2" role="tablist" aria-label="Chat navigation">
      <button
        onClick={() => setActiveTab("chats")}
        className={`tab transition-all duration-200 ${
          activeTab === "chats" ? "bg-cyan-500/20 text-cyan-400 scale-105" : "text-slate-400 hover:text-slate-300"
        }`}
        role="tab"
        aria-selected={activeTab === "chats"}
        aria-controls="chats-panel"
      >
        Chats
      </button>

      <button
        onClick={() => setActiveTab("contacts")}
        className={`tab transition-all duration-200 ${
          activeTab === "contacts" ? "bg-cyan-500/20 text-cyan-400 scale-105" : "text-slate-400 hover:text-slate-300"
        }`}
        role="tab"
        aria-selected={activeTab === "contacts"}
        aria-controls="contacts-panel"
      >
        Contacts
      </button>
    </div>
  );
}
export default ActiveTabSwitch;
