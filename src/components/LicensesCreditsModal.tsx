import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Copy, Check, Search, ShieldCheck, Sparkles, Code2, Type, Globe2 } from 'lucide-react';
import { 
  DEPENDENCY_LICENSES, 
  AI_CREDITS, 
  TYPOGRAPHY_CREDITS, 
  APP_LEGAL_OVERVIEW 
} from '../data/creditsData';

interface LicensesCreditsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type TabKey = 'overview' | 'models' | 'software' | 'fonts' | 'landmarks';

const LANDMARKS_LIST = [
  { name: 'Eiffel Tower', country: 'France', type: 'Architectural Heritage' },
  { name: 'Taj Mahal', country: 'India', type: 'UNESCO World Heritage' },
  { name: 'Statue of Liberty', country: 'United States', type: 'National Monument' },
  { name: 'Great Wall of China', country: 'China', type: 'UNESCO World Heritage' },
  { name: 'Machu Picchu', country: 'Peru', type: 'Ancient Citadel' },
  { name: 'Colosseum', country: 'Italy', type: 'Classical Amphitheatre' },
  { name: 'Pyramids of Giza', country: 'Egypt', type: 'Ancient Wonder' },
  { name: 'Sydney Opera House', country: 'Australia', type: 'Modern Architectural Landmark' },
  { name: 'Mount Fuji', country: 'Japan', type: 'Sacred Stratovolcano' },
  { name: 'Santorini Caldera', country: 'Greece', type: 'Aegean Volcanic Archipelago' },
  { name: 'Stonehenge', country: 'United Kingdom', type: 'Prehistoric Megalith' },
  { name: 'Petra Rose City', country: 'Jordan', type: 'Nabataean Sandstone Wonder' },
  { name: 'Burj Khalifa', country: 'United Arab Emirates', type: 'Modern Engineering Superstructure' },
  { name: 'Niagara Falls', country: 'Canada & USA', type: 'Natural Glacial Cataract' },
  { name: 'Mount Everest', country: 'Nepal & Tibet', type: 'Himalayan Apex' },
  { name: 'Golden Gate Bridge', country: 'United States', type: 'Art Deco Suspension Span' },
  { name: 'Acropolis of Athens', country: 'Greece', type: 'Classical Sanctuary' },
  { name: 'Angkor Wat', country: 'Cambodia', type: 'Khmer Temple Complex' },
  { name: 'Sagrada Família', country: 'Spain', type: 'Gaudí Modernist Basilica' },
  { name: 'Venice Grand Canal', country: 'Italy', type: 'Lagoon Maritime City' },
  { name: 'Victoria Falls', country: 'Zambia & Zimbabwe', type: 'Zambezi River Cataract' },
  { name: 'Galápagos Islands', country: 'Ecuador', type: 'Volcanic Biosphere Reserve' },
  { name: 'Easter Island Moai', country: 'Chile', type: 'Rapa Nui Monolithic Heritage' },
  { name: 'Chichén Itzá', country: 'Mexico', type: 'Maya Civilization Center' },
  { name: 'Grand Prismatic Spring', country: 'United States', type: 'Hydrothermal Wonder' },
  { name: 'Aurora Borealis', country: 'Iceland', type: 'Polar Geomagnetic Phenomenon' },
  { name: 'Serengeti Plains', country: 'Tanzania', type: 'Ecological Migration Corridor' },
  { name: 'Banff National Park', country: 'Canada', type: 'Rocky Mountain Wilderness' },
  { name: 'Salar de Uyuni', country: 'Bolivia', type: 'Prehistoric Salt Flats' },
  { name: 'Bora Bora Atoll', country: 'French Polynesia', type: 'Pacific Coral Lagoon' }
];

