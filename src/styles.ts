// Styles for App.tsx components
export const styles = {
  // Navigation styles
  nav: {
    container: "fixed top-0 left-0 right-0 z-50 bg-[#0a0a0c] border-b border-[rgba(255,255,255,0.1)]",
    inner: "max-w-7xl mx-auto px-6 py-4 flex items-center justify-between",
    brand: "font-['Clash_Grotesk:Semibold',_sans-serif] text-[#ffffff] text-2xl",
    links: "hidden md:flex gap-8 text-[#ffffff] text-sm",
    link: "hover:text-[#ebff57] transition-colors"
  },

  // Hero section styles
  hero: {
    container: "relative min-h-screen bg-[#0a0a0c] flex items-center justify-center overflow-hidden dotted-grid-hero",
    background: "absolute inset-0 opacity-15 z-0",
    backgroundImage: "absolute inset-0 w-full h-full bg-center bg-cover",
    floatingImage: "absolute right-[8%] top-[65%] hidden xl:block z-10",
    imageContainer: "bg-white rounded-3xl w-56 h-56 overflow-hidden",
    imageInner: "w-full h-full bg-cover bg-center rounded-2xl",
    skillElement: "absolute left-[8%] top-[20%] hidden xl:block z-10",
    skillElement2: "absolute right-[8%] top-[25%] hidden xl:block z-10",
    skillElement3: "absolute left-[12%] top-[65%] hidden xl:block z-10",
    skillBox: "flex items-center gap-3",
    skillLabel: "w-52 h-24 border-2 border-[#ebff57] rounded-lg rotate-12 flex items-center justify-center",
    skillLabel2: "w-44 h-20 border-2 border-[#ebff57] rounded-lg -rotate-6 flex items-center justify-center",
    skillLabel3: "w-40 h-20 border-2 border-[#ebff57] rounded-lg rotate-8 flex items-center justify-center",
    skillText: "text-[#ffffff] font-['Clash_Grotesk:Semibold',_sans-serif] text-lg",
    skillTextRotated: "text-[#ffffff] font-['Clash_Grotesk:Semibold',_sans-serif] text-lg rotate-12",
    skillTextRotated2: "text-[#ffffff] font-['Clash_Grotesk:Semibold',_sans-serif] text-lg -rotate-6",
    skillTextRotated3: "text-[#ffffff] font-['Clash_Grotesk:Semibold',_sans-serif] text-lg rotate-8",
    skillDot: "w-2.5 h-2.5 border border-[#ebff57] rounded-full bg-[#0a0a0c]",
    mainContent: "relative z-20 max-w-4xl mx-auto text-center px-6 pt-20",
    title: "font-['Clash_Grotesk:Medium',_sans-serif] text-[#ffffff] text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight mb-6",
    subtitle: "font-['Clash_Grotesk:Regular',_sans-serif] text-[#ffffff] text-lg md:text-xl max-w-2xl mx-auto mb-8",
    button: "bg-[#ebff57] text-[#0a0a0c] px-8 py-4 rounded-full font-['Clash_Grotesk:Medium',_sans-serif] text-lg hover:bg-[#d9e84a] transition-colors",
    scrollIndicator: "absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20",
    scrollContainer: "w-6 h-10 border-2 border-[#ebff57] rounded-full flex justify-center",
    scrollDot: "w-1 h-2 bg-[#ebff57] rounded-full mt-2"
  },

  // About section styles
  about: {
    container: "py-20 bg-[#000000]",
    inner: "max-w-6xl mx-auto px-6",
    textContainer: "text-center",
    textLine: "flex flex-wrap items-center justify-center gap-4 text-[#ffffff] text-3xl md:text-5xl lg:text-6xl font-['Clash_Grotesk:Regular',_sans-serif] leading-tight mb-8",
    textLineLast: "text-[#ffffff] text-3xl md:text-5xl lg:text-6xl font-['Clash_Grotesk:Regular',_sans-serif] leading-tight",
    imageCircle: "bg-white rounded-full w-16 h-16 overflow-hidden",
    imageInner: "w-full h-full bg-cover bg-center"
  },

  // Services section styles
  services: {
    container: "py-20 bg-[#000000]",
    inner: "max-w-7xl mx-auto px-6",
    grid: "grid lg:grid-cols-12 gap-12 items-start",
    leftColumn: "lg:col-span-4",
    rightColumn: "lg:col-span-8",
    sectionHeader: "flex items-center gap-2 mb-4",
    sectionIcon: "w-4 h-4",
    sectionLabel: "text-[#ffffff] text-lg",
    sectionTitle: "text-[#ffffff] text-4xl md:text-5xl lg:text-6xl font-['Clash_Grotesk:Regular',_sans-serif] leading-tight mb-8",
    circularElement: "mt-16",
    circleContainer: "relative w-48 h-48 mx-auto",
    circleOuter: "absolute inset-0 border border-white rounded-full bg-[#050809]",
    circleInner: "absolute inset-8 bg-[#0a0a0c] rounded-full flex items-center justify-center",
    circleIcon: "w-12 h-12 transform rotate-45",
    circleText: "absolute inset-0 animate-spin-slow",
    circleSvg: "w-full h-full",
    servicesGrid: "grid md:grid-cols-2 gap-6",
    serviceCard: "bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-[#ebff57]/50 transition-all duration-300",
    serviceIcon: "mb-6",
    serviceTitle: "text-[#ffffff] text-2xl font-['Clash_Grotesk:Medium',_sans-serif] mb-4",
    serviceDescription: "text-[#ffffff] text-lg font-['Clash_Grotesk:Light',_sans-serif] leading-relaxed"
  },

  // Projects section styles
  projects: {
    container: "py-20 bg-[#0a0a0c]",
    inner: "max-w-7xl mx-auto px-6",
    header: "text-center mb-16",
    headerContainer: "flex items-center justify-center gap-2 mb-4",
    headerIcon: "w-4 h-4",
    headerLabel: "text-[#ffffff] text-lg",
    headerTitle: "text-[#ffffff] text-4xl md:text-5xl lg:text-6xl font-['Clash_Grotesk:Regular',_sans-serif] leading-tight max-w-4xl mx-auto",
    grid: "grid md:grid-cols-2 gap-8",
    projectCard: "group cursor-pointer",
    projectContainer: "bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 hover:border-[#ebff57]/50 transition-all duration-300",
    projectImage: "aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center",
    projectImageText: "text-[#ffffff]/50 text-lg",
    projectInfo: "p-8",
    projectMeta: "flex items-center justify-between mb-4",
    projectCategory: "text-[#ebff57] text-sm font-['Clash_Grotesk:Light',_sans-serif] uppercase tracking-wider",
    projectBadge: "bg-[#ebff57] text-[#0a0a0c] px-4 py-1 rounded-full text-sm font-medium",
    projectTitle: "text-[#ffffff] text-2xl font-['Clash_Grotesk:Medium',_sans-serif] mb-4 group-hover:text-[#ebff57] transition-colors",
    projectDescription: "text-[#ffffff]/80 text-lg font-['Clash_Grotesk:Light',_sans-serif] leading-relaxed mb-6",
    projectTech: "flex flex-wrap gap-2",
    projectTechItem: "bg-white/10 text-[#ffffff] px-3 py-1 rounded-full text-sm"
  },

  // Experience section styles
  experience: {
    container: "py-20 bg-[#000000]",
    inner: "max-w-6xl mx-auto px-6",
    header: "text-center mb-16",
    headerContainer: "flex items-center justify-center gap-2 mb-4",
    headerIcon: "w-4 h-4",
    headerLabel: "text-[#ffffff] text-lg",
    headerTitle: "text-[#ffffff] text-4xl md:text-5xl lg:text-6xl font-['Clash_Grotesk:Regular',_sans-serif] leading-tight max-w-4xl mx-auto",
    timeline: "relative",
    timelineLine: "absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-[#ebff57] to-transparent",
    experienceItem: "relative flex items-center mb-16",
    experienceItemEven: "md:flex-row",
    experienceItemOdd: "md:flex-row-reverse",
    timelineDot: "absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-[#ebff57] rounded-full border-4 border-[#000000] z-10",
    experienceContent: "w-full md:w-5/12 ml-16 md:ml-0",
    experienceContentEven: "md:pr-8",
    experienceContentOdd: "md:pl-8",
    experienceCard: "bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-3xl p-8 border border-white/20",
    experiencePeriod: "text-[#ebff57] text-sm font-['Clash_Grotesk:Light',_sans-serif] mb-2",
    experienceRole: "text-[#ffffff] text-2xl font-['Clash_Grotesk:Medium',_sans-serif] mb-2",
    experienceCompany: "text-[#ffffff]/80 text-lg font-['Clash_Grotesk:Regular',_sans-serif] mb-4",
    experienceDescription: "text-[#ffffff]/70 text-base font-['Clash_Grotesk:Light',_sans-serif] leading-relaxed mb-6",
    achievements: "space-y-2",
    achievementsTitle: "text-[#ffffff] text-sm font-['Clash_Grotesk:Medium',_sans-serif] mb-3",
    achievementItem: "flex items-center gap-2 text-[#ffffff]/80 text-sm",
    achievementDot: "w-1.5 h-1.5 bg-[#ebff57] rounded-full",
    spacer: "hidden md:block w-2/12"
  },

  // Portfolio section styles
  portfolio: {
    container: "py-20 bg-[#000000]",
    inner: "max-w-7xl mx-auto px-6",
    header: "text-center mb-16",
    headerContainer: "flex items-center justify-center gap-2 mb-4",
    headerIcon: "w-4 h-4",
    headerLabel: "text-[#ffffff] text-lg",
    headerTitle: "text-[#ffffff] text-4xl md:text-5xl lg:text-6xl font-['Clash_Grotesk:Regular',_sans-serif] leading-tight max-w-4xl mx-auto",
    grid: "grid md:grid-cols-2 gap-8",
    portfolioCard: "group cursor-pointer",
    portfolioContainer: "bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 hover:border-[#ebff57]/50 transition-all duration-300",
    portfolioImage: "aspect-video relative overflow-hidden",
    portfolioImageInner: "w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105",
    portfolioInfo: "p-8",
    portfolioMeta: "flex items-center justify-between mb-4",
    portfolioCategory: "text-[#ebff57] text-sm font-['Clash_Grotesk:Light',_sans-serif] uppercase tracking-wider",
    portfolioBadge: "bg-[#ebff57] text-[#0a0a0c] px-4 py-1 rounded-full text-sm font-medium flex items-center gap-2",
    portfolioBadgeIcon: "w-4 h-4",
    portfolioTitle: "text-[#ffffff] text-2xl font-['Clash_Grotesk:Medium',_sans-serif] group-hover:text-[#ebff57] transition-colors"
  },

  // Footer styles
  footer: {
    container: "bg-[#0a0a0c] border-t border-white/10",
    inner: "max-w-7xl mx-auto px-6 py-12",
    mainContent: "grid md:grid-cols-2 gap-8 mb-8",
    brandSection: "",
    brandTitle: "font-['Clash_Grotesk:Semibold',_sans-serif] text-[#ffffff] text-3xl mb-4",
    brandDescription: "text-[#ffffff]/70 text-base leading-relaxed",
    contactSection: "",
    contactTitle: "text-[#ffffff] text-lg font-['Clash_Grotesk:Medium',_sans-serif] mb-4",
    contactLinks: "space-y-3 mb-6",
    contactLink: "block text-[#ffffff]/70 hover:text-[#ebff57] transition-colors",
    socialLinks: "flex gap-4",
    socialLink: "w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#ebff57] hover:text-[#0a0a0c] transition-all",
    socialIcon: "w-5 h-5",
    bottomSection: "border-t border-white/10 pt-8",
    bottomContent: "flex flex-col md:flex-row items-center justify-between gap-4",
    copyright: "text-[#ffffff]/60 text-sm",
    legalLinks: "flex items-center gap-6 text-[#ffffff]/60 text-sm",
    legalLink: "hover:text-[#ebff57] transition-colors"
  },

  // Common styles
  common: {
    appContainer: "bg-[#000000] min-h-screen overflow-x-hidden",
    motionDiv: "",
    svgIcon: "w-16 h-16",
    svgIconSmall: "w-4 h-4",
    svgIconMedium: "w-5 h-5",
    svgIconLarge: "w-12 h-12"
  }
};

// Animation configurations
export const animations = {
  fadeInUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 }
  },
  fadeInRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.8, delay: 0.4 }
  },
  rotateFloat: {
    animate: { rotate: [0, -8, 0] },
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const }
  },
  rotateFloat2: {
    animate: { rotate: [0, 15, 0] },
    transition: { duration: 8, repeat: Infinity, ease: "easeInOut" as const }
  },
  rotateFloat3: {
    animate: { rotate: [0, -10, 0] },
    transition: { duration: 7, repeat: Infinity, ease: "easeInOut" as const }
  },
  rotateFloat4: {
    animate: { rotate: [0, 12, 0] },
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const }
  },
  scrollBounce: {
    animate: { y: [0, 12, 0] },
    transition: { duration: 1.5, repeat: Infinity }
  }
};

// Viewport configurations
export const viewport = {
  once: true
};
