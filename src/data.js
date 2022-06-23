/* eslint-disable import/no-anonymous-default-export */
import img4 from './assets/img/computers.jpg'
import img5 from './assets/img/consulting-services-01.jpg'
import img6 from './assets/img/customized-solutions-01.jpg'
// import img7 from './assets/img/gas-producer.jpg'
// import img8 from './assets/img/customer-support-02.jpg'
import img9 from './assets/img/rig1.jpg'
import img12 from './assets/img/customized-solutions-02.jpg'
import img13 from './assets/img/lngTanker.jpg'
import img14 from './assets/img/DataIntegration.jpg'

//Import News Articles:
import A1 from './components/NewsCards/A1'
import A2 from './components/NewsCards/A2'
import A3 from './components/NewsCards/A3'
import A4 from './components/NewsCards/A4'
import A5 from './components/NewsCards/A5'
import A6 from './components/NewsCards/A6'
import A7 from './components/NewsCards/A7'
//Data to place inside the cards:

const ArticleData = [{

    // New card:
    id: 'a1',
    title: 'ENSYTE Enhances Producer Services Solution',
    date: "5/19/2022",
    image: img9,
    article: <A1 />
},
{

    id: "a2",
    title: `ENSYTE Adds a Liquids Storage Module to GASTAR for NGL & LNG Product Management`,
    date: "6/9/2022",
    image: img13,
    article: <A2 />
    ,
},
{

    id: "a3",
    title: `ENSYTE Enriches GASTAR User Interface and Dashboards`,
    date: "",
    image: img12,
    article: <A3 />
},
{
    id: "a4",
    title: `ENSYTE Delivers GASTAR for Largest Natural Gas Utility in New Jersey`,
    date: "",
    image: img4,
    article: <A4 />,
},
{

    id: "a5",
    title: `ENSYTE Wins Project with a Large Natural Gas Utility`,
    date: "",
    image: img5,
    article: <A5 />
},
{

    id: "a6",
    title: `GASTAR Sets New Standard in Data Integrity & Management`,
    date: "6/21/2022",
    image: img14,
    article: <A6 />


},
{

    id: "a7",
    title: `ENSYTE Enhances Producer Services Solution`,
    date: "6/10/2022",
    image: img6,
    article: <A7 />
}];





export default ArticleData
