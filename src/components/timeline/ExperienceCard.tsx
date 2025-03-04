import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

type Props = {
    title: string;
    timePeriod: string;
    content: string;
    skills: string;
};

const ExperienceCard = (props: Props) => {
    const { title, content, timePeriod, skills } = props;

    return (
        <Card sx={{ minWidth: 275, m: 2 }}>
            <CardContent sx={{ textAlign: 'left' }}>
                <Typography variant='h5' component='div'>
                    {title}
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
                    {timePeriod}
                </Typography>
                <Typography variant='body2' sx={{ mb: 1.5 }}>
                    {content}
                </Typography>
                <Typography variant='h6' component='div'>
                    Skills
                </Typography>
                <Typography variant='body2'>{skills}</Typography>
            </CardContent>
        </Card>
    );
};

export default ExperienceCard;
