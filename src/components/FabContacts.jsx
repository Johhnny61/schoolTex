import React, { useState } from "react";

const contacts = [
  {
    label: "WhatsApp",
    href: "https://wa.me/79585832213",
    icon: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.1 3.2 5.077 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.617h-.001a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 0 1 0 11.974C0 5.364 5.373 0 11.987 0c3.181 0 6.167 1.24 8.413 3.488A11.822 11.822 0 0 1 24 11.987c-.003 6.617-5.376 11.99-11.949 12.012m10.413-13.41a10.413 10.413 0 0 0-3.004-4.728A10.444 10.444 0 0 0 11.987 1.5C6.201 1.5 1.5 6.202 1.5 11.974c0 2.072.555 4.084 1.607 5.834l.256.433-.592 2.164 2.23-.586.422.25a8.37 8.37 0 0 0 4.134 1.133h.001c5.786 0 10.487-4.703 10.488-10.488a10.42 10.42 0 0 0-1.564-5.206"/></svg>
    ),
  },
  {
    label: "Telegram",
    href: "https://t.me/mythical_god",
    icon: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.371 0 0 5.371 0 12c0 6.629 5.371 12 12 12s12-5.371 12-12c0-6.629-5.371-12-12-12zm5.707 7.293l-2.828 10.607c-.211.789-.633.984-1.285.613l-3.547-2.617-1.711 1.646c-.189.189-.348.348-.711.348l.254-3.588 6.537-5.904c.285-.254-.062-.396-.441-.142l-8.084 5.088-3.484-1.088c-.757-.236-.771-.757.158-1.121l13.617-5.254c.633-.254 1.191.142.984 1.121z"/></svg>
    ),
  },
  {
    label: "Позвонить",
    href: "tel:+996550997709",
    icon: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1.003 1.003 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.07 21 3 13.93 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.46.57 3.58.11.33.03.7-.24 1.01l-2.2 2.2z"/></svg>
    ),
  },
];

const FabContacts = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {open && (
        <div className="flex flex-col gap-2 mb-2 animate-fade-in">
          {contacts.map((c, i) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 shadow rounded-full hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors text-gray-800 dark:text-gray-100"
            >
              {c.icon}
              <span className="font-medium text-sm">{c.label}</span>
            </a>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-lg transition-all text-2xl"
        aria-label="Контакты"
      >
        {open ? (
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M6 18L18 6M6 6l12 12"/></svg>
        ) : (
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 8v8m-4-4h8"/></svg>
        )}
      </button>
    </div>
  );
};

export default FabContacts; 