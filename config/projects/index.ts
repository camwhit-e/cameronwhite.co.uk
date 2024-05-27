/**
 * Project Configuration
 * 
 * This subdirectory and file control what projects
 * are shown on the 'Projects' page of this website.
 */

export interface Project {
    title: string;
    summary: string;
    sections: Section[];
};

interface Section {
    title: string;
    content: string;
    imageUrl: string;
};
