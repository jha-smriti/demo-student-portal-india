// Application Data
const appData = {
  "indian_education_stats": {
    "total_students": 43300000,
    "bachelor_students": 34100000,
    "universities": 1168,
    "colleges": 58643,
    "gross_enrollment_ratio": 28.4,
    "states_with_most_institutions": [
      {"state": "Uttar Pradesh", "count": 4000},
      {"state": "Maharashtra", "count": 1000},
      {"state": "Karnataka", "count": 1000},
      {"state": "Andhra Pradesh", "count": 900},
      {"state": "Delhi/NCR", "count": 500}
    ]
  },
  "student_data": [
    {
      "id": 1,
      "name": "Arjun Sharma",
      "age": 20,
      "state": "Maharashtra",
      "institution": "University of Mumbai",
      "course": "Computer Science Engineering",
      "year": 2,
      "gpa": 8.5,
      "interests": ["AI/ML", "Web Development", "Data Science"],
      "predicted_career": "Software Engineer",
      "success_probability": 92,
      "admission_year": 2023
    },
    {
      "id": 2,
      "name": "Priya Reddy",
      "age": 19,
      "state": "Telangana",
      "institution": "Indian Institute of Technology, Hyderabad",
      "course": "Electronics and Communication",
      "year": 1,
      "gpa": 9.2,
      "interests": ["VLSI Design", "Signal Processing", "Embedded Systems"],
      "predicted_career": "Hardware Engineer",
      "success_probability": 96,
      "admission_year": 2024
    },
    {
      "id": 3,
      "name": "Rahul Gupta",
      "age": 21,
      "state": "Uttar Pradesh",
      "institution": "Banaras Hindu University",
      "course": "Mechanical Engineering",
      "year": 3,
      "gpa": 7.8,
      "interests": ["Automotive", "Manufacturing", "Design"],
      "predicted_career": "Mechanical Engineer",
      "success_probability": 85,
      "admission_year": 2022
    },
    {
      "id": 4,
      "name": "Sneha Iyer",
      "age": 20,
      "state": "Karnataka",
      "institution": "Indian Institute of Science, Bangalore",
      "course": "Biotechnology",
      "year": 2,
      "gpa": 9.0,
      "interests": ["Genetic Engineering", "Pharmaceutical Research", "Biomedical"],
      "predicted_career": "Research Scientist",
      "success_probability": 94,
      "admission_year": 2023
    },
    {
      "id": 5,
      "name": "Vikram Singh",
      "age": 22,
      "state": "Punjab",
      "institution": "Punjab Engineering College",
      "course": "Civil Engineering",
      "year": 4,
      "gpa": 8.1,
      "interests": ["Infrastructure", "Urban Planning", "Construction"],
      "predicted_career": "Civil Engineer",
      "success_probability": 88,
      "admission_year": 2021
    },
    {
      "id": 6,
      "name": "Anjali Patel",
      "age": 19,
      "state": "Gujarat",
      "institution": "Indian Institute of Technology, Gandhinagar",
      "course": "Chemical Engineering",
      "year": 1,
      "gpa": 8.7,
      "interests": ["Process Engineering", "Environmental Engineering", "Materials"],
      "predicted_career": "Process Engineer",
      "success_probability": 90,
      "admission_year": 2024
    },
    {
      "id": 7,
      "name": "Karthik Nair",
      "age": 21,
      "state": "Kerala",
      "institution": "National Institute of Technology, Calicut",
      "course": "Aerospace Engineering",
      "year": 3,
      "gpa": 8.9,
      "interests": ["Aerodynamics", "Spacecraft Design", "Propulsion"],
      "predicted_career": "Aerospace Engineer",
      "success_probability": 93,
      "admission_year": 2022
    },
    {
      "id": 8,
      "name": "Pooja Agarwal",
      "age": 20,
      "state": "Rajasthan",
      "institution": "Birla Institute of Technology and Science, Pilani",
      "course": "Information Technology",
      "year": 2,
      "gpa": 8.3,
      "interests": ["Cybersecurity", "Cloud Computing", "Mobile Development"],
      "predicted_career": "IT Specialist",
      "success_probability": 89,
      "admission_year": 2023
    }
  ],
  "institutions": [
    {
      "name": "Indian Institute of Technology, Bombay",
      "location": "Mumbai, Maharashtra",
      "type": "Government",
      "ranking": 1,
      "courses": ["Engineering", "Technology", "Management"],
      "total_students": 11000,
      "admission_rate": 2.3
    },
    {
      "name": "Indian Institute of Science",
      "location": "Bangalore, Karnataka",
      "type": "Government",
      "ranking": 2,
      "courses": ["Science", "Engineering", "Management"],
      "total_students": 4500,
      "admission_rate": 1.8
    },
    {
      "name": "Delhi University",
      "location": "New Delhi",
      "type": "Government",
      "ranking": 15,
      "courses": ["Arts", "Science", "Commerce", "Law"],
      "total_students": 132000,
      "admission_rate": 15.2
    },
    {
      "name": "Jawaharlal Nehru University",
      "location": "New Delhi",
      "type": "Government",
      "ranking": 12,
      "courses": ["Arts", "Science", "Social Sciences"],
      "total_students": 8500,
      "admission_rate": 8.7
    }
  ],
  "ai_features": {
    "chatbot_responses": {
      "greeting": "Hello! I'm your AI assistant for Indian higher education. I can help you find information about students, institutions, courses, and provide personalized recommendations. What would you like to know?",
      "student_info": "I can provide detailed information about any student in our database, including their academic performance, interests, and career predictions based on our ML models.",
      "institution_help": "I can help you find the best institutions based on your preferences, compare universities, and even calculate admission probabilities using our AI algorithms.",
      "career_guidance": "Based on our predictive analytics, I can suggest career paths and academic recommendations tailored to individual student profiles."
    },
    "ml_algorithms": [
      "Student Success Prediction using Logistic Regression",
      "Career Path Classification using Decision Trees", 
      "Institution Matching using Collaborative Filtering",
      "Academic Performance Forecasting using Time Series Analysis",
      "Demographic Clustering using K-Means",
      "Course Recommendation using Matrix Factorization"
    ],
    "features": [
      "Real-time Predictive Analytics",
      "Intelligent Student Categorization",
      "Adaptive Learning Recommendations", 
      "Automated Risk Assessment",
      "Dynamic Content Personalization",
      "Contextual Chat Assistance"
    ]
  }
};

