// `Portfolio.js` - JavaScript for Portfolio Page
        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Smooth scrolling for navigation
        document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Skills section navigation
        document.querySelectorAll('.skills-links a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Hide all skill boxes
                document.querySelectorAll('.skills-box').forEach(box => {
                    box.style.display = 'none';
                });
                
                // Show target skill box
                const targetId = this.getAttribute('href');
                const targetBox = document.querySelector(targetId);
                if (targetBox) {
                    targetBox.style.display = 'block';
                }
                
                // Update active button
                document.querySelectorAll('.skills-links .btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                this.classList.add('active');
            });
        });

        // Initially show first skills box
        document.addEventListener('DOMContentLoaded', () => {
            document.querySelector('#my-experiences').style.display = 'block';
        });

        // Animate progress bars on scroll
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBars = entry.target.querySelectorAll('.bar');
                    progressBars.forEach(bar => {
                        const width = bar.style.width;
                        bar.style.width = '0%';
                        setTimeout(() => {
                            bar.style.width = width;
                        }, 300);
                    });
                }
            });
        }, observerOptions);

        // Observe project section
        const projectSection = document.querySelector('.projects');
        if (projectSection) {
            observer.observe(projectSection);
        }

        // Add scroll animations
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.service-box, .skills-item, .project');
            
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.style.animation = 'fadeInUp 0.6s ease forwards';
                }
            });
        };

        window.addEventListener('scroll', animateOnScroll);
        
        // Trigger animation on load
        animateOnScroll();
