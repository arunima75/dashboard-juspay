import React, { createContext, useState } from 'react';

export const PanelContext = createContext();

export const PanelProvider = ({ children }) => {
  const [isLeftPanelOpen, setIsLeftPanelOpen] = useState(false);
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(false);

  const toggleLeftPanel = () => setIsLeftPanelOpen(!isLeftPanelOpen);
  const toggleRightPanel = () => setIsRightPanelOpen(!isRightPanelOpen);

  return (
    <PanelContext.Provider value={{ isLeftPanelOpen, isRightPanelOpen, toggleLeftPanel, toggleRightPanel }}>
      {children}
    </PanelContext.Provider>
  );
};