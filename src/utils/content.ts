export interface Service {
  id: number;
  title: string;
  description: string;
}

export interface Commitment {
  id: number;
  text: string;
}

export interface Vision {
  id: number;
  text: string;
}

export interface WhyChooseUsItem {
  id: number;
  title: string;
  description: string;
}

export interface ContactSection {
  id: number;
  title: string;
  description: string;
  fields: string[];
}

export interface Industry {
  id: number;
  title: string;
  description: string;
}

export interface CareerProgram {
  id: number;
  title: string;
  description: string;
  benefits: string[];
}

export interface Technology {
  name: string;
  description: string;
}

export interface ParsedContent {
  headlines: string[];
  aboutSections: { title: string; paragraphs: string[] }[];
  services: Service[];
  commitments: Commitment[];
  visions: Vision[];
  whyChooseUs: WhyChooseUsItem[];
  contactSections: ContactSection[];
  technologies: Technology[];
  industries: Industry[];
  careers: CareerProgram[];
}

export const parsedContent: ParsedContent = {
  headlines: [
    "Fueling Digital Growth with Exceptional IT Talent.",
    "Discover your next career adventure! Shape the future with Nexamentes",
    "Turning Hiring Challenges into Growth Opportunities.",
    "Empowering Organizations Through Strategic Talent."
  ],
  aboutSections: [
    {
      title: "About Nexamentes – Who We Are",
      paragraphs: [
        "Nexamentes is dedicated to delivering next-generation staffing and workforce solutions that empower businesses to grow, innovate, and succeed in a rapidly evolving technology landscape. We are built on the values of trust, excellence, and inclusion, and we focus on creating meaningful connections between organizations, skilled professionals, and global talent markets.",
        "As a modern IT staffing and workforce solutions partner, we support clients across the full technology lifecycle by providing flexible and scalable hiring solutions. Our expertise enables organizations to navigate digital transformation with the right talent, ensuring agility, efficiency, and long-term value creation.",
        "Through a combination of industry experience, AI-driven talent insights, and a client-focused approach, Nexamentes helps businesses build strong, future-ready teams that deliver measurable impact."
      ]
    },
    {
      title: "About Nexamentes",
      paragraphs: [
        "At Nexamentes, we help organizations turn ambitious ideas into measurable outcomes by delivering the right talent and workforce solutions at the right time. We recognize that successful digital transformation depends on skilled professionals who can execute with precision and adaptability.",
        "Our team collaborates closely with clients to understand workforce requirements, close critical skill gaps, and provide high-quality IT staffing solutions that support both immediate needs and long-term growth. By combining industry expertise, recruitment best practices, and AI-enabled talent insights, we help organizations build strong, resilient teams that drive innovation and operational excellence.",
        "At Nexamentes, we go beyond staffing to build long-term partnerships focused on consistent value creation and sustainable business success."
      ]
    },
    {
      title: "About Nexamentes",
      paragraphs: [
        "The future of business belongs to organizations that can adapt quickly, innovate consistently, and attract top-tier talent. Nexamentes was created to help companies meet these challenges with confidence through reliable IT staffing and workforce solutions.",
        "We deliver specialized recruitment and consulting services that connect businesses with skilled professionals across technology domains. Our approach blends strategic hiring practices, workforce planning, and AI-supported talent insights to improve decision-making and hiring outcomes.",
        "By prioritizing quality, speed, and long-term value, we help organizations build agile, future-ready teams equipped to meet evolving business demands and drive sustained growth."
      ]
    },
    {
      title: "Who We Are",
      paragraphs: [
        "Nexamentes is a talent-driven organization committed to helping businesses access skilled professionals who enable growth, competitiveness, and success in today’s rapidly evolving technology landscape.",
        "We believe every hire directly influences business performance, project outcomes, and organizational culture. That’s why we follow a consultative staffing approach—first understanding client objectives, then aligning the right talent to meet those goals with precision. We also leverage AI-driven talent insights to improve candidate matching, enhance screening accuracy, and accelerate hiring decisions.",
        "Through strong industry relationships, deep talent networks, and a commitment to quality delivery, we help organizations build high-performing teams while creating meaningful career opportunities for technology professionals."
      ]
    },
    {
      title: "About Us",
      paragraphs: [
        "Innovation thrives when organizations have access to the right talent at the right time. At Nexamentes, we specialize in helping businesses build technology teams that accelerate digital transformation and deliver measurable results.",
        "Our expertise spans IT staffing, workforce augmentation, technology consulting, and talent management services. We work with organizations across diverse industries, providing scalable workforce solutions that support business growth and technology advancement. We also leverage AI-driven talent intelligence to improve candidate matching, streamline screening, and enhance hiring speed and accuracy.",
        "With a focus on responsiveness, quality, and continuous improvement, Nexamentes helps businesses remain competitive in an increasingly dynamic technology landscape."
      ]
    },
    {
      title: "Our Company",
      paragraphs: [
        "At Nexamentes, we view every client relationship as a partnership built on trust, transparency, and shared success. We are committed to helping organizations overcome workforce challenges by delivering highly skilled professionals who make an immediate impact.",
        "Our team takes the time to understand each client's unique goals, culture, and operational needs. This allows us to provide customized staffing solutions that support project delivery, organizational growth, and long-term workforce planning. We also leverage AI-driven talent insights to improve candidate matching, enhance screening accuracy, and ensure faster access to the right professionals.",
        "By consistently delivering quality talent and dependable service, we help businesses create stronger teams and achieve their strategic objectives with confidence."
      ]
    },
    {
      title: "Who We Are",
      paragraphs: [
        "Nexamentes is a workforce solutions and IT staffing company focused on helping businesses improve performance through people, expertise, and innovation.",
        "We partner with organizations seeking specialized talent for critical initiatives, ongoing operations, and strategic growth programs. Our staffing and consulting services are designed to reduce hiring complexity, accelerate workforce readiness, and support business continuity.",
        "Driven by a commitment to excellence and client success, we deliver solutions that help companies adapt to changing market conditions while maintaining productivity and competitive advantage."
      ]
    },
    {
      title: "About Nexamentes",
      paragraphs: [
        "Nexamentes is a trusted provider of IT staffing, talent acquisition, and workforce consulting solutions that enable organizations to achieve sustainable growth in a rapidly evolving business environment.",
        "Our mission is to connect businesses with highly capable professionals who possess the technical expertise, industry knowledge, and leadership qualities required to deliver meaningful results. Through strategic workforce planning, targeted recruitment, and flexible staffing models, we help clients address critical talent needs with speed and precision.",
        "We are guided by a culture of professionalism, integrity, and continuous improvement, ensuring every engagement contributes to stronger teams, successful projects, and long-term business value."
      ]
    }
  ],
  services: [
    {
      id: 1,
      title: "Staffing Solutions",
      description: "At Nexamentes, we bridge the gap between skilled technology professionals and forward-thinking organizations. Our staffing solutions are designed to quickly connect businesses with qualified IT talent that matches both technical requirements and project goals. Using AI-assisted sourcing and market insights, we ensure faster, more accurate hiring that supports business growth and success."
    },
    {
      id: 2,
      title: "Recruitment Process Outsourcing (RPO)",
      description: "Our Recruitment Process Outsourcing (RPO) model lets you focus on your core business while we manage the entire hiring lifecycle — from talent sourcing and screening to onboarding and post-hire follow-up. Acting as an extension of your HR team, we integrate proven recruitment strategies, tools, and networks to deliver cost-effective, scalable, and quality-driven hiring solutions. With our RPO services, you can significantly reduce time-to-hire, improve candidate quality, and strengthen your employer brand."
    },
    {
      id: 3,
      title: "Technology Workforce Planning",
      description: "Develop proactive hiring strategies through workforce forecasting, skills gap analysis, and resource planning that help organizations prepare for future technology demands and business growth."
    },
    {
      id: 4,
      title: "AI & Generative AI Staffing",
      description: "Connect with specialized professionals in Artificial Intelligence, Generative AI, Large Language Models (LLMs), Prompt Engineering, and Machine Learning to support next-generation innovation initiatives."
    },
    {
      id: 5,
      title: "VMS Staffing Support",
      description: "Provide qualified technology talent through Vendor Management Systems (VMS), ensuring faster submissions, compliance adherence, streamlined onboarding, and efficient workforce management. We also leverage AI-driven candidate matching to improve submission accuracy and speed up the identification of job-ready professionals within VMS environments."
    },
    {
      id: 6,
      title: "Managed Project Staffing",
      description: "Support technology initiatives with carefully assembled teams tailored to project requirements, timelines, and technical environments, helping ensure successful execution and delivery. We also use AI-driven resource allocation insights to match the right skills to project needs, improving efficiency, productivity, and delivery outcomes."
    },
    {
      id: 7,
      title: "Technology Talent Pipeline Development",
      description: "Create sustainable talent pipelines for recurring hiring needs through strategic sourcing, candidate engagement, market research, and proactive relationship building. We also leverage AI-based talent analytics to identify high-potential candidates early and maintain a ready-to-hire talent pool for faster fulfillment of future requirements."
    },
    {
      id: 8,
      title: "GCC Talent Acquisition Support",
      description: "Help Global Capability Centers (GCCs) build and scale high-performing technology teams by sourcing skilled professionals across engineering, cloud, data, and enterprise technology domains."
    },
    {
      id: 9,
      title: "Diversity Technology Recruiting",
      description: "Strengthen workforce diversity by connecting organizations with qualified technology professionals from varied backgrounds, experiences, and perspectives that foster innovation and inclusion."
    },
    {
      id: 10,
      title: "Emerging Technology Staffing",
      description: "At Nexamentes, we connect organizations with skilled professionals in Blockchain, IoT, Edge Computing, Automation, and Digital Engineering to support innovation and modernization initiatives. We also use AI-driven talent insights to quickly identify niche experts, ensuring faster access to specialized skills for evolving technology needs."
    },
    {
      id: 11,
      title: "Technical Interview & Assessment Services",
      description: "At Nexamentes, we strengthen hiring accuracy through structured technical interviews, coding assessments, and skill validation processes that ensure candidates meet role-specific requirements. By combining expert-led evaluations with AI-assisted screening insights, we help reduce hiring risks, improve candidate quality, and support faster, more confident hiring decisions."
    },
    {
      id: 12,
      title: "Technology Talent Community Management",
      description: "At Nexamentes, we build and manage engaged technology talent communities to ensure a continuous pipeline of qualified professionals. Through targeted outreach, referral programs, and ongoing candidate engagement, we strengthen relationships with skilled IT talent. We also use AI-driven insights to identify and re-engage high-potential candidates, improving hiring speed and quality when roles open up."
    },
    {
      id: 13,
      title: "Talent Consultation & Advisory",
      description: "At Nexamentes, we go beyond traditional recruitment by providing strategic Talent Consultation & Advisory services that help organizations build stronger, future-ready workforces. Our experts work closely with clients to assess workforce needs, identify skill gaps, optimize hiring strategies, and develop long-term talent plans aligned with business objectives. By leveraging workforce analytics, market intelligence, and AI-driven talent insights, we help organizations make informed decisions, improve workforce agility, and create sustainable talent strategies that support growth, innovation, and long-term success."
    },
    {
      id: 14,
      title: "Contract & Permanent Staffing",
      description: "Every organization has unique workforce needs — and we’re here to meet them all through our Contract and Permanent Staffing solutions. Whether you need contract-based professionals for short-term projects or permanent hires for long-term success, we offer flexible staffing options aligned with your business objectives. We combine industry expertise with AI-powered talent sourcing and candidate matching capabilities to identify qualified professionals more efficiently. From sourcing and background verification to payroll support and compliance management, we ensure a seamless hiring process that delivers dependable talent quickly, accurately, and cost-effectively."
    },
    {
      id: 15,
      title: "AI-Powered IT Staffing Solutions",
      description: "At Nexamentes, we combine human expertise with Artificial Intelligence to deliver faster, smarter, and more accurate talent acquisition. Our AI-driven staffing approach helps organizations identify, evaluate, and onboard top technology professionals while reducing hiring time and improving workforce quality."
    },
    {
      id: 16,
      title: "Remote Workforce Solutions",
      description: "At Nexamentes, we enable organizations to build high-performing remote teams by connecting them with skilled technology professionals across global markets. Through a strong remote talent network and AI-driven candidate matching, we help companies quickly access qualified experts while ensuring seamless collaboration, productivity, and cultural alignment."
    }
  ],
  commitments: [
    { id: 1, text: "We are committed to delivering future-ready talent solutions by combining human expertise with AI-driven insights to help organizations hire smarter, faster, and with greater precision." },
    { id: 2, text: "We are committed to understanding each client’s unique workforce challenges and providing tailored staffing strategies that ensure the right talent is delivered at the right time." },
    { id: 3, text: "We are committed to maintaining the highest standards of quality, transparency, and accountability in every hiring engagement to build lasting trust with our clients." },
    { id: 4, text: "We are committed to strengthening business performance by connecting organizations with skilled professionals who align with both technical requirements and long-term vision." },
    { id: 5, text: "We are committed to continuously evolving our recruitment approach through data-driven methods and intelligent sourcing techniques that improve hiring outcomes." },
    { id: 6, text: "We are committed to building strong, long-term partnerships by consistently delivering reliable talent solutions that support growth, innovation, and workforce stability." }
  ],
  visions: [
    { id: 1, text: "To be a next-generation IT staffing and workforce solutions leader that empowers organizations to build intelligent, future-ready teams through innovation, speed, and AI-driven talent delivery." },
    { id: 2, text: "To redefine technology hiring by creating a seamless ecosystem where businesses and skilled professionals connect efficiently, enabling growth, innovation, and long-term value creation." },
    { id: 3, text: "To become a trusted global talent partner known for delivering smart, scalable, and insight-driven staffing solutions that help organizations thrive in an evolving digital and AI-powered economy." }
  ],
  whyChooseUs: [
    {
      id: 1,
      title: "AI-Enhanced Talent Delivery",
      description: "We leverage AI-powered sourcing and intelligent matching to quickly identify highly qualified IT professionals, improving hiring speed, accuracy, and alignment with your project requirements."
    },
    {
      id: 2,
      title: "Deep US IT Talent Access",
      description: "We provide access to a strong network of pre-screened technology professionals across cloud, software development, data, and cybersecurity, ensuring reliable talent for critical business needs."
    },
    {
      id: 3,
      title: "Agile & Scalable Hiring",
      description: "Our flexible staffing models allow organizations to scale teams efficiently based on workload, project demands, and evolving business priorities."
    },
    {
      id: 4,
      title: "Quality-First Recruitment Approach",
      description: "Every candidate is evaluated through structured screening, technical assessment, and experience validation to ensure long-term performance and success."
    },
    {
      id: 5,
      title: "Intelligent Staffing Solutions",
      description: "We combine industry expertise with AI-driven recruitment insights to deliver smarter hiring decisions, faster turnaround times, and better talent-role alignment."
    },
    {
      id: 6,
      title: "Strong Technology Talent Network",
      description: "Our curated network of skilled IT professionals enables quick access to pre-qualified candidates across multiple technology domains and experience levels."
    },
    {
      id: 7,
      title: "Client-Focused Partnership Model",
      description: "We work closely with clients to understand business goals and deliver tailored staffing solutions that support both immediate hiring needs and long-term growth."
    },
    {
      id: 8,
      title: "Consistent Quality & Reliability",
      description: "We maintain high standards in sourcing, screening, and selection to ensure every hire contributes positively to performance and project outcomes."
    }
  ],
  contactSections: [
    {
      id: 1,
      title: "Let’s Start a Conversation",
      description: "We’re here to understand your hiring needs and help you find the right IT talent quickly and efficiently. Whether you’re scaling teams or filling critical roles, our experts are ready to support your goals. Connect with us to explore tailored staffing solutions designed for your business success.",
      fields: ["Name", "Email", "Phone", "Message"]
    },
    {
      id: 2,
      title: "We’re Here to Help You Hire Smarter",
      description: "From urgent hiring requirements to long-term workforce planning, Nexamentes is your trusted IT staffing partner. Share your requirements with us, and our team will get back to you with the right talent solutions. We make it simple to connect with experienced technology professionals who fit your needs.",
      fields: ["First Name", "Last Name", "Email", "Phone", "Message"]
    },
    {
      id: 3,
      title: "Connect with Our Talent Experts",
      description: "Looking for skilled IT professionals or reliable staffing support? Our team is ready to assist you with fast, flexible, and AI-enabled hiring solutions tailored to your business needs. Let’s work together to build strong technology teams that drive real results.",
      fields: ["Name", "Email", "Phone Number", "Company (Optional)", "Message"]
    }
  ],
  technologies: [
    {
      name: "Generative AI & Large Language Models (LLMs)",
      description: "Architecting customized enterprise LLM agents, semantic search structures, retrieval-augmented generation (RAG) pipelines, and API integrations with OpenAI, Anthropic, and open-source models."
    },
    {
      name: "Artificial Intelligence (AI) & Machine Learning (ML)",
      description: "Deploying predictive algorithms, model tuning services, deep learning neural network architectures, computer vision layers, and MLOps release pipelines."
    },
    {
      name: "Python Full Stack Development",
      description: "Engineering high-concurrency backend APIs in FastAPI, Django, or Flask, paired with modern interactive frontend client interfaces."
    },
    {
      name: "Java Full Stack Development",
      description: "Building robust Spring Boot enterprise microservices, complex security integrations, and high-volume relational database storage solutions."
    },
    {
      name: "React & Frontend Development",
      description: "Crafting highly responsive, high-performance web applications with React, TypeScript, Next.js, and clean global state management models."
    },
    {
      name: "DevOps Engineering",
      description: "Automating cloud infrastructure provisioning with Terraform, deploying container orchestration via Kubernetes, and designing CI/CD build pipelines."
    },
    {
      name: "Cybersecurity",
      description: "Securing corporate assets through proactive threat analysis, vulnerability scans, IAM governance, and compliance audit frameworks."
    },
    {
      name: "Data Engineering",
      description: "Designing robust ETL/ELT pipelines, configuring Apache Spark or Kafka stream clusters, and optimizing Snowflake data warehouses."
    },
    {
      name: "Data Science",
      description: "Applying statistical algorithms, predictive modeling techniques, and exploratory data analysis to extract actionable insights from data."
    },
    {
      name: "Data Analytics & Power BI",
      description: "Creating interactive dashboards, complex SQL query optimizations, and automated reporting systems in Power BI and Tableau."
    },
    {
      name: "Service Now Development",
      description: "Configuring workflow rules, scripting custom modules, and building automated ITSM/ITOM integrations inside ServiceNow."
    },
    {
      name: "Salesforce Development",
      description: "Writing custom Apex triggers, Lightning Web Components (LWC), and configuring CRM system integration flows and process builders."
    },
    {
      name: "SAP Solutions",
      description: "Implementing SAP ERP migrations, customizing ABAP modules, and integrating core business processes across enterprise operations."
    },
    {
      name: "QA Automation Engineering",
      description: "Writing automated end-to-end and regression test plans using Playwright, Cypress, and Selenium testing libraries."
    },
    {
      name: "Business Analysis",
      description: "Bridging tech delivery and business objectives by defining clear system requirements, user stories, and business workflows."
    },
    {
      name: "UI/UX Development",
      description: "Designing customer-centric user flows, interactive prototypes, high-fidelity wireframes, and premium digital interfaces in Figma."
    },
    {
      name: "Cloud & Network Engineering",
      description: "Designing secure, auto-scaling cloud architectures on AWS, Azure, and GCP, alongside corporate networking infrastructures."
    }
  ],
  industries: [
    {
      id: 1,
      title: "Banking, Financial Services & Insurance (BFSI)",
      description: "We provide IT professionals for banking platforms, payment systems, risk management, and cybersecurity solutions. Our talent supports digital transformation, compliance, and AI-driven fraud detection in modern financial ecosystems."
    },
    {
      id: 2,
      title: "Healthcare & Life Sciences",
      description: "We deliver technology talent for healthcare systems, EHR platforms, telemedicine, and data management solutions. Our professionals support AI-based diagnostics, predictive analytics, and secure, compliant healthcare operations."
    },
    {
      id: 3,
      title: "Information Technology & Software",
      description: "We supply skilled IT experts across software development, cloud engineering, DevOps, QA, and AI-driven solutions. Our talent enables organizations to build scalable, secure, and high-performance digital products."
    },
    {
      id: 4,
      title: "Retail & E-Commerce",
      description: "We help retail and e-commerce businesses build scalable platforms, customer engagement systems, and AI-powered recommendation engines. Our talent enhances digital experience, sales performance, and operational efficiency."
    },
    {
      id: 5,
      title: "Manufacturing & Industrial",
      description: "We support manufacturing firms with IT talent in ERP systems, IoT integration, automation, and predictive maintenance. Our professionals enable smart factory transformation and AI-driven operational efficiency."
    },
    {
      id: 6,
      title: "Cloud & Digital Transformation Services",
      description: "We provide cloud engineers and DevOps professionals skilled in AWS, Azure, and GCP. Our talent enables seamless migration, infrastructure modernization, and AI-powered cloud optimization for scalable enterprise systems."
    },
    {
      id: 7,
      title: "Cybersecurity & Risk Management",
      description: "We deliver cybersecurity experts who strengthen enterprise security through threat detection, compliance, and risk management. Our professionals use AI-driven tools to protect systems and prevent cyber threats effectively."
    },
    {
      id: 8,
      title: "Telecommunications & Networking",
      description: "We provide IT professionals for telecom infrastructure, 5G networks, CRM systems, and enterprise connectivity. Our talent supports AI-driven network optimization and improves service reliability and performance."
    },
    {
      id: 9,
      title: "Logistics & Supply Chain Technology",
      description: "We supply technology experts for logistics platforms, warehouse systems, and tracking solutions. Our professionals support AI-based route optimization, demand forecasting, and real-time supply chain visibility."
    },
    {
      id: 10,
      title: "Energy, Utilities & Sustainability Tech",
      description: "We provide IT talent for energy management, smart grid systems, and utility platforms. Our professionals support AI-driven predictive maintenance, efficiency optimization, and sustainable digital transformation."
    }
  ],
  careers: [
    {
      id: 1,
      title: "Talent Acquisition Specialist Program",
      description: "For professionals pursuing careers in recruitment and talent sourcing.",
      benefits: [
        "Candidate sourcing techniques",
        "Resume screening skills",
        "Interview coordination",
        "Recruitment lifecycle exposure"
      ]
    },
    {
      id: 2,
      title: "IT Recruiter Development Program",
      description: "Designed for individuals entering technical recruitment roles.",
      benefits: [
        "Technology hiring fundamentals",
        "Requirement analysis training",
        "Candidate engagement strategies",
        "ATS platform experience"
      ]
    },
    {
      id: 3,
      title: "Technical Sourcing Excellence Program",
      description: "Focused on building expertise in identifying top technology talent.",
      benefits: [
        "Advanced sourcing methods",
        "LinkedIn recruiting techniques",
        "Passive candidate engagement",
        "Talent pipeline development"
      ]
    },
    {
      id: 4,
      title: "Recruitment Operations Program",
      description: "For professionals interested in recruitment process management.",
      benefits: [
        "Recruitment workflow training",
        "Process optimization exposure",
        "Compliance management",
        "Reporting and analytics"
      ]
    },
    {
      id: 5,
      title: "Executive Search Program",
      description: "Designed for recruiters specializing in leadership hiring.",
      benefits: [
        "Executive talent mapping",
        "Leadership assessment exposure",
        "Strategic sourcing techniques",
        "Client engagement experience"
      ]
    },
    {
      id: 6,
      title: "Bench Sales Professional Program",
      description: "For candidates interested in US IT staffing and consultant marketing.",
      benefits: [
        "Vendor management training",
        "Consultant marketing skills",
        "Client relationship development",
        "Placement lifecycle management"
      ]
    },
    {
      id: 7,
      title: "Staffing Account Management Program",
      description: "Focused on client relationship and account growth.",
      benefits: [
        "Client communication skills",
        "Workforce planning exposure",
        "Service delivery management",
        "Strategic account development"
      ]
    },
    {
      id: 8,
      title: "Recruitment Leadership Program",
      description: "Preparing future leaders in staffing and talent acquisition.",
      benefits: [
        "Team leadership training",
        "Recruitment strategy planning",
        "Performance management",
        "Business development exposure"
      ]
    }
  ]
};
