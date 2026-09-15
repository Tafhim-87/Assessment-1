export default function TopUtilityBar() {
  return (
    <section className="w-full bg-surface-container-low py-space-xs">
      <div className="max-w-7xl mx-auto px-margin flex items-center justify-between">
        <div className="flex items-center gap-space-sm">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            FixFlow Core v4.8 Stable Live
          </span>
          <span className="hidden md:inline font-code-xs text-code-xs text-on-surface-variant">
            IMEI Telemetry Engine Ready
          </span>
        </div>
        <div className="flex items-center gap-space-md text-on-surface-variant font-code-xs text-code-xs">
          <span className="hidden sm:inline">Bangla / English POS Ready</span>
          <span className="text-outline-variant">|</span>
          <span className="font-medium text-on-surface">
            bKash • Nagad • Card Sync
          </span>
        </div>
      </div>
    </section>
  );
}
