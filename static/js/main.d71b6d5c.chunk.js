(this["webpackJsonpcommuter-calculator"]=this["webpackJsonpcommuter-calculator"]||[]).push([[0],{140:function(t,a,i){},161:function(t,a,i){},163:function(t,a,i){},164:function(t,a,i){},165:function(t,a,i){},166:function(t,a,i){},167:function(t,a,i){},168:function(t,a,i){"use strict";i.r(a);var n=i(1),o=i.n(n),e=i(22),l=i.n(e),r=(i(68),i(69),i(8)),S=i(9),R=i(11),s=i(10),d=i(5),c=i(2),u=i(62),h=i.n(u),m=(i(140),Object(c.n)({myList:[]})),y=Object(c.n)({show:!1,homeLocation:"",nearestDestinationStation:"",nearestHomeStation:"",journeyData:{},trainTravelTime:"",trainTravelCost:0,lowerValue:!1,higherValue:!1,lowerCost:!1,higherCost:!1,homeFareZone:0,destinationFareZone:1}),g=i(6),b=i.n(g),C=i(12),p=Object(c.n)({loading:!1,show:!1,showDropDown:!1,dailyTravelSpend:0,dailyTravelTime:0,destinationPostCode:"",destinationDetails:{},destinationCoords:{longitude:"",latitude:""},nearestDestinationStations:[],homePostCode:"",homeDetails:{},homeCoords:{longitude:"",latitude:""},nearestHomeStations:[]}),f=i(15),j=i.n(f),w=i(63),k=["Aldgate East Rail Station","Aldgate Rail Station","Angel Rail Station","Baker Street Rail Station","Bank Rail Station","Monument Rail Station","Barbican Rail Station","Bayswater Rail Station","Blackfriars Rail Station","Bond Street Rail Station","Borough Rail Station","Cannon Street Rail Station","Chancery Lane Rail Station","Charing Cross Rail Station","City Thameslink Rail Station","Covent Garden Rail Station","Earl's Court Rail Station","Edgware Road Rail Station","Elephant And Castle Rail Station","Embankment Rail Station","Euston Square Rail Station","Euston Rail Station","Farringdon Rail Station","Fenchurch Street Rail Station","Gloucester Road Rail Station","Goodge Street Rail Station","Great Portland Street Rail Station","Green Park Rail Station","High Street Kensington Rail Station","Holborn Rail Station","Hoxton Rail Station","Hyde Park Corner Rail Station","King's Cross St Pancras Rail Station","King's Cross Rail Station","Knightsbridge Rail Station","Lambeth North Rail Station","Lancaster Gate Rail Station","Leicester Square Rail Station","Liverpool Street Rail Station","London Bridge Rail Station","London Cannon Street Rail Station","Mansion House Rail Station","Marble Arch Rail Station","Marylebone Rail Station","Moorgate Rail Station","Notting Hill Gate Rail Station","Old Street Rail Station","Oxford Circus Rail Station","Paddington Rail Station","Piccadilly Circus Rail Station","Pimlico Rail Station","Queensway Rail Station","Regent's Park Rail Station","Russell Square Rail Station","Shoreditch High Street Rail Station","Sloane Square Rail Station","South Kensington Rail Station","Southwark Rail Station","St James's Park Rail Station","St Pancras International Rail Station","St Paul's Rail Station","Temple Rail Station","Tottenham Court Road Rail Station","Tower Gateway Rail Station","Tower Hill Rail Station","Vauxhall Rail Station","Victoria Rail Station","Warren Street Rail Station","London Waterloo East Rail Station","London Waterloo Rail Station","Westminster Rail Station"],H=["Abbey Road Rail Station","All Saints Rail Station","Archway Rail Station","Arsenal Rail Station","Barons Court Rail Station","Battersea Park Rail Station","Belsize Park Rail Station","Bermondsey Rail Station","Bethnal Green Rail Rail Station","Bethnal Green Rail Station","Blackwall Rail Station","Bow Church Rail Station","Bow Road Rail Station","Brixton Rail Station","Brockley Rail Station","Bromley-By-Bow Rail Station","Brondesbury Park Rail Station","Brondesbury Rail Station","Caledonian Road And Barnsbury Rail Station","Caledonian Road Rail Station","Cambridge Heath Rail Station","Camden Road Rail Station","Camden Town Rail Station","Canada Water Rail Station","Canary Wharf DLR Rail Station","Canary Wharf Tube Rail Station","Canning Town Rail Station","Canonbury Rail Station","Chalk Farm Rail Station","Clapham Common Rail Station","Clapham High Street Rail Station","Clapham Junction Rail Station","Clapham North Rail Station","Clapham South Rail Station","Clapton Rail Station","Cutty Sark Rail Station","Dalston Junction Rail Station","Dalston Kingsland Rail Station","Denmark Hill Rail Station","Deptford Bridge Rail Station","Deptford Rail Station","Devons Road Rail Station","Drayton Park Rail Station","Earl's Court Rail Station","East Acton Rail Station","East Dulwich Rail Station","East India Rail Station","East Putney Rail Station","Elephant And Castle Rail Station","Elverson Road Rail Station","Essex Road Rail Station","Finchley Road And Frognal Rail Station","Finchley Road Rail Station","Finsbury Park Rail Station","Fulham Broadway Rail Station","Goldhawk Road Rail Station","Gospel Oak Rail Station","Greenwich Rail Station","Hackney Central Rail Station","Hackney Downs Rail Station","Hackney Wick Rail Station","Haggerston Rail Station","Hammersmith Rail Station","Hampstead Heath Rail Station","Hampstead Rail Station","Herne Hill Rail Station","Heron Quays Rail Station","Highbury And Islington Rail Station","Holland Park Rail Station","Holloway Road Rail Station","Homerton Rail Station","Hoxton Rail Station","Imperial Wharf Rail Station","Island Gardens Rail Station","Kennington Rail Station","Kensal Green Rail Station","Kensal Rise Rail Station","Kensington (Olympia) Rail Station","Kentish Town Rail Station","Kentish Town West Rail Station","Kilburn High Road Rail Station","Kilburn Park Rail Station","Kilburn Rail Station","Ladbroke Grove Rail Station","Langdon Park Rail Station","Latimer Road Rail Station","Lewisham Station","Limehouse Rail Station","London Fields Rail Station","Loughborough Junction Rail Station","Maida Vale Rail Station","Manor House Rail Station","Mile End Rail Station","Mornington Crescent Rail Station","Mudchute Rail Station","New Cross Gate Rail Station","New Cross ELL Rail Station","North Acton Rail Station","North Dulwich Rail Station","North Greenwich Rail Station","Notting Hill Gate Rail Station","Nunhead Rail Station","Oval Rail Station","Parsons Green Rail Station","Peckham Rye Rail Station","Poplar Rail Station","Pudding Mill Lane Rail Station","Putney Bridge Rail Station","Putney Rail Station","Queen's Park Rail Station","Queens Road Peckham Rail Station","Queenstown Road Battersea Rail Station","Ravenscourt Park Rail Station","Rectory Road Rail Station","Rotherhithe Rail Station","Royal Oak Rail Station","Shadwell Rail Station","Shepherd's Bush Market Rail Station","Shepherd's Bush Rail Rail Station","Shepherd's Bush Rail Station","South Bermondsey Rail Station","South Hampstead Rail Station","South Quay Rail Station","St John's Wood Rail Station","St Johns Rail Station","Stamford Brook Rail Station","Star Lane Rail Station","Stepney Green Rail Station","Stockwell Rail Station","Stoke Newington Rail Station","Stratford High Street Rail Station","Stratford International Rail Station","Stratford Rail Station","Surrey Quays Rail Station","Swiss Cottage Rail Station","Tufnell Park Rail Station","Turnham Green Rail Station","Upper Holloway Rail Station","Vauxhall Rail Station","Wandsworth Road Rail Station","Wandsworth Town Rail Station","Wapping Rail Station","Warwick Avenue Rail Station","West Brompton Rail Station","West Ham Rail Station","West Hampstead Rail Station","West India Quay Rail Station","West Kensington Rail Station","Westbourne Park Rail Station","Westferry Statio","White City Statio","Whitechapel Statio","Willesden Green Rail Station","Willesden Junction Rail Station","Wood Lane Rail Station"],O=["Abbey Road Rail Station","Acton Central Rail Station","Acton Mainline Rail Station","Acton Town Rail Station","Alexandra Palace Rail Station","Archway Rail Station","Balham Rail Station","Barnes Bridge Rail Station","Barnes Rail Station","Beckton Park Rail Station","Beckton Rail Station","Bellingham Rail Station","Blackheath Rail Station","Blackhorse Road Rail Station","Bounds Green Rail Station","Bowes Park Rail Station","Brent Cross Rail Station","Bromley-By-Bow Rail Station","Bruce Grove Rail Station","Canning Town Rail Station","Catford Bridge Rail Station","Catford Rail Station","Charlton Rail Station","Chiswick Park Rail Station","Chiswick Rail Station","Clapham South Rail Station","Colliers Wood Rail Station","Cricklewood Rail Station","Crofton Park Rail Station","Crouch Hill Rail Station","Crystal Palace Rail Station","Custom House Rail Station","Cutty Sark Rail Station","Cyprus Rail Station","Deptford Bridge Rail Station","Dollis Hill Rail Station","Ealing Broadway Rail Station","Ealing Common Rail Station","Earlsfield Rail Station","East Finchley Rail Station","East Ham Rail Station","East India Rail Station","East Putney Rail Station","Elverson Road Rail Station","Forest Gate Rail Station","Forest Hill Rail Station","Gallions Reach Rail Station","Gipsy Hill Rail Station","Golders Green Rail Station","Greenwich Rail Station","Gunnersbury Rail Station","Hampstead Rail Station","Hanger Lane Rail Station","Harlesden Rail Station","Harringay Green Lanes Rail Station","Harringay Rail Station","Haydons Road Rail Station","Hendon Central Rail Station","Hendon Rail Station","Herne Hill Rail Station","Highgate Rail Station","Hither Green Rail Station","Honor Oak Park Rail Station","Hornsey Rail Station","Kew Bridge Rail Station","Kew Gardens Rail Station","Kidbrooke Rail Station","King George V Rail Station","Ladywell Rail Station","Lea Bridge Rail Station","Lee Station","Lewisham Rail Station","Leyton Midland Road Rail Station","Leyton Rail Station","Leytonstone High Road Rail Station","Leytonstone Rail Station","London City Airport Rail Station","Manor House Rail Station","Manor Park Rail Station","Maryland Rail Station","Maze Hill Rail Station","Mitcham Eastfields Rail Station","Mortlake Rail Station","Neasden Rail Station","Norbury Rail Station","North Acton Rail Station","North Dulwich Rail Station","North Ealing Rail Station","North Greenwich Rail Station","North Sheen Rail Station","Northfields Rail Station","Northumberland Park Rail Station","Park Royal Rail Station","Plaistow Rail Station","Pontoon Dock Rail Station","Prince Regent Rail Station","Pudding Mill Lane Rail Station","Putney Rail Station","Royal Albert Rail Station","Royal Victoria Rail Station","Seven Sisters Rail Station","Silver Street Rail Station","South Acton Rail Station","South Ealing Rail Station","South Tottenham Rail Station","South Wimbledon Rail Station","Southfields Rail Station","St James Street Rail Station","Stamford Hill Rail Station","Star Lane Rail Station","Stonebridge Park Rail Station","Stratford High Street Rail Station","Stratford International Rail Station","Stratford Rail Station","Streatham Common Rail Station","Streatham Hill Rail Station","Streatham Rail Station","Sydenham Hill Rail Station","Sydenham Rail Station","Tooting Bec Rail Station","Tooting Broadway Rail Station","Tooting Rail Station","Tottenham Hale Rail Station","Tulse Hill Rail Station","Turnham Green Rail Station","Turnpike Lane Rail Station","Upton Park Rail Station","Walthamstow Central Rail Station","Walthamstow Queens Road Rail Station","Wandsworth Common Rail Station","Wanstead Park Rail Station","West Acton Rail Station","West Dulwich Rail Station","West Ealing Rail Station","West Ham Rail Station","West Norwood Rail Station","West Silvertown Rail Station","Westcombe Park Rail Station","White Hart Lane Rail Station","Willesden Green Rail Station","Willesden Junction Rail Station","Wimbledon Chase Rail Station","Wimbledon Park Rail Station","Wimbledon Rail Station","Wood Green Rail Station","Woodgrange Park Rail Station","Woolwich Dockyard Rail Station"],v=["Alperton Rail Station","Anerley Rail Station","Arnos Grove Rail Station","Barking Rail Station","Barkingside Rail Station","Beckenham Hill Rail Station","Beckenham Junction Rail Station","Birkbeck Rail Station","Boston Manor Rail Station","Bounds Green Rail Station","Bowes Park Rail Station","Brentford Rail Station","Bromley North Rail Station","Burnt Oak Rail Station","Castle Bar Park Rail Station","Chigwell Rail Station","Clock House Rail Station","Colindale Rail Station","Crystal Palace Rail Station","Drayton Green Rail Station","East Ham Rail Station","Edmonton Green Rail Station","Elmers End Rail Station","Elmstead Woods Rail Station","Eltham Rail Station","Fairlop Rail Station","Falconwood Rail Station","Finchley Central Rail Station","Gants Hill Rail Station","Goodmayes Rail Station","Grange Hill Rail Station","Greenford Rail Station","Grove Park Rail Station","Hackbridge Rail Station","Hainault Rail Station","Hanwell Rail Station","Hendon Central Rail Station","Hendon Rail Station","Highams Park Rail Station","Hounslow Central Rail Station","Hounslow East Rail Station","Ilford Rail Station","Isleworth Rail Station","Kent House Rail Station","Kenton Rail Station","Kew Gardens Rail Station","Kingsbury Rail Station","Leytonstone Rail Station","Lower Sydenham Rail Station","Malden Manor Rail Station","Manor Park Rail Station","Meridian Water Rail Station","Mill Hill Broadway Rail Station","Mill Hill East Rail Station","Mitcham Junction Rail Station","Morden South Rail Station","Morden Rail Station","Motspur Park Rail Station","Mottingham Rail Station","New Beckenham Rail Station","New Eltham Rail Station","New Malden Rail Station","New Southgate Rail Station","Newbury Park Rail Station","North Wembley Rail Station","Northwick Park Rail Station","Norwood Junction Rail Station","Oakleigh Park Rail Station","Osterley Rail Station","Palmers Green Rail Station","Penge East Rail Station","Penge West Rail Station","Perivale Rail Station","Plumstead Rail Station","Preston Road Rail Station","Queensbury Rail Station","Ravensbourne Rail Station","Raynes Park Rail Station","Redbridge Rail Station","Richmond Rail Station","Roding Valley Rail Station","Selhurst Rail Station","Seven Kings Rail Station","Shortlands Rail Station","Snaresbrook Rail Station","South Greenford Rail Station","South Kenton Rail Station","South Merton Rail Station","South Wimbledon Rail Station","South Woodford Rail Station","Southall Rail Station","Southgate Rail Station","St Helier Rail Station","St Margarets Rail Station","Sudbury And Harrow Road Rail Station","Sudbury Hill Harrow Rail Station","Sudbury Hill Rail Station","Sudbury Town Rail Station","Sundridge Park Rail Station","Sutton Common Rail Station","Syon Lane Rail Station","Thornton Heath Rail Station","Totteridge And Whetstone Rail Station","Upney Rail Station","Wanstead Rail Station","Welling Rail Station","Wembley Central Rail Station","Wembley Park Rail Station","Wembley Stadium Rail Station","West Finchley Rail Station","Winchmore Hill Rail Station","Wood Street Rail Station","Woodford Rail Station","Woodgrange Park Rail Station","Woodside Park Rail Station","Woolwich Arsenal Rail Station","Worcester Park Rail Station"],P=["Albany Park Rail Station","Becontree Rail Station","Belmont Rail Station","Belvedere Rail Station","Berrylands Rail Station","Bexleyheath Rail Station","Bickley Rail Station","Brimsdown Rail Station","Bromley South Rail Station","Buckhurst Hill Rail Station","Bush Hill Park Rail Station","Canons Park Rail Station","Carshalton Beeches Rail Station","Carshalton Rail Station","Chadwell Heath Rail Station","Cheam Rail Station","Chingford Rail Station","Chislehurst Rail Station","Cockfosters Rail Station","Dagenham Dock Rail Station","Dagenham East Rail Station","Dagenham Heathway Rail Station","East Croydon Rail Station","Eastcote Rail Station","Eden Park Rail Station","Edgware Rail Station","Enfield Chase Rail Station","Enfield Town Rail Station","Gordon Hill Rail Station","Grange Park Rail Station","Harrow And Wealdstone Rail Station","Harrow-On-The-Hill Rail Station","Hatton Cross Rail Station","Hayes And Harlington Rail Station","Hayes Rail Station","Headstone Lane Rail Station","High Barnet Rail Station","Hounslow Rail Station","Hounslow West Rail Station","New Barnet Rail Station","Norbiton Rail Station","North Harrow Rail Station","Northolt Park Rail Station","Northolt Rail Station","Oakwood Rail Station","Petts Wood Rail Station","Pinner Rail Station","Ponders End Rail Station","Rayners Lane Rail Station","Ruislip Gardens Rail Station","Sidcup Rail Station","South Croydon Rail Station","South Harrow Rail Station","South Ruislip Rail Station","Southbury Rail Station","Stanmore Rail Station","Stoneleigh Rail Station","Strawberry Hill Rail Station","Sutton Rail Station","Tolworth Rail Station","Twickenham Rail Station","Waddon Rail Station","Wallington Rail Station","West Croydon Rail Station","West Harrow Rail Station","West Sutton Rail Station","West Wickham Rail Station","Whitton Rail Station"],T=["Banstead Rail Station","Barnehurst Rail Station","Bexley Rail Station","Caterham Rail Station","Chelsfield Rail Station","Chessington North Rail Station","Chessington South Rail Station","Chipstead Rail Station","Coulsdon South Rail Station","Coulsdon Town Rail Station","Crayford Rail Station","Crews Hill Rail Station","Debden Rail Station","Elm Park Rail Station","Elstree And Borehamwood Rail Station","Emerson Park Rail Station","Enfield Lock Rail Station","Epping Rail Station","Epsom Downs Rail Station","Erith Rail Station","Ewell East Rail Station","Ewell West Rail Station","Feltham Rail Station","Fulwell Rail Station","Gidea Park Rail Station","Hadley Wood Rail Station","Hampton Court Rail Station","Hampton Rail Station","Hampton Wick Rail Station","Harold Wood Rail Station","Hatch End Rail Station","Hatton Cross Rail Station","Heathrow Terminal 4 Rail Station","Heathrow Terminal 5 Rail Station","Heathrow Terminals 1, 2, And 3 Rail Station","Hillingdon Rail Station","Hornchurch Rail Station","Ickenham Rail Station","Kenley Rail Station","Kingston Rail Station","Kingswood Rail Station","Knockholt Rail Station","Loughton Rail Station","Moor Park Rail Station","Northwood Hills Rail Station","Northwood Rail Station","Orpington Rail Station","Purley Oaks Rail Station","Purley Rail Station","Rainham Rail Station","Reedham Rail Station","Riddlesdown Rail Station","Romford Rail Station","Ruislip Manor Rail Station","Ruislip Rail Station","Sanderstead Rail Station","Slade Green Rail Station","St Mary Cray Rail Station","Surbiton Rail Station","Tadworth Rail Station","Tattenham Corner Rail Station","Teddington Rail Station","Thames Ditton Rail Station","Theydon Bois Rail Station","Turkey Street Rail Station","Upminster Bridge Rail Station","Upminster Rail Station","Upper Warlingham Rail Station","Uxbridge Rail Station","West Drayton Rail Station","West Ruislip Rail Station","Whyteleafe South Rail Station","Whyteleafe Rail Station","Woodmansterne Rail Station"],B=["Carpenders Park Rail Station","Chorleywood Rail Station","Croxley Rail Station","Moor Park Rail Station","Rickmansworth Rail Station","Theobalds Grove Rail Station","Waltham Cross Rail Station","Watford Rail Station"],W=["Bushey Rail Station","Chalfont And Latimer Rail Station","Cheshunt Rail Station","Dartford Rail Station","Swanley Rail Station","Watford High Street Rail Station"],L=["Amersham Rail Station","Brentwood Rail Station","Chesham Rail Station","Epsom Rail Station"];function x(t){return N.apply(this,arguments)}function N(){return(N=Object(C.a)(b.a.mark((function t(a){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:!0===Object(w.postcodeValidator)(a,"GB")||(alert("The postcode: ".concat(a," does not exist. Please enter a valid postcode")),y.show=!1);case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function E(){return G.apply(this,arguments)}function G(){return(G=Object(C.a)(b.a.mark((function t(){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=p.homePostCode,j.a.get("https://api.postcodes.io/postcodes/".concat(a)).then((function(t){y.homeLocation=t.data.result.admin_district,p.homeCoords.latitude=t.data.result.latitude,p.homeCoords.longitude=t.data.result.longitude})).catch((function(t){return console.log(t)}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var D=function(){p.loading=!0,setTimeout((function(){setTimeout((function(){!function(){var t=y.journeyData[0].legs,a=t.filter((function(t){return"national-rail"===t.mode.id}));console.log(a[0].arrivalPoint.commonName),y.nearestHomeStation=a[0].arrivalPoint.commonName;var i=t.filter((function(t){return"national-rail"===t.mode.id}));console.log(i[i.length-1].departurePoint.commonName),y.nearestDestinationStation=i[i.length-1].departurePoint.commonName}()}),500),setTimeout((function(){var t;t=y.nearestHomeStation,L.find((function(a){return a===t}))?(console.log("zone 9"),y.homeFareZone=9):W.find((function(a){return a===t}))?(console.log("zone 8"),y.homeFareZone=8):B.find((function(a){return a===t}))?(console.log("zone 7"),y.homeFareZone=7):T.find((function(a){return a===t}))?(console.log("zone 6"),y.homeFareZone=6):P.find((function(a){return a===t}))?(console.log("zone 5"),y.homeFareZone=5):v.find((function(a){return a===t}))?(console.log("zone 4"),y.homeFareZone=4):O.find((function(a){return a===t}))?(console.log("zone 3"),y.homeFareZone=3):H.find((function(a){return a===t}))?(console.log("zone 2"),y.homeFareZone=2):k.find((function(a){return a===t}))?(console.log("zone 1"),y.homeFareZone=1):(console.warn("Unable to find zone based on location"),y.homeFareZone=0)}),100),setTimeout((function(){var t;t=y.nearestDestinationStation,L.find((function(a){return a===t}))?(console.log("zone 9"),y.destinationFareZone=9):W.find((function(a){return a===t}))?(console.log("zone 8"),y.destinationFareZone=8):B.find((function(a){return a===t}))?(console.log("zone 7"),y.destinationFareZone=7):T.find((function(a){return a===t}))?(console.log("zone 6"),y.destinationFareZone=6):P.find((function(a){return a===t}))?(console.log("zone 5"),y.destinationFareZone=5):v.find((function(a){return a===t}))?(console.log("zone 4"),y.destinationFareZone=4):O.find((function(a){return a===t}))?(console.log("zone 3"),y.destinationFareZone=3):H.find((function(a){return a===t}))?(console.log("zone 2"),y.destinationFareZone=2):k.find((function(a){return a===t}))?(console.log("zone 1"),y.destinationFareZone=1):(console.warn("Unable to find zone based on location"),y.destinationFareZone=0)}),100),setTimeout((function(){var t,a;t=y.homeFareZone,a=y.destinationFareZone,y.trainTravelCost=1===t&&9===a||1===t&&8===a||1===t&&7===a?24.8:1===t&&6===a||1===t&&5===a?19.6:1===t&&4===a||1===t&&3===a||1===t&&2===a||1===t&&1===a||2===t&&4===a||2===t&&3===a?13.9:37.5,console.log(y.trainTravelCost)}),100),setTimeout((function(){p.loading=!1,y.show=!0}),100)}),4e3)},A=(i(161),i(0)),M=function(t){Object(R.a)(i,t);var a=Object(s.a)(i);function i(){return Object(r.a)(this,i),a.apply(this,arguments)}return Object(S.a)(i,[{key:"handleChange",value:function(t){var a=t.target,i=a.value,n=a.name,o=i;return p[n]=o,o}},{key:"handleSubmit",value:function(){var t=Object(C.a)(b.a.mark((function t(a){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E();case 2:j.a.get("https://api.tfl.gov.uk/Journey/JourneyResults/".concat(p.homePostCode,"/to/").concat(p.destinationPostCode,"&mode=walking,train&nationalSearch=true")).then((function(t){console.log(t),y.journeyData=t.data.journeys,y.trainTravelTime=t.data.journeys[0].duration})),a.preventDefault(),x(p.destinationPostCode,"GB"),x(p.homePostCode,"GB"),D();case 7:case"end":return t.stop()}}),t)})));return function(a){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(A.jsx)("div",{className:"input-form",children:Object(A.jsxs)("form",{className:"form-fields",onSubmit:Object(c.f)(this.handleSubmit),children:[Object(A.jsx)("label",{className:"label-name",children:Object(A.jsx)("span",{className:"content-name",children:"Daily Travel Spend Budget \ud83d\udcb0 \ud83d\udcc8"})}),Object(A.jsx)("input",{className:"input-number",type:"number",name:"dailyTravelSpend",autoComplete:"off",value:this.input,onChange:Object(c.f)(this.handleChange),label:"DAILY TRAVEL SPEND",required:!0}),Object(A.jsx)("label",{children:"Daily Travel Time Budget \ud83d\ude82 \u23f1\ufe0f"}),Object(A.jsx)("input",{className:"input-number",type:"number",name:"dailyTravelTime",autoComplete:"off",value:this.input,onChange:Object(c.f)(this.handleChange),label:"DAILY TRAVEL TIME",required:!0}),Object(A.jsx)("label",{children:"Destination Postcode \ud83c\udfe2"}),Object(A.jsx)("input",{className:"input-text",type:"text",name:"destinationPostCode",value:this.input,onChange:Object(c.f)(this.handleChange),label:"DESTINATION POST CODE",required:!0}),Object(A.jsx)("label",{children:"New Home Postcode \ud83c\udfe1"}),Object(A.jsx)("input",{className:"input-text",type:"text",name:"homePostCode",value:this.input,onChange:Object(c.f)(this.handleChange),label:"NEW HOME POSTCODE",required:!0}),Object(A.jsx)("input",{className:"submit-button",type:"submit",value:"SUBMIT"})]})})}}]),i}(n.Component),F=Object(d.a)(M),K=(i(163),function(){return Object(A.jsxs)("div",{className:"lds-default",children:[Object(A.jsx)("div",{}),Object(A.jsx)("div",{}),Object(A.jsx)("div",{}),Object(A.jsx)("div",{}),Object(A.jsx)("div",{}),Object(A.jsx)("div",{}),Object(A.jsx)("div",{}),Object(A.jsx)("div",{}),Object(A.jsx)("div",{}),Object(A.jsx)("div",{}),Object(A.jsx)("div",{}),Object(A.jsx)("div",{})]})}),Z=(i(164),Object(d.a)((function(t){return Object(A.jsx)("div",{className:"travel-list-item",children:y.show?Object(A.jsx)("div",{className:"list-item",children:Object(A.jsxs)("div",{className:"location-details",children:[Object(A.jsxs)("h3",{className:"option-bold",style:p.loading?{opacity:.1}:null,children:["Location: ",t.homeLocation]}),Object(A.jsxs)("span",{className:"option",style:p.loading?{opacity:.1}:null,children:["Train travel time: ",t.trainTime," mins"]}),Object(A.jsxs)("span",{className:"option",style:p.loading?{opacity:.1}:null,children:["Train travel cost: \xa3",t.trainCost]}),Object(A.jsx)("div",{className:"loader ",children:p.loading?Object(A.jsx)(K,{}):null})]})}):null})}))),z=(i(165),i(166),Object(d.a)((function(t){return Object(A.jsxs)("div",{className:"location-details",children:[Object(A.jsxs)("span",{className:"option-bold",children:["Location: ",t.location]}),Object(A.jsxs)("span",{className:"option",children:["Train travel time:",Object(A.jsxs)("span",{style:m.myList[t.id].lowerValue?{color:"#5CD85A"}:null|m.myList[t.id].higherValue?{color:"#DF362D"}:null,children:[" ",t.trainTime," mins"]})]}),Object(A.jsxs)("span",{className:"option",children:["Train travel cost:",Object(A.jsxs)("span",{style:m.myList[t.id].lowerCost?{color:"#5CD85A"}:null|m.myList[t.id].higherCost?{color:"#DF362D"}:null,children:[" \xa3",t.trainCost]})]})]})}))),I=function(t){Object(R.a)(i,t);var a=Object(s.a)(i);function i(){return Object(r.a)(this,i),a.apply(this,arguments)}return Object(S.a)(i,[{key:"render",value:function(){return console.log(m.myList),Object(A.jsx)("div",{className:"list-item-container",children:m.myList.map((function(t,a){return Object(A.jsxs)("div",{className:"list-item",children:[Object(A.jsx)(z,{location:t.homeLocation,trainTime:t.trainTravelTime,trainCost:t.trainTravelCost.toFixed(2),carTime:t.dailyCarTime,carCost:t.dailyCarSpend,id:a}),Object(A.jsx)("span",{className:"cross",onClick:function(){return m.myList.splice(a,1)},children:"\xd7"})]},"myList".concat(a))}))})}}]),i}(n.Component),V=Object(d.a)(I),J=function(t){Object(R.a)(i,t);var a=Object(s.a)(i);function i(){return Object(r.a)(this,i),a.apply(this,arguments)}return Object(S.a)(i,[{key:"pushToMyList",value:function(t){var a;Object(c.f)(m.myList.push(h()(t))),a=m.myList.length-1,p.dailyTravelTime>=m.myList[a].trainTravelTime?(m.myList[a].lowerValue=!0,m.myList[a].higherValue=!1):p.dailyTravelTime<m.myList[a].trainTravelTime&&(m.myList[a].lowerValue=!1,m.myList[a].higherValue=!0),p.dailyTravelSpend>=m.myList[a].trainTravelCost?(m.myList[a].lowerCost=!0,m.myList[a].higherCost=!1):p.dailyTravelSpend<m.myList[a].trainTravelCost&&(m.myList[a].lowerCost=!1,m.myList[a].higherCost=!0)}},{key:"render",value:function(){var t=this;return Object(A.jsx)("div",{children:Object(A.jsxs)("div",{className:"home-grid",children:[Object(A.jsxs)("div",{className:"your-details",children:[Object(A.jsx)("h2",{children:"YOUR DETAILS"}),Object(A.jsx)(F,{}),y.journeyData.length?Object(A.jsx)(Z,{homeLocation:y.homeLocation,trainTime:y.trainTravelTime,trainCost:y.trainTravelCost.toFixed(2),carTime:0,carCost:0}):null,y.show?Object(A.jsx)("button",{className:"add-to-list-button",onClick:Object(c.f)((function(){return t.pushToMyList(y)})),children:"ADD TO MY LIST"}):null]}),m.myList.length<=0?null:Object(A.jsxs)("div",{className:"my-list",children:[Object(A.jsx)("h2",{children:"MY LIST"}),Object(A.jsx)(V,{})]})]})})}}]),i}(n.Component),U=Object(d.a)(J),Q=(i(167),i.p+"static/media/commuter-calculator-logo-green.fbbabbee.png"),q=function(){return Object(A.jsx)("div",{className:"logo-container",children:Object(A.jsx)("img",{className:"logo",alt:"logo",src:Q})})};var Y=function(){return Object(A.jsxs)("div",{className:"App",children:[Object(A.jsx)(q,{}),Object(A.jsx)(U,{})]})};l.a.render(Object(A.jsx)(o.a.StrictMode,{children:Object(A.jsx)(Y,{})}),document.getElementById("root"))},68:function(t,a,i){},69:function(t,a,i){}},[[168,1,2]]]);
//# sourceMappingURL=main.d71b6d5c.chunk.js.map