export default function LicensesCreditsModal({ isOpen, onClose }: LicensesCreditsModalProps) {
  const [activeTab, setActiveTab] = useState<TabKey>('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [expandedLicense, setExpandedLicense] = useState<string | null>(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const copyToClipboard = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey((curr) => (curr === key ? null : curr));
    }, 2000);
  };

  const filteredDependencies = DEPENDENCY_LICENSES.filter((dep) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      dep.name.toLowerCase().includes(q) ||
      dep.license.toLowerCase().includes(q) ||
      dep.author.toLowerCase().includes(q) ||
      dep.description.toLowerCase().includes(q)
    );
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="credits-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            key="credits-modal-content"
            initial={{ scale: 0.96, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: 12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border border-gray-900 w-full max-w-4xl h-[90vh] max-h-[820px] flex flex-col rounded-none shadow-2xl relative overflow-hidden text-gray-900 font-sans"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="licenses-credits-title"
          >
            {/* Top Header Bar */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 shrink-0 bg-white">
              <div className="flex items-center gap-3">
                <h2 id="licenses-credits-title" className="text-xl sm:text-2xl font-bold font-display tracking-tight text-gray-900 leading-none">
                  Licenses & Credits
                </h2>
                <span className="hidden sm:inline text-xs text-gray-400 font-mono">
                  v{APP_LEGAL_OVERVIEW.version} · MIT
                </span>
              </div>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="p-2 border border-gray-200 hover:border-gray-900 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Tabs Bar */}
            <div className="flex items-center gap-2 px-6 py-3 border-b border-gray-200 overflow-x-auto shrink-0 bg-gray-50/50">
              <button
                onClick={() => setActiveTab('overview')}
                className={`flex items-center gap-2 px-3 py-1.5 text-xs uppercase tracking-wider font-medium transition-colors whitespace-nowrap ${
                  activeTab === 'overview'
                    ? 'border-b-2 border-gray-900 text-gray-900 font-semibold'
                    : 'text-gray-500 hover:text-gray-900 border-b-2 border-transparent'
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                Overview
              </button>

              <button
                onClick={() => setActiveTab('models')}
                className={`flex items-center gap-2 px-3 py-1.5 text-xs uppercase tracking-wider font-medium transition-colors whitespace-nowrap ${
                  activeTab === 'models'
                    ? 'border-b-2 border-gray-900 text-gray-900 font-semibold'
                    : 'text-gray-500 hover:text-gray-900 border-b-2 border-transparent'
                }`}
              >
                <Sparkles className="w-4 h-4" />
                AI & Models
              </button>

              <button
                onClick={() => setActiveTab('software')}
                className={`flex items-center gap-2 px-3 py-1.5 text-xs uppercase tracking-wider font-medium transition-colors whitespace-nowrap ${
                  activeTab === 'software'
                    ? 'border-b-2 border-gray-900 text-gray-900 font-semibold'
                    : 'text-gray-500 hover:text-gray-900 border-b-2 border-transparent'
                }`}
              >
                <Code2 className="w-4 h-4" />
                Open Source
              </button>

              <button
                onClick={() => setActiveTab('fonts')}
                className={`flex items-center gap-2 px-3 py-1.5 text-xs uppercase tracking-wider font-medium transition-colors whitespace-nowrap ${
                  activeTab === 'fonts'
                    ? 'border-b-2 border-gray-900 text-gray-900 font-semibold'
                    : 'text-gray-500 hover:text-gray-900 border-b-2 border-transparent'
                }`}
              >
                <Type className="w-4 h-4" />
                Typography
              </button>

              <button
                onClick={() => setActiveTab('landmarks')}
                className={`flex items-center gap-2 px-3 py-1.5 text-xs uppercase tracking-wider font-medium transition-colors whitespace-nowrap ${
                  activeTab === 'landmarks'
                    ? 'border-b-2 border-gray-900 text-gray-900 font-semibold'
                    : 'text-gray-500 hover:text-gray-900 border-b-2 border-transparent'
                }`}
              >
                <Globe2 className="w-4 h-4" />
                Destinations
              </button>
            </div>

            {/* Scrollable Body Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* TAB 1: OVERVIEW */}
              {activeTab === 'overview' && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="border border-gray-200 p-6 space-y-4 bg-gray-50/30">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-gray-200 pb-4">
                      <div>
                        <h3 className="text-xl font-bold font-display text-gray-900">
                          {APP_LEGAL_OVERVIEW.appName}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">
                          {APP_LEGAL_OVERVIEW.copyright}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <span>Standard Open Source</span>
                        <span>·</span>
                        <span className="font-mono font-medium text-gray-900">{APP_LEGAL_OVERVIEW.license}</span>
                      </div>
                    </div>

                    <p className="text-sm text-gray-700 leading-relaxed">
                      Remix Anywhere is an interactive 3D WebGL spherical gallery celebrating world landmarks, 
                      architecture, and human culture. By combining Three.js spherical geometry with Google Gemini 
                      multimodal intelligence, visitors can explore cultural wonders and synthesize bespoke travel 
                      visualizations.
                    </p>

                    <div className="pt-2 flex flex-wrap gap-4 text-xs text-gray-500 border-t border-gray-200">
                      <div>
                        <span className="font-medium text-gray-900">Runtime:</span> React 19 + Express + Three.js
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">AI Integration:</span> Google GenAI TypeScript SDK
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">Build Tooling:</span> Vite 6
                      </div>
                    </div>
                  </div>

                  {/* Project MIT License Block */}
                  <div className="border border-gray-200 p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900">
                        Application License Text (MIT)
                      </h4>
                      <button
                        onClick={() =>
                          copyToClipboard(
                            'project-license',
                            `MIT License\n\nCopyright (c) 2025-2026 Remix Anywhere Contributors\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction...`
                          )
                        }
                        className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-gray-900 px-2.5 py-1 transition-colors"
                      >
                        {copiedKey === 'project-license' ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy License</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="p-4 bg-gray-50 border border-gray-100 text-[11px] font-mono text-gray-600 whitespace-pre-wrap leading-relaxed max-h-48 overflow-y-auto">
{`MIT License

Copyright (c) 2025-2026 Remix Anywhere Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}
                    </pre>
                  </div>

                  {/* Privacy & Responsible Use Notice */}
                  <div className="border border-gray-200 p-6 space-y-2">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900">
                      Ethical AI & Data Privacy Commitment
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      All uploaded photos are processed exclusively for your interactive session and are not permanently 
                      stored on our servers. Images are evaluated in compliance with Google's Prohibited Use Policy. 
                      Users retain full rights to their original photography.
                    </p>
                    <div className="pt-2 flex flex-wrap gap-4 text-xs">
                      <a
                        href="https://policies.google.com/terms/generative-ai/use-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-gray-900 underline hover:text-gray-600 transition-colors"
                      >
                        Prohibited Use Policy
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <a
                        href="https://ai.google.dev/gemini-api/terms"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-gray-900 underline hover:text-gray-600 transition-colors"
                      >
                        Google Gemini API Terms
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: AI & MODELS */}
              {activeTab === 'models' && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="border border-gray-200 p-4 bg-gray-50/50">
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Remix Anywhere uses official Google Gemini foundational models and SDKs to deliver real-time visual 
                      synthesis, geographical intelligence, and cinematic video rendering.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {AI_CREDITS.map((model) => (
                      <div key={model.name} className="border border-gray-200 p-5 flex flex-col justify-between space-y-3 bg-white">
                        <div className="space-y-2">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <h4 className="text-sm font-bold font-display text-gray-900">{model.name}</h4>
                              <p className="text-[11px] text-gray-500">{model.provider}</p>
                            </div>
                            <span className="text-[10px] font-mono text-gray-500 bg-gray-100 px-2 py-0.5 border border-gray-200">
                              {model.role.split(' ')[0]}
                            </span>
                          </div>
                          <p className="text-xs text-gray-700 leading-relaxed">{model.description}</p>
                        </div>

                        <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                          <span className="text-gray-500 text-[11px]">{model.role}</span>
                          <a
                            href={model.termsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-gray-900 hover:text-gray-600 font-medium"
                          >
                            Terms & Specs
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border border-gray-200 p-5 space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">
                      Multimodal Generative Attribution
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      All travel imagery and videos synthesized within the 3D sphere are generated using Google DeepMind's 
                      Gemini model family. Video synthesis is powered by Gemini Omni (1.1-flash) via asynchronous interaction 
                      streaming and media polling.
                    </p>
                  </div>
                </div>
              )}

              {/* TAB 3: OPEN SOURCE PACKAGES */}
              {activeTab === 'software' && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  {/* Search and stats bar */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border border-gray-200 p-3 bg-gray-50/50">
                    <div className="relative flex-1">
                      <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Filter packages by name, author, or license..."
                        className="w-full pl-9 pr-4 py-1.5 text-xs bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-900"
                      />
                    </div>
                    <div className="text-xs text-gray-500 font-mono shrink-0 px-1">
                      Showing {filteredDependencies.length} of {DEPENDENCY_LICENSES.length} packages
                    </div>
                  </div>

                  {/* List of dependencies */}
                  <div className="space-y-3">
                    {filteredDependencies.map((dep) => {
                      const isExpanded = expandedLicense === dep.name;
                      return (
                        <div key={dep.name} className="border border-gray-200 p-4 bg-white space-y-3">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-mono font-bold text-sm text-gray-900">{dep.name}</span>
                                <span className="text-xs text-gray-400 font-mono">{dep.version}</span>
                                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 bg-gray-100 border border-gray-200 text-gray-800">
                                  {dep.license}
                                </span>
                              </div>
                              <p className="text-xs text-gray-500 mt-0.5">{dep.author}</p>
                            </div>

                            <div className="flex items-center gap-2">
                              <a
                                href={dep.homepage}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-gray-900 px-2.5 py-1 transition-colors"
                              >
                                <span>Website</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                              <button
                                onClick={() => setExpandedLicense(isExpanded ? null : dep.name)}
                                className="text-xs text-gray-900 hover:text-gray-600 border border-gray-200 hover:border-gray-900 px-2.5 py-1 transition-colors font-medium"
                              >
                                {isExpanded ? 'Hide License' : 'View License'}
                              </button>
                            </div>
                          </div>

                          <p className="text-xs text-gray-700 leading-relaxed">{dep.description}</p>

                          {/* Expandable License Details */}
                          {isExpanded && (
                            <div className="mt-3 pt-3 border-t border-gray-100 space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-[11px] font-mono text-gray-500 uppercase tracking-wider">
                                  Full {dep.license} Text
                                </span>
                                <button
                                  onClick={() => copyToClipboard(dep.name, dep.fullLicenseText)}
                                  className="flex items-center gap-1 text-[11px] text-gray-600 hover:text-gray-900"
                                >
                                  {copiedKey === dep.name ? (
                                    <>
                                      <Check className="w-3 h-3 text-emerald-600" />
                                      <span>Copied</span>
                                    </>
                                  ) : (
                                    <>
                                      <Copy className="w-3 h-3" />
                                      <span>Copy</span>
                                    </>
                                  )}
                                </button>
                              </div>
                              <pre className="p-3 bg-gray-50 border border-gray-200 text-[10px] font-mono text-gray-700 whitespace-pre-wrap leading-relaxed max-h-48 overflow-y-auto">
                                {dep.fullLicenseText}
                              </pre>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* TAB 4: TYPOGRAPHY */}
              {activeTab === 'fonts' && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  {TYPOGRAPHY_CREDITS.map((font) => (
                    <div key={font.name} className="border border-gray-200 p-6 space-y-4 bg-white">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-4">
                        <div>
                          <h3 className="text-2xl font-bold font-display text-gray-900">{font.name}</h3>
                          <p className="text-xs text-gray-500 mt-0.5">{font.designer}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono text-gray-600 bg-gray-50 px-2 py-1 border border-gray-200">
                            {font.license}
                          </span>
                          <a
                            href={font.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-gray-900 underline hover:text-gray-600"
                          >
                            Google Fonts
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>

                      <p className="text-xs text-gray-700 leading-relaxed">{font.description}</p>

                      <div className="p-4 bg-gray-50 border border-gray-200 space-y-2">
                        <p className="text-[11px] font-mono text-gray-400 uppercase tracking-widest">Typeface Sample</p>
                        <p className="text-2xl sm:text-3xl font-display text-gray-900 tracking-tight">
                          The quick brown fox jumps over the lazy dog. 1234567890
                        </p>
                        <p className="text-xs text-gray-500 font-sans">
                          MuseoModerno is deployed under the SIL Open Font License, Version 1.1, allowing free commercial and non-commercial distribution.
                        </p>
                      </div>
                    </div>
                  ))}

                  <div className="border border-gray-200 p-5 space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">
                      System Font Stack
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Prose and interface controls utilize a clean, legible system sans-serif hierarchy (Apple System, BlinkMacSystemFont, Segoe UI, Roboto) for rapid, accessible reading across all desktop and mobile viewports.
                    </p>
                  </div>
                </div>
              )}

              {/* TAB 5: LANDMARKS & ATTRIBUTIONS */}
              {activeTab === 'landmarks' && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div className="border border-gray-200 p-4 bg-gray-50/50">
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Remix Anywhere features 48 curated destinations spanning all inhabited continents, celebrating 
                      UNESCO World Heritage sites, classical antiquities, and natural wonders of the world.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {LANDMARKS_LIST.map((lm, idx) => (
                      <div key={idx} className="border border-gray-200 p-3 bg-white space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-xs text-gray-900">{lm.name}</span>
                          <span className="text-[10px] font-mono text-gray-400">#{idx + 1}</span>
                        </div>
                        <div className="text-[11px] text-gray-500 flex items-center gap-1.5">
                          <span>{lm.country}</span>
                          <span>·</span>
                          <span className="truncate">{lm.type}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border border-gray-200 p-4 text-xs text-gray-500 leading-relaxed">
                    Landmark historical overviews are compiled with the assistance of Google Gemini and verified against UNESCO and national heritage archives.
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Footer Bar */}
            <div className="px-6 py-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3 bg-white shrink-0">
              <p className="text-[11px] text-gray-500 text-center sm:text-left">
                © 2025-2026 Remix Anywhere. Open-source under the MIT License.
              </p>
              <div className="flex items-center gap-4">
                <button
                  onClick={onClose}
                  className="px-5 py-2 border border-gray-900 text-xs uppercase tracking-wider font-medium text-white bg-gray-900 hover:bg-black transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
