import Box from '@mui/material/Box';
import ExperienceCard from './ExperienceCard';

const data = {
    kg: {
        title: 'Web App and Knowledge Graph Engineer',
        content: `Worked with a team from the School of Cities: Urban Data Centre to research the effectiveness of ChatGPT on their Ontological Knowledge Graph with GraphDB's Talk To Your Graph Feature.`,
        timePeriod: 'Jun 2024 - Present',
        skills: 'ChatGPT, SPARQL, Python, Bash, Docker, Github',
    },
    webapp: {
        title: 'Junior Software Engineer',
        content: `Worked primarily as a full-stack developer for Alida's Touchpoint product. I focused on implementing new features onto their Typescript/React Interface and updated any API calls needed on the Golang backend. Focused on implementing error detection when users generate questionnaires and helped lead Agile sprints.`,
        timePeriod: `Sep 2022 - Aug 2023`,
        skills: 'Typescript, React, Golang, Docker, PostgreSQL',
    },
};

const ExperienceTimeline = () => {
    return (
        <Box sx={{ display: 'box', justifyContent: 'left' }}>
            <ExperienceCard
                title={data.kg.title}
                content={data.kg.content}
                timePeriod={data.kg.timePeriod}
                skills={data.kg.skills}
            />
            <ExperienceCard
                title={data.webapp.title}
                content={data.webapp.content}
                timePeriod={data.webapp.timePeriod}
                skills={data.webapp.skills}
            />
        </Box>
    );
};

export default ExperienceTimeline;
