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
    title: 'Agent Workflow Sketch',
    description: 'A placeholder for diagrams that explain agent loops, memory, tools, or embodied decision pipelines.',
    linkLabel: 'Paper link',
    href: siteMeta.openReviewUrl,
  },
  {
    title: 'Perception and Action Figure',
    description: 'A placeholder for visuals about multimodal perception, robotic action, or environment-grounded reasoning.',
    linkLabel: 'Project link',
    href: siteMeta.githubUrl,
  },
  {
    title: 'Research Note Snapshot',
    description: 'A placeholder for screenshots, paper figures, or concept illustrations that support current reading notes.',
    linkLabel: 'Blog link',
    href: siteMeta.blogUrl,
  },
]

export const featuredRepositories = [
  {
    name: 'embedded-systems-labs',
    description: 'Course and lab work around hardware-software integration, experimentation, and engineering fundamentals.',
    tags: ['C/C++', 'MCU', 'Embedded'],
    href: siteMeta.githubUrl,
  },
  {
    name: 'image-processing-projects',
    description: 'Experiments in visual computing, perception pipelines, and algorithmic image analysis.',
    tags: ['Python', 'OpenCV', 'Vision'],
    href: siteMeta.githubUrl,
  },
  {
    name: 'motor-control-hmi',
    description: 'Projects around motor control logic, interface design, and translating system behavior into usable tools.',
    tags: ['Control', 'HMI', 'Automation'],
    href: siteMeta.githubUrl,
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