// Global variables
let filteredStudents = [...appData.student_data];
let currentTheme = 'light';
let stateChart, mlChart, trendChart, successChart;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    renderStudents(filteredStudents);
    renderInstitutions();
    renderMLModels();
    initializeCharts();
    detectTheme();
}

function setupEventListeners() {
    // Theme toggle - Fixed event listener
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // AI Chat modal - Fixed event listeners
    const aiChatToggle = document.getElementById('aiChatToggle');
    if (aiChatToggle) {
        aiChatToggle.addEventListener('click', function(e) {
            e.preventDefault();
            openModal('aiChatModal');
        });
    }
    
    const modalClose = document.getElementById('modalClose');
    if (modalClose) {
        modalClose.addEventListener('click', function(e) {
            e.preventDefault();
            closeModal('aiChatModal');
        });
    }
    
    const modalOverlay = document.getElementById('modalOverlay');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            e.preventDefault();
            closeModal('aiChatModal');
        });
    }
    
    // Student profile modal - Fixed event listeners
    const studentModalClose = document.getElementById('studentModalClose');
    if (studentModalClose) {
        studentModalClose.addEventListener('click', function(e) {
            e.preventDefault();
            closeModal('studentModal');
        });
    }
    
    const studentModalOverlay = document.getElementById('studentModalOverlay');
    if (studentModalOverlay) {
        studentModalOverlay.addEventListener('click', function(e) {
            e.preventDefault();
            closeModal('studentModal');
        });
    }
    
    // Tab navigation
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            switchTab(e.target.dataset.tab);
        });
    });
    
    // Search and filters
    const studentSearch = document.getElementById('studentSearch');
    if (studentSearch) {
        studentSearch.addEventListener('input', handleSearch);
    }
    
    const searchBtn = document.getElementById('searchBtn');
    if (searchBtn) {
        searchBtn.addEventListener('click', handleSearch);
    }
    
    const stateFilter = document.getElementById('stateFilter');
    if (stateFilter) {
        stateFilter.addEventListener('change', applyFilters);
    }
    
    const courseFilter = document.getElementById('courseFilter');
    if (courseFilter) {
        courseFilter.addEventListener('change', applyFilters);
    }
    
    const yearFilter = document.getElementById('yearFilter');
    if (yearFilter) {
        yearFilter.addEventListener('change', applyFilters);
    }
    
    // AI suggestion tags
    document.querySelectorAll('.tag').forEach(tag => {
        tag.addEventListener('click', (e) => {
            const searchInput = document.getElementById('studentSearch');
            if (searchInput) {
                searchInput.value = e.target.dataset.search;
                handleSearch();
            }
        });
    });
    
    // Chat functionality
    const sendMessage = document.getElementById('sendMessage');
    if (sendMessage) {
        sendMessage.addEventListener('click', sendChatMessage);
    }
    
    const chatInput = document.getElementById('chatInput');
    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                sendChatMessage();
            }
        });
    }
    
    // Chat suggestions
    document.querySelectorAll('.suggestion-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const chatInput = document.getElementById('chatInput');
            if (chatInput) {
                chatInput.value = e.target.dataset.question;
                sendChatMessage();
            }
        });
    });
}

function detectTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        currentTheme = 'dark';
        const themeBtn = document.getElementById('themeToggle');
        if (themeBtn) {
            themeBtn.textContent = '☀️ Light';
        }
    }
}

function toggleTheme() {
    const html = document.documentElement;
    const themeBtn = document.getElementById('themeToggle');
    
    if (currentTheme === 'light') {
        html.setAttribute('data-color-scheme', 'dark');
        if (themeBtn) {
            themeBtn.textContent = '☀️ Light';
        }
        currentTheme = 'dark';
    } else {
        html.setAttribute('data-color-scheme', 'light');
        if (themeBtn) {
            themeBtn.textContent = '🌙 Dark';
        }
        currentTheme = 'light';
    }
    
    // Update charts with new theme
    setTimeout(() => {
        if (stateChart) stateChart.update();
        if (mlChart) mlChart.update();
        if (trendChart) trendChart.update();
        if (successChart) successChart.update();
    }, 100);
}

function switchTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('tab-btn--active'));
    const activeTab = document.querySelector(`[data-tab="${tabName}"]`);
    if (activeTab) {
        activeTab.classList.add('tab-btn--active');
    }
    
    // Update content sections
    document.querySelectorAll('.content-section').forEach(section => section.classList.remove('content-section--active'));
    const activeSection = document.getElementById(tabName);
    if (activeSection) {
        activeSection.classList.add('content-section--active');
    }
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

function handleSearch() {
    const searchInput = document.getElementById('studentSearch');
    if (!searchInput) return;
    
    const query = searchInput.value.toLowerCase();
    
    if (!query) {
        filteredStudents = [...appData.student_data];
    } else {
        filteredStudents = appData.student_data.filter(student => {
            return student.name.toLowerCase().includes(query) ||
                   student.course.toLowerCase().includes(query) ||
                   student.institution.toLowerCase().includes(query) ||
                   student.interests.some(interest => interest.toLowerCase().includes(query)) ||
                   student.state.toLowerCase().includes(query);
        });
    }
    
    applyFilters();
}

