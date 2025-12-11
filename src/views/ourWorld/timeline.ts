/*
  宇宙与地球生命演化时间线（大爆炸 → 寒武纪生物大爆发）
  每一项包含：名称、时间或持续时间、简要说明、当时的地质/环境状态、以及不确定性提示（如有）
  注：时间以约数表示，单位为“亿年(10^8年)前/百万年(Ma)/十亿年(Ga)”等，基于当前科学共识但部分节点存在争议或不确定范围。
*/

export interface TimelineEvent {
  name: string;
  time: string; // 人类可读的时间描述
  duration?: string; // 如适用，持续时间
  description: string;
  geologicalState: string; // 当时的大气/海洋/构造/板块/陆地等状态简述
  uncertainty?: string; // 可选：该节点的主要不确定性或争议
}

export const timeline: TimelineEvent[] = [
  {
    name: '宇宙大爆炸 (Big Bang)',
    time: '约138亿年前 (13.8 Ga)',
    description: '宇宙从极高密度与高温状态迅速膨胀并冷却，产生最初的基本粒子与辐射。',
    geologicalState: '非地质意义上的阶段：极高温等离子体，随后形成光子、基本粒子与原初轻元素。',
    uncertainty: '时间估计基于宇宙学观测（宇宙微波背景、红移、宇宙学参数）。'
  },
  {
    name: '复合/释放宇宙微波背景 (Recombination / CMB)',
    time: '约138亿年前后的数十万年后 (~380,000 年)',
    description: '宇宙冷却到电子与原子结合，光子自由传播形成宇宙微波背景辐射。',
    geologicalState: '仍然是宇宙学早期状态：气体主要为氢和氦，尚无恒星或星系。'
  },
  {
    name: '第一代恒星与星系形成 (Population III)',
    time: '约13.5–13.2 Ga（数亿年后）',
    description: '无金属的第一代恒星点亮宇宙，开始产生更重元素，逐步形成原始星系。',
    geologicalState: '宇宙进入再电离时期，星际与原初气体开始聚集。',
    uncertainty: '精确时间有观测不确定性，但属“宇宙早期”范畴。'
  },
  {
    name: '银河系早期组装',
    time: '约13.6–13.2 Ga',
    description: '原始星系与次级合并逐步形成现在的银河系雏形。',
    geologicalState: '宇宙结构形成期，星系与暗物质晕共同演化。'
  },
  {
    name: '太阳系形成',
    time: '约45.68亿年前 (4.568 Ga)',
    description: '原行星盘在一颗年轻恒星周围塌缩，形成太阳与行星胚芽。',
    geologicalState: '太阳系原行星盘富含尘埃与气体，颗粒碰撞聚合形成行星胚胎。'
  },
  {
    name: '地球形成',
    time: '约45.4亿年前 (4.54 Ga)',
    description: '行星胚胎通过吞并和碰撞逐步长大，最终形成地球。',
    geologicalState: '高能碰撞频繁、成岩与差异化（铁核、岩石地幔）进行中；原始大气由挥发物、CO2、N2等组成。'
  },
  {
    name: '月球形成（巨撞假说）',
    time: '约45.1–45.0亿年前 (~4.51 Ga)',
    description: '地球与一颗火星大小天体（Theia）发生巨大碰撞，抛出物质组合形成月球。',
    geologicalState: '极端熔融與再结晶，地表高温，早期大气与海洋尚未稳定。'
  },
  {
    name: '早期地表冷却与最早的海洋',
    time: '约44–40亿年前',
    description: '地表逐步冷却，水汽冷凝形成原始海洋，开始沉积早期岩石记录。',
    geologicalState: '活跃的板块/伴随高温晚期差异化；原始海洋、还原性气氛（低氧）。'
  },
  {
    name: '晚重轰击期 (Late Heavy Bombardment, LHB) — 可能阶段',
    time: '约41–38亿年前 (4.1–3.8 Ga)',
    duration: '可能持续数千万到数亿年',
    description: '大量彗星与小行星撞击地球与其他行星，影响早期地表环境与有机物运移。',
    geologicalState: '高撞击率、局部熔融和蒸发，可能反复重置浅层岩石记录。',
    uncertainty: 'LHB 的强度与精确时段在学界仍有争议。'
  },
  {
    name: '最早的生命迹象（化学/沉积记录）',
    time: '约38–35亿年前 (3.8–3.5 Ga)',
    description: '碳同位素异常、含碳沉积物与类球藻（stromatolite）等指向早期微生物生命的存在。',
    geologicalState: '还原性海洋与低氧大气，板块或类板块构造初期；陆地分布有限。',
    uncertainty: '某些证据可被非生物过程解释，早期生命起源精确时间仍有争议。'
  },
  {
    name: '原核生物主导地球（古菌与细菌）',
    time: '约35–25亿年前',
    description: '原核微生物成为主要生物群体，海洋化学与生物地球化学循环開始被生物过程驱動。',
    geologicalState: '大气含氧极低，海洋普遍缺氧或亚氧（局部硫化环境）。'
  },
  {
    name: '大氧化事件 (Great Oxidation Event, GOE)',
    time: '约24–20亿年前 (2.4–2.0 Ga)',
    description: '光合作用（产氧光合细菌）将游离氧引入大气，全球氧浓度显著上升，改变了生物与化学演化路径。',
    geologicalState: '氧化性环境逐步建立，海洋與大气化学發生根本性变化（例如铁锈带消失，硫循环改变）。',
    uncertainty: 'GOE 的速率、分阶段特征及对生物多样性的直接影响仍有研究。'
  },
  {
    name: '真核细胞出现与演化（真核化）',
    time: '约20–10亿年前（常见表示 ~18–12 亿年前）',
    description: '通过内共生起源与膜化复杂化，真核细胞出现，为复杂多细胞生命奠定细胞学基础。',
    geologicalState: '氧含量逐步上升但仍低于现代；大陆地壳成长與超大陆循环影响海洋营养盐与环境稳定性。',
    uncertainty: '真核生物起源的确切时间与过程细节尚存在争议。'
  },
  {
    name: '超大陆罗迪尼亚 (Rodinia) 的拼合与裂解',
    time: '拼合约11–9 亿年前 (1.1–0.9 Ga)，裂解始于约7.5–7.0 亿年前',
    description: '大陆集合成超大陆，随后裂解，影响海平面、营养盐供给与气候（与冰期相关）。',
    geologicalState: '大陆广泛拼合、长期侵蚀与风化、海洋化学与循环受构造影响。',
    uncertainty: '超大陆精确时序及其与气候事件的直接因果关系仍在研究中。'
  },
  {
    name: '雪球地球冰期（Sturtian & Marinoan）',
    time: 'Sturtian: 约7.17–6.6 亿年前 (717–660 Ma); Marinoan: 约6.5–6.35 亿年前 (650–635 Ma)',
    duration: '每次可能持续数百万到数千万年',
    description: '广泛的低温冰盖可能覆盖全球大部分海洋与陆地，对生物演化产生重大压力与后续化学变化（例如氧化与营养盐释放）。',
    geologicalState: '极端寒冷，海平面与海洋循环受抑制；冰盖消退期伴随强烈化学反应与沉积。',
    uncertainty: '局部与全球性冰盖程度、全球覆盖范围与触发机制仍有讨论。'
  },
  {
    name: '埃迪卡拉生物群 (Ediacaran biota)',
    time: '约6.35–5.41 亿年前 (635–541 Ma)',
    description: '出现早期大型多细胞生物和体型复杂化的证据（扁平体、絮状体等），为寒武纪生物大爆发铺垫生态基础。',
    geologicalState: '冰期后环境逐步恢复，营养盐與氧化条件改善，浅海环境适宜大型机体生存。'
  },
  {
    name: '寒武纪生物大爆发 (Cambrian Explosion)',
    time: '约5.41亿年前 (541 Ma) 开始，主要阶段在随后的数千万年内',
    duration: '核心阶段约在数千万年尺度内（近似 541–510 Ma）',
    description: '短时间内出现大量新的门类形态、复杂体节、硬壳化與生态位快速分化，现代动物门类的许多基本体型出现。',
    geologicalState: '海洋生态系统复杂化，氧含量在浅海显著上升，沉积环境多样化（浅海、潮间带、深海）。',
    uncertainty: '“爆发”速率與驱动机制（氧气、生态互作、发育基因组学等）仍是多因素讨论主题。'
  }
];

export default timeline;
