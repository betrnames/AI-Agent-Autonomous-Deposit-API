'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { NodeExchangeIcon } from '@/components/icons';
import { ExternalLink, Github, Mail, Sun, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface EcosystemProject {
  name: string;
  description: string;
  link: string;
  category: string;
  tags?: string[];
}

const ecosystemProjects: EcosystemProject[] = [
  {
    name: 'Axios Client',
    description: 'TypeScript reference implementation for x402 payments with Axios',
    link: 'https://github.com/x402-ai/axios-402',
    category: 'clients',
    tags: ['TypeScript', 'SDK']
  },
  {
    name: 'Fetch Client',
    description: 'Native fetch API client for x402 protocol integration',
    link: 'https://github.com/x402-ai/fetch-402',
    category: 'clients',
    tags: ['JavaScript', 'SDK']
  },
  {
    name: 'Bino',
    description: 'Autonomous AI agent framework with built-in x402 support',
    link: 'https://github.com/heurist-network/bino',
    category: 'clients',
    tags: ['AI Agents', 'Framework']
  },
  {
    name: 'thirdweb SDK',
    description: 'Web3 SDK with native support for x402-compatible endpoints',
    link: 'https://thirdweb.com',
    category: 'clients',
    tags: ['Web3', 'SDK']
  },
  {
    name: 'Agent SDK',
    description: 'Comprehensive toolkit for building x402-enabled AI agents',
    link: 'https://x402.org',
    category: 'clients',
    tags: ['AI', 'SDK']
  },
  {
    name: 'Firecrawl',
    description: 'Web scraping API with x402 payment integration',
    link: 'https://firecrawl.dev',
    category: 'services',
    tags: ['API', 'Scraping']
  },
  {
    name: 'Neynar',
    description: 'Farcaster social data APIs powered by x402',
    link: 'https://neynar.com',
    category: 'services',
    tags: ['Social', 'Farcaster']
  },
  {
    name: 'Pinata',
    description: 'IPFS storage and gateway services via x402 protocol',
    link: 'https://pinata.cloud',
    category: 'services',
    tags: ['Storage', 'IPFS']
  },
  {
    name: 'Heurist AI',
    description: 'Decentralized AI inference with x402 micropayments',
    link: 'https://heurist.ai',
    category: 'services',
    tags: ['AI', 'Inference']
  },
  {
    name: 'Coinbase AI',
    description: 'AI-powered crypto services with x402 billing',
    link: 'https://coinbase.com',
    category: 'services',
    tags: ['AI', 'Trading']
  },
  {
    name: 'QuickNode',
    description: 'Blockchain infrastructure with x402 payment options',
    link: 'https://quicknode.com',
    category: 'services',
    tags: ['Infrastructure', 'RPC']
  },
  {
    name: 'Alchemy',
    description: 'Web3 development platform supporting x402 billing',
    link: 'https://alchemy.com',
    category: 'services',
    tags: ['Web3', 'Platform']
  },
  {
    name: '0x402.ai',
    description: 'Cloud infrastructure for x402 facilitators and payment processing',
    link: 'https://0x402.ai',
    category: 'infrastructure',
    tags: ['Cloud', 'Infrastructure']
  },
  {
    name: 'Faremeter',
    description: 'Lightweight framework for implementing x402 in any application',
    link: 'https://github.com/faremeter',
    category: 'infrastructure',
    tags: ['Framework', 'Tools']
  },
  {
    name: 'Heurist Mesh',
    description: 'Crypto skills library for AI agents with x402 integration',
    link: 'https://heurist.ai/mesh',
    category: 'infrastructure',
    tags: ['AI', 'Library']
  },
  {
    name: 'x402 Gateway',
    description: 'Universal payment gateway for x402 protocol integration',
    link: 'https://gateway.x402.org',
    category: 'infrastructure',
    tags: ['Gateway', 'Payments']
  },
  {
    name: 'PaymentVerifier',
    description: 'Smart contract verification tools for x402 transactions',
    link: 'https://github.com/x402-ai/verifier',
    category: 'infrastructure',
    tags: ['Smart Contracts', 'Security']
  },
  {
    name: 'x402 Middleware',
    description: 'Express and Next.js middleware for instant x402 integration',
    link: 'https://github.com/x402-ai/middleware',
    category: 'infrastructure',
    tags: ['Middleware', 'Node.js']
  },
  {
    name: 'CDP Facilitator',
    description: 'Coinbase fee-free USDC facilitator on Base network',
    link: 'https://coinbase.com',
    category: 'facilitators',
    tags: ['Base', 'USDC']
  },
  {
    name: 'Mogami',
    description: 'Free, developer-focused facilitator for testing and production',
    link: 'https://mogami.xyz',
    category: 'facilitators',
    tags: ['Free', 'Developer']
  },
  {
    name: 'PayAI',
    description: 'Multi-network facilitator supporting multiple chains and tokens',
    link: 'https://payai.xyz',
    category: 'facilitators',
    tags: ['Multi-chain', 'Tokens']
  },
  {
    name: 'Stripe x402',
    description: 'Bridge traditional payments to x402 with Stripe integration',
    link: 'https://stripe.com',
    category: 'facilitators',
    tags: ['Fiat', 'Bridge']
  },
  {
    name: 'Documentation',
    description: 'Complete x402 protocol specification and integration guides',
    link: 'https://x402.org/docs',
    category: 'resources',
    tags: ['Docs', 'Guides']
  },
  {
    name: 'Example Projects',
    description: 'Open-source examples and starter templates for x402',
    link: 'https://github.com/x402-ai/examples',
    category: 'resources',
    tags: ['Examples', 'Tutorials']
  },
  {
    name: 'Community Forum',
    description: 'Join the x402 developer community and get support',
    link: 'https://discord.gg/x402',
    category: 'resources',
    tags: ['Community', 'Support']
  },
  {
    name: 'Video Tutorials',
    description: 'Step-by-step video guides for building with x402',
    link: 'https://youtube.com/@x402',
    category: 'resources',
    tags: ['Videos', 'Learning']
  }
];

const categories = [
  { id: 'all', label: 'All Projects', count: ecosystemProjects.length },
  { id: 'clients', label: 'Client Integrations', count: ecosystemProjects.filter(p => p.category === 'clients').length },
  { id: 'services', label: 'Services & APIs', count: ecosystemProjects.filter(p => p.category === 'services').length },
  { id: 'infrastructure', label: 'Infrastructure', count: ecosystemProjects.filter(p => p.category === 'infrastructure').length },
  { id: 'facilitators', label: 'Facilitators', count: ecosystemProjects.filter(p => p.category === 'facilitators').length },
  { id: 'resources', label: 'Resources', count: ecosystemProjects.filter(p => p.category === 'resources').length }
];

export default function EcosystemPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = ecosystemProjects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black">
      <Header />

      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.1),transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
              <div className="h-2 w-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-blue-400 text-sm font-bold uppercase tracking-wider">x402 Ecosystem</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6">
              <span className="text-white">Built on</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-transparent bg-clip-text">
                x402 Protocol
              </span>
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Discover innovative projects, tools, and applications built by our growing community of partners and developers leveraging x402 technology.
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search projects, tools, or services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 bg-slate-800/60 border-blue-400/30 text-white placeholder:text-gray-500 focus-visible:ring-1 focus-visible:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          <TabsList className="w-full bg-slate-900/50 border border-slate-800 p-1 h-auto flex-wrap justify-start gap-2 mb-12">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wider"
              >
                {category.label}
                <Badge variant="secondary" className="ml-2 bg-slate-800 text-gray-400">
                  {category.count}
                </Badge>
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={selectedCategory} className="mt-0">
            {filteredProjects.length === 0 ? (
              <div className="text-center py-20">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-800/50 mb-4">
                  <Search className="h-8 w-8 text-gray-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">No projects found</h3>
                <p className="text-gray-400">Try adjusting your search or filters</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                  <Card
                    key={index}
                    className="bg-slate-900/50 border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <CardTitle className="text-white group-hover:text-blue-400 transition-colors">
                          {project.name}
                        </CardTitle>
                        <ExternalLink className="h-4 w-4 text-gray-500 group-hover:text-blue-400 transition-colors flex-shrink-0 ml-2" />
                      </div>
                      <CardDescription className="text-gray-400 leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags?.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="outline"
                            className="border-blue-500/30 text-blue-400 text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-blue-500/30 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300"
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          View Project
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>

        <div className="mt-20 text-center">
          <Card className="bg-gradient-to-br from-blue-900/20 to-blue-950/20 border-blue-500/30 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl font-black text-white mb-4">
                Build with x402
              </CardTitle>
              <CardDescription className="text-gray-300 text-lg">
                Join the growing ecosystem of developers building the future of machine-to-machine payments. Get started with our SDK and documentation.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-wider"
              >
                <a href="/docs">Read Documentation</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10"
              >
                <a href="https://github.com/x402-ai" target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <footer className="border-t border-slate-800 bg-black/40 backdrop-blur py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <NodeExchangeIcon className="text-blue-500" size={32} />
                <span className="font-black tracking-tight text-xl">
                  <span className="text-white">Deposit</span>
                  <span className="text-blue-500">.</span>
                  <span className="text-white">now</span>
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                The programmable funding gateway for autonomous agents. Scaling the machine-to-machine economy with instant x402 deposits.
              </p>
              <a href="https://x402.org" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors text-sm font-bold uppercase tracking-wider">
                Powered by x402 Protocol
                <ExternalLink className="h-3 w-3" />
              </a>
              <div className="text-gray-500 text-xs mt-2 uppercase tracking-wider">
                Deployment: bolt.new • Base Sepolia USDC
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Protocol</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/docs" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="/ecosystem" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Ecosystem
                  </a>
                </li>
                <li>
                  <a href="https://x402.org" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm inline-flex items-center gap-1">
                    x402 Standard
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Connect</h3>
              <div className="flex items-center gap-4">
                <a href="https://x.com/Deposit_Now" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="https://github.com/DepositNow" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="mailto:support@deposit.now" className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm">
              © 2026 Deposit.now. Built for the agentic future.
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms
              </a>
              <button className="text-gray-400 hover:text-white transition-colors">
                <Sun className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
