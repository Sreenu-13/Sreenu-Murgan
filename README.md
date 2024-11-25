<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
  <title>vCard - Personal Portfolio</title>

  <!--
    - favicon
  -->
  <link rel="shortcut icon" href="./assets/images/favicon.ico" type="image/x-icon">

  <!--
    - custom css link
  -->
  <link rel="stylesheet" href="./assets/css/style.css">

  <!--
    - google font link
  -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
</head>

<body>

  <!--
    - #MAIN
  -->

  <main>

    <!--
      - #SIDEBAR
    -->

    <aside class="sidebar" data-sidebar>

      <div class="sidebar-info">

        <figure class="avatar-box">
          <img src="./assets/images/Sreenu Murugan_photo.jpg" alt="Sreenu Murugan" width="80">
        </figure>

        <div class="info-content">
          <h1 class="name" title="Sreenu Murugan">Sreenu Murugan</h1>

          <p class="title">Software Developer</p>
        </div>

        <button class="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>

          <ion-icon name="chevron-down"></ion-icon>
        </button>

      </div>

      <div class="sidebar-info_more">

        <div class="separator"></div>

        <ul class="contacts-list">

          <li class="contact-item">

            <div class="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>

            <div class="contact-info">
              <p class="contact-title">Email</p>

              <a href="mailto:sreenumurugan19669@gmail.com" class="contact-link">sreenumurugan19669@gmail.com</a>
            </div>

          </li>

          <li class="contact-item">

            <div class="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>

            <div class="contact-info">
              <p class="contact-title">Phone</p>

              <a href="tel:+919677549136" class="contact-link">+91 9677549136</a>
            </div>

          </li>

          <li class="contact-item">

            <div class="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>

            <div class="contact-info">
              <p class="contact-title">Birthday</p>

              <time datetime="1982-06-23">June 13, 2000</time>
            </div>

          </li>

          <li class="contact-item">

            <div class="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <div class="contact-info">
              <p class="contact-title">Location</p>

              <address>Trivandrum, Kerala</address>
            </div>

          </li>

        </ul>

        <div class="separator"></div>

        <ul class="social-list">

          <div class="wrapper">
            <a href="https://www.linkedin.com/in/sreenumurugan/" class="icon"><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="https://github.com/Sreenu-13" class="icon"><i class="fa-brands fa-github"></i></a>
            <a href="https://x.com/Sreenu_Murugan?t=d3DO087__xSE9ap8GsvEfw&s=09" class="icon"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="https://www.instagram.com/sreenu_murugan?igsh=MTdibGg4ajFieDJpcw==" class="icon"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://www.facebook.com/profile.php?id=61550679315182&mibextid=ZbWKwL" class="icon"><i class="fa-brands fa-facebook"></i></a>            
          </div>
        </ul>

      </div>

    </aside>

    <!--
      - #main-content
    -->

    <div class="main-content">

      <!--
        - #NAVBAR
      -->

      <nav class="navbar">

        <ul class="navbar-list">

          <li class="navbar-item">
            <button class="navbar-link  active" data-nav-link>About</button>
          </li>

          <li class="navbar-item">
            <button class="navbar-link" data-nav-link>Resume</button>
          </li>

          <li class="navbar-item">
            <button class="navbar-link" data-nav-link>Portfolio</button>
          </li>

        <!--
          <li class="navbar-item">
            <button class="navbar-link" data-nav-link>Blog</button>
          </li> 
        -->

          <li class="navbar-item">
            <button class="navbar-link" data-nav-link>Contact</button>
          </li>

        </ul>

      </nav>

      <!--
        - #ABOUT
      -->

      <article class="about  active" data-page="about">

        <header>
          <h2 class="h2 article-title">About me</h2>
        </header>

        <section class="about-text">
          <p>
            I am Sreenu Murugan, a recent graduate in Computer Science and Engineering from Amrita College of Engineering and Technology. 
            I have experience in Java Full Stack Development and Full Stack Web Development, gained through internships and academic projects.
          </p>

          <p>
            I specialize in creating responsive and user-friendly web applications while collaborating with teams 
            to ensure accessibility and seamless performance. 
            My skills include Java, HTML, CSS, JavaScript, and frameworks like Spring, Spring Boot.
          </p>
          <p>
            I’ve worked on projects like an AI-powered Nutrition Analyzer, a Real Estate Price Prediction System, 
            and a customizable Online Burger Store, which helped me strengthen my understanding of frontend development, 
            UI/UX design, and performance optimization.
          </p>
        </section>


        <!--
          - service
        -->

        <section class="service">

          <h3 class="h3 service-title">What i'm doing</h3>

          <ul class="service-list">

            <!-- <li class="service-item">

              <div class="service-icon-box">
                <img src="./assets/images/icon-design.svg
                " alt="design icon" width="40">
              </div>

              <div class="service-content-box">
                <h4 class="h4 service-item-title">Web design</h4>

                <p class="service-item-text">
                  Passionate about crafting modern, responsive, and user-friendly web designs that merge aesthetics with functionality. 
                  I specialize in clean layouts, high-quality visuals, and seamless mobile experiences, using tools like ReactJS
                  to bring ideas to life. My designs focus on accessibility, speed, and delivering exceptional user engagement, 
                  creating websites that not only look great but perform flawlessly.
                </p>
              </div>

            </li> -->

            <li class="service-item">

              <div class="service-icon-box">
                <img src="./assets/images/icon-dev.svg" alt="Web development icon" width="40">
              </div>

              <div class="service-content-box">
                <h4 class="h4 service-item-title">Software Development</h4>

                <p class="service-item-text">
                  Dedicated to delivering high-quality software development with a focus on performance, scalability, and user-centric solutions. 
                  I specialize in building robust, efficient, and secure web applications using modern technologies like Java, Spring Boot and MySQL. 
                  With attention to clean code, best practices, and seamless integration, I ensure professional-grade solutions tailored to meet diverse needs.
                </p>
              </div>

            </li>

          </ul>

        </section>

        <section class="resumerr">

          <h3 class="h3 resumerr-title">Resume</h3>
      
          <ul class="resumerr-list">
      
              <li class="resumerr-item">
      
                  <div class="resumerr-icon-box">
                  </div>
      
                  <div class="resumerr-content-box">
                      <div class="icon-text-container">
                          <i class="fa-solid fa-cloud-arrow-down resumerr-icon" style="color: #ffcc33;"></i>
                          <a href="./assets/resume/Sreenu Murugan_Resume.pdf" class="resume-link" download>
                              <h4 class="h4 resumerr-item-title">Download Resume</h4>
                          </a>
                      </div>
                  </div>
              </li>
          </ul>
      </section>
      


        <!--
          - testimonials modal
        -->

        <div class="modal-container" data-modal-container>

          <div class="overlay" data-overlay></div>

          <section class="testimonials-modal">

            <button class="modal-close-btn" data-modal-close-btn>
              <ion-icon name="close-outline"></ion-icon>
            </button>

          </section>

        </div>


      </article>

      <!--
        - #RESUME
      -->

      <article class="resume" data-page="resume">

        <header>
          <h2 class="h2 article-title">Resume</h2>
        </header>

        <section class="timeline">

          <div class="title-wrapper">
            <div class="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>

            <h3 class="h3">Education</h3>
          </div>

          <ol class="timeline-list">

            <li class="timeline-item">

              <h4 class="h4 timeline-item-title">BE Computer Science and Engineering</h4>

              <span>2021 — 2024</span>

              <p class="timeline-text">
                Amrita College of Engineering and Technology, 
                Erachakulam, Nagercoil, Tamil Nadu.
              </p>

            </li>

            <li class="timeline-item">

              <h4 class="h4 timeline-item-title">Diploma in Mechanical Engineering</h4>

              <span>2018 — 2020</span>

              <p class="timeline-text">
                Amrita Polytechnic College,
                Erachakulam, Nagercoil, Tamil Nadu.
              </p>

            </li>

            <li class="timeline-item">

              <h4 class="h4 timeline-item-title">High school</h4>

              <span>2018 — 2020</span>

              <p class="timeline-text">
                T K M R M V H S School,
                Vallana, Pathanamthitta, Kerala
              </p>

            </li>

          </ol>

        </section>

        <section class="timeline">

          <div class="title-wrapper">
            <div class="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>

            <h3 class="h3">Internship</h3>
          </div>

          <ol class="timeline-list">
            <!-- Internship 1 -->
            <li class="timeline-item">
                <h4 class="h4 timeline-item-title">Java Full Stack Development</h4>
                <span>August 2024 — November 2024</span>
                <p class="timeline-text">
                  During my three-month Java Full Stack Development internship at Inmakes Infotech, 
                  I had the opportunity to work hands-on with technologies like Core Java, Advanced Java, 
                  Java Servlet, Hibernate, and Spring Boot. This experience provided me with practical insights 
                  into building dynamic, scalable, and efficient web applications while strengthening 
                  my skills in full-stack development and maintaining web applications.
                </p>
                <!-- Button to open modal -->
                <a href="#" id="openModelcer1" class="view-certificate">View Certificate</a>
                <!-- Modal Structure -->
                <div id="myModelcer1" class="modelcer">
                    <div class="modelcer-content">
                        <span class="close">&times;</span>
                        <img src="assets/images/Java Full Stack Intern_certificate.jpeg" alt="Java Full Stack Certificate" class="certificate">
                    </div>
                </div>
            </li>
        
            <!-- Internship 2 -->
            <li class="timeline-item">
                <h4 class="h4 timeline-item-title">Full Stack Web Development</h4>
                <span>June 2023 — July 2023</span>
                <p class="timeline-text">
                  During my one-month internship in Full Stack Web Development at Exposys Data Labs, 
                  I gained valuable insights and hands-on experience in building end-to-end web applications. 
                  This opportunity allowed me to develop both technical skills and a better understanding of the workflow involved in web development.
                </p>
                <!-- Button to open modal -->
                <a href="#" id="openModelcer2" class="view-certificate">View Certificate</a>
                <!-- Modal Structure -->
                <div id="myModelcer2" class="modelcer">
                    <div class="modelcer-content">
                        <span class="close">&times;</span>
                        <img src="assets/images/web development certificate.png" alt="Full Stack Web Development Certificate" class="certificate">
                    </div>
                </div>
            </li>
        
            <!-- Internship 3 -->
            <li class="timeline-item">
                <h4 class="h4 timeline-item-title">Web Development</h4>
                <span>May 2023 — June 2023</span>
                <p class="timeline-text">
                    During my one-week Web Development internship, I gained practical experience in designing
                    and developing responsive websites using HTML and CSS.
                </p>
                <!-- Button to open modal -->
                <!-- <a href="#" id="openModelcer3" class="view-certificate">View Certificate</a> --->
                <!-- Modal Structure -->
                <!-- <div id="myModelcer3" class="modelcer">
                    <div class="modelcer-content">
                        <span class="close">&times;</span>
                        <img src="assets/images/web-developer-certificate.png" alt="Web Developer Certificate" class="certificate">
                    </div>
                </div> -->
            </li>
        </ol>
        

        </section>

        <section class="skill">

          <h3 class="h3 skills-title">Technical Skills</h3>

          <ul class="skills-list content-card">

            <li class="skills-item">

              <div class="title-wrapper">
                <h5 class="h5">Java</h5>
                <data value="80">85%</data>
              </div>

              <div class="skill-progress-bg">
                <div class="skill-progress-fill" style="width: 85%;"></div>
              </div>

            </li>

            <li class="skills-item">

              <div class="title-wrapper">
                <h5 class="h5">HTML</h5>
                <data value="90">90%</data>
              </div>

              <div class="skill-progress-bg">
                <div class="skill-progress-fill" style="width: 90%;"></div>
              </div>

            </li>

            <li class="skills-item">

              <div class="title-wrapper">
                <h5 class="h5">CSS</h5>
                <data value="80">80%</data>
              </div>

              <div class="skill-progress-bg">
                <div class="skill-progress-fill" style="width: 80%;"></div>
              </div>

            </li>

            <li class="skills-item">

              <div class="title-wrapper">
                <h5 class="h5">JavaScript</h5>
                <data value="75">75%</data>
              </div>

              <div class="skill-progress-bg">
                <div class="skill-progress-fill" style="width: 75%;"></div>
              </div>

            </li>

            <li class="skills-item">

              <div class="title-wrapper">
                <h5 class="h5">MySQL</h5>
                <data value="85">85%</data>
              </div>

              <div class="skill-progress-bg">
                <div class="skill-progress-fill" style="width: 85%;"></div>
              </div>

            </li>

          </ul>

        </section>

        <section class="skill">

          <h3 class="h3 skills-title">Framework</h3>

          <ul class="skills-list content-card">

            <li class="skills-item">

              <div class="title-wrapper">
                <h5 class="h5">Hibernate</h5>
                <data value="67">67%</data>
              </div>

              <div class="skill-progress-bg">
                <div class="skill-progress-fill" style="width: 67%;"></div>
              </div>

            </li>

            <li class="skills-item">

              <div class="title-wrapper">
                <h5 class="h5">Spring</h5>
                <data value="62">62%</data>
              </div>

              <div class="skill-progress-bg">
                <div class="skill-progress-fill" style="width: 62%;"></div>
              </div>

            </li>

            <li class="skills-item">

              <div class="title-wrapper">
                <h5 class="h5">Spring Boot</h5>
                <data value="60">60%</data>
              </div>

              <div class="skill-progress-bg">
                <div class="skill-progress-fill" style="width: 60%;"></div>
              </div>

            </li>
          </ul>
        </section>

      <section class="skill">

              <h3 class="h3 skills-title">Languages</h3>
    
              <ul class="skills-list content-card">
    
                <li class="skills-item">
    
                  <div class="title-wrapper">
                    <h5 class="h5">English</h5>
                    <data value="90">90%</data>
                  </div>
    
                  <div class="skill-progress-bg">
                    <div class="skill-progress-fill" style="width: 90%;"></div>
                  </div>
    
                </li>

                <li class="skills-item">
    
                  <div class="title-wrapper">
                    <h5 class="h5">Malayalam</h5>
                    <data value="100">100%</data>
                  </div>
    
                  <div class="skill-progress-bg">
                    <div class="skill-progress-fill" style="width: 100%;"></div>
                  </div>
    
                </li>

                <li class="skills-item">
    
                  <div class="title-wrapper">
                    <h5 class="h5">Tamil</h5>
                    <data value="90">90%</data>
                  </div>
    
                  <div class="skill-progress-bg">
                    <div class="skill-progress-fill" style="width: 95%;"></div>
                  </div>
    
                </li>


      </article>





      <!--
        - #PORTFOLIO
      -->

      <article class="portfolio" data-page="portfolio">

        <header>
          <h2 class="h2 article-title">Portfolio</h2>
        </header>

        <section class="projects">

          <ul class="filter-list">

            <li class="filter-item">
              <button class="active" data-filter-btn>All</button>
            </li>

            <li class="filter-item">
              <button data-filter-btn>Web design</button>
            </li>

            <li class="filter-item">
              <button data-filter-btn>Applications</button>
            </li>

            <li class="filter-item">
              <button data-filter-btn>Web development</button>
            </li>

          </ul>

          <div class="filter-select-box">

            <button class="filter-select" data-select>

              <div class="select-value" data-selecct-value>Select category</div>

              <div class="select-icon">
                <ion-icon name="chevron-down"></ion-icon>
              </div>

            </button>

            <ul class="select-list">

              <li class="select-item">
                <button data-select-item>All</button>
              </li>

              <li class="select-item">
                <button data-select-item>Web design</button>
              </li>

              <li class="select-item">
                <button data-select-item>Applications</button>
              </li>

              <li class="select-item">
                <button data-select-item>Web development</button>
              </li>

            </ul>

          </div>

          <ul class="project-list">

            <li class="project-item  active" data-filter-item data-category="web development">
              <a href="https://github.com/Sreenu-13">

                <figure class="project-img">
                  <div class="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src="./assets/Projects/AI_powered_nutrition.jpg" alt="finance" loading="lazy">
                </figure>

                <h3 class="project-title">AI-Powered Nutrition Analyzer For Fitness</h3>

                <p class="project-category">Web development</p>

              </a>
            </li>

            <li class="project-item  active" data-filter-item data-category="web development">
              <a href="https://github.com/Sreenu-13">

                <figure class="project-img">
                  <div class="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src="./assets/Projects/Real_estate_price_prediction.jpg" alt="orizon" loading="lazy">
                </figure>

                <h3 class="project-title">Real Estate Price Prediction Using Machine Learning</h3>

                <p class="project-category">Web development</p>

              </a>
            </li>

            <li class="project-item  active" data-filter-item data-category="web development">
              <a href="https://github.com/Sreenu-13/Film-Booking-Project_Inmakes">

                <figure class="project-img">
                  <div class="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src="./assets/Projects/Film_booking_project.png" alt="fundo" loading="lazy">
                </figure>

                <h3 class="project-title">Film Booking</h3>

                <p class="project-category">Web development</p>

              </a>
            </li>

            <li class="project-item  active" data-filter-item data-category="applications">
              <a href="https://github.com/Sreenu-13/Corona-Virus-Tracking-application-Inmakes">

                <figure class="project-img">
                  <div class="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src="./assets/Projects/Corona_virus_tracking.png" alt="brawlhalla" loading="lazy">
                </figure>

                <h3 class="project-title">Conora Virus Tracking Application</h3>

                <p class="project-category">Applications</p>

              </a>
            </li>

            <li class="project-item  active" data-filter-item data-category="web design">
              <a href="https://github.com/Sreenu-13/Lab-Brrrgrrr-Exposys-Internship">

                <figure class="project-img">
                  <div class="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src="./assets/Projects/burger_project.png" alt="dsm." loading="lazy">
                </figure>

                <h3 class="project-title">Burger Ordering System</h3>

                <p class="project-category">Web design</p>

              </a>
            </li>

            <li class="project-item  active" data-filter-item data-category="web development">
              <a href="https://github.com/Sreenu-13/Online-Shopping-page-JSP-inmakes">

                <figure class="project-img">
                  <div class="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src="./assets/Projects/Online_shopping.png" alt="metaspark" loading="lazy">
                </figure>

                <h3 class="project-title">Online Shopping</h3>

                <p class="project-category">Web development</p>

              </a>
            </li>

            <!--

            <li class="project-item  active" data-filter-item data-category="web development">
              <a href="#">

                <figure class="project-img">
                  <div class="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src="./assets/images/project-7.png" alt="summary" loading="lazy">
                </figure>

                <h3 class="project-title">Summary</h3>

                <p class="project-category">Web development</p>

              </a>
            </li>

            <li class="project-item  active" data-filter-item data-category="applications">
              <a href="#">

                <figure class="project-img">
                  <div class="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src="./assets/images/project-8.jpg" alt="task manager" loading="lazy">
                </figure>

                <h3 class="project-title">Task Manager</h3>

                <p class="project-category">Applications</p>

              </a>
            </li>

            <li class="project-item  active" data-filter-item data-category="web development">
              <a href="#">

                <figure class="project-img">
                  <div class="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src="./assets/images/project-9.png" alt="arrival" loading="lazy">
                </figure>

                <h3 class="project-title">Arrival</h3>

                <p class="project-category">Web development</p>

              </a>
            </li>

          -->

          </ul>

        </section>

      </article>





      <!--
        - #BLOG
      -->
        <!-- not neede
      <article class="blog" data-page="blog">

        <header>
          <h2 class="h2 article-title">Blog</h2>
        </header>

        <section class="blog-posts">

          <ul class="blog-posts-list">

            <li class="blog-post-item">
              <a href="#">

                <figure class="blog-banner-box">
                  <img src="./assets/images/blog-1.jpg" alt="Design conferences in 2022" loading="lazy">
                </figure>

                <div class="blog-content">

                  <div class="blog-meta">
                    <p class="blog-category">Design</p>

                    <span class="dot"></span>

                    <time datetime="2022-02-23">Fab 23, 2022</time>
                  </div>

                  <h3 class="h3 blog-item-title">Design conferences in 2022</h3>

                  <p class="blog-text">
                    Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
                  </p>

                </div>

              </a>
            </li>

            <li class="blog-post-item">
              <a href="#">

                <figure class="blog-banner-box">
                  <img src="./assets/images/blog-2.jpg" alt="Best fonts every designer" loading="lazy">
                </figure>

                <div class="blog-content">

                  <div class="blog-meta">
                    <p class="blog-category">Design</p>

                    <span class="dot"></span>

                    <time datetime="2022-02-23">Fab 23, 2022</time>
                  </div>

                  <h3 class="h3 blog-item-title">Best fonts every designer</h3>

                  <p class="blog-text">
                    Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.
                  </p>

                </div>

              </a>
            </li>

            <li class="blog-post-item">
              <a href="#">

                <figure class="blog-banner-box">
                  <img src="./assets/images/blog-3.jpg" alt="Design digest #80" loading="lazy">
                </figure>

                <div class="blog-content">

                  <div class="blog-meta">
                    <p class="blog-category">Design</p>

                    <span class="dot"></span>

                    <time datetime="2022-02-23">Fab 23, 2022</time>
                  </div>

                  <h3 class="h3 blog-item-title">Design digest #80</h3>

                  <p class="blog-text">
                    Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.
                  </p>

                </div>

              </a>
            </li>

            <li class="blog-post-item">
              <a href="#">

                <figure class="blog-banner-box">
                  <img src="./assets/images/blog-4.jpg" alt="UI interactions of the week" loading="lazy">
                </figure>

                <div class="blog-content">

                  <div class="blog-meta">
                    <p class="blog-category">Design</p>

                    <span class="dot"></span>

                    <time datetime="2022-02-23">Fab 23, 2022</time>
                  </div>

                  <h3 class="h3 blog-item-title">UI interactions of the week</h3>

                  <p class="blog-text">
                    Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.
                  </p>

                </div>

              </a>
            </li>

            <li class="blog-post-item">
              <a href="#">

                <figure class="blog-banner-box">
                  <img src="./assets/images/blog-5.jpg" alt="The forgotten art of spacing" loading="lazy">
                </figure>

                <div class="blog-content">

                  <div class="blog-meta">
                    <p class="blog-category">Design</p>

                    <span class="dot"></span>

                    <time datetime="2022-02-23">Fab 23, 2022</time>
                  </div>

                  <h3 class="h3 blog-item-title">The forgotten art of spacing</h3>

                  <p class="blog-text">
                    Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>

                </div>

              </a>
            </li>

            <li class="blog-post-item">
              <a href="#">

                <figure class="blog-banner-box">
                  <img src="./assets/images/blog-6.jpg" alt="Design digest #79" loading="lazy">
                </figure>

                <div class="blog-content">

                  <div class="blog-meta">
                    <p class="blog-category">Design</p>

                    <span class="dot"></span>

                    <time datetime="2022-02-23">Fab 23, 2022</time>
                  </div>

                  <h3 class="h3 blog-item-title">Design digest #79</h3>

                  <p class="blog-text">
                    Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.
                  </p>

                </div>

              </a>
            </li>

          </ul>

        </section>

      </article>

    -->



      <!--
        - #CONTACT
      -->

      <article class="contact" data-page="contact">

        <header>
          <h2 class="h2 article-title">Contact</h2>
        </header>

        <section class="mapbox" data-mapbox>
          <figure>
            <figure>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3149.021113768923!2d77.24564985206614!3d8.356265720966675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1732111151366!5m2!1sen!2sin" 
              width="400" height="300" loading="lazy" ></iframe>
            </figure>
        </section>

        <section class="contact-form">
          <h3 class="h3 form-title">Contact Form</h3>
          
          <form action="https://api.web3forms.com/submit" method="POST">
            <div class="input-wrapper">
              <input type="hidden" name="access_key" value="6c3ea7a0-1f54-4534-bd17-0b960448f0d8">
              <input type="text" name="fullname" class="form-input" placeholder="Full name" required data-form-input>
              <input type="email" name="email" class="form-input" placeholder="Email address" required data-form-input>
            </div>
        
            <textarea name="message" class="form-input" placeholder="Your Message" required data-form-input></textarea>
        
            <button class="form-btn" type="submit">Send Message</button>
          </form>
        </section>
        

      </article>

    </div>

  </main>






  <!--
    - custom js link
  -->
  <script src="./assets/js/script.js"></script>

  <!--
    - ionicon link
  -->
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
  <script src="scriptcer.js"></script>

</body>

</html>
