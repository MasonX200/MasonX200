// ===== MOCK DATA =====
const mockData = {
  personalInfo: {
    name: 'SeiFox',
    username: '@seifox',
    bio: 'Full-stack developer passionate about creating amazing digital experiences',
    avatar: 'https://avatars.githubusercontent.com/u/100000?v=4',
    email: 'hello@seifox.dev',
    location: 'San Francisco, CA',
    social: {
      github: 'https://github.com/seifox',
      twitter: 'https://twitter.com/seifox',
      linkedin: 'https://linkedin.com/in/seifox',
      email: 'mailto:hello@seifox.dev'
    }
  },
  
  aboutCode: `const developer = {
  name: "SeiFox",
  role: "Full Stack Developer",
  location: "San Francisco, CA",
  
  skills: {
    frontend: ["React", "Vue.js", "TypeScript"],
    backend: ["Node.js", "Python", "Go"],
    database: ["PostgreSQL", "MongoDB", "Redis"],
    tools: ["Docker", "AWS", "Git"]
  },
  
  currentFocus: "Building scalable web applications",
  
  getMotivation() {
    return "Code is poetry written in logic";
  },
  
  isAvailableForWork: true
};`,

  skills: [
    'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Node.js',
    'Python', 'Go', 'PostgreSQL', 'MongoDB', 'Docker',
    'AWS', 'Git', 'GraphQL', 'REST APIs', 'Microservices'
  ],
  
  projects: [
    {
      title: 'DevCard Portfolio',
      description: 'A modern, responsive portfolio template with multiple themes and interactive features.',
      tech: ['React', 'TypeScript', 'CSS3', 'Framer Motion'],
      github: 'https://github.com/seifox/devcard',
      demo: 'https://devcard.seifox.dev',
      stars: 128,
      forks: 32
    },
    {
      title: 'API Gateway Service',
      description: 'High-performance API gateway built with Go, featuring rate limiting and authentication.',
      tech: ['Go', 'Redis', 'Docker', 'Kubernetes'],
      github: 'https://github.com/seifox/api-gateway',
      demo: null,
      stars: 256,
      forks: 45
    },
    {
      title: 'Real-time Chat App',
      description: 'Scalable chat application with WebSocket support and message encryption.',
      tech: ['Node.js', 'Socket.io', 'React', 'MongoDB'],
      github: 'https://github.com/seifox/chat-app',
      demo: 'https://chat.seifox.dev',
      stars: 89,
      forks: 23
    },
    {
      title: 'ML Model Deployment',
      description: 'Automated ML model deployment pipeline with monitoring and A/B testing.',
      tech: ['Python', 'FastAPI', 'Docker', 'MLflow'],
      github: 'https://github.com/seifox/ml-deploy',
      demo: null,
      stars: 167,
      forks: 38
    }
  ],
  
  stats: {
    totalCommits: 1247,
    totalStars: 640,
    totalRepos: 42,
    totalFollowers: 156
  },
  
  languages: [
    { name: 'JavaScript', percentage: 35, color: '#f1e05a' },
    { name: 'TypeScript', percentage: 25, color: '#2b7489' },
    { name: 'Python', percentage: 20, color: '#3572A5' },
    { name: 'Go', percentage: 12, color: '#00ADD8' },
    { name: 'CSS', percentage: 8, color: '#563d7c' }
  ],
  
  typingCommands: [
    'npm install awesome-project',
    'git commit -m "feat: add new feature"',
    'docker build -t my-app .',
    'python train_model.py --epochs 100',
    'go run main.go',
    'kubectl apply -f deployment.yaml'
  ]
};

// ===== THEME MANAGER =====
class ThemeManager {
  constructor() {
    this.currentTheme = localStorage.getItem('theme') || 'dark';
    this.themeToggle = document.getElementById('theme-toggle');
    this.init();
  }
  
  init() {
    this.applyTheme(this.currentTheme);
    this.themeToggle.addEventListener('click', () => this.toggleTheme());
  }
  
  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const icon = this.themeToggle.querySelector('i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
  
  toggleTheme() {
    this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.applyTheme(this.currentTheme);
    localStorage.setItem('theme', this.currentTheme);
  }
}

// ===== NAVIGATION MANAGER =====
class NavigationManager {
  constructor() {
    this.currentSection = 'home';
    this.navLinks = document.querySelectorAll('.nav-link');
    this.sections = document.querySelectorAll('.section');
    this.init();
  }
  
