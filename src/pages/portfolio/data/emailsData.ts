// src/pages/portfolio/data/emailsData.ts
import React from 'react';

export interface EmailMetadata {
  id: string;
  name: string;
  description: string;
  subject: string;
  sender: string;
  date: string;
}

// Define the shape of an email module
interface EmailModule {
  default: React.ComponentType;
  emailMetadata: EmailMetadata;
  getEmailHTML?: () => string;
}

// Define which emails belong to which projects
// This is a fallback for static discovery
const projectEmailMap: Record<string, string[]> = {
  'daylight': ['spring-forward', 'sleep-tips'],
  'onboarding': ['welcome'],
  // Add other projects here
};

// Static import of all email modules
// Vite requires static glob patterns at build time
const allEmailModules = import.meta.glob<EmailModule>('../emails/**/*Email.tsx', { eager: false });

// Returns all module paths for a specific project
const getProjectModulePaths = (projectId: string): string[] => {
  const projectPathRegex = new RegExp(`/emails/${projectId}/`);
  return Object.keys(allEmailModules).filter(path => projectPathRegex.test(path));
};

// Returns an array of email metadata for a given project
export const getProjectEmails = async (projectId: string): Promise<EmailMetadata[]> => {
  try {
    // Get all module paths for this project
    const modulePaths = getProjectModulePaths(projectId);
    
    // Load all email modules and extract their metadata
    const loadedEmails = await Promise.all(
      modulePaths.map(async (path) => {
        try {
          const module: EmailModule = await allEmailModules[path]();
          return module.emailMetadata;
        } catch (error) {
          console.error(`Error loading email from ${path}`, error);
          return null;
        }
      })
    );
    
    // Filter out any null values and return the metadata
    return loadedEmails.filter(Boolean) as EmailMetadata[];
  } catch (error) {
    console.error(`Error loading emails for project: ${projectId}`, error);
    
    // Fallback to static mapping if dynamic loading fails
    if (projectEmailMap[projectId]) {
      console.log(`Using fallback email list for ${projectId}`);
      // This is just a placeholder for metadata when dynamic loading fails
      return projectEmailMap[projectId].map(id => ({
        id,
        name: id.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' '),
        description: 'Email description not available',
        subject: 'Email subject not available',
        sender: 'System',
        date: 'Unknown',
      }));
    }
    
    return [];
  }
};

// Dynamically loads an email component by ID
export const getEmailComponent = async (projectId: string, emailId: string): Promise<React.ComponentType | null> => {
  try {
    // Convert dash-case to PascalCase for the file name
    const emailName = emailId
      .split('-')
      .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
      .join('') + 'Email';
    
    // Find the module path that matches this project and email
    const modulePath = Object.keys(allEmailModules).find(
      path => path.includes(`/emails/${projectId}/`) && path.endsWith(`/${emailName}.tsx`)
    );
    
    if (!modulePath) {
      throw new Error(`Email module not found for ${projectId}/${emailId}`);
    }
    
    // Import the email module
    const module: EmailModule = await allEmailModules[modulePath]();
    
    // Return the default export (the React component)
    return module.default;
  } catch (error) {
    console.error(`Error loading email component for ${projectId}/${emailId}:`, error);
    return null;
  }
};

// Get the HTML content for an email
export const getEmailHTML = async (projectId: string, emailId: string): Promise<string | null> => {
  try {
    // Convert dash-case to PascalCase for the file name
    const emailName = emailId
      .split('-')
      .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
      .join('') + 'Email';
    
    // Find the module path that matches this project and email
    const modulePath = Object.keys(allEmailModules).find(
      path => path.includes(`/emails/${projectId}/`) && path.endsWith(`/${emailName}.tsx`)
    );
    
    if (!modulePath) {
      throw new Error(`Email module not found for ${projectId}/${emailId}`);
    }
    
    // Import the email module
    const module: EmailModule = await allEmailModules[modulePath]();
    
    // Return the HTML content if getEmailHTML exists
    if (typeof module.getEmailHTML === 'function') {
      return module.getEmailHTML();
    }
    
    return null;
  } catch (error) {
    console.error(`Error loading email HTML for ${projectId}/${emailId}:`, error);
    return null;
  }
};