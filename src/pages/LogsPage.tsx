import { useSecurityStore } from '@/store/securityStore';
import DashboardLayout from '@/components/DashboardLayout';
import ThreatBadge from '@/components/ThreatBadge';

const LogsPage = () => {
  const logs = useSecurityStore(s => s.logs);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-1">Security Logs</h1>
          <p className="text-muted-foreground text-sm">Complete audit trail of system events and threat responses</p>
        </div>

        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="p-4 border-b border-border flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-xs font-mono text-muted-foreground">LIVE LOG FEED · {logs.length} entries</span>
          </div>
          <div className="max-h-[600px] overflow-auto p-4 space-y-1 font-mono text-sm scanline">
            {logs.map(log => (
              <div
                key={log.id}
                className="flex items-start gap-4 py-2 px-3 rounded hover:bg-accent/20 transition-colors"
              >
                <span className="text-muted-foreground text-xs whitespace-nowrap min-w-[85px]">
                  {log.timestamp.toLocaleTimeString()}
                </span>
                <span className="text-xs min-w-[70px] text-muted-foreground uppercase">{log.eventType}</span>
                <ThreatBadge level={log.threatLevel} />
                <span className="text-foreground/80 flex-1">{log.action}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default LogsPage;
