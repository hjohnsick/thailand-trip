"use client";
import { Stack, List, ListItem, Typography } from '@mui/material'
import Image from 'next/image';
import floatingMarket from '../../public/images/floatingMarket.png';
import erawanMuseum from '../../public/images/erawanMuseum.png';
import grandPalace from '../../public/images/grandPalace.png';
import watSamphran from '../../public/images/watSamphran.png';
import watPlaiLaem from '../../public/images/watPlaiLaem.png';
import skyBar from '../../public/images/skyBar.png';
import silverBeach from '../../public/images/silverBeach.png';
import rocks from '../../public/images/rocks.png';
import styles from '../styles/styles.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Stack py={9} className={styles.layout}>
      <Typography variant="h1">Thailand Itinerary</Typography>
      <Typography variant='h2'>Ko Samui</Typography>
      <Typography variant='h3'>Day 1</Typography>
      <List>
        <ListItem>     
          <Link href="https://www.agoda.com/crystal-bay-beach-resort/hotel/koh-samui-th.html?finalPriceView=1&isShowMobileAppPrice=false&cid=1833981&numberOfBedrooms=&familyMode=false&adults=2&children=0&rooms=1&maxRooms=0&checkIn=2024-02-19&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=-1&showReviewSubmissionEntry=false&currencyCode=USD&isFreeOccSearch=false&isCityHaveAsq=true&los=3&searchrequestid=6e205c33-4bed-418a-9fbd-b2d81f3cc6db" target="_blank" rel="noreferrer noopener">
        <Image src={silverBeach} alt="Picture of silver beach." width={600} height={500}/>
        </Link>
        </ListItem>
        <ListItem>
          <Typography variant='body1'>Travel day.  Check into resort.  Relax.  Enjoy pool and beach.</Typography>
        </ListItem>
      </List>
      <Typography variant='h3'>Day 2</Typography>
      <List>
      <ListItem>
          <Typography variant='h4'>Wat Plai Laem</Typography>
        </ListItem>
        <Link href="https://kosamui.space/buddhism/wat-plai-laem.html" target="_blank" rel="noreferrer noopener">
        <Image src={watPlaiLaem} alt="Picture of budda statue." width={600} height={500}/>
        </Link>
        <ListItem>
          <Typography variant='body1'>Location: Road 4171, Bophut, Koh Samui, Surat Thani 84320, Thailand</Typography>
        </ListItem>
        <ListItem>
          <Typography variant='body1'>Hours: Sunrise to sunset.</Typography>
        </ListItem>
        <ListItem>
      </ListItem>
      <ListItem>
      <ListItem>
          <Typography variant='h4'>Hin Ta & Hin Yai Rocks</Typography>
          </ListItem>
          <ListItem>
          <Link href="https://charliepauly.com/hin-ta-hin-yai-rocks-koh-samui/" target="_blank" rel="noreferrer noopener">
        <Image src={rocks} alt="Picture of grandfather and grandmother rocks." width={600} height={500}/>
        </Link>
        </ListItem>
      </ListItem>
        <ListItem>
          <Typography variant='body1'>Relax.  Enjoy pool and beach.</Typography>
        </ListItem>
      </List>
      <Typography variant='h2'>Khao Sok</Typography>
      <Typography variant="h3">Day 4</Typography>
      <List className="khaoSok">
      <ListItem>
        <Typography variant="h4">Our Jungle House</Typography>
      </ListItem>
      </List>
      <Typography variant='h2'>Bangkok</Typography>
      <Typography variant='h3'>Day 1</Typography>
      <List className='grandPalace'>
      <ListItem>
        <Typography variant="h4">The Grand Palace</Typography>
      </ListItem>
      <ListItem>
        <Link href="https://www.royalgrandpalace.th/en/home" target="_blank" rel="noreferrer noopener">
        <Image src={grandPalace} alt="Picture of the Grand Palace." width={600} height={500}/>
        </Link>
      </ListItem>
      <ListItem>
      <Typography variant="body1">Phra Borom Maha Ratchawang, Phra Nakhon, Bangkok 10200, Thailand</Typography>
      </ListItem>
      <ListItem>
      <Typography variant="body1">Hours: Daily from 8:30am-3:30pm</Typography>
      </ListItem>
      </List>
      <List className="erawanMuseum">
      <ListItem>
        <Typography variant="h4">Erawan Museum</Typography>
      </ListItem>
      <ListItem>
        <Link href="https://www.erawanmuseum.com/en/#erawanmuseum" target="_blank" rel="noreferrer noopener">
        <Image src={erawanMuseum} alt="Picture of three headed elephant statue." width={600} height={500}/>
        </Link>
      </ListItem>
      <ListItem>
      <Typography variant="body1">Location: 99 Kanchanaphisek Rd, Bang Mueang Mai, Mueang Samut Prakan District, Samut Prakan 10270, Thailand</Typography>
      </ListItem>
      <ListItem>
      <Typography variant="body1">Hours: Daily from 9 am to 6 pm</Typography>
      </ListItem>
      </List>
      <List className="watSamphran">
      <ListItem>
        <Typography variant="h4">Wat Samphran</Typography>
      </ListItem>
      <ListItem>
        <Link href="https://www.thetravel.com/how-to-get-to-wat-samphran-dragon-temple-in-thailand/" target="_blank" rel="noreferrer noopener">
        <Image src={watSamphran} alt="Picture of pink skyscraper with dragon wrapped around it." width={600} height={500}/>
        </Link>
      </ListItem>
      <ListItem>
      <Typography variant="body1">92 Sam Phran, Sam Phran District, Nakhon Pathom 73110, Thailand</Typography>
      </ListItem>
      <ListItem>
      <Typography variant="body1">Hours: Daily from 9 am to 5:30 pm</Typography>
      </ListItem>
      </List>
      <Typography variant='h3'>Day 2</Typography>
      <List>
      <ListItem>
        <Typography variant="h4">Damnoen Saduak Floating Market</Typography>
      </ListItem>
      <ListItem>
        <Link href="https://preparetravelplans.com/damnoen-saduak-floating-market-guide/" target="_blank" rel="noreferrer noopener">
        <Image src={floatingMarket} alt="Picture of Damnoen Saduak Floating Market" width={600} height={500}/>
        </Link>
      </ListItem>
      <ListItem>
      <Typography variant="body1">Location: Damnoen Saduak, Ratchaburi 70130, Thailand</Typography>
      </ListItem>
      <ListItem>
      <Typography variant="body1">Hours: Daily from 7 am to 5 pm</Typography>
      </ListItem>
      </List>
      <List className="skyBar">
      <ListItem>
        <Typography variant="h4">Sky Bar</Typography>
      </ListItem>
      <ListItem>
        <Link href="https://lebua.com/restaurants/sky/" target="_blank" rel="noreferrer noopener">
        <Image src={skyBar} alt="Picture of roof top bar overlooking Bangkok." width={600} height={500}/>
        </Link>
      </ListItem>
      <ListItem>
      <Typography variant="body1">64th Floor, State Tower at The Dome, 1055 Si Lom, Silom, Bang Rak, Bangkok 10500, Thailand</Typography>
      </ListItem>
      <ListItem>
      <Typography variant="body1">Hours: Daily from 5pm to 12am</Typography>
      </ListItem>
      </List>
      </Stack>
      
    </main>
  )
}
