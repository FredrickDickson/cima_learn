# CIMA Learn - Professional ADR Education Platform

## Overview

This is a full-stack learning management system (LMS) for the Center for International Mediators and Arbitrators (CIMA). The platform provides comprehensive Alternative Dispute Resolution (ADR) training through courses, programs, and certifications for mediators and arbitrators globally. It supports both free and paid course enrollments, video-based learning, community discussions, progress tracking, and certification management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript in a single-page application (SPA) architecture
- **Routing**: Wouter for client-side routing with conditional authentication-based routes
- **State Management**: TanStack Query (React Query) for server state with custom query client configuration
- **UI Components**: shadcn/ui component library built on Radix UI primitives with Tailwind CSS for styling
- **Form Handling**: React Hook Form with Zod validation schemas
- **Build Tool**: Vite with custom configuration for development and production builds

### Backend Architecture
- **Framework**: Express.js server with TypeScript using ES modules
- **Database ORM**: Drizzle ORM with type-safe schema definitions and migrations
- **Authentication**: Passport.js with OpenID Connect strategy for Replit Auth integration
- **Session Management**: Express sessions with PostgreSQL session store
- **API Design**: RESTful endpoints with consistent error handling and logging middleware
- **File Structure**: Modular separation with dedicated routes, storage layer, and database connection management

### Database Design
- **Primary Database**: PostgreSQL with connection pooling via Neon serverless
- **Schema Management**: Drizzle ORM with migrations stored in `/migrations` directory
- **Key Entities**: Users, Courses, Modules, Lessons, Enrollments, Progress tracking, Reviews, Discussions, Certifications, Orders, and Categories
- **Data Relationships**: Comprehensive relational design with foreign keys and indexes for performance

### Authentication & Authorization
- **Primary Auth**: Replit OpenID Connect (OIDC) integration with automatic user provisioning
- **Session Storage**: PostgreSQL-backed sessions with configurable TTL
- **Route Protection**: Middleware-based authentication checks with automatic redirects
- **User Roles**: Multi-role system supporting students, instructors, and administrators

### Content Management
- **Course Structure**: Hierarchical organization with Courses → Modules → Lessons
- **Video Delivery**: Integration-ready for external video streaming services (Mux, Cloudflare Stream)
- **Progress Tracking**: Granular lesson-level progress with completion percentages
- **Discussion System**: Course-specific Q&A with threaded replies

## External Dependencies

### Payment Processing
- **Paystack**: Full integration for payment processing, checkout flows, and subscription management
- **Webhook Handling**: Server-side webhook processing for payment confirmations and enrollment automation

### UI & Styling
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Radix UI**: Unstyled, accessible component primitives for complex UI interactions
- **shadcn/ui**: Pre-built component library following modern design patterns
- **Lucide React**: Icon library for consistent iconography

### Development Tools
- **TypeScript**: Full type safety across frontend, backend, and shared schemas
- **ESBuild**: Fast bundling for production server builds
- **Vite**: Development server with hot module replacement and optimized builds
- **Drizzle Kit**: Database migration and schema management tooling

### Database & Infrastructure
- **Neon Database**: Serverless PostgreSQL with connection pooling
- **WebSocket Support**: Real-time capabilities via WebSocket constructor configuration

### Monitoring & Development
- **Replit Integration**: Development environment integration with banner and cartographer plugins
- **Error Handling**: Centralized error boundaries with user-friendly error messages
- **Logging**: Structured request/response logging with performance metrics