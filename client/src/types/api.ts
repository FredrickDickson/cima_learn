// API Response Types for CIMA Learn Platform

export interface Course {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  instructorId: string;
  categoryId: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  price: string;
  currency: string;
  thumbnailUrl?: string;
  promoVideoUrl?: string;
  duration?: number;
  isPublished: boolean;
  isFeatured?: boolean;
  avgRating: string;
  ratingCount: number;
  enrollmentCount: number;
  tags?: string[];
  createdAt: string;
  updatedAt: string;
  instructor?: {
    firstName?: string;
    lastName?: string;
  };
  category?: {
    name: string;
  };
}

export interface Enrollment {
  id: string;
  userId: string;
  courseId: string;
  enrolledAt: string;
  completedAt?: string;
  progress: string;
  course: Course;
}

export interface ProgressOverview {
  totalCourses: number;
  completedCourses: number;
  totalHours: number;
  averageProgress: number;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
  slug: string;
  createdAt: string;
}

export interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  role: 'student' | 'instructor' | 'admin';
  bio?: string;
  country?: string;
  profileImageUrl?: string;
  createdAt: string;
  updatedAt: string;
}