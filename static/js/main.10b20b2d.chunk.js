(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(20),s=a(26),i=a.n(s);t.a=function(e){return o.a.createElement("div",{className:i.a.nav},o.a.createElement("div",{className:i.a.block},"logo"),o.a.createElement("div",{className:i.a.block},o.a.createElement(r.b,{className:i.a.items,to:"/main"},"\u0413\u043e\u043b\u043e\u0432\u043d\u0430"),o.a.createElement(r.b,{className:i.a.items,to:"/avtor"},"\u041e\u0431 \u0430\u0432\u0442\u043e\u0440\u0435"),o.a.createElement(r.b,{className:i.a.items,to:"/login"},"\u0423\u0432\u0456\u0439\u0442\u0438")))}},103:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(108),s=a(235),i=a(6),l=a(20),d=Object(s.a)({form:"login"})((function(e){return o.a.createElement("form",{onSubmit:e.handleSubmit,action:""},o.a.createElement("label",{htmlFor:""},"\u0414\u043e\u0431\u0440\u043e\u0433\u043e \u0434\u043d\u044f \u0432\u0432\u0435\u0434\u0456\u0434\u044c \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430:"),o.a.createElement("br",null),o.a.createElement("label",{htmlFor:""}," \u041b\u043e\u0433\u0456\u043d    "),o.a.createElement(r.a,{name:"name",component:"input",type:"text"}),o.a.createElement("br",null),o.a.createElement("label",{htmlFor:""}," \u041f\u0430\u0440\u043e\u043b\u044c  "),o.a.createElement(r.a,{name:"password",component:"input",type:"password"}),o.a.createElement("br",null),o.a.createElement("button",null,"\u0423\u0432\u0456\u0439\u0442\u0438"))}));t.a=function(e){return e.isAuth?o.a.createElement(i.a,{to:"/profile"}):o.a.createElement("div",null,o.a.createElement(d,Object.assign({onSubmit:function(e){console.log(e)}},e)),o.a.createElement(l.b,{to:"/signup"},"\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044f"))}},106:function(e,t,a){"use strict";var n=a(101),o=a(102),r=a(107),s=a(104),i=a(0),l=a.n(i),d=a(19),m=a(105),c=a(22),h=(a(17),a(27)),u=a.n(h),y=a(32),p=function(e){var t=Object(i.useState)([{lat:"",lng:""}]),a=Object(c.a)(t,2),n=a[0],o=a[1],r=Object(i.useState)({lat:"",lng:""}),s=Object(c.a)(r,2),d=s[0],h=s[1],p=Object(i.useState)(14),g=Object(c.a)(p,2),f=g[0],b=g[1],w=Object(i.useState)(!1),v=Object(c.a)(w,2),k=v[0],S=v[1],E=Object(i.useState)(!1),O=Object(c.a)(E,2),B=O[0],T=O[1],j=Object(i.useState)(!1),I=Object(c.a)(j,2),A=I[0],M=I[1],N=Object(i.useState)(!1),F=Object(c.a)(N,2),_=F[0],C=F[1];Object(i.useEffect)((function(){var t=e.state.lat,a=e.state.lng;h({lat:t,lng:a})}),[e.state.lat,e.state.lng]);var H=function(e){o(e)},z=function(t){switch(t.target.value){case"\u0420\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u0438":S(!0),T(!1),M(!1),C(!1);var a=e.Restaurants.restaurants.map((function(e){return e.latlng}));H(a);break;case"\u0410\u043f\u0442\u0435\u043a\u0438":T(!0),S(!1),M(!1),C(!1);break;case"\u0410\u0417\u0421":M(!0),S(!1),T(!1),C(!1);break;case"\u0428\u043a\u043e\u043b\u0438":C(!0),S(!1),T(!1),M(!1)}};return l.a.createElement("div",null,l.a.createElement(y.Map,{style:{width:"100%",height:"80%"},google:e.google,onClick:function(e,t,a){var o=a.latLng,r=a.latLng.lat(),s=a.latLng.lng(),i=Object(m.a)(n);i.push({lat:r,lng:s}),H(i),t.panTo(o)},zoom:f,center:{lat:d.lat,lng:d.lng}},n.map((function(e){return l.a.createElement(y.Marker,{name:"Current location",position:{lat:e.lat,lng:e.lng}})})),l.a.createElement(y.Marker,{name:"Current location",position:{lat:e.state.lat,lng:e.state.lng}})),l.a.createElement("div",{className:u.a.menu},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("input",{type:"button",className:u.a.but,onClick:z,value:"\u0420\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u0438"})),l.a.createElement("div",null,l.a.createElement("input",{type:"button",className:u.a.but,onClick:z,value:"\u0410\u043f\u0442\u0435\u043a\u0438"})),l.a.createElement("div",null,l.a.createElement("input",{type:"button",className:u.a.but,onClick:z,value:"\u0410\u0417\u0421"})),l.a.createElement("div",null,l.a.createElement("input",{type:"button",className:u.a.but,onClick:z,value:"\u0428\u043a\u043e\u043b\u0438"})),l.a.createElement("div",null,l.a.createElement("input",{type:"button",className:u.a.but,onClick:function(){var t=e.state.lat,a=e.state.lng;h({lat:t,lng:a})},value:"\u0413\u0434\u0435 \u044f"}))),_&&l.a.createElement("dl",null,l.a.createElement("dd",null,"\u0410\u043d\u0434\u0440\u0435\u0439 \u0413\u0430\u0439\u0434\u0443\u043b\u044f\u043d"),l.a.createElement("dd",null,"\u0410\u043b\u0435\u043a\u0441\u0435\u0439 \u0413\u0430\u0432\u0440\u0438\u043b\u043e\u0432"),l.a.createElement("dd",null,"\u0412\u0438\u0442\u0430\u043b\u0438\u0439 \u0413\u043e\u0433\u0443\u043d\u0441\u043a\u0438\u0439"),l.a.createElement("dd",null,"\u041c\u0430\u0440\u0438\u044f \u041a\u043e\u0436\u0435\u0432\u043d\u0438\u043a\u043e\u0432\u0430")),A&&l.a.createElement("dl",null,l.a.createElement("dd",null,"\u0410\u043d\u0434\u0440\u0435\u0439 \u0413\u0430\u0439\u0434\u0443\u043b\u044f\u043d"),l.a.createElement("dd",null,"\u0410\u043b\u0435\u043a\u0441\u0435\u0439 \u0413\u0430\u0432\u0440\u0438\u043b\u043e\u0432"),l.a.createElement("dd",null,"\u0412\u0438\u0442\u0430\u043b\u0438\u0439 \u0413\u043e\u0433\u0443\u043d\u0441\u043a\u0438\u0439"),l.a.createElement("dd",null,"\u041c\u0430\u0440\u0438\u044f \u041a\u043e\u0436\u0435\u0432\u043d\u0438\u043a\u043e\u0432\u0430")),k&&l.a.createElement("select",{onChange:function(t){e.Restaurants.restaurants.forEach((function(e){var a;t.target.value===e.name&&(a=e.latlng,b(25),h(a))}))}},e.Restaurants.restaurants.map((function(e){return l.a.createElement("option",{value:e.name},e.name)}))),B&&l.a.createElement("dl",null,l.a.createElement("dd",null,"\u0410\u043d\u0434\u0440\u0435\u0439 \u0413\u0430\u0439\u0434\u0443\u043b\u044f\u043d"),l.a.createElement("dd",null,"\u0410\u043b\u0435\u043a\u0441\u0435\u0439 \u0413\u0430\u0432\u0440\u0438\u043b\u043e\u0432"),l.a.createElement("dd",null,"\u0412\u0438\u0442\u0430\u043b\u0438\u0439 \u0413\u043e\u0433\u0443\u043d\u0441\u043a\u0438\u0439"),l.a.createElement("dd",null,"\u041c\u0430\u0440\u0438\u044f \u041a\u043e\u0436\u0435\u0432\u043d\u0438\u043a\u043e\u0432\u0430"))))},g=function(e){Object(r.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(n.a)(this,a);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={lat:"",lng:""},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;navigator.geolocation.getCurrentPosition((function(t){var a=t.coords;e.setState({lat:a.latitude}),e.setState({lng:a.longitude})}),(function(e){console.warn("ERROR(".concat(e.code,"): ").concat(e.message))}))}},{key:"render",value:function(){return l.a.createElement(p,Object.assign({},this.props,{state:this.state}))}}]),a}(l.a.Component),f=Object(y.GoogleApiWrapper)({apiKey:"AIzaSyAOkLBGP6CKS5ac2P2ect_cabZDQjRZf7Q"})(g);t.a=Object(d.b)((function(e){return{Bike_Shelters:e.Bike_Shelters,Restaurants:e.Restaurants}}),{})(f)},110:function(e,t,a){e.exports=a(234)},175:function(e,t,a){},177:function(e,t,a){},234:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(17),s=a.n(r),i=a(7),l=a(236),d={restaurants:[{id:1,name:"Mission Chinese Food",neighborhood:"Manhattan",photograph:"1.jpg",address:"171 E Broadway, New York, NY 10002",latlng:{lat:40.713829,lng:-73.989667},cuisine_type:"Asian",operating_hours:{Monday:"5:30 pm - 11:00 pm",Tuesday:"5:30 pm - 12:00 am",Wednesday:"5:30 pm - 12:00 am",Thursday:"5:30 pm - 12:00 am",Friday:"5:30 pm - 12:00 am",Saturday:"12:00 pm - 4:00 pm, 5:30 pm - 12:00 am",Sunday:"12:00 pm - 4:00 pm, 5:30 pm - 11:00 pm"},reviews:[{name:"Steve",date:"October 26, 2016",rating:4,comments:"Mission Chinese Food has grown up from its scrappy Orchard Street days into a big, two story restaurant equipped with a pizza oven, a prime rib cart, and a much broader menu. Yes, it still has all the hits \u2014 the kung pao pastrami, the thrice cooked bacon \u2014but chef/proprietor Danny Bowien and executive chef Angela Dimayuga have also added a raw bar, two generous family-style set menus, and showstoppers like duck baked in clay. And you can still get a lot of food without breaking the bank."},{name:"Morgan",date:"October 26, 2016",rating:4,comments:"This place is a blast. Must orders: GREEN TEA NOODS, sounds gross (to me at least) but these were incredible!, Kung pao pastrami (but you already knew that), beef tartare was a fun appetizer that we decided to try, the spicy ma po tofu SUPER spicy but delicous, egg rolls and scallion pancake i could have passed on... I wish we would have gone with a larger group, so much more I would have liked to try!"},{name:"Jason",date:"October 26, 2016",rating:3,comments:"I was VERY excited to come here after seeing and hearing so many good things about this place. Having read much, I knew going into it that it was not going to be authentic Chinese. The place was edgy, had a punk rock throwback attitude, and generally delivered the desired atmosphere. Things went downhill from there though. The food was okay at best and the best qualities were easily overshadowed by what I believe to be poor decisions by the kitchen staff."}]},{id:2,name:"Emily",neighborhood:"Brooklyn",photograph:"2.jpg",address:"919 Fulton St, Brooklyn, NY 11238",latlng:{lat:40.683555,lng:-73.966393},cuisine_type:"Pizza",operating_hours:{Monday:"5:30 pm - 11:00 pm",Tuesday:"5:30 pm - 11:00 pm",Wednesday:"5:30 pm - 11:00 pm",Thursday:"5:30 pm - 11:00 pm",Friday:"5:30 pm - 11:00 pm",Saturday:"5:00 pm - 11:30 pm",Sunday:"12:00 pm - 3:00 pm, 5:00 pm - 11:00 pm"},reviews:[{name:"Steph",date:"October 26, 2016",rating:4,comments:"Five star food, two star atmosphere. I would definitely get takeout from this place - but dont think I have the energy to deal with the hipster ridiculousness again. By the time we left the wait was two hours long."},{name:"Steve",date:"October 26, 2016",rating:4,comments:"This cozy Clinton Hill restaurant excels at both straightforward and unusual wood-fired pizzas. If you want a taste of the latter, consider ordering the Emily, which is topped with mozzarella, pistachios, truffled sottocenere cheese, and honey. The menu includes salads and a handful of starters, as well as a burger that some meat connoisseurs consider to be among the best in the city."},{name:"Sam",date:"October 26, 2016",rating:5,comments:"5 star atmosphere as it is very cozy with great staff. 5 star food as their Emmy burger is outrageously good. and its on a pretzel bun.. Too juicy for its own good and downright addicting. Also try the Colony pizza. Many others looked like worth competitors, but the Colony really found its way to my heart. when you start with a great crust, top it with top notch cheese and sauce, you've got a winner. But, if you go a step further and add the salty from the pepperoni, the sweet from the honey, and the spicy from the chili oil.... your mouth is confused and happy at the same time."}]},{id:3,name:"Kang Ho Dong Baekjeong",neighborhood:"Manhattan",photograph:"3.jpg",address:"1 E 32nd St, New York, NY 10016",latlng:{lat:40.747143,lng:-73.985414},cuisine_type:"Asian",operating_hours:{Monday:"11:30 am - 2:00 am",Tuesday:"11:30 am - 2:00 am",Wednesday:"11:30 am - 2:00 am",Thursday:"11:30 am - 2:00 am",Friday:"11:30 am - 6:00 am",Saturday:"11:30 am - 6:00 am",Sunday:"11:30 am - 2:00 am"},reviews:[{name:"Steve",date:"October 26, 2016",rating:4,comments:"The tables at this 32nd Street favorite are outfitted with grills for cooking short ribs, brisket, beef tongue, rib eye, and pork jowl. The banchan plates are uniformly good, and Deuki Hong\u2019s menu also includes winning dishes like stir-fried squid noodles, kimchi stew, and seafood pancakes. If it\u2019s available, make sure to order the kimchi and rice \u201clunchbox.\u201d Baekjeong is a great place for large groups and birthday parties."},{name:"ZS",date:"October 26, 2016",rating:5,comments:"I've been to Korea before and many other Korean BBQ places. We had the regular pork belly and a beef (forgot which cut) and a seafood tofu soup. Two meat and a soup was just prefect for the two of us. We could have done one meat and one soup. The portions of the meat are great! The beef was juicy, tender and so good. The sides were excellent. "},{name:"Emily",date:"October 26, 2016",rating:2,comments:"MEH. I've tried their Jersey location as well but Kang Ho Dong meat quality is severely decreasing. A Korean bbq place with whatever meat? I think NOT!"}]},{id:4,name:"Katz's Delicatessen",neighborhood:"Manhattan",photograph:"4.jpg",address:"205 E Houston St, New York, NY 10002",latlng:{lat:40.722216,lng:-73.987501},cuisine_type:"American",operating_hours:{Monday:"8:00 am - 10:30 pm",Tuesday:"8:00 am - 10:30 pm",Wednesday:"8:00 am - 10:30 pm",Thursday:"8:00 am - 2:30 am",Friday:"8:00 am - Sat",Saturday:"Open 24 hours",Sunday:"Sat - 10:30 pm"},reviews:[{name:"Steve",date:"October 26, 2016",rating:5,comments:"In 127 years, little has changed at Katz's. It remains one of New York's \u2014 and the country's \u2014 essential Jewish delicatessens. Every inch of the massive Lower East Side space smells intensely of pastrami and rye loaves. The sandwiches are massive, so they are best when shared. Order at the counter, and don't forget to tip your slicer \u2014 your sandwich will be better for it."},{name:"Allen",date:"October 26, 2016",rating:5,comments:"If I lived in NY and got diabetes from eating here every single time I ate, I would do it over and over and over again just for that first bite. These guys know how to make a sandwich. The heart attack comes free of charge! Came by while I was visiting NYC. First pit-stop when I come back :)!"},{name:"David",date:"October 26, 2016",rating:2,comments:"Ok so four of us came. One more later who didn't order becauase it's so expensive and simple. Seriously, a bunch of meat albeit you can sample beforehand on rye/white/wheat bread. Cheese extra. Pickles free, you can just ask them at the pickup counter. But seriously 20 bucks gone for an non-flavored half sandwich. And a line that is long, especially if you want seating. I'm down to just take a quick look where Sally and Harry sat and leave to the other delis all around NYC. Oh and they accept Samsung pay."}]},{id:5,name:"Roberta's Pizza",neighborhood:"Brooklyn",photograph:"5.jpg",address:"261 Moore St, Brooklyn, NY 11206",latlng:{lat:40.705089,lng:-73.933585},cuisine_type:"Pizza",operating_hours:{Monday:"11:00 am - 12:00 am",Tuesday:"11:00 am - 12:00 am",Wednesday:"11:00 am - 12:00 am",Thursday:"11:00 am - 12:00 am",Friday:"11:00 am - 12:00 am",Saturday:"10:00 am - 12:00 am",Sunday:"10:00 am - 12:00 am"},reviews:[{name:"Steve",date:"October 26, 2016",rating:4,comments:"Roberta's is the epicenter of the modern Brooklyn food scene.The pizzas are fantastic, but the restaurant really flexes its muscles with the vegetable dishes. In addition to the pies, consider ordering the radishes, the romaine salad, the roasted beets, and some of the charcuterie."},{name:"Raymond",date:"October 26, 2016",rating:4,comments:"Roberta's, one of the better pizzas I have had in my life. Very trendy and hipsterish spot. Came here for lunch on a random weekday afternoon and when we arrived, there was a line forming already. The space is a bit cramped. You'll get to know your neighbors soon enough. The pizza is just delightful and delicious. It's a ncie plus that you get to see them firing up the pizzas in the corner. The major issue with Roberta's is the trek out to the Williamsburg/Bushwick."},{name:"Laurel",date:"October 26, 2016",rating:4,comments:"The pizza is fantastic, not THE best I've ever had, but would definitely go back since it has great food and great ambiance. Definitely worth going to. It has A LOT of hype in the New York food scene, and I question if it deserves all of it, but it's still a totally great spot to hit up when in the area!!"}]},{id:6,name:"Hometown BBQ",neighborhood:"Brooklyn",photograph:"6.jpg",address:"454 Van Brunt St, Brooklyn, NY 11231",latlng:{lat:40.674925,lng:-74.016162},cuisine_type:"American",operating_hours:{Monday:"Closed",Tuesday:"12:00 pm - 10:00 pm",Wednesday:"12:00 pm - 10:00 pm",Thursday:"12:00 pm - 10:00 pm",Friday:"12:00 pm - 11:00 pm",Saturday:"12:00 pm - 11:00 pm",Sunday:"12:00 pm - 9:00 pm"},reviews:[{name:"Steve",date:"October 26, 2016",rating:4,comments:"Barbecue aficionados agree that Billy Durney is cooking up some of the best Texas-style barbecue in the city. Straightforward classics like smoked brisket and baby back ribs are always a strong choice, but there are also options like pork belly tacos and a lamb belly banh mi. The space is sprawling in a way that feels like the real deal, and Durney himself can usually be found working the room, and keeping a watchful eye on the smoking meats. It's counter service only, and there's often a line, but for the scene and certainly for the meat, it's easily worth the trip to Red Hook."},{name:"Michelle",date:"October 26, 2016",rating:4,comments:"Overall, a great try of New York BBQ. The restaurant d\xe9cor is rustic with a good amount of seats to sit and enjoy the meal. I definitely would love to come back and try that monster of a beef rib!"},{name:"Ai-Mei",date:"October 26, 2016",rating:4,comments:"mmmmmm, what a gem this is in bklyn! I loveeee how soft their brisket is here. Their pork tacos are to die for, their different variety of ribs and lastly, their lamb is not gamey at all. Super wallet friendly for the amount they give you. I highly recommend this spot- after eating here, you can definitely walk over for Steve's key lime pies."}]},{id:7,name:"Superiority Burger",neighborhood:"Manhattan",photograph:"7.jpg",address:"430 E 9th St, New York, NY 10009",latlng:{lat:40.727397,lng:-73.983645},cuisine_type:"American",operating_hours:{Monday:"11:30 am - 10:00 pm",Tuesday:"Closed",Wednesday:"11:30 am - 10:00 pm",Thursday:"11:30 am - 10:00 pm",Friday:"11:30 am - 10:00 pm",Saturday:"11:30 am - 10:00 pm",Sunday:"11:30 am - 10:00 pm"},reviews:[{name:"Steve",date:"October 26, 2016",rating:4,comments:"Brooks Headley\u2019s tiny East Village cafe is so much more than a veggie burger spot \u2014 it's one of the best bang-for-your-buck restaurants in Lower Manhattan. Headley and his crew turn seasonal vegetables into delectable salads and riffs on American comfort food favorites. The specials menu changes daily, and the rest of the menu is constantly evolving. You can get a lot of food to eat here for under $15 per person."},{name:"Gabriel",date:"October 26, 2016",rating:5,comments:"I was turned on to this place following the glowing NYT review. Its near my area of the city so I figured why not go? Man they weren't kidding, Superiority Burger is probably the best vegetarian experience I've ever had!"},{name:"Shivi",date:"October 26, 2016",rating:4,comments:"Great flavors and very satisfying. Craving a sandwich, I stopped by on a Friday night with a vegetarian friend. Super small location with just a few seats inside. Ambiance is a bit industrial, good is definitely much more sophisticated than the look of the place! Ordered the superiority burger anda side of potato salad. The potato salad was very light and tasted clean ( less mayo, lots of dill and some cucumber) -- refreshing for a humid summer night! Sandwich was surprisingly delicious - it is very small ( funny allusion to a White Castle burger) but it packs a punch! Not only are there layers of flavors ( amazing sauces) but the party itself had a great texture Ahmed flavor-- well done and so wonderful! Will definitely stop by again for an overall amazing burger/sandwich. Staff was super nice and accommodating but not out of the way friendly."}]},{id:8,name:"The Dutch",neighborhood:"Manhattan",photograph:"8.jpg",address:"131 Sullivan St, New York, NY 10012",latlng:{lat:40.726584,lng:-74.002082},cuisine_type:"American",operating_hours:{Monday:"11:30 am - 3:00 pm, 5:30 pm - 11:00 pm",Tuesday:"11:30 am - 3:00 pm, 5:30 pm - 11:00 pm",Wednesday:"11:30 am - 3:00 pm, 5:30 pm - 11:00 pm",Thursday:"11:30 am - 3:00 pm, 5:30 pm - 11:00 pm",Friday:"11:30 am - 3:00 pm, 5:30 pm - 11:30 pm",Saturday:"10:00 am - 3:00 pm, 5:30 pm - 11:30 pm",Sunday:"10:00 am - 3:00 pm, 5:30 pm - 11:00 pm"},reviews:[{name:"Steve",date:"October 26, 2016",rating:4,comments:"Over the last five years, The Dutch has turned into the quintessential American restaurant that chef Andrew Carmellini and partners Josh Pickard and Luke Ostrom sought to evoke when it first opened. It\u2019s a great choice when you\u2019re craving a steak, a burger, or oysters, and the menu always includes plentiful seafood options as well as pastas. The Dutch is now an indelible part of the Soho landscape."},{name:"Loren",date:"October 26, 2016",rating:4,comments:"I randomly came here on a Saturday night. I was pleasantly surprised with the food and the service. We had the calamari and the ceviche with avocado, and then the catfish. Oh! Then we had the banana souffl\xe9 for dessert with ice cream. It was all delicious and well put together. Would love to eat here again."},{name:"Lori",date:"October 26, 2016",rating:4,comments:"Aside from the slightly claustrophobic dining area and the fact that you may have difficulty hearing your dining companion, I'd return to The Dutch without hesitation. The food is surprisingly well-executed and conceived, and our dinner service flowed smoothly without a hitch. Just make sure to get a reservation in advance, as I'm sure more than just a few other people will have the same idea."}]},{id:9,name:"Mu Ramen",neighborhood:"Queens",photograph:"9.jpg",address:"1209 Jackson Ave, Queens, NY 11101",latlng:{lat:40.743797,lng:-73.950652},cuisine_type:"Asian",operating_hours:{Monday:"5:00 pm - 10:00 pm",Tuesday:"5:00 pm - 10:00 pm",Wednesday:"5:00 pm - 10:00 pm",Thursday:"5:00 pm - 10:00 pm",Friday:"5:00 pm - 11:00 pm",Saturday:"5:00 pm - 11:00 pm",Sunday:"5:00 pm - 10:00 pm"},reviews:[{name:"Steve",date:"October 26, 2016",rating:4,comments:"Joshua Smookler\u2019s two-year-old ramen shop serves one of the best tonkotsu broths around. Beyond ramen, Mu also offers some high minded plates, like foie gras-stuffed chicken wings, as well as dry-aged Japanese Wagyu beef specials. Mu is just 10 short minutes away from Midtown via the 7-train."},{name:"Brittany",date:"October 26, 2016",rating:4,comments:"Overall, I would definitely recommend this place if you enjoy thick curly noodles with a thick, intense broth.  If you don't there are still other options but I can't vouch for those."},{name:"Sally",date:"October 26, 2016",rating:4,comments:"One of the tastiest and most unique ramen places I've been to in NYC, but also the priciest. I think overall its worth the try. Not an everyday casual ramen shop though."}]},{id:10,name:"Casa Enrique",neighborhood:"Queens",photograph:"10.jpg",address:"5-48 49th Ave, Queens, NY 11101",latlng:{lat:40.743394,lng:-73.954235},cuisine_type:"Mexican",operating_hours:{Monday:"5:00 pm - 12:00 am",Tuesday:"5:00 pm - 12:00 am",Wednesday:"5:00 pm - 12:00 am",Thursday:"5:00 pm - 12:00 am",Friday:"5:00 pm - 12:00 am",Saturday:"11:00 am - 12:00 am",Sunday:"11:00 am - 12:00 am"},reviews:[{name:"Steve",date:"October 26, 2016",rating:5,comments:"Head to this laid-back Long Island City restaurant for beef tongue tacos, chicken smothered in a heady mole sauce, and a monster crab tostada. New York's only Michelin-starred Mexican restaurant is an especially cool choice for lunch during the week or drinks after work. Eater critic Ryan Sutton awarded this restaurant two stars."},{name:"Rob",date:"October 26, 2016",rating:5,comments:"The hype was real. Please go. Get the ceviche. And the tres leches. You're welcome"},{name:"Jason",date:"October 26, 2016",rating:4,comments:"For a Michelin star restaurant, it's fairly priced and the food is fairly good. Started with a strawberry margarita which was good in flavor but not much alcohol. Had the chicken enchiladas with salsa verde and it was really good. Great balance in flavor and a good portion. Extra tasty with their hot sauces. My wife had the lamb but it was a bit too salty for our taste. Although, it was cooked very well and fell off the bone. The highlight of the night was the tres leches cake. Probably the best I've ever had to be honest. Not too sweet and very milky. Overall, one of my top 3 favorite Mexican in NY."}]}]},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;return t.type,e},c={type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[-73.952728,40.742458]},properties:{type:"Bike",name:"Jackson Avenue and 50 Avenue, Queens",styleUrl:"#style10",styleHash:"-46fc6717"}},{type:"Feature",geometry:{type:"Point",coordinates:[-73.990341,40.73695]},properties:{type:"Bike",name:"East 17 Street and Broadway, Manhattan",styleUrl:"#style10",styleHash:"-46fc6717"}},{type:"Feature",geometry:{type:"Point",coordinates:[-73.894196,40.86306]},properties:{type:"Bike",name:"East Kingsbridge Road and Briggs Avenue, Bronx",styleUrl:"#style10",styleHash:"-46fc6717"}},{type:"Feature",geometry:{type:"Point",coordinates:[-73.9814,40.689873]},properties:{type:"Bike",name:"Dekalb Avenue and Flatbush Avenue, Brooklyn",styleUrl:"#style10",styleHash:"-46fc6717"}},{type:"Feature",geometry:{type:"Point",coordinates:[-73.992767,40.74279]},properties:{type:"Bike",name:"West 23 Street and 6 Avenue, Manhattan",styleUrl:"#style10",styleHash:"-46fc6717"}},{type:"Feature",geometry:{type:"Point",coordinates:[-73.906067,40.849636]},properties:{type:"Bike",name:"Grand Concourse and East Tremont Avenue, Bronx",styleUrl:"#style10",styleHash:"-46fc6717"}},{type:"Feature",geometry:{type:"Point",coordinates:[-73.921471,40.766827]},properties:{type:"Bike",name:"31 Street and 30 Avenue, Queens",styleUrl:"#style10",styleHash:"-46fc6717"}},{type:"Feature",geometry:{type:"Point",coordinates:[-73.94445,40.714535]},properties:{type:"Bike",name:"Graham Avenue and Metropolitan Avenue, Brooklyn",styleUrl:"#style10",styleHash:"-46fc6717"}},{type:"Feature",geometry:{type:"Point",coordinates:[-73.824081,40.686161]},properties:{type:"Bike",name:"Lefferts Boulevard and Liberty Avenue, Queens",styleUrl:"#style10",styleHash:"-46fc6717"}},{type:"Feature",geometry:{type:"Point",coordinates:[-74.004272,40.654236]},properties:{type:"Bike",name:"4 Avenue and 36 Street, Brooklyn",styleUrl:"#style10",styleHash:"-46fc6717"}},{type:"Feature",geometry:{type:"Point",coordinates:[-73.95826,40.608791]},properties:{type:"Bike",name:"Kings Highway and East 15 Street, Brooklyn",styleUrl:"#style10",styleHash:"-46fc6717"}},{type:"Feature",geometry:{type:"Point",coordinates:[-73.993942,40.751404]},properties:{type:"Bike",name:"West 33 Street and 8 Avenue, Manhattan",styleUrl:"#style10",styleHash:"-46fc6717"}},{type:"Feature",geometry:{type:"Point",coordinates:[-73.998398,40.745289]},properties:{type:"Bike",name:"West 23 Street and 8 Avenue, Manhattan",styleUrl:"#style10",styleHash:"-46fc6717"}},{type:"Feature",geometry:{type:"Point",coordinates:[-73.981148,40.575638]},properties:{type:"Bike",name:"Surf Avenue and Stillwell Avenue, Brooklyn",styleUrl:"#style10",styleHash:"-46fc6717"}},{type:"Feature",geometry:{type:"Point",coordinates:[-73.990273,40.713943]},properties:{type:"Bike",name:"Rutgers Street and East Broadway, Manhattan",styleUrl:"#style10",styleHash:"-46fc6717"}},{type:"Feature",geometry:{type:"Point",coordinates:[-73.927322,40.865528]},properties:{type:"Bike",name:"Dyckman Street and Broadway, Manhattan",styleUrl:"#style10",styleHash:"-46fc6717"}},{type:"Feature",geometry:{type:"Point",coordinates:[-73.844688,40.720097]},properties:{type:"Bike",name:"71 Avenue and Austin Street, Forest Hills, Queens",styleUrl:"#style10",styleHash:"-46fc6717"}},{type:"Feature",geometry:{type:"Point",coordinates:[-74.169891,40.560261]},properties:{type:"Bike",name:"Eltingville Transit Center, Staten Island",styleUrl:"#style10",styleHash:"-46fc6717"}},{type:"Feature",geometry:{type:"Point",coordinates:[-74.066162,40.59052]},properties:{type:"Bike",name:"Father Capodanno Boulevard, Staten Island",styleUrl:"#style10",styleHash:"-46fc6717"}}]},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;return t.type,e},u=Object(i.b)({Bike_Shelters:h,Restaurants:m,form:l.a}),y=Object(i.c)(u);window.store=y;var p=y,g=(a(175),a(97));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f=a(19);s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f.a,{store:p},o.a.createElement(g.a,{state:p.getState()}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},26:function(e,t,a){e.exports={nav:"navbar_nav__3h6cN",items:"navbar_items__1e-Qz",block:"navbar_block__2k0gS"}},27:function(e,t,a){e.exports={menu:"main_menu__3rR6C",but:"main_but__3ik0j"}},97:function(e,t,a){"use strict";(function(e){var n=a(0),o=a.n(n),r=(a(177),a(98)),s=a(100),i=a(106),l=a(20),d=a(6),m=a(103);t.a=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(l.a,{basename:e.evn.PUBLIC_URL},o.a.createElement(d.a,{to:"/main"}),o.a.createElement(s.a,null),o.a.createElement(d.b,{path:"/avtor",render:function(){return o.a.createElement(r.a,null)}}),o.a.createElement(d.b,{path:"/main",render:function(){return o.a.createElement(i.a,null)}}),o.a.createElement(d.b,{path:"/login",render:function(){return o.a.createElement(m.a,null)}})))}}).call(this,a(176))},98:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(99),s=a.n(r);t.a=function(e){return o.a.createElement("div",{className:s.a.main})}},99:function(e,t,a){}},[[110,1,2]]]);
//# sourceMappingURL=main.10b20b2d.chunk.js.map