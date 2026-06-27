"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export interface Application {
  id: string;
  studentName: string;
  dateOfBirth: string;
  classApplying: string;
  previousInstitution: string;
  fatherName: string;
  motherName: string;
  guardianContact: string;
  email: string;
  address: string;
  photograph: string | null; // base64 or URL
  status: "pending" | "approved" | "rejected";
  submittedAt: string;
}

interface ApplicationContextType {
  applications: Application[];
  addApplication: (app: Omit<Application, "id" | "status" | "submittedAt">) => void;
  updateApplicationStatus: (id: string, status: "approved" | "rejected") => void;
}

const ApplicationContext = createContext<ApplicationContextType | undefined>(undefined);

export function ApplicationProvider({ children }: { children: ReactNode }) {
  const [applications, setApplications] = useState<Application[]>([]);

  const addApplication = (app: Omit<Application, "id" | "status" | "submittedAt">) => {
    const newApp: Application = {
      ...app,
      id: Date.now().toString(),
      status: "pending",
      submittedAt: new Date().toISOString(),
    };
    setApplications((prev) => [newApp, ...prev]);
  };

  const updateApplicationStatus = (id: string, status: "approved" | "rejected") => {
    setApplications((prev) =>
      prev.map((app) =>
        app.id === id ? { ...app, status } : app
      )
    );
  };

  return (
    <ApplicationContext.Provider value={{ applications, addApplication, updateApplicationStatus }}>
      {children}
    </ApplicationContext.Provider>
  );
}

export function useApplications() {
  const context = useContext(ApplicationContext);
  if (context === undefined) {
    throw new Error("useApplications must be used within an ApplicationProvider");
  }
  return context;
}