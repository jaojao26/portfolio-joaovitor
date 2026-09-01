// Banco de dados dos vídeos do portfólio
// Configurado para exibir os trabalhos dos clientes: @greennoficial e @aiqfome

export const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'reels', label: 'Reels' },
  { id: 'youtube', label: 'YouTube' },
  { id: 'criativos', label: 'Criativos' },
  { id: 'animacoes', label: 'Animações' }
];

// =========================================================================
// 🎛️ CONTROLE DE AMBIENTE (LOCAL vs CLOUDFLARE R2)
// =========================================================================
// true = Produção / Nuvem (Cloudflare R2) | false = Desenvolvimento Local
const USE_R2_STORAGE = true;

// URL Pública do Cloudflare R2
const R2_PUBLIC_URL = 'https://pub-3fe4b6641d97498ea9fe617ee10dc758.r2.dev';

// =========================================================================
// 📁 CONFIGURAÇÕES DE CLIENTES E PASTAS
// =========================================================================

// --- Configurações do Cliente Greenn ---
const clientGreenn = 'Greenn';
const avatarGreenn = '/avatar-greenn.png';
const folderGreenn = USE_R2_STORAGE 
  ? `${R2_PUBLIC_URL}/Greenn` 
  : '/videos/Greenn';

// --- Configurações do Cliente Aiqfome ---
const clientAiqfome = 'aiqfome';
const avatarAiqfome = '/avatar.png';
const folderAiqfome = USE_R2_STORAGE 
  ? `${R2_PUBLIC_URL}/aiqfome` 
  : '/videos/aiqfome';

const isVerified = true;

