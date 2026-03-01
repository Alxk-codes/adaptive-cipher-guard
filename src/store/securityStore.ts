import { create } from 'zustand';

export type ThreatLevel = 'Normal' | 'Suspicious' | 'Attack';
export type EncryptionMode = 'AES-128' | 'AES-256' | 'AES-256-Rotated';

export interface FileRecord {
  id: string;
  name: string;
  encryptionMode: EncryptionMode;
  createdAt: Date;
  lastModified: Date;
  reEncryptionCount: number;
  size: number;
}

export interface LogEntry {
  id: string;
  timestamp: Date;
  eventType: string;
  threatLevel: ThreatLevel;
  action: string;
}

export interface AttackDataPoint {
  attempt: number;
  threatScore: number;
}

interface SecurityStore {
  isAuthenticated: boolean;
  username: string;
  threatLevel: ThreatLevel;
  encryptionMode: EncryptionMode;
  files: FileRecord[];
  logs: LogEntry[];
  failedAttempts: number;
  reEncryptionCount: number;
  attackData: AttackDataPoint[];
  isAttacking: boolean;

  login: (username: string, password: string) => boolean;
  logout: () => void;
  uploadFile: (name: string, size: number) => void;
  addLog: (eventType: string, threatLevel: ThreatLevel, action: string) => void;
  setThreatLevel: (level: ThreatLevel) => void;
  simulateBruteForce: () => Promise<void>;
  simulateReplayAttack: () => Promise<void>;
  resetAttack: () => void;
}

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

let logIdCounter = 0;
const makeLogId = () => `log-${++logIdCounter}`;
let fileIdCounter = 0;
const makeFileId = () => `file-${++fileIdCounter}`;

export const useSecurityStore = create<SecurityStore>((set, get) => ({
  isAuthenticated: false,
  username: '',
  threatLevel: 'Normal',
  encryptionMode: 'AES-128',
  files: [],
  logs: [
    { id: 'log-init-1', timestamp: new Date(Date.now() - 3600000), eventType: 'System', threatLevel: 'Normal', action: 'System initialized. Encryption engine online.' },
    { id: 'log-init-2', timestamp: new Date(Date.now() - 1800000), eventType: 'System', threatLevel: 'Normal', action: 'ML threat model loaded successfully.' },
  ],
  failedAttempts: 0,
  reEncryptionCount: 0,
  attackData: [],
  isAttacking: false,

  login: (username, password) => {
    if (username && password.length >= 4) {
      set({ isAuthenticated: true, username });
      get().addLog('Auth', 'Normal', `User "${username}" logged in successfully.`);
      return true;
    }
    get().addLog('Auth', 'Normal', 'Failed login attempt.');
    return false;
  },

  logout: () => {
    set({ isAuthenticated: false, username: '', threatLevel: 'Normal', encryptionMode: 'AES-128' });
  },

  uploadFile: (name, size) => {
    const { encryptionMode } = get();
    const file: FileRecord = {
      id: makeFileId(),
      name,
      encryptionMode,
      createdAt: new Date(),
      lastModified: new Date(),
      reEncryptionCount: 0,
      size,
    };
    set(s => ({ files: [...s.files, file] }));
    get().addLog('Upload', 'Normal', `File "${name}" encrypted with ${encryptionMode} and stored.`);
  },

  addLog: (eventType, threatLevel, action) => {
    const entry: LogEntry = { id: makeLogId(), timestamp: new Date(), eventType, threatLevel, action };
    set(s => ({ logs: [entry, ...s.logs] }));
  },

  setThreatLevel: (level) => {
    const mode: EncryptionMode = level === 'Normal' ? 'AES-128' : level === 'Suspicious' ? 'AES-256' : 'AES-256-Rotated';
    set(s => ({
      threatLevel: level,
      encryptionMode: mode,
      files: s.files.map(f => ({
        ...f,
        encryptionMode: mode,
        lastModified: new Date(),
        reEncryptionCount: level !== 'Normal' ? f.reEncryptionCount + 1 : f.reEncryptionCount,
      })),
      reEncryptionCount: level !== 'Normal' ? s.reEncryptionCount + s.files.length : s.reEncryptionCount,
    }));
  },

  simulateBruteForce: async () => {
    set({ isAttacking: true, attackData: [] });
    const { addLog, setThreatLevel } = get();
    
    for (let i = 1; i <= 20; i++) {
      await sleep(300);
      const threatScore = Math.min(i * 5 + Math.random() * 10, 100);
      set(s => ({
        failedAttempts: s.failedAttempts + 1,
        attackData: [...s.attackData, { attempt: i, threatScore }],
      }));
      
      if (i === 5) {
        addLog('Attack', 'Normal', 'Multiple wrong key attempts detected.');
      }
      if (i === 10) {
        addLog('Attack', 'Suspicious', 'Threat escalated to Suspicious. Upgrading to AES-256.');
        setThreatLevel('Suspicious');
      }
      if (i === 15) {
        addLog('Attack', 'Attack', 'Active attack confirmed! Keys rotated. AES-256-Rotated engaged.');
        setThreatLevel('Attack');
      }
    }
    
    addLog('Defense', 'Attack', 'Brute force attack neutralized. All files re-encrypted.');
    set({ isAttacking: false });
  },

  simulateReplayAttack: async () => {
    set({ isAttacking: true, attackData: [] });
    const { addLog, setThreatLevel } = get();
    
    for (let i = 1; i <= 15; i++) {
      await sleep(400);
      const threatScore = Math.min(i * 7 + Math.random() * 8, 100);
      set(s => ({
        attackData: [...s.attackData, { attempt: i, threatScore }],
      }));

      if (i === 4) {
        addLog('Attack', 'Normal', 'Abnormal download frequency detected.');
      }
      if (i === 8) {
        addLog('Attack', 'Suspicious', 'Replay pattern identified. Upgrading encryption.');
        setThreatLevel('Suspicious');
      }
      if (i === 12) {
        addLog('Attack', 'Attack', 'Replay attack confirmed! Rotating keys and re-encrypting.');
        setThreatLevel('Attack');
      }
    }

    addLog('Defense', 'Attack', 'Replay attack neutralized. System secured.');
    set({ isAttacking: false });
  },

  resetAttack: () => {
    set({ attackData: [], threatLevel: 'Normal', encryptionMode: 'AES-128', failedAttempts: 0 });
    get().addLog('System', 'Normal', 'Threat level reset to Normal. AES-128 restored.');
    set(s => ({
      files: s.files.map(f => ({ ...f, encryptionMode: 'AES-128' as EncryptionMode })),
    }));
  },
}));
