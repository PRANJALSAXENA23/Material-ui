
import { Container,Grid, ThemeProvider, createMuiTheme } from '@mui/material';
import './App.css';
import Header from './components/Header';
import FeaturedPost from './components/FeaturedPost';
import { featuredPosts,sidebar} from './Data/Data';
import PostCard from './components/PostCard';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';


// import DeleteIcon from '@mui/icons-material/Delete';
// import SendIcon from '@mui/icons-material/Send';

function App() {
      const darkTheme=createMuiTheme({
        palette:{
          type:"dark",
        },
      })

  return (
    <ThemeProvider theme={darkTheme}>

<Container>
        <Header/>
        <FeaturedPost/>
        <br/>
        
        <Grid container spacing={4}>
              {
               
                featuredPosts.map((post)=>(
                      <PostCard post={post} key={post.title}/>
                ))}
              
        </Grid>
        <Grid container spacing={5} style={{marginTop:"30px"}}>

                  <Main title='from the Firehose'/>
                  <Sidebar 
                  title={sidebar.title}
                  description={sidebar.description}
                  archives={sidebar.archives}
                  social={sidebar.social}
                  />

        </Grid>
        </Container>
        <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
        </ThemeProvider>
       
  );
}

export default App;
