import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Lock, User } from 'lucide-react';
import { useSecurityStore } from '@/store/securityStore';
import { toast } from 'sonner';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const login = useSecurityStore(s => s.login);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isRegister) {
      toast.success('Account created. Logging in...');
    }
    const success = login(username, password);
    if (success) {
      toast.success('Access granted');
      navigate('/dashboard');
    } else {
      toast.error('Invalid credentials. Min 4 char password.');
    }
  };

  return (
    <div className="min-h-screen bg-background grid-bg flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <Shield className="h-8 w-8 text-primary" />
            <span className="font-bold text-2xl text-foreground">AMTE<span className="text-primary">Shield</span></span>
          </div>
          <p className="text-sm text-muted-foreground font-mono">SECURE ACCESS TERMINAL</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-8 glow-green">
          <div className="flex items-center gap-2 mb-6">
            <Lock className="h-4 w-4 text-primary" />
            <span className="text-sm font-mono text-muted-foreground">
              {isRegister ? 'REGISTER NEW IDENTITY' : 'AUTHENTICATE'}
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Username</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  className="w-full bg-muted border border-border rounded-md py-2.5 pl-10 pr-4 text-foreground font-mono text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Enter username"
                  required
                />
              </div>
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full bg-muted border border-border rounded-md py-2.5 pl-10 pr-4 text-foreground font-mono text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Enter password"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-2.5 rounded-md font-semibold hover:opacity-90 transition-opacity"
            >
              {isRegister ? 'Register' : 'Login'}
            </button>
          </form>

          <button
            onClick={() => setIsRegister(!isRegister)}
            className="w-full text-center text-sm text-muted-foreground mt-4 hover:text-foreground transition-colors"
          >
            {isRegister ? 'Already have access? Login' : 'New operator? Register'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