  init() {
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const section = link.dataset.section;
        this.showSection(section);
      });
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey || e.metaKey) {
        const shortcuts = {
          '1': 'home',
          '2': 'about',
          '3': 'projects',
          '4': 'stats',
          '5': 'contact'
        };
        
        if (shortcuts[e.key]) {
          e.preventDefault();
          this.showSection(shortcuts[e.key]);
        }
      }
    });
  }
  
  showSection(sectionName) {
    // Hide all sections
    this.sections.forEach(section => {
      section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionName);
    if (targetSection) {
      targetSection.classList.add('active');
      this.currentSection = sectionName;
    }
    
    // Update navigation
    this.navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.dataset.section === sectionName) {
        link.classList.add('active');
      }
    });
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Trigger section-specific animations
    this.triggerSectionAnimations(targetSection);
  }
  
  triggerSectionAnimations(section) {
    if (!section) return;
    
    const animatedElements = section.querySelectorAll('[data-animate]');
    animatedElements.forEach((element, index) => {
      setTimeout(() => {
        const animationType = element.dataset.animate;
        element.classList.add(`animate-${animationType}`);
      }, index * 100);
    });
  }
}

// ===== TYPING ANIMATION =====
class TypingAnimation {
  constructor() {
    this.element = document.getElementById('typing-text');
    this.commands = mockData.typingCommands;
    this.currentCommandIndex = 0;
    this.currentCharIndex = 0;
    this.isDeleting = false;
    this.typeSpeed = 100;
    this.deleteSpeed = 50;
    this.pauseTime = 2000;
    this.init();
  }
  
  init() {
    this.type();
  }
  
  type() {
    const currentCommand = this.commands[this.currentCommandIndex];
    
    if (this.isDeleting) {
      this.element.textContent = currentCommand.substring(0, this.currentCharIndex - 1);
      this.currentCharIndex--;
    } else {
      this.element.textContent = currentCommand.substring(0, this.currentCharIndex + 1);
      this.currentCharIndex++;
    }
    
    let typeSpeed = this.isDeleting ? this.deleteSpeed : this.typeSpeed;
    
    if (!this.isDeleting && this.currentCharIndex === currentCommand.length) {
      typeSpeed = this.pauseTime;
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentCharIndex === 0) {
      this.isDeleting = false;
      this.currentCommandIndex = (this.currentCommandIndex + 1) % this.commands.length;
    }
    
    setTimeout(() => this.type(), typeSpeed);
  }
}

// ===== CODE HIGHLIGHTER =====
class CodeHighlighter {
  constructor() {
    this.codeElement = document.getElementById('about-code');
    this.init();
  }
  
  init() {
    this.highlightCode();
    this.setupCopyButton();
  }
  
  highlightCode() {
    const code = mockData.aboutCode;
    const highlighted = code
      .replace(/(const|let|var|function|return|if|else|for|while|class|extends|import|export|from|async|await)/g, '<span style="color: #ff7b72;">$1</span>')
      .replace(/("[^"]*"|'[^']*')/g, '<span style="color: #a5d6ff;">$1</span>')
      .replace(/(\b\d+\b)/g, '<span style="color: #79c0ff;">$1</span>')
      .replace(/(true|false|null|undefined)/g, '<span style="color: #79c0ff;">$1</span>')
      .replace(/(?:^|\n|\r)(\/\/[^\n\r]*)/g, '<span style="color: #8b949e;">$1</span>')
      .replace(/(\/\*[\s\S]*?\*\/)/g, '<span style="color: #8b949e;">$1</span>');
    
    this.codeElement.innerHTML = highlighted;
  }
  
  setupCopyButton() {
    const copyBtn = document.querySelector('.copy-btn');
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(mockData.aboutCode).then(() => {
        this.showNotification('Code copied to clipboard!');
      });
    });
  }
  
  showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');
    setTimeout(() => {
      notification.classList.remove('show');
    }, 3000);
  }
}

// ===== DATA RENDERER =====
class DataRenderer {
  constructor() {
    this.init();
  }
  
  init() {
    this.renderPersonalInfo();
    this.renderSkills();
    this.renderProjects();
    this.renderStats();
    this.renderContributionGraph();
    this.renderLanguageStats();
  }
  
  renderPersonalInfo() {
    const { personalInfo } = mockData;
    
    document.getElementById('user-name').textContent = personalInfo.name;
    document.getElementById('username').textContent = personalInfo.username;
    document.getElementById('bio').textContent = personalInfo.bio;
    document.getElementById('profile-img').src = personalInfo.avatar;
    document.getElementById('contact-email').textContent = personalInfo.email;
    document.getElementById('contact-location').textContent = personalInfo.location;
    
    // Social links
    Object.entries(personalInfo.social).forEach(([platform, url]) => {
      const link = document.getElementById(`${platform}-link`);
      if (link) link.href = url;
    });
  }
  
