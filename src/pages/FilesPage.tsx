import { Download, Shield } from 'lucide-react';
import { useSecurityStore } from '@/store/securityStore';
import DashboardLayout from '@/components/DashboardLayout';
import { toast } from 'sonner';

const FilesPage = () => {
  const { files } = useSecurityStore();

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-1">My Files</h1>
          <p className="text-muted-foreground text-sm">Encrypted file vault — encryption modes update dynamically</p>
        </div>

        {files.length === 0 ? (
          <div className="bg-card border border-border rounded-lg p-12 text-center">
            <Shield className="h-12 w-12 mx-auto mb-4 text-muted-foreground/30" />
            <p className="text-muted-foreground">No files uploaded yet. Upload a file to get started.</p>
          </div>
        ) : (
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border text-xs font-mono text-muted-foreground uppercase">
                  <th className="text-left p-4">File Name</th>
                  <th className="text-left p-4">Encryption</th>
                  <th className="text-left p-4">Last Modified</th>
                  <th className="text-left p-4">Re-encryptions</th>
                  <th className="text-right p-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {files.map(f => (
                  <tr key={f.id} className="border-b border-border/50 hover:bg-accent/30 transition-colors">
                    <td className="p-4 text-sm text-foreground font-mono">{f.name}</td>
                    <td className="p-4">
                      <span className={`text-xs font-mono px-2 py-1 rounded border ${
                        f.encryptionMode === 'AES-128' ? 'border-threat-normal/30 text-threat-normal' :
                        f.encryptionMode === 'AES-256' ? 'border-threat-suspicious/30 text-threat-suspicious' :
                        'border-threat-attack/30 text-threat-attack'
                      }`}>
                        {f.encryptionMode}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-muted-foreground font-mono">{f.lastModified.toLocaleString()}</td>
                    <td className="p-4 text-sm font-mono text-foreground">{f.reEncryptionCount}</td>
                    <td className="p-4 text-right">
                      <button
                        onClick={() => toast.info('File download simulated.')}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Download className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default FilesPage;