export const videos = [
  
  // ==========================================
  // 🟢 CLIENTE: GREENN (greennoficial)
  // ==========================================

  // --- REELS (9:16) ---
  {
    id: 'g-r1',
    title: 'Edição Greenn Reels #01',
    client: clientGreenn,
    clientAvatar: avatarGreenn,
    verified: true,
    category: ['reels'],
    aspectRatio: '9/16',
    videoUrl: `${folderGreenn}/reels/reel01-G.mp4`,
    thumbnailTime: 8.5
  },
  {
    id: 'g-r2',
    title: 'Edição Greenn Reels #02',
    client: clientGreenn,
    clientAvatar: avatarGreenn,
    verified: true,
    category: ['reels'],
    aspectRatio: '9/16',
    videoUrl: `${folderGreenn}/reels/reel02-G.mp4`,
    thumbnailTime: 4.5
  },
  {
    id: 'g-r3',
    title: 'Edição Greenn Reels #03',
    client: clientGreenn,
    clientAvatar: avatarGreenn,
    verified: true,
    category: ['reels'],
    aspectRatio: '9/16',
    videoUrl: `${folderGreenn}/reels/reel03-G.mp4`
  },
  {
    id: 'g-r4',
    title: 'Edição Greenn Reels #04',
    client: clientGreenn,
    clientAvatar: avatarGreenn,
    verified: true,
    category: ['reels'],
    aspectRatio: '9/16',
    videoUrl: `${folderGreenn}/reels/reel04-G.mp4`,
    thumbnailTime: 3
  },
  {
    id: 'g-r5',
    title: 'Edição Greenn Reels #05',
    client: clientGreenn,
    clientAvatar: avatarGreenn,
    verified: true,
    category: ['reels'],
    aspectRatio: '9/16',
    videoUrl: `${folderGreenn}/reels/reel05-G.mp4`
  },
  {
    id: 'g-r6',
    title: 'Edição Greenn Reels #06',
    client: clientGreenn,
    clientAvatar: avatarGreenn,
    verified: true,
    category: ['reels'],
    aspectRatio: '9/16',
    videoUrl: `${folderGreenn}/reels/reel06-G.mp4`
  },
  {
    id: 'g-r7',
    title: 'Checklist 9x16',
    client: clientGreenn,
    clientAvatar: avatarGreenn,
    verified: true,
    category: ['reels'],
    aspectRatio: '9/16',
    videoUrl: `${folderGreenn}/reels/reel07-G.mp4`,
    thumbnailTime: 35
  },
  {
    id: 'g-r8',
    title: '10K E 100K 9x16',
    client: clientGreenn,
    clientAvatar: avatarGreenn,
    verified: true,
    category: ['reels'],
    aspectRatio: '9/16',
    videoUrl: `${folderGreenn}/reels/reel08-G.mp4`
  },
  {
    id: 'g-r9',
    title: 'Edição Ícaro Lermen',
    client: clientGreenn,
    clientAvatar: avatarGreenn,
    verified: true,
    category: ['reels'],
    aspectRatio: '9/16',
    videoUrl: `${folderGreenn}/reels/reel09-G.mp4`
  },
  {
    id: 'g-r10',
    title: 'Quanto Você Paga de Taxa (Criativo)',
    client: clientGreenn,
    clientAvatar: avatarGreenn,
    verified: true,
    category: ['reels', 'criativos'],
    aspectRatio: '9/16',
    videoUrl: `${folderGreenn}/reels/reel10-G.mp4`
  },
  {
    id: 'g-r11',
    title: '2026 Começou',
    client: clientGreenn,
    clientAvatar: avatarGreenn,
    verified: true,
    category: ['reels'],
    aspectRatio: '9/16',
    videoUrl: `${folderGreenn}/reels/reel11-G.mp4`
  },
  {
    id: 'g-r12',
    title: 'Bate Bola Leandro',
    client: clientGreenn,
    clientAvatar: avatarGreenn,
    verified: true,
    category: ['reels'],
    aspectRatio: '9/16',
    videoUrl: `${folderGreenn}/reels/reel12-G.mp4`
  },
  {
    id: 'g-r13',
    title: 'O Funil Morreu',
    client: clientGreenn,
    clientAvatar: avatarGreenn,
    verified: true,
    category: ['reels'],
    aspectRatio: '9/16',
    videoUrl: `${folderGreenn}/reels/reel13-G.mp4`
  },
  {
    id: 'g-r14',
    title: 'Será que eu Li Certo?',
    client: clientGreenn,
    clientAvatar: avatarGreenn,
    verified: true,
    category: ['reels'],
    aspectRatio: '9/16',
    videoUrl: `${folderGreenn}/reels/reel14-G.mp4`
  },
  {
    id: 'g-r15',
    title: 'Teatrinho 2',
    client: clientGreenn,
    clientAvatar: avatarGreenn,
    verified: true,
    category: ['reels'],
    aspectRatio: '9/16',
    videoUrl: `${folderGreenn}/reels/reel15-G.mp4`
  },
  {
    id: 'g-r16',
    title: 'Poder Digital',
    client: clientGreenn,
    clientAvatar: avatarGreenn,
    verified: true,
    category: ['reels'],
    aspectRatio: '9/16',
    videoUrl: `${folderGreenn}/reels/reel16-G.mp4`
  },
  {
    id: 'g-r17',
    title: 'Descubra seu Propósito',
    client: clientGreenn,
    clientAvatar: avatarGreenn,
    verified: true,
    category: ['reels'],
    aspectRatio: '9/16',
    videoUrl: `${folderGreenn}/reels/reel17-G.mp4`,
    thumbnailTime: 4
  },
  {
    id: 'g-r18',
    title: 'O Brasil Dominou o Mundo',
    client: clientGreenn,
    clientAvatar: avatarGreenn,
    verified: true,
    category: ['reels'],
    aspectRatio: '9/16',
    videoUrl: `${folderGreenn}/reels/reel18-G.mp4`,
    thumbnailTime: 4
  },
  {
    id: 'g-r19',
    title: 'Quanto Você Paga de Taxa',
    client: clientGreenn,
    clientAvatar: avatarGreenn,
    verified: true,
    category: ['reels'],
    aspectRatio: '9/16',
    videoUrl: `${folderGreenn}/reels/reel19-G.mp4`
  },
  {
    id: 'g-r20',
    title: 'Teatrinho Internacional',
    client: clientGreenn,
    clientAvatar: avatarGreenn,
    verified: true,
    category: ['reels'],
    aspectRatio: '9/16',
    videoUrl: `${folderGreenn}/reels/reel20-G.mp4`
  },
  {
    id: 'g-r21',
    title: 'Recomeçar no Digital',
    client: clientGreenn,
    clientAvatar: avatarGreenn,
    verified: true,
    category: ['reels'],
    aspectRatio: '9/16',
    videoUrl: `${folderGreenn}/reels/reel21-G.mp4`,
    thumbnailTime: 14
  },
  {
    id: 'g-r22',
    title: 'Ano de Copa',
    client: clientGreenn,
    clientAvatar: avatarGreenn,
    verified: true,
    category: ['reels'],
    aspectRatio: '9/16',
    videoUrl: `${folderGreenn}/reels/reel22-G.mp4`,
    thumbnailTime: 5
  },
  {
    id: 'g-r23',
    title: 'História Thales Starling',
    client: clientGreenn,
    clientAvatar: avatarGreenn,
    verified: true,
    category: ['reels'],
    aspectRatio: '9/16',
    videoUrl: `${folderGreenn}/reels/reel23-G.mp4`,
    thumbnailTime: 5
  },

  // --- YOUTUBE ---
  {
    id: 'g-yt1',
    title: 'IA e Coprodução: o novo jogo para FATURAR mais no digital | Ericson Sobrinho | Greenn Cast #02',
    client: clientGreenn,
    clientAvatar: avatarGreenn,
    verified: true,
    category: ['youtube'],
    aspectRatio: '16/9',
    videoUrl: 'https://www.youtube.com/embed/FQX7g_lR858',
    thumbnail: 'https://img.youtube.com/vi/FQX7g_lR858/hqdefault.jpg'
  },
  {
    id: 'g-yt2',
    title: 'Ele vendia ESPETINHOS e agora FATURA MILHÕES no mercado financeiro | Leandro Turon | Greenn Cast #01',
    client: clientGreenn,
    clientAvatar: avatarGreenn,
    verified: true,
    category: ['youtube'],
    aspectRatio: '16/9',
    videoUrl: 'https://www.youtube.com/embed/SCl3L8KW-XM',
    thumbnail: 'https://img.youtube.com/vi/SCl3L8KW-XM/hqdefault.jpg'
  },
  {
    id: 'g-yt3',
    title: 'Greenn Internacional: Seu conhecimento pode alcançar o mundo. A Greenn cuida do resto.',
    client: clientGreenn,
    clientAvatar: avatarGreenn,
    verified: true,
    category: ['youtube'],
    aspectRatio: '16/9',
    videoUrl: 'https://www.youtube.com/embed/JAtudP41RT0',
    thumbnail: 'https://img.youtube.com/vi/JAtudP41RT0/hqdefault.jpg'
  },
  {
    id: 'g-yt4',
    title: 'GREENN TICKETS 2.0 - O futuro dos seus eventos!',
    client: clientGreenn,
    clientAvatar: avatarGreenn,
    verified: true,
    category: ['youtube'],
    aspectRatio: '16/9',
    videoUrl: 'https://www.youtube.com/embed/vhEGm4qAM2M',
    thumbnail: 'https://img.youtube.com/vi/vhEGm4qAM2M/hqdefault.jpg'
  },

  // --- ANIMAÇÃO ---
  {
    id: 'g-a1',
    title: 'Background Telão Greenn Day',
    client: clientGreenn,
    clientAvatar: avatarGreenn,
    verified: true,
    category: ['animacoes'],
    aspectRatio: '16/9',
    videoUrl: `${folderGreenn}/animacao/animacao01-G.mp4`
  },
  {
    id: 'g-a2',
    title: 'Logo GreennCast',
    client: clientGreenn,
    clientAvatar: avatarGreenn,
    verified: true,
    category: ['animacoes'],
    aspectRatio: '16/9',
    videoUrl: `${folderGreenn}/animacao/animacao02-G.mp4`
  },
  {
    id: 'g-a3',
    title: 'Telão Thales',
    client: clientGreenn,
    clientAvatar: avatarGreenn,
    verified: true,
    category: ['animacoes'],
    aspectRatio: '16/9',
    videoUrl: `${folderGreenn}/animacao/animacao03-G.mp4`
  },
  {
    id: 'g-a4',
    title: 'GI Fluxo (Criativo)',
    client: clientGreenn,
    clientAvatar: avatarGreenn,
    verified: true,
    category: ['animacoes', 'criativos'],
    aspectRatio: '9/16',
    videoUrl: `${folderGreenn}/animacao/animacao04-G.mp4`
  },

  // --- CRIATIVOS ---
  {
    id: 'g-c1',
    title: 'Você Sabia que 70% das Pessoas - Tela Dividida',
    client: clientGreenn,
    clientAvatar: avatarGreenn,
    verified: true,
    category: ['criativos'],
    aspectRatio: '9/16',
    videoUrl: `${folderGreenn}/criativos/criativo01-G.mp4`
  },
  {
    id: 'g-c2',
    title: 'Calculadora ROI',
    client: clientGreenn,
    clientAvatar: avatarGreenn,
    verified: true,
    category: ['criativos'],
    aspectRatio: '9/16',
    videoUrl: `${folderGreenn}/criativos/criativo02-G.mp4`
  },
  {
    id: 'g-c3',
    title: 'Experiência e Apresentação - Club',
    client: clientGreenn,
    clientAvatar: avatarGreenn,
    verified: true,
    category: ['criativos'],
    aspectRatio: '9/16',
    videoUrl: `${folderGreenn}/criativos/criativo03-G.mp4`
  },
  {
    id: 'g-c4',
    title: 'Como Criar um Curso e Vender na Internet',
    client: clientGreenn,
    clientAvatar: avatarGreenn,
    verified: true,
    category: ['criativos'],
    aspectRatio: '9/16',
    videoUrl: `${folderGreenn}/criativos/criativo04-G.mp4`
  },
  {
    id: 'g-c5',
    title: 'Taxa 0,01%',
    client: clientGreenn,
    clientAvatar: avatarGreenn,
    verified: true,
    category: ['reels', 'criativos'],
    aspectRatio: '9/16',
    videoUrl: `${folderGreenn}/criativos/criativo05-G.mp4`
  },

  // ==========================================
  // 🟣 CLIENTE: AIQFOME
  // ==========================================
  {
    id: '1',
    title: 'Edição Especial #01',
    client: clientAiqfome,
    clientAvatar: avatarAiqfome,
    verified: isVerified,
    category: ['reels'],
    aspectRatio: '9/16',
    videoUrl: `${folderAiqfome}/reel01-A.mp4`
  },
  {
    id: '17',
    title: 'Edição Especial #17',
    client: clientAiqfome,
    clientAvatar: avatarAiqfome,
    verified: isVerified,
    category: ['reels', 'animacoes'],
    aspectRatio: '9/16',
    videoUrl: `${folderAiqfome}/reel17-A.mp4`
  },
  {
    id: '19',
    title: 'Edição Especial #19 (Criativos)',
    client: clientAiqfome,
    clientAvatar: avatarAiqfome,
    verified: isVerified,
    category: ['criativos', 'animacoes'],
    aspectRatio: '16/9',
    videoUrl: `${folderAiqfome}/reel19-A.mp4`
  },
  {
    id: '2',
    title: 'Edição Especial #02',
    client: clientAiqfome,
    clientAvatar: avatarAiqfome,
    verified: isVerified,
    category: ['reels'],
    aspectRatio: '9/16',
    videoUrl: `${folderAiqfome}/reel02-A.mp4`
  },
  {
    id: '3',
    title: 'Edição Especial #03',
    client: clientAiqfome,
    clientAvatar: avatarAiqfome,
    verified: isVerified,
    category: ['reels'],
    aspectRatio: '9/16',
    videoUrl: `${folderAiqfome}/reel03-A.mp4`
  },
  {
    id: '13',
    title: 'Edição Especial #13',
    client: clientAiqfome,
    clientAvatar: avatarAiqfome,
    verified: isVerified,
    category: ['reels', 'animacoes'],
    aspectRatio: '9/16',
    videoUrl: `${folderAiqfome}/reel13-A.mp4`
  },
  {
    id: '20',
    title: 'Campanha Delivery Premiado',
    client: clientAiqfome,
    clientAvatar: avatarAiqfome,
    verified: isVerified,
    category: ['youtube'],
    aspectRatio: '16/9',
    videoUrl: 'https://www.youtube.com/embed/b0t85oB80Ho',
    thumbnail: 'https://img.youtube.com/vi/b0t85oB80Ho/hqdefault.jpg'
  },
  {
    id: '4',
    title: 'Edição Especial #04',
    client: clientAiqfome,
    clientAvatar: avatarAiqfome,
    verified: isVerified,
    category: ['reels'],
    aspectRatio: '9/16',
    videoUrl: `${folderAiqfome}/reel04-A.mp4`
  },
  {
    id: '5',
    title: 'Edição Especial #05',
    client: clientAiqfome,
    clientAvatar: avatarAiqfome,
    verified: isVerified,
    category: ['reels'],
    aspectRatio: '9/16',
    videoUrl: `${folderAiqfome}/reel05-A.mp4`
  },
  {
    id: '6',
    title: 'Edição Especial #06',
    client: clientAiqfome,
    clientAvatar: avatarAiqfome,
    verified: isVerified,
    category: ['reels'],
    aspectRatio: '9/16',
    videoUrl: `${folderAiqfome}/reel06-A.mp4`
  },
  {
    id: '14',
    title: 'Edição Especial #14',
    client: clientAiqfome,
    clientAvatar: avatarAiqfome,
    verified: isVerified,
    category: ['reels', 'animacoes'],
    aspectRatio: '9/16',
    videoUrl: `${folderAiqfome}/reel14-A.mp4`
  },
  {
    id: '7',
    title: 'Edição Especial #07',
    client: clientAiqfome,
    clientAvatar: avatarAiqfome,
    verified: isVerified,
    category: ['reels'],
    aspectRatio: '9/16',
    videoUrl: `${folderAiqfome}/reel07-A.mp4`
  },
  {
    id: '21',
    title: 'Aiqfome no Interior - Rápido e Fácil',
    client: clientAiqfome,
    clientAvatar: avatarAiqfome,
    verified: isVerified,
    category: ['youtube'],
    aspectRatio: '16/9',
    videoUrl: 'https://www.youtube.com/embed/yscHaRdBtns',
    thumbnail: 'https://img.youtube.com/vi/yscHaRdBtns/hqdefault.jpg'
  },
  {
    id: '18',
    title: 'Edição Especial #18',
    client: clientAiqfome,
    clientAvatar: avatarAiqfome,
    verified: isVerified,
    category: ['reels'],
    aspectRatio: '9/16',
    videoUrl: `${folderAiqfome}/reel18-A.mp4`
  },
  {
    id: '8',
    title: 'Edição Especial #08',
    client: clientAiqfome,
    clientAvatar: avatarAiqfome,
    verified: isVerified,
    category: ['reels'],
    aspectRatio: '9/16',
    videoUrl: `${folderAiqfome}/reel08-A.mp4`
  },
  {
    id: '9',
    title: 'Edição Especial #09',
    client: clientAiqfome,
    clientAvatar: avatarAiqfome,
    verified: isVerified,
    category: ['reels'],
    aspectRatio: '9/16',
    videoUrl: `${folderAiqfome}/reel09-A.mp4`
  },
  {
    id: '15',
    title: 'Edição Especial #15',
    client: clientAiqfome,
    clientAvatar: avatarAiqfome,
    verified: isVerified,
    category: ['reels', 'animacoes'],
    aspectRatio: '9/16',
    videoUrl: `${folderAiqfome}/reel15-A.mp4`
  },
  {
    id: '22',
    title: 'Bastidores Aiqfome Delivery',
    client: clientAiqfome,
    clientAvatar: avatarAiqfome,
    verified: isVerified,
    category: ['youtube'],
    aspectRatio: '16/9',
    videoUrl: 'https://www.youtube.com/embed/i8JY-BhjyGw',
    thumbnail: 'https://img.youtube.com/vi/i8JY-BhjyGw/hqdefault.jpg'
  },
  {
    id: '10',
    title: 'Edição Especial #10',
    client: clientAiqfome,
    clientAvatar: avatarAiqfome,
    verified: isVerified,
    category: ['reels'],
    aspectRatio: '9/16',
    videoUrl: `${folderAiqfome}/reel10-A.mp4`
  },
  {
    id: '11',
    title: 'Edição Especial #11',
    client: clientAiqfome,
    clientAvatar: avatarAiqfome,
    verified: isVerified,
    category: ['reels'],
    aspectRatio: '9/16',
    videoUrl: `${folderAiqfome}/reel11-A.mp4`
  },
  {
    id: '16',
    title: 'Edição Especial #16',
    client: clientAiqfome,
    clientAvatar: avatarAiqfome,
    verified: isVerified,
    category: ['reels', 'animacoes'],
    aspectRatio: '9/16',
    videoUrl: `${folderAiqfome}/reel16-A.mp4`
  },
  {
    id: '12',
    title: 'Edição Especial #12',
    client: clientAiqfome,
    clientAvatar: avatarAiqfome,
    verified: isVerified,
    category: ['reels'],
    aspectRatio: '9/16',
    videoUrl: `${folderAiqfome}/reel12-A.mp4`
  },
  {
    id: '20',
    title: 'Edição Especial #20',
    client: clientAiqfome,
    clientAvatar: avatarAiqfome,
    verified: isVerified,
    category: ['reels'],
    aspectRatio: '9/16',
    videoUrl: `${folderAiqfome}/reel20-A.mp4`
  },
  {
    id: '21',
    title: 'Edição Especial #21',
    client: clientAiqfome,
    clientAvatar: avatarAiqfome,
    verified: isVerified,
    category: ['reels'],
    aspectRatio: '9/16',
    videoUrl: `${folderAiqfome}/reel21-A.mp4`
  },
  {
    id: '22-local',
    title: 'Animação Criativa #01',
    client: clientAiqfome,
    clientAvatar: avatarAiqfome,
    verified: isVerified,
    category: ['criativos', 'animacoes'],
    aspectRatio: '1/1',
    videoUrl: `${folderAiqfome}/reel22-A.mp4`
  },
  {
    id: '23',
    title: 'Animação Criativa #02',
    client: clientAiqfome,
    clientAvatar: avatarAiqfome,
    verified: isVerified,
    category: ['animacoes', 'criativos'],
    aspectRatio: '1/1',
    videoUrl: `${folderAiqfome}/reel23-A.mp4`
  },
  {
    id: '24',
    title: 'Animação Especial #03',
    client: clientAiqfome,
    clientAvatar: avatarAiqfome,
    verified: isVerified,
    category: ['animacoes'],
    aspectRatio: '1/1',
    videoUrl: `${folderAiqfome}/reel24-A.mp4`
  },
  {
    id: '25',
    title: 'Animação Especial #04',
    client: clientAiqfome,
    clientAvatar: avatarAiqfome,
    verified: isVerified,
    category: ['reels', 'animacoes'],
    aspectRatio: '9/16',
  }
].map((v) => ({
  ...v,
  poster: v.poster || v.thumbnail || `/thumbnails/${v.id}.webp`
}));