  renderSkills() {
    const container = document.getElementById('skills-container');
    container.innerHTML = '';
    
    mockData.skills.forEach(skill => {
      const skillTag = document.createElement('span');
      skillTag.className = 'skill-tag';
      skillTag.textContent = skill;
      container.appendChild(skillTag);
    });
  }
  
  renderProjects() {
    const container = document.getElementById('projects-container');
    container.innerHTML = '';
    
    mockData.projects.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card';
      projectCard.setAttribute('data-animate', 'fadeInUp');
      
      projectCard.innerHTML = `
        <div class="project-header">
          <h3 class="project-title">${project.title}</h3>
          <div class="project-links">
            <a href="${project.github}" class="project-link" target="_blank">
              <i class="fab fa-github"></i>
            </a>
            ${project.demo ? `
              <a href="${project.demo}" class="project-link" target="_blank">
                <i class="fas fa-external-link-alt"></i>
              </a>
            ` : ''}
          </div>
        </div>
        <p class="project-description">${project.description}</p>
        <div class="project-tech">
          ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        <div class="project-stats">
          <div class="project-stat">
            <i class="fas fa-star"></i>
            <span>${project.stars}</span>
          </div>
          <div class="project-stat">
            <i class="fas fa-code-branch"></i>
            <span>${project.forks}</span>
          </div>
        </div>
      `;
      
      container.appendChild(projectCard);
    });
  }
  
  renderStats() {
    const { stats } = mockData;
    
    this.animateCounter('total-commits', stats.totalCommits);
    this.animateCounter('total-stars', stats.totalStars);
    this.animateCounter('total-repos', stats.totalRepos);
    this.animateCounter('total-followers', stats.totalFollowers);
  }
  
  animateCounter(elementId, targetValue) {
    const element = document.getElementById(elementId);
    const duration = 2000;
    const startTime = performance.now();
    
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const currentValue = Math.floor(progress * targetValue);
      element.textContent = this.formatNumber(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }
  
  formatNumber(num) {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  }
  
  renderContributionGraph() {
    const container = document.getElementById('contribution-container');
    container.innerHTML = '';
    
    // Generate 365 days of contribution data
    for (let i = 0; i < 365; i++) {
      const day = document.createElement('div');
      day.className = 'contribution-day';
      
      // Random contribution level (0-4)
      const level = Math.random() > 0.7 ? Math.floor(Math.random() * 5) : 0;
      if (level > 0) {
        day.setAttribute('data-level', level);
      }
      
      // Add hover tooltip
      const date = new Date();
      date.setDate(date.getDate() - (365 - i));
      day.title = `${level} contributions on ${date.toDateString()}`;
      
      container.appendChild(day);
    }
  }
  
  renderLanguageStats() {
    const container = document.getElementById('language-chart');
    container.innerHTML = '';
    
    mockData.languages.forEach(language => {
      const languageItem = document.createElement('div');
      languageItem.className = 'language-item';
      
      languageItem.innerHTML = `
        <div class="language-color" style="background-color: ${language.color}"></div>
        <span class="language-name">${language.name}</span>
        <span class="language-percentage">${language.percentage}%</span>
        <div class="language-bar">
          <div class="language-progress" style="background-color: ${language.color}; width: 0%"></div>
        </div>
      `;
      
      container.appendChild(languageItem);
      
      // Animate progress bar
      setTimeout(() => {
        const progressBar = languageItem.querySelector('.language-progress');
        progressBar.style.width = `${language.percentage}%`;
      }, 500);
    });
  }
}

// ===== CONTACT FORM =====
class ContactForm {
  constructor() {
    this.form = document.getElementById('contact-form');
    this.init();
  }
  
  init() {
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
  }
  
  handleSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(this.form);
    const data = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    };
    
    // Simulate form submission
    this.showLoading();
    
    setTimeout(() => {
      this.hideLoading();
      this.showNotification("Message sent successfully! I'll get back to you soon.");
      this.form.reset();
    }, 2000);
  }
  
  showLoading() {
    const submitBtn = this.form.querySelector('.submit-btn');
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
  }
  
  hideLoading() {
    const submitBtn = this.form.querySelector('.submit-btn');
    submitBtn.innerHTML = '<span>Send Message</span><i class="fas fa-paper-plane"></i>';
    submitBtn.disabled = false;
  }
  
  showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');
    setTimeout(() => {
      notification.classList.remove('show');
    }, 5000);
  }
}

