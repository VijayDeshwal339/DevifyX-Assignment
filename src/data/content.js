export const sectionsData = [
  {
    id: 'hero',
    title: 'Welcome to StickyScroll',
    subtitle: 'Experience smooth scrolling with sticky headers',
    content: 'This showcase demonstrates modern React patterns with smooth animations, responsive design, and accessibility features. Scroll down to see sticky headers in action.',
    items: [],
    color: 'primary',
    icon: '🚀'
  },
  {
    id: 'portfolio',
    title: 'Featured Projects',
    subtitle: 'Showcasing our latest work',
    content: 'Explore our diverse portfolio of projects that demonstrate creativity, technical excellence, and user-centered design principles.',
    items: [
      {
        id: 1,
        title: 'E-commerce Platform',
        description: 'Modern shopping experience with React and Node.js',
        image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400',
        tags: ['React', 'Node.js', 'MongoDB']
      },
      {
        id: 2,
        title: 'Mobile Banking App',
        description: 'Secure financial transactions with intuitive UI',
        image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=400',
        tags: ['React Native', 'TypeScript', 'AWS']
      },
      {
        id: 3,
        title: 'Data Visualization Dashboard',
        description: 'Interactive charts and real-time analytics',
        image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
        tags: ['D3.js', 'React', 'Python']
      },
      {
        id: 4,
        title: 'Social Media Platform',
        description: 'Connect and share with modern social features',
        image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400',
        tags: ['React', 'GraphQL', 'PostgreSQL']
      }
    ],
    color: 'secondary',
    icon: '💼'
  },
  {
    id: 'services',
    title: 'Our Services',
    subtitle: 'Comprehensive solutions for your needs',
    content: 'We offer a full range of digital services to help your business thrive in the modern landscape.',
    items: [
      {
        id: 1,
        title: 'Web Development',
        description: 'Custom websites and web applications built with modern technologies',
        icon: '🌐',
        features: ['Responsive Design', 'Performance Optimization', 'SEO Friendly', 'Cross-browser Compatible']
      },
      {
        id: 2,
        title: 'Mobile Development',
        description: 'Native and cross-platform mobile applications',
        icon: '📱',
        features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Optimization']
      },
      {
        id: 3,
        title: 'UI/UX Design',
        description: 'User-centered design that converts visitors into customers',
        icon: '🎨',
        features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
      },
      {
        id: 4,
        title: 'Cloud Solutions',
        description: 'Scalable cloud infrastructure and deployment',
        icon: '☁️',
        features: ['AWS/Azure/GCP', 'DevOps', 'CI/CD Pipelines', 'Monitoring']
      }
    ],
    color: 'accent',
    icon: '⚡'
  },
  {
    id: 'contact',
    title: 'Get In Touch',
    subtitle: 'Let\'s start your next project',
    content: 'Ready to bring your ideas to life? Contact us today to discuss your project requirements and get a free consultation.',
    items: [
      {
        id: 1,
        type: 'email',
        label: 'Email',
        value: 'hello@stickeyscroll.com',
        icon: '📧'
      },
      {
        id: 2,
        type: 'phone',
        label: 'Phone',
        value: '+1 (555) 123-4567',
        icon: '📞'
      },
      {
        id: 3,
        type: 'location',
        label: 'Office',
        value: 'San Francisco, CA',
        icon: '📍'
      },
      {
        id: 4,
        type: 'social',
        label: 'LinkedIn',
        value: 'linkedin.com/company/stickeyscroll',
        icon: '💼'
      }
    ],
    color: 'primary',
    icon: '💬'
  }
];