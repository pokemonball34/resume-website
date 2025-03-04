import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

type Props = {
    title: string;
    content: string;
    image: string;
};

const NoLinkProject = (props: Props) => {
    const { title, content, image } = props;
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia component='img' height='140' image={image} alt={title} />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    {title}
                </Typography>
                <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                    {content}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default NoLinkProject;