// ===== FLOATING ICONS ANIMATION =====
class FloatingIcons {
  constructor() {
    this.container = document.querySelector('.floating-icons');
    this.icons = ['fab fa-js-square', 'fab fa-react', 'fab fa-node-js', 'fab fa-python', 'fab fa-docker', 'fab fa-git-alt'];
    this.init();
  }
  
  init() {
    this.createFloatingIcons();
  }
  
  createFloatingIcons() {
    for (let i = 0; i < 6; i++) {
      const icon = document.createElement('i');
      icon.className = this.icons[i % this.icons.length];
      icon.style.position = 'absolute';
      icon.style.fontSize = '2rem';
      icon.style.color = 'var(--accent-color)';
      icon.style.opacity = '0.1';
      icon.style.left = Math.random() * 100 + '%';
      icon.style.top = Math.random() * 100 + '%';
      icon.style.animation = `float ${5 + Math.random() * 5}s ease-in-out infinite`;
      icon.style.animationDelay = Math.random() * 2 + 's';
      
      this.container.appendChild(icon);
    }
    
    // Add floating animation CSS
    if (!document.querySelector('#floating-animation')) {
      const style = document.createElement('style');
      style.id = 'floating-animation';
      style.textContent = `
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-20px) rotate(5deg); }
          50% { transform: translateY(-10px) rotate(-5deg); }
          75% { transform: translateY(-15px) rotate(3deg); }
        }
      `;
      document.head.appendChild(style);
    }
  }
}

// ===== SCROLL ANIMATIONS =====
class ScrollAnimations {
  constructor() {
    this.observer = null;
    this.init();
  }
  
  init() {
    this.setupIntersectionObserver();
  }
  
  setupIntersectionObserver() {
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const animationType = entry.target.dataset.animate;
          if (animationType) {
            entry.target.classList.add(`animate-${animationType}`);
          }
        }
      });
    }, options);
    
    // Observe all elements with data-animate attribute
    document.querySelectorAll('[data-animate]').forEach(el => {
      this.observer.observe(el);
    });
  }
}

// ===== PERFORMANCE MONITOR =====
class PerformanceMonitor {
  constructor() {
    this.init();
  }
  
  init() {
    this.logPerformanceMetrics();
    this.setupVisibilityChange();
  }
  
  logPerformanceMetrics() {
    if ('performance' in window) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const perfData = performance.getEntriesByType('navigation')[0];
          console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
        }, 0);
      });
    }
  }
  
  setupVisibilityChange() {
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        // Pause animations when tab is not visible
        document.body.style.animationPlayState = 'paused';
      } else {
        // Resume animations when tab becomes visible
        document.body.style.animationPlayState = 'running';
      }
    });
  }
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
  // Initialize all components
  const themeManager = new ThemeManager();
  // const navigationManager = new NavigationManager(); // Disabled for single page view
  const typingAnimation = new TypingAnimation();
  const codeHighlighter = new CodeHighlighter();
  const dataRenderer = new DataRenderer();
  const contactForm = new ContactForm();
  const floatingIcons = new FloatingIcons();
  const scrollAnimations = new ScrollAnimations();
  const performanceMonitor = new PerformanceMonitor();
  
  // Add some interactive easter eggs
  let konamiCode = [];
  const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
  
  document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    if (konamiCode.length > konamiSequence.length) {
      konamiCode.shift();
    }
    
    if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
      document.body.style.transform = 'rotate(360deg)';
      document.body.style.transition = 'transform 2s ease';
      setTimeout(() => {
        document.body.style.transform = '';
        document.body.style.transition = '';
      }, 2000);
      
      const notification = document.getElementById('notification');
      notification.textContent = '🎉 Konami Code activated! You found the easter egg!';
      notification.classList.add('show');
      setTimeout(() => {
        notification.classList.remove('show');
      }, 3000);
      
      konamiCode = [];
    }
  });
  
  console.log('%c🚀 DevCard v7 Loaded Successfully!', 'color: #238636; font-size: 16px; font-weight: bold;');
  console.log('%cTry the Konami Code: ↑↑↓↓←→←→BA', 'color: #8b949e; font-size: 12px;');
  console.log('%cKeyboard shortcuts: Ctrl+1-5 to navigate sections', 'color: #8b949e; font-size: 12px;');
});