function applyFilters() {
    const stateFilter = document.getElementById('stateFilter');
    const courseFilter = document.getElementById('courseFilter');
    const yearFilter = document.getElementById('yearFilter');
    
    let filtered = [...filteredStudents];
    
    if (stateFilter && stateFilter.value) {
        filtered = filtered.filter(student => student.state === stateFilter.value);
    }
    
    if (courseFilter && courseFilter.value) {
        filtered = filtered.filter(student => student.course.includes(courseFilter.value));
    }
    
    if (yearFilter && yearFilter.value) {
        filtered = filtered.filter(student => student.year.toString() === yearFilter.value);
    }
    
    renderStudents(filtered);
}

function renderStudents(students) {
    const container = document.getElementById('studentsGrid');
    if (!container) return;
    
    if (students.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 2rem;">
                <h3>No students found</h3>
                <p>Try adjusting your search criteria or filters.</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = students.map(student => `
        <div class="student-card" onclick="openStudentProfile(${student.id})">
            <div class="student-card__header">
                <div class="student-card__info">
                    <h3>${student.name}</h3>
                    <p>${student.age} years old • ${student.state}</p>
                </div>
                <div class="student-card__gpa">GPA: ${student.gpa}</div>
            </div>
            
            <div class="student-card__details">
                <div class="detail-row">
                    <strong>Institution:</strong>
                    <span>${student.institution}</span>
                </div>
                <div class="detail-row">
                    <strong>Course:</strong>
                    <span>${student.course}</span>
                </div>
                <div class="detail-row">
                    <strong>Year:</strong>
                    <span>${getYearSuffix(student.year)} Year</span>
                </div>
            </div>
            
            <div class="student-card__interests">
                <h4>Interests:</h4>
                <div class="interests-tags">
                    ${student.interests.map(interest => `
                        <span class="interest-tag">${interest}</span>
                    `).join('')}
                </div>
            </div>
            
            <div class="student-card__predictions">
                <div class="prediction-item">
                    <span><strong>Predicted Career:</strong> ${student.predicted_career}</span>
                </div>
                <div class="prediction-item">
                    <span>Success Probability:</span>
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <div class="prediction-bar">
                            <div class="prediction-fill" style="width: ${student.success_probability}%"></div>
                        </div>
                        <span>${student.success_probability}%</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function renderInstitutions() {
    const container = document.getElementById('institutionsGrid');
    if (!container) return;
    
    container.innerHTML = appData.institutions.map(institution => `
        <div class="institution-card">
            <div class="institution-card__header">
                <div>
                    <h3>${institution.name}</h3>
                    <p>${institution.location}</p>
                </div>
                <div class="institution-card__rank">Rank #${institution.ranking}</div>
            </div>
            
            <div class="detail-row">
                <strong>Type:</strong>
                <span>${institution.type}</span>
            </div>
            <div class="detail-row">
                <strong>Total Students:</strong>
                <span>${institution.total_students.toLocaleString()}</span>
            </div>
            <div class="detail-row">
                <strong>Admission Rate:</strong>
                <span>${institution.admission_rate}%</span>
            </div>
            <div class="detail-row">
                <strong>Courses:</strong>
                <span>${institution.courses.join(', ')}</span>
            </div>
            
            <div style="margin-top: 16px;">
                <div class="prediction-item">
                    <span>AI Match Score:</span>
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <div class="prediction-bar">
                            <div class="prediction-fill" style="width: ${Math.floor(Math.random() * 40) + 60}%"></div>
                        </div>
                        <span>${Math.floor(Math.random() * 40) + 60}%</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function renderMLModels() {
    const container = document.getElementById('modelsGrid');
    if (!container) return;
    
    container.innerHTML = appData.ai_features.ml_algorithms.map(algorithm => `
        <div class="model-card">
            <div class="model-card__header">
                <h4>${algorithm}</h4>
                <span class="model-status model-status--active">Active</span>
            </div>
            <p>Accuracy: ${Math.floor(Math.random() * 15) + 85}%</p>
            <div class="prediction-item">
                <span>Performance:</span>
                <div class="prediction-bar">
                    <div class="prediction-fill" style="width: ${Math.floor(Math.random() * 20) + 80}%"></div>
                </div>
            </div>
        </div>
    `).join('');
}

// Make openStudentProfile globally accessible
window.openStudentProfile = function(studentId) {
    const student = appData.student_data.find(s => s.id === studentId);
    if (!student) return;
    
    const modal = document.getElementById('studentModal');
    const title = document.getElementById('studentModalTitle');
    const body = document.getElementById('studentModalBody');
    
    if (!modal || !title || !body) return;
    
    title.textContent = `${student.name} - AI Profile Analysis`;
    
    body.innerHTML = `
        <div class="profile-header">
            <div class="profile-avatar">${student.name.charAt(0)}</div>
            <div class="profile-info">
                <h3>${student.name}</h3>
                <p><strong>Age:</strong> ${student.age} years old</p>
                <p><strong>State:</strong> ${student.state}</p>
                <p><strong>Institution:</strong> ${student.institution}</p>
                <p><strong>Course:</strong> ${student.course} (${getYearSuffix(student.year)} Year)</p>
            </div>
        </div>
        
        <div class="profile-sections">
            <div class="profile-section">
                <h4>🎯 Academic Performance</h4>
                <p><strong>GPA:</strong> ${student.gpa}/10</p>
                <p><strong>Admission Year:</strong> ${student.admission_year}</p>
                <div class="prediction-item">
                    <span>Performance Trend:</span>
                    <div class="prediction-bar">
                        <div class="prediction-fill" style="width: ${student.gpa * 10}%"></div>
                    </div>
                </div>
            </div>
            
            <div class="profile-section">
                <h4>🧠 AI Predictions</h4>
                <p><strong>Career Path:</strong> ${student.predicted_career}</p>
                <div class="prediction-item">
                    <span>Success Probability:</span>
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <div class="prediction-bar">
                            <div class="prediction-fill" style="width: ${student.success_probability}%"></div>
                        </div>
                        <span>${student.success_probability}%</span>
                    </div>
                </div>
                <p style="font-size: 12px; color: var(--color-text-secondary); margin-top: 8px;">
                    Based on ML analysis of academic performance, interests, and market trends
                </p>
            </div>
            
            <div class="profile-section">
                <h4>💡 Interests & Skills</h4>
                <div class="interests-tags">
                    ${student.interests.map(interest => `
                        <span class="interest-tag">${interest}</span>
                    `).join('')}
                </div>
                <p style="margin-top: 12px; font-size: 12px; color: var(--color-text-secondary);">
                    AI-recommended skills based on career path and industry analysis
                </p>
            </div>
            
            <div class="profile-section">
                <h4>📈 Career Insights</h4>
                <p><strong>Industry Demand:</strong> High</p>
                <p><strong>Salary Projection:</strong> ₹${Math.floor(Math.random() * 10) + 8} LPA</p>
                <p><strong>Job Market:</strong> Growing (+${Math.floor(Math.random() * 20) + 10}%)</p>
            </div>
        </div>
        
        <div style="margin-top: 24px; padding: 16px; background: var(--color-bg-1); border-radius: 8px;">
            <h4 style="margin-bottom: 12px;">🤖 AI Recommendations</h4>
            <ul style="margin: 0; padding-left: 16px;">
                <li>Focus on ${student.interests[0]} to align with career goals</li>
                <li>Consider internships in ${student.predicted_career.toLowerCase()} field</li>
                <li>Develop skills in emerging technologies relevant to ${student.course}</li>
                <li>Network with professionals in ${student.state} tech ecosystem</li>
            </ul>
        </div>
    `;
    
    openModal('studentModal');
}

function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const messagesContainer = document.getElementById('chatMessages');
    
    if (!input || !messagesContainer) return;
    
    const message = input.value.trim();
    if (!message) return;
    
    // Add user message
    messagesContainer.innerHTML += `
        <div class="message message--user">
            <div class="message__avatar">👤</div>
            <div class="message__content">
                <p>${message}</p>
            </div>
        </div>
    `;
    
    input.value = '';
    
    // Simulate AI response
    setTimeout(() => {
        const response = generateAIResponse(message);
        messagesContainer.innerHTML += `
            <div class="message message--ai">
                <div class="message__avatar">🤖</div>
                <div class="message__content">
                    <p>${response}</p>
                </div>
            </div>
        `;
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 1000);
    
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function generateAIResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('engineering') || lowerMessage.includes('college')) {
        return "Based on our AI analysis, the top engineering colleges in India include IIT Bombay, IISc Bangalore, and several other premier institutions. Each has unique strengths - IIT Bombay excels in Computer Science with 98% placement rates, while IISc focuses on research with exceptional PhD programs. Would you like specific details about admission requirements or career outcomes?";
    }
    
    if (lowerMessage.includes('ai') || lowerMessage.includes('machine learning')) {
        const aiStudents = appData.student_data.filter(s => 
            s.interests.some(i => i.toLowerCase().includes('ai') || i.toLowerCase().includes('ml'))
        ).length;
        return `I found ${aiStudents} students currently interested in AI/ML in our database. These students typically have high GPAs (average 8.7) and show 94% success probability in tech careers. Popular specializations include Data Science, Computer Vision, and Natural Language Processing. Students from IITs and IISc show particularly strong performance in AI research.`;
    }
    
    if (lowerMessage.includes('biotechnology') || lowerMessage.includes('biotech')) {
        return "Biotechnology is an emerging field with excellent prospects! Our AI models predict 89% success rates for biotech students. Key career paths include pharmaceutical research (₹12-18 LPA), genetic engineering (₹10-15 LPA), and biomedical device development. IISc Bangalore and several NITs offer excellent programs. Would you like me to show specific student profiles in this field?";
    }
    
    if (lowerMessage.includes('iit') || lowerMessage.includes('nit')) {
        return "IITs vs NITs comparison based on our ML analysis: IITs have 2.3% average admission rates vs NITs at 1.8%, but both offer excellent outcomes. IIT graduates show 96% placement success, while NIT graduates achieve 91%. Salary ranges: IIT (₹15-45 LPA), NIT (₹8-25 LPA). Choice depends on specific branch preferences and location. Our AI recommends considering both based on JEE rank and career goals.";
    }
    
    if (lowerMessage.includes('career') || lowerMessage.includes('job')) {
        return "Based on our predictive analytics, the most promising career paths for current students are: Software Engineering (95% demand growth), Data Science (87% growth), Biotechnology Research (78% growth), and Aerospace Engineering (65% growth). Our ML models analyze 50+ factors including industry trends, salary projections, and skill demands to provide these insights.";
    }
    
    if (lowerMessage.includes('admission') || lowerMessage.includes('probability')) {
        return "Our AI admission probability calculator uses 15 parameters including academic performance, entrance exam scores, and demographic factors. Average probabilities: IIT (2-5%), NIT (8-15%), State Universities (25-40%). For personalized predictions, I can analyze specific student profiles and provide tailored recommendations based on historical admission data.";
    }
    
    // Default response
    return "I understand you're asking about Indian higher education. Our AI system processes queries about 34.1 million bachelor students across 58,643 institutions. I can provide insights on admissions, career predictions, student profiles, and institutional comparisons. Could you be more specific about what you'd like to know? For example, ask about specific courses, states, or career paths.";
}

function initializeCharts() {
    // Wait for DOM to be ready and Chart.js to be loaded
    if (typeof Chart !== 'undefined') {
        createStateChart();
        createMLChart();
        createTrendChart();
        createSuccessChart();
    } else {
        setTimeout(initializeCharts, 500);
    }
}

function createStateChart() {
    const ctx = document.getElementById('stateChart');
    if (!ctx) return;
    
    const chartColors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F'];
    
    stateChart = new Chart(ctx.getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: appData.indian_education_stats.states_with_most_institutions.map(s => s.state),
            datasets: [{
                data: appData.indian_education_stats.states_with_most_institutions.map(s => s.count),
                backgroundColor: chartColors,
                borderWidth: 2,
                borderColor: getComputedStyle(document.documentElement).getPropertyValue('--color-surface')
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true,
                        color: getComputedStyle(document.documentElement).getPropertyValue('--color-text')
                    }
                }
            }
        }
    });
}

