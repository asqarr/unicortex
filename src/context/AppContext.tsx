import { createContext, useContext, useState, type ReactNode } from 'react';

interface ProfileState {
  major: string;
  workDays: string;
  deadline: string;
}

interface AppContextType {
  profile: ProfileState;
  updateProfile: (newProfile: Partial<ProfileState>) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<ProfileState>({
    major: 'Computer Engineering',
    workDays: 'Mon, Wed, Fri',
    deadline: '2026-07-15'
  });

  const updateProfile = (newProfile: Partial<ProfileState>) => {
    setProfile(prev => ({ ...prev, ...newProfile }));
  };

  return (
    <AppContext.Provider value={{ profile, updateProfile }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}