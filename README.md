<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HERTZAI - AI 3D Model Generator</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --primary: #833ab4;
            --secondary: #fd1d1d;
            --tertiary: #fcb045;
            --dark: #262626;
            --light: #fafafa;
            --gray: #dbdbdb;
            --card-bg: #ffffff;
            --shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
            --transition: all 0.3s ease;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        }

        body {
            background-color: var(--light);
            color: var(--dark);
            line-height: 1.6;
        }

        /* Header Styles */
        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 24px;
            background-color: white;
            border-bottom: 1px solid var(--gray);
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .logo {
            font-size: 28px;
            font-weight: 700;
            background: linear-gradient(45deg, var(--primary), var(--secondary), var(--tertiary));
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            text-decoration: none;
        }

        .nav-links {
            display: flex;
            gap: 24px;
        }

        .nav-links a {
            text-decoration: none;
            color: var(--dark);
            font-weight: 600;
            font-size: 16px;
        }

        .nav-links a:hover {
            color: var(--primary);
        }

        .auth-buttons {
            display: flex;
            gap: 12px;
        }

        .btn {
            padding: 8px 16px;
            border-radius: 4px;
            font-weight: 600;
            cursor: pointer;
            transition: var(--transition);
            border: none;
            font-size: 14px;
        }

        .btn-outline {
            background: transparent;
            border: 1px solid var(--dark);
            color: var(--dark);
        }

        .btn-outline:hover {
            background-color: var(--dark);
            color: white;
        }

        .btn-primary {
            background: linear-gradient(45deg, var(--primary), var(--secondary));
            color: white;
        }

        .btn-primary:hover {
            opacity: 0.9;
        }

        /* Hero Section */
        .hero {
            padding: 60px 20px;
            text-align: center;
            background: linear-gradient(135deg, #f5f7fa 0%, #e4edf5 100%);
        }

        .hero h1 {
            font-size: 48px;
            margin-bottom: 20px;
            background: linear-gradient(45deg, var(--primary), var(--secondary));
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
        }

        .hero p {
            font-size: 20px;
            max-width: 700px;
            margin: 0 auto 40px;
            color: #555;
        }

        .cta-button {
            padding: 14px 32px;
            font-size: 18px;
            border-radius: 30px;
            background: linear-gradient(45deg, var(--primary), var(--secondary));
            color: white;
            border: none;
            cursor: pointer;
            transition: var(--transition);
            font-weight: 600;
        }

        .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        /* Generator Section */
        .generator-section {
            max-width: 1200px;
            margin: 60px auto;
            padding: 0 20px;
        }

        .section-title {
            text-align: center;
            margin-bottom: 40px;
            font-size: 32px;
            color: var(--dark);
        }

        .generator-container {
            display: flex;
            gap: 30px;
            flex-wrap: wrap;
        }

        .input-panel {
            flex: 1;
            min-width: 300px;
            background: var(--card-bg);
            border-radius: 12px;
            padding: 30px;
            box-shadow: var(--shadow);
        }

        .output-panel {
            flex: 1;
            min-width: 300px;
            background: var(--card-bg);
            border-radius: 12px;
            padding: 30px;
            box-shadow: var(--shadow);
            display: flex;
            flex-direction: column;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: var(--dark);
        }

        .form-control {
            width: 100%;
            padding: 12px 16px;
            border: 1px solid var(--gray);
            border-radius: 8px;
            font-size: 16px;
            transition: var(--transition);
        }

        .form-control:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(131, 58, 180, 0.2);
        }

        textarea.form-control {
            min-height: 120px;
            resize: vertical;
        }

        .model-preview {
            flex: 1;
            background: #f0f0f0;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
            position: relative;
            overflow: hidden;
        }

        .model-preview-placeholder {
            text-align: center;
            color: #777;
            padding: 20px;
        }

        .model-preview-placeholder i {
            font-size: 64px;
            margin-bottom: 16px;
            color: var(--primary);
        }

        .action-buttons {
            display: flex;
            gap: 12px;
        }

        /* Gallery Section */
        .gallery-section {
            max-width: 1200px;
            margin: 80px auto;
            padding: 0 20px;
        }

        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 24px;
        }

        .gallery-item {
            background: var(--card-bg);
            border-radius: 12px;
            overflow: hidden;
            box-shadow: var(--shadow);
            transition: var(--transition);
        }

        .gallery-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .gallery-image {
            height: 280px;
            background: linear-gradient(45deg, #f093fb, #f5576c);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 48px;
        }

        .gallery-info {
            padding: 16px;
        }

        .gallery-info h3 {
            margin-bottom: 8px;
            font-size: 18px;
        }

        .gallery-info p {
            color: #777;
            font-size: 14px;
            margin-bottom: 12px;
        }

        .gallery-actions {
            display: flex;
            justify-content: space-between;
        }

        /* Footer */
        footer {
            background: var(--dark);
            color: white;
            padding: 40px 20px;
            margin-top: 80px;
        }

        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }

        .footer-section {
            flex: 1;
            min-width: 200px;
            margin-bottom: 30px;
        }

        .footer-section h3 {
            margin-bottom: 20px;
            font-size: 20px;
        }

        .footer-links {
            list-style: none;
        }

        .footer-links li {
            margin-bottom: 10px;
        }

        .footer-links a {
            color: #ccc;
            text-decoration: none;
            transition: var(--transition);
        }

        .footer-links a:hover {
            color: white;
        }

        .social-icons {
            display: flex;
            gap: 16px;
            margin-top: 20px;
        }

        .social-icons a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: #333;
            color: white;
            transition: var(--transition);
        }

        .social-icons a:hover {
            background: var(--primary);
            transform: translateY(-3px);
        }

        .copyright {
            text-align: center;
            padding-top: 40px;
            color: #777;
            border-top: 1px solid #333;
            margin-top: 40px;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .hero h1 {
                font-size: 36px;
            }
            
            .hero p {
                font-size: 18px;
            }
            
            .nav-links {
                display: none;
            }
            
            .generator-container {
                flex-direction: column;
            }
        }

        /* Modal Styles */
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            z-index: 1000;
            justify-content: center;
            align-items: center;
        }

        .modal-content {
            background: white;
            border-radius: 12px;
            width: 90%;
            max-width: 500px;
            padding: 30px;
            position: relative;
        }

        .close-modal {
            position: absolute;
            top: 15px;
            right: 15px;
            font-size: 24px;
            cursor: pointer;
            color: #777;
        }

        .close-modal:hover {
            color: var(--dark);
        }

        /* Loading Animation */
        .loading {
            display: none;
            text-align: center;
            padding: 20px;
        }

        .spinner {
            border: 4px solid rgba(0, 0, 0, 0.1);
            border-radius: 50%;
            border-top: 4px solid var(--primary);
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
            margin: 0 auto 16px;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header>
        <a href="#" class="logo">HERTZAI</a>
        <nav class="nav-links">
            <a href="#">Home</a>
            <a href="#">Explore</a>
            <a href="#">Tutorials</a>
            <a href="#">Community</a>
        </nav>
        <div class="auth-buttons">
            <button class="btn btn-outline" id="loginBtn">Log In</button>
            <button class="btn btn-primary" id="signupBtn">Sign Up</button>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <h1>AI-Powered 3D Model Generation</h1>
        <p>Create custom 3D printing models in seconds with our advanced AI technology. No design skills required!</p>
        <button class="cta-button" id="generateBtn">Create Your First Model</button>
    </section>

    <!-- Generator Section -->
    <section class="generator-section">
        <h2 class="section-title">Design Your 3D Model</h2>
        <div class="generator-container">
            <div class="input-panel">
                <div class="form-group">
                    <label for="modelType">Model Type</label>
                    <select class="form-control" id="modelType">
                        <option value="functional">Functional Object</option>
                        <option value="decorative">Decorative Item</option>
                        <option value="mechanical">Mechanical Part</option>
                        <option value="artistic">Artistic Sculpture</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="description">Describe Your Model</label>
                    <textarea class="form-control" id="description" placeholder="e.g., A minimalist vase with geometric patterns, 15cm tall"></textarea>
                </div>
                <div class="form-group">
                    <label for="dimensions">Dimensions (mm)</label>
                    <div style="display: flex; gap: 12px;">
                        <input type="number" class="form-control" id="width" placeholder="Width" min="10" max="500" value="100">
                        <input type="number" class="form-control" id="height" placeholder="Height" min="10" max="500" value="150">
                        <input type="number" class="form-control" id="depth" placeholder="Depth" min="10" max="500" value="80">
                    </div>
                </div>
                <div class="form-group">
                    <label for="complexity">Complexity Level</label>
                    <select class="form-control" id="complexity">
                        <option value="simple">Simple</option>
                        <option value="medium" selected>Medium</option>
                        <option value="complex">Complex</option>
                    </select>
                </div>
                <button class="btn btn-primary" style="width: 100%;" id="generateModelBtn">
                    <i class="fas fa-magic"></i> Generate Model
                </button>
            </div>
            <div class="output-panel">
                <div class="model-preview">
                    <div class="model-preview-placeholder">
                        <i class="fas fa-cube"></i>
                        <p>Your 3D model will appear here</p>
                    </div>
                </div>
                <div class="loading" id="loadingIndicator">
                    <div class="spinner"></div>
                    <p>Generating your 3D model with AI...</p>
                </div>
                <div class="action-buttons">
                    <button class="btn btn-outline" id="saveBtn" disabled>
                        <i class="fas fa-save"></i> Save
                    </button>
                    <button class="btn btn-outline" id="downloadBtn" disabled>
                        <i class="fas fa-download"></i> Download STL
                    </button>
                    <button class="btn btn-outline" id="shareBtn" disabled>
                        <i class="fas fa-share-alt"></i> Share
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- Gallery Section -->
    <section class="gallery-section">
        <h2 class="section-title">Featured Creations</h2>
        <div class="gallery-grid">
            <div class="gallery-item">
                <div class="gallery-image">
                    <i class="fas fa-vase"></i>
                </div>
                <div class="gallery-info">
                    <h3>Geometric Vase</h3>
                    <p>Minimalist design with intricate patterns</p>
                    <div class="gallery-actions">
                        <span><i class="fas fa-heart"></i> 245</span>
                        <span><i class="fas fa-download"></i> 120</span>
                    </div>
                </div>
            </div>
            <div class="gallery-item">
                <div class="gallery-image">
                    <i class="fas fa-cog"></i>
                </div>
                <div class="gallery-info">
                    <h3>Custom Gear Set</h3>
                    <p>Precision mechanical parts for robotics</p>
                    <div class="gallery-actions">
                        <span><i class="fas fa-heart"></i> 189</span>
                        <span><i class="fas fa-download"></i> 95</span>
                    </div>
                </div>
            </div>
            <div class="gallery-item">
                <div class="gallery-image">
                    <i class="fas fa-mountain"></i>
                </div>
                <div class="gallery-info">
                    <h3>Mountain Range</h3>
                    <p>Topographic map of the Swiss Alps</p>
                    <div class="gallery-actions">
                        <span><i class="fas fa-heart"></i> 320</span>
                        <span><i class="fas fa-download"></i> 156</span>
                    </div>
                </div>
            </div>
            <div class="gallery-item">
                <div class="gallery-image">
                    <i class="fas fa-lamp"></i>
                </div>
                <div class="gallery-info">
                    <h3>Modern Lamp</h3>
                    <p>Functional and artistic lighting solution</p>
                    <div class="gallery-actions">
                        <span><i class="fas fa-heart"></i> 278</span>
                        <span><i class="fas fa-download"></i> 134</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h3>HERTZAI</h3>
                <p>Revolutionizing 3D printing with AI-powered design generation.</p>
                <div class="social-icons">
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                </div>
            </div>
            <div class="footer-section">
                <h3>Quick Links</h3>
                <ul class="footer-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Explore Models</a></li>
                    <li><a href="#">Tutorials</a></li>
                    <li><a href="#">Community</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Resources</h3>
                <ul class="footer-links">
                    <li><a href="#">Documentation</a></li>
                    <li><a href="#">API</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Newsletter</h3>
                <p>Subscribe for updates and new features</p>
                <div style="display: flex; margin-top: 10px;">
                    <input type="email" class="form-control" placeholder="Your email" style="margin-right: 10px;">
                    <button class="btn btn-primary">Subscribe</button>
                </div>
            </div>
        </div>
        <div class="copyright">
            <p>&copy; 2023 HERTZAI. All rights reserved.</p>
        </div>
    </footer>

    <!-- Login Modal -->
    <div class="modal" id="loginModal">
        <div class="modal-content">
            <span class="close-modal" id="closeLogin">&times;</span>
            <h2 style="margin-bottom: 20px;">Log In to HERTZAI</h2>
            <div class="form-group">
                <label for="loginEmail">Email</label>
                <input type="email" class="form-control" id="loginEmail" placeholder="your@email.com">
            </div>
            <div class="form-group">
                <label for="loginPassword">Password</label>
                <input type="password" class="form-control" id="loginPassword" placeholder="••••••••">
            </div>
            <button class="btn btn-primary" style="width: 100%; margin-top: 20px;">Log In</button>
            <p style="text-align: center; margin-top: 16px;">
                Don't have an account? <a href="#" id="switchToSignup" style="color: var(--primary);">Sign Up</a>
            </p>
        </div>
    </div>

    <!-- Signup Modal -->
    <div class="modal" id="signupModal">
        <div class="modal-content">
            <span class="close-modal" id="closeSignup">&times;</span>
            <h2 style="margin-bottom: 20px;">Create Your Account</h2>
            <div class="form-group">
                <label for="signupName">Full Name</label>
                <input type="text" class="form-control" id="signupName" placeholder="John Doe">
            </div>
            <div class="form-group">
                <label for="signupEmail">Email</label>
                <input type="email" class="form-control" id="signupEmail" placeholder="your@email.com">
            </div>
            <div class="form-group">
                <label for="signupPassword">Password</label>
                <input type="password" class="form-control" id="signupPassword" placeholder="••••••••">
            </div>
            <div class="form-group">
                <label for="confirmPassword">Confirm Password</label>
                <input type="password" class="form-control" id="confirmPassword" placeholder="••••••••">
            </div>
            <button class="btn btn-primary" style="width: 100%; margin-top: 20px;">Sign Up</button>
            <p style="text-align: center; margin-top: 16px;">
                Already have an account? <a href="#" id="switchToLogin" style="color: var(--primary);">Log In</a>
            </p>
        </div>
    </div>

    <script>
        // DOM Elements
        const loginBtn = document.getElementById('loginBtn');
        const signupBtn = document.getElementById('signupBtn');
        const loginModal = document.getElementById('loginModal');
        const signupModal = document.getElementById('signupModal');
        const closeLogin = document.getElementById('closeLogin');
        const closeSignup = document.getElementById('closeSignup');
        const switchToSignup = document.getElementById('switchToSignup');
        const switchToLogin = document.getElementById('switchToLogin');
        const generateModelBtn = document.getElementById('generateModelBtn');
        const loadingIndicator = document.getElementById('loadingIndicator');
        const saveBtn = document.getElementById('saveBtn');
        const downloadBtn = document.getElementById('downloadBtn');
        const shareBtn = document.getElementById('shareBtn');
        const modelPreview = document.querySelector('.model-preview');

        // Modal Functions
        function openModal(modal) {
            modal.style.display = 'flex';
        }

        function closeModal(modal) {
            modal.style.display = 'none';
        }

        // Event Listeners for Modals
        loginBtn.addEventListener('click', () => openModal(loginModal));
        signupBtn.addEventListener('click', () => openModal(signupModal));
        closeLogin.addEventListener('click', () => closeModal(loginModal));
        closeSignup.addEventListener('click', () => closeModal(signupModal));
        switchToSignup.addEventListener('click', () => {
            closeModal(loginModal);
            openModal(signupModal);
        });
        switchToLogin.addEventListener('click', () => {
            closeModal(signupModal);
            openModal(loginModal);
        });

        // Close modals when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === loginModal) closeModal(loginModal);
            if (e.target === signupModal) closeModal(signupModal);
        });

        // Generate Model Functionality
        generateModelBtn.addEventListener('click', () => {
            // Show loading indicator
            loadingIndicator.style.display = 'block';
            modelPreview.innerHTML = '';
            
            // Simulate AI processing time
            setTimeout(() => {
                // Hide loading indicator
                loadingIndicator.style.display = 'none';
                
                // Show generated model preview
                modelPreview.innerHTML = `
                    <div style="text-align: center; padding: 20px;">
                        <div style="background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%); 
                                    width: 200px; height: 200px; border-radius: 12px; 
                                    margin: 0 auto 20px; display: flex; align-items: center; 
                                    justify-content: center; color: white; font-size: 64px;">
                            <i class="fas fa-cube"></i>
                        </div>
                        <h3>Custom 3D Model</h3>
                        <p>Ready for 3D printing</p>
                    </div>
                `;
                
                // Enable action buttons
                saveBtn.disabled = false;
                downloadBtn.disabled = false;
                shareBtn.disabled = false;
            }, 2500);
        });

        // Button actions (simulated)
        saveBtn.addEventListener('click', () => {
            alert('Model saved to your HERTZAI account!');
        });
        
        downloadBtn.addEventListener('click', () => {
            alert('STL file downloaded successfully!');
        });
        
        shareBtn.addEventListener('click', () => {
            alert('Share link copied to clipboard!');
        });

        // Generate CTA button
        document.getElementById('generateBtn').addEventListener('click', () => {
            document.querySelector('.generator-section').scrollIntoView({ behavior: 'smooth' });
        });
    </script>
</body>
</html>