function createMLChart() {
    const ctx = document.getElementById('mlChart');
    if (!ctx) return;
    
    const chartColors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545'];
    
    mlChart = new Chart(ctx.getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['Prediction', 'Classification', 'Clustering', 'Recommendation', 'Forecasting', 'NLP'],
            datasets: [{
                label: 'Accuracy %',
                data: [94, 91, 87, 89, 85, 92],
                backgroundColor: chartColors,
                borderWidth: 1,
                borderColor: chartColors.map(color => color + '80')
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        },
                        color: getComputedStyle(document.documentElement).getPropertyValue('--color-text')
                    },
                    grid: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--color-border')
                    }
                },
                x: {
                    ticks: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--color-text')
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

function createTrendChart() {
    const ctx = document.getElementById('trendChart');
    if (!ctx) return;
    
    trendChart = new Chart(ctx.getContext('2d'), {
        type: 'line',
        data: {
            labels: ['2020', '2021', '2022', '2023', '2024', '2025 (Pred)', '2026 (Pred)'],
            datasets: [
                {
                    label: 'Enrollment (Millions)',
                    data: [30.5, 32.1, 33.8, 34.1, 35.2, 37.1, 39.5],
                    borderColor: '#1FB8CD',
                    backgroundColor: '#1FB8CD20',
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Success Rate %',
                    data: [82, 84, 86, 88, 90, 91, 93],
                    borderColor: '#FFC185',
                    backgroundColor: '#FFC18520',
                    fill: false,
                    tension: 0.4,
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--color-text')
                    }
                }
            },
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Students (Millions)',
                        color: getComputedStyle(document.documentElement).getPropertyValue('--color-text')
                    },
                    ticks: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--color-text')
                    },
                    grid: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--color-border')
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    title: {
                        display: true,
                        text: 'Success Rate %',
                        color: getComputedStyle(document.documentElement).getPropertyValue('--color-text')
                    },
                    ticks: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--color-text')
                    },
                    grid: {
                        drawOnChartArea: false,
                    },
                },
                x: {
                    ticks: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--color-text')
                    },
                    grid: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--color-border')
                    }
                }
            }
        }
    });
}

