import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const baseUrl = "https://saral-blogplatform-backend.vercel.app/api/blogs";

// Get all published blogs
export const getBlogs = async () => {
  try {
    const response = await axios.get(`${baseUrl}/published`);
    
    // Validate response structure
    if (!response.data || !response.data.success) {
      throw new Error('Invalid response from server');
    }
    
    return response.data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
};

// Get blog by slug
export const getBlogBySlug = async (slug) => {
  try {
    const response = await axios.get(`${baseUrl}/slug/${slug}`);
    
    // Validate response structure
    if (!response.data || !response.data.success) {
      throw new Error('Invalid response from server');
    }
    
    return response.data;
  } catch (error) {
    console.error('Error fetching blog by slug:', error);
    throw error;
  }
};

// Custom hooks for TanStack Query
export const useBlogs = () => {
  return useQuery({
    queryKey: ['blogs'],
    queryFn: getBlogs,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useBlogBySlug = (slug) => {
  return useQuery({
    queryKey: ['blog', slug],
    queryFn: () => getBlogBySlug(slug),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};
