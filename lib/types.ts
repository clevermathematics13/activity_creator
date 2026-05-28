export interface Skill {
  skill: string;
  question?: string;
  commandTerm?: string;
  difficulty?: 'foundational' | 'developing' | 'proficient' | 'advanced';
}

export interface Suggestion {
  skill: string;
  rationale: string;
}

export interface AssessmentAnalysis {
  naturalLanguageAnalysis: string;
  unitName: string;
  curriculum: string;
  skills: Skill[];
  suggestions: Suggestion[];
  clarifyingQuestions: string[];
}

export interface Unit {
  id: string;
  name: string;
  curriculum: string;
  assessedSkills: Skill[];
  includedSuggestions: Suggestion[];
  notes: string;
  createdAt: string;
  updatedAt: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
