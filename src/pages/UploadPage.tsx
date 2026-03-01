import { useState, useCallback } from 'react';
import { Upload, FileCheck, Shield } from 'lucide-react';
import { useSecurityStore } from '@/store/securityStore';
import DashboardLayout from '@/components/DashboardLayout';
import { toast } from 'sonner';

const UploadPage = () => {
  const { uploadFile, encryptionMode } = useSecurityStore();
  const [uploaded, setUploaded] = useState<{ name: string; id: string; time: string } | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = useCallback((file: File) => {
    uploadFile(file.name, file.size);
    const id = `FILE-${Date.now().toString(36).toUpperCase()}`;
    setUploaded({ name: file.name, id, time: new Date().toLocaleString() });
    toast.success(`${file.name} encrypted and stored.`);
  }, [uploadFile]);

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
  }, [handleFile]);

  const onFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) handleFile(e.target.files[0]);
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-1">Upload File</h1>
          <p className="text-muted-foreground text-sm">Files are automatically encrypted before storage</p>
        </div>

        <div
          onDragOver={e => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={onDrop}
          className={`border-2 border-dashed rounded-lg p-16 text-center transition-colors ${
            isDragging ? 'border-primary bg-primary/5' : 'border-border hover:border-muted-foreground'
          }`}
        >
          <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
          <p className="text-foreground font-medium mb-2">Drag & drop file here</p>
          <p className="text-sm text-muted-foreground mb-4">or click to browse</p>
          <label className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-md font-medium cursor-pointer hover:opacity-90 transition-opacity">
            Select File
            <input type="file" className="hidden" onChange={onFileSelect} />
          </label>
        </div>

        {uploaded && (
          <div className="bg-card border border-primary/30 rounded-lg p-6 glow-green">
            <div className="flex items-center gap-2 mb-4">
              <FileCheck className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">File encrypted successfully</span>
            </div>
            <div className="grid grid-cols-3 gap-4 font-mono text-sm">
              <div>
                <p className="text-muted-foreground text-xs mb-1">FILE ID</p>
                <p className="text-foreground">{uploaded.id}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs mb-1">ENCRYPTION</p>
                <p className="text-foreground flex items-center gap-1">
                  <Shield className="h-3 w-3 text-primary" />
                  {encryptionMode}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs mb-1">TIMESTAMP</p>
                <p className="text-foreground">{uploaded.time}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default UploadPage;
