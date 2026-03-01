import { Shield, Lock, FileCheck, AlertTriangle } from 'lucide-react';
import { useSecurityStore } from '@/store/securityStore';
import ThreatBadge from '@/components/ThreatBadge';
import DashboardLayout from '@/components/DashboardLayout';

const DashboardPage = () => {
  const { threatLevel, encryptionMode, files, reEncryptionCount, failedAttempts } = useSecurityStore();

  const stats = [
    { label: 'Total Files', value: files.length, icon: FileCheck, color: 'text-primary' },
    { label: 'Re-encryptions', value: reEncryptionCount, icon: Lock, color: 'text-threat-suspicious' },
    { label: 'Failed Attempts', value: failedAttempts, icon: AlertTriangle, color: 'text-threat-attack' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-1">Security Dashboard</h1>
          <p className="text-muted-foreground text-sm">Real-time cryptographic defense monitoring</p>
        </div>

        {/* Threat Level & Encryption */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-xs font-mono text-muted-foreground mb-3">SYSTEM THREAT LEVEL</p>
            <ThreatBadge level={threatLevel} size="lg" />
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-xs font-mono text-muted-foreground mb-3">ENCRYPTION MODE</p>
            <div className="flex items-center gap-3">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold font-mono text-foreground">{encryptionMode}</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-4">
          {stats.map(s => (
            <div key={s.label} className="bg-card border border-border rounded-lg p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">{s.label}</span>
                <s.icon className={`h-4 w-4 ${s.color}`} />
              </div>
              <p className="text-3xl font-bold font-mono text-foreground">{s.value}</p>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="bg-card border border-border rounded-lg p-6">
          <p className="text-xs font-mono text-muted-foreground mb-4">RECENT ACTIVITY</p>
          <div className="space-y-2 font-mono text-sm">
            {useSecurityStore.getState().logs.slice(0, 5).map(log => (
              <div key={log.id} className="flex items-start gap-3 py-2 border-b border-border/50 last:border-0">
                <span className="text-muted-foreground text-xs whitespace-nowrap">
                  {log.timestamp.toLocaleTimeString()}
                </span>
                <ThreatBadge level={log.threatLevel} />
                <span className="text-foreground/80">{log.action}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
