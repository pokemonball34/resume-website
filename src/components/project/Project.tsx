import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

type Props = {
    title: string;
    content: string;
    link: string;
    image: string;
};

const Project = (props: Props) => {
    const { title, content, link, image } = props;
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea onClick={() => window.open(link, '_blank')}>
                <CardMedia
                    component='img'
                    height='140'
                    image={image}
                    alt={title}
                />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                        {title}
                    </Typography>
                    <Typography
                        variant='body2'
                        sx={{ color: 'text.secondary' }}
                    >
                        {content}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default Project;
