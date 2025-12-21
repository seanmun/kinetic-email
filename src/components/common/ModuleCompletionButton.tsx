// src/components/common/ModuleCompletionButton.tsx

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaArrowRight, FaTrophy } from 'react-icons/fa';

interface ModuleCompletionButtonProps {
  moduleId: string;
  nextModulePath?: string;
  nextModuleTitle?: string;
}

const ModuleCompletionButton: React.FC<ModuleCompletionButtonProps> = ({
  moduleId,
  nextModulePath,
  nextModuleTitle
}) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const navigate = useNavigate();

  // Load completion status on mount
  useEffect(() => {
    const saved = localStorage.getItem('kinetic-learn-progress');
    if (saved) {
      try {
        const progress = JSON.parse(saved);
        setIsCompleted(progress.includes(moduleId));
      } catch (e) {
        console.error('Failed to load progress:', e);
      }
    }
  }, [moduleId]);

  // Save completion status
  const handleMarkComplete = () => {
    const saved = localStorage.getItem('kinetic-learn-progress');
    let progress: string[] = [];

    if (saved) {
      try {
        progress = JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse progress:', e);
      }
    }

    // Add this module to the progress if not already there
    if (!progress.includes(moduleId)) {
      progress.push(moduleId);
      localStorage.setItem('kinetic-learn-progress', JSON.stringify(progress));
      setIsCompleted(true);
      setShowConfetti(true);

      // Hide confetti after animation
      setTimeout(() => setShowConfetti(false), 3000);
    }
  };

  // Mark as incomplete
  const handleMarkIncomplete = () => {
    const saved = localStorage.getItem('kinetic-learn-progress');
    if (saved) {
      try {
        let progress = JSON.parse(saved);
        progress = progress.filter((id: string) => id !== moduleId);
        localStorage.setItem('kinetic-learn-progress', JSON.stringify(progress));
        setIsCompleted(false);
      } catch (e) {
        console.error('Failed to update progress:', e);
      }
    }
  };

  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 border border-blue-100 relative overflow-hidden">
      {/* Confetti animation */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <FaTrophy className="text-yellow-400 text-6xl animate-bounce" />
          </div>
        </div>
      )}

      <div className="relative z-10">
        {isCompleted ? (
          <>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <FaCheckCircle className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Module Completed! 🎉</h3>
                <p className="text-gray-700">
                  Great job! You've finished this module. Your progress has been saved.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/learn"
                className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                <span>Back to Learning Path</span>
              </Link>

              {nextModulePath && nextModuleTitle && (
                <Link
                  to={nextModulePath}
                  className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-md hover:from-blue-700 hover:to-indigo-700 transition-all"
                >
                  <span>Next: {nextModuleTitle}</span>
                  <FaArrowRight className="ml-2" />
                </Link>
              )}

              <button
                onClick={handleMarkIncomplete}
                className="flex items-center justify-center px-6 py-3 bg-gray-200 text-gray-700 font-medium rounded-md hover:bg-gray-300 transition-colors"
              >
                Mark as Incomplete
              </button>
            </div>
          </>
        ) : (
          <>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to continue?</h3>
            <p className="text-gray-700 mb-6">
              If you've completed this module and feel confident with the material, mark it as complete to track your progress.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleMarkComplete}
                className="flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-md hover:from-green-600 hover:to-emerald-700 transition-all transform hover:scale-105 shadow-lg"
              >
                <FaCheckCircle className="mr-2" />
                <span>Mark as Complete</span>
              </button>

              <Link
                to="/learn"
                className="flex items-center justify-center px-6 py-3 bg-gray-200 text-gray-700 font-medium rounded-md hover:bg-gray-300 transition-colors"
              >
                Back to Learning Path
              </Link>

              {nextModulePath && nextModuleTitle && (
                <Link
                  to={nextModulePath}
                  className="flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-md hover:bg-blue-50 transition-colors"
                >
                  <span>Skip to: {nextModuleTitle}</span>
                  <FaArrowRight className="ml-2" />
                </Link>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ModuleCompletionButton;
