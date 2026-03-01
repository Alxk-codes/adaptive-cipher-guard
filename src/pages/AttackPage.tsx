import { Swords, RotateCcw, Zap, RefreshCw } from 'lucide-react';
import { useSecurityStore } from '@/store/securityStore';
import DashboardLayout from '@/components/DashboardLayout';
import ThreatBadge from '@/components/ThreatBadge';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AttackPage = () => {
  const { simulateBruteForce, simulateReplayAttack, resetAttack, isAttacking, attackData, threatLevel } = useSecurityStore();

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-1">Attack Simulator</h1>
          <p className="text-muted-foreground text-sm">Demonstrate adaptive defense against simulated threats</p>
        </div>

        <div className="flex items-center gap-3">
          <ThreatBadge level={threatLevel} size="lg" />
          {isAttacking && (
            <span className="text-xs font-mono text-threat-attack animate-pulse-glow flex items-center gap-1">
              <Zap className="h-3 w-3" /> ATTACK IN PROGRESS
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="grid md:grid-cols-3 gap-4">
          <button
            onClick={simulateBruteForce}
            disabled={isAttacking}
            className="bg-card border border-border rounded-lg p-6 text-left hover:border-threat-attack/50 transition-colors disabled:opacity-50 group"
          >
            <Swords className="h-6 w-6 text-threat-attack mb-3 group-hover:animate-pulse-glow" />
            <h3 className="font-semibold text-foreground mb-1">Brute Force Attack</h3>
            <p className="text-xs text-muted-foreground">Simulates rapid incorrect key attempts</p>
          </button>

          <button
            onClick={simulateReplayAttack}
            disabled={isAttacking}
            className="bg-card border border-border rounded-lg p-6 text-left hover:border-threat-suspicious/50 transition-colors disabled:opacity-50 group"
          >
            <RotateCcw className="h-6 w-6 text-threat-suspicious mb-3 group-hover:animate-pulse-glow" />
            <h3 className="font-semibold text-foreground mb-1">Replay Attack</h3>
            <p className="text-xs text-muted-foreground">Simulates abnormal download frequency</p>
          </button>

          <button
            onClick={resetAttack}
            disabled={isAttacking}
            className="bg-card border border-border rounded-lg p-6 text-left hover:border-primary/50 transition-colors disabled:opacity-50 group"
          >
            <RefreshCw className="h-6 w-6 text-primary mb-3" />
            <h3 className="font-semibold text-foreground mb-1">Reset System</h3>
            <p className="text-xs text-muted-foreground">Restore Normal threat level</p>
          </button>
        </div>

        {/* Chart */}
        {attackData.length > 0 && (
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-xs font-mono text-muted-foreground mb-4">ATTACK ATTEMPTS vs THREAT SCORE</p>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={attackData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 14% 18%)" />
                <XAxis
                  dataKey="attempt"
                  stroke="hsl(215 15% 55%)"
                  tick={{ fontSize: 12, fontFamily: 'JetBrains Mono' }}
                  label={{ value: 'Attempt #', position: 'insideBottom', offset: -5, fill: 'hsl(215 15% 55%)' }}
                />
                <YAxis
                  stroke="hsl(215 15% 55%)"
                  tick={{ fontSize: 12, fontFamily: 'JetBrains Mono' }}
                  label={{ value: 'Threat Score', angle: -90, position: 'insideLeft', fill: 'hsl(215 15% 55%)' }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(220 18% 10%)',
                    border: '1px solid hsl(220 14% 18%)',
                    borderRadius: '6px',
                    fontFamily: 'JetBrains Mono',
                    fontSize: '12px',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="threatScore"
                  stroke="hsl(0 72% 51%)"
                  strokeWidth={2}
                  dot={{ fill: 'hsl(0 72% 51%)', r: 3 }}
                  activeDot={{ r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default AttackPage;
