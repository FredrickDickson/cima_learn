CIMA Learn - Professional ADR Education Platform

A comprehensive Learning Management System (LMS) for the Center for International Mediators and Arbitrators (CIMA), providing world-class Alternative Dispute Resolution (ADR) training and certification programs.

## 🎯 Overview

CIMA Learn is a modern, full-stack web application designed to deliver professional ADR education to mediators, arbitrators, and legal professionals worldwide. The platform combines cutting-edge technology with educational excellence to provide an unparalleled learning experience.

## ✨ Key Features

### 🎓 **Learning Management**
- **Comprehensive Course Catalog**: Browse courses with advanced search, filtering, and sorting
- **Structured Learning Paths**: Courses organized into modules and lessons with clear progression
- **Progress Tracking**: Real-time progress monitoring with visual indicators and completion percentages
- **Interactive Dashboard**: Personalized learning dashboard with enrollment overview and achievements
- **Favorites System**: Save and organize preferred courses for quick access

### 👥 **User Experience**
- **Modern UI/UX**: Professional design with smooth animations and responsive layouts
- **Authentication**: Secure login via Replit OpenID Connect integration
- **User Profiles**: Comprehensive user management with profile customization
- **Mobile Responsive**: Optimized experience across all devices

### 💳 **Payment & Enrollment**
- **Paystack Integration**: Secure payment processing for course purchases
- **Flexible Pricing**: Support for both free and paid courses
- **Automated Enrollment**: Seamless course access after successful payment
- **Order Management**: Complete order tracking and history

### 🏆 **Certification & Achievement**
- **Digital Certificates**: Internationally recognized ADR certifications
- **Achievement Tracking**: Monitor learning milestones and accomplishments
- **Progress Analytics**: Detailed insights into learning patterns and success rates

### 💬 **Community Features**
- **Discussion Forums**: Course-specific Q&A and community interactions
- **Peer Learning**: Connect with fellow ADR professionals globally
- **Expert Interaction**: Direct access to instructors and industry experts

## 🛠 Technology Stack

### **Frontend**
- **React 18** with TypeScript for type-safe, modern web development
- **Wouter** for lightweight, declarative routing
- **TanStack Query** for powerful server state management
- **shadcn/ui** component library built on Radix UI primitives
- **Tailwind CSS** for utility-first styling and responsive design
- **Vite** for fast development and optimized production builds

### **Backend**
- **Express.js** with TypeScript for robust server-side development
- **Drizzle ORM** for type-safe database operations and migrations
- **PostgreSQL** via Neon serverless for scalable data storage
- **Passport.js** with OpenID Connect for secure authentication
- **RESTful API** design with comprehensive error handling

### **Payment Processing**
- **Paystack** integration for secure payment processing
- **Webhook handling** for automated enrollment and order management
- **Multiple currency support** for global accessibility

### **Development Tools**
- **TypeScript** for full-stack type safety
- **ESLint & Prettier** for code quality and consistency
- **Hot Module Replacement** for rapid development iteration

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- PostgreSQL database (Neon recommended)
- Paystack account for payment processing

### Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd cima-learn
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file with the following variables:
   ```env
   DATABASE_URL=your_postgresql_connection_string
   SESSION_SECRET=your_session_secret
   PAYSTACK_SECRET_KEY=your_paystack_secret_key
   VITE_PAYSTACK_PUBLIC_KEY=your_paystack_public_key
   ```

4. **Database Setup**
   ```bash
   npm run db:push
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5000`

## 📁 Project Structure

```
cima-learn/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Application pages/routes
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utility functions and configs
├── server/                # Backend Express application
│   ├── routes.ts          # API route definitions
│   ├── storage.ts         # Database operations
│   └── replitAuth.ts      # Authentication configuration
├── shared/                # Shared types and schemas
│   └── schema.ts          # Database schema and types
└── migrations/            # Database migration files
```

## 🎨 Design System

### **Color Palette**
- **Primary**: Professional blue gradient for trust and reliability
- **Accent**: Amber/orange for call-to-action buttons and highlights
- **Text**: White and blue variations for optimal contrast
- **Backgrounds**: Gradient blues with transparency effects

### **Typography**
- Clean, professional fonts optimized for readability
- Hierarchical heading structure for clear information architecture
- Responsive text sizing across all devices

### **Components**
- Consistent component library with shadcn/ui
- Accessible design patterns following WCAG guidelines
- Smooth animations and transitions for enhanced user experience

## 🌐 Deployment

### **Production Environment**
- Optimized builds with Vite for maximum performance
- PostgreSQL database with connection pooling
- CDN integration for static asset delivery
- Environment-specific configurations

### **Monitoring & Analytics**
- Error tracking and performance monitoring
- User analytics and learning pattern insights
- System health monitoring and alerts

## 📊 Features Roadmap

### **Current Version (v1.0)**
- ✅ Core LMS functionality
- ✅ User authentication and profiles
- ✅ Course catalog with search and filtering
- ✅ Payment processing integration
- ✅ Progress tracking and dashboard
- ✅ Favorites system
- ✅ Responsive design

### **Upcoming Features**
- 🔄 Supabase Integration
- 🔄 Convert the CIMA learn to a cross platform application (Flutter)
- 🔄 Advanced video streaming integration
- 🔄 Offline course access
- 🔄 Advanced analytics dashboard
- 🔄 Multi-language support
- 🔄 AI-powered course recommendations

## 🤝 Contributing

We welcome contributions to improve CIMA Learn! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### **Development Guidelines**
- Follow TypeScript best practices
- Write comprehensive tests for new features
- Ensure responsive design compatibility
- Follow the established code style and conventions

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For technical support or questions about CIMA Learn:

- **Documentation**: Comprehensive guides available in `/docs`
- **Issues**: Report bugs or request features via GitHub Issues
- **Community**: Join our developer community discussions

## 🏢 About CIMA

The Center for International Mediators and Arbitrators is a leading institution in alternative dispute resolution education, providing world-class training and certification programs for legal professionals worldwide.

---

**Built with ❤️ for the global ADR community**

*Last updated: January 2025*#
