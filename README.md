# Portfolio Website – Nam Son

## 🌐 Overview
This repository contains my personal **portfolio website** built with **vanilla HTML, CSS, and JavaScript**, packaged in Docker for consistent local and cloud deployment.  

Beyond the static website, this project is also a **cloud infrastructure showcase**, demonstrating skills in **AWS, Terraform, and CI/CD automation with GitHub Actions**.

👉 [Live Site](https://namson.io)  

---

## 🖥️ Frontend
- **Stack**: HTML5, CSS3, JavaScript (no frameworks).
- **Design**: Responsive with custom CSS and media queries.
- **Deployment**: Packaged inside Docker for portability.
- **Features**:
  - Profile, About, Skills, Project, Experience, and Contact sections.
  - Resume download button.
  - Responsive navbar with hamburger menu.

---

## ☁️ Infrastructure (Terraform + AWS)
I designed two deployment environments to practice **different AWS hosting strategies**:

### 1. EC2 Hosting (Full Infra Management)
![EC2 Setup](app/assets/EC2.svg)

- **Dockerized App** running on EC2.  
- **VPC** with private subnets across two Availability Zones.  
- **Application Load Balancer (ALB)** in public subnets for traffic distribution.  
- **Route 53** for DNS with custom domain (`namson.io`).  
- **Terraform** provisions everything, with remote state stored in S3.  

> This setup demonstrates **end-to-end infrastructure management**, including networking, load balancing, and secure deployments.

---

### 2. S3 + CloudFront Hosting (Optimized for Static Sites)
![S3 Setup](app/assets/S3.svg)

- **S3 bucket** with OAC (no public access).  
- **CloudFront** for global CDN, SSL termination, and caching.  
- **ACM** integrated with CloudFront for HTTPS.  
- **Route 53** alias to CloudFront.  
- **Terraform** provisions everything with state in S3.  

> This setup is my **production hosting solution**, chosen for cost efficiency and scalability.

---

## ⚙️ CI/CD (GitHub Actions)
I implemented **multiple GitHub Actions workflows** to automate testing and deployment:
- **CI Build Test**: Lints and validates HTML/CSS.  
- **CD to S3**: Uploads new files, applies cache control headers, and triggers CloudFront invalidation.  
- **CD to EC2**: Rebuilds Docker container and redeploys via SSH.  
- **Infra Rebuilds**: Manual `workflow_dispatch` triggers to recreate **only EC2 or only S3 infrastructure** without touching the rest of the stack.  

This demonstrates **fine-grained automation** instead of monolithic redeploys.

---

## 📂 Repository Structure
<pre>
.github/workflows/# CI/CD
pipelinesinfra/
├─ EC2_prod/ # Terraform config for EC2-based setup
├─ S3_prod/ # Terraform config for S3 + CloudFront setup
└─ modules/ # Shared Terraform modules (VPC, ALB, EC2, S3, CloudFront, Route 53)
app/
├─ index.html # Main website
├─ styles.css
├─ mediaqueries.css
├─ app.js
└─ assets/ # Images, resume, and icons</pre>

---

## 🚀 How to Run Locally
```bash
# Clone repo
git clone https://github.com/PhamNamSon/portfolio.git
cd portfolio/app

# Run locally with Docker
docker build -t portfolio .
docker run -p 8080:80 portfolio
```
Visit: http://localhost:8080

---

## 📖 Lessons Learned

- Balancing infra-heavy vs cost-efficient setups (EC2 vs S3/CloudFront).

- Managing Terraform state in S3 for collaboration and consistency.

- Building modular Terraform for reusable components.

- Handling cache invalidation in CloudFront.

- Designing CI/CD pipelines with manual triggers for selective redeployments.

