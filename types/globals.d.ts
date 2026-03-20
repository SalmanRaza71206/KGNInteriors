// Extend the Window interface to include gtag (Google Analytics / Google Ads)
interface Window {
  gtag: (
    command: 'config' | 'event' | 'js' | 'set',
    targetId: string,
    params?: Record<string, unknown>
  ) => void;
}
