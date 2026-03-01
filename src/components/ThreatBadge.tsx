import { ThreatLevel } from '@/store/securityStore';

interface ThreatBadgeProps {
  level: ThreatLevel;
  size?: 'sm' | 'lg';
}

const ThreatBadge = ({ level, size = 'sm' }: ThreatBadgeProps) => {
  const colorClass = level === 'Normal' ? 'bg-threat-normal/15 text-threat-normal border-threat-normal/30' 
    : level === 'Suspicious' ? 'bg-threat-suspicious/15 text-threat-suspicious border-threat-suspicious/30' 
    : 'bg-threat-attack/15 text-threat-attack border-threat-attack/30';
  
  const glowClass = level === 'Normal' ? '' : level === 'Suspicious' ? 'glow-orange' : 'glow-red';
  const sizeClass = size === 'lg' ? 'px-6 py-3 text-lg' : 'px-3 py-1 text-xs';

  return (
    <span className={`inline-flex items-center gap-2 border rounded-md font-mono font-semibold ${colorClass} ${glowClass} ${sizeClass}`}>
      <span className={`h-2 w-2 rounded-full ${level === 'Normal' ? 'bg-threat-normal' : level === 'Suspicious' ? 'bg-threat-suspicious animate-pulse-glow' : 'bg-threat-attack animate-pulse-glow'}`} />
      {level.toUpperCase()}
    </span>
  );
};

export default ThreatBadge;
