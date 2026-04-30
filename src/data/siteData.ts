import todoEvolveImage from '../../assets/images/TodoEvolve.jpg'
import weiboImage from '../../assets/images/weibo.jpg'
import zhenaiImage from '../../assets/images/zhenai.jpg'

export const siteMeta = {
  name: 'Jyzan',
  identity: 'Undergraduate student at Shanghai Jiao Tong University',
  major: 'Automation',
  school: 'Shanghai Jiao Tong University',
  schoolUrl: 'https://www.sjtu.edu.cn/',
  githubUrl: 'https://github.com/Jyzan',
  youtubeUrl: 'https://www.youtube.com/@ManCITEA',
  email: 'jyz366200@gmail.com',
  qqMail: '3821355430@qq.com',
  openReviewUrl: 'https://openreview.net/profile?id=%7EYanzuo_Jiang1',
  todoEvolveRepoUrl: 'https://github.com/Jyzan/TodoEvolve',
  todoEvolvePaperUrl: 'https://arxiv.org/abs/2602.07839',
  weiboEmotionRepoUrl: 'https://github.com/Jyzan/Weibo_emotion_sort',
  zhenaiAnalysisRepoUrl: 'https://github.com/Jyzan/Zhenai_analysis',
  blogUrl: '#blog',
} as const

export const heroButtons = [
  { label: 'YouTube Channel', href: siteMeta.youtubeUrl, variant: 'primary' as const, external: true },
  { label: 'OpenReview', href: siteMeta.openReviewUrl, variant: 'secondary' as const, external: true },
  { label: 'Contact Me', href: siteMeta.githubUrl, variant: 'secondary' as const, external: true },
  { label: 'Blog', href: siteMeta.blogUrl, variant: 'secondary' as const, external: false },
]

export const quickLinks = [
  { label: 'GitHub', value: '@Jyzan', href: siteMeta.githubUrl },
  { label: 'YouTube', value: '@ManCITEA', href: siteMeta.youtubeUrl },
  { label: 'OpenReview', value: 'Research Profile', href: siteMeta.openReviewUrl },
  { label: 'Blog', value: 'Notes and drafts', href: siteMeta.blogUrl },
  { label: 'Email', value: siteMeta.email, href: `mailto:${siteMeta.email}` },
  { label: 'QQ', value: siteMeta.qqMail, href: `mailto:${siteMeta.qqMail}` },
]

export const researchInterests = [
  {
    title: 'Embodied Intelligence',
    description:
      'I am interested in how intelligent systems ground reasoning in perception, action, and physical interaction with the world.',
  },
  {
    title: 'AI Agents',
    description:
      'I follow agentic systems that can plan, coordinate tools, maintain context, and complete meaningful tasks with autonomy.',
  },
  {
    title: 'Robotics / Automation',
    description:
      'My coursework in Automation keeps me close to control, systems thinking, and the engineering realities behind intelligent behavior.',
  },
  {
    title: 'Multimodal Interaction',
    description:
      'I am curious about interfaces where language, vision, and action come together to support richer human-computer collaboration.',
  },
]

export const researchUpdates = [
  {
    period: 'Now',
    title: 'Exploring embodied intelligence and AI agents',
    description: 'Building a clearer personal research direction around grounded intelligence, reasoning, and interactive systems.',
  },
  {
    period: 'Current Work',
    title: 'Building a personal research portfolio',
    description: 'Turning scattered coursework, prototypes, and reading notes into a structured portfolio that is easier to share and extend.',
  },
  {
    period: 'Reading',
    title: 'Reading papers on agentic systems and embodied AI',
    description: 'Collecting references and summarizing ideas that connect decision-making, perception, and practical implementation.',
  },
  {
    period: 'Preparation',
    title: 'Preparing project repositories and research notes',
    description: 'Organizing repositories, writing clearer documentation, and setting up a base for future publications and blog posts.',
  },
]

export const researchFigures = [
  {
    imageSrc: todoEvolveImage,
    title: 'TodoEvolve',
    description:
      'A key figure from the TodoEvolve paper, which presents a framework for task-adaptive agentic planning across different planning targets, representations, and application domains.',
    linkLabel: 'View paper',
    href: siteMeta.todoEvolvePaperUrl,
  },
  {
    imageSrc: weiboImage,
    title: 'Weibo Emotion Sort',
    description:
      'A Python-based Weibo comment analysis tool that crawls comments, performs sentiment classification with the DeepSeek API, and generates visual reports such as pie charts and word clouds.',
    linkLabel: 'View repository',
    href: siteMeta.weiboEmotionRepoUrl,
  },
  {
    imageSrc: zhenaiImage,
    title: 'Zhenai Analysis',
    description:
      'A Python-based data analysis system for Zhenai that crawls and studies matchmaking platform data to explore modern relationship preferences, user profiles, and social trends through visualization.',
    linkLabel: 'View repository',
    href: siteMeta.zhenaiAnalysisRepoUrl,
  },
]

export const featuredRepositories = [
  {
    name: 'TodoEvolve',
    description:
      'The official implementation of TodoEvolve, a framework for task-adaptive agentic planning designed for diverse agent settings, planning structures, and long-horizon tasks.',
    tags: ['Research', 'AI', 'Agents'],
    href: siteMeta.todoEvolveRepoUrl,
  },
  {
    name: 'Weibo_emotion_sort',
    description:
      'A Python tool for large-scale Weibo comment crawling and sentiment analysis, with DeepSeek-powered classification, pause/resume support, visual charts, word clouds, auto-update utilities, and a desktop-friendly GUI.',
    tags: ['Python', 'DeepSeek API', 'Sentiment Analysis'],
    href: siteMeta.weiboEmotionRepoUrl,
  },
  {
    name: 'Zhenai_analysis',
    description:
      'A Python-based Zhenai data analysis system that crawls user profiles, analyzes dating preferences, performs text sentiment analysis, and visualizes patterns such as age, height, region, profession, education, income, and lifestyle signals.',
    tags: ['Python', 'Web Scraping', 'Data Visualization'],
    href: siteMeta.zhenaiAnalysisRepoUrl,
  },
]

export const blogPosts = [
  {
    title: 'Research Notes on Embodied AI',
    description: 'A future place for paper notes, key ideas, and reflections from reading on embodied intelligence.',
    meta: 'Markdown-ready',
  },
  {
    title: 'Agent Systems Reading Log',
    description: 'A placeholder article series for summarizing agent frameworks, evaluation ideas, and implementation lessons.',
    meta: 'Could use GitHub Issues',
  },
  {
    title: 'Project Build Diary',
    description: 'A placeholder stream of updates about experiments, repo cleanup, and how ideas evolve into working projects.',
    meta: 'Could use Notion or a CMS',
  },
]
