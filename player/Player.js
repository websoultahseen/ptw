import react from 'react';
import './Player.css';
import Gem from '../../../assets/images/playersupportheardericon_b.png'
import video from '../../../assets/images/playersupport.mp4'
import {Grid,Button,Typography, Container} from '@mui/material';
import img1 from '../../../assets/images/anyplatform.png'
import img2 from '../../../assets/images/anylanguage.png'
import img3 from '../../../assets/images/anycomplexitylevel.png'
function Player() {
    return(
        <div>
            <div className='section-1'>
            <div className='video'>
            <video autoPlay muted playsInline loop src={video}></video>
            </div>
            <div className='icon-1'>
                <img className='diamond' src={Gem} alt="" />
                <div  className='Heading-1'>
                    <p className='head-1'>PLAYER SUPPORT</p>
                    <p className='head-2'>HELPING PLAYERS LEVEL UP SINCE 1995</p>

                </div>
            </div>
            </div>
            <div className='section-2'>
                <Container>

                <h1  className='player-text'>PLAYER SUPPORT ON A TRULY GLOBAL SCALE</h1>
                <p>We’ve been designing and delivering outstanding support for some of biggest names in the gaming industry for over 25 years</p>
                </Container>
            </div>
            
                
            <Grid container mt={2} spacing={7} className='pad'>
                <Grid item  xs={12} md={4}>
                    <img src={img1} alt="" />
                    <p className='wrap-title'>Support From Anywhere</p>
                   <p className='para-style'> <b> Our global reach and cloud-based infrastructure </b> means we can deliver support services from any of our <b>35 studio locations,</b>  or through our <b> Work From Anywhere </b>model. We provide our clients with support services to cater for any requirement.</p>
                   
                </Grid>
              

                <Grid item xs={12} md={4} className='red'>
                   <img style={{textAlign:"right"}} src={img2} alt="" />
                   <p className='wrap-title'>In Any Language</p>
                <p className='para-style'>  <b> Our extensive network and years of experience in localization </b> means we can have unique access to a broad range of native speakers in most of the commonly required languages. We can quickly source any language our clients may need.</p>

                </Grid>
                
                <Grid item xs={12} md={4} className='red'>
                 <img src={img3} alt="" />
                 <p className='wrap-title'>Through Any Channel</p>    
                <p className='para-style'> <b>  The application of technology is key in delivering efficient, scalable services.</b> Our specialist team has experience working with a range of partners in designing, developing and integrating technical solutions to meet our clients’ needs.</p>

                </Grid>
            
              
            </Grid>
        </div>

        

)
}
export default Player