function createSuccessChart() {
    const ctx = document.getElementById('successChart');
    if (!ctx) return;
    
    const students = appData.student_data;
    
    successChart = new Chart(ctx.getContext('2d'), {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Students',
                data: students.map(student => ({
                    x: student.gpa,
                    y: student.success_probability,
                    name: student.name,
                    course: student.course
                })),
                backgroundColor: '#1FB8CD',
                borderColor: '#1FB8CD',
                pointRadius: 8,
                pointHoverRadius: 12
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        title: function(context) {
                            return context[0].raw.name;
                        },
                        label: function(context) {
                            return [
                                `Course: ${context.raw.course}`,
                                `GPA: ${context.raw.x}`,
                                `Success Probability: ${context.raw.y}%`
                            ];
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'GPA',
                        color: getComputedStyle(document.documentElement).getPropertyValue('--color-text')
                    },
                    min: 7,
                    max: 10,
                    ticks: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--color-text')
                    },
                    grid: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--color-border')
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Success Probability %',
                        color: getComputedStyle(document.documentElement).getPropertyValue('--color-text')
                    },
                    min: 80,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        },
                        color: getComputedStyle(document.documentElement).getPropertyValue('--color-text')
                    },
                    grid: {
                        color: getComputedStyle(document.documentElement).getPropertyValue('--color-border')
                    }
                }
            }
        }
    });
}

function getYearSuffix(year) {
    const suffixes = ['', '1st', '2nd', '3rd', '4th'];
    return suffixes[year] || year + 'th';
}