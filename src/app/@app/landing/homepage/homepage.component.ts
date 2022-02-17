import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { APIResponse, NewsList } from '@core/data/newsList';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { Subscription } from 'rxjs';
import { LandingService } from '../landing.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, OnDestroy {

  latestNews: Array<any> = [];
  newsFilterd: any;

  loader: boolean = false;
  disabled: boolean = false;
  config: SwiperConfigInterface = {
    a11y: true,
    slidesPerView: 4,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: false,
    spaceBetween: 30,
    observeParents: true,
    centeredSlides: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      1199: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  };

  
  $subs: Subscription[] = [];

  constructor(private _landingService: LandingService, private _router: Router) { }


  public onIndexChange(index: number): void {
    console.log('Swiper index: ', index);
  }

  public onSwiperEvent(event: string): void {
    console.log('Swiper event: ', event);
  }

  ngOnInit(): void {
    this.getNews();
  }

  // getLatestNews(): void {
  //   this.latestNews = [
  //     {
  //       "id": "1",
  //       "title": "A15 invests millions in Egypt’s R2S Logistics",
  //       "content": "A15 entrepreneurial company announced it has invested millions of pounds in the leading R2S Logistics in Egypt, thereby enabling further growth and expansion of the e-commerce delivery field in Egypt.\r\n\r\nThis investment is made for R2S Pre-Series A Round financing. R2S platform supports several e-commerce platforms through integrated logistical services including shipping, parcel delivery, receiving points, payment collection solutions, return and exchange management, warehouse management and fulfilment, as well as international shipping services to Egyptian merchants and startups.\r\n\r\nA15 said that R2S is adopting a distinct business model by becoming an Asset Light Business Model by expanding the geographical area of its services to cover all parts of the Republic through 11 shipping centres, in addition to more centres that will open soon.\r\n\r\nThe annual R2S transaction volume and income growth also witnessed a noticeable boom, as the numbers showed 125% and 150% growth in turnover and income respectively.\r\n\r\nR2S, an innovative e-commerce logistics company, recently launched the R2S Plus platform, which connects a network of stores to e-commerce sites, to give customers more control over their shipping and delivery experience by enabling them to choose the closest receiving location, the best timing, and the payment method that suits them to receive their parcel.\r\n\r\nAbout 30% of online orders fail to reach their owners the first time, so the R2S success rate in delivering shipments is exceptional as it reaches 93%, which encouraged users to make more orders again with 75% of all users.\r\n\r\nOn the other hand, R2S Plus retailers benefit from winning new or recurring customers as this increases the number of customers visiting their stores.\\n\\r\r\n\r\nR2S aims to expand its network of stores to 600 stores across the country before November 2020.\r\nEgypt and the Arab Gulf countries represent 80% of the volume of the e-commerce market in the MENA region, and this market continues to grow in sales by 30% annually and 100% in terms of packages shipped, which is twice the size of growth in the rest of the region.\\r\\n\r\n\r\nEgypt has become one of the fastest growing markets in the Middle East and North Africa, according to the latest report on e-commerce in the Middle East and North Africa issued by Google and Bain & Company.\r\n\r\nMahdi Al-Olabi, founder and CEO of R2S, said A15 has extensive experience in e-commerce, as they have invested in e-commerce companies before, along with their contribution to building, developing, establishing and exiting companies operating in the same field.\r\n\r\nHe added that the company will support our growth in our expansions that we aim to achieve by cooperating with more retail stores and e-commerce platforms in Egypt, which will enable us to perform more achievements and provide excellent services to a large customer base.",
  //       "published": "2/13/22",
  //       "urlToImage": "https://d1b3667xvzs6rz.cloudfront.net/2019/12/4-4-A15-6-565x430.jpg",
  //       "description": "A15 said that R2S is adopting a distinct business model by becoming an Asset Light Business Model by expanding the geographical area of its services to cover all parts of the Republic through 11 shipping centres, in addition to more centres that will open soon.",
  //       "showOnHomepage": "yes"
  //     },
  //     {
  //       "id": "2",
  //       "title": "Inflation Was Hottest in Atlanta, Mildest in San Francisco in 2021 - The Wall Street Journal",
  //       "content": "Consumer prices rose faster last year in large U.S. metropolitan areas seeing an influx of new residents than in the nation overall, while inflation was milder in large coastal cities with less population growth.\r\nThe Atlanta-Sandy Springs-Roswell area saw the highest inflation among metropolitan areas with more than 2.5 million people—9.8% for the 12 months through December, according to the Labor Department. Phoenix, St. Louis and Tampa also saw annual inflation rates higher than the 7% national rate in December.",
  //       "published": "2/13/22",
  //       "urlToImage": "https://images.wsj.net/im-482441/social",
  //       "description": "Covid-19 pandemic has spurred migration from coastal cities, pushing up prices in areas gaining residents",
  //       "showOnHomepage": "yes"
  //     },
  //     {
  //       "id": "3",
  //       "title": "All the ways to watch Super Bowl 2022",
  //       "content": "Super Bowl 56 will occur this Sunday between the Cincinnati Bengals and the Los Angeles Rams. NFL's biggest event of the year is a television phenomenon that goes beyond just sports, be it million-dollar-commercials, the half-time concert or just an excuse to chow down on chicken wings. It used to be that the only way to watch was to either have a cable or satellite subscription, or venture out to your local sports bar. Fortunately, you now have a plethora of viewing options, including ways to stream.\r\n\r\nWhere and when?\r\nSuper Bowl 2022 will take place at SoFi Stadium in Inglewood, California on February 13th. The kick-off time is set for 6:30pm ET / 3:30pm PT. It'll be televised on NBC as well as Telemundo in Spanish.\r\n\r\nHow to watch with cable or satellite TV\r\nObviously, if you subscribe to either cable or satellite, you'll have no problem watching the Super Bowl this Sunday on your TV. This is good news if you'd rather not bother with signing up for a service online, or if you have a spotty internet connection.\r\n\r\nHow to stream the Super Bowl\r\nCord-cutters have plenty of ways to watch the big game this Sunday. One of them is through a live TV streaming service, as long as it carries NBC. Thankfully, a lot of them do. YouTube TV ($65/month), Hulu with Live TV ($65/month), DirecTV Stream ($70-plus/month), Sling TV ($35-plus/month) and Fubo TV ($65-plus/month) all include NBC. If you don't currently subscribe to any of these services and want to watch the game for free, you can sign up to one for a seven-day free trial period just to watch the game, and then cancel afterward. The exception is DirecTV Stream, which doesn’t offer free trials.\r\n\r\nAlternatively, you can also watch the game through Peacock’s Premium ($5/month) or Premium Plus tier ($10/month). You can also catch it on the NBC Sports app and NBCSports.com, but only if you’re already a subscriber through other means. The aforementioned services and apps are available through your phone or streaming devices such as Roku, Fire TV, Apple TV or Google TV.\r\n\r\nIf you don't have pay-TV or a streaming service\r\nWhat if you don’t want to sign up for pay TV or a streaming service? Your options are unfortunately limited. You can either watch the game through the NFL Mobile app or the Yahoo Sports app. Of course, you could also use an indoor antenna with your TV to simply watch the free over-the-air broadcast.\r\n\r\nInternational viewers can use NFL's international game pass streaming service, which has a seven-day free trial. If you’d rather not go through that, however, check out this guide from the NFL to see if your country has a local Super Bowl broadcast partner.\r\n\r\nWhat about 4K?\r\nIn 2020, Fox made history by broadcasting the Super Bowl in 4K and HDR for the first time (it was still shot in 1080p and HDR, but was upscaled to 4K in the broadcast). However, that is not an option this year. A spokesperson for NBC said that “The game will not be in 4K.” It did not give an official reason why.",
  //       "published": "2/12/22",
  //       "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-02/56d700c0-66ef-11eb-bfff-9ccd01a681ac",
  //       "description": "Super Bowl 56 will occur this Sunday between the Cincinnati Bengals and the Los Angeles Rams. NFL's biggest event of the year is a television phenomenon that goes beyond just sports",
  //       "showOnHomepage": "no"
  //     },
  //     {
  //       "id": "4",
  //       "title": "Link Development Lands Three New Microsoft Advanced Specializations                    ",
  //       "content": "<strong>Delivering Certified Modern Work Communications and Security Solutions</strong>\r\nLink Development, the global technology solutions provider and an A15 Holding company, unveiled today it has recently earned additional three Microsoft advanced specializations:  Calling for Microsoft Teams, Microsoft Information Protection and Governance, and Microsoft Identity and Access Management. The new achievements underscore the technical competencies of the company and its certified teams in delivering bespoke, complex communications and security solutions.  \r\nThe Microsoft Calling in Teams advanced specializations proves the company’s expertise in deploying and managing complex Microsoft 365 Phone and Voice solutions. This includes network remediation, O365 service deployment, telephone number provisioning/porting, device deployment and more.\r\nThe Microsoft Identity and Access Management advanced specialization attests to the Link Development’ excellence in deploying Microsoft Identity workloads with Azure Active Directory to protect enterprises from threats to identity, data, apps, infrastructure, network, and endpoints and more.",
  //       "published": "2/12/22",
  //       "urlToImage": "https://linkdevelopment.com/app/uploads/2021/09/ThreeMSSpecializations_Newsroom.jpg",
  //       "showOnHomepage": "yes"
  //     },
  //     {
  //       "id": "5",
  //       "title": "Vizio's new 4K TVs start at $230",
  //       "content": "We got a peek at Vizio’s new 4K TVs at CES back in January, (Remember January? It was when we still went places and saw people) and now they’re closer to rolling out, complete with model numbers and prices. That includes the company’s first 4K OLED sets that promise a borderless aesthetic, and of course, the technology’s precision lighting control that provides deep blacks and excellent contrast.\r\n\r\nWhen the 65- and 55-inch OLEDs go on sale this fall they’ll cost $2,000 and $1,300, respectively. Compare that to LG’s BX series OLED that cost $2,200 and $1,500 in the same sizes, and you can see that a price war is coming... eventually.\r\nThose aren’t the only new sets Vizio has lined up either, and it’s promising to deliver 4K resolution, HDR support for multiple formats (Dolby Vision, HDR10+, HDR10 and HLG) as well as HDMI 2.1 inputs on the entire range. That goes from its top of the line $3,000 85-inch P-Series Quantum X all the way down to the 40-inch V-Series set that will sell for $230.\r\nAs shown in their diagram, the TVs have varying levels of brightness and local dimming zones. The P-Series Quantum X includes a bezel-less design and all of the P-Series TVs include an extra anti-reflective coating. For the midrange M-Series, Vizio said that its 65- and 55-inch MQ8 models will include twice as many dimming zones as last year’s TVs, and they will be available exclusively via Amazon for $750 and $550, respectively.\r\n\r\nTop of the line TVs (everything except for the V-Series) will include Vizio’s Pro Gaming Engine that has support for Variable Refresh Rate (VRR), AMD FreeSync and 4K/120Hz input. Even on the cheaper models, eARC is included, but they should all have you well prepared for the PS5 and Xbox Series X consoles to arrive this fall.\r\n\r\nThe V-Series TVs don’t specify an amount of LED backlighting, but for the price they’ll provide tough competition to value-oriented sets from the likes of TCL and Hisense. Once they hit shelves, a 40-inch model with 4K, HDR and HDMI 2.1 will cost $230, while the most expensive version is a planned 75-inch model for $800.",
  //       "published": "1/30/22",
  //       "urlToImage": "https://s.yimg.com/uu/api/res/1.2/Qnk0TiiWIVY_KWN5iKNPQA--~B/Zmk9ZmlsbDtoPTI4Njt3PTY3NTthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2020-07/2e5317f0-bb65-11ea-aebf-2783867c5aad.cf.webp",
  //       "description": "The two new OLED models will cost a bit more than that.",
  //       "showOnHomepage": "no"
  //     },
  //     {
  //       "id": "6",
  //       "title": "iFix raises investment from A15",
  //       "content": "Cairo-based on-demand mobile phone repair startup iFix has raised an undisclosed investment from A15, an Egyptian firm that invests in digital products and technology brands.\r\n\r\nEgyptian news publication Hapi Journal reported in an article yesterday that iFix will use the investment (which tech publication MenaBytes said in an article was a six-figure dollar sum) to launch an e-commerce platform for used mobile phones.\r\n\r\nThe startup was founded in 2015 by Omar Galal and Mohamed Fayez.\r\n\r\nHapi Journal said iFix has completed over 50 000 mobile phone repairs since it was launched.\r\n\r\nIt’s not clear when the deal was concluded, Ventureburn sought comment on this and other details of iFix’s operations from the startup but had not received a response at the time of publication.",
  //       "published": "12/11/21",
  //       "urlToImage": "https://cdn.wamda.com/feature-images/f186e5cfe12d429.jpg",
  //       "showOnHomepage": "no"
  //     },
  //     {
  //       "id": "7",
  //       "title": "A15 sells 76% stake in TPAY to Helios",
  //       "content": "A15, a leading tech investment fund based in the Cayman Islands, successfully sold 76 per cent stake in its UAE based fintech company TPAY Mobile FZ-LLC (TPAY), to Africa's leading private investment firm Helios Investment Partners (Helios). TPAY is the fastest growing direct carrier billing (DCB) provider in the Middle East and North Africa region.\r\nFollowing this transaction, A15 becomes the first fund in the Middle East and Africa which created a Dragon from one of its investments, TPAY. A Dragon is an investment that returns the entire value of the fund when exited. In this case, TPAY returned a multiple of the value of the entire A15 Fund to its investors, a liquidity event that is very rare in the global tech investment space and a first of its kind in the Mena region.\r\nThis Mena's First Dragon exit is the second major exit for A15 in three years after the sale of Otlob, one of the leading regional online food delivery businesses, to Rocket Internet.\r\nFollowing the acquisition by Helios Investment Partners, A15 and the current executive team will continue to lead the implementation of TPAY's growth strategy, with guidance from the new owners, and both will remain invested in a total of 24 per cent of the company.\r\nEstablished in 2014, TPAY was the first open mobile payment platform to be launched in the region and, today, commands the largest market share at 80 per cent in the DCB space, also known as Direct Operator Billing, across 16 countries, with a total reach of 673 million users.\r\nThe number of active digital content subscriptions set-up through TPAY's platform grew at a compound annual growth rate (CAGR) of 149 per cent since 2015. The company processed 622 million successful transactions since its launch. Through its partnerships with 33 leading mobile operators, the number of successful transaction processed by TPAY grew at a CAGR of 1,081 per cent since its launch. The company was able to build strategic partnerships with key regional and international players such as GooglePlay, Wargaming, NetDragon, CrossFire, Gameloft, OLX, Opensouq, MBC, iFlix, Abu Dhabi Media and Dubai Channels Network, amongst others.\r\nThe global DCB industry is expected to register a CAGR of 23 per cent during the 2018-2022 period, according to the latest market research report by Juniper Research. TPAY achieved a year-on-year growth in Gross Revenue and EBITDA of 64 per cent and 162 per cent, respectively, well above the global DCB industry.\r\nKarim Beshara, chairman of A15, said: \"I would like to congratulate CEO Sahar Salama and her team for this significant milestone for the startup ecosystem as well as for TPAY, and to welcome our new partners, Helios. Creating a Dragon in our fund is ground-breaking for the region. TPAY is a company that became a fund-maker owing to the unique approach in which A15 manages its portfolio companies. The remarkable achievement of TPAY is the result of a success-focused team that shares knowledge, drives business, and delivers results, both at a fund level and at a portfolio company level. The DCB market fundamentals are very promising, and we strongly believe that with such a capable and experienced partner like Helios, TPAY is well-positioned to unlock its utmost potential. I am looking forward to continuing our work with Sahar and her exceptional team as well as with Helios to take TPAY to the next level of growth globally.\"\r\nDCB is expected to generate $26 billion in End User Spend (EUS) in 2018 globally, and is predicted to grow to U$59 billion by 2022 according to Juniper Research, marking a 23 per cent CAGR.\r\nBabatunde Soyoye, co-founder and managing partner of Helios Investment Partners, said: \"TPAY's business model leverages best-in-class technology and offers a high quality service to its partners; the company's ability to develop strategic partnerships with key global merchants seeking an entry point into the Middle East and Africa speaks to the quality of the company's offering and the management team. This is an exciting addition to the Helios' payments franchise in Africa, and we look forward to working with the management team to achieve the next phase of innovation and growth for the Company.\"\r\nWith an estimated 86 per cent of adults who do not have a bank account in the Mena region according to Payfort and Wamda, mobile payments and DCB become key to buying digital and physical goods online. Mena is forecast to see the second fastest growth in smartphone adoption of any region over the next few years bringing smartphone adoption to 65 per cent by 2020 as per the Global System for Mobile Communications Association (GSMA) report.",
  //       "published": "12/1/21",
  //       "urlToImage": "https://image.khaleejtimes.com/?uuid=20b76ed4-3129-4597-af56-1a5aa56fe545&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.84375&x=0&y=0&width=1500&height=844",
  //       "description": "Dubai - Sale of regional Fintech Startup returns a multiple of the value of the entire A15 FundAnnual growth of 64% outperforms the global annual market growth of 23%",
  //       "showOnHomepage": "yes"
  //     },
  //     {
  //       "id": "8",
  //       "title": "Spotify is launching a premium plan for couples",
  //       "content": "Spotify is making it easier for couples who live together to split the cost of a premium membership while also merging their music taste. The company is debuting its newest subscription offering, Premium Duo, which costs $12.99 a month and allows two people who live at the same place to share one plan while maintaining their own accounts.\r\n\r\nWith Premium Duo, Spotify will also create a special Duo Mix playlist that’ll update regularly and incorporate music that both people like. The idea is that Spotify knows what you and your partner like individually, so its software will design a playlist that you can put on in the house that’ll appeal to both of you. Listeners can switch between a chill or upbeat playlist.\r\n\r\nExisting, single Premium members can upgrade to Premium Duo at any time and doing so won’t erase their account listening history or preferences. A Family plan membership is $2 more than Duo and supports up to six accounts. That plan also comes with a special Family Mix playlist that promises the same thing as the Duo Mix, except it accounts for the entire family’s preferences. A single Premium membership costs $9.99.\r\nSpotify is clearly trying to design a premium plan for everyone and every stage of life. It offers student discounts, a kids app that’s available through the family plan, and now, a plan for couples. Recurring subscription revenue is especially important to Spotify during the COVID-19 pandemic because advertisers are tightening their budgets. The company said in its most recent earnings report that its ad-supported revenues fell short of its forecast, and it lowered its revenue guidance for the year as a result.\r\n\r\nAs such, it’s attempted to make Premium a more enticing option through features available only to subscribers. Premium users can share DJ duties with anyone in their immediate vicinity and hide songs from playlists, for example. In the past, it also offered free Hulu and a Google Home Mini to Premium members. With more plans and more features, Spotify is hoping everyone will eventually become a Premium subscriber.",
  //       "published": "2/14/22",
  //       "urlToImage": "https://cdn.vox-cdn.com/thumbor/lee2hRuUZ5tC2kb4aUM5uP4eNjM=/0x0:2304x1536/920x613/filters:focal(968x584:1336x952):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/67004080/spotify_premium_duo.0.jpg",
  //       "description": "Premium Duo costs $12.99 a month",
  //       "showOnHomepage": "yes"
  //     },
  //     {
  //       "id": "6",
  //       "title": "iFix raises investment from A15",
  //       "content": "Cairo-based on-demand mobile phone repair startup iFix has raised an undisclosed investment from A15, an Egyptian firm that invests in digital products and technology brands.\r\n\r\nEgyptian news publication Hapi Journal reported in an article yesterday that iFix will use the investment (which tech publication MenaBytes said in an article was a six-figure dollar sum) to launch an e-commerce platform for used mobile phones.\r\n\r\nThe startup was founded in 2015 by Omar Galal and Mohamed Fayez.\r\n\r\nHapi Journal said iFix has completed over 50 000 mobile phone repairs since it was launched.\r\n\r\nIt’s not clear when the deal was concluded, Ventureburn sought comment on this and other details of iFix’s operations from the startup but had not received a response at the time of publication.",
  //       "published": "12/11/21",
  //       "urlToImage": "https://cdn.wamda.com/feature-images/f186e5cfe12d429.jpg",
  //       "showOnHomepage": "no"
  //     },
  //     {
  //       "id": "7",
  //       "title": "A15 sells 76% stake in TPAY to Helios",
  //       "content": "A15, a leading tech investment fund based in the Cayman Islands, successfully sold 76 per cent stake in its UAE based fintech company TPAY Mobile FZ-LLC (TPAY), to Africa's leading private investment firm Helios Investment Partners (Helios). TPAY is the fastest growing direct carrier billing (DCB) provider in the Middle East and North Africa region.\r\nFollowing this transaction, A15 becomes the first fund in the Middle East and Africa which created a Dragon from one of its investments, TPAY. A Dragon is an investment that returns the entire value of the fund when exited. In this case, TPAY returned a multiple of the value of the entire A15 Fund to its investors, a liquidity event that is very rare in the global tech investment space and a first of its kind in the Mena region.\r\nThis Mena's First Dragon exit is the second major exit for A15 in three years after the sale of Otlob, one of the leading regional online food delivery businesses, to Rocket Internet.\r\nFollowing the acquisition by Helios Investment Partners, A15 and the current executive team will continue to lead the implementation of TPAY's growth strategy, with guidance from the new owners, and both will remain invested in a total of 24 per cent of the company.\r\nEstablished in 2014, TPAY was the first open mobile payment platform to be launched in the region and, today, commands the largest market share at 80 per cent in the DCB space, also known as Direct Operator Billing, across 16 countries, with a total reach of 673 million users.\r\nThe number of active digital content subscriptions set-up through TPAY's platform grew at a compound annual growth rate (CAGR) of 149 per cent since 2015. The company processed 622 million successful transactions since its launch. Through its partnerships with 33 leading mobile operators, the number of successful transaction processed by TPAY grew at a CAGR of 1,081 per cent since its launch. The company was able to build strategic partnerships with key regional and international players such as GooglePlay, Wargaming, NetDragon, CrossFire, Gameloft, OLX, Opensouq, MBC, iFlix, Abu Dhabi Media and Dubai Channels Network, amongst others.\r\nThe global DCB industry is expected to register a CAGR of 23 per cent during the 2018-2022 period, according to the latest market research report by Juniper Research. TPAY achieved a year-on-year growth in Gross Revenue and EBITDA of 64 per cent and 162 per cent, respectively, well above the global DCB industry.\r\nKarim Beshara, chairman of A15, said: \"I would like to congratulate CEO Sahar Salama and her team for this significant milestone for the startup ecosystem as well as for TPAY, and to welcome our new partners, Helios. Creating a Dragon in our fund is ground-breaking for the region. TPAY is a company that became a fund-maker owing to the unique approach in which A15 manages its portfolio companies. The remarkable achievement of TPAY is the result of a success-focused team that shares knowledge, drives business, and delivers results, both at a fund level and at a portfolio company level. The DCB market fundamentals are very promising, and we strongly believe that with such a capable and experienced partner like Helios, TPAY is well-positioned to unlock its utmost potential. I am looking forward to continuing our work with Sahar and her exceptional team as well as with Helios to take TPAY to the next level of growth globally.\"\r\nDCB is expected to generate $26 billion in End User Spend (EUS) in 2018 globally, and is predicted to grow to U$59 billion by 2022 according to Juniper Research, marking a 23 per cent CAGR.\r\nBabatunde Soyoye, co-founder and managing partner of Helios Investment Partners, said: \"TPAY's business model leverages best-in-class technology and offers a high quality service to its partners; the company's ability to develop strategic partnerships with key global merchants seeking an entry point into the Middle East and Africa speaks to the quality of the company's offering and the management team. This is an exciting addition to the Helios' payments franchise in Africa, and we look forward to working with the management team to achieve the next phase of innovation and growth for the Company.\"\r\nWith an estimated 86 per cent of adults who do not have a bank account in the Mena region according to Payfort and Wamda, mobile payments and DCB become key to buying digital and physical goods online. Mena is forecast to see the second fastest growth in smartphone adoption of any region over the next few years bringing smartphone adoption to 65 per cent by 2020 as per the Global System for Mobile Communications Association (GSMA) report.",
  //       "published": "12/1/21",
  //       "urlToImage": "https://image.khaleejtimes.com/?uuid=20b76ed4-3129-4597-af56-1a5aa56fe545&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.84375&x=0&y=0&width=1500&height=844",
  //       "description": "Dubai - Sale of regional Fintech Startup returns a multiple of the value of the entire A15 FundAnnual growth of 64% outperforms the global annual market growth of 23%",
  //       "showOnHomepage": "yes"
  //     },
  //     {
  //       "id": "8",
  //       "title": "Spotify is launching a premium plan for couples",
  //       "content": "Spotify is making it easier for couples who live together to split the cost of a premium membership while also merging their music taste. The company is debuting its newest subscription offering, Premium Duo, which costs $12.99 a month and allows two people who live at the same place to share one plan while maintaining their own accounts.\r\n\r\nWith Premium Duo, Spotify will also create a special Duo Mix playlist that’ll update regularly and incorporate music that both people like. The idea is that Spotify knows what you and your partner like individually, so its software will design a playlist that you can put on in the house that’ll appeal to both of you. Listeners can switch between a chill or upbeat playlist.\r\n\r\nExisting, single Premium members can upgrade to Premium Duo at any time and doing so won’t erase their account listening history or preferences. A Family plan membership is $2 more than Duo and supports up to six accounts. That plan also comes with a special Family Mix playlist that promises the same thing as the Duo Mix, except it accounts for the entire family’s preferences. A single Premium membership costs $9.99.\r\nSpotify is clearly trying to design a premium plan for everyone and every stage of life. It offers student discounts, a kids app that’s available through the family plan, and now, a plan for couples. Recurring subscription revenue is especially important to Spotify during the COVID-19 pandemic because advertisers are tightening their budgets. The company said in its most recent earnings report that its ad-supported revenues fell short of its forecast, and it lowered its revenue guidance for the year as a result.\r\n\r\nAs such, it’s attempted to make Premium a more enticing option through features available only to subscribers. Premium users can share DJ duties with anyone in their immediate vicinity and hide songs from playlists, for example. In the past, it also offered free Hulu and a Google Home Mini to Premium members. With more plans and more features, Spotify is hoping everyone will eventually become a Premium subscriber.",
  //       "published": "2/14/22",
  //       "urlToImage": "https://cdn.vox-cdn.com/thumbor/lee2hRuUZ5tC2kb4aUM5uP4eNjM=/0x0:2304x1536/920x613/filters:focal(968x584:1336x952):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/67004080/spotify_premium_duo.0.jpg",
  //       "description": "Premium Duo costs $12.99 a month",
  //       "showOnHomepage": "yes"
  //     },
  //     {
  //       "id": "6",
  //       "title": "iFix raises investment from A15",
  //       "content": "Cairo-based on-demand mobile phone repair startup iFix has raised an undisclosed investment from A15, an Egyptian firm that invests in digital products and technology brands.\r\n\r\nEgyptian news publication Hapi Journal reported in an article yesterday that iFix will use the investment (which tech publication MenaBytes said in an article was a six-figure dollar sum) to launch an e-commerce platform for used mobile phones.\r\n\r\nThe startup was founded in 2015 by Omar Galal and Mohamed Fayez.\r\n\r\nHapi Journal said iFix has completed over 50 000 mobile phone repairs since it was launched.\r\n\r\nIt’s not clear when the deal was concluded, Ventureburn sought comment on this and other details of iFix’s operations from the startup but had not received a response at the time of publication.",
  //       "published": "12/11/21",
  //       "urlToImage": "https://cdn.wamda.com/feature-images/f186e5cfe12d429.jpg",
  //       "showOnHomepage": "no"
  //     },
  //     {
  //       "id": "7",
  //       "title": "A15 sells 76% stake in TPAY to Helios",
  //       "content": "A15, a leading tech investment fund based in the Cayman Islands, successfully sold 76 per cent stake in its UAE based fintech company TPAY Mobile FZ-LLC (TPAY), to Africa's leading private investment firm Helios Investment Partners (Helios). TPAY is the fastest growing direct carrier billing (DCB) provider in the Middle East and North Africa region.\r\nFollowing this transaction, A15 becomes the first fund in the Middle East and Africa which created a Dragon from one of its investments, TPAY. A Dragon is an investment that returns the entire value of the fund when exited. In this case, TPAY returned a multiple of the value of the entire A15 Fund to its investors, a liquidity event that is very rare in the global tech investment space and a first of its kind in the Mena region.\r\nThis Mena's First Dragon exit is the second major exit for A15 in three years after the sale of Otlob, one of the leading regional online food delivery businesses, to Rocket Internet.\r\nFollowing the acquisition by Helios Investment Partners, A15 and the current executive team will continue to lead the implementation of TPAY's growth strategy, with guidance from the new owners, and both will remain invested in a total of 24 per cent of the company.\r\nEstablished in 2014, TPAY was the first open mobile payment platform to be launched in the region and, today, commands the largest market share at 80 per cent in the DCB space, also known as Direct Operator Billing, across 16 countries, with a total reach of 673 million users.\r\nThe number of active digital content subscriptions set-up through TPAY's platform grew at a compound annual growth rate (CAGR) of 149 per cent since 2015. The company processed 622 million successful transactions since its launch. Through its partnerships with 33 leading mobile operators, the number of successful transaction processed by TPAY grew at a CAGR of 1,081 per cent since its launch. The company was able to build strategic partnerships with key regional and international players such as GooglePlay, Wargaming, NetDragon, CrossFire, Gameloft, OLX, Opensouq, MBC, iFlix, Abu Dhabi Media and Dubai Channels Network, amongst others.\r\nThe global DCB industry is expected to register a CAGR of 23 per cent during the 2018-2022 period, according to the latest market research report by Juniper Research. TPAY achieved a year-on-year growth in Gross Revenue and EBITDA of 64 per cent and 162 per cent, respectively, well above the global DCB industry.\r\nKarim Beshara, chairman of A15, said: \"I would like to congratulate CEO Sahar Salama and her team for this significant milestone for the startup ecosystem as well as for TPAY, and to welcome our new partners, Helios. Creating a Dragon in our fund is ground-breaking for the region. TPAY is a company that became a fund-maker owing to the unique approach in which A15 manages its portfolio companies. The remarkable achievement of TPAY is the result of a success-focused team that shares knowledge, drives business, and delivers results, both at a fund level and at a portfolio company level. The DCB market fundamentals are very promising, and we strongly believe that with such a capable and experienced partner like Helios, TPAY is well-positioned to unlock its utmost potential. I am looking forward to continuing our work with Sahar and her exceptional team as well as with Helios to take TPAY to the next level of growth globally.\"\r\nDCB is expected to generate $26 billion in End User Spend (EUS) in 2018 globally, and is predicted to grow to U$59 billion by 2022 according to Juniper Research, marking a 23 per cent CAGR.\r\nBabatunde Soyoye, co-founder and managing partner of Helios Investment Partners, said: \"TPAY's business model leverages best-in-class technology and offers a high quality service to its partners; the company's ability to develop strategic partnerships with key global merchants seeking an entry point into the Middle East and Africa speaks to the quality of the company's offering and the management team. This is an exciting addition to the Helios' payments franchise in Africa, and we look forward to working with the management team to achieve the next phase of innovation and growth for the Company.\"\r\nWith an estimated 86 per cent of adults who do not have a bank account in the Mena region according to Payfort and Wamda, mobile payments and DCB become key to buying digital and physical goods online. Mena is forecast to see the second fastest growth in smartphone adoption of any region over the next few years bringing smartphone adoption to 65 per cent by 2020 as per the Global System for Mobile Communications Association (GSMA) report.",
  //       "published": "12/1/21",
  //       "urlToImage": "https://image.khaleejtimes.com/?uuid=20b76ed4-3129-4597-af56-1a5aa56fe545&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.84375&x=0&y=0&width=1500&height=844",
  //       "description": "Dubai - Sale of regional Fintech Startup returns a multiple of the value of the entire A15 FundAnnual growth of 64% outperforms the global annual market growth of 23%",
  //       "showOnHomepage": "yes"
  //     },
  //     {
  //       "id": "8",
  //       "title": "Spotify is launching a premium plan for couples",
  //       "content": "Spotify is making it easier for couples who live together to split the cost of a premium membership while also merging their music taste. The company is debuting its newest subscription offering, Premium Duo, which costs $12.99 a month and allows two people who live at the same place to share one plan while maintaining their own accounts.\r\n\r\nWith Premium Duo, Spotify will also create a special Duo Mix playlist that’ll update regularly and incorporate music that both people like. The idea is that Spotify knows what you and your partner like individually, so its software will design a playlist that you can put on in the house that’ll appeal to both of you. Listeners can switch between a chill or upbeat playlist.\r\n\r\nExisting, single Premium members can upgrade to Premium Duo at any time and doing so won’t erase their account listening history or preferences. A Family plan membership is $2 more than Duo and supports up to six accounts. That plan also comes with a special Family Mix playlist that promises the same thing as the Duo Mix, except it accounts for the entire family’s preferences. A single Premium membership costs $9.99.\r\nSpotify is clearly trying to design a premium plan for everyone and every stage of life. It offers student discounts, a kids app that’s available through the family plan, and now, a plan for couples. Recurring subscription revenue is especially important to Spotify during the COVID-19 pandemic because advertisers are tightening their budgets. The company said in its most recent earnings report that its ad-supported revenues fell short of its forecast, and it lowered its revenue guidance for the year as a result.\r\n\r\nAs such, it’s attempted to make Premium a more enticing option through features available only to subscribers. Premium users can share DJ duties with anyone in their immediate vicinity and hide songs from playlists, for example. In the past, it also offered free Hulu and a Google Home Mini to Premium members. With more plans and more features, Spotify is hoping everyone will eventually become a Premium subscriber.",
  //       "published": "2/14/22",
  //       "urlToImage": "https://cdn.vox-cdn.com/thumbor/lee2hRuUZ5tC2kb4aUM5uP4eNjM=/0x0:2304x1536/920x613/filters:focal(968x584:1336x952):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/67004080/spotify_premium_duo.0.jpg",
  //       "description": "Premium Duo costs $12.99 a month",
  //       "showOnHomepage": "yes"
  //     }
  //   ];
  

  // }

  getNews(): void {
    this.loader = true;
    const sub = this._landingService.getNewsList().subscribe((newsList: APIResponse<NewsList>) => {

      this.latestNews = newsList.News.filter((el) => el.showOnHomepage === 'yes');

      this.loader = false;
    }, err => {
      this.loader = false;
    });
    this.$subs.push(sub)
  }

  gotToNewsList(): void {
    this._router.navigate([`/news-list`])
  }

  ngOnDestroy() {
    this.$subs.forEach(sub => sub.unsubscribe());
  }
  
}
