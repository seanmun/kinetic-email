// src/pages/portfolio/ProjectPage.tsx
// Detail page for a specific portfolio project, displays emails in a project

import React, { useState, useEffect, Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from './data/projectsData';
import { getProjectEmails, getEmailComponent, getEmailHTML, EmailMetadata } from './data/emailsData';
import { FaSun, FaHandHoldingMedical, FaEyeDropper, FaEnvelope, FaDownload, FaApple, FaAndroid, FaPaperPlane } from 'react-icons/fa';
import { TbCircuitGround, TbBulbFilled } from "react-icons/tb";
import { BsFillHeartPulseFill } from "react-icons/bs";
import IOSMailSimulator from '../../components/portfolio/IOSMailSimulator';
import AndroidGmailSimulator from '../../components/portfolio/AndroidGmailSimulator';
import SendEmailModal from '../../components/common/SendEmailModal';

// Map project IDs to icons
const projectIcons: Record<string, React.ReactNode> = {
  'daylight': <FaSun size={32} className="text-amber-500" />,
  'grounded': <TbCircuitGround size={32} className="text-green-500" />,
  'dr-cate': <FaHandHoldingMedical size={32} className="text-pink-500" />,
  'meraki': <FaEyeDropper size={32} className="text-blue-500" />,
  'chroma': <TbBulbFilled size={32} className="text-red-500" />,
  'pls': <BsFillHeartPulseFill size={32} className="text-purple-500" />
};

type EmailView = 'ios' | 'android' | 'both';

const ProjectPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [selectedEmailIndex, setSelectedEmailIndex] = useState<number>(0);
  const [emails, setEmails] = useState<EmailMetadata[]>([]);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const [EmailComponent, setEmailComponent] = useState<React.ComponentType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [emailHtml, setEmailHtml] = useState<string | null>(null);
  const [emailView, setEmailView] = useState<EmailView>('both');
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [showSendModal, setShowSendModal] = useState<boolean>(false);
  
  // Find project data
  const project = projects.find(p => p.id === projectId);
  
  // Handle window resize to determine default view
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Set default view based on screen size
      if (window.innerWidth < 768) {
        // On mobile, default to iOS view
        setEmailView('ios');
      } else {
        // On desktop, show both
        setEmailView('both');
      }
    };
    
    // Set initial view
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Load emails for this project
  useEffect(() => {
    const loadEmails = async () => {
      if (!projectId) return;
      
      setIsLoading(true);
      
      try {
        const projectEmails = await getProjectEmails(projectId);
        setEmails(projectEmails);
        
        // Load the first email if available
        if (projectEmails.length > 0) {
          await loadEmailComponent(projectEmails[0].id);
        }
      } catch (error) {
        console.error("Error loading project emails:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadEmails();
  }, [projectId]);
  
  // Load email component when selected email changes
  useEffect(() => {
    const updateSelectedEmail = async () => {
      if (emails.length > 0) {
        const emailId = emails[selectedEmailIndex].id;
        await loadEmailComponent(emailId);
      }
    };
    
    updateSelectedEmail();
  }, [selectedEmailIndex, emails]);
  
  // Function to load email component and HTML
  const loadEmailComponent = async (emailId: string) => {
    if (!projectId) return;
    
    setIsLoading(true);
    setEmailHtml(null);
    
    try {
      // Load the component (using your existing infrastructure)
      const component = await getEmailComponent(projectId, emailId);
      setEmailComponent(() => component);
      
      // Load the HTML content
      const html = await getEmailHTML(projectId, emailId);
      setEmailHtml(html);
    } catch (error) {
      console.error("Error loading email:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle exporting email HTML
  const handleExportEmail = async () => {
    if (!emails.length || !project || !projectId) return;

    const emailId = emails[selectedEmailIndex].id;
    
    try {
      // Get the HTML content
      const htmlContent = await getEmailHTML(projectId, emailId);
      
      // If we got HTML content, create a download
      if (htmlContent) {
        const blob = new Blob([htmlContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${emailId}.html`;
        document.body.appendChild(a);
        a.click();
        
        // Clean up
        setTimeout(() => {
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        }, 100);
      } else {
        console.warn('No HTML export function found for this email');
        alert('Export not available for this email');
      }
    } catch (error) {
      console.error('Error exporting email:', error);
      alert('Failed to export email');
    }
  };
  
  // Toggle between iOS and Android views on mobile
  const toggleEmailView = () => {
    if (emailView === 'ios') {
      setEmailView('android');
    } else {
      setEmailView('ios');
    }
  };
  
  if (!project) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <p className="mb-6">The project you are looking for does not exist.</p>
        <Link to="/portfolio" className="text-blue-600 hover:underline">
          &larr; Back to Portfolio
        </Link>
      </div>
    );
  }

  const selectedEmail = emails.length > 0 ? emails[selectedEmailIndex] : null;
  
  // Determine if we're on mobile
  const isMobile = windowWidth < 768;

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      {/* Back button */}
      <div className="mb-6">
        <Link to="/portfolio" className="text-blue-600 hover:underline inline-flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Back to Portfolio
        </Link>
      </div>
      
      {/* Project header */}
      <div className="flex flex-col md:flex-row items-start gap-6 mb-10">
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl font-bold mb-2">{project.name}</h1>
          <h2 className="text-xl text-gray-600 mb-4">{project.brand}</h2>
          <p className="text-gray-700 mb-4">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.keywords.map((keyword, index) => (
              <span 
                key={index}
                className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
        
        <div className="w-full md:w-1/3 bg-gray-50 p-6 rounded-lg">
          <div className="flex flex-col items-center justify-center mb-4">
            {projectIcons[project.id || ''] || <div className="w-8 h-8 bg-gray-300 rounded-full"></div>}
            <h3 className="mt-2 font-semibold text-xl">{project.brand}</h3>
          </div>
          <div className="text-sm text-gray-700">
            <div className="mb-2"><strong>Campaign Type:</strong> {project.campaignType}</div>
            <div className="mb-2"><strong>Total Emails:</strong> {project.totalEmails}</div>
          </div>
        </div>
      </div>

      {/* Email preview section */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Email Preview</h2>
          
          <div className="flex items-center gap-4">
            {/* Mobile toggle between iOS and Android */}
            {isMobile && (
              <button 
                onClick={toggleEmailView}
                className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-full transition"
              >
                {emailView === 'ios' ? (
                  <>
                    <FaAndroid size={16} />
                    <span>Show Gmail</span>
                  </>
                ) : (
                  <>
                    <FaApple size={16} />
                    <span>Show iOS Mail</span>
                  </>
                )}
              </button>
            )}
            
            {selectedEmail && (
              <>
                <button
                  onClick={() => setShowSendModal(true)}
                  className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition"
                >
                  <FaPaperPlane size={16} />
                  <span>Send to Inbox</span>
                </button>
                <button
                  onClick={handleExportEmail}
                  className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition"
                >
                  <FaDownload size={16} />
                  <span>Export HTML</span>
                </button>
              </>
            )}
          </div>
        </div>
        
        {/* Email preview - adaptive layout based on screen size and selected view */}
        <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-8`}>
          {/* iOS Mail Preview */}
          {(emailView === 'ios' || emailView === 'both') && (
            <div className="flex flex-col items-center">
              <div className="mb-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <FaApple size={20} className="text-gray-700" />
                  <h3 className="font-semibold text-lg">iOS Mail (Interactive)</h3>
                </div>
                <p className="text-sm text-gray-500">Interactive kinetic email version</p>
              </div>
              
              {isLoading ? (
                <div className="w-full h-[680px] flex items-center justify-center bg-gray-50 rounded">
                  <div className="text-gray-500 animate-pulse">Loading email...</div>
                </div>
              ) : !selectedEmail ? (
                <div className="w-full h-[680px] flex items-center justify-center bg-gray-50 rounded">
                  <div className="text-gray-500">Select an email to preview</div>
                </div>
              ) : (
                <Suspense fallback={<div className="text-center py-8">Loading email component...</div>}>
                  <IOSMailSimulator
                    sender={selectedEmail.sender}
                    subject={selectedEmail.subject}
                    date={selectedEmail.date}
                    htmlContent={emailHtml || undefined}
                  />
                </Suspense>
              )}
            </div>
          )}
          
          {/* Android Gmail Preview */}
          {(emailView === 'android' || emailView === 'both') && (
            <div className="flex flex-col items-center">
              <div className="mb-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <FaAndroid size={20} className="text-green-500" />
                  <h3 className="font-semibold text-lg">Android Gmail (Static)</h3>
                </div>
                <p className="text-sm text-gray-500">Non-interactive fallback version</p>
              </div>
              
              {isLoading ? (
                <div className="w-full h-[680px] flex items-center justify-center bg-gray-50 rounded">
                  <div className="text-gray-500 animate-pulse">Loading email...</div>
                </div>
              ) : !selectedEmail ? (
                <div className="w-full h-[680px] flex items-center justify-center bg-gray-50 rounded">
                  <div className="text-gray-500">Select an email to preview</div>
                </div>
              ) : (
                <Suspense fallback={<div className="text-center py-8">Loading email component...</div>}>
                  <AndroidGmailSimulator
                    sender={selectedEmail.sender}
                    subject={selectedEmail.subject}
                    date={selectedEmail.date}
                    htmlContent={emailHtml || undefined}
                  />
                </Suspense>
              )}
            </div>
          )}
        </div>
      </div>
      
      {/* Email selection */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Campaign Emails</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {emails.map((email, index) => (
            <div 
              key={email.id}
              className={`bg-white border rounded-lg overflow-hidden cursor-pointer transition-shadow hover:shadow-md ${selectedEmailIndex === index ? 'ring-2 ring-blue-500' : ''}`}
              onClick={() => setSelectedEmailIndex(index)}
            >
              <div className="h-40 bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <FaEnvelope size={36} className="mx-auto text-gray-400 mb-2" />
                  <div className="font-medium text-gray-600">{email.name}</div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{email.name}</h3>
                <p className="text-sm text-gray-600 mb-2">Subject: {email.subject}</p>
                <p className="text-sm text-gray-700 line-clamp-2">{email.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Send Email Modal */}
      {selectedEmail && emailHtml && (
        <SendEmailModal
          isOpen={showSendModal}
          onClose={() => setShowSendModal(false)}
          emailHTML={emailHtml}
          defaultSubject={selectedEmail.subject}
          emailType="portfolio"
          projectName={project?.name}
        />
      )}
    </div>
  );
};

export default ProjectPage;