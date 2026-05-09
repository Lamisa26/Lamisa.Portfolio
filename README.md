<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lamisa | Personal Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');
        body { font-family: 'Inter', sans-serif; scroll-behavior: smooth; }
        .gradient-text { background: linear-gradient(90deg, #4F46E5, #EC4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    </style>
</head>
<body class="bg-slate-50 text-slate-900">
    <!-- Navigation -->
    <nav class="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div class="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
            <span class="text-xl font-bold tracking-tighter">LAMISA<span class="text-indigo-600">.</span></span>
            <div class="space-x-8 text-sm font-medium">
                <a href="#about" class="hover:text-indigo-600 transition">About</a>
                <a href="#experience" class="hover:text-indigo-600 transition">Experience</a>
                <a href="#projects" class="hover:text-indigo-600 transition">Projects</a>
                <a href="mailto:your-email@example.com" class="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">Contact</a>
            </div>
        </div>
    </nav>
    <!-- Hero Section -->
    <header id="about" class="pt-32 pb-20 px-6">
        <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h1 class="text-5xl md:text-6xl font-bold leading-tight mb-6">
                    Building digital solutions with <span class="gradient-text">logic & design.</span>
                </h1>
                <p class="text-lg text-slate-600 mb-8 leading-relaxed">
                    Computer Science student and Researcher. Specialized in bridging technical complexity with elegant digital branding. Former educator with a focus on STEM excellence.
                </p>
                <div class="flex gap-4">
                    <a href="#" class="border-2 border-slate-900 px-6 py-3 rounded-xl font-semibold hover:bg-slate-900 hover:text-white transition">Download CV</a>
                    <a href="https://github.com/lamisa26" class="text-2xl pt-2 hover:text-indigo-600 transition"><i class="fab fa-github"></i></a>
                </div>
            </div>
            <div class="relative">
                <div class="w-72 h-72 bg-indigo-100 rounded-full mx-auto overflow-hidden border-8 border-white shadow-2xl">
                    <!-- Replace with your actual photo URL -->
                    <img src="https://via.placeholder.com/300" alt="Lamisa" class="w-full h-full object-cover">
                </div>
            </div>
        </div>
    </header>
    <!-- Skills/Toolbox -->
    <section class="py-12 bg-white border-y border-slate-200">
        <div class="max-w-5xl mx-auto px-6">
            <div class="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition duration-500">
                <span class="font-bold">PYTHON</span>
                <span class="font-bold">LATEX</span>
                <span class="font-bold">FIGMA</span>
                <span class="font-bold">SQL</span>
                <span class="font-bold">JAVA</span>
            </div>
        </div>
    </section>
    <!-- Experience Section -->
    <section id="experience" class="py-24 px-6">
        <div class="max-w-5xl mx-auto">
            <h2 class="text-3xl font-bold mb-12">Professional Journey</h2>
            <div class="space-y-12">
                <!-- Role 1 -->
                <div class="flex flex-col md:flex-row gap-4 md:gap-12 border-l-2 border-indigo-100 pl-8 relative">
                    <div class="absolute w-4 h-4 bg-indigo-600 rounded-full -left-[9px] top-1"></div>
                    <div class="md:w-1/4">
                        <p class="text-sm font-bold text-indigo-600 uppercase tracking-widest">2023 - Present</p>
                        <p class="text-slate-500">Research Assistant</p>
                    </div>
                    <div class="md:w-3/4">
                        <h3 class="text-xl font-bold mb-2">Technical Research & Documentation</h3>
                        <p class="text-slate-600">Leading data analysis and paper formatting using LaTeX and Python. Focusing on algorithmic efficiency and user-centric design principles.</p>
                    </div>
                </div>
                <!-- Role 2 -->
                <div class="flex flex-col md:flex-row gap-4 md:gap-12 border-l-2 border-indigo-100 pl-8 relative">
                    <div class="absolute w-4 h-4 bg-indigo-600 rounded-full -left-[9px] top-1"></div>
                    <div class="md:w-1/4">
                        <p class="text-sm font-bold text-indigo-600 uppercase tracking-widest">2021 - 2023</p>
                        <p class="text-slate-500">A-Level Educator</p>
                    </div>
                    <div class="md:w-3/4">
                        <h3 class="text-xl font-bold mb-2">STEM Academic Mentor</h3>
                        <p class="text-slate-600">Mentored over 20+ students in Mathematics and CS. Curated custom digital learning paths that resulted in a 90% A/A* success rate.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Projects Grid -->
    <section id="projects" class="py-24 px-6 bg-slate-900 text-white rounded-t-[3rem]">
        <div class="max-w-5xl mx-auto">
            <div class="flex justify-between items-end mb-12">
                <div>
                    <h2 class="text-3xl font-bold mb-4">Selected Works</h2>
                    <p class="text-slate-400">A mix of code, research, and creative branding.</p>
                </div>
            </div>
            <div class="grid md:grid-cols-2 gap-8">
                <!-- Project 1 -->
                <div class="group bg-slate-800 rounded-3xl p-8 hover:bg-slate-700 transition cursor-pointer">
                    <div class="flex justify-between mb-6">
                        <i class="fas fa-code text-3xl text-indigo-400"></i>
                        <i class="fas fa-external-link-alt opacity-0 group-hover:opacity-100 transition"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2">Digital Branding Strategy</h3>
                    <p class="text-slate-400 mb-6 text-sm leading-relaxed">Developing cohesive visual identities for tech startups, focusing on minimalist UI/UX and typography.</p>
                    <div class="flex gap-2">
                        <span class="text-xs bg-slate-900 px-3 py-1 rounded-full">Figma</span>
                        <span class="text-xs bg-slate-900 px-3 py-1 rounded-full">Branding</span>
                    </div>
                </div>
                <!-- Project 2 -->
                <div class="group bg-slate-800 rounded-3xl p-8 hover:bg-slate-700 transition cursor-pointer">
                    <div class="flex justify-between mb-6">
                        <i class="fas fa-microscope text-3xl text-pink-400"></i>
                        <i class="fas fa-external-link-alt opacity-0 group-hover:opacity-100 transition"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2">CS Research Portfolio</h3>
                    <p class="text-slate-400 mb-6 text-sm leading-relaxed">A repository of academic papers formatted in LaTeX, exploring the intersection of AI and Ethics.</p>
                    <div class="flex gap-2">
                        <span class="text-xs bg-slate-900 px-3 py-1 rounded-full">LaTeX</span>
                        <span class="text-xs bg-slate-900 px-3 py-1 rounded-full">Python</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Footer -->
    <footer class="py-12 px-6 bg-slate-900 text-center border-t border-slate-800">
        <p class="text-slate-500 text-sm">© 2026 Lamisa. Built with passion and Code.</p>
    </footer>

</body>
</html>
