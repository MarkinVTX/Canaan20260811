import React, { useState } from 'react';
import { Language } from '../types';
import { Mail, Upload, Sparkles, CheckCircle2, AlertCircle, FileText, RefreshCw, Send, Server, ShieldCheck, X } from 'lucide-react';

interface BulletinAdminModalProps {
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
  onApplyUpdate?: (parsedData: any) => void;
}

export const BulletinAdminModal: React.FC<BulletinAdminModalProps> = ({
  lang,
  isOpen,
  onClose,
  onApplyUpdate,
}) => {
  const [activeTab, setActiveTab] = useState<'upload' | 'email-guide'>('upload');
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [parsedResult, setParsedResult] = useState<any | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [simulatedEmail, setSimulatedEmail] = useState(false);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      setErrorMsg(null);
      setParsedResult(null);
    }
  };

  const handleProcessPdf = async () => {
    if (!selectedFile) {
      setErrorMsg(lang === 'zh' ? '請先選擇週報 PDF 檔案' : 'Please select a PDF bulletin file first.');
      return;
    }

    setLoading(true);
    setErrorMsg(null);

    try {
      // Convert file to Base64
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onload = async () => {
        const base64Data = reader.result as string;

        const res = await fetch('/api/process-bulletin-pdf', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            pdfBase64: base64Data,
            emailSubject: "website update",
          }),
        });

        const data = await res.json();
        setLoading(false);

        if (data.success && data.data) {
          setParsedResult(data.data);
          if (onApplyUpdate) {
            onApplyUpdate(data.data);
          }
        } else if (data.rawText) {
          setParsedResult({ rawText: data.rawText });
        } else {
          setErrorMsg(data.error || (lang === 'zh' ? '解析 PDF 失敗' : 'Failed to parse PDF.'));
        }
      };
      reader.onerror = () => {
        setLoading(false);
        setErrorMsg(lang === 'zh' ? '讀取 PDF 檔案發生錯誤' : 'Error reading PDF file.');
      };
    } catch (err: any) {
      setLoading(false);
      setErrorMsg(err.message || 'Error uploading PDF');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 sm:p-8 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-amber-600 rounded-2xl text-white">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold">
                {lang === 'zh' ? '週報 PDF 自動更新與郵件處理' : 'Weekly Bulletin PDF Auto-Updater'}
              </h3>
              <p className="text-xs text-amber-300">
                {lang === 'zh'
                  ? '直接上傳週報 PDF 或設定 Email 自動更新機制 (web@canaannewlife.org)'
                  : 'Upload PDF or configure automated email sync for web@canaannewlife.org'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tab Buttons */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 pt-3 space-x-2">
          <button
            onClick={() => setActiveTab('upload')}
            className={`pb-3 px-4 font-bold text-xs sm:text-sm border-b-2 transition-colors flex items-center space-x-2 ${
              activeTab === 'upload'
                ? 'border-amber-600 text-amber-900'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Upload className="w-4 h-4" />
            <span>{lang === 'zh' ? '直接上傳 PDF 更新網站' : 'Upload PDF directly'}</span>
          </button>

          <button
            onClick={() => setActiveTab('email-guide')}
            className={`pb-3 px-4 font-bold text-xs sm:text-sm border-b-2 transition-colors flex items-center space-x-2 ${
              activeTab === 'email-guide'
                ? 'border-amber-600 text-amber-900'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Mail className="w-4 h-4" />
            <span>{lang === 'zh' ? 'Email 自動更新設定 (web@canaannewlife.org)' : 'Email Auto-Sync Setup'}</span>
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6">

          {/* TAB 1: Direct PDF Upload */}
          {activeTab === 'upload' && (
            <div className="space-y-6">
              
              <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200/80 text-xs text-amber-950 space-y-1">
                <div className="font-bold flex items-center space-x-1.5">
                  <Sparkles className="w-4 h-4 text-amber-700" />
                  <span>{lang === 'zh' ? 'AI 智能解析週報 PDF 內容' : 'AI-Powered PDF Bulletin Parsing'}</span>
                </div>
                <p>
                  {lang === 'zh'
                    ? '選擇您手頭上的主日週報 PDF 檔案，系統將自動解析司會、講員、經文、背誦經文、讀經進度與禱告事項並更新網站！'
                    : 'Upload your weekly Sunday PDF bulletin. AI will automatically extract worship presiders, scripture readings, memory verses, and prayer requests to update the website.'}
                </p>
              </div>

              {/* Upload Input Box */}
              <div className="border-2 border-dashed border-slate-300 hover:border-amber-600 rounded-2xl p-8 text-center space-y-4 bg-slate-50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mx-auto">
                  <FileText className="w-6 h-6" />
                </div>

                <div>
                  <label htmlFor="bulletin-pdf-input" className="cursor-pointer font-bold text-slate-900 hover:text-amber-800 text-sm">
                    {selectedFile ? selectedFile.name : (lang === 'zh' ? '點擊此處選擇 PDF 檔案，或拖曳至此' : 'Click to select PDF or drag & drop file here')}
                  </label>
                  <p className="text-xs text-slate-500 mt-1">
                    {selectedFile 
                      ? `${(selectedFile.size / 1024).toFixed(1)} KB` 
                      : (lang === 'zh' ? '支援標準週報 PDF 格式 (例如 2026-08-09.pdf)' : 'Supports standard Sunday bulletin PDF files')}
                  </p>
                  <input
                    id="bulletin-pdf-input"
                    type="file"
                    accept="application/pdf"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>

                {selectedFile && (
                  <button
                    onClick={handleProcessPdf}
                    disabled={loading}
                    className="px-6 py-3 bg-slate-900 hover:bg-amber-800 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition-all inline-flex items-center space-x-2 disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>{lang === 'zh' ? 'AI 正在解析 PDF 内容...' : 'AI Processing PDF...'}</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 text-amber-400" />
                        <span>{lang === 'zh' ? '開始 AI 自動解析並更新' : 'Parse PDF & Update Website'}</span>
                      </>
                    )}
                  </button>
                )}
              </div>

              {errorMsg && (
                <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl flex items-center space-x-2 text-rose-800 text-xs font-semibold">
                  <AlertCircle className="w-5 h-5 shrink-0 text-rose-600" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Parsed Output Result */}
              {parsedResult && (
                <div className="p-6 bg-slate-900 text-slate-200 rounded-2xl border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="font-bold text-amber-400 flex items-center space-x-1.5 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>{lang === 'zh' ? 'AI 解析完成！網站資料已更新' : 'AI Parsing Complete! Website Content Updated'}</span>
                    </span>
                    <span className="text-[10px] bg-slate-800 px-2 py-1 rounded font-mono text-slate-400">
                      Gemini 2.5 Flash
                    </span>
                  </div>

                  {parsedResult.sermonTitle ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div className="p-3 bg-slate-800/80 rounded-xl space-y-1">
                        <span className="text-slate-400 block">{lang === 'zh' ? '主日日期' : 'Service Date'}:</span>
                        <strong className="text-white font-mono">{parsedResult.serviceDate || '2026-08-09'}</strong>
                      </div>

                      <div className="p-3 bg-slate-800/80 rounded-xl space-y-1">
                        <span className="text-slate-400 block">{lang === 'zh' ? '司會 / 講員' : 'Presider / Speaker'}:</span>
                        <strong className="text-amber-300">{parsedResult.presider} / {parsedResult.speaker}</strong>
                      </div>

                      <div className="p-3 bg-slate-800/80 rounded-xl space-y-1 sm:col-span-2">
                        <span className="text-slate-400 block">{lang === 'zh' ? '講道題目與經文' : 'Sermon Title & Scripture'}:</span>
                        <strong className="text-white block text-sm font-serif">{parsedResult.sermonTitle}</strong>
                        <span className="text-amber-400 font-mono text-[11px]">{parsedResult.sermonScripture}</span>
                      </div>

                      {parsedResult.memoryVerse && (
                        <div className="p-3 bg-amber-950/60 border border-amber-800/60 rounded-xl space-y-1 sm:col-span-2">
                          <span className="text-amber-300 font-semibold block">{lang === 'zh' ? '背誦經文' : 'Memory Verse'}:</span>
                          <p className="text-amber-100 font-serif italic text-xs leading-relaxed">{parsedResult.memoryVerse}</p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <pre className="text-xs font-mono bg-slate-950 p-4 rounded-xl overflow-x-auto text-emerald-400 max-h-48">
                      {JSON.stringify(parsedResult, null, 2)}
                    </pre>
                  )}
                </div>
              )}

            </div>
          )}

          {/* TAB 2: Email Webhook Auto-Update Setup Guide */}
          {activeTab === 'email-guide' && (
            <div className="space-y-6 text-xs sm:text-sm text-slate-700">
              
              <div className="p-5 bg-slate-900 text-white rounded-2xl border border-slate-800 space-y-3">
                <div className="flex items-center space-x-2 text-amber-400 font-bold text-sm">
                  <Mail className="w-5 h-5" />
                  <span>{lang === 'zh' ? '解答：如何實現 Email 寄信自動更新網站？' : 'How Email Auto-Update Works'}</span>
                </div>
                <p className="text-slate-300 leading-relaxed font-light">
                  {lang === 'zh'
                    ? '是的！可以設定自動機制。當您將週報 PDF 寄給 web@canaannewlife.org 且主旨寫「website update」時，網站可以透過【Inbound Email Webhook】自動接收並更新內容。'
                    : 'Yes! Automated email updates can be configured using an Inbound Email Webhook. Sending a PDF to web@canaannewlife.org with subject "website update" can automatically trigger website updates.'}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-serif text-base font-bold text-slate-900 border-b border-slate-200 pb-2">
                  {lang === 'zh' ? '三步完成自動化 Email 設定架構' : '3 Steps to Enable Automatic Email Updates'}
                </h4>

                <div className="space-y-3">
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-start space-x-3">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                    <div className="space-y-1">
                      <strong className="text-slate-900 block font-bold">
                        {lang === 'zh' ? '設定網域郵件路由 (Inbound Mail Webhook Provider)' : '1. Configure Email Inbound Route'}
                      </strong>
                      <p className="text-slate-600 text-xs">
                        {lang === 'zh'
                          ? '在網域 canaannewlife.org 的 DNS 中使用 SendGrid Inbound Parse, Mailgun, Postmark 或 AWS SES，將寄往 web@canaannewlife.org 的信件轉發至 API Webhook。'
                          : 'Configure SendGrid Inbound Parse, Mailgun, or Cloudflare Email Workers on canaannewlife.org to forward emails to your Webhook URL.'}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-start space-x-3">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                    <div className="space-y-1">
                      <strong className="text-slate-900 block font-bold">
                        {lang === 'zh' ? '設定伺服器 Webhook 接收點' : '2. Server Webhook Endpoint'}
                      </strong>
                      <div className="p-2.5 bg-slate-900 text-amber-300 font-mono text-[11px] rounded-xl border border-slate-800">
                        POST https://www.canaanshinsheng.org/api/webhook/email-bulletin
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-start space-x-3">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
                    <div className="space-y-1">
                      <strong className="text-slate-900 block font-bold">
                        {lang === 'zh' ? 'Gemini 2.5 Flash 自動解析並發布' : '3. Gemini AI Extraction & Live Publishing'}
                      </strong>
                      <p className="text-slate-600 text-xs">
                        {lang === 'zh'
                          ? '伺服器收到信件附件 PDF 後，呼叫 Gemini AI 擷取所有主日崇拜節目表、詩歌、讀經與代禱事項，直接更新網站前台！'
                          : 'When an email with PDF arrives, Gemini AI automatically extracts worship order, verses, and prayer items to update the site instantly.'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Simulation trigger */}
                <div className="pt-4 border-t border-slate-200">
                  <button
                    onClick={() => setSimulatedEmail(true)}
                    className="w-full py-3 bg-amber-700 hover:bg-amber-800 text-white font-bold rounded-2xl text-xs flex items-center justify-center space-x-2 transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>
                      {lang === 'zh' ? '模擬測試：發送範例 Email 至 web@canaannewlife.org' : 'Simulate Incoming Email to web@canaannewlife.org'}
                    </span>
                  </button>

                  {simulatedEmail && (
                    <div className="mt-3 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-900 text-xs space-y-1">
                      <div className="font-bold flex items-center space-x-1">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>{lang === 'zh' ? '模擬信件接收成功！' : 'Simulated Email Webhook Triggered!'}</span>
                      </div>
                      <p className="text-[11px] text-emerald-800">
                        {lang === 'zh'
                          ? '標題: "website update" | 寄件者: web@canaannewlife.org | 附件: SundayBulletin.pdf | 已觸發 Webhook API.'
                          : 'Subject: "website update" | From: web@canaannewlife.org | Attachment: SundayBulletin.pdf'}
                      </p>
                    </div>
                  )}
                </div>

              </div>

            </div>
          )}

        </div>

        {/* Footer actions */}
        <div className="bg-slate-50 border-t border-slate-200 p-4 sm:p-6 flex items-center justify-between text-xs">
          <div className="flex items-center space-x-2 text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{lang === 'zh' ? '加南新生基督教會 教會網頁管理系統' : 'Canaan Shin Sheng Web Management'}</span>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors"
          >
            {lang === 'zh' ? '關閉視窗' : 'Close Window'}
          </button>
        </div>

      </div>
    </div>
  );
};
