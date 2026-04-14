const mongoose = require('mongoose');

// In-memory data storage for demo purposes
let inMemoryDB = {
    projects: [],
    skills: [],
    messages: []
};

const connectDB = async () => {
    try {
        // Try MongoDB connection first
        if (process.env.MONGO_URI && !process.env.MONGO_URI.includes('cluster0.mongodb.net')) {
            const conn = await mongoose.connect(process.env.MONGO_URI);
            console.log(`MongoDB Connected: ${conn.connection.host}`);
            return;
        }
        
        // Fallback to in-memory storage
        console.log('Using in-memory storage for demo');
        
        // Seed initial data
        inMemoryDB.projects = [
            {
                _id: '1',
                title: 'Portfolio Website',
                description: 'Developed a responsive portfolio website improving UI consistency and performance using React.js and Vite. Implemented backend with Node.js, Express.js, and MongoDB. Integrated feedback form and smooth UI animations.',
                imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                link: 'https://portfolio-personal-01.netlify.app/',
                techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Vite'],
                createdAt: new Date()
            },
            {
                _id: '2',
                title: 'ProjectHub',
                description: 'Built a collaborative platform for sharing development projects. Developed REST APIs using Node.js, Express.js, and MongoDB. Implemented filtering and project submissions.',
                imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                link: 'https://projecthub-mu.vercel.app/',
                techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
                createdAt: new Date()
            },
            {
                _id: '3',
                title: 'RGO - Organic Millets E-Commerce Website',
                description: 'Designed a full-stack e-commerce website using React.js and Tailwind CSS. Implemented shopping cart, search, filtering, and user dashboard.',
                imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                link: 'https://sem-project-delta.vercel.app/',
                techStack: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js'],
                createdAt: new Date()
            },
            {
                _id: '4',
                title: 'Shelder - Architecture & Interior Design Website',
                description: 'Developed a responsive website for architecture and interior design services. Designed clean UI with About, Services, and Contact sections.',
                imageUrl: 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                link: 'https://shelder.netlify.app/',
                techStack: ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
                createdAt: new Date()
            }
        ];
        
        inMemoryDB.skills = [
            { _id: '1', name: 'HTML5', category: 'Frontend', icon: 'fab fa-html5' },
            { _id: '2', name: 'CSS3', category: 'Frontend', icon: 'fab fa-css3-alt' },
            { _id: '3', name: 'JavaScript', category: 'Frontend', icon: 'fab fa-js-square' },
            { _id: '4', name: 'React.js', category: 'Frontend', icon: 'fab fa-react' },
            { _id: '5', name: 'React Router', category: 'Frontend', icon: 'fas fa-route' },
            { _id: '6', name: 'Vite', category: 'Frontend', icon: 'fas fa-bolt' },
            { _id: '7', name: 'Tailwind CSS', category: 'Frontend', icon: 'fab fa-css3' },
            { _id: '8', name: 'Node.js', category: 'Backend', icon: 'fab fa-node-js' },
            { _id: '9', name: 'Express.js', category: 'Backend', icon: 'fas fa-server' },
            { _id: '10', name: 'MongoDB', category: 'Database', icon: 'fas fa-database' },
            { _id: '11', name: 'MySQL', category: 'Database', icon: 'fas fa-database' },
            { _id: '12', name: 'Git', category: 'Tools', icon: 'fab fa-git-alt' },
            { _id: '13', name: 'GitHub', category: 'Tools', icon: 'fab fa-github' },
            { _id: '14', name: 'Netlify', category: 'Tools', icon: 'fas fa-globe' },
            { _id: '15', name: 'Vercel', category: 'Tools', icon: 'fas fa-globe' },
        ];
        
    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
};

module.exports = { connectDB, inMemoryDB };
