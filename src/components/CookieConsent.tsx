import React, { useEffect, useState } from 'react';

const STORAGE_KEY = 'comfy-cookie-consent';
const OPEN_EVENT = 'comfy:open-cookie-settings';

type Consent = 'granted' | 'denied';

declare global {
  interface Window {
    loadComfyAnalytics?: () => void;
  }
}

function readConsent(): Consent | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === 'granted' || value === 'denied' ? value : null;
  } catch {
    return null;
  }
}

function storeConsent(value: Consent) {
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    /* localStorage unavailable (private mode / blocked) — banner will simply reappear next visit */
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show the banner only when the user has not yet made a choice.
    if (readConsent() === null) {
      setVisible(true);
    }

    // Allow the footer link (or any element) to re-open the banner so the
    // user can change or withdraw their consent at any time.
    const openHandler = () => setVisible(true);
    window.addEventListener(OPEN_EVENT, openHandler);
    return () => window.removeEventListener(OPEN_EVENT, openHandler);
  }, []);

  const accept = () => {
    storeConsent('granted');
    // Load Google Analytics now that consent has been given.
    window.loadComfyAnalytics?.();
    setVisible(false);
  };

  const reject = () => {
    storeConsent('denied');
    // Analytics is never loaded. If it had been granted earlier in this
    // session there is nothing to unload here, but the stored choice stops
    // it from loading on subsequent visits.
    setVisible(false);
  };

  if (!visible) return null;

  const termsUrl = `${import.meta.env.BASE_URL.replace(/\/$/, '')}/termosecondicoes`;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6"
    >
      <div className="container-responsive">
        <div className="mx-auto max-w-3xl rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.15)] border border-[#e5e7eb] p-5 sm:p-6 font-inter">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="text-sm text-[#111827] leading-relaxed">
              <p className="font-semibold mb-1">Cookies e privacidade</p>
              <p className="text-[#4b5563]">
                Utilizamos cookies de análise (Google Analytics) para perceber
                como o site é utilizado e melhorá-lo. Estes cookies só são
                ativados com o seu consentimento. Pode aceitar ou rejeitar.
                Saiba mais nos nossos{' '}
                <a href={termsUrl} className="text-black underline hover:no-underline">
                  Termos e Condições
                </a>
                .
              </p>
            </div>
            <div className="flex flex-shrink-0 gap-3">
              <button
                type="button"
                onClick={reject}
                className="rounded-full px-6 py-3 font-semibold text-black bg-[#f3f4f6] hover:bg-[#e5e7eb] transition-colors duration-200 cursor-pointer"
              >
                Rejeitar
              </button>
              <button
                type="button"
                onClick={accept}
                className="rounded-full px-6 py-3 font-semibold text-black bg-[#BEC864] hover:bg-[#B496C8] transition-colors duration-200 cursor-pointer"
              >
                Aceitar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
