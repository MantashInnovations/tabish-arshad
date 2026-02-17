import portfolioData from '@/data/portfolio.json';

export type PersonalInfo = {
    name: string;
    role: string;
    bio: string;
    cvUrl: string;
    email: string;
    socials: {
        github: string;
        linkedin: string;
        twitter: string;
    };
};

export type Project = {
    id: string;
    title: string;
    description: string;
    content: string;
    technologies: string[];
    features: string[];
    screenshots: { url: string; caption: string }[];
    links: {
        view: string;
        github?: string;
        design?: string;
    };
    role: string;
    duration: string;
    client: string;
    category: string;
};

export type Achievement = {
    id: string;
    title: string;
    provider: string;
    date: string;
    icon: string;
    badge?: string;
    shareUrl?: string;
};

export function getProjects(): Project[] {
    return portfolioData.projects;
}

export function getProjectById(id: string): Project | undefined {
    return portfolioData.projects.find(p => p.id === id);
}

export function getAchievements(): Achievement[] {
    return portfolioData.achievements;
}

export function getPersonalInfo(): PersonalInfo {
    return portfolioData.personalInfo;
}
