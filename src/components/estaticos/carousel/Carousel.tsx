import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Grid } from '@mui/material';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Carousel(props)
 {

    const troca = props.trocar;

    const desenvolvedores = [
        {
            nome: "Brian Schneider",
            img: "https://github.com/Brian-Schneider.png",
            frase: "Lorem ipsum, dolor sit amet consectetur adipisicing",
            linkedIn: "https://www.linkedin.com/in/brian-slima/",
            gitHub: "https://github.com/Brian-Schneider"
        },
        {
            nome: "Elizangela Xavier",
            img: "https://github.com/ElizangelaXavierS.png",
            frase: "Lorem ipsum, dolor sit amet consectetur adipisicing",
            linkedIn: "https://www.linkedin.com/in/elizangelaxavier/",
            gitHub: "https://github.com/ElizangelaXavierS"
        },
        {
            nome: "Rafael Gouvea",
            img: "https://github.com/RafaelGG1.png",
            frase: "Lorem ipsum, dolor sit amet consectetur adipisicing",
            linkedIn: "https://www.linkedin.com/in/rafael-gouvea/",
            gitHub: "https://github.com/RafaelGG1"
        },
        {
            nome: "Samuel Cavelho",
            img: "https://github.com/samuelnovaiscavelho.png",
            frase: "Lorem ipsum, dolor sit amet consectetur adipisicing",
            linkedIn: "https://www.linkedin.com/in/samuel-cavelho/",
            gitHub: "https://github.com/samuelnovaiscavelho"
        },
        {
            nome: "Thayane Almeida",
            img: "https://github.com/ThayaneAlmeida.png",
            frase: "Lorem ipsum, dolor sit amet consectetur adipisicing",
            linkedIn: "http://linkedin.com/in/thayane-almeida/",
            gitHub: "https://github.com/ThayaneAlmeida"
        },
        {
            nome: "Vinicius Prazeres",
            img: "https://github.com/viniciusaprazeres.png",
            frase: "Lorem ipsum, dolor sit amet consectetur adipisicing",
            linkedIn: "https://www.linkedin.com/in/viniciusaprazeres/",
            gitHub: "https://github.com/viniciusaprazeres"
        },
        {
            nome: "Yasmin Cozaciuc",
            img: "https://github.com/YasminCozaciuc.png",
            frase: "Lorem ipsum, dolor sit amet consectetur adipisicing",
            linkedIn: "https://www.linkedin.com/in/yasmincozaciuc/",
            gitHub: "https://github.com/YasminCozaciuc"
        }
    ]

    const items = 
        desenvolvedores.map((desenvolvedor) => (
            <Card sx={{ maxWidth: 250}} style={{marginLeft: "auto", marginRight: "auto", borderRadius: "10px", backgroundColor:"pink"}}>
            <CardHeader         
                title={desenvolvedor.nome}
            />
            <CardMedia
                component="img"
                height="250"
                image={desenvolvedor.img}
                alt={desenvolvedor.nome}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {desenvolvedor.frase}                    
                </Typography>
            </CardContent>
            <CardContent>
                <Box display={"flex"} alignContent={"center"} justifyContent={"center"} gap={"10px"}>
                    <a href={desenvolvedor.linkedIn} target="_blank">
                        <LinkedInIcon style={{fontSize: "40px"}}/>
                    </a>
                    <a href={desenvolvedor.gitHub} target="_blank">
                        <GitHubIcon style={{fontSize: "40px"}}/>
                    </a>
                </Box>
            </CardContent>
        </Card>
        ))      




    const responsivo = {
        0: {
            items: 1,
        },
        768: {
            items: 2,
            itemsFit: 'contain',
        },
        1024: {
            items: 3,
            itemsFit: 'contain',
        }
    }

    return (
        <>
        {troca === false ? <AliceCarousel
            mouseTracking
            items={items}
            infinite
            autoPlay
            responsive={responsivo}
            disableDotsControls={true}
            disableButtonsControls={true}
            autoPlayInterval={3000} /> :
            <Grid container direction='row' justifyContent='center' alignItems='center' marginTop={"-40px"}>
                {items.map((item) => (
                    <Grid item xs={4} justifyContent='center' alignItems='center' paddingBottom={5}>
                        {item}
                    </Grid>
                ))}
            </Grid>
        }
         </>

    )
}

export default Carousel