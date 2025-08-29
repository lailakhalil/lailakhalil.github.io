import React, { useState } from 'react';
import TabNavigation from './components/TabNavigation';
import HomeTab from './components/HomeTab';
import ProjectsTab from './components/ProjectsTab';
import NotesTab from './components/NotesTab';
import BlogTab from './components/BlogTab';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'home':
        return <HomeTab />;
      case 'projects':
        return <ProjectsTab />;
      case 'notes':
        return <NotesTab />;
      case 'blog':
        return <BlogTab />;
      default:
        return <HomeTab />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="transition-all duration-300 ease-in-out">
        {renderActiveTab()}
      </main>
    </div>
  );
}

export default App;