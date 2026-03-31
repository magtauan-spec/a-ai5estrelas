/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { 
  Star, 
  CheckCircle2, 
  Play,
  Smartphone, 
  Clock, 
  Utensils, 
  Calculator, 
  Calendar, 
  BookOpen, 
  ChevronDown, 
  AlertCircle, 
  ShieldCheck,
  Zap,
  Gift,
  MessageSquare,
  ArrowRight,
  Timer,
  TrendingUp,
  ShoppingBag,
  Heart,
  DollarSign,
  Package,
  Target,
  Users,
  Award,
  Layers,
  Leaf,
  Trophy,
  IceCream,
  Milk,
  HelpCircle,
  Camera,
  Image
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [timeLeft, setTimeLeft] = useState(292); // 04:52 in seconds
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [vslStarted, setVslStarted] = useState(false);
  const [recipeIndex, setRecipeIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const testimonialImages = [
    "https://i.imgur.com/QgmecgU.png",
    "https://i.imgur.com/m3g8ZhE.png",
    "https://i.imgur.com/hFRYE4T.png",
    "https://i.imgur.com/bPMNIUj.png",
    "https://i.imgur.com/B5GJQFz.png"
  ];

  const recipeImages = [
    "https://i.pinimg.com/736x/c9/64/ca/c964ca46e3cdb43e344922142f251bec.jpg",
    "https://i.pinimg.com/1200x/85/7f/9a/857f9a5ece01583d358e4edacb1e50d5.jpg",
    "https://i.pinimg.com/736x/9b/39/da/9b39da674af5365b6c23fa077c764b69.jpg",
    "https://i.pinimg.com/736x/51/7f/26/517f262a8324a46b0d57a9895c6378e9.jpg",
    "https://i.pinimg.com/1200x/02/79/80/027980f4aea2105b1bad2873b0e30d61.jpg",
    "https://i.pinimg.com/736x/75/c6/24/75c62411f0c8e92d753cea0955b0772d.jpg"
  ];

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const timer = setInterval(() => {
        setRecipeIndex((prev) => (prev + 1) % (recipeImages.length - 3));
      }, 3000);
      return () => clearInterval(timer);
    }
    const timer = setInterval(() => {
      setRecipeIndex((prev) => (prev + 1) % recipeImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [recipeImages.length, isMobile]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonialImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonialImages.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const faqs = [
    {
      q: "Nunca fiz açaí gourmet antes, vou conseguir?",
      a: "Sim! O método foi desenhado para quem está começando do absoluto zero. As aulas são passo a passo e mostram desde a base perfeita até as montagens mais lucrativas.",
      icon: <Utensils size={14} className="text-[#FF6321]" />
    },
    {
      q: "Por que o preço é tão baixo?",
      a: "Nossa missão é democratizar o empreendedorismo doméstico. Queremos que você tenha seu primeiro resultado rápido para depois conhecer nossos treinamentos avançados.",
      icon: <DollarSign size={14} className="text-[#FF6321]" />
    },
    {
      q: "Como recebo o acesso?",
      a: "O acesso é imediato! Assim que o pagamento for confirmado, você receberá os dados de acesso no seu e-mail e também uma mensagem no WhatsApp.",
      icon: <Smartphone size={14} className="text-[#FF6321]" />
    },
    {
      q: "O acesso é vitalício?",
      a: "Sim! No plano Combo você paga uma única vez e tem acesso para sempre, incluindo todas as futuras atualizações do material.",
      icon: <Timer size={14} className="text-[#FF6321]" />
    },
    {
      q: "E se eu não gostar?",
      a: "Você tem uma garantia incondicional de 14 dias. Se não gostar de qualquer coisa, devolvemos 100% do seu dinheiro sem perguntas.",
      icon: <ShieldCheck size={14} className="text-[#FF6321]" />
    },
    {
      q: "Quanto posso ganhar vendendo açaí?",
      a: "Nossas alunas faturam em média de R$150 a R$230 por dia trabalhando em casa. Tudo depende da sua dedicação e do roteiro de vendas que ensinamos.",
      icon: <TrendingUp size={14} className="text-[#FF6321]" />
    },
    {
      q: "Preciso de máquinas caras?",
      a: "Não! Você pode começar com o que já tem em casa. Ensinamos técnicas para manter a cremosidade sem precisar de máquinas industriais.",
      icon: <Package size={14} className="text-[#FF6321]" />
    },
    {
      q: "Quanto tempo leva para fazer a primeira venda?",
      a: "Seguindo o nosso Roteiro de Vendas de 7 Dias, a maioria das alunas realiza as primeiras vendas já na primeira semana.",
      icon: <Zap size={14} className="text-[#FF6321]" />
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-[#FF6321] selection:text-white overflow-x-hidden">
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#D00000] py-2 px-4 text-center text-[10px] sm:text-xs font-bold uppercase tracking-wider flex flex-wrap items-center justify-center gap-3 sm:gap-6 border-b border-white/10">
        <span className="flex items-center gap-1.5 drop-shadow-sm">
          <AlertCircle size={14} className="animate-pulse" />
          PREÇO DE R$ 9,90 SOBE QUANDO O TEMPO ACABAR!
        </span>
        <div className="flex items-center gap-3">
          <span className="bg-black/30 px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/5">
            <Clock size={14} />
            {formatTime(timeLeft)}
          </span>
          <span className="bg-black/30 px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/5">
            <div className="w-1.5 h-1.5 bg-[#FFB800] rounded-full animate-pulse" />
            APENAS 11 VAGAS
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-32 px-5 sm:px-6 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-green-900/30 text-green-400 border border-green-500/20 px-4 py-1.5 rounded-full text-[10px] font-bold mb-10 flex items-center gap-2 mx-auto w-fit">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            +500 pessoas já lucrando com açaí em casa
          </span>
          
          <h1 className="text-[2.8rem] sm:text-7xl md:text-8xl font-black leading-[0.95] mb-10 tracking-tighter text-white">
            Pare de perder dinheiro.<br />
            Aprenda a vender <span className="text-[#FF6321]">Açaí Gourmet</span> em casa<br />
            e fature até <span className="text-[#FF6321]">R$230 por dia.</span>
          </h1>

          <p className="text-gray-400 text-lg sm:text-2xl mb-14 max-w-2xl mx-auto leading-relaxed px-2">
            São receitas e estratégias passo a passo que já transformaram pessoas comuns em empreendedoras — mesmo sem nunca ter feito açaí na vida.<br />
            <strong className="text-white">Comece hoje por menos que um lanche.</strong>
          </p>

          {/* VSL Section (Mobile Format, VTurb Style) */}
          <div 
            className="relative w-full max-w-[340px] sm:max-w-md mx-auto mb-20 aspect-[9/16] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.6)] rounded-[3rem] border-4 border-white/10 group cursor-pointer"
            onClick={() => setVslStarted(true)}
          >
            <iframe 
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/AYdjkMXLn-U?si=8rz0kctPgT1hIbCw&autoplay=${vslStarted ? 1 : 0}&controls=0&rel=0&modestbranding=1&showinfo=0&iv_load_policy=3`} 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
            
            {!vslStarted && (
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex flex-col items-center justify-center transition-all group-hover:bg-black/20 z-10">
                <div className="w-24 h-24 bg-[#FF6321] rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(255,99,33,0.8)] transition-transform group-hover:scale-110 mb-6">
                  <Play size={40} fill="white" className="ml-1 text-white" />
                </div>
                <p className="text-white font-black text-lg uppercase tracking-[0.2em] animate-pulse drop-shadow-lg">Aperte o Play</p>
              </div>
            )}
          </div>

          <div className="mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <p className="text-gray-500 line-through text-sm">De R$ 29</p>
              <span className="bg-[#FF6321] text-[10px] font-black px-2 py-0.5 rounded shadow-lg">-93% OFF</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[#FFB800] text-7xl sm:text-9xl font-black tracking-tighter drop-shadow-[0_0_30px_rgba(255,184,0,0.4)]">R$ 9,90</span>
              <span className="text-gray-400 text-sm font-bold uppercase tracking-[0.3em] mt-2 opacity-80">por apenas</span>
            </div>
            <p className="text-[#00FF00] text-[11px] sm:text-sm font-black mt-8 flex items-center justify-center gap-2 bg-green-500/10 px-4 py-2 rounded-full border border-green-500/20">
              <CheckCircle2 size={16} /> Acesso vitalício + Garantia incondicional de 14 dias
            </p>
          </div>

          <a href="#oferta" className="block w-full max-w-md mx-auto">
            <motion.button
              whileHover={{ scale: 1.03, backgroundColor: "#FF7A41" }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-[#FF6321] text-white font-black py-7 px-8 rounded-2xl text-2xl shadow-[0_25px_60px_rgba(255,99,33,0.5)] transition-all flex items-center justify-center gap-4 uppercase tracking-tighter border-b-4 border-black/20"
            >
              <Zap size={28} fill="currentColor" />
              QUERO COMEÇAR AGORA!
            </motion.button>
          </a>

          <div className="mt-10 flex flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base tracking-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                <Smartphone size={18} className="text-[#25D366]" /> Acesso enviado pelo WhatsApp
              </div>
              <p className="text-gray-400 text-[10px] sm:text-xs font-medium">Material liberado após confirmação do pagamento</p>
            </div>
            
            <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={10} fill={i <= 4 ? "#FFB800" : "none"} className={i <= 4 ? "text-[#FFB800]" : "text-gray-600"} />
                ))}
                <span className="text-white font-black text-xs ml-1">4.9/5</span>
              </div>
              <div className="w-px h-3 bg-white/20" />
              <div className="flex items-center gap-1 text-white font-bold text-[10px] uppercase tracking-wider">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                Acesso Imediato
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-12 relative max-w-[320px] sm:max-w-md mx-auto"
          >
            <div className="relative border-[3px] border-[#FFB800] rounded-[24px] overflow-hidden bg-black shadow-2xl">
              <img 
                src="https://i.imgur.com/6xoJOp6.jpeg" 
                alt="Resultado de aluna" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-4">
                <div className="bg-[#FFB800] p-2 rounded-full shrink-0 shadow-[0_0_15px_rgba(255,184,0,0.4)]">
                  <Star size={16} fill="white" className="text-white" />
                </div>
                <div className="text-left">
                  <p className="text-white font-bold text-xs sm:text-sm leading-tight">Feita por aluna da nossa comunidade</p>
                  <p className="text-gray-300 text-[10px] sm:text-xs leading-tight">Já está faturando com açai gourmet 🔥</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Floating Açaí Decor */}
      <div className="relative h-20 overflow-hidden pointer-events-none">
        <img src="https://picsum.photos/seed/acai-berry/100/100" className="absolute left-10 top-0 w-16 opacity-40 blur-[1px] rotate-12" alt="" />
        <img src="https://picsum.photos/seed/acai-bowl/100/100" className="absolute right-10 top-5 w-20 opacity-30 blur-[2px] -rotate-45" alt="" />
      </div>

      {/* App Showcase */}
      <section className="py-32 px-5 sm:px-6 text-center overflow-hidden bg-gradient-to-b from-transparent to-[#0F0F0F]/50">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#FFB800] text-[10px] font-black uppercase tracking-[0.3em] mb-6">CONHEÇA O APLICATIVO</p>
          <h2 className="text-[2.5rem] sm:text-6xl font-black mb-10 text-[#FF6321] uppercase leading-[0.9] tracking-tighter">
            O SEGREDO AÇAI GOURMET
          </h2>
          <p className="text-white text-base sm:text-lg mb-20 max-w-xl mx-auto font-bold flex flex-wrap items-center justify-center gap-x-10 gap-y-5 px-4 opacity-90">
            <span className="flex items-center gap-2.5"><Utensils size={20} className="text-[#FF6321]" /> Receitas exclusivas</span>
            <span className="flex items-center gap-2.5"><TrendingUp size={20} className="text-[#FF6321]" /> Montagens que vendem</span>
            <span className="flex items-center gap-2.5"><DollarSign size={20} className="text-[#FF6321]" /> Estratégias de lucro</span>
          </p>

          <div className="relative max-w-[320px] mx-auto">
            <div className="absolute -inset-16 bg-[#FF6321]/20 blur-[100px] rounded-full"></div>
            <div className="relative bg-[#1A1A1A] border-[10px] border-[#2A2A2A] rounded-[4rem] aspect-[9/19] overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.9)]">
              <div className="bg-[#FF6321] h-6 flex items-center justify-center">
                <div className="w-12 h-1 bg-black/20 rounded-full"></div>
              </div>
              <div className="p-4 text-left">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-8 h-8 rounded-full bg-gray-800"></div>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                  </div>
                </div>
                <p className="text-[10px] text-gray-500 uppercase font-bold mb-1">MEUS MÓDULOS</p>
                <div className="bg-black/40 p-3 rounded-xl border border-white/5 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <BookOpen size={12} className="text-[#FF6321]" />
                    <span className="text-[10px] font-bold">68%</span>
                  </div>
                  <div className="w-full bg-gray-800 h-1 rounded-full overflow-hidden">
                    <div className="bg-[#FF6321] h-full w-[68%]"></div>
                  </div>
                </div>
                <p className="text-[10px] text-gray-500 uppercase font-bold mb-1">RECEITA DO DIA</p>
                <div className="aspect-square bg-gray-800 rounded-xl overflow-hidden relative">
                  <img src="https://picsum.photos/seed/acai-app/300/300" className="w-full h-full object-cover opacity-50" alt="" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play size={24} fill="white" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-gray-500 font-bold">
              <Smartphone size={12} /> Toque para assistir
            </div>
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section className="py-24 px-5 sm:px-6 bg-[#0F0F0F]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[2.2rem] sm:text-5xl font-black mb-12 text-center text-white leading-none">
            O Método em <span className="text-[#FF6321]">5 Passos</span>
          </h2>
          <p className="text-white text-center text-[10px] sm:text-xs mb-16 uppercase tracking-[0.4em] font-black drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
            Sistema simples e direto para você dominar o açaí lucrativo
          </p>
          
          <div className="space-y-5">
            {[
              { step: "1", title: "Base cremosa que não cristaliza", desc: "Técnica secreta para textura aveludada", icon: <IceCream size={18} className="text-[#FF6321]" /> },
              { step: "2", title: "25 acompanhamentos gourmet", desc: "Cremos, frutas, crunchies e caldas", icon: <Milk size={18} className="text-[#FF6321]" /> },
              { step: "3", title: "Montagem de copos irresistíveis", desc: "Visual que vende sozinho no Instagram", icon: <Layers size={18} className="text-[#FF6321]" /> },
              { step: "4", title: "Embalagem e delivery lucrativo", desc: "Como entregar sem derreter e lucrar mais", icon: <Package size={18} className="text-[#FF6321]" /> },
              { step: "5", title: "Roteiro de vendas em 7 dias", desc: "Comece a faturar rapidamente", icon: <TrendingUp size={18} className="text-[#FF6321]" /> }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-5 p-5 bg-black/40 border border-white/5 rounded-3xl hover:border-[#FF6321]/30 transition-all group">
                <div className="w-12 h-12 rounded-full bg-[#FF6321] flex items-center justify-center font-black text-xl shrink-0 shadow-[0_0_20px_rgba(255,99,33,0.4)]">
                  {item.step}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-1.5">
                    {item.icon}
                    <h4 className="text-base sm:text-lg font-bold leading-tight">{item.title}</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recipes Showcase */}
      <section className="py-24 px-0 sm:px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <div className="px-6">
            <h2 className="text-[2.2rem] sm:text-5xl font-black mb-4 text-white leading-none">
              Açaí Gourmet que <span className="text-[#FF6321]">Vende Sozinho</span>
            </h2>
            <p className="text-white text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-16 font-black drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
              Descubra as montagens mais vendidas. Testadas e aprovadas!
            </p>
          </div>
          
          <div className="relative mb-16 px-6 sm:px-0">
            <div className="overflow-hidden rounded-[2.5rem]">
              <motion.div 
                animate={{ x: `-${recipeIndex * (isMobile ? 100 : 25)}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="flex"
              >
                {recipeImages.map((src, i) => (
                  <div 
                    key={i} 
                    className="min-w-full sm:min-w-[25%] p-2 aspect-[4/5] sm:aspect-square"
                  >
                    <div className="w-full h-full rounded-[2.5rem] overflow-hidden border-4 border-white/5 shadow-2xl relative group">
                      <img src={src} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            
            <div className="flex justify-center gap-3 mt-10">
              {recipeImages.map((_, i) => {
                // Adjust dots based on how many "slides" we have
                const maxIndex = isMobile ? recipeImages.length : recipeImages.length - 3;
                if (i >= (isMobile ? recipeImages.length : recipeImages.length - 3)) return null;
                
                return (
                  <motion.div 
                    key={i} 
                    animate={{ 
                      width: recipeIndex === i ? 32 : 8,
                      backgroundColor: recipeIndex === i ? "#FF6321" : "rgba(255,255,255,0.2)"
                    }}
                    className="h-2 rounded-full cursor-pointer"
                    onClick={() => setRecipeIndex(i)}
                  />
                );
              })}
            </div>
          </div>

          <div className="px-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-16">
              {[
                { t: "Base Ultra Cremosa", d: "Sem cristais de gelo", icon: <Utensils size={20} className="text-[#FF6321] mb-3" /> },
                { t: "Cremes Artesanais", d: "Ninho, Nutella e Pistache", icon: <Heart size={20} className="text-[#FF6321] mb-3" /> },
                { t: "Montagem em Camadas", d: "Visual que encanta", icon: <Layers size={20} className="text-[#FF6321] mb-3" /> },
                { t: "Precificação de Lucro", d: "Margem de até 200%", icon: <DollarSign size={20} className="text-[#FF6321] mb-3" /> },
                { t: "Conservação Correta", d: "Mantenha o sabor por mais tempo", icon: <ShieldCheck size={20} className="text-[#FF6321] mb-3" /> },
                { t: "Cardápio Campeão", d: "Combinações que viciam", icon: <Award size={20} className="text-[#FF6321] mb-3" /> }
              ].map((item, i) => (
                <div key={i} className="bg-[#1A1A1A] p-5 rounded-3xl border border-white/5 text-left flex flex-col items-start">
                  {item.icon}
                  <h4 className="text-xs font-black text-white mb-1.5 uppercase tracking-tight leading-tight">{item.t}</h4>
                  <p className="text-[10px] text-gray-500 leading-tight">{item.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="bg-[#0F0F0F] p-6 rounded-2xl border border-[#FF6321]/20">
              <h4 className="text-[#FF6321] text-xs font-black uppercase mb-4 flex items-center gap-2">
                <Heart size={14} fill="#FF6321" /> Açaí Tradicional & Nutella
              </h4>
              <ul className="space-y-3 text-[10px] text-gray-400">
                <li className="flex items-start gap-2"><CheckCircle2 size={12} className="text-[#FF6321] shrink-0" /> Açaí com Leite Ninho e Nutella</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={12} className="text-[#FF6321] shrink-0" /> Açaí com Morango e Calda Quente</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={12} className="text-[#FF6321] shrink-0" /> Açaí com Paçoca e Amendoim</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={12} className="text-[#FF6321] shrink-0" /> Açaí com Banana e Mel</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={12} className="text-[#FF6321] shrink-0" /> Açaí com Granola Especial</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={12} className="text-[#FF6321] shrink-0" /> Açaí com Mousse de Maracujá</li>
              </ul>
            </div>
            <div className="bg-[#0F0F0F] p-6 rounded-2xl border border-[#FF6321]/20">
              <h4 className="text-[#FF6321] text-xs font-black uppercase mb-4 flex items-center gap-2">
                <Trophy size={14} fill="#FF6321" /> Açaí Gourmet Premium
              </h4>
              <ul className="space-y-3 text-[10px] text-gray-400">
                <li className="flex items-start gap-2"><CheckCircle2 size={12} className="text-[#FF6321] shrink-0" /> Açaí com Creme de Pistache</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={12} className="text-[#FF6321] shrink-0" /> Açaí com Kinder Bueno</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={12} className="text-[#FF6321] shrink-0" /> Açaí com Ferrero Rocher</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={12} className="text-[#FF6321] shrink-0" /> Açaí com Frutas Vermelhas</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={12} className="text-[#FF6321] shrink-0" /> Açaí com Kit Kat e Marshmallow</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={12} className="text-[#FF6321] shrink-0" /> Açaí com Brownie e Doce de Leite</li>
              </ul>
            </div>
            <div className="bg-[#0F0F0F] p-6 rounded-2xl border border-[#FF6321]/20">
              <h4 className="text-[#FF6321] text-xs font-black uppercase mb-4 flex items-center gap-2">
                <Leaf size={14} fill="#FF6321" /> Açaí Fit & Saudável
              </h4>
              <ul className="space-y-3 text-[10px] text-gray-400">
                <li className="flex items-start gap-2"><CheckCircle2 size={12} className="text-[#FF6321] shrink-0" /> Açaí Zero Açúcar com Whey</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={12} className="text-[#FF6321] shrink-0" /> Açaí com Pasta de Amendoim</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={12} className="text-[#FF6321] shrink-0" /> Açaí com Chia e Linhaça</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={12} className="text-[#FF6321] shrink-0" /> Açaí com Coco e Amêndoas</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={12} className="text-[#FF6321] shrink-0" /> Açaí com Kiwi e Manga</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={12} className="text-[#FF6321] shrink-0" /> Açaí com Iogurte Grego</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-[#FF6321] p-4 rounded-2xl flex items-center justify-center gap-2 text-xs font-black uppercase tracking-tight text-black">
            <Star size={14} fill="black" /> +30 Receitas Exclusivas no Guia Completo
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-24 px-5 sm:px-6 bg-[#0F0F0F]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[2.2rem] sm:text-5xl font-black mb-4 leading-none">
            8 Presentes Grátis <span className="text-[#FF6321]">Que Turbinam Seu Lucro</span>
          </h2>
          <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-16 font-bold">Só hoje você leva tudo isso 100% GRÁTIS</p>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4">
            {[
              { id: 1, t: "Calculadora de Custos e Lucros", v: "R$97", d: "Calcule exatamente quanto custa cada copo e qual seu lucro real.", icon: <img src="https://chefleomartins.com/wp-content/uploads/2026/02/admin-ajax-1-convertido-de-webp.webp" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" referrerPolicy="no-referrer" /> },
              { id: 2, t: "Guia de Fornecedores de Açaí Premium", v: "R$67", d: "Onde comprar o melhor açaí pelo menor preço da sua região.", icon: <img src="https://chefleomartins.com/wp-content/uploads/2026/02/admin-ajax-22-convertido-de-png-5.webp" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" referrerPolicy="no-referrer" /> },
              { id: 3, t: "Manual de Atendimento pelo WhatsApp", v: "R$47", d: "Scripts prontos para converter curiosos em clientes fiéis.", icon: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcpzs2ex8QaGUsVUNkG4kzeW9dZL8eweooog&s" className="w-6 h-6 sm:w-8 sm:h-8 object-contain rounded-full" referrerPolicy="no-referrer" /> },
              { id: 4, t: "Fotos Profissionais para Divulgação", v: "R$147", d: "Pack de fotos em alta resolução para usar no seu Instagram.", icon: <img src="https://thumbs.dreamstime.com/b/logotipo-da-c%C3%A2mera-projeto-de-conceito-da-fotografia-70136032.jpg" className="w-6 h-6 sm:w-8 sm:h-8 object-contain rounded-sm" referrerPolicy="no-referrer" /> },
              { id: 5, t: "Planilha de Gestão Financeira", v: "R$67", d: "Controle suas entradas e saídas de forma simples e eficaz.", icon: <img src="https://i.imgur.com/SIPdAXx.png" className="w-6 h-6 sm:w-8 sm:h-8 object-contain rounded-sm" referrerPolicy="no-referrer" /> },
              { id: 6, t: "Guia de Delivery (Ifood/UberEats)", v: "R$47", d: "Como cadastrar e vender muito nos aplicativos de entrega.", icon: <img src="https://miro.medium.com/v2/resize:fit:600/1*DtRCPVl5XfaHvT6k6K2jJA.png" className="w-6 h-6 sm:w-8 sm:h-8 object-contain rounded-sm" referrerPolicy="no-referrer" /> },
              { id: 7, t: "Marketing para Redes Sociais", v: "R$97", d: "Como atrair clientes todos os dias usando o Facebook e Instagram.", icon: <img src="https://i.imgur.com/0szrjvh.jpeg" className="w-6 h-6 sm:w-8 sm:h-8 object-contain rounded-sm" referrerPolicy="no-referrer" /> },
              { id: 8, t: "Certificado de Conclusão", v: "R$197", d: "Certificado exclusivo de Especialista em Açaí Gourmet.", icon: <img src="https://chefleomartins.com/wp-content/uploads/2026/02/a9ae2b-18-convertido-de-png-1024x841.webp" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" referrerPolicy="no-referrer" /> }
            ].map((bonus) => (
              <div key={bonus.id} className="bg-black border border-white/5 p-4 sm:p-6 rounded-3xl text-left flex flex-col justify-between group hover:border-[#FF6321]/30 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-[#FF6321] text-[7px] sm:text-[9px] font-black px-2 py-0.5 rounded uppercase text-black">BÔNUS #{bonus.id}</span>
                    <span className="text-[8px] sm:text-[10px] text-gray-600 line-through">VALOR: {bonus.v}</span>
                  </div>
                  <div className="flex flex-col gap-3 mb-3">
                    {bonus.icon}
                    <h4 className="text-[11px] sm:text-sm font-bold leading-tight">{bonus.t}</h4>
                  </div>
                  <p className="text-[9px] sm:text-xs text-gray-500 leading-relaxed line-clamp-3 sm:line-clamp-none">{bonus.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ticker 1 */}
      <div className="bg-[#FF6321] py-3 overflow-hidden whitespace-nowrap flex">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex items-center gap-8 px-4 animate-marquee">
            <span className="text-[10px] font-black uppercase flex items-center gap-2"><Zap size={12} fill="white" /> BÔNUS EXCLUSIVOS</span>
            <span className="text-[10px] font-black uppercase flex items-center gap-2"><Target size={12} /> VALOR: R$808</span>
            <span className="text-[10px] font-black uppercase flex items-center gap-2"><Award size={12} /> ACESSO VITALÍCIO</span>
          </div>
        ))}
      </div>

      {/* Social Proof */}
      <section className="py-24 px-5 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#FF6321] text-[10px] font-black uppercase tracking-[0.3em] mb-4">DIRETO DO GRUPO VIP</p>
          <h2 className="text-[2.2rem] sm:text-5xl font-black mb-4 leading-none">
            Depoimentos Reais <span className="text-[#FF6321]">dos Alunos</span>
          </h2>
          <p className="text-gray-500 text-xs mb-12">Prints reais do nosso grupo exclusivo no WhatsApp</p>

          <div className="relative max-w-[280px] sm:max-w-sm mx-auto">
            <div className="aspect-[9/16] rounded-[2.5rem] overflow-hidden border-4 border-[#25D366] shadow-[0_0_30px_rgba(37,211,102,0.2)] bg-black">
              <AnimatePresence mode="wait">
                <motion.img
                  key={testimonialIndex}
                  src={testimonialImages[testimonialIndex]}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-contain"
                  alt="Depoimento"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
            </div>
            
            {/* Dots */}
            <div className="flex justify-center gap-2 mt-3 sm:mt-6">
              {testimonialImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    testimonialIndex === i ? "bg-[#25D366] w-4" : "bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ticker 2 */}
      <div className="bg-black border-y border-white/5 py-4 overflow-hidden whitespace-nowrap flex">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex items-center gap-12 px-6 animate-marquee-reverse">
            <span className="text-[9px] font-bold text-gray-500 uppercase flex items-center gap-2"><Star size={12} fill="#FFB800" color="#FFB800" /> +500 PESSOAS SATISFEITAS</span>
            <span className="text-[9px] font-bold text-gray-500 uppercase flex items-center gap-2"><TrendingUp size={12} /> RESULTADOS REAIS</span>
            <span className="text-[9px] font-bold text-gray-500 uppercase flex items-center gap-2"><Users size={12} /> FATURANDO COM AÇAÍ</span>
          </div>
        ))}
      </div>

      {/* Pricing Section */}
      <section id="oferta" className="py-32 px-5 sm:px-6 bg-black scroll-mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#FFB800] text-[10px] font-black uppercase tracking-[0.3em] mb-6">OFERTA ESPECIAL</p>
          <h2 className="text-[2.5rem] sm:text-6xl font-black mb-6 leading-[0.9] uppercase tracking-tighter">
            ESCOLHA O MELHOR <span className="text-[#FF6321]">PLANO PARA VOCÊ</span>
          </h2>
          <p className="text-gray-500 text-sm mb-20 font-medium">Comece sua jornada para o açaí lucrativo hoje mesmo</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {/* Plan 1: Combo Completo */}
            <div className="relative bg-[#0F0F0F] border-2 border-[#FF6321] p-7 sm:p-10 rounded-[3rem] text-left shadow-[0_0_60px_rgba(255,99,33,0.2)] flex flex-col scale-105 z-10">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#FFB800] text-black text-[11px] font-black px-6 py-1.5 rounded-full uppercase tracking-widest shadow-xl">
                Mais Vendido
              </div>
              <div className="flex items-center gap-3 mb-2">
                <Trophy size={24} className="text-[#FFB800]" />
                <h3 className="text-2xl font-black">Combo Completo + 8 Bônus</h3>
              </div>
              <p className="text-xs text-gray-400 mb-8 font-medium">Método completo + todos os bônus exclusivos</p>
              
              <div className="mb-10">
                <p className="text-gray-500 line-through text-sm mb-1">R$197</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl sm:text-7xl font-black text-[#FFB800] tracking-tighter drop-shadow-[0_0_20px_rgba(255,184,0,0.3)]">R$ 17,00</span>
                </div>
                <p className="text-[10px] text-gray-500 mt-2 uppercase font-black tracking-widest opacity-80">Pagamento único • Acesso vitalício</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  "Acesso VITALÍCIO aos 8 módulos + app exclusivo",
                  "Vídeo aulas passo a passo",
                  "25 montagens gourmet irresistíveis",
                  "Técnica de base ultra cremosa",
                  "Guia de embalagem e delivery",
                  "Roteiro de vendas em 7 dias",
                  "+ 8 BÔNUS INCLUSOS:",
                  "Calculadora de Custos e Lucros",
                  "Guia de Fornecedores Premium",
                  "Manual de Atendimento WhatsApp",
                  "Pack de Fotos para Divulgação",
                  "Planilha de Gestão Financeira",
                  "Certificado de Conclusão"
                ].map((item, i) => (
                  <li key={i} className={`flex items-center gap-2 text-[10px] ${i >= 6 ? "text-[#FFB800] font-bold" : "text-gray-300"}`}>
                    <CheckCircle2 size={12} className={i >= 6 ? "text-[#FFB800]" : "text-[#FF6321]"} />
                    {item}
                  </li>
                ))}
              </ul>

              <a href="https://pay.kiwify.com.br/COMBO_ACAI" className="block">
                <button className="w-full bg-[#FF6321] py-6 rounded-2xl font-black uppercase tracking-tight text-base shadow-[0_20px_40px_rgba(255,99,33,0.3)] hover:bg-[#FF7A41] transition-all border-b-4 border-black/20">
                  Quero o Combo por R$17,00
                </button>
              </a>
            </div>

            {/* Plan 2: Método Básico */}
            <div className="bg-[#0F0F0F] border border-white/5 p-7 sm:p-10 rounded-[3rem] text-left flex flex-col opacity-80 hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-3 mb-2">
                <BookOpen size={24} className="text-[#FF6321]" />
                <h3 className="text-2xl font-black">Método Básico</h3>
              </div>
              <p className="text-xs text-gray-400 mb-8 font-medium">Opção econômica para começar</p>
              
              <div className="mb-10">
                <p className="text-gray-500 line-through text-sm mb-1">R$29</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl sm:text-7xl font-black text-white tracking-tighter">R$ 9,90</span>
                </div>
                <p className="text-[10px] text-gray-500 mt-2 uppercase font-black tracking-widest opacity-80">Pagamento único • Acesso por 6 meses</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  "Apenas 20 montagens em PDF",
                  "Acesso por 6 meses",
                  "Sem bônus exclusivos",
                  "Sem vídeo aulas",
                  "Sem acesso vitalício",
                  "Sem suporte"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-[10px] text-gray-300">
                    {i < 2 ? (
                      <CheckCircle2 size={12} className="text-[#FF6321]" />
                    ) : (
                      <div className="w-3 h-3 rounded-full border border-white/20" />
                    )}
                    <span className={i >= 2 ? "opacity-30" : ""}>{item}</span>
                  </li>
                ))}
              </ul>

              <a href="https://pay.kiwify.com.br/BASICO_ACAI" className="block">
                <button className="w-full bg-white/5 border border-white/10 py-6 rounded-2xl font-black uppercase tracking-tight text-base hover:bg-white/10 transition-all">
                  Quero o Método por R$ 9,90
                </button>
              </a>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-[9px] text-gray-500 uppercase font-bold tracking-widest mb-4">Pagamento 100% Seguro</p>
            <div className="flex items-center justify-center gap-6 opacity-40 grayscale">
              <span className="text-[10px] font-black">CARTÃO</span>
              <span className="text-[10px] font-black">PIX</span>
              <span className="text-[10px] font-black">BOLETO</span>
            </div>
            <p className="text-[9px] text-gray-400 mt-6 flex items-center justify-center gap-2 font-bold uppercase tracking-widest">
              <Smartphone size={12} className="text-[#25D366]" /> Acesso enviado direto no WhatsApp • Material liberado na hora
            </p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <div className="flex items-center gap-1">
                <Star size={10} fill="#FFB800" className="text-[#FFB800]" />
                <span className="text-white font-black text-xs">4.9/5</span>
              </div>
              <div className="w-px h-3 bg-white/20" />
              <span className="text-white font-bold text-[10px] uppercase tracking-wider flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                Acesso Imediato
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto bg-[#0F0F0F] border border-white/5 p-12 rounded-[3rem] text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6321]/10 blur-[60px] rounded-full"></div>
          <div className="w-20 h-20 rounded-full bg-[#FF6321]/10 text-[#FF6321] flex items-center justify-center mx-auto mb-8">
            <ShieldCheck size={40} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black mb-4">
            Garantia Incondicional de <span className="text-[#FF6321]">14 Dias</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            Se por qualquer motivo você não ficar satisfeita com o método, devolvemos <strong>100% do seu dinheiro</strong>. Sem perguntas, sem burocracia. O risco é todo nosso.
          </p>
          <p className="text-[10px] text-gray-600 uppercase font-bold">Você tem 14 dias para testar tudo. Se não gostar, basta pedir o reembolso.</p>
        </div>
      </section>

      {/* Final Scarcity */}
      <section className="py-24 px-5 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#FF6321] text-[10px] font-black uppercase tracking-[0.3em] mb-4">ÚLTIMAS VAGAS COM DESCONTO</p>
          <h2 className="text-[2.2rem] sm:text-5xl font-black mb-4 leading-none">
            Não perca essa <span className="text-[#FF6321]">oportunidade</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mb-12 max-w-xl mx-auto font-medium">
            O preço de <strong className="text-[#FFB800]">R$ 9,90</strong> é por tempo limitado. Quando o cronômetro zerar, o valor volta para R$ 29. Garanta agora!
          </p>

          <a href="#oferta" className="block">
            <motion.button
              whileHover={{ scale: 1.03, backgroundColor: "#FF7A41" }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto bg-[#FF6321] text-white font-black py-6 px-14 rounded-2xl text-xl sm:text-2xl shadow-[0_20px_50px_rgba(255,99,33,0.4)] transition-all flex items-center justify-center gap-3 uppercase tracking-tighter mb-10 border-b-4 border-black/20"
            >
              <Zap size={24} fill="currentColor" />
              GARANTIR MINHA VAGA POR R$ 9,90
            </motion.button>
          </a>

          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-4 text-[9px] text-gray-500 font-bold uppercase tracking-widest">
              <span className="flex items-center gap-1"><Smartphone size={12} /> Acesso enviado pelo WhatsApp</span>
              <span className="flex items-center gap-1"><ShieldCheck size={12} /> Garantia de 14 dias</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-5 sm:px-6 bg-[#0F0F0F]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[2.2rem] sm:text-5xl font-black mb-12 text-center leading-none">
            Perguntas <span className="text-[#FF6321]">Frequentes</span>
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-white/5 rounded-3xl overflow-hidden bg-black/40">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between hover:bg-white/5 transition-all"
                >
                  <div className="flex items-center gap-3">
                    {faq.icon}
                    <span className="font-bold text-[11px] sm:text-sm leading-tight">{faq.q}</span>
                  </div>
                  <ChevronDown 
                    size={16} 
                    className={`text-[#FF6321] transition-transform duration-300 shrink-0 ${activeFaq === i ? "rotate-180" : ""}`} 
                  />
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-5 sm:p-6 pt-0 text-[10px] sm:text-xs text-gray-400 leading-relaxed border-t border-white/5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 text-center border-t border-white/5">
        <p className="text-[9px] text-gray-600 uppercase tracking-[0.2em]">
          © 2026 Chef em Casa. Todos os direitos reservados.
        </p>
      </footer>

      {/* Styles for Marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 25s linear infinite;
        }
      `}</style>
    </div>
  );